# PGR Master Document — Bagian 3

**Kode Dokumen**: PGR-MST-BAG3  
**Judul**: Model Layanan  
**Versi**: 0.2.0  
**Status**: Draft  
**Induk**: PGR-MST v0.2.0 (dalam penyusunan)  
**Lisensi**: CC-BY-SA 4.0  
**Tanggal**: 2026-09-30  
**Bahasa**: Indonesia 

---

# BAGIAN 3: MODEL LAYANAN

## 3.1 Kategori Layanan

### 3.1.1 [DS] Layanan Standar

**Definisi**  
Layanan yang dioperasikan oleh koperasi dan disediakan oleh mitra yang merupakan anggota koperasi.

**Karakteristik**
- **Akses**: Layanan standar disediakan oleh mitra yang merupakan anggota koperasi. Konsumen dapat menggunakan layanan tanpa harus menjadi anggota koperasi. Bagi bukan anggota, layanan komersial tetap terbuka untuk umum.
- **Mitra**: Mitra yang menyediakan layanan standar adalah anggota koperasi.
- **Konsumen**: Konsumen dapat menggunakan layanan tanpa harus menjadi anggota koperasi. Tidak ada pembatasan.
- **Biaya layanan**: Lebih rendah, karena tidak ada target profit.
- **Matching**: Tidak ada prioritas berdasarkan status keanggotaan. Matching berdasarkan filter yang disediakan dan dapat diatur konsumen.
- **Tarif & harga**: Mitra dapat menentukan tarif dan harganya sendiri selama dalam batasan koridor aturan dan hukum.

> **Rujukan**
> Ketentuan keanggotaan, hak suara, dan SHU dijelaskan dalam PGR-MST-BAG4 v0.2.0.

**Jenis Layanan Standar**
- Transportasi penumpang (motor, mobil).
- Pengiriman barang/kurir.
- Layanan merchant (toko online, makanan).
- Jasa personal mandiri.
- Marketplace barang mandiri.

**Target Pengguna**
- Individu yang ingin berpartisipasi dalam ekosistem gotong royong.
- Mitra UMKM yang ingin memiliki kontrol atas platform dan menerima SHU.
- Konsumen yang ingin mendukung ekonomi kolektif.

### 3.1.2 [DS] Layanan Komersial

**Definisi**  
Layanan yang terbuka untuk umum, baik individu maupun entitas, tanpa keanggotaan koperasi.

**Karakteristik**
- **Akses**: Terbuka untuk umum. Tidak ada keanggotaan koperasi yang diperlukan.
- **Mitra**: Mitra layanan komersial tidak harus anggota koperasi.
- **Konsumen**: Siapa saja boleh menggunakan layanan, anggota maupun non-anggota, tanpa dibatasi.
- **Biaya layanan**: Dapat lebih tinggi dari layanan standar untuk menutupi biaya tambahan.
- **Matching**: Tidak ada prioritas. Matching berdasarkan filter yang disediakan.
- **Tarif & harga**: Dapat menentukan tarif dan harganya sendiri selama dalam batasan koridor aturan dan hukum.

> **Rujukan**
> Ketentuan keanggotaan dijelaskan dalam PGR-MST-BAG4 v0.2.0.

**Jenis Layanan Komersial**
- Motor/mobil premium.
- Vendor badan usaha.
- Mobil premium/antar kota/sewa.
- Kurir multi titik.
- Merchant food komersial (badan usaha).
- Jasa komersial.
- Marketplace pedagang besar/power merchant.

**Target Pengguna**
- Individu atau entitas yang ingin menggunakan layanan tanpa komitmen keanggotaan.
- Mitra yang ingin fleksibilitas tanpa kewajiban koperasi.
- Konsumen yang belum siap menjadi anggota.

### 3.1.3 [DS] Hubungan antara Layanan Standar dan Komersial

**Prinsip Dasar**
- Layanan komersial tidak boleh mengkompromikan prinsip gotong royong.
- Layanan komersial adalah sarana untuk memperluas dampak, bukan untuk akumulasi profit pemegang saham eksternal.
- Jika layanan komersial berkembang, hak anggota koperasi tetap dilindungi.

**Arsitektur Kelembagaan (Ringkas)**
- **Koperasi**: Mengoperasikan layanan standar dan layanan komersial.
- **Yayasan**: Memiliki aset strategis (server, merek, hak kekayaan intelektual) untuk melindungi dari komersialisasi.
- **PT (opsional)**: Dibentuk hanya jika koperasi terkendala menjalankan fungsi tertentu. PT adalah perpanjangan tangan operasional. Saham mayoritas dimiliki koperasi/yayasan.

> **Rujukan**
> Detail arsitektur kelembagaan, alur pendapatan, dan hubungan antar-entitas dijelaskan dalam PGR-MST-BAG4 v0.2.0.

### 3.1.4 [PR] Aturan Satu Waktu Satu Pekerjaan

Meskipun seorang mitra dapat memiliki beberapa peran (pengemudi, kurir, pedagang), mitra tidak dapat menjalankan dua peran sekaligus dalam satu waktu. Aturan ini berlaku untuk keselamatan dan kejujuran.

### 3.1.5 [DS] Profil Mitra Dinamis

Setiap mitra dapat menjalankan lebih dari satu peran. Profil yang tampil di aplikasi menyesuaikan dengan peran yang sedang aktif. Misalnya, jika seseorang sedang bekerja sebagai pengemudi, profilnya menampilkan rating mengemudi, jarak tempuh, dan lencana yang relevan. Jika sedang menjadi kurir, profilnya berubah menampilkan ketepatan waktu pengiriman.

### 3.1.6 [DS] Perpindahan Layanan

> Layanan standar dan layanan komersial adalah kolam yang terpisah untuk menghindari konflik kepentingan.

Mitra yang awalnya terdaftar untuk layanan standar dan ingin menambahkan layanan komersial akan melalui masa percobaan serta memenuhi kriteria omset tertentu. Ini untuk memastikan kesiapan dan kepatutan. Perpindahan bukan sekadar administratif, tetapi berkaitan dengan kesiapan usaha dan tanggung jawab yang lebih besar.

---

## 3.2 Pemesanan & Matching

### 3.2.1 [PR] Prinsip Umum

**[PR] Transparansi**
- Algoritma matching didokumentasikan secara terbuka.
- Mitra dan konsumen dapat memahami faktor yang mempengaruhi penentuan order.
- Tidak ada black box yang menyembunyikan logika matching.

**[PR] Keadilan**
- Tidak ada shadow banning (pembatasan distribusi order terselubung).
- Tidak ada prioritas berdasarkan status keanggotaan.
- Tidak ada kelas prioritas yang dapat dibeli dengan uang.
- Semua mitra mendapat kesempatan yang sama berdasarkan filter yang disediakan.
- Tidak ada diskriminasi berdasarkan jenis kendaraan, usia, atau latar belakang.
- Intervensi sistem dapat dilakukan demi keadilan bersama. Misalnya: mitra baru, mitra yang lama online tanpa order, atau parameter lain.

**[PR] Efisiensi**
- Matching mengutamakan kedekatan jarak untuk mengurangi waktu tunggu.
- Matching mempertimbangkan kualitas layanan (rating) untuk menjaga standar.

### 3.2.2 [DS] Tiga Cara Memilih

**1. Otomatis (Serahkan ke Sistem)**
- Sistem menyiapkan filter untuk mencocokkan konsumen dengan mitra terbaik.
- Filter dari sisi mitra: total biaya minimal, jarak jemput maksimal, area tujuan.
- Filter dari sisi konsumen: harga termurah, jarak jemput terdekat, promo menarik.
- Konsumen dapat melakukan intervensi manual.
- Sistem dapat memberikan intervensi keadilan.

**2. Pilih Manual (Pilih Sendiri)**
- Konsumen melihat daftar lengkap mitra. Jika ada filter, daftar otomatis terurut.
- Konsumen dapat melihat profil mitra atau langsung memilihnya.

**3. Bursa Order (Pasar Bebas)**
- Kebalikan dari Manual. Mitra yang memilih order konsumen.
- Berguna untuk: pra-pemesanan, pesanan khusus, mencari harga terbaik, pesanan gabungan.
- Jika tidak diambil, order terhapus. Tidak ada biaya pembatalan.

### 3.2.3 [DS] Faktor-Faktor Urutan

Faktor yang mempengaruhi urutan dalam daftar mitra:
1. **Favorit**: Mitra yang ditandai sebagai favorit oleh konsumen selalu berada di urutan teratas, selama memenuhi filter dasar.
2. **Tarif/Harga**: Biaya yang akan dikeluarkan oleh konsumen.
3. **Jarak & Waktu**: Kedekatan antara mitra dan konsumen.
4. **Rating & Jam Terbang**: Skor kualitas layanan dan pengalaman.
5. **Penyisipan**: Mitra baru, mitra yang lama online tanpa order, atau parameter lain disesuaikan untuk keadilan.

**[PR] Faktor yang Tidak Dipertimbangkan**
- Insentif finansial (tidak ada bayar untuk prioritas).
- Hubungan pribadi (tidak ada teman dapat prioritas).
- Status sosial atau ekonomi.
- Status keanggotaan koperasi.

### 3.2.4 [DS] Filter Promo & Tip

- Bekerja dua arah. Konsumen dapat memfilter mitra yang sedang menawarkan Promo. Mitra dapat melihat konsumen yang sering memberi Tip.
- **Tag**: Diberikan oleh user. Bisa kedaluwarsa.
- **Flag**: Tag yang sudah diverifikasi oleh Admin. Hanya terlihat oleh sistem, Admin, Auditor, dan pemilik akun. Gunanya untuk memberikan hak ekonomi seperti diskon, promo, subsidi.

### 3.2.5 [DS] Fitur Langganan

Fitur Langganan memungkinkan konsumen dan mitra membuat kesepakatan layanan rutin (misalnya antar jemput harian, pengiriman mingguan).

- **Kesepakatan**: Dibuat secara tertulis melalui aplikasi, mencakup frekuensi, waktu, tarif, dan durasi langganan.
- **Jaminan Pendapatan Minimum**: Mitra mendapat jaminan pendapatan minimum sesuai kesepakatan, meskipun jumlah order aktual lebih rendah.
- **Sanksi Wanprestasi**: Kedua belah pihak dapat dikenakan sanksi jika melanggar kesepakatan, dengan mekanisme banding.
- **Metode Pembayaran**: Dapat diatur berdasarkan kesepakatan kedua belah pihak (di muka, per periode, atau per transaksi), dan dapat disesuaikan kemudian.

### 3.2.6 [DS] Pengalihan Order

**Masalah Besar (Force Majeure)**
Misalnya kecelakaan atau banjir. Mitra menekan tombol darurat.
- Sistem menyiarkan order ke mitra di sekitar.
- Ada biaya tambahan yang dikenakan kepada konsumen karena situasi darurat.
- Mitra lama tetap mendapat kompensasi atas jarak yang sudah ditempuh.
- Semua perubahan biaya dicatat jelas di riwayat.
- Jika konsumen menolak pengalihan, tidak ada biaya tambahan.

**Masalah Kecil (Internal)**
Misalnya salah alamat atau telat datang atau kesepakatan.
- Jika dari Pangkalan, Koordinator dapat mengatur pengalihan.
- Jika individu, keputusan di tangan konsumen: batalkan atau lanjutkan dengan penyesuaian tarif.

### 3.2.7 [DS] Kesepakatan Perjalanan

Penyesuaian atas order berjalan (tujuan, rute, dan lain-lain) disepakati oleh pihak bersangkutan dan dihitung sesuai bobot kerja nyata.

---

## 3.3 Biaya Layanan & Komponen Tarif

### 3.3.1 [DS] Mekanisme Biaya Layanan

**Prinsip**
- Biaya layanan melekat pada transaksi per order.
- Di dalam order tersebut terlibat beberapa pihak: platform, konsumen, dan mitra.
- Pihak yang menanggung biaya layanan — konsumen atau mitra — disepakati oleh pihak yang bersangkutan.
- Biaya layanan platform tidak dibedakan berdasarkan jenis kendaraan (motor atau mobil) karena komponen biaya platform relatif sama (server, notifikasi, dukungan pelanggan, dan biaya teknis lainnya).
- Perbedaan biaya operasional kendaraan (bahan bakar, perawatan, dan lain-lain) ditanggung oleh mitra sebagai penanggung beban operasional.
- **Biaya pihak ketiga** seperti payment gateway, asuransi, dan biaya lainnya dibebankan kepada konsumen (pass-through) dan tidak termasuk dalam biaya layanan platform.

**Pilihan Penanggung Biaya**
- **Opsi A**: Konsumen menanggung biaya layanan. Mitra menerima 100% tarif.
- **Opsi B**: Mitra menanggung biaya layanan. Mitra menerima tarif penuh namun mempunyai tagihan biaya layanan.
- Pilihan dapat dilakukan per transaksi atau ditetapkan sebagai kebijakan default.

**Kapan Opsi B Berlaku**
- Opsi B berlaku jika konsumen membayar secara langsung kepada mitra — tunai atau QRIS mitra — tanpa melalui payment gateway platform.
- Jika konsumen membayar melalui payment gateway platform, biaya layanan otomatis dibebankan kepada konsumen (Opsi A).

**Mekanisme Penagihan Opsi B**
- Mitra menerima tarif penuh.
- Mitra memiliki tagihan biaya layanan yang dibayarkan secara terpisah.
- Jika mitra memiliki saldo di platform, saldo dapat dipotong berdasarkan tagihan tersebut.
- Pendapatan kotor mitra = tarif penuh − biaya layanan.

> **Catatan**  
> **Pendapatan kotor mitra** adalah pendapatan yang diterima mitra setelah biaya layanan dan biaya lain dalam transaksi, tetapi belum termasuk pengeluaran operasional mitra (bahan bakar, perawatan, dll).

**Besaran Biaya Layanan**
- Biaya layanan ditetapkan berdasarkan komponen biaya riil operasional teknis platform.
- Contoh besaran untuk transportasi: Rp1.750 per transaksi (rentang Rp1.000–2.500). Label **[DS] + [SIM-ILLUST]**.
- Angka ini dapat disesuaikan berdasarkan volume transaksi dan kesehatan finansial koperasi.

> **Rujukan**
> Prinsip biaya layanan dijelaskan dalam PGR-MST-BAG2 v0.2.0 §2.2.1.

### 3.3.2 [DS] Ongkos Jemput

- Setiap layanan memiliki ketentuan **jarak gratis minimal 500 meter**.
- Besaran jarak gratis dapat bervariasi antar jenis layanan dan nilai transaksi. Setiap mitra dapat memberikan batasan secara manual berapa jarak penjemputan gratis yang diberlakukan.
- Jarak jemput di atas jarak gratis dihitung sebagai ongkos jemput.
- Mitra dapat memberikan diskon atas ongkos jemput sebagai bagian dari promosi atau pelayanan.
- Semua komponen tarif ditampilkan secara transparan sebelum pemesanan.

### 3.3.3 [DS] Ongkos Balik

- Ongkos balik adalah komponen kenaikan tarif yang memperhitungkan jarak kembali dari titik tujuan ke area operasional mitra, dengan tetap mematuhi batasan tarif pemerintah.
- Prinsipnya mencegah mitra merugi untuk order dengan tujuan yang jauh atau sepi.
- Penerapan ongkos balik disesuaikan oleh sistem berdasarkan aktivitas mitra dan karakteristik area.
- Tidak semua order atau tujuan dikenakan ongkos balik.
- Perhitungan dilakukan berdasarkan jarak tempuh, dan total tarif per kilometer tidak boleh melebihi batasan yang ditetapkan pemerintah.
- Jika dikenakan, ongkos balik ditampilkan secara transparan kepada konsumen sebelum order diterima.
- Mekanisme detail akan diatur kemudian.

### 3.3.4 [PR] Jaminan Tarif dan Argo Minimum

- Mitra mendapatkan 100% dari tarif dan argo minimum yang diatur pemerintah.
- Penyesuaian terhadap inflasi dapat digunakan sebagai salah satu parameter kebijakan tarif apabila diperbolehkan oleh ketentuan yang berlaku.

### 3.3.5 [DS] Biaya Dana Talangan

- Biaya penggantian uang talangan mitra (misalnya bayar tol, bayar makanan pedagang).
- 100% kepada mitra.
- Ditampilkan secara transparan kepada konsumen sebelum order diterima.

---

## 3.4 Pembatalan & Pembayaran

### 3.4.1 [DS] Pembatalan Order

**Prinsip**
- Parameter beban kerja: jarak/waktu jemput, proses merchant (food), dan lain-lain.
- Terukur, diinformasikan di awal dan akhir.
- Pembatalan sepihak: wajib reaktivasi manual, jeda bertingkat (0 menit, 10 menit, 1 jam, 3 hari, dan seterusnya).
- Pembatalan kesepakatan: tanpa biaya, tombol konfirmasi kedua pihak.
- Dana pembatalan ditahan untuk verifikasi dan banding.
- Kompensasi dapat ditolak oleh penerima. Jika ditolak, dana dikembalikan kepada pihak yang dikenakan denda.

**Mekanisme**
- Pembatalan sebelum mitra bergerak: tanpa biaya atau biaya minimal.
- Pembatalan setelah mitra bergerak: biaya sesuai jarak/waktu yang sudah ditempuh.
- Pembatalan oleh mitra: konsumen tidak dikenakan biaya, mitra dapat dikenakan sanksi sesuai ketentuan.
- Pembatalan karena force majeure: diatur dalam mekanisme pengalihan order.

### 3.4.2 [DS] Pembayaran Tunai

- Pembayaran tunai diserahkan langsung kepada mitra.
- Indikator selesai: dianggap lunas setelah mitra mengkonfirmasi penerimaan.
- Sengketa: melalui laporan, investigasi, dan sanksi.
- Denda pembatalan bagi pengguna yang membayar tunai dapat dibebankan pada order berikutnya, bukan ditagih secara paksa.

---

## 3.5 Tip, Promo & Subsidi

### 3.5.1 [DS] Tip (Uang Terima Kasih)

- **Kapan**: Setelah order selesai.
- **Pemberi**: Hanya konsumen dalam transaksi.
- **Penerima**: Hanya mitra dalam transaksi.
- **Sifat**: Batas nominal wajar. Murni apresiasi.
- **Hak Menolak**: Mitra dapat menolak tip. Jika ditolak, uang kembali ke pemberi.

### 3.5.2 [DS] Promo (Diskon / Undangan dari Mitra)

- **Kapan**: Sebelum order diterima.
- **Pemberi**: Mitra individu atau Koordinator Pangkalan. Platform juga dapat memberikan promo atas biaya layanan platform.
- **Penerima**: Hanya konsumen.
- **Batasan**: Ada kuota dan batas nominal.
- **Kriteria**: Lokasi tujuan, total transaksi, jumlah pesanan, pelanggan tertentu, preferensi personal.
- **Integritas**: Platform hanya dapat memberikan promo atas biaya layanan platform. Mitra hanya dapat memberikan promo atas layanannya sendiri.
- **Hak Menolak**: Konsumen dapat menolak promo. Jika ditolak, tidak ada pengurangan harga.

### 3.5.3 [DS] Subsidi (Bantuan Sosial)

- **Kapan**: Sebelum order diterima (terikat pada transaksi).
- **Pemberi**: Semua orang (mitra dan konsumen), bisa anonim.
- **Penerima**: Semua orang yang terlibat dalam transaksi layanan standar. Subsidi tidak dapat diberikan pada transaksi layanan komersial.
- **Batasan**: Tidak boleh melebihi nilai transaksi.
- **Penyaluran**: Melalui kriteria Tag/Flag atau geolokasi/waktu atau mekanisme khusus.
- **Hak Menolak**: Penerima dapat menolak subsidi. Jika ditolak, uang kembali ke Dompet Sosial.

### 3.5.4 [PR] Prinsip Hak Menolak

Promo, Tip, dan Subsidi adalah hak bagi penerimanya. Tidak ada paksaan untuk menerima.

---

## 3.6 Pangkalan

### 3.6.1 [DS] Definisi

**Pangkalan**: Lokasi fisik atau virtual tempat mitra berkumpul dan menunggu order. Pangkalan adalah salah satu klasifikasi komunitas kemitraan. Selain pangkalan, mitra juga dapat beroperasi secara individu.

**Jenis Pangkalan**
- **Pangkalan fisik**: Lokasi nyata (misalnya stasiun, terminal, pusat perbelanjaan).
- **Pangkalan virtual**: Grup online untuk koordinasi.

**Tujuan Pangkalan**
- Memfasilitasi komunikasi antar-mitra.
- Koordinasi dengan konsumen di area tertentu.
- Dukungan sosial dan pertukaran informasi.

### 3.6.2 [DS] Prinsip Umum Pangkalan

- Sekelompok mitra (minimal 3–5 orang) dapat sepakat membentuk pangkalan di suatu wilayah.
- Mereka memilih satu orang sebagai **Ketua Pangkalan** (koordinator), satu **Wakil**, dan satu **Auditor internal**.
- Auditor adalah penjaga kejujuran internal. Tidak boleh merangkap sebagai Ketua atau Wakil.
- Jika ada warga sekitar atau mitra lain yang mencurigai ketidakberesan, mereka dapat mengajukan diri sebagai Auditor dengan persetujuan platform dan mayoritas anggota pangkalan.

### 3.6.3 [DS] Model Operasional Pangkalan

**Model Digital**
Setiap anggota memiliki akun individu dan perangkat masing-masing. Koordinator mengatur pembagian order berdasarkan urutan, lokasi jemput terdekat, atau kesepakatan internal lainnya.

**Model Koordinasi Terpusat**
Satu perangkat pusat dipegang oleh koordinator untuk menerima dan membagikan order kepada anggota.

### 3.6.4 [DS] Verifikasi Koordinator Pangkalan

Mengingat koordinator memegang akses terhadap hak ekonomi anggota, proses verifikasi untuk posisi ini dilakukan secara lebih ketat. Calon koordinator wajib:
- Menyerahkan identitas resmi yang masih berlaku.
- Menandatangani pernyataan tanggung jawab atas pengelolaan order dan pembagian pendapatan.
- Menyerahkan daftar anggota pangkalan dengan verifikasi identitas minimal.
- Menyetujui audit berkala atas aktivitas pangkalan.

### 3.6.5 [DS] Status Operasional Pangkalan

- Pangkalan harus memperbarui status ketersediaan layanan secara berkala.
- Jika tidak ada aktivitas dalam jangka waktu tertentu, status pangkalan otomatis menjadi nonaktif.
- Jika semua mitra sedang melayani order, status menjadi Tidak Tersedia, bukan offline.

### 3.6.6 [DS] Perhitungan Tarif Pangkalan

Perhitungan tarif memperhitungkan komponen kerja nyata termasuk perjalanan kembali ke area operasional mitra setelah menyelesaikan order, dengan tetap memperhatikan batasan tarif yang ditetapkan pemerintah.

### 3.6.7 [DS] Akses Anggota Pangkalan ke Koperasi

Setiap anggota pangkalan memiliki hak dan kewajiban yang sama sebagai anggota koperasi. Meskipun sebagian anggota tidak memiliki akun aplikasi individual, mereka tetap dapat mengakses informasi dan hak suara melalui portal web koperasi. Hak suara dalam Rapat Anggota tetap melekat pada individu.

> **Rujukan**
> Ketentuan keanggotaan dan hak suara dijelaskan dalam PGR-MST-BAG4 v0.2.0.

### 3.6.8 [DS] Biaya Koordinasi Pangkalan

Biaya tambahan yang ditetapkan oleh pangkalan sebagai imbalan jasa koordinasi adalah 100% milik mitra, bukan pungutan platform. Besarannya disepakati internal pangkalan dan ditampilkan transparan kepada konsumen.

---

## 3.7 Grup Pengguna

### 3.7.1 [DS] Konsep Umum

Grup Pengguna adalah wadah kolektif yang memungkinkan beberapa orang berbagi sumber daya (seperti dompet bersama) untuk memesan layanan, dengan kendali yang dapat disesuaikan oleh pihak yang berwenang (misalnya orang tua, atasan, atau koordinator).

### 3.7.2 [DS] Aturan Persetujuan

- Setiap grup dapat mengatur tingkat persetujuan untuk setiap pemesanan: otomatis atau memerlukan persetujuan terlebih dahulu.
- Untuk anak di bawah umur, persetujuan manual dari wali atau orang tua adalah wajib setiap saat.
- Pihak yang berwenang dapat mengubah tingkat persetujuan sesuai kebutuhan.

### 3.7.3 [DS] Pencatatan Pemesan vs Penerima Manfaat

Dalam setiap transaksi grup, sistem selalu mencatat siapa yang memesan dan siapa yang menerima layanan. Jika sebuah perjalanan dibayar oleh satu pihak untuk kepentingan pihak lain, pihak pembayar dapat melacak rincian perjalanan dan biaya yang dikeluarkan.

### 3.7.4 [DS] Pilihan Aksi Mandiri

Meskipun tergabung dalam satu grup, setiap anggota tetap dapat memilih untuk melakukan transaksi personal yang tidak terkoneksi dengan grup.

### 3.7.5 [DS] Kendali dan Pemantauan

- Pihak yang berwenang dalam grup memiliki kendali penuh atas penggunaan dompet bersama dan dapat mencabut atau mengalihkan wewenang kapan saja.
- Selama layanan berlangsung, pihak yang berwenang dapat memantau posisi penerima manfaat secara real-time melalui aplikasi.
- Notifikasi dikirim pada saat order dibuat, dimulai, dan selesai.

---

## 3.8 Komunikasi Multi-Layer

### 3.8.1 [DS] Prinsip Umum

Sistem memisahkan jalur obrolan agar semua pihak memahami peran dan tanggung jawab masing-masing.

### 3.8.2 [DS] Jalur Komunikasi

**Untuk Ojek/Transportasi (1 Jalur)**
- Hanya penumpang dan pengemudi yang berbicara.

**Untuk Pesan Makanan (3 Jalur Terpisah)**
- Jalur 1: Konsumen dengan Pedagang.
- Jalur 2: Konsumen dengan Kurir.
- Jalur 3: Pedagang dengan Kurir.

**Jika Pedagang Merangkap Kurir**
- Cukup 1 jalur chat, dengan status Pedagang sekaligus Kurir.

### 3.8.3 [DS] Penundaan Komunikasi

Komunikasi ke pengemudi ditunda jika belum waktunya pengantaran.

### 3.8.4 [DS] Keterbukaan Komunikasi

Pedagang wajib memberikan bukti barang sebelum diserahkan kepada Kurir. Kurir memberikan bukti yang diterima oleh Pedagang. Informasi yang relevan dengan penyelesaian transaksi dapat dicatat dan dibagikan kepada pihak yang berwenang sesuai kebutuhan layanan dan aturan privasi.

---

## 3.9 Rating, Blocklist & Sanksi

### 3.9.1 [DS] Rating

- Rating mempengaruhi urutan, bukan akses.
- Rating tidak mengendap selamanya, hanya dihitung dari transaksi terakhir.
- Rating hanya dari order yang terselesaikan.

### 3.9.2 [DS] Pemutihan Rating

- Jika rating terlalu rendah, mitra bisa mengikuti pelatihan atau verifikasi ulang.
- Pemutihan tidak menghapus riwayat, hanya menghitung ulang dari skor terbaru.

### 3.9.3 [DS] Blocklist (Pemblokiran Individual)

- Konsumen memblokir mitra: mitra tidak muncul dalam pencarian konsumen.
- Mitra memblokir konsumen: status mitra selalu sibuk untuk konsumen tersebut.
- Blocklist bisa dihapus kapan saja. Ini preferensi personal, bukan sanksi.

### 3.9.4 [DS] Sanksi

- Sanksi diberikan secara proporsional berdasarkan kendali, kategori, dan tingkat pelanggaran.
- Tidak ada sanksi terselubung (shadow banning). Platform tidak akan menerapkan pembatasan distribusi order yang tidak terdokumentasi, tidak memiliki dasar aturan, atau tidak dapat ditinjau melalui mekanisme audit/banding.
- Tidak ada sanksi yang tidak bisa banding.
- Auditor selalu memantau proses sanksi dan sengketa.
- Administrator, auditor, mitra, maupun konsumen dapat dikenakan sanksi sesuai aturan.
- Segala bentuk tindakan kriminal diserahkan kepada pihak berwajib.

### 3.9.5 [DS] Jenis Sanksi

**Sanksi untuk Mitra**
- Pemberitahuan: Untuk pelanggaran ringan.
- Peringatan tertulis: Untuk pelanggaran berulang.
- Suspensi sementara: Untuk pelanggaran serius.
- Pemutusan hubungan: Untuk pelanggaran sangat serius.

**Sanksi untuk Konsumen**
- Peringatan: Untuk perilaku tidak pantas.
- Suspensi akun: Untuk pelanggaran berulang.
- Blokir permanen: Untuk pelanggaran sangat serius.

**Sanksi untuk Pengurus/Koordinator**
- Teguran: Untuk kelalaian dalam tugas.
- Pemecatan/Pemutusan hubungan: Untuk pelanggaran serius atau penyalahgunaan wewenang.

### 3.9.6 [DS] Transparansi Sanksi

- Statistik sanksi (jumlah, jenis, alasan) dipublikasikan secara berkala.
- Laporan tidak menyertakan data pribadi.
- Kebijakan sanksi ditinjau secara berkala.

---

## 3.10 Penanganan Keluhan

### 3.10.1 [PR] Prinsip Penanganan Keluhan

**[PR] Keadilan**
- Semua keluhan ditangani secara objektif dan transparan.
- Tidak ada diskriminasi berdasarkan status atau hubungan.
- Keputusan didasarkan pada bukti, bukan asumsi.

**[PR] Transparansi**
- Proses penanganan keluhan didokumentasikan secara terbuka.
- Keputusan dan alasannya disampaikan kepada pihak yang terlibat.
- Statistik keluhan dan resolusi dipublikasikan secara berkala.

**[PR] Efisiensi**
- Keluhan ditangani dalam waktu yang wajar.
- Proses tidak berbelit-belit dan mudah diakses.
- Ada mekanisme eskalasi jika keluhan tidak terselesaikan.

### 3.10.2 [DS] Mekanisme Penanganan Keluhan

**Jalur Keluhan**
1. Level 1: Layanan pengguna untuk konflik ringan.
2. Level 2: Pengurus koperasi untuk konflik sedang.
3. Level 3: Rapat Anggota untuk konflik berat atau sistematis.

**Proses Penanganan**
1. Keluhan disampaikan melalui saluran resmi.
2. Keluhan dicatat dan diberi nomor referensi.
3. Investigasi dilakukan.
4. Keputusan diambil dan disampaikan.
5. Jika ada sanksi, sanksi dilaksanakan.
6. Keputusan didokumentasikan.

**Mekanisme Banding**
- Pihak yang tidak puas dapat mengajukan banding.
- Banding ditangani oleh level yang lebih tinggi.
- Keputusan banding bersifat final.

> **Rujukan**
> Ketentuan Rapat Anggota dijelaskan dalam PGR-MST-BAG4 v0.2.0.

---

## 3.11 SOP Operasional Dasar

### 3.11.1 [DS] Pendaftaran Mitra

**Syarat Pendaftaran**
- Memiliki kemampuan menerima pembayaran tunai atau QRIS merchant.
- Memiliki kendaraan yang layak jalan untuk pengemudi/kurir.
- Memiliki SIM yang valid untuk pengemudi.
- Lolos verifikasi identitas.
- Menyetujui aturan dan kode etik platform.

**Catatan tentang QRIS**
- QRIS mitra adalah jalur pembayaran langsung kepada mitra, tanpa melalui payment gateway platform.
- Pembayaran tunai juga diterima sebagai bentuk pembayaran langsung kepada mitra.

**Proses Pendaftaran**
1. Mengisi formulir pendaftaran online.
2. Mengunggah dokumen yang diperlukan.
3. Verifikasi dokumen oleh tim platform.
4. Pelatihan online tentang cara menggunakan aplikasi dan aturan platform.
5. Aktivasi akun.

**Keanggotaan Koperasi**
- Mitra layanan standar adalah anggota koperasi.
- Mitra layanan komersial tidak harus anggota koperasi.
- Proses keanggotaan koperasi terpisah dari pendaftaran platform namun dapat dilakukan bersamaan.

> **Rujukan**
> Ketentuan keanggotaan koperasi dijelaskan dalam PGR-MST-BAG4 v0.2.0.

### 3.11.2 [DS] Pendaftaran Konsumen

**Syarat Pendaftaran**
- Memiliki nomor telepon yang valid.
- Menyetujui syarat dan ketentuan platform.

**Proses Pendaftaran**
1. Mengunduh aplikasi atau mengakses website.
2. Mendaftar dengan nomor telepon.
3. Verifikasi nomor telepon.
4. Profil siap digunakan.

**Keanggotaan Koperasi**
- Konsumen tidak dibatasi. Anggota maupun non-anggota dapat menggunakan layanan.
- Konsumen yang ingin menjadi anggota koperasi dapat mendaftar melalui jalur terpisah.

### 3.11.3 [DS] Standar Kualitas Layanan

**Standar untuk Mitra**
- Kendaraan bersih dan layak.
- Pakaian rapi dan sopan.
- Ramah dan profesional kepada konsumen.
- Menjaga keamanan barang dan konsumen.

**Penilaian Kualitas**
- Rating dari konsumen.
- Umpan balik tertulis.
- Audit berkala oleh tim platform.

**Konsekuensi Kualitas Rendah**
- Rating rendah dapat mempengaruhi prioritas urutan.
- Jika rating konsisten rendah, mitra akan mendapat pelatihan tambahan.
- Jika tidak ada perbaikan, mitra dapat diskors atau diputus hubungannya.

### 3.11.4 [DS] Keamanan dan Privasi

**Keamanan Data**
- Data pribadi dilindungi dengan enkripsi.
- Data tidak dijual kepada pihak ketiga.
- Akses data dibatasi untuk keperluan operasional.

**Privasi**
- Nomor telepon mitra dan konsumen disembunyikan menggunakan nomor virtual.
- Lokasi real-time hanya dibagikan selama order aktif.
- Riwayat order dapat dihapus atas permintaan pengguna, dengan memperhatikan kewajiban penyimpanan data yang berlaku.

**Pelaporan Insiden**
- Insiden keamanan harus dilaporkan segera.
- Platform menyediakan saluran darurat 24/7.
- Platform bekerja sama dengan pihak berwenang untuk investigasi.

---

## 3.12 Beban Branding

### 3.12.1 [PR] Prinsip

- Beban branding adalah beban bersama, tidak semestinya dibebankan seluruhnya kepada mitra.
- Mitra memiliki hak untuk menggunakan branding sesuai dengan status akunnya.
- Berbeda dengan layanan komersial, akun mitra dapat berlangganan layanan dan ditandai sebagai favorit oleh konsumen, yang juga menguntungkan mitra atas penggunaan hak branding.
- Prinsip ini berkaitan dengan "Rumah Bagi Pelaku Usaha Mandiri" (§3.14).

---

## 3.13 Platform Tidak Memiliki Kendaraan

### 3.13.1 [DS] Prinsip

Dalam rancangan ini kendaraan disediakan oleh mitra. Bentuk hubungan hukum, perizinan, tanggung jawab, dan kewajiban masing-masing pihak mengikuti ketentuan yang berlaku untuk jenis layanan yang bersangkutan pada saat layanan dioperasikan.

---

## 3.14 Rumah Bagi Pelaku Usaha Mandiri

### 3.14.1 [PR] Prinsip

Platform Gotong Royong merancang hubungan kemitraan dengan menekankan kemandirian mitra, transparansi ekonomi, dan pembagian tanggung jawab yang proporsional. Bentuk hubungan hukum aktual akan ditentukan berdasarkan peraturan perundang-undangan, perjanjian, praktik operasional, serta rasa keadilan yang berlaku pada saat layanan dijalankan.

---

## 3.15 Data & Privasi Teknis

### 3.15.1 [DS] Identitas Samaran

Setiap akun terdaftar memiliki identitas samaran unik (alias). Identitas samaran ini digunakan dalam interaksi antar-pengguna, sehingga mitra dan konsumen tidak perlu saling mengetahui identitas asli selama transaksi berlangsung.

**Contoh:** Ketika konsumen memesan ojek, yang tampil di aplikasi mitra adalah alias konsumen (misalnya "Pengguna-2847"), bukan nama asli atau nomor telepon. Sebaliknya, konsumen melihat alias mitra. Identitas asli hanya diakses oleh sistem dan pihak berwenang jika diperlukan.

### 3.15.2 [DS] Enkripsi Data

Data pribadi dan data transaksi dilindungi dengan enkripsi. Ini mencakup:
- Data saat dikirim (in-transit).
- Data saat disimpan (at-rest).
- Data pembayaran.

**Contoh:** Nomor telepon dan alamat konsumen dienkripsi saat dikirim ke mitra. Mitra hanya melihat informasi yang diperlukan untuk menyelesaikan order.

### 3.15.3 [DS] Akses Data Terbatas

- Akses data dibatasi berdasarkan peran: administrator, auditor, mitra, konsumen.
- Administrator dan auditor memiliki batasan terhadap data yang dilihat.
- Akses data lintas entitas harus melalui permintaan resmi dan persetujuan, serta tercatat dalam log.
- Sistem dilengkapi dengan mekanisme peringatan otomatis jika terdeteksi aktivitas akses data yang mencurigakan atau tidak wajar.

**Contoh:** Seorang administrator tidak dapat melihat data pribadi mitra tanpa alasan operasional yang sah. Setiap akses dicatat dan dapat diaudit.

### 3.15.4 [DS] Data Darurat

Data penting yang bersifat darurat (misalnya data kesehatan atau kontak darurat) disimpan terpisah dari data pribadi utama, dan hanya diakses dalam kondisi tertentu.

**Contoh:** Jika terjadi kecelakaan, petugas darurat dapat mengakses kontak darurat mitra atau konsumen melalui mekanisme khusus yang tercatat.

### 3.15.5 [DS] Hak Subjek Data Pribadi

Pengguna memiliki hak atas data pribadinya, meliputi:
- **Hak akses**: Melihat data pribadi yang disimpan.
- **Hak koreksi**: Memperbaiki data yang tidak akurat.
- **Hak penghapusan**: Meminta penghapusan data, dengan memperhatikan kewajiban penyimpanan data yang berlaku.
- **Hak penarikan persetujuan**: Menarik persetujuan pemrosesan data.

**Contoh:** Konsumen dapat meminta penghapusan riwayat order-nya. Namun, data yang wajib disimpan untuk keperluan hukum (misalnya data transaksi keuangan) tetap disimpan sesuai ketentuan.

### 3.15.6 [DS] Penghapusan Akun

- Jika permintaan penghapusan akun tanpa keluar dari keanggotaan koperasi, maka akun dihapus tanpa menghapus data perkoperasian.
- Jika permintaan penghapusan hanya keanggotaan koperasi, maka hanya data perkoperasian yang dihapus.
- Jika permintaan penghapusan akun dan keanggotaan koperasi, maka akan dihapus total.
- Penghapusan data dilakukan sesuai hak Subjek Data Pribadi dan ketentuan mengenai kewajiban penyimpanan data yang berlaku.

**Contoh:** Mitra yang mengundurkan diri dapat meminta penghapusan akun. Data pribadinya dihapus, tetapi riwayat transaksi yang diperlukan untuk audit tetap disimpan dalam bentuk agregat.

### 3.15.7 [DS] Pencegahan Penyalahgunaan Data

- Data tidak dijual kepada pihak ketiga.
- Data tidak digunakan untuk tujuan di luar layanan tanpa persetujuan.
- Identitas donatur dengan nilai di atas ambang tertentu dapat diverifikasi untuk keperluan audit dan pencegahan TPPU.
- Identitas donatur tidak dipublikasikan tanpa persetujuan.

> **Rujukan**
> Prinsip data & privasi dijelaskan dalam PGR-MST-BAG4 v0.2.0 §4.11.
> Ketentuan hukum tentang perlindungan data pribadi dijelaskan dalam PGR-MST-LB v0.2.0 §B.5.

---

## Catatan Akhir Bagian 3

Bagian ini menetapkan model layanan yang menjadi dasar operasional platform. Semua rancangan masih memerlukan validasi lebih lanjut dengan data aktual dan umpan balik komunitas.

**Referensi Silang**
- Identitas dan prinsip: Lihat PGR-MST-BAG1 v0.2.0
- Model ekonomi dan simulasi: Lihat PGR-MST-BAG2 v0.2.0
- Kelembagaan dan governance: Lihat PGR-MST-BAG4 v0.2.0
- Roadmap milestone: Lihat PGR-MST-BAG5 v0.2.0
- Glosarium lengkap: Lihat PGR-MST-LA v0.2.0
- Referensi hukum: Lihat PGR-MST-LB v0.2.0

---

*Akhir dokumen PGR-MST-BAG3*