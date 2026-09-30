/*
 * app.js — Logika aplikasi memudahkan pembaca PGR
 * versi: 1.2
 * Lisensi: MIT
 * Repositori: https://github.com/andimgthub/platform-gotong-royong/
 */
(() => {
  'use strict';

  const $ = (sel) => document.querySelector(sel);

  const els = {
    viewHome:     $('#view-home'),
    viewReader:   $('#view-reader'),
    btnStart:     $('#btn-start'),
    btnHome:      $('#btn-home'),
    btnBack:      $('#btn-back'),
    btnToc:       $('#btn-toc'),
    btnTheme:     $('#btn-theme'),
    btnNext:      $('#btn-next'),
    docTitle:     $('#doc-title'),
    docVersion:   $('#doc-version'),
    docContent:   $('#doc-content'),
    tocOverlay:   $('#toc-overlay'),
    tocDrawer:    $('#toc-drawer'),
    tocList:      $('#toc-list'),
    btnTocClose:  $('#btn-toc-close'),
  };

  const state = {
    manifest: [],
    currentId: null,
    currentIndex: -1,
  };

  // Controller untuk membatalkan fetch dokumen yang sudah usang.
  let currentAbort = null;

  /* ---------- Theme ---------- */
  function currentTheme() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }
  function applyTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('pgr-theme', t); } catch (e) {}
    els.btnTheme.textContent = t === 'dark' ? '🌙' : '☀️';
  }
  function toggleTheme() {
    applyTheme(currentTheme() === 'dark' ? 'light' : 'dark');
  }

  /* ---------- Helpers ---------- */
  function safeDecode(s) {
    try { return decodeURIComponent(s); }
    catch (e) { return null; }
  }

  // Resolve path relatif terhadap path dokumen saat ini.
  // Contoh: base="master/PGR-MST-bag2.md", rel="../README.md" -> "README.md"
  function resolvePath(basePath, rel) {
    if (/^\//.test(rel)) return rel.replace(/^\/+/, '');
    const baseDir = basePath.split('/').slice(0, -1);
    const stack = baseDir.slice();
    const parts = rel.split('/');
    for (const p of parts) {
      if (p === '' || p === '.') continue;
      if (p === '..') stack.pop();
      else stack.push(p);
    }
    return stack.join('/');
  }

  // Fail-closed: kalau DOMPurify tidak tersedia, jangan render HTML mentah.
  function sanitizeHtml(html) {
    if (window.DOMPurify && typeof window.DOMPurify.sanitize === 'function') {
      try {
        return window.DOMPurify.sanitize(html, {
          USE_PROFILES: { html: true },
          FORBID_TAGS: ['style', 'form', 'input', 'button', 'iframe', 'object', 'embed'],
        });
      } catch (e) { /* fallthrough ke fail-closed */ }
    }
    console.error('DOMPurify tidak tersedia — konten tidak dirender.');
    const pre = document.createElement('pre');
    pre.textContent = 'Peringatan: sanitizer tidak tersedia. Konten tidak ditampilkan.';
    return pre.outerHTML;
  }

  /* ---------- Manifest ---------- */
  async function loadManifest() {
    try {
      const res = await fetch('web/files.json', { cache: 'default' });
      if (!res.ok) throw new Error('manifest ' + res.status);
      const data = await res.json();
      const raw = Array.isArray(data.documents) ? data.documents : [];
      // Validasi: buang entry yang tidak punya id atau path.
      state.manifest = raw.filter(
        (d) => d && typeof d.id === 'string' && typeof d.path === 'string'
      );
      return true;
    } catch (e) {
      state.manifest = [];
      return false;
    }
  }
  function findIndex(id) {
    return state.manifest.findIndex((d) => d.id === id);
  }

  /* ---------- Routing ---------- */
  function parseHash() {
    const h = location.hash || '';
    const m = h.match(/^#\/d\/([^/?#]+)/);
    if (!m) return { view: 'home' };
    const id = safeDecode(m[1]);
    return id ? { view: 'reader', id } : { view: 'home' };
  }
  function go(hash) {
    if (location.hash === hash) return;           // no-op kalau sudah di sana
    history.pushState({ pgr: true }, '', hash);   // tidak trigger hashchange
    render();                                     // jadi render manual
  }
  function goHome() { go('#/'); }
  function goDoc(id) { go('#/d/' + encodeURIComponent(id)); }

  /* ---------- Render ---------- */
  async function render() {
    try {
      const route = parseHash();
      if (route.view === 'home') showHome();
      else await showReader(route.id);
    } catch (e) {
      console.error('render failed', e);
    }
  }

  function showHome() {
    if (currentAbort) { currentAbort.abort(); currentAbort = null; }
    state.currentId = null;
    state.currentIndex = -1;
    closeToc();
    els.viewHome.hidden = false;
    els.viewReader.hidden = true;
    document.title = 'Platform Gotong Royong';
    window.scrollTo(0, 0);
  }

  async function showReader(id) {
    closeToc();
    const idx = findIndex(id);
    if (idx === -1) { goHome(); return; }

    // Batalkan request sebelumnya kalau masih berjalan (anti race).
    if (currentAbort) currentAbort.abort();
    const controller = new AbortController();
    currentAbort = controller;
    const signal = controller.signal;

    state.currentId = id;
    state.currentIndex = idx;
    const doc = state.manifest[idx];

    els.viewHome.hidden = true;
    els.viewReader.hidden = false;
    els.docTitle.textContent = doc.title || 'Dokumen';
    els.docVersion.textContent = '';
    els.docContent.innerHTML = '<p class="loading">Memuat dokumen…</p>';
    els.tocList.innerHTML = '';
    document.title = (doc.title || 'Dokumen') + ' — PGR';
    window.scrollTo(0, 0);

    try {
      const res = await fetch(doc.path, { cache: 'default', signal });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const md = await res.text();

      if (signal.aborted) return;

      // Versi dari header markdown (jika ada)
      const vMatch = md.match(/\*\*Versi\*\*:\s*([0-9A-Za-z.\-]+)/);
      if (vMatch) els.docVersion.textContent = 'v' + vMatch[1];

      // Judul dari H1 (jika ada)
      const tMatch = md.match(/^#\s+(.+)$/m);
      if (tMatch) els.docTitle.textContent = tMatch[1].trim();

      els.docContent.innerHTML = renderMarkdown(md);
      enhanceLinks(els.docContent, doc.path);
      buildToc(els.docContent);
    } catch (e) {
      if (e && e.name === 'AbortError') return;
      els.docContent.innerHTML =
        '<p class="error">Gagal memuat dokumen. Periksa koneksi atau coba lagi.</p>' +
        '<pre></pre>';
      els.docContent.querySelector('pre').textContent = String(e.message || e);
      els.tocList.innerHTML = '<div class="toc-empty">Tidak ada daftar isi.</div>';
    }
  }

  function renderMarkdown(md) {
    if (window.marked && typeof window.marked.parse === 'function') {
      try {
        const html = window.marked.parse(md, { gfm: true, breaks: false });
        return sanitizeHtml(html);
      } catch (e) { /* fallthrough ke fallback teks */ }
    }
    console.error('marked tidak tersedia — menampilkan markdown mentah.');
    const pre = document.createElement('pre');
    pre.textContent = md;
    return pre.outerHTML;
  }

  // basePath = path dokumen saat ini, untuk resolve link relatif.
  function enhanceLinks(root, basePath) {
    root.querySelectorAll('a[href]').forEach((a) => {
      const href = a.getAttribute('href') || '';

      // Eksternal: http(s):// atau protocol-relative //example.com
      if (/^(?:https?:)?\/\//i.test(href)) {
        a.setAttribute('target', '_blank');
        a.setAttribute('rel', 'noopener noreferrer');
        return;
      }

      // Anchor murni (#section) — biarkan browser default.
      if (href.startsWith('#')) return;

      // Link ke file .md lokal: route lewat SPA, jangan keluar app.
      // Tangani juga link dengan fragment (#section).
      const [pathPart] = href.split('#');
      if (/\.md$/i.test(pathPart) && !/^[a-z]+:/i.test(href)) {
        a.addEventListener('click', (ev) => {
          ev.preventDefault();
          const resolved = resolvePath(basePath || '', pathPart);
          const target = state.manifest.find((d) => d.path === resolved);
          if (target) {
            goDoc(target.id);
          } else {
            // Tidak ada di manifest — buka di tab baru sebagai fallback.
            window.open(href, '_blank', 'noopener');
          }
        });
      }
    });
  }

  /* ---------- TOC ---------- */
  function slugify(s) {
    return (s || '').toLowerCase().trim()
      .replace(/[^\w\u00C0-\u024F\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') || 'section';
  }

  function buildToc(root) {
    const frag = document.createDocumentFragment();
    const used = new Set();

    // ---- Section 1: Halaman Ini (h1 saja) ----
    const pageSection = document.createElement('div');
    pageSection.className = 'toc-section';

    const pageTitle = document.createElement('div');
    pageTitle.className = 'toc-section-title';
    pageTitle.textContent = 'Halaman Ini';
    pageSection.appendChild(pageTitle);

    const h1s = root.querySelectorAll('h1');
    if (h1s.length) {
      h1s.forEach((h) => {
        let id = h.id;
        if (!id) {
          id = slugify(h.textContent);
          let base = id, n = 2;
          while (used.has(id)) id = base + '-' + n++;
          h.id = id;
        }
        used.add(id);

        const a = document.createElement('a');
        a.href = '#' + id;
        a.textContent = h.textContent;
        a.addEventListener('click', (ev) => {
          ev.preventDefault();
          closeToc();
          const target = document.getElementById(id);
          if (target) {
            const y = target.getBoundingClientRect().top + window.scrollY - 64;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        });
        pageSection.appendChild(a);
      });
    } else {
      const empty = document.createElement('div');
      empty.className = 'toc-empty';
      empty.textContent = 'Tidak ada daftar isi.';
      pageSection.appendChild(empty);
    }
    frag.appendChild(pageSection);

    // ---- Section 2: Semua Dokumen ----
    const globalSection = document.createElement('div');
    globalSection.className = 'toc-section';

    const globalTitle = document.createElement('div');
    globalTitle.className = 'toc-section-title';
    globalTitle.textContent = 'Semua Dokumen';
    globalSection.appendChild(globalTitle);

    if (state.manifest.length === 0) {
      const empty = document.createElement('div');
      empty.className = 'toc-empty';
      empty.textContent = 'Tidak ada dokumen.';
      globalSection.appendChild(empty);
    } else {
      state.manifest.forEach((doc) => {
        const a = document.createElement('a');
        a.href = '#/d/' + encodeURIComponent(doc.id);
        a.textContent = doc.title || doc.id;
        if (doc.id === state.currentId) a.classList.add('active');
        a.addEventListener('click', (ev) => {
          ev.preventDefault();
          closeToc();
          if (doc.id !== state.currentId) goDoc(doc.id);
        });
        globalSection.appendChild(a);
      });
    }
    frag.appendChild(globalSection);

    els.tocList.innerHTML = '';
    els.tocList.appendChild(frag);
  }

  function openToc() {
    els.tocOverlay.hidden = false;
    els.tocDrawer.hidden = false;
    els.tocOverlay.setAttribute('aria-hidden', 'false');
    els.tocDrawer.setAttribute('aria-hidden', 'false');
    if (els.btnToc) els.btnToc.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  function closeToc() {
    els.tocOverlay.hidden = true;
    els.tocDrawer.hidden = true;
    els.tocOverlay.setAttribute('aria-hidden', 'true');
    els.tocDrawer.setAttribute('aria-hidden', 'true');
    if (els.btnToc) els.btnToc.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  /* ---------- Navigation ---------- */
  function goBack() {
    const st = history.state;
    if (st && st.pgr) history.back();
    else goHome();
  }

  function goNext() {
    if (state.currentIndex < 0) { goHome(); return; }
    const next = state.manifest[state.currentIndex + 1];
    if (next) goDoc(next.id);
    else goHome();
  }

  /* ---------- Init ---------- */
  async function init() {
    // Ikon tema yang benar sejak awal
    els.btnTheme.textContent = currentTheme() === 'dark' ? '🌙' : '☀️';

    const ok = await loadManifest();
    const home = $('.home');
    if (home) {
      // Hapus pesan error lama (kalau init dipanggil ulang).
      home.querySelectorAll('.manifest-error').forEach((n) => n.remove());
      if (!ok) {
        const err = document.createElement('p');
        err.className = 'error manifest-error';
        err.textContent = 'Gagal memuat daftar dokumen (web/files.json).';
        home.appendChild(err);
      } else if (state.manifest.length === 0) {
        const err = document.createElement('p');
        err.className = 'error manifest-error';
        err.textContent = 'Daftar dokumen kosong.';
        home.appendChild(err);
      }
    }

    // Kalau user masuk langsung ke dokumen (history kosong), sisipkan
    // entri home di belakang. Entry pertama sengaja dibiarkan state=null
    // supaya tombol Back tidak keluar dari situs.
    if (/^#\/d\//.test(location.hash) && !history.state) {
      const target = location.hash;
      history.replaceState(null, '', location.pathname + location.search);
      history.pushState({ pgr: true }, '', target);
    }

    // Set aria-expanded awal pada tombol TOC.
    if (els.btnToc) els.btnToc.setAttribute('aria-expanded', 'false');

    bindEvents();
    await render();
  }

  function bindEvents() {
    els.btnStart.addEventListener('click', () => goDoc('readme'));
    els.btnHome.addEventListener('click', goHome);
    els.btnBack.addEventListener('click', goBack);
    els.btnNext.addEventListener('click', goNext);
    els.btnTheme.addEventListener('click', toggleTheme);
    els.btnToc.addEventListener('click', openToc);
    els.btnTocClose.addEventListener('click', closeToc);
    els.tocOverlay.addEventListener('click', closeToc);

    // hashchange sudah cukup: menangkap back/forward, edit URL manual,
    // dan klik link hash. pushState dari go() tidak trigger hashchange,
    // jadi kita panggil render() manual — tidak ada double render.
    window.addEventListener('hashchange', () => { render(); });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeToc();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();