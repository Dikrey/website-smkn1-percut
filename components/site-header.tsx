"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/#profil", label: "Profil" },
  { href: "/#program", label: "Program keahlian" },
  { href: "/#keunggulan", label: "Keunggulan" },
  { href: "/#kontak", label: "Kontak" }
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="Beranda SMK Negeri 1 Percut Sei Tuan" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark" aria-hidden="true">1</span>
          <span className="brand-copy">
            <strong>SMKN 1 PERCUT</strong>
            <small>SEI TUAN · SUMATERA UTARA</small>
          </span>
        </Link>

        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span /><span /><span />
        </button>

        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Navigasi utama">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
          ))}
          <Link className="nav-cta" href="/#program" onClick={() => setMenuOpen(false)}>
            Jelajahi sekolah <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
