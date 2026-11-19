import Link from "next/link";
import { programs, school } from "@/lib/school-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand-block">
          <Link className="brand brand-light" href="/">
            <span className="brand-mark" aria-hidden="true">1</span>
            <span className="brand-copy">
              <strong>SMKN 1 PERCUT</strong>
              <small>SEI TUAN · SUMATERA UTARA</small>
            </span>
          </Link>
          <p>{school.tagline}.</p>
          <p className="footer-muted">Informasi sekolah, program keahlian, dan dokumentasi kegiatan peserta didik.</p>
        </div>
        <div className="footer-column">
          <h3>Jelajahi</h3>
          <Link href="/#profil">Profil sekolah</Link>
          <Link href="/#program">Program keahlian</Link>
          <Link href="/#keunggulan">Keunggulan</Link>
          <Link href="/#kontak">Kontak</Link>
        </div>
        <div className="footer-column">
          <h3>Program keahlian</h3>
          {programs.map((program) => (
            <Link key={program.slug} href={`/jurusan/${program.slug}`}>{program.acronym} · {program.shortName}</Link>
          ))}
        </div>
        <div className="footer-column footer-contact">
          <h3>Kontak sekolah</h3>
          <p>{school.address}</p>
          <p>{school.phone}</p>
          <p>{school.email}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {school.name}</span>
        <span>Website informasi sekolah · Next.js</span>
      </div>
    </footer>
  );
}
