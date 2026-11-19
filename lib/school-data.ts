export type Program = {
  slug: string;
  acronym: string;
  name: string;
  shortName: string;
  description: string;
  detailIntro: string;
  focus: string;
  icon: string;
  theme: "blue" | "green" | "orange" | "purple" | "teal";
  learningAreas: { title: string; description: string }[];
  curriculum: { grade: string; items: string[] }[];
  careerPaths: string[];
  facilities: string[];
};

export const school = {
  name: "SMK Negeri 1 Percut Sei Tuan",
  shortName: "SMKN 1 Percut",
  tagline: "Siap Kerja, Siap Kuliah, Siap Berwirausaha",
  description:
    "Sekolah Menengah Kejuruan yang mengembangkan kompetensi, karakter, dan kesiapan peserta didik untuk melangkah ke dunia kerja, pendidikan tinggi, maupun wirausaha.",
  address: "Alamat resmi sekolah perlu dilengkapi",
  phone: "Nomor telepon resmi perlu dilengkapi",
  email: "Email resmi sekolah perlu dilengkapi",
  vision: "Visi resmi sekolah perlu dimasukkan oleh pengelola.",
  missions: [
    "Misi resmi sekolah perlu dimasukkan oleh pengelola.",
    "Tambahkan misi sekolah sesuai dokumen yang telah disahkan.",
    "Pastikan rumusan misi sudah mendapat persetujuan pihak sekolah."
  ]
};

export const programs: Program[] = [
  {
    slug: "pplg",
    acronym: "PPLG",
    name: "Pengembangan Perangkat Lunak dan Gim",
    shortName: "Pengembangan Perangkat Lunak & Gim",
    description: "Membuat aplikasi web, mobile, dan gim dari ide sampai rilis.",
    detailIntro:
      "Membekali peserta didik dengan pola pikir komputasional dan keterampilan membangun solusi digital melalui pemrograman, basis data, antarmuka, dan pengembangan gim.",
    focus: "Software, web, mobile, dan game development",
    icon: "{ }",
    theme: "blue",
    learningAreas: [
      { title: "Pemrograman Web & Mobile", description: "Membangun situs dan aplikasi dengan HTML, CSS, JavaScript, dan framework modern." },
      { title: "Basis Data", description: "Merancang, mengelola, dan mengamankan data dengan SQL dan praktik yang baik." },
      { title: "Pengembangan Gim", description: "Mengenal logika permainan, desain level, aset visual, dan pengembangan gim 2D/3D." }
    ],
    curriculum: [
      { grade: "Kelas X", items: ["Dasar-dasar Program Keahlian", "Pemrograman Dasar", "Dasar Desain Antarmuka"] },
      { grade: "Kelas XI", items: ["Pemrograman Web", "Basis Data", "Pemrograman Berorientasi Objek"] },
      { grade: "Kelas XII", items: ["Pemrograman Lanjutan / Mobile", "Produk Kreatif dan Kewirausahaan", "Praktik Kerja Lapangan"] }
    ],
    careerPaths: ["Programmer / Software Engineer", "Web Developer", "Game Developer", "UI/UX Developer", "Wirausaha Digital"],
    facilities: ["Laboratorium komputer", "Perangkat pengembangan perangkat lunak", "Koneksi internet dan jaringan praktik"]
  },
  {
    slug: "tjkt",
    acronym: "TJKT",
    name: "Teknik Jaringan Komputer dan Telekomunikasi",
    shortName: "Teknik Jaringan Komputer & Telekomunikasi",
    description: "Merancang, memasang, dan mengamankan jaringan komputer.",
    detailIntro:
      "Mengenalkan perancangan infrastruktur jaringan, konfigurasi perangkat, layanan server, keamanan jaringan, serta teknologi telekomunikasi sesuai kebutuhan industri.",
    focus: "Network infrastructure, server, dan telekomunikasi",
    icon: "⌁",
    theme: "green",
    learningAreas: [
      { title: "Infrastruktur Jaringan", description: "Memahami topologi, pengkabelan, perangkat jaringan, dan dokumentasi instalasi." },
      { title: "Server & Layanan", description: "Mengenal sistem operasi server, layanan jaringan, virtualisasi, dan administrasi." },
      { title: "Keamanan & Telekomunikasi", description: "Mempelajari dasar keamanan jaringan, wireless, dan media transmisi." }
    ],
    curriculum: [
      { grade: "Kelas X", items: ["Dasar-dasar TJKT", "Keselamatan Kerja dan Penggunaan Alat", "Dasar Sistem Komputer"] },
      { grade: "Kelas XI", items: ["Teknologi Jaringan Kabel dan Nirkabel", "Administrasi Sistem Jaringan", "Konfigurasi Perangkat Jaringan"] },
      { grade: "Kelas XII", items: ["Keamanan Jaringan", "Layanan Jaringan Lanjutan", "Praktik Kerja Lapangan"] }
    ],
    careerPaths: ["Network Technician", "Network Administrator", "IT Support", "System Administrator", "Teknisi Telekomunikasi"],
    facilities: ["Lab jaringan komputer", "Router, switch, dan perangkat praktik", "Perangkat pengkabelan dan pengujian jaringan"]
  },
  {
    slug: "dkv",
    acronym: "DKV",
    name: "Desain Komunikasi Visual",
    shortName: "Desain Komunikasi Visual",
    description: "Menyampaikan pesan lewat desain grafis, fotografi, dan video.",
    detailIntro:
      "Mengembangkan kepekaan visual dan keterampilan menyampaikan pesan melalui desain grafis, ilustrasi, fotografi, videografi, serta media digital.",
    focus: "Graphic design, visual storytelling, dan media digital",
    icon: "✳",
    theme: "orange",
    learningAreas: [
      { title: "Desain Grafis", description: "Mengolah tipografi, warna, tata letak, ilustrasi, dan identitas visual." },
      { title: "Fotografi & Videografi", description: "Merencanakan produksi visual, mengambil gambar, dan mengolah hasil karya." },
      { title: "Desain Digital", description: "Membuat konten digital, materi promosi, dan rancangan antarmuka." }
    ],
    curriculum: [
      { grade: "Kelas X", items: ["Dasar-dasar DKV", "Nirmana dan Elemen Visual", "Dasar Gambar dan Tipografi"] },
      { grade: "Kelas XI", items: ["Desain Grafis", "Fotografi dan Videografi", "Ilustrasi Digital"] },
      { grade: "Kelas XII", items: ["Produksi Media dan Portofolio", "Produk Kreatif dan Kewirausahaan", "Praktik Kerja Lapangan"] }
    ],
    careerPaths: ["Graphic Designer", "Illustrator", "Photographer", "Video Editor", "Content Creator"],
    facilities: ["Studio desain", "Komputer dan perangkat lunak desain", "Peralatan foto dan video"]
  },
  {
    slug: "akl",
    acronym: "AKL",
    name: "Akuntansi dan Keuangan Lembaga",
    shortName: "Akuntansi & Keuangan Lembaga",
    description: "Mengelola pembukuan dan laporan keuangan secara profesional.",
    detailIntro:
      "Membentuk kompetensi pengelolaan transaksi, pembukuan, administrasi keuangan, perpajakan dasar, dan penyusunan laporan dengan ketelitian serta integritas.",
    focus: "Accounting, bookkeeping, dan financial administration",
    icon: "₊",
    theme: "purple",
    learningAreas: [
      { title: "Akuntansi Dasar", description: "Memahami siklus akuntansi, pencatatan transaksi, dan penyusunan laporan." },
      { title: "Aplikasi Perkantoran & Akuntansi", description: "Mengolah data keuangan dengan spreadsheet dan aplikasi pendukung." },
      { title: "Administrasi Perpajakan", description: "Mengenal dokumen, administrasi, dan prinsip dasar perpajakan." }
    ],
    curriculum: [
      { grade: "Kelas X", items: ["Dasar-dasar Akuntansi", "Etika Profesi", "Aplikasi Pengolah Angka"] },
      { grade: "Kelas XI", items: ["Akuntansi Perusahaan Jasa dan Dagang", "Komputer Akuntansi", "Administrasi Pajak Dasar"] },
      { grade: "Kelas XII", items: ["Akuntansi Lanjutan", "Penyusunan Laporan Keuangan", "Praktik Kerja Lapangan"] }
    ],
    careerPaths: ["Staf Akuntansi", "Staf Keuangan", "Administrasi Pajak", "Kasir / Administrasi", "Wirausaha"],
    facilities: ["Lab komputer", "Perangkat lunak akuntansi", "Perangkat pembelajaran administrasi keuangan"]
  },
  {
    slug: "mplb",
    acronym: "MPLB",
    name: "Manajemen Perkantoran dan Layanan Bisnis",
    shortName: "Manajemen Perkantoran & Layanan Bisnis",
    description: "Mengelola administrasi kantor dan layanan pelanggan modern.",
    detailIntro:
      "Mempersiapkan peserta didik dalam pengelolaan administrasi, komunikasi bisnis, layanan pelanggan, kearsipan, dan penggunaan teknologi perkantoran.",
    focus: "Office management, business services, dan customer relations",
    icon: "▤",
    theme: "teal",
    learningAreas: [
      { title: "Administrasi Perkantoran", description: "Mengelola dokumen, agenda, surat-menyurat, dan arsip secara sistematis." },
      { title: "Komunikasi Bisnis", description: "Melatih komunikasi profesional, korespondensi, dan kerja sama tim." },
      { title: "Layanan Pelanggan", description: "Mengenal standar pelayanan, pengelolaan informasi, dan pengalaman pelanggan." }
    ],
    curriculum: [
      { grade: "Kelas X", items: ["Dasar-dasar Manajemen Perkantoran", "Komunikasi di Tempat Kerja", "Teknologi Perkantoran"] },
      { grade: "Kelas XI", items: ["Administrasi Umum", "Pengelolaan Arsip", "Layanan Bisnis"] },
      { grade: "Kelas XII", items: ["Manajemen Kegiatan dan Rapat", "Produk Kreatif dan Kewirausahaan", "Praktik Kerja Lapangan"] }
    ],
    careerPaths: ["Staf Administrasi", "Sekretaris Junior", "Customer Service", "Resepsionis", "Staf Operasional Bisnis"],
    facilities: ["Lab perkantoran", "Komputer dan perangkat kantor", "Perangkat simulasi layanan pelanggan"]
  }
];

export const homeBenefits = [
  {
    number: "01",
    title: "Pembelajaran berbasis praktik",
    description: "Pengalaman belajar diarahkan pada latihan, proyek, dan penyelesaian masalah yang relevan dengan kompetensi keahlian."
  },
  {
    number: "02",
    title: "Terhubung dengan dunia kerja",
    description: "Informasi kemitraan, praktik kerja lapangan, dan kegiatan industri ditampilkan agar siswa mengenal lingkungan profesional."
  },
  {
    number: "03",
    title: "Ruang untuk berprestasi",
    description: "Prestasi, portofolio karya, dan cerita alumni menjadi dokumentasi perkembangan serta inspirasi bagi peserta didik."
  }
];

export const detailSections = [
  { id: "profil", number: "01", label: "Profil" },
  { id: "guru", number: "02", label: "Guru & organisasi" },
  { id: "kurikulum", number: "03", label: "Kurikulum" },
  { id: "fasilitas", number: "04", label: "Fasilitas" },
  { id: "prestasi", number: "05", label: "Prestasi" },
  { id: "mitra", number: "06", label: "Mitra & PKL" },
  { id: "karya", number: "07", label: "Karya siswa" },
  { id: "alumni", number: "08", label: "Alumni" },
  { id: "berita", number: "09", label: "Berita" },
  { id: "galeri", number: "10", label: "Galeri" },
  { id: "kontak", number: "11", label: "Kontak" }
];
