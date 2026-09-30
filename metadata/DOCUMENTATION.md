# PGR — Panduan Dokumentasi

> **Panduan Penulisan, Label Status & Kontribusi**

**Kode Dokumen**: PGR-DOCUMENTATION  
**Judul**: Panduan Penulisan & Kontribusi  
**Versi**: 0.2.0  
**Status**: Draft  
**Induk**: PGR-MST v0.2.0 (dalam penyusunan)  
**Lisensi**: CC-BY-SA 4.0  
**Tanggal**: 2026-09-30  
**Bahasa**: Indonesia 

---

# 1. Tujuan Dokumen

Dokumen ini adalah panduan penulisan dan pengelolaan dokumentasi proyek PGR. Tujuannya:

- Memastikan konsistensi format, gaya bahasa, dan label status di seluruh dokumen.
- Menjaga ketertelusuran antar-dokumen melalui sistem kode dan versi.
- Memberikan panduan bagi kontributor yang ingin menambahkan atau memperbaiki dokumen.
- Mencegah pengulangan, kontradiksi, dan kutipan dari versi lama.

Dokumen ini berlaku untuk:
- Dokumen Master (`master/*.md`).
- Dokumen Publik (`publik/*.md`) — jika sudah dibuat.
- Dokumen Metadata (`metadata/*.md`).
- `NOTICE.md`.

---

# 2. Struktur Repository

```text
pgr-master/
│
├── NOTICE.md                          # Panduan atribusi & lisensi
├── LICENSE                            # CC-BY-SA 4.0 (Master)
│
├── master/
│   ├── PGR-MST-bag1.md                # Identitas & Prinsip
│   ├── PGR-MST-bag2.md                # Model Ekonomi & Simulasi
│   ├── PGR-MST-bag3.md                # Model Layanan
│   ├── PGR-MST-bag4.md                # Kelembagaan & Governance
│   ├── PGR-MST-bag5.md                # Prinsip & Fase Proyek
│   ├── PGR-MST-LampiranA.md           # Glosarium Lengkap
│   ├── PGR-MST-LampiranB.md           # Referensi Hukum
│   └── PGR-MST-LampiranC.md           # Simulasi & Perbandingan
│
├── publik/
│   ├── LICENSE                        # CC-BY-NC-ND 4.0 (Publik)
│   └── PGR-XXX.md                     # Belum Dibuat
│
├── metadata/
│   ├── FINANCIAL.md                   # Laporan keuangan
│   ├── TIMELINE.md                    # Milestone proyek
│   ├── CONTRIBUTORS.md                # Daftar penggagas, perintis & kontributor
│   ├── DONATION.md                    # Status donasi & disclaimer
│   ├── DOCUMENTATION.md               # Panduan ini
│   └── CHANGELOG.md                   # Catatan perubahan
│
└── releases/
    └── (PDF/versi turunan via GitHub Releases)
```

**Catatan Struktur**

- Saat ini Master dipecah menjadi 5 bagian + 3 lampiran untuk memudahkan editorial. Versi stabil akan digabung kembali menjadi satu file `PGR-MST.md`.
- Dokumen publik belum dibuat. Akan dibuat setelah dokumen Master stabil.
- Lisensi kode aplikasi (AGPL) berada di repository terpisah dan tidak termasuk dalam struktur di atas.

---

# 3. Document Control

Setiap file wajib memiliki header Document Control di bagian paling atas.

**Format Header**

```text
# Judul Dokumen

**Kode Dokumen**: PGR-XXXX
**Judul**: [Judul Lengkap]
**Versi**: X.Y.Z
**Status**: Draft / Review / Stabil / Arsip
**Induk**: PGR-MST vX.Y.Z (jika bukan master utama)
**Lisensi**: CC-BY-SA 4.0 (master) / CC-BY-NC-ND 4.0 (publik)
**Tanggal**: YYYY-MM-DD
**Bahasa**: Indonesia
```

**Contoh Penerapan**

```text
# PGR Master Document — Bagian 2

**Kode Dokumen**: PGR-MST-BAG2
**Judul**: Model Ekonomi & Simulasi
**Versi**: 0.2.0
**Status**: Draft
**Induk**: PGR-MST v0.2.0 (dalam penyusunan)
**Lisensi**: CC-BY-SA 4.0
**Tanggal**: 2026-09-30
**Bahasa**: Indonesia
```

## 3.1 Daftar Kode Dokumen

**Master**

| Kode | Judul | File |
|------|-------|------|
| PGR-MST-BAG1 | Identitas & Prinsip | `master/PGR-MST-bag1.md` |
| PGR-MST-BAG2 | Model Ekonomi & Simulasi | `master/PGR-MST-bag2.md` |
| PGR-MST-BAG3 | Model Layanan | `master/PGR-MST-bag3.md` |
| PGR-MST-BAG4 | Kelembagaan & Governance | `master/PGR-MST-bag4.md` |
| PGR-MST-BAG5 | Prinsip & Fase Proyek | `master/PGR-MST-bag5.md` |
| PGR-MST-LA | Glosarium Lengkap | `master/PGR-MST-LampiranA.md` |
| PGR-MST-LB | Referensi Hukum | `master/PGR-MST-LampiranB.md` |
| PGR-MST-LC | Simulasi & Perbandingan | `master/PGR-MST-LampiranC.md` |

**Publik** (belum dibuat)

| Kode | Judul | File |
|------|-------|------|
| PGR-P01 | Mengapa Platform Ini Berbeda | `publik/PGR-P01.md` |
| PGR-P02 | Bagaimana Uang Bergerak | `publik/PGR-P02.md` |
| PGR-P03 | Pengalaman Konsumen | `publik/PGR-P03.md` |
| PGR-P04 | Risiko & Konflik | `publik/PGR-P04.md` |
| PGR-P05 | Partisipasi & Manfaat Ekonomi | `publik/PGR-P05.md` |
| PGR-P06 | Peran & Kepemilikan | `publik/PGR-P06.md` |

**Metadata**

| Kode | Judul | File |
|------|-------|------|
| PGR-NOTICE | Atribusi & Lisensi | `NOTICE.md` |
| PGR-FINANCIAL | Laporan Keuangan | `metadata/FINANCIAL.md` |
| PGR-TIMELINE | Milestone Proyek | `metadata/TIMELINE.md` |
| PGR-CONTRIBUTORS | Daftar Penggagas, Perintis & Kontributor | `metadata/CONTRIBUTORS.md` |
| PGR-DONATION | Status Donasi & Disclaimer | `metadata/DONATION.md` |
| PGR-DOCUMENTATION | Panduan Penulisan | `metadata/DOCUMENTATION.md` |
| PGR-CHANGELOG | Catatan Perubahan | `metadata/CHANGELOG.md` |

## 3.2 Status Dokumen

| Status | Arti |
|--------|------|
| **Draft** | Dalam penyusunan. Dapat berubah sewaktu-waktu. |
| **Review** | Sedang ditinjau oleh penggagas atau kontributor. |
| **Stabil** | Disetujui dan berlaku. Perubahan memerlukan proses versi baru. |
| **Arsip** | Tidak lagi berlaku. Disimpan untuk referensi historis. |

---

# 4. Sistem Label Status

Semua klaim dalam dokumen dilabeli dengan status yang jelas. Label membantu pembaca memahami mana yang sudah pasti, mana yang masih dirancang, dan mana yang belum diputuskan.

## 4.1 Daftar Label

| Label | Nama | Definisi | Contoh |
|-------|------|----------|--------|
| **[PR]** | Principle | Prinsip yang mengikat secara moral. Tidak berubah tanpa konsensus penggagas/perintis/anggota. | "Transparansi adalah prinsip utama." |
| **[DS]** | Design | Rancangan yang bisa berubah sebelum implementasi. | "Biaya layanan Rp1.750." |
| **[AS]** | Assumption | Anggapan yang digunakan untuk merancang. | "Tarif dasar Rp2.600/km untuk motor." |
| **[SIM-ILLUST]** | Simulasi Ilustratif | Contoh angka untuk pemahaman. Bisa berubah tanpa justifikasi. | "Simulasi 15 km motor = Rp40.750." |
| **[SIM-COMMIT]** | Simulasi Komitmen | Prinsip moral. Jika realisasi berbeda, perlu justifikasi publik. | "SHU anggota minimal 50% dari surplus." |
| **[PRO]** | Projection | Perkiraan mengenai kondisi masa depan. | "Proyeksi pertumbuhan anggota." |
| **[TBD]** | To Be Determined | Akan dibahas nanti, belum ada keputusan. | "Konversi Poin Partisipasi." |
| **[LAW]** | Legal | Ketentuan hukum yang telah diverifikasi atau memerlukan verifikasi. | "SHU berdasarkan UU 25/1992 Pasal 45." |

## 4.2 Kapan Menggunakan Label yang Mana

**Gunakan [PR] jika:**
- Pernyataan adalah nilai atau prinsip dasar.
- Perubahan pernyataan memerlukan konsensus seluruh penggagas/perintis/anggota.
- Contoh: "Satu anggota satu suara untuk keputusan umum."

**Gunakan [DS] jika:**
- Pernyataan adalah rancangan yang sedang dipertimbangkan.
- Masih dapat berubah sebelum implementasi.
- Contoh: "Biaya layanan Rp1.750."

**Gunakan [AS] jika:**
- Pernyataan adalah asumsi yang digunakan untuk merancang.
- Tidak diklaim sebagai fakta.
- Contoh: "Tarif dasar Rp2.600/km untuk motor."

**Gunakan [SIM-ILLUST] jika:**
- Pernyataan adalah contoh angka untuk menjelaskan konsep.
- Bukan tarif aktual atau komitmen.
- Contoh: "Simulasi 15 km motor = Rp40.750."

**Gunakan [SIM-COMMIT] jika:**
- Pernyataan adalah komitmen moral.
- Jika realisasi berbeda, perlu justifikasi publik.
- Contoh: "SHU anggota minimal 50% dari surplus."

**Gunakan [PRO] jika:**
- Pernyataan adalah perkiraan masa depan.
- Tidak dapat dipastikan.
- Contoh: "Proyeksi jumlah anggota tahun pertama."

**Gunakan [TBD] jika:**
- Pernyataan adalah hal yang belum diputuskan.
- Memerlukan validasi hukum, teknis, atau operasional.
- Contoh: "Konversi Poin Partisipasi: sebelum atau di dalam SHU."

**Gunakan [LAW] jika:**
- Pernyataan merujuk pada ketentuan hukum.
- Telah diverifikasi atau memerlukan verifikasi lebih lanjut.
- Contoh: "UU 25/1992 Pasal 45 tentang SHU."

## 4.3 Kombinasi Label

Suatu pernyataan dapat memiliki lebih dari satu label jika memang memenuhi kriteria beberapa label.

**Contoh**
- `[DS] + [TBD]` — Rancangan yang belum diputuskan.
- `[LAW] + [TBD]` — Ketentuan hukum yang masih memerlukan verifikasi.
- `[PR] + [LAW]` — Prinsip yang juga didukung oleh hukum.
- `[DS] + [SIM-ILLUST]` — Rancangan yang digunakan dalam simulasi.

## 4.4 Penerapan Label

- Label diletakkan di awal paragraf atau bullet point.
- Gunakan format tebal: `**[PR]**`, `**[DS]**`, dan seterusnya.
- Setiap klaim numerik harus dilabeli.
- Setiap kebijakan harus dilabeli.
- Setiap rujukan hukum harus dilabeli.

---

# 5. Aturan Penulisan

## 5.1 Gaya Bahasa

**Umum**
- Gunakan bahasa Indonesia yang jelas dan tidak berbelit-belit.
- Hindari jargon teknis yang tidak perlu. Jika menggunakan istilah teknis, berikan definisi.
- Hindari bahasa agitasi, konfrontatif, atau provokatif.
- Fokus pada penjelasan mekanisme, bukan penilaian baik/buruk.

**Contoh Perbaikan**

| Hindari | Gunakan |
|---------|---------|
| "Model platform komersial bisa mengambil biaya sampai 50%" | "Dalam simulasi yang digunakan, komisi platform diasumsikan sebesar 20%" |
| "Platform ini hadir untuk menghentikan kegelapan itu" | "Platform ini dirancang agar konsumen dan mitra dapat memahami bagaimana tarif dan biaya layanan bekerja" |
| "Tidak ada dana misterius" | "Pendanaan disampaikan secara terbuka" |
| "Server menentukan rezeki" | "Algoritma yang menentukan hak ekonomi wajib dapat diaudit" |

## 5.2 Penulisan Angka

- Angka selalu dilabeli statusnya: `[DS]`, `[AS]`, `[SIM-ILLUST]`, dan seterusnya.
- Angka yang berubah-ubah sebaiknya dihindari dalam badan utama. Letakkan di lampiran atau dokumen terpisah.
- Angka simulasi harus jelas menyebut asumsinya.

**Contoh**

```text
**[SIM-ILLUST]** Simulasi 15 km motor:
- Tarif dasar (asumsi): Rp2.600/km
- Total tarif: Rp39.000
- Biaya layanan: Rp1.750
- Konsumen bayar: Rp40.750
```

## 5.3 Penulisan Hukum

- Rujukan pasal harus spesifik: "UU 25/1992 Pasal 45", bukan "UU Koperasi".
- Perubahan undang-undang harus disebutkan: "UU 25/1992 sebagaimana diubah dengan UU 6/2023".
- Ketentuan yang masih memerlukan verifikasi diberi label `[TBD] + [LAW]`.
- Selalu tambahkan disclaimer: "Dokumen ini bukan nasihat hukum."
- Perhatikan perubahan regulasi: PP 36/2021 telah diubah dengan PP 51/2023 dan PP 49/2025.

## 5.4 Penulisan Tabel

- Tabel digunakan untuk perbandingan, ringkasan, atau daftar.
- Header tabel harus jelas.
- Setiap tabel harus memiliki judul atau konteks.
- Hindari tabel yang terlalu lebar untuk tampilan mobile.

## 5.5 Penulisan Kode dan Diagram

- Gunakan triple backtick untuk code block.
- Untuk diagram sederhana, gunakan ASCII art.
- Hindari diagram Mermaid yang kompleks. Gunakan diagram sederhana.

**Contoh Diagram Sederhana**

```text
Piagam (Pengikat Moral)
        │
        ├── Yayasan (Penjaga Misi & Aset)
        │
        └── Koperasi (Operator Layanan)
                │
                └── PT (Perpanjangan Tangan Operasional, jika diperlukan)
```

## 5.6 Format Markdown

**Heading**
- `#` untuk judul dokumen.
- `##` untuk bagian utama.
- `###` untuk sub-bagian.
- Maksimal 4 level heading.

**Daftar**
- Gunakan `-` untuk bullet point.
- Gunakan `1.` untuk numbered list.

**Penekanan**
- Gunakan `**tebal**` untuk penekanan kuat.
- Gunakan `*miring*` untuk istilah asing atau penekanan ringan.
- Hindari penggunaan berlebihan.

**Tautan**
- Gunakan `[teks](url)` untuk tautan.
- Untuk rujukan antar dokumen, gunakan format: `PGR-MST-BAG2 v0.2.0 §2.4.2`.

## 5.7 Format Footer

Setiap dokumen diakhiri dengan satu baris footer:

```text
*Akhir dokumen [kode dokumen]*
```

Contoh:

```text
*Akhir dokumen PGR-MST-BAG1*
```

Footer ini menggantikan format footer lama yang memuat tanggal, versi, dan lisensi. Informasi tersebut sudah cukup tercantum pada header Document Control.

---

# 6. Aturan Rujukan & Versi

## 6.1 Aturan Rujukan

Setiap dokumen yang mengutip atau menggunakan rancangan dari dokumen lain **wajib menyebut kode dokumen dan versi sumber**. Nomor versi tidak boleh dihilangkan.

**Format Rujukan**

```text
PGR-MST-BAG2 v0.2.0 §2.4.2
PGR-MST-LA v0.2.0 §A.3.4
PGR-MST-LB v0.2.0 §B.7.1
PGR-MST-LC v0.2.0 §C.3.1
```

**Contoh Penggunaan dalam Teks**

> "Biaya layanan dijelaskan dalam PGR-MST-BAG2 v0.2.0 §2.2.1."

**Jangan**

> "Menurut Master Platform..." (tanpa versi dan tanpa klausa)

## 6.2 Aturan Versi

Versi mengikuti Semantic Versioning yang disederhanakan:

| Perubahan | Contoh | Keterangan |
|-----------|--------|------------|
| **MAJOR** (X.0.0) | v0.7.1 → v1.0.0 | Peluncuran publik atau perubahan fundamental |
| **MINOR** (0.X.0) | v0.6.0 → v0.7.0 | Restrukturisasi atau penambahan fitur |
| **PATCH** (0.0.X) | v0.7.0 → v0.7.1 | Perbaikan bug dan koreksi kecil |

## 6.3 Versi Dokumen ≠ Versi Konsep

Setiap dokumen memiliki siklus hidup sendiri. Master v0.2.0 dan dokumen publik v0.1.0 adalah hal yang wajar.

Yang penting adalah:
> "PGR-P02 v0.1.0 dibuat berdasarkan PGR-MST v0.2.0."

## 6.4 Kapan Versi Naik

**PATCH naik jika:**
- Typo diperbaiki.
- Format tabel diperbaiki.
- Tautan rusak diperbaiki.
- Tidak ada perubahan substansi.

**MINOR naik jika:**
- Ada penambahan bagian baru.
- Ada perubahan substansi pada rancangan.
- Ada penambahan atau perubahan label status.
- Ada perubahan pada mekanisme.

**MAJOR naik jika:**
- Ada perubahan fundamental pada prinsip.
- Ada perubahan struktur badan hukum.
- Dokumen dinyatakan stabil untuk peluncuran publik.

## 6.5 Dampak Perubahan

Jika dokumen induk berubah, dokumen turunan perlu ditinjau. Ketertelusuran rujukan antar-dokumen diatur melalui format rujukan yang tercantum dalam §6.1.

**Contoh**
- Jika `PGR-MST-BAG2` berubah, maka `PGR-MST-BAG3`, `PGR-MST-BAG5`, `PGR-MST-LA`, `PGR-MST-LB`, `PGR-MST-LC`, dan `PGR-DONATION` perlu ditinjau.
- Jika perubahan hanya typo, dokumen turunan tidak perlu ditinjau.

---

# 7. Alur Kontribusi

## 7.1 Jenis Kontribusi

**Umpan Balik**
- Buka issue di GitHub dengan label yang sesuai.
- Jelaskan bagian mana yang perlu diperbaiki.
- Berikan referensi ke dokumen atau diskusi.

**Perbaikan Dokumen**
- Fork repository.
- Buat branch baru: `fix/nama-perbaikan` atau `feat/nama-fitur`.
- Lakukan perubahan.
- Commit dengan pesan yang jelas.
- Ajukan pull request.

**Penambahan Bagian Baru**
- Diskusikan terlebih dahulu via GitHub Discussions atau Issue.
- Setelah disetujui, buat pull request.
- Sertakan justifikasi dan referensi.

## 7.2 Label Issue

| Label | Arti |
|-------|------|
| `documentation` | Perbaikan atau kesalahan dokumen |
| `concept` | Diskusi konsep |
| `legal` | Isu hukum atau regulasi |
| `technical` | Isu teknis |
| `enhancement` | Usulan fitur atau bagian baru |
| `bug` | Kesalahan yang perlu diperbaiki |
| `question` | Pertanyaan |

## 7.3 Proses Review

1. Pull request diajukan.
2. Penggagas atau perintis me-review.
3. Feedback diberikan di kolom komentar PR.
4. Jika disetujui, PR di-merge.
5. Jika ditolak, alasan dijelaskan.
6. Setelah merge, changelog diperbarui.

## 7.4 Konvensi Commit Message

**Format**

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

# 8. Pemeliharaan Changelog

## 8.1 Format Changelog

Changelog utama ada di `metadata/CHANGELOG.md`. Format mengikuti Keep a Changelog.

**Struktur**

```text
## [X.Y.Z] — YYYY-MM-DD

### Added
- Bagian atau fitur baru.

### Changed
- Perubahan pada bagian yang sudah ada.

### Fixed
- Perbaikan bug atau kesalahan.

### Removed
- Bagian yang dihapus.

### Deprecated
- Bagian yang akan dihapus.

### Known Issues
- Masalah yang diketahui dan akan ditangani.
```

## 8.2 Kapan Changelog Diperbarui

- Setiap kali versi naik (PATCH, MINOR, atau MAJOR).
- Setiap kali ada perubahan substansi.
- Setiap kali ada perbaikan penting.
- Setiap kali ada penghapusan bagian.

## 8.3 Catatan

- **Setiap file tidak perlu memiliki changelog sendiri.** Semua changelog dipusatkan di `metadata/CHANGELOG.md`.

---

# 9. Lisensi & Hak

## 9.1 Master Document

**Lisensi**: CC-BY-SA 4.0

**File**: `master/*.md`, `NOTICE.md`, `metadata/*.md`

**Hak**
- Berbagi: menyalin dan menyebarluaskan.
- Adaptasi: mengubah, mengalihwujudkan, membangun.

**Ketentuan**
- Atribusi: mencantumkan kredit.
- ShareAlike: distribusi di bawah lisensi yang sama.

## 9.2 Dokumen Publik

**Lisensi**: CC-BY-NC-ND 4.0

**File**: `publik/PGR-P01.md` s/d `PGR-P06.md`

**Hak**
- Berbagi: menyalin dan menyebarluaskan.

**Ketentuan**
- Atribusi: mencantumkan kredit.
- NonKomersial: tidak untuk tujuan komersial.
- NoDerivatives: tidak boleh diubah.

## 9.3 Kode Aplikasi

**Lisensi**: AGPL v3

Kode aplikasi menggunakan lisensi AGPL v3. Ketentuan lengkap mengikuti lisensi AGPL v3 yang berlaku.

## 9.4 Cara Atribusi

**Master**

```text
PGR Master by andimpgr01 is licensed under CC-BY-SA 4.0
```

**Publik**

```text
PGR Public Documentation by andimpgr01 is licensed under CC-BY-NC-ND 4.0
```

---

# 10. Kontak

**Penggagas**: andimpgr01  
**Link Personal**: [https://heylink.me/andimhey/](https://heylink.me/andimhey/)  
**GitHub Issues**: Untuk pertanyaan dengan label `documentation`

---

# Catatan Akhir

Dokumen ini adalah panduan dokumentasi PGR. Prinsip dokumentasi dijelaskan dalam PGR-MST-BAG5 v0.2.0 §5.5.

**Referensi Silang**
- Identitas dan prinsip: Lihat PGR-MST-BAG1 v0.2.0
- Model ekonomi dan simulasi: Lihat PGR-MST-BAG2 v0.2.0
- Model layanan: Lihat PGR-MST-BAG3 v0.2.0
- Kelembagaan dan governance: Lihat PGR-MST-BAG4 v0.2.0
- Prinsip dan fase proyek: Lihat PGR-MST-BAG5 v0.2.0
- Glosarium lengkap: Lihat PGR-MST-LA v0.2.0
- Referensi hukum: Lihat PGR-MST-LB v0.2.0
- Simulasi & perbandingan: Lihat PGR-MST-LC v0.2.0
- Changelog: Lihat `metadata/CHANGELOG.md`

---

*Akhir dokumen PGR-DOCUMENTATION*