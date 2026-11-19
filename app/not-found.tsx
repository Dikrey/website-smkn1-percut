import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found container">
      <span className="section-kicker">404 · HALAMAN TIDAK DITEMUKAN</span>
      <h1>Halaman ini belum tersedia.</h1>
      <p>Periksa kembali alamat halaman atau kembali ke halaman utama sekolah.</p>
      <Link className="button button-primary" href="/">Kembali ke beranda <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
