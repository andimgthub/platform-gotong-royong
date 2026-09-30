# PGR — Changelog

> **Catatan Perubahan Versi**  
> Format mengikuti [Keep a Changelog](https://keepachangelog.com/)  
> Versi mengikuti [Semantic Versioning](https://semver.org/) yang disederhanakan

**Kode Dokumen**: PGR-CHANGELOG  
**Judul**: Catatan Perubahan Versi (Changelog)  
**Versi**: 0.2.0  
**Status**: Draft  
**Induk**: PGR-MST v0.2.0 (dalam penyusunan)  
**Lisensi**: CC-BY-SA 4.0  
**Tanggal**: 2026-09-30  
**Bahasa**: Indonesia 

---

# [0.2.0] — 2026-09-30

### Added
- Dokumen PGR lengkap dan terstruktur: Master PGR (Bagian 1–5 + Lampiran A–C) serta metadata (CONTRIBUTORS, DOCUMENTATION, DONATION, TIMELINE, FINANCIAL, CHANGELOG) dan dokumen root (NOTICE).
- Struktur Master: Bagian 1 Identitas & Prinsip; Bagian 2 Model Ekonomi & Simulasi; Bagian 3 Model Layanan; Bagian 4 Kelembagaan & Governance; Bagian 5 Prinsip & Fase Proyek.
- Lampiran A Glosarium Lengkap; Lampiran B Referensi Hukum; Lampiran C Simulasi & Perbandingan.
- Sistem label status: [PR], [DS], [AS], [SIM-ILLUST], [SIM-COMMIT], [PRO], [TBD], [LAW].
- Prinsip inti: gotong royong, nirlaba, transparansi, demokrasi, keadilan rintisan, dan kesejahteraan.
- Model ekonomi, layanan, kelembagaan, fase proyek, monitoring, risiko, dan mitigasi sebagai satu kesatuan konsep.
- Aturan document control, rujukan versi, atribusi, lisensi, serta pemusatan changelog di `metadata/CHANGELOG.md`.

### Changed
- Restrukturisasi total dari catatan dan dokumen terpisah menjadi dokumen utuh dengan susunan saat ini.
- Penyeragaman versi dokumen dalam rilis ini menjadi `v0.2.0`.
- Penyeragaman terminologi: Penggagas, Perintis, dan Kontributor.
- Penyesuaian seluruh rujukan silang ke `v0.2.0`.
- Changelog tidak menampilkan riwayat versi sebelumnya dan dimulai dari rilis ini.

### Removed
- Riwayat versi dan catatan perubahan sebelum versi 0.2.0 tidak ditampilkan dalam changelog ini.

---

# Format Versi

Versi mengikuti prinsip [Semantic Versioning](https://semver.org/) yang disederhanakan.

| Perubahan | Contoh | Keterangan |
|-----------|--------|------------|
| **MAJOR** (X.0.0) | v0.2.0 → v1.0.0 | Peluncuran publik atau perubahan fundamental |
| **MINOR** (0.X.0) | v0.2.0 → v0.3.0 | Restrukturisasi atau penambahan fitur |
| **PATCH** (0.0.X) | v0.2.0 → v0.2.1 | Perbaikan bug dan koreksi kecil |

**Contoh Penerapan**
- v0.1.0 → v0.2.0: Restrukturisasi minor (MINOR karena masih fase konsep).
- v0.2.0 → v0.2.1: Perbaikan konten hilang dan koreksi kecil (PATCH).
- v0.2.1 → v0.3.0: Restrukturisasi besar, penambahan asas gotong royong, kesejahteraan, arsitektur kelembagaan, batasan komersialisasi, fase proyek (MINOR).
- v0.2.0 → v1.0.0: Peluncuran publik (MAJOR).

**Versi Dokumen ≠ Versi Konsep**

Setiap dokumen memiliki siklus hidup sendiri. Master v0.2.0 dan dokumen publik v0.1.0 adalah hal yang wajar. Yang penting adalah:
> "PGR-P02 v0.1.0 dibuat berdasarkan PGR-MST v0.2.0."

---

# Cara Berkontribusi pada Changelog

Jika Anda menemukan kesalahan atau ingin mengusulkan perubahan:

1. **Buka Issue** di GitHub dengan label `documentation`.
2. **Jelaskan** bagian mana yang perlu diperbaiki atau ditambahkan.
3. **Berikan referensi** ke dokumen atau diskusi yang relevan.
4. **Tunggu review** dari penggagas atau perintis sebelum perubahan diterapkan.

**Konvensi Commit Message**

```text
[Tipe]: [Deskripsi singkat]

[Tipe] dapat berupa:
- Fix     : Perbaikan kesalahan
- Feat    : Penambahan bagian baru
- Docs    : Perubahan dokumentasi
- Style   : Perubahan format
- Refactor: Restrukturisasi
- Legal   : Perubahan terkait hukum
```

**Contoh**

```text
Fix: Koreksi simulasi 15 km motor
Feat: Tambah bagian Poin Partisipasi
Docs: Perbarui referensi UU 25/1992
Legal: Tambah referensi PP 71/2019 tentang PSE
```

---

*Akhir dokumen PGR-CHANGELOG*