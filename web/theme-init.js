/*
 * theme-init.js — Anti-FOUC. Dimuat sinkron di <head>, sebelum paint.
 * Versi: 1.0
 * Lisensi: MIT
 * Repositori: https://github.com/andimgthub/platform-gotong-royong/
 *
 * File ini sengaja blocking (tanpa defer/async) dan dipisah dari index.html
 * agar CSP tidak perlu mengizinkan 'unsafe-inline'.
 */
(function () {
  'use strict';
  try {
    var t = localStorage.getItem('pgr-theme');
    if (t !== 'dark' && t !== 'light') {
      t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }
})();
