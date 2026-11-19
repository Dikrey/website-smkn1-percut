import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { detailSections, programs, school } from "@/lib/school-data";
import { getProgramBySlug } from "@/lib/utils";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) return { title: "Program tidak ditemukan" };
  return {
    title: `${program.acronym} — ${program.name}`,
    description: program.description
  };
}

const placeholderTeam = [
  { role: "Kepala Konsentrasi", name: "Nama kepala konsentrasi", detail: "Lengkapi dengan nama dan jabatan resmi." },
  { role: "Ketua Program", name: "Nama ketua program", detail: "Lengkapi sesuai struktur organisasi." },
  { role: "Laboran / Teknisi", name: "Nama laboran", detail: "Tambahkan jika tersedia pada program." }
];

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgramBySlug(slug);
  if (!program) notFound();

  return (
    <main className={`program-detail theme-${program.theme}`}>
      <section className="detail-hero">
        <div className="container detail-hero-grid">
          <div className="detail-hero-copy">
            <div className="breadcrumbs"><Link href="/">Beranda</Link><span>/</span><Link href="/#program">Program keahlian</Link><span>/</span><strong>{program.acronym}</strong></div>
            <span className="eyebrow"><span className="eyebrow-dot" /> PROGRAM KEAHLIAN · {program.acronym}</span>
            <h1>{program.name}</h1>
            <p>{program.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#kurikulum">Kenali kompetensi <span aria-hidden="true">↓</span></a>
              <a className="button button-quiet" href="#kontak">Hubungi sekolah <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="detail-hero-art">
            <div className="detail-art-orbit" />
            <span className="detail-art-symbol" aria-hidden="true">{program.icon}</span>
            <span className="detail-art-code">{program.acronym}</span>
            <span className="detail-art-caption">{program.focus}</span>
          </div>
        </div>
      </section>

      <div className="container detail-layout">
        <aside className="detail-sidebar" aria-label="Navigasi halaman program">
          <span className="sidebar-title">DALAM HALAMAN INI</span>
          {detailSections.map((section) => (
            <a key={section.id} href={`#${section.id}`}><span>{section.number}</span>{section.label}</a>
          ))}
        </aside>

        <div className="detail-content">
          <section className="detail-section profile-detail" id="profil">
            <div className="section-aside inline-aside"><span className="section-number">01</span><span className="section-kicker">PROFIL PROGRAM</span></div>
            <h2>Tumbuh melalui <em>praktik dan eksplorasi.</em></h2>
            <p className="detail-lead">{program.detailIntro}</p>
            <div className="detail-highlight-grid">
              <div><span>01</span><h3>Project-based</h3><p>Belajar melalui tugas, latihan, dan proyek yang mendorong penerapan kompetensi.</p></div>
              <div><span>02</span><h3>Standar kompetensi</h3><p>Materi dan praktik diarahkan agar relevan dengan perkembangan bidang keahlian.</p></div>
              <div><span>03</span><h3>Portofolio</h3><p>Dokumentasikan proses dan hasil belajar sebagai bukti perkembangan kompetensi.</p></div>
              <div><span>04</span><h3>Siap melangkah</h3><p>Bangun dasar untuk bekerja, melanjutkan pendidikan, maupun merintis usaha.</p></div>
            </div>
            <div className="detail-vision-grid">
              <div><span className="card-label">VISI PROGRAM</span><p>Visi resmi konsentrasi {program.acronym} perlu dilengkapi oleh pengelola program.</p></div>
              <div><span className="card-label">MISI PROGRAM</span><p>Tambahkan misi dan tujuan pembelajaran sesuai dokumen kurikulum serta kesepakatan tim program keahlian.</p></div>
            </div>
          </section>

          <section className="detail-section" id="guru">
            <div className="section-aside inline-aside"><span className="section-number">02</span><span className="section-kicker">GURU & ORGANISASI</span></div>
            <div className="section-title-row"><h2>Orang-orang di balik <em>kelas.</em></h2><p>Guru dan pengelola yang mendampingi proses belajar peserta didik.</p></div>
            <div className="team-grid">
              {placeholderTeam.map((person, index) => (
                <article className="team-card" key={person.role}>
                  <div className="team-avatar">0{index + 1}</div>
                  <span>{person.role}</span>
                  <h3>{person.name}</h3>
                  <p>{person.detail}</p>
                </article>
              ))}
            </div>
            <p className="content-note">Data nama, foto, dan jabatan harus mengikuti struktur organisasi sekolah dan memperoleh persetujuan sebelum ditampilkan.</p>
          </section>

          <section className="detail-section" id="kurikulum">
            <div className="section-aside inline-aside"><span className="section-number">03</span><span className="section-kicker">KURIKULUM</span></div>
            <div className="section-title-row"><h2>Apa yang <em>dipelajari.</em></h2><p>Gambaran bidang kompetensi untuk membantu calon peserta didik mengenal program.</p></div>
            <div className="learning-grid">
              {program.learningAreas.map((area, index) => (
                <article className="learning-card" key={area.title}><span>0{index + 1}</span><h3>{area.title}</h3><p>{area.description}</p></article>
              ))}
            </div>
            <div className="curriculum-grid">
              {program.curriculum.map((grade) => (
                <div className="curriculum-card" key={grade.grade}>
                  <span className="card-label">TAHAP PEMBELAJARAN</span><h3>{grade.grade}</h3>
                  <ul>{grade.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              ))}
            </div>
            <p className="content-note">Daftar di atas merupakan rancangan konten awal, bukan kutipan kurikulum resmi. Periksa kembali dengan wakil kepala sekolah bidang kurikulum dan ketua program.</p>
          </section>

          <section className="detail-section" id="fasilitas">
            <div className="section-aside inline-aside"><span className="section-number">04</span><span className="section-kicker">FASILITAS</span></div>
            <div className="section-title-row"><h2>Ruang praktik untuk <em>berkarya.</em></h2><p>Perlihatkan fasilitas nyata yang digunakan dalam pembelajaran program keahlian.</p></div>
            <div className="facility-panel">
              <div className="facility-image">
                <div className="facility-illustration" aria-hidden="true"><span>{program.icon}</span><i /><b>{program.acronym}</b></div>
                <span>FOTO FASILITAS AKTUAL MENUNGGU KONFIRMASI</span>
              </div>
              <div className="facility-copy"><span className="card-label">SARANA PRAKTIK</span><h3>Dukung proses belajar dengan fasilitas yang tepat.</h3><ul>{program.facilities.map((facility) => <li key={facility}>{facility}</li>)}</ul></div>
            </div>
            <p className="content-note">Daftar fasilitas di atas adalah contoh kebutuhan umum berdasarkan bidang program. Sesuaikan dengan inventaris dan kondisi aktual sekolah.</p>
          </section>

          <section className="detail-section compact-detail" id="prestasi">
            <div className="section-aside inline-aside"><span className="section-number">05</span><span className="section-kicker">PRESTASI</span></div>
            <div className="section-title-row"><h2>Capaian <em>peserta didik.</em></h2><p>Publikasikan prestasi terverifikasi, lengkap dengan tahun, tingkat lomba, dan dokumentasi.</p></div>
            <div className="empty-content"><span className="empty-number">01</span><div><h3>Belum ada data prestasi yang dimasukkan.</h3><p>Tambahkan nama kompetisi, nama siswa/tim (dengan persetujuan), kategori, tingkat, tahun, dan bukti dokumentasi.</p></div></div>
          </section>

          <section className="detail-section compact-detail" id="mitra">
            <div className="section-aside inline-aside"><span className="section-number">06</span><span className="section-kicker">MITRA & PKL</span></div>
            <div className="section-title-row"><h2>Belajar langsung di <em>industri.</em></h2><p>Dokumentasikan mitra aktif, bentuk kerja sama, dan alur praktik kerja lapangan.</p></div>
            <div className="pkl-steps">
              <article><span>TAHAP 01</span><h3>Persiapan</h3><p>Pembekalan, pemilihan mitra, dan penyiapan dokumen penempatan.</p></article>
              <article><span>TAHAP 02</span><h3>Pelaksanaan</h3><p>Peserta didik belajar di lingkungan kerja dengan pendampingan pembimbing.</p></article>
              <article><span>TAHAP 03</span><h3>Evaluasi</h3><p>Presentasi laporan, penilaian, refleksi, dan dokumentasi hasil PKL.</p></article>
            </div>
            <p className="content-note">Nama perusahaan/mitra dan status kerja sama harus dikonfirmasi sebelum dipublikasikan.</p>
          </section>

          <section className="detail-section compact-detail" id="karya">
            <div className="section-aside inline-aside"><span className="section-number">07</span><span className="section-kicker">KARYA SISWA</span></div>
            <div className="section-title-row"><h2>Dari kelas ke <em>dunia nyata.</em></h2><p>Tampilkan hasil proyek siswa yang sudah mendapat izin untuk dipublikasikan.</p></div>
            <div className="empty-content"><span className="empty-number">02</span><div><h3>Galeri karya siap dilengkapi.</h3><p>Masukkan judul, deskripsi, tahun, nama tim (opsional), teknologi/alat, dan tautan karya jika tersedia.</p></div></div>
          </section>

          <section className="detail-section compact-detail" id="alumni">
            <div className="section-aside inline-aside"><span className="section-number">08</span><span className="section-kicker">ALUMNI</span></div>
            <div className="section-title-row"><h2>Jejak <em>lulusan.</em></h2><p>Cerita alumni dapat menunjukkan ragam pilihan setelah menyelesaikan pendidikan.</p></div>
            <div className="empty-content"><span className="empty-number">03</span><div><h3>Profil alumni belum ditambahkan.</h3><p>Gunakan testimoni yang telah mendapat izin tertulis, serta pastikan jabatan dan institusi terbaru sudah diverifikasi.</p></div></div>
            <div className="career-tags"><span className="card-label">CONTOH PROSPEK KARIER</span><div>{program.careerPaths.map((career) => <span key={career}>{career}</span>)}</div></div>
          </section>

          <section className="detail-section compact-detail" id="berita">
            <div className="section-aside inline-aside"><span className="section-number">09</span><span className="section-kicker">BERITA</span></div>
            <div className="section-title-row"><h2>Kabar <em>terbaru.</em></h2><p>Berita kegiatan, kunjungan industri, kompetisi, dan agenda program.</p></div>
            <div className="empty-content"><span className="empty-number">04</span><div><h3>Belum ada berita yang dipublikasikan.</h3><p>Tambahkan judul, tanggal, ringkasan, foto, dan tautan berita lengkap setelah konten disetujui.</p></div></div>
          </section>

          <section className="detail-section compact-detail" id="galeri">
            <div className="section-aside inline-aside"><span className="section-number">10</span><span className="section-kicker">GALERI</span></div>
            <div className="section-title-row"><h2>Dokumentasi <em>kegiatan.</em></h2><p>Bangun galeri visual yang menampilkan proses belajar dan kehidupan sekolah.</p></div>
            <div className="gallery-placeholders"><div className="gallery-placeholder gallery-large"><span>FOTO PRAKTIK SISWA</span></div><div className="gallery-placeholder"><span>FOTO FASILITAS</span></div><div className="gallery-placeholder"><span>FOTO KEGIATAN</span></div></div>
            <p className="content-note">Ganti area contoh dengan foto asli sekolah. Pastikan izin publikasi foto siswa telah diperoleh.</p>
          </section>

          <section className="detail-section contact-detail" id="kontak">
            <div className="section-aside inline-aside"><span className="section-number">11</span><span className="section-kicker">KONTAK PROGRAM</span></div>
            <h2>Tertarik bergabung dengan <em>{program.acronym}?</em></h2>
            <p>Hubungi sekolah untuk informasi program, penerimaan peserta didik baru, kunjungan, atau kerja sama.</p>
            <div className="detail-contact-grid"><div><span>ALAMAT SEKOLAH</span><strong>{school.address}</strong></div><div><span>EMAIL SEKOLAH</span><strong>{school.email}</strong></div></div>
            <Link className="button button-primary" href="/#kontak">Lihat kontak sekolah <span aria-hidden="true">↗</span></Link>
          </section>
        </div>
      </div>
    </main>
  );
}
