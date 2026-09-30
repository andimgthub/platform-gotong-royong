# PGR Master Document — Lampiran C

**Kode Dokumen**: PGR-MST-LC  
**Judul**: Simulasi & Perbandingan  
**Versi**: 0.2.0  
**Status**: Draft  
**Induk**: PGR-MST v0.2.0 (dalam penyusunan)  
**Lisensi**: CC-BY-SA 4.0  
**Tanggal**: 2026-09-30  
**Bahasa**: Indonesia 

---

# LAMPIRAN C: SIMULASI & PERBANDINGAN

> **Catatan Umum**  
> Seluruh simulasi dalam lampiran ini diberi label **[SIM-ILLUST]**. Angka yang digunakan adalah contoh untuk menjelaskan mekanisme, bukan tarif aktual atau komitmen operasional. Angka dapat berubah tanpa justifikasi seiring validasi dengan data aktual.  
> **Tidak ada entitas spesifik yang disebut dalam dokumen ini.** Pembanding digunakan sebagai **"model platform komersial"** secara umum.  
> **Pajak** dibahas secara ringkas sebagai catatan, bukan simulasi penuh. Bukan nasihat pajak.

---

## C.1 Tujuan & Catatan Umum

### C.1.1 Tujuan

Lampiran ini bertujuan untuk:
- Menyediakan simulasi yang membantu pemahaman tentang model ekonomi PGR.
- Menyajikan perbandingan antara model PGR (gotong royong) dan model platform komersial.

### C.1.2 Catatan Umum

- Semua simulasi dalam lampiran ini bersifat **ilustratif**.
- Angka yang digunakan **bukan** tarif aktual atau komitmen operasional.
- Angka dapat berubah seiring validasi dengan data aktual.
- Besaran tarif, komisi, biaya layanan, dan program dapat berbeda menurut platform, kota, jenis layanan, waktu, dan regulasi yang berlaku.

---

## C.2 Model Platform Komersial sebagai Pembanding

### C.2.1 [SIM-ILLUST] Struktur Dasar

Sebagai pembanding, model platform komersial beroperasi dengan model bisnis berbasis akumulasi profit bagi pemegang saham.

**Karakteristik**
- **Kepemilikan**: Pemegang saham.
- **Tujuan**: Maksimisasi profit dan nilai perusahaan.
- **Surplus**: Didistribusikan sebagai dividen kepada pemegang saham.
- **Biaya layanan**: Salah satu sumber pendapatan platform.
- **Komisi**: Potongan tarif dari mitra sebagai sumber pendapatan platform.

### C.2.2 [SIM-ILLUST] Alur Pendapatan

**Sumber Pendapatan**
- Potongan tarif dari mitra (komisi platform).
- Biaya layanan yang dibayar konsumen.
- Iklan dan promosi berbayar.
- Layanan premium.

**Alokasi Pendapatan**
- Biaya operasional platform.
- Gaji karyawan dan manajemen.
- Dividen untuk pemegang saham.
- Reinvestasi untuk ekspansi.

> **Catatan**  
> Dalam simulasi ini, komisi platform diasumsikan sebesar 8% untuk motor dan 20% untuk mobil. Angka ini bukan representasi tarif seluruh platform komersial. Besaran aktual dapat berbeda menurut platform, kota, jenis layanan, waktu, program, dan regulasi yang berlaku.

### C.2.3 [SIM-ILLUST] Perbandingan Sumber Pendapatan

| Aspek | Model Komersial | Model PGR (Gotong Royong) |
|-------|-----------------|---------------------------|
| **Sumber pemasukan dari transaksi** | Dua: komisi + biaya layanan | Satu: biaya layanan (tanpa komisi) |
| **Sifat biaya layanan** | Dapat bervariasi | Statis, tidak terpengaruh nominal transaksi |
| **Prinsip penentuan** | Mendukung target profit | Berdasarkan biaya riil operasional |
| **Distribusi surplus** | Dividen kepada pemegang saham | SHU kepada anggota + Poin Partisipasi |

### C.2.4 [SIM-ILLUST] Komisi vs Biaya Layanan

Tabel berikut menjelaskan kombinasi komisi dan biaya layanan terhadap beban konsumen, pendapatan mitra, dan pendapatan platform.

| Kombinasi | Dibayarkan Konsumen | Pendapatan Mitra | Pendapatan Platform |
|-----------|---------------------|------------------|---------------------|
| **Komisi + Biaya Layanan** | Tinggi | Rendah | Tinggi |
| **Komisi Saja** | Rendah | Sedang | Tinggi |
| **Biaya Layanan Saja** | Rendah | Tinggi | Rendah |
| **Komisi > Biaya Layanan** | Tinggi | Rendah | Tinggi |
| **Komisi < Biaya Layanan** | Sedang | Sedang | Tinggi |

> **Catatan**  
> Tabel ini adalah ilustrasi arah dampak, bukan besaran pasti. Besaran aktual bergantung pada tarif, komisi, biaya layanan, dan kebijakan platform.  
> PGR menggunakan **Biaya Layanan Saja**: konsumen membayar lebih rendah, mitra menerima lebih tinggi, platform menerima secukupnya untuk operasional.

---

## C.3 Estimasi Biaya Operasional Kendaraan

### C.3.1 [SIM-ILLUST] Tabel Biaya per KM

| Komponen Biaya per KM | Calya / Sigra (1.2L) | Honda Vario (125cc) | Keterangan |
|:---|:---|:---|:---|
| Pemakaian (BBM) | Rp769 | Rp222 | LCGC lebih hemat dari MPV; Vario lebih boros dari Beat |
| Administratif (Pajak) | Rp167 | Rp29 | Pajak mobil LCGC cukup bersahabat |
| Perawatan Rutin | Rp100 | Rp42 | Ganti oli mesin/gardan, cairan, jasa servis |
| Keausan Komponen | Rp150 | Rp78 | Sparepart LCGC lebih murah dari MPV 1.5L |
| Depresiasi | Rp1.000 | Rp167 | Penurunan nilai tetap menjadi komponen termahal mobil |
| **TOTAL BIAYA PER KM** | **Rp2.186** | **Rp538** | Total Biaya Kepemilikan & Operasional (TCO) |

> **Catatan**  
> Asumsi kendaraan tunai (bukan cicilan), menggunakan BBM Pertalite. Biaya per km mencakup bahan bakar, perawatan, penyusutan, pajak, dan keausan komponen. Angka ini ilustratif.

---

## C.4 Simulasi Tarif: Mobil Penumpang dengan Jarak Jemput Jauh

### C.4.1 [SIM-ILLUST] Asumsi Dasar

- Jarak jemput: 5 km.
- Jarak antar: 5 km.
- Tarif dasar: Rp3.500/km (asumsi ilustratif).
- Jarak jemput gratis: 500 meter.
- Biaya operasional mobil: Rp2.186/km (Calya/Sigra).
- Biaya layanan platform komersial: Rp8.500 per order.
- Biaya layanan PGR: Rp1.750 per order.

### C.4.2 [SIM-ILLUST] Perbandingan

| Komponen | Model Platform Komersial | Model PGR |
|----------|--------------------------|-----------|
| Asumsi dasar | Jarak jemput 5 km, jarak antar 5 km, tarif Rp3.500/km, gratis 500 m, biaya ops Rp2.186/km | Jarak jemput 5 km, jarak antar 5 km, tarif Rp3.500/km, gratis 500 m, biaya ops Rp2.186/km |
| Pendapatan platform | Komisi 20% + biaya layanan = Rp3.500 + Rp8.500 = **Rp12.000** | Biaya layanan = **Rp1.750** |
| Konsumen bayar | Tarif (5 km) + biaya layanan = Rp17.500 + Rp8.500 = **Rp26.000** | Tarif (5+5−0,5 km) + biaya layanan = Rp33.250 + Rp1.750 = **Rp35.000** |
| Operasional mitra | 10 km × Rp2.186 = **Rp21.860** | 10 km × Rp2.186 = **Rp21.860** |
| Pendapatan kotor mitra | Rp17.500 − Rp3.500 = **Rp14.000** | **Rp33.250** |
| Sisa setelah operasional | Rp14.000 − Rp21.860 = **(Rp7.860)** | Rp33.250 − Rp21.860 = **Rp11.390** |
| Beban penjemputan dan pengantaran | Dilimpahkan kepada mitra | Proporsional dengan tarif (mitra dapat memberikan penjemputan gratis) |
| Potensi ekonomis | Merugi | Untung |
| Tingkat penolakan | Sangat tinggi | Sangat rendah |

> **Catatan**  
> Dalam model komersial, jarak jemput tidak dihitung sebagai komponen tarif. Mitra menanggung sendiri biaya perjalanan menuju titik jemput. Jika jarak jemput jauh, mitra cenderung menolak order karena berpotensi merugi.  
> Dalam model PGR, jarak jemput dihitung sebagai ongkos jemput setelah dikurangi jarak gratis. Mitra dibayar untuk seluruh jarak tempuh. Jarak jemput yang jauh meningkatkan biaya operasional, waktu tempuh, dan risiko kemacetan. Dengan menghitung jarak jemput, mitra lebih mau menerima order.  
> Angka ini ilustratif. Tujuan simulasi adalah menunjukkan perbedaan prinsip, bukan profitabilitas aktual.

---

## C.5 Simulasi Tarif: Mobil 20 km

### C.5.1 [SIM-ILLUST] Asumsi Dasar

- Tarif dasar: Rp3.500/km (asumsi ilustratif).
- Jarak Antar: 20 km.
- Total tarif: 20 × Rp3.500 = Rp70.000.
- Jarak Jemput: 0 km.
- Biaya layanan platform komersial: Rp8.500 per order (asumsi ilustratif).
- Biaya layanan PGR: Rp1.750 per order.

### C.5.2 [SIM-ILLUST] Perbandingan

| Komponen | Model Platform Komersial | Model PGR |
|----------|--------------------------|-----------|
| Tarif dasar | Rp70.000 | Rp70.000 |
| Komisi platform | 20% × Rp70.000 = Rp14.000 | Rp0 (tidak ada komisi) |
| Biaya layanan | Rp8.500 | Rp1.750 |
| **Konsumen bayar** | **Rp78.500** | **Rp71.750** |
| **Pendapatan kotor mitra** | **Rp56.000** | **Rp70.000** |
| **Selisih konsumen** | | **Rp6.750 lebih murah di PGR** |
| **Selisih mitra** | | **Rp14.000 lebih banyak di PGR** |
| **Nilai ekonomis PGR** | | **Rp20.750** |

> **Penjelasan Nilai Ekonomis**  
> Nilai ekonomis PGR = selisih yang dibayar konsumen + selisih yang diterima mitra.  
> Dalam contoh ini: Rp6.750 + Rp14.000 = **Rp20.750**.

> **Catatan**  
> Biaya layanan platform PGR sama untuk motor dan mobil (Rp1.750) karena komponen biaya platform (server, notifikasi, dukungan pelanggan, dan biaya teknis lainnya) tidak berbeda berdasarkan jenis kendaraan. Perbedaan biaya operasional kendaraan ditanggung mitra.

---

## C.6 Simulasi Tarif: Motor 15 km

### C.6.1 [SIM-ILLUST] Asumsi Dasar

- Tarif dasar: Rp2.600/km (asumsi ilustratif).
- Jarak Antar: 15 km.
- Total tarif: 15 × Rp2.600 = Rp39.000.
- Jarak Jemput: 0 km.
- Biaya layanan platform komersial: Rp3.500 per order (asumsi ilustratif).
- Biaya layanan PGR: Rp1.750 per order.

### C.6.2 [SIM-ILLUST] Perbandingan

| Komponen | Model Platform Komersial | Model PGR |
|----------|--------------------------|-----------|
| Tarif dasar | Rp39.000 | Rp39.000 |
| Komisi platform | 8% × Rp39.000 = Rp3.120 | Rp0 (tidak ada komisi) |
| Biaya layanan | Rp3.500 | Rp1.750 |
| **Konsumen bayar** | **Rp42.500** | **Rp40.750** |
| **Pendapatan kotor mitra** | **Rp35.880** | **Rp39.000** |
| **Selisih konsumen** | | **Rp1.750 lebih murah di PGR** |
| **Selisih mitra** | | **Rp3.120 lebih banyak di PGR** |
| **Nilai ekonomis PGR** | | **Rp4.870** |

> **Penjelasan Nilai Ekonomis**  
> Nilai ekonomis PGR = selisih yang dibayar konsumen + selisih yang diterima mitra.  
> Dalam contoh ini: Rp1.750 + Rp3.120 = **Rp4.870**.  
> **Pendapatan kotor mitra** adalah pendapatan yang diterima mitra setelah biaya layanan dan biaya lain dalam transaksi, tetapi **belum** termasuk pengeluaran operasional mitra (bahan bakar, perawatan, dll).

---

## C.7 Simulasi Kurir Multi Order

### C.7.1 [SIM-ILLUST] Asumsi Dasar

- Jumlah paket: 10 paket.
- Titik penjemputan: 10 titik.
- Titik pengantaran: 10 titik.
- Jarak jemput per paket: 1 km.
- Jarak antar per paket: 3 km.
- Tarif kurir: Rp3.000/km (asumsi ilustratif).
- Jarak jemput gratis: 500 meter per rute.
- Biaya operasional motor: Rp538/km (Honda Vario).

### C.7.2 [SIM-ILLUST] Model Platform Komersial

| Komponen | Nilai |
|----------|-------|
| Dasar perhitungan per order | Jarak antar (3 km) |
| Tarif per order | 3 × Rp3.000 = Rp9.000 |
| Total 10 order | Rp90.000 |
| Jarak jemput | Tidak dihitung |
| **Pendapatan kotor mitra** | **Rp90.000** |
| Total jarak tempuh | (10 × 1) + (10 × 3) = 40 km |
| Biaya operasional (40 km × Rp538) | (Rp21.520) |
| **Sisa setelah operasional** | **Rp68.480** |

> **Catatan**  
> Dalam model komersial, jarak jemput tidak dihitung sebagai komponen tarif. Mitra menanggung sendiri biaya perjalanan menuju setiap titik jemput.

### C.7.3 [SIM-ILLUST] Model PGR

| Komponen | Nilai |
|----------|-------|
| Dasar perhitungan per order | Jarak jemput + jarak antar − jarak gratis = 1 + 3 − 0,5 = 3,5 km |
| Tarif per order | 3,5 × Rp3.000 = Rp10.500 |
| Total 10 order | Rp105.000 |
| **Pendapatan kotor mitra** | **Rp105.000** |
| Total jarak tempuh | (10 × 1) + (10 × 3) = 40 km |
| Biaya operasional (40 km × Rp538) | (Rp21.520) |
| **Sisa setelah operasional** | **Rp83.480** |

> **Catatan**  
> Dalam model PGR, jarak jemput dihitung sebagai ongkos jemput setelah dikurangi jarak gratis. Mitra dibayar untuk seluruh jarak tempuh.

### C.7.4 [SIM-ILLUST] Perbandingan

| Aspek | Komersial | PGR | Selisih |
|-------|-----------|-----|---------|
| Pendapatan kotor mitra | Rp90.000 | Rp105.000 | Rp15.000 lebih banyak di PGR |
| Biaya operasional | (Rp21.520) | (Rp21.520) | — |
| Sisa setelah operasional | Rp68.480 | Rp83.480 | Rp15.000 |

> **Catatan**  
> Angka ini ilustratif. Tujuan simulasi adalah menunjukkan perbedaan prinsip: PGR menghitung jarak jemput, model komersial tidak.

---

## C.8 Simulasi Merchant

### C.8.1 [SIM-ILLUST] Asumsi Dasar

- Biaya produksi merchant: Rp20.000.
- Margin merchant: 20% dari biaya produksi → harga jual Rp24.000.
- Komisi platform komersial: 20% (asumsi ilustratif).
- Biaya layanan platform komersial: Rp5.000 (asumsi ilustratif).
- Biaya layanan PGR: Rp1.750 (ditanggung konsumen).

> **Catatan**  
> Dalam simulasi ini, merchant tidak termasuk kurir. Biaya kurir dan layanan pengiriman tidak dimasukkan. Simulasi fokus pada perbandingan komisi platform terhadap margin merchant.

### C.8.2 [SIM-ILLUST] Model Platform Komersial

| Komponen | Nilai |
|----------|-------|
| Biaya produksi | Rp20.000 |
| Harga jual (margin 20%) | Rp24.000 |
| Komisi platform (20%) | Rp4.800 |
| Biaya layanan (ditanggung konsumen) | Rp5.000 |
| **Konsumen bayar** | **Rp29.000** |
| **Pendapatan kotor merchant** | **Rp19.200** |
| **Margin merchant** | **(Rp800)** |
| **Pendapatan platform** | **Rp9.800** |

> **Catatan**  
> Dalam model komersial, komisi 20% memotong harga jual. Merchant dapat menaikkan harga di aplikasi untuk menutupi komisi, tetapi ini mempengaruhi daya saing. Simulasi ini menunjukkan dampak komisi terhadap margin jika harga tidak disesuaikan.

### C.8.3 [SIM-ILLUST] Model PGR

| Komponen | Nilai |
|----------|-------|
| Biaya produksi | Rp20.000 |
| Harga jual (margin 20%) | Rp24.000 |
| Komisi platform | Rp0 (tidak ada komisi) |
| Biaya layanan (ditanggung konsumen) | Rp1.750 |
| **Konsumen bayar** | **Rp25.750** |
| **Pendapatan kotor merchant** | **Rp24.000** |
| **Margin merchant** | **Rp4.000** |
| **Pendapatan platform** | **Rp1.750** |

> **Catatan**  
> Dalam PGR, tidak ada komisi. Merchant menerima harga jual penuh. Biaya layanan platform ditanggung konsumen. Merchant dapat menentukan harga jualnya sendiri selama dalam batasan koridor aturan dan hukum.

### C.8.4 [SIM-ILLUST] Perbandingan

| Aspek | Komersial | PGR | Selisih |
|-------|-----------|-----|---------|
| Konsumen bayar | Rp29.000 | Rp25.750 | Rp3.250 lebih murah di PGR |
| Pendapatan kotor merchant | Rp19.200 | Rp24.000 | Rp4.800 lebih banyak di PGR |
| Margin merchant | (Rp800) | Rp4.000 | Rp4.800 |
| Pendapatan platform | Rp9.800 | Rp1.750 | Rp8.050 |
| Kenaikan dari biaya produksi | 45% | 28,75% | — |

> **Catatan**  
> Angka ini ilustratif. Tujuan simulasi adalah menunjukkan perbedaan prinsip: PGR tidak memotong komisi dari merchant.

---

## C.9 Simulasi Promo & Insentif

### C.9.1 [SIM-ILLUST] Promo pada Model Platform Komersial

**Karakteristik**
- Promo dapat diberikan dalam bentuk diskon, gratis ongkir, atau potongan harga.
- **Syarat dan ketentuan promo dapat diatur dan disesuaikan berdasarkan kebijakan internal platform yang dapat berubah tanpa konsultasi dengan mitra atau konsumen.**
- Promo bersifat sementara dan dapat dihentikan sewaktu-waktu.
- Sumber dana promo umumnya berasal dari investor atau anggaran pemasaran platform.

**Dampak Jangka Panjang**
- Konsumen terbiasa dengan harga murah.
- Ketika promo dihentikan, harga kembali normal atau bahkan lebih tinggi.
- Mitra tidak memiliki kendali atas promo yang mempengaruhi pendapatan mereka.

### C.9.2 [SIM-ILLUST] Subsidi pada PGR

**Karakteristik**
- Subsidi diberikan berdasarkan **kelayakan penerima**, bukan berdasarkan pencapaian target transaksi.
- Penerima subsidi adalah pihak yang terlibat dalam transaksi layanan standar.
- Subsidi tidak boleh melebihi nilai transaksi.
- Penerima dapat menolak subsidi. Jika ditolak, uang kembali ke Dompet Sosial.
- Sumber dana subsidi berasal dari Dana Sosial, donasi, atau alokasi surplus.

**Perbandingan**

| Aspek | Model Komersial | PGR |
|-------|-----------------|-----|
| **Syarat promo/subsidi** | Ditetapkan berdasarkan kebijakan internal platform yang dapat berubah | Berdasarkan kelayakan penerima |
| **Sifat** | Sementara, dapat dihentikan sewaktu-waktu | Terikat pada transaksi, berdasarkan kebutuhan |
| **Kendali mitra/konsumen** | Tidak ada | Penerima dapat menolak |
| **Sumber dana** | Investor/anggaran pemasaran | Dana Sosial/donasi/alokasi surplus |

### C.9.3 [SIM-ILLUST] Insentif pada Model Platform Komersial

**Karakteristik**
- Insentif diberikan kepada mitra berdasarkan pencapaian target (jumlah trip, jam online, rating).
- **Syarat dan besaran insentif dapat diatur dan disesuaikan berdasarkan kebijakan internal platform yang dapat berubah tanpa konsultasi dengan mitra.**
- Insentif bersifat tidak stabil dan dapat berubah sewaktu-waktu.
- Insentif berbasis target dapat mendorong mitra untuk meningkatkan volume kerja. Dampak terhadap kesejahteraan mitra perlu dikaji lebih lanjut.

**Dampak**
- Pendapatan mitra berfluktuasi.
- Mitra tidak dapat merencanakan pendapatan jangka panjang.
- Ketika insentif diturunkan, pendapatan mitra turun.

### C.9.4 [SIM-ILLUST] Pendapatan Normal pada PGR

**Karakteristik**
- Mitra menerima tarif penuh (100%) tanpa potongan komisi.
- Tidak ada insentif berbasis target. Pendapatan mitra sepenuhnya berasal dari tarif yang ditetapkan.
- Mitra dapat menentukan tarif dan harganya sendiri selama dalam batasan koridor aturan dan hukum.
- Tidak ada ketergantungan pada insentif yang tidak stabil.

**Perbandingan**

| Aspek | Model Komersial | PGR |
|-------|-----------------|-----|
| **Sumber pendapatan** | Tarif setelah komisi + insentif | Tarif penuh (100%) |
| **Sifat insentif** | Tidak stabil, dapat diubah berdasarkan kebijakan platform | Tidak ada, tidak diperlukan |
| **Stabilitas pendapatan** | Berfluktuasi | Konsisten |
| **Kendali mitra** | Terbatas | Penuh atas tarif sendiri |

> **Catatan**  
> Angka-angka dalam simulasi ini adalah ilustratif. Tujuan simulasi adalah menunjukkan perbedaan mekanisme, bukan besaran aktual.

---

## C.10 Estimasi Biaya Operasional Umum

### C.10.1 [SIM-ILLUST] Asumsi Skala

- Jumlah pengemudi: 1.000 orang.
- Volume order: ± 5.000 order per hari.

### C.10.2 [SIM-ILLUST] Komponen Biaya

| Komponen Biaya | Estimasi per Tahun |
|:---|:---|
| Server, cloud, dan pemeliharaan | Rp360.000.000 |
| Notifikasi dan komunikasi (asumsi Rp50/order) | Rp91.250.000 |
| Kompensasi (gaji tim inti dan CS, 5 orang × Rp5.000.000 × 12) | Rp300.000.000 |
| Kantor, legal, audit, dan pelatihan | Rp200.000.000 |
| **Total biaya operasional umum** | **± Rp951.250.000** |

> **Catatan**  
> Angka ini hanya ilustrasi. Komponen riil dapat berbeda tergantung skala, efisiensi, dan kebijakan internal. Jumlah fungsi tidak sama dengan jumlah orang; pada fase awal satu orang dapat merangkap beberapa fungsi.  
> Kompensasi merupakan bagian dari Biaya Operasional. Tunjangan, bonus, dan reimbursement juga termasuk dalam komponen ini. Lihat PGR-MST-BAG2 v0.2.0 §2.3.2.

### C.10.3 [SIM-ILLUST] Biaya Pihak Ketiga

| Komponen Biaya | Keterangan |
|:---|:---|
| Payment gateway (asumsi 1,5% dari nilai transaksi) | Dibebankan kepada konsumen (pass-through) |
| Asuransi | Diberlakukan dan disampaikan terbuka |
| Biaya pihak ketiga lainnya | Diberlakukan dan disampaikan terbuka |

> **Catatan**  
> Payment gateway adalah layanan pihak ketiga yang dibebankan kepada konsumen. Angka 1,5% adalah asumsi ilustratif dan dapat berbeda tergantung penyedia layanan dan kebijakan yang berlaku. Biaya ini tidak termasuk dalam total biaya operasional platform.

---

## C.11 Simulasi Alur Surplus (Detail)

### C.11.1 [SIM-ILLUST] Asumsi Ilustratif

- Volume transaksi: 5.000 order per hari.
- Biaya layanan: Rp1.750 per order.
- Pendapatan harian: 5.000 × Rp1.750 = Rp8.750.000.
- Pendapatan tahunan: Rp8.750.000 × 365 = **Rp3.193.750.000**.

### C.11.2 [SIM-ILLUST] Alur Alokasi

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

### C.11.3 [SIM-ILLUST] Contoh Perhitungan Tahunan

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
> Simulasi ini mengasumsikan biaya layanan masih dikenakan. Jika surplus melampaui threshold, biaya layanan dapat dihapuskan sesuai C.12.2.

---

## C.12 Simulasi Break-Even & Threshold (Detail)

### C.12.1 [SIM-ILLUST] Simulasi Break-Even

**Asumsi Ilustratif**
- Biaya operasional tahunan: Rp951.250.000 (estimasi).
- Biaya layanan: Rp1.750 per order.

**Perhitungan**
- Break-even tercapai ketika: Volume transaksi × Rp1.750 = Rp951.250.000.
- Volume break-even: ± 543.572 order per tahun.
- Volume break-even: ± 1.490 order per hari (dengan 365 hari).

### C.12.2 [SIM-ILLUST] Simulasi Threshold

**Asumsi Ilustratif**
- Kebutuhan operasional tahunan: Rp951.250.000.
- Threshold: 200% × Rp951.250.000 = Rp1.902.500.000.

**Mekanisme Penyesuaian**

| Kondisi Surplus | Tindakan |
|-----------------|----------|
| Surplus < 100% kebutuhan | Biaya layanan dikenakan penuh |
| 100% ≤ Surplus < 200% kebutuhan | Biaya layanan tetap dikenakan. Surplus dialokasikan ke cadangan. |
| Surplus ≥ 200% kebutuhan | Biaya layanan dihapuskan |

> **Catatan**  
> Donasi Operasional tetap sukarela dan tidak menggantikan Biaya Layanan, terlepas dari zona surplus.

### C.12.3 [SIM-ILLUST] Simulasi Rasio Dana Cadangan

**Asumsi Ilustratif**
- Target dana cadangan: 200% dari kebutuhan tahunan.
- Komposisi: 100% untuk kebutuhan operasional tahun berikutnya + 100% untuk cadangan/threshold.
- Angka: 200% × Rp951.250.000 = Rp1.902.500.000.

**Mekanisme**
- Jika surplus berada di antara 100% dan 200% kebutuhan, surplus dialokasikan ke cadangan operasional.
- Jika surplus melebihi 200% kebutuhan, kelebihan dana dapat dialihkan ke pos subsidi atau pengembangan setelah persetujuan Rapat Anggota.
- Dana cadangan operasional diusahakan berada pada kisaran 200% dari kebutuhan tahunan.

---

## C.13 Pajak (Ringkas)

> **Disclaimer**  
> Bagian ini bukan nasihat pajak. Konsultasikan dengan konsultan pajak untuk perlakuan spesifik.

| Aspek | Ketentuan | Dampak untuk PGR |
|-------|-----------|------------------|
| **PPh Badan Koperasi** | Tarif 22% (dapat diskon 50% untuk peredaran bruto ≤ Rp50 miliar). Omzet ≤ Rp4,8 miliar dapat menggunakan PPh Final UMKM 0,5%. | Pajak di tingkat badan koperasi. |
| **PPh Mitra Individu** | Omzet ≤ Rp500 juta/tahun tidak dikenai PPh. | Mitra dengan omzet di bawah ambang tidak perlu simulasi pajak. |
| **SHU Anggota Koperasi** | SHU yang diterima anggota koperasi orang pribadi bukan objek pajak. | Tidak ada pajak bagi anggota penerima SHU. |
| **Poin Partisipasi** | Status pajak masih [TBD]. Perlu konsultasi lebih lanjut. | Belum dapat disimulasikan. |
| **PPN Jasa Transportasi** | Jasa angkutan umum dibebaskan PPN. Jasa pengiriman paket dikenakan PPN tarif khusus. | Perlu verifikasi untuk layanan kurir. |
| **PPN Jasa Platform** | Perlu verifikasi lebih lanjut. Status PGR sebagai penyedia jasa digital dapat mempengaruhi kewajiban PPN. | Perlu konsultasi dengan konsultan pajak. |

> **Catatan**  
> Simulasi pajak tidak dimasukkan dalam perhitungan surplus karena kompleksitas dan ketidakpastian. Pajak akan dihitung terpisah setelah konsultasi dengan konsultan pajak.

---

## C.14 Ringkasan Perbandingan Model

### C.14.1 [SIM-ILLUST] Tabel Ringkasan

| Aspek | Model Komersial | Model PGR (Koperasi) |
|-------|-----------------|----------------------|
| **Sumber pemasukan dari transaksi** | Komisi + biaya layanan | Biaya layanan saja (tanpa komisi) |
| **Sifat biaya layanan** | Bervariasi | Statis, berdasarkan biaya riil |
| **Kepemilikan** | Pemegang saham | Anggota koperasi |
| **Distribusi surplus** | Dividen kepada pemegang saham | SHU kepada anggota + Poin Partisipasi |
| **Hak suara** | Proporsional dengan saham | Satu anggota satu suara (keputusan umum) |
| **Tujuan utama** | Maksimisasi profit | Kesejahteraan anggota |
| **Promo/Insentif** | Ditetapkan berdasarkan kebijakan internal platform | Subsidi berdasarkan kelayakan |
| **Jarak jemput kurir** | Tidak dihitung | Dihitung sebagai ongkos jemput (setelah jarak gratis) |
| **Komisi merchant** | 20% (ilustratif) | Tidak ada komisi |

### C.14.2 [SIM-ILLUST] Manfaat Model PGR

- **Konsumen**: Biaya lebih murah karena tidak ada komisi yang dibebankan.
- **Mitra**: Menerima tarif penuh tanpa komisi. Biaya layanan dapat ditanggung konsumen atau mitra sesuai kesepakatan.
- **Merchant**: Menerima harga jual penuh tanpa potongan komisi.
- **Kurir**: Dibayar untuk seluruh jarak tempuh, termasuk jarak jemput setelah dikurangi jarak gratis.
- **Anggota**: Menerima SHU berdasarkan jasa modal, jasa usaha, dan Poin Partisipasi.
- **Masyarakat**: Mendukung ekosistem ekonomi gotong royong yang transparan.

---

## C.15 Catatan Akhir

Lampiran ini memuat simulasi detail yang bersifat ilustratif. Angka dan asumsi dapat berubah seiring validasi dengan data aktual. Untuk versi ringkas, lihat PGR-MST-BAG2 v0.2.0 §2.5.

**Referensi Silang**
- Identitas dan prinsip: Lihat PGR-MST-BAG1 v0.2.0
- Model ekonomi dan simulasi (ringkas): Lihat PGR-MST-BAG2 v0.2.0 §2.5
- Model layanan: Lihat PGR-MST-BAG3 v0.2.0
- Kelembagaan dan governance: Lihat PGR-MST-BAG4 v0.2.0
- Prinsip dan fase proyek: Lihat PGR-MST-BAG5 v0.2.0
- Glosarium lengkap: Lihat PGR-MST-LA v0.2.0
- Referensi hukum: Lihat PGR-MST-LB v0.2.0

---

*Akhir dokumen PGR-MST-LC*