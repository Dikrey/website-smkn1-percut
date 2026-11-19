import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SMK Negeri 1 Percut Sei Tuan | Siap Kerja, Siap Kuliah, Siap Berwirausaha",
    template: "%s | SMK Negeri 1 Percut Sei Tuan"
  },
  description:
    "Informasi profil sekolah, program keahlian, kegiatan, dan karya siswa SMK Negeri 1 Percut Sei Tuan.",
  applicationName: "Website SMK Negeri 1 Percut Sei Tuan",
  keywords: ["SMK Negeri 1 Percut Sei Tuan", "PPLG", "TJKT", "DKV", "AKL", "MPLB", "sekolah kejuruan"],
  openGraph: {
    title: "SMK Negeri 1 Percut Sei Tuan",
    description: "Siap Kerja, Siap Kuliah, Siap Berwirausaha",
    type: "website",
    locale: "id_ID"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
