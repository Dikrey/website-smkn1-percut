# Website SMK Negeri 1 Percut Sei Tuan

Starter website sekolah berbasis **Next.js 16.4.6 + App Router + TypeScript**. Struktur dan arah desain mengikuti referensi https://nextjs.dihapra.dev/ dengan konten contoh yang harus diverifikasi dan diganti menggunakan data resmi sekolah.

## Fitur yang sudah tersedia

- Beranda sekolah dengan hero, ringkasan identitas, lima kartu program keahlian, keunggulan, dan ajakan menghubungi sekolah.
- Halaman detail jurusan dinamis di `/jurusan/[slug]` untuk PPLG, TJKT, DKV, AKL, dan MPLB.
- Bagian detail program: profil, guru & organisasi, kurikulum, fasilitas, prestasi, mitra & PKL, karya siswa, alumni, berita, galeri, dan kontak.
- Navigasi responsif untuk desktop dan perangkat seluler.
- Metadata dasar untuk SEO dan struktur konten terpusat di `lib/school-data.ts`.
- Dokumen PRD dan checklist pengumpulan konten sekolah di folder `docs/`.

## Kebutuhan sistem

- Node.js **20.9.0 atau lebih baru**.
- npm (disertakan bersama Node.js).

## Menjalankan di komputer lokal

```bash
# 1. Ekstrak ZIP, lalu masuk ke folder proyek
cd smkn1-percut-website

# 2. Pasang dependency
npm install

# 3. Jalankan mode development
npm run dev
```

Buka http://localhost:3000.

## Pemeriksaan sebelum produksi

```bash
npm run typecheck
npm run build
npm run start
```

## Struktur utama

```text
app/
  layout.tsx                 # layout global, header, footer, metadata
  page.tsx                   # beranda
  globals.css                # desain responsif
  jurusan/[slug]/page.tsx    # template detail lima program keahlian
components/
  site-header.tsx            # navigasi responsif
  site-footer.tsx            # footer
  program-card.tsx           # kartu program
lib/
  school-data.ts             # identitas, program, dan konten yang dapat diedit
  utils.ts                   # helper slug
public/
  favicon.svg
  school-mark.svg
  images/                     # tempat foto resmi sekolah

docs/
  PRD.md
  CONTENT-CHECKLIST.md
```

## Cara mengganti konten

1. Buka `lib/school-data.ts`.
2. Perbarui deskripsi sekolah, kontak, visi-misi, nama guru, jumlah siswa, prestasi, mitra, karya, berita, dan galeri menggunakan data yang sudah disetujui sekolah.
3. Tambahkan foto asli ke `public/images/`, lalu ubah properti gambar pada file data atau komponen terkait.
4. Jangan memublikasikan nomor telepon, email, foto, testimoni alumni, atau data siswa tanpa persetujuan yang berwenang.

## Catatan penting tentang data

Website referensi memuat beberapa teks contoh seperti visi/misi, alamat, nomor telepon, email, statistik, nama guru, mitra, prestasi, serta berita. Data tersebut tidak dianggap sebagai fakta resmi di proyek ini. Elemen yang belum tersedia ditandai agar admin menggantinya sebelum website dipublikasikan.

Konten kurikulum yang ditampilkan pada halaman program adalah **rancangan/topik contoh**, bukan dokumen kurikulum resmi. Validasi dengan ketua program keahlian dan kurikulum sekolah terlebih dahulu.

## Deployment

Proyek dapat dideploy ke layanan yang mendukung Next.js (misalnya Vercel atau server Node.js). Untuk deployment produksi, jalankan `npm run build` dan `npm run start`, serta pastikan Node.js server menggunakan versi minimal 20.9.0.
