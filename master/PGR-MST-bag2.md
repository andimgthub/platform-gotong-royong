# PGR Master Document — Bagian 2

**Kode Dokumen**: PGR-MST-BAG2  
**Judul**: Model Ekonomi & Simulasi  
**Versi**: 0.2.0  
**Status**: Draft  
**Induk**: PGR-MST v0.2.0 (dalam penyusunan)  
**Lisensi**: CC-BY-SA 4.0  
**Tanggal**: 2026-09-30  
**Bahasa**: Indonesia 

---

# BAGIAN 2: MODEL EKONOMI & SIMULASI

## 2.1 Prinsip Ekonomi Gotong Royong

### 2.1.1 [DS] Karakteristik Ekonomi Koperasi

Platform PGR beroperasi sebagai koperasi yang dimiliki dan dikelola oleh anggota, dengan kemungkinan pengembangan menjadi Koperasi Multi-Pihak sesuai peraturan yang berlaku.

**Karakteristik**
- **Kepemilikan**: Anggota koperasi.
- **Tujuan**: Kesejahteraan anggota, bukan maksimisasi profit pemilik dan pemegang saham.
- **Surplus**: Didistribusikan sebagai SHU berdasarkan jasa modal, jasa usaha, dan mekanisme Poin Partisipasi sesuai ketentuan.
- **Biaya layanan**: Ditentukan untuk menutupi operasional, bukan untuk profit.
- **Simpanan**: Sangat minim. Koperasi ini tidak mengandalkan keuangan, melainkan mengutamakan jasa usaha.

> **Rujukan**
> Prinsip ekonomi gotong royong dijelaskan dalam PGR-MST-BAG1 v0.2.0 §1.2.1.
> Struktur kelembagaan koperasi dijelaskan dalam PGR-MST-BAG4 v0.2.0 §4.3.

### 2.1.2 [DS] Alur Pendapatan & Kewajiban

**Sumber Pendapatan**
- Biaya layanan yang dibayar pada transaksi per order.
- Donasi operasional (donasi resmi).
- Hibah, sumbangan, dan pendapatan lain yang sah dan tidak bertentangan dengan prinsip nirlaba.

> **Rujukan**
> Rincian sumber pendapatan dijelaskan dalam §2.2.

**Kewajiban dan Ekuitas**
- Simpanan pokok dan simpanan wajib anggota dicatat sebagai ekuitas, bukan pendapatan.
- Simpanan sukarela dicatat sebagai ekuitas atau kewajiban sesuai karakteristik dan ketentuan yang berlaku.

**Alokasi Pendapatan**
- Biaya operasional platform, termasuk kompensasi pengurus dan karyawan jika ada (lihat §2.3.2), sesuai kebijakan internal dan batasan pada PGR-MST-BAG4 v0.2.0 §4.10.
- Cadangan operasional.
- Poin Partisipasi dan SHU untuk anggota.
- Dana sosial.

> **Rujukan**
> Rincian alokasi pendapatan dijelaskan dalam §2.3.

---

## 2.2 Sumber Pendapatan

### 2.2.1 [PR] Biaya Layanan (Prinsip)

**Definisi**  
Biaya layanan adalah satu-satunya jenis pemasukan yang dikenakan pada transaksi per order. Tidak ada potongan komisi dalam model ekonomi PGR.

> Sumber pendanaan operasional platform meliputi Biaya Layanan, Donasi Operasional, dan sumber lain yang sah. Biaya Layanan melekat pada transaksi per order. Donasi Operasional tidak melekat pada transaksi.  
> **Biaya pihak ketiga** seperti payment gateway, asuransi, dan biaya lainnya dibebankan kepada konsumen (pass-through) dan tidak termasuk dalam biaya layanan platform.

**Prinsip**
- **Satu jenis pemasukan, tanpa komisi.** PGR hanya memiliki satu mekanisme pemasukan dari transaksi: biaya layanan. Tidak ada komisi yang dipotong dari tarif mitra.
- **Statis, tidak terpengaruh nominal transaksi.** Berapa pun nilai transaksi, biaya layanan tetap sama. Biaya platform (server, notifikasi, dukungan pelanggan, biaya teknis lainnya) tidak berbeda berdasarkan nilai transaksi.
- **Berdasarkan biaya riil.** Prinsip penentuan biaya layanan adalah atas biaya riil yang dibutuhkan untuk mendukung layanan tersebut, bukan berdasarkan persentase atau target profit.
- **Berlaku untuk semua jenis layanan.** Biaya layanan berlaku untuk semua jenis layanan (transportasi, kurir, merchant, dan lain-lain). Besaran biaya dapat berbeda antar jenis layanan, tergantung biaya riil yang dikeluarkan untuk mendukung layanan tersebut.
- **Pengecualian pada layanan komersial.** Kemitraan yang bergabung tidak dalam perkoperasian atau bukan UMKM atau tergolong dalam kemitraan/layanan komersial dapat dikenakan skenario biaya layanan yang berbeda.

**Batasan**
- Biaya layanan ditentukan untuk menutupi biaya operasional, bukan untuk profit.
- Besaran biaya layanan ditetapkan berdasarkan komponen biaya riil operasional teknis platform.
- Angka dapat disesuaikan berdasarkan volume transaksi dan kesehatan finansial koperasi.
- Tidak termasuk layanan komersial.

> **Catatan**
> Detail mekanisme biaya layanan (pilihan penanggung biaya, besaran, dan tata cara) dijelaskan dalam PGR-MST-BAG3 v0.2.0.

### 2.2.2 [DS] Donasi Operasional

**Definisi**  
Donasi Operasional adalah sumbangan sukarela yang digunakan untuk menutup biaya operasional. Donasi ini tidak memiliki tarif dan tidak memengaruhi harga transaksi.

**Prinsip**
- Donasi Operasional bersifat sukarela dan dibuka bagi siapa saja.
- Donasi Operasional yang diberikan oleh pengguna atau mitra tidak mempengaruhi harga transaksi.
- Donasi Operasional dibuka sejak donasi resmi dibuka. Tidak menunggu threshold. Tidak menggantikan Biaya Layanan.
- Donasi Operasional dicatat terpisah dari donasi sosial.
- Batasan donatur: maksimal 20% dari total anggaran operasional tahunan per entitas.

**Transparansi**
- Donasi Operasional dicatat dan dilaporkan dalam laporan keuangan koperasi.
- Identitas donatur dengan nilai di atas ambang tertentu dapat diverifikasi untuk keperluan audit dan pencegahan TPPU.
- Identitas donatur tidak dipublikasikan tanpa persetujuan.

> **Rujukan**
> Mekanisme threshold dijelaskan dalam §2.4.2.
> Ketentuan TPPU dijelaskan dalam PGR-MST-LB v0.2.0 §B.9.

### 2.2.3 [DS] Sumber Lain yang Sah

Sumber pendapatan lain yang sah dan tidak bertentangan dengan prinsip nirlaba, termasuk namun tidak terbatas pada hibah, sumbangan, dan pendapatan lain yang diperoleh secara sah.

---

## 2.3 Alokasi Pendapatan

### 2.3.1 [DS] Biaya Operasional

Biaya operasional platform meliputi:
- Server, cloud, dan pemeliharaan.
- Notifikasi dan komunikasi.
- Kompensasi (gaji, tunjangan, reimbursement) — lihat §2.3.2.
- Kantor, legal, audit, dan pelatihan.
- Komponen kelembagaan PGR.

> **Catatan**
> Payment gateway dan biaya pihak ketiga lainnya **tidak termasuk** dalam biaya operasional platform. Biaya tersebut dibebankan kepada konsumen (pass-through).  
> Estimasi biaya operasional detail ada di PGR-MST-LC v0.2.0.

### 2.3.2 [DS] Kompensasi (Bagian dari Biaya Operasional)

Kompensasi pengurus dan karyawan (jika ada) merupakan bagian dari Biaya Operasional. Detail kebijakan dijelaskan dalam PGR-MST-BAG4 v0.2.0 §4.10.

**Prinsip**
- Upah pokok ditetapkan setara dengan UMP/UMK setempat.
- Bonus, tunjangan, dan reimbursement berada di atas upah pokok dan tidak termasuk dalam ketentuan upah pokok setara UMP/UMK.
- Tunjangan diberikan berdasarkan skala tanggung jawab, KPI, dan pencapaian platform.
- Semua pembayaran dilakukan secara non-tunai dan tercatat dalam laporan keuangan.

### 2.3.3 [DS] Cadangan Operasional

Dana yang disisihkan untuk menjamin keberlanjutan operasional. Dikelola oleh bendahara dan dilaporkan dalam Rapat Anggota.

> **Rujukan**
> Rincian cadangan operasional dijelaskan dalam §2.4.3.

### 2.3.4 [DS] Poin Partisipasi

**Definisi**  
Poin Partisipasi adalah mekanisme pencatatan kontribusi yang dirancang untuk memenuhi rasa keadilan pada jenis usaha rintisan, terutama bagi para perintis dan anggota awal pada masa pembangunan awal sebelum platform stabil.

**Prinsip**
- Poin Partisipasi dan SHU diambil dari satu sumber yang sama: laba bersih setelah dikurangi biaya operasional dan kewajiban pajak.
- Poin Partisipasi bersifat seperti bonus/tunjangan kepada anggota atas partisipasi historisnya, diambil dari laba bersih, sebelum SHU dibagikan. Setelah dikurangi Poin Partisipasi, sisa laba bersih menjadi SHU.
- Perpajakan akan menyesuaikan dengan ketentuan yang berlaku. **Ini bukan penghindaran pajak, melainkan wujud keadilan untuk jenis usaha rintisan.**
- Poin Partisipasi wajib masuk dalam AD/ART.

**Batasan**
- Poin Partisipasi bukan saham, bukan uang, dan bukan jaminan keuntungan.
- Poin Partisipasi tidak dapat diperjualbelikan.
- Bentuk dan akibat ekonominya baru dapat ditetapkan setelah struktur hukum dan aturan koperasi ditetapkan.

> **Rujukan**
> Prinsip Poin Partisipasi dijelaskan dalam PGR-MST-BAG1 v0.2.0 §1.2.5.
> Formula dan konversi akan diatur dalam dokumen terpisah dan AD/ART.

### 2.3.5 [DS] SHU (Sisa Hasil Usaha)

**Definisi**  
SHU adalah pendapatan koperasi dalam satu tahun buku setelah dikurangi biaya dan kewajiban termasuk pajak.

**Prinsip**
- SHU dibagikan kepada anggota berdasarkan jasa modal dan jasa usaha sesuai ketentuan hukum yang berlaku (UU 25/1992 Pasal 45).
- SHU setelah dikurangi dana cadangan dibagikan kepada anggota sebanding dengan jasa usaha yang dilakukan masing-masing anggota.
- Perpajakan menyesuaikan dengan ketentuan yang berlaku.

> **Rujukan**
> Ketentuan hukum tentang SHU dijelaskan dalam PGR-MST-LB v0.2.0 §B.1.

### 2.3.6 [DS] Dana Sosial

Dana yang dialokasikan untuk kegiatan sosial, termasuk subsidi bagi pengguna layanan standar yang membutuhkan.

> **Rujukan**
> Mekanisme subsidi dijelaskan dalam PGR-MST-BAG3 v0.2.0.

---

## 2.4 Break-Even & Threshold

### 2.4.1 [DS] Analisis Break-Even

**Titik Impas (Break-Even Point)**
- Tercapai ketika total pendapatan sama dengan total biaya operasional.
- Pada titik ini, biaya layanan dapat ditekan seminimal mungkin.
- Jika volume transaksi meningkat, surplus mulai terbentuk.

**Faktor yang Mempengaruhi Break-Even**
- Volume transaksi harian.
- Biaya tetap (server, bandwidth, gaji).
- Biaya variabel (maintenance, pengembangan fitur).
- Efisiensi operasional.

**Kaitan dengan Poin Partisipasi**  
Analisis break-even point menjadi salah satu dasar pembentukan Poin Partisipasi. Selama masa sebelum break-even, kontribusi perintis dan anggota awal dicatat melalui Poin Partisipasi. Setelah platform stabil dan menghasilkan SHU, mekanisme pembagian hasil usaha mengikuti ketentuan yang berlaku secara bertahap.

### 2.4.2 [DS] Threshold Biaya Layanan

**Definisi Threshold**
- Threshold adalah batas surplus maksimal yang diperlukan untuk keberlanjutan periodik.
- Threshold = 200% × kebutuhan operasional tahunan.
- Threshold terdiri dari 100% kebutuhan operasional tahun berikutnya dan 100% untuk cadangan/threshold.
- Jika surplus melebihi threshold: Biaya Layanan digratiskan/dihapuskan. Donasi Operasional tetap terbuka dengan sukarela.

**Formula Threshold**
- Threshold = 200% × kebutuhan operasional tahunan.
- Contoh: Jika kebutuhan operasional tahunan = Rp951.250.000, maka threshold = Rp1.902.500.000.

**Mekanisme Penyesuaian**
- Jika surplus kurang dari 100% kebutuhan operasional tahunan: biaya layanan dikenakan penuh.
- Jika surplus antara 100% hingga 200% kebutuhan operasional tahunan: biaya layanan tetap dikenakan. Surplus dialokasikan ke cadangan operasional.
- Jika surplus melebihi 200% kebutuhan operasional tahunan: biaya layanan dihapuskan. Donasi Operasional tetap terbuka dengan sukarela dan tidak menggantikan biaya layanan.

**Keputusan**
- Penyesuaian biaya layanan diputuskan dalam Rapat Anggota.
- Pertimbangan: kesehatan finansial, rencana ekspansi, kondisi ekonomi anggota.

### 2.4.3 [DS] Dana Cadangan Operasional

**Tujuan**
- Menjamin keberlanjutan operasional dalam kondisi tidak terduga.
- Melindungi dari fluktuasi volume transaksi.
- Membiayai investasi infrastruktur.

**Pengelolaan**
- Dikelola oleh bendahara koperasi.
- Dilaporkan secara berkala dalam Rapat Anggota.
- Penggunaan untuk tujuan di luar operasional memerlukan persetujuan Rapat Anggota.

**Rasio Surplus dan Dana Cadangan**
- Dana cadangan operasional diusahakan berada pada kisaran 200% dari kebutuhan tahunan.
- Komposisi: 100% untuk kebutuhan operasional tahun berikutnya, dan 100% untuk cadangan/threshold.
- Jika surplus melebihi 200% kebutuhan, kelebihan dana dapat dialihkan ke pos subsidi atau pengembangan setelah melalui persetujuan Rapat Anggota.

---

## 2.5 Simulasi Ringkas untuk Pemahaman

> **Catatan Umum**  
> Simulasi dalam bagian ini diberi label **[SIM-ILLUST]**. Angka yang digunakan adalah contoh untuk menjelaskan mekanisme, bukan tarif aktual atau komitmen operasional. Simulasi detail ada di PGR-MST-LC v0.2.0.

### 2.5.1 [SIM-ILLUST] Alur Surplus

**Asumsi Ilustratif**
- Volume transaksi: 5.000 order per hari.
- Biaya layanan: Rp1.750 per order.
- Pendapatan harian: 5.000 × Rp1.750 = Rp8.750.000.
- Pendapatan tahunan: Rp8.750.000 × 365 = **Rp3.193.750.000**.

**Alur Alokasi**

```text
Pendapatan (Biaya Layanan + Donasi Operasional + Sumber Lain)
        │
        ├── Biaya Operasional (termasuk kompensasi)
        │
        ├── Cadangan Operasional
        │
        ├── Poin Partisipasi (jika ada)
        │
        ├── SHU (jika ada)
        │
        └── Dana Sosial
```

### 2.5.2 [SIM-ILLUST] Break-Even

**Asumsi Ilustratif**
- Biaya operasional tahunan: Rp951.250.000 (estimasi).
- Biaya layanan: Rp1.750 per order.
- Break-even tercapai ketika: Volume transaksi × Rp1.750 = Rp951.250.000.
- Volume break-even: ± 543.572 order per tahun, atau ± 1.490 order per hari (dengan 365 hari).

### 2.5.3 [SIM-ILLUST] Threshold

**Asumsi Ilustratif**
- Kebutuhan operasional tahunan: Rp951.250.000.
- Threshold: 200% × Rp951.250.000 = Rp1.902.500.000.
- Biaya Layanan dihapuskan jika surplus melebihi threshold. Donasi Operasional tetap sukarela dan tidak menggantikan Biaya Layanan.

### 2.5.4 [SIM-ILLUST] Alokasi Surplus (Ilustratif)

| Komponen | Estimasi |
|----------|----------|
| Pendapatan tahunan | Rp3.193.750.000 |
| Biaya operasional umum (termasuk kompensasi) | (Rp951.250.000) |
| **Surplus operasional** | **± Rp2.242.500.000** |
| Cadangan operasional (30%) | Rp672.750.000 |
| Poin Partisipasi (10%) | Rp224.250.000 |
| SHU (50%) | Rp1.121.250.000 |
| Dana Sosial (10%) | Rp224.250.000 |

> **Catatan**  
> Angka alokasi di atas adalah **[SIM-ILLUST]** untuk memberikan gambaran. Proporsi sebenarnya masih **[TBD]** dan akan ditentukan setelah konsultasi hukum dan keputusan Rapat Anggota. Total alokasi = 100% dari surplus operasional.

---

## 2.6 Penagihan Tunggakan

### 2.6.1 [PR] Prinsip

- Jika seorang anggota memiliki saldo minus atau tunggakan, platform tidak akan menggunakan jasa penagih utang (debt collector).
- Sebaliknya, akan disediakan program keringanan atau restrukturisasi kewajiban agar anggota bisa menyelesaikan secara manusiawi.
- Bagi pengguna yang membayar tunai, denda pembatalan dapat dibebankan pada order berikutnya, bukan ditagih secara paksa.
- Prinsip ini bersifat global: berlaku untuk koperasi maupun pengguna.

---

## Catatan Akhir Bagian 2

Bagian ini menetapkan model ekonomi dan simulasi yang menjadi dasar operasional platform. Semua simulasi adalah ilustratif dan akan divalidasi lebih lanjut dengan data aktual.

**Referensi Silang**
- Identitas dan prinsip: Lihat PGR-MST-BAG1 v0.2.0
- Model layanan: Lihat PGR-MST-BAG3 v0.2.0
- Kelembagaan dan governance: Lihat PGR-MST-BAG4 v0.2.0
- Roadmap milestone: Lihat PGR-MST-BAG5 v0.2.0
- Glosarium lengkap: Lihat PGR-MST-LA v0.2.0
- Referensi hukum: Lihat PGR-MST-LB v0.2.0
- Simulasi detail: Lihat PGR-MST-LC v0.2.0

---

*Akhir dokumen PGR-MST-BAG2*