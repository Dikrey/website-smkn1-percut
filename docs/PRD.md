# Product Requirements Document (PRD)

## 1. Informasi dokumen

| Item | Detail |
|---|---|
| Nama produk | Website Profil SMK Negeri 1 Percut Sei Tuan |
| Versi PRD | 1.0 |
| Status | Draft awal untuk validasi sekolah |
| Platform | Website responsif (desktop, tablet, mobile) |
| Framework | Next.js 16.4.6, App Router, TypeScript |
| Bahasa | Bahasa Indonesia |
| Referensi visual dan struktur | https://nextjs.dihapra.dev/ |

## 2. Ringkasan produk

Website profil resmi **SMK Negeri 1 Percut Sei Tuan** menjadi kanal informasi sekolah yang mudah diakses oleh calon peserta didik, orang tua/wali, siswa, alumni, guru, mitra industri, dan masyarakat. Website memperkenalkan identitas sekolah, lima program keahlian, gambaran pembelajaran, fasilitas, prestasi, kerja sama industri, karya siswa, alumni, berita, galeri, dan informasi kontak.

Produk mengambil pendekatan visual editorial-modern dari website referensi: tipografi besar, ruang putih yang lega, warna hijau gelap sebagai warna identitas, kartu program dengan warna aksen berbeda, navigasi yang ringkas, dan halaman detail tiap program dengan navigasi bagian.

Website starter dalam ZIP ini sudah menyediakan kerangka Next.js, beranda, template dinamis lima program keahlian, responsivitas, metadata dasar, serta komponen konten contoh. Konten resmi sekolah tetap memerlukan validasi dan pengisian oleh pihak berwenang.

## 3. Latar belakang dan masalah

Informasi sekolah dan program keahlian perlu disajikan dalam satu tempat yang terstruktur. Tanpa halaman resmi yang konsisten, calon siswa dan orang tua dapat kesulitan membandingkan program, memahami kompetensi yang dipelajari, mencari kontak, atau menemukan dokumentasi kegiatan terbaru.

### Masalah yang ingin diselesaikan

1. Informasi profil dan program keahlian tersebar atau belum tersaji dalam format yang mudah dipahami.
2. Calon siswa membutuhkan gambaran praktis mengenai kompetensi, kurikulum, fasilitas, dan peluang karier.
3. Prestasi, karya, kegiatan, dan kemitraan sekolah membutuhkan kanal dokumentasi yang mudah diperbarui.
4. Pengunjung mobile membutuhkan pengalaman navigasi yang jelas dan ringan.

## 4. Tujuan produk dan indikator keberhasilan

### Tujuan utama

- Memperkuat kehadiran digital SMK Negeri 1 Percut Sei Tuan.
- Memudahkan pengunjung menemukan informasi sekolah dan lima program keahlian.
- Membantu calon peserta didik memahami karakter masing-masing program.
- Menyediakan struktur konten yang dapat dikembangkan menjadi sistem pengelolaan konten.
- Meningkatkan aksesibilitas informasi kontak, kegiatan, dan dokumentasi sekolah.

### Indikator keberhasilan (target awal, perlu disepakati)

| Indikator | Target awal | Cara ukur |
|---|---:|---|
| Halaman program tersedia | 5 dari 5 | Audit URL |
| Halaman dapat digunakan di layar mobile | 100% halaman utama dan program | Uji perangkat / responsive test |
| Waktu muat halaman utama pada koneksi memadai | LCP < 2,5 detik sebagai sasaran | Lighthouse / PageSpeed Insights |
| Tautan navigasi utama berfungsi | 100% | Uji fungsional |
| Konten wajib sekolah terverifikasi sebelum publikasi | 100% | Checklist persetujuan konten |
| Informasi kontak valid | 100% | Konfirmasi tata usaha |

Angka di atas merupakan sasaran proyek, bukan statistik kinerja website yang sudah diukur.

## 5. Target pengguna dan kebutuhan

### 5.1 Calon peserta didik

- Mengenal sekolah dan program keahlian.
- Membandingkan bidang pembelajaran dan prospek kerja.
- Menemukan informasi pendaftaran atau kontak resmi.

### 5.2 Orang tua / wali

- Memahami profil, fasilitas, aktivitas, dan arah pembelajaran sekolah.
- Menemukan kanal komunikasi yang benar.
- Memperoleh informasi yang jelas dan dapat dipercaya.

### 5.3 Siswa aktif dan alumni

- Melihat dokumentasi kegiatan, prestasi, karya, dan kabar program.
- Menemukan kanal untuk berbagi karya atau informasi alumni.

### 5.4 Guru, ketua program, dan admin sekolah

- Menampilkan profil program dan informasi akademik yang telah disetujui.
- Memperbarui berita, galeri, prestasi, mitra, dan kontak.
- Menjaga keakuratan serta konsistensi informasi.

### 5.5 Mitra industri dan masyarakat

- Memahami bidang kompetensi yang tersedia.
- Menemukan informasi untuk kerja sama, PKL, kunjungan, atau kegiatan bersama.

## 6. Ruang lingkup

### 6.1 MVP — termasuk dalam starter project

- Beranda sekolah.
- Identitas nama dan tagline sekolah.
- Ringkasan profil dan bagian visi-misi.
- Daftar lima program keahlian.
- Halaman detail dinamis untuk PPLG, TJKT, DKV, AKL, dan MPLB.
- Bagian detail program: profil, guru/organisasi, kurikulum, fasilitas, prestasi, mitra/PKL, karya siswa, alumni, berita, galeri, kontak.
- Navigasi responsif desktop/mobile.
- Footer dengan navigasi dan informasi kontak.
- Metadata SEO dasar dan struktur heading semantik.
- Data konten terpusat pada file TypeScript.
- Dokumentasi setup dan checklist konten.

### 6.2 Tahap pengembangan berikutnya (belum termasuk fungsi backend)

- CMS / dashboard admin untuk mengelola berita, galeri, guru, prestasi, mitra, dan konten program.
- Database terstruktur.
- Sistem login dan role-based access control.
- Formulir PPDB atau pendaftaran online.
- Integrasi WhatsApp resmi.
- Pencarian berita dan filter galeri.
- Peta lokasi, integrasi media sosial, dan analitik.
- Multi-bahasa jika dibutuhkan.

### 6.3 Di luar ruang lingkup MVP

- Sistem akademik internal (nilai, presensi, rapor, jadwal).
- Sistem pembayaran.
- Penyimpanan dokumen pribadi siswa.
- Portal e-learning atau ujian online.
- Aplikasi native Android/iOS.

## 7. Arsitektur informasi dan sitemap

```text
/
├── Beranda
│   ├── Hero / identitas sekolah
│   ├── Tentang kami
│   ├── Program keahlian
│   ├── Keunggulan
│   └── Kontak / CTA
│
└── /jurusan/[slug]
    ├── /jurusan/pplg
    ├── /jurusan/tjkt
    ├── /jurusan/dkv
    ├── /jurusan/akl
    └── /jurusan/mplb
        ├── Profil
        ├── Guru & organisasi
        ├── Kurikulum
        ├── Fasilitas
        ├── Prestasi
        ├── Mitra & PKL
        ├── Karya siswa
        ├── Alumni
        ├── Berita
        ├── Galeri
        └── Kontak
```

Navigasi primer pada MVP menggunakan anchor menuju bagian beranda. Setiap program memiliki URL permanen untuk memudahkan berbagi tautan dan pengindeksan mesin pencari.

## 8. Kebutuhan fungsional

### FR-01 — Identitas sekolah

Website harus menampilkan nama **SMK Negeri 1 Percut Sei Tuan**, tagline "Siap Kerja, Siap Kuliah, Siap Berwirausaha", dan informasi ringkas sekolah.

**Kriteria penerimaan:** nama sekolah dan tagline terlihat pada header/hero/footer; konsisten di metadata; tidak ada variasi penulisan yang tidak disengaja.

### FR-02 — Navigasi global

Website menyediakan navigasi menuju profil, program keahlian, keunggulan, dan kontak.

**Kriteria penerimaan:** navigasi dapat dioperasikan dengan mouse dan keyboard; menu mobile dapat dibuka/ditutup; setiap tautan menuju bagian yang benar.

### FR-03 — Beranda

Beranda menampilkan hero, ringkasan sekolah, program, keunggulan, dan kontak.

**Kriteria penerimaan:** seluruh bagian tampil tanpa overflow horizontal pada lebar mobile; CTA program menuju bagian program; CTA kontak menuju bagian kontak.

### FR-04 — Daftar program keahlian

Website menampilkan lima program: PPLG, TJKT, DKV, AKL, dan MPLB, beserta nama lengkap dan deskripsi.

**Kriteria penerimaan:** kelima kartu tampil; setiap kartu membuka detail yang sesuai; urutan dan label program konsisten dengan data sekolah.

### FR-05 — Halaman detail program

Setiap program mempunyai halaman dinamis dengan informasi yang relevan dan navigasi bagian.

**Kriteria penerimaan:** kelima slug tersedia; slug yang tidak dikenal menampilkan halaman 404; setiap anchor menuju section yang tepat.

### FR-06 — Profil program

Menampilkan pengantar, keunggulan pembelajaran, visi, misi, dan tujuan program.

**Kriteria penerimaan:** konten visi/misi berasal dari dokumen resmi; jika belum disediakan, admin melihat item dalam checklist dan tidak membiarkan teks contoh dipublikasikan.

### FR-07 — Guru dan organisasi

Menampilkan pengelola program, guru produktif, laboran, dan jabatan terkait.

**Kriteria penerimaan:** nama, jabatan, dan foto telah dikonfirmasi; konten yang menampilkan individu hanya dipublikasikan setelah mendapat persetujuan.

### FR-08 — Kurikulum

Menampilkan bidang kompetensi dan pengelompokan materi per tingkat kelas.

**Kriteria penerimaan:** materi telah diverifikasi ketua program dan wakil kepala sekolah bidang kurikulum; label kurikulum mengikuti dokumen yang berlaku.

### FR-09 — Fasilitas

Menampilkan fasilitas praktik beserta deskripsi dan foto.

**Kriteria penerimaan:** foto berasal dari fasilitas aktual; nama dan kondisi sarana sesuai inventaris.

### FR-10 — Prestasi

Menampilkan nama lomba, siswa/tim, tingkat, tahun, dan dokumentasi.

**Kriteria penerimaan:** klaim prestasi memiliki bukti atau sumber verifikasi; data siswa dan foto mendapat persetujuan publikasi.

### FR-11 — Mitra dan PKL

Menampilkan mitra yang disetujui, bentuk kerja sama, dan alur PKL.

**Kriteria penerimaan:** nama/logo mitra digunakan dengan izin yang sesuai; status kerja sama masih valid; informasi PKL dikonfirmasi koordinator.

### FR-12 — Karya siswa

Menampilkan judul karya, ringkasan, tahun, teknologi/alat, dan tautan demo bila ada.

**Kriteria penerimaan:** pemilik karya memberi izin; informasi tidak membocorkan data sensitif; tautan eksternal telah diperiksa.

### FR-13 — Alumni

Menampilkan cerita singkat, posisi/studi lanjut, serta kutipan alumni.

**Kriteria penerimaan:** testimoni mendapat persetujuan eksplisit; informasi pekerjaan atau studi diperbarui dan diverifikasi.

### FR-14 — Berita dan galeri

Website menyediakan area publikasi berita dan dokumentasi program.

**Kriteria penerimaan:** berita memiliki judul, tanggal, ringkasan, foto, dan sumber; foto memiliki teks alternatif; foto siswa dipublikasikan dengan izin.

### FR-15 — Kontak

Menampilkan alamat, telepon, email, serta kanal kontak resmi.

**Kriteria penerimaan:** semua kanal diuji; tidak ada alamat email/nomor dummy; CTA tidak mengarah ke placeholder.

## 9. Kebutuhan non-fungsional

### 9.1 Responsivitas

- Mendukung lebar layar mulai 360 px hingga desktop besar.
- Tidak ada scroll horizontal yang tidak disengaja.
- Navigasi mobile dapat digunakan dengan satu tangan.

### 9.2 Performa

- Gunakan Next.js Image untuk aset gambar.
- Optimalkan ukuran foto dan gunakan format modern (WebP/AVIF bila tersedia).
- Hindari dependensi UI berat yang tidak diperlukan.
- Target Core Web Vitals dievaluasi setelah hosting dan aset final tersedia.

### 9.3 Aksesibilitas

- Gunakan elemen HTML semantik.
- Pastikan kontras teks dan latar memadai.
- Semua kontrol interaktif dapat dicapai melalui keyboard.
- Gambar informatif memiliki alt text, gambar dekoratif menggunakan alt kosong.
- Fokus keyboard terlihat jelas.

### 9.4 SEO

- Setiap halaman memiliki title dan description unik.
- Gunakan heading yang terstruktur.
- URL program mudah dibaca.
- Tambahkan Open Graph, favicon, sitemap.xml, robots.txt, dan schema.org pada tahap deployment.
- Konten berita yang dipublikasikan perlu canonical URL dan tanggal terstruktur.

### 9.5 Keamanan dan privasi

- Tidak menampilkan data pribadi siswa tanpa dasar dan persetujuan yang sesuai.
- Tidak menyimpan kredensial di source code.
- Jika CMS ditambahkan, autentikasi dan otorisasi harus diberlakukan pada server.
- Validasi input server-side untuk formulir dan konten yang dikirim pengguna.

### 9.6 Maintainability

- Konten MVP tersimpan pada satu modul data.
- Komponen UI dipisah berdasarkan tanggung jawab.
- Gunakan TypeScript strict mode.
- Perubahan konten sebaiknya tidak memerlukan perubahan pada banyak komponen.

## 10. Model konten dan data yang dibutuhkan

### Sekolah

- Nama resmi dan singkatan.
- Logo dan panduan identitas visual.
- Tagline.
- Sejarah singkat.
- Visi, misi, tujuan.
- Alamat, nomor telepon, email, situs/media sosial resmi.
- Foto sekolah, kepala sekolah, fasilitas, kegiatan.

### Program keahlian

- Kode dan nama program yang sudah disahkan.
- Deskripsi dan profil.
- Sejarah program.
- Visi, misi, tujuan program.
- Kepala konsentrasi / ketua program dan daftar guru.
- Kurikulum serta daftar mata pelajaran/kompetensi.
- Sarana dan prasarana.
- Data siswa/rombel jika akan dipublikasikan.
- Prestasi.
- Mitra dan daftar lokasi PKL.
- Karya siswa.
- Alumni dan testimoni.
- Berita dan galeri.
- Kontak program.

### Berita

- Judul, slug, tanggal terbit, penulis/editor.
- Ringkasan dan isi.
- Gambar utama dan teks alternatif.
- Kategori/tag.
- Status draft/publikasi.

### Galeri

- Foto/video, judul, deskripsi, tanggal kegiatan.
- Program terkait.
- Kredit foto dan status persetujuan publikasi.

## 11. Aturan desain dan UX

### Arah visual

- Gaya: modern, editorial, profesional, hangat, dan edukatif.
- Warna utama: hijau gelap dan hijau alami; warna aksen dibedakan per program.
- Tipografi: sans-serif untuk navigasi dan informasi, serif italic sebagai aksen editorial.
- Layout: grid, whitespace cukup, radius kecil, garis pemisah tipis, dan kartu yang jelas.
- Fotografi: gunakan foto asli sekolah dan kegiatan praktik, bukan gambar stok sebagai representasi fasilitas sekolah.

### Komponen inti

- Header sticky dengan navigasi desktop/mobile.
- Hero dengan judul, deskripsi, CTA, foto kegiatan.
- Section heading bernomor.
- Program card dengan kode, deskripsi, dan tautan.
- Benefit list.
- Contact panel.
- Footer dengan sitemap mini.
- Sidebar anchor untuk halaman detail program.
- Empty state yang jelas untuk konten belum tersedia.

### Prinsip isi

- Ringkas dan konkret.
- Hindari klaim statistik tanpa sumber.
- Hindari menampilkan placeholder atau data dummy pada situs produksi.
- Selalu gunakan nama resmi dan bahasa yang konsisten.

## 12. Teknologi dan arsitektur

| Lapisan | Teknologi | Fungsi |
|---|---|---|
| Framework web | Next.js 16.4.6 | Routing, rendering, metadata, optimasi gambar |
| UI | React 19 + TypeScript | Komponen dan tipe data |
| Styling | CSS native | Layout, warna, responsivitas |
| Routing | App Router | Beranda dan route dinamis program |
| Konten MVP | Modul TypeScript | Menyimpan data sekolah/program |
| Hosting | Platform Node.js / Vercel | Deployment |
| CMS (fase berikutnya) | Belum ditentukan | Pengelolaan konten non-teknis |

### Rute aplikasi

- `/` — beranda.
- `/jurusan/pplg` — detail PPLG.
- `/jurusan/tjkt` — detail TJKT.
- `/jurusan/dkv` — detail DKV.
- `/jurusan/akl` — detail AKL.
- `/jurusan/mplb` — detail MPLB.

## 13. Analitik dan pelaporan

Setelah domain dan kebijakan privasi disetujui, pertimbangkan analitik dengan pengumpulan data minimum untuk mengukur:

- Kunjungan beranda dan detail program.
- Program yang paling sering dibuka.
- Klik CTA kontak dan tautan program.
- Sumber trafik dan perangkat pengunjung.

Penggunaan analytics/cookies harus mengikuti kebijakan sekolah dan ketentuan privasi yang berlaku.

## 14. Risiko, asumsi, dan dependensi

| Risiko / asumsi | Dampak | Mitigasi |
|---|---|---|
| Data profil sekolah belum lengkap | Informasi publik kurang akurat | Checklist dan persetujuan konten sebelum publikasi |
| Foto sekolah belum tersedia | Visual website belum merepresentasikan sekolah | Gunakan foto resmi yang telah mendapat izin |
| Kurikulum contoh dianggap resmi | Misinformasi akademik | Validasi ketua program dan tim kurikulum |
| Kontak placeholder terlupa diganti | Pengunjung tidak dapat menghubungi sekolah | Uji semua CTA dan kontak sebelum go-live |
| Tidak ada CMS pada MVP | Update membutuhkan bantuan teknis | Pertimbangkan CMS setelah struktur konten final |
| Foto/testimoni siswa tanpa izin | Risiko privasi dan reputasi | Proses persetujuan dan editorial checklist |

## 15. Rencana pengujian dan kriteria go-live

### Pengujian fungsional

- [ ] Logo dan nama sekolah kembali ke beranda.
- [ ] Semua tautan navigasi bekerja.
- [ ] Lima kartu program membuka halaman yang benar.
- [ ] Semua anchor halaman detail menuju bagian yang benar.
- [ ] Slug salah menampilkan 404.
- [ ] CTA kontak menggunakan alamat resmi.
- [ ] Tidak ada tautan, statistik, email, atau nomor telepon contoh yang tersisa.

### Pengujian visual dan aksesibilitas

- [ ] Uji lebar 360 px, 390 px, 768 px, 1024 px, dan desktop.
- [ ] Tidak ada overflow horizontal.
- [ ] Kontras warna diperiksa.
- [ ] Navigasi dapat digunakan melalui keyboard.
- [ ] Alt text gambar sudah relevan.
- [ ] Foto tidak pecah atau tertarik.

### Pengujian teknis

- [ ] `npm run typecheck` berhasil.
- [ ] `npm run build` berhasil.
- [ ] Metadata dan favicon tampil.
- [ ] Semua halaman penting dapat diakses langsung melalui URL.
- [ ] Performa dan Core Web Vitals diperiksa setelah deploy.

### Persetujuan go-live

- [ ] Kepala sekolah / pejabat yang ditunjuk menyetujui identitas dan konten profil.
- [ ] Ketua setiap program mengonfirmasi data program.
- [ ] Tim kurikulum mengonfirmasi daftar kompetensi.
- [ ] Tata usaha mengonfirmasi kontak dan alamat.
- [ ] Penanggung jawab publikasi menyetujui foto, logo, berita, dan testimoni.

## 16. Roadmap pengembangan

| Fase | Fokus | Hasil |
|---|---|---|
| 1 — MVP | Beranda, halaman program, konten dasar, responsivitas | Website profil dapat diuji |
| 2 — Konten | Data resmi, berita, galeri, foto, prestasi, mitra | Website siap dipublikasikan |
| 3 — CMS | Admin login, manajemen konten, workflow persetujuan | Update konten tanpa mengubah kode |
| 4 — Integrasi | PPDB, WhatsApp, peta, analytics | Layanan informasi lebih lengkap |

## 17. Keputusan yang perlu disetujui sekolah

1. Apakah penamaan lima program pada website sama persis dengan nomenklatur resmi terbaru?
2. Siapa PIC pemilik konten sekolah dan PIC masing-masing program?
3. Apakah website akan hanya menjadi profil publik, atau juga menangani formulir PPDB?
4. Siapa yang berwenang menyetujui publikasi berita, foto, data siswa, dan testimoni alumni?
5. Domain, hosting, dan email resmi apa yang akan digunakan?
6. Apakah sekolah memerlukan CMS pada tahap awal atau cukup mengelola konten melalui repository?
