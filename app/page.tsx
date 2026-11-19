import Link from "next/link";
import ProgramCard from "@/components/program-card";
import { homeBenefits, programs, school } from "@/lib/school-data";

export default function HomePage() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><span className="eyebrow-dot" /> SEKOLAH MENENGAH KEJURUAN</span>
            <h1>Masa depan dimulai dari <em>keahlian.</em></h1>
            <p className="hero-lead">{school.name} membekali generasi muda dengan kompetensi, karakter, dan pengalaman praktik untuk melangkah dengan percaya diri.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#program">Lihat program keahlian <span aria-hidden="true">↗</span></Link>
              <Link className="button button-quiet" href="#kontak">Hubungi sekolah <span aria-hidden="true">→</span></Link>
            </div>
            <div className="hero-note">
              <span className="hero-note-line" />
              <span>{school.tagline}</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <div className="hero-art" aria-hidden="true">
                <span className="hero-art-sun" />
                <span className="hero-art-ring hero-art-ring-one" />
                <span className="hero-art-ring hero-art-ring-two" />
                <span className="hero-art-tile hero-art-tile-one">IDE<span>01</span></span>
                <span className="hero-art-tile hero-art-tile-two">KARYA<span>02</span></span>
                <span className="hero-art-line" />
                <span className="hero-art-label">RUANG UNTUK BERTUMBUH</span>
              </div>
              <div className="hero-image-caption">
                <span className="caption-kicker">BELAJAR · BERKARYA · BERTUMBUH</span>
                <strong>Temukan potensi.<br />Wujudkan karya.</strong>
              </div>
            </div>
            <div className="hero-float-card">
              <span className="float-card-icon">✳</span>
              <span><strong>5 program keahlian</strong><small>Satu tujuan: masa depan yang lebih siap</small></span>
            </div>
            <span className="hero-orbit orbit-one" />
            <span className="hero-orbit orbit-two" />
          </div>
        </div>
        <div className="container hero-bottom-line">
          <span>01 / PROFIL SEKOLAH</span>
          <span>MEDAN · SUMATERA UTARA</span>
          <a href="#profil">Gulir untuk mengenal sekolah <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <section className="intro-section section-space" id="profil">
        <div className="container intro-grid">
          <div className="section-aside">
            <span className="section-number">01</span>
            <span className="section-kicker">TENTANG KAMI</span>
          </div>
          <div className="intro-content">
            <div className="intro-heading-row">
              <h2>Belajar dengan tangan sendiri, <em>siap menghadapi dunia.</em></h2>
              <span className="round-stamp">SMKN<br />1 PERCUT</span>
            </div>
            <p className="intro-lead">{school.description}</p>
            <div className="intro-details">
              <div className="vision-card">
                <span className="card-label">VISI SEKOLAH</span>
                <p>{school.vision}</p>
                <span className="draft-note">Konten perlu disesuaikan dengan dokumen resmi sekolah.</span>
              </div>
              <div className="mission-card">
                <span className="card-label">ARAH PENGEMBANGAN</span>
                {school.missions.map((mission, index) => (
                  <div className="mission-item" key={mission}>
                    <span>0{index + 1}</span>
                    <p>{mission}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="program-section section-space" id="program">
        <div className="container">
          <div className="section-heading section-heading-wide">
            <div>
              <div className="section-aside inline-aside"><span className="section-number">02</span><span className="section-kicker">PROGRAM KEAHLIAN</span></div>
              <h2>Lima jalur menuju <em>dunia kerja.</em></h2>
            </div>
            <p>Kenali bidang keahlian, kompetensi yang dipelajari, dan peluang yang dapat dikembangkan bersama setiap program.</p>
          </div>
          <div className="program-grid">
            {programs.map((program, index) => <ProgramCard key={program.slug} program={program} index={index} />)}
          </div>
          <div className="program-footnote"><span>5 PROGRAM KEAHLIAN</span><span>Pilih kartu untuk melihat profil, kurikulum, fasilitas, dan informasi program.</span></div>
        </div>
      </section>

      <section className="benefit-section section-space" id="keunggulan">
        <div className="container benefit-grid">
          <div className="benefit-heading">
            <div className="section-aside inline-aside"><span className="section-number">03</span><span className="section-kicker">KEUNGGULAN</span></div>
            <h2>Belajar hari ini.<br /><em>Siap untuk esok.</em></h2>
            <p>Pengalaman sekolah yang baik tumbuh dari praktik, pendampingan, kolaborasi, dan kesempatan untuk menunjukkan karya.</p>
            <Link className="text-link" href="#kontak">Kenali sekolah lebih dekat <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="benefit-list">
            {homeBenefits.map((benefit) => (
              <article className="benefit-item" key={benefit.number}>
                <span className="benefit-number">{benefit.number}</span>
                <div><h3>{benefit.title}</h3><p>{benefit.description}</p></div>
                <span className="benefit-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="container quote-inner">
          <span className="quote-mark" aria-hidden="true">“</span>
          <p>Kompetensi yang kuat tumbuh dari rasa ingin tahu, latihan yang konsisten, dan keberanian untuk mencoba.</p>
          <span className="quote-caption">SEMANGAT BELAJAR SMKN 1 PERCUT</span>
        </div>
      </section>

      <section className="contact-section section-space" id="kontak">
        <div className="container contact-panel">
          <div className="contact-copy">
            <span className="section-kicker">MULAI PERJALANANMU</span>
            <h2>Temukan bidang yang membuatmu <em>bertumbuh.</em></h2>
            <p>Hubungi sekolah untuk mendapatkan informasi resmi mengenai program keahlian, penerimaan peserta didik baru, kunjungan, dan kerja sama.</p>
            <Link className="button button-light" href="#program">Jelajahi program <span aria-hidden="true">↗</span></Link>
            <small className="contact-disclaimer">Kanal kontak resmi akan ditampilkan setelah dikonfirmasi pihak sekolah.</small>
          </div>
          <div className="contact-details">
            <div><span>ALAMAT</span><p>{school.address}</p></div>
            <div><span>TELEPON</span><p>{school.phone}</p></div>
            <div><span>EMAIL</span><p>{school.email}</p></div>
            <div className="contact-school-name"><span>IDENTITAS SEKOLAH</span><strong>{school.name}</strong></div>
          </div>
          <span className="contact-decoration" aria-hidden="true">SMK<br />01</span>
        </div>
      </section>
    </main>
  );
}
