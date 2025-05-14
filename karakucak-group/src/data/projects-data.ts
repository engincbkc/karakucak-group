import { Project } from "@/components/ui/project-card"

export interface TagInfo {
  label: string;
  color?: string;
}

export const projectTags: Record<string, TagInfo> = {
  ofis: { label: "Ofis", color: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300" },
  konut: { label: "Konut", color: "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-300" },
  kultur: { label: "Kültür", color: "bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" },
  egitim: { label: "Eğitim", color: "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300" },
  otel: { label: "Otel", color: "bg-rose-50 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300" },
  surdurulebilir: { label: "Sürdürülebilir", color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" },
  yenilenebilir: { label: "Yenilenebilir Enerji", color: "bg-lime-50 text-lime-700 dark:bg-lime-900/30 dark:text-lime-300" },
  akilliEv: { label: "Akıllı Ev", color: "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300" },
  leed: { label: "LEED Platinum", color: "bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300" },
  odullu: { label: "Ödüllü Proje", color: "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300" },
  akustik: { label: "Akustik", color: "bg-cyan-50 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300" },
  ekoDostu: { label: "Eko-Dostu", color: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300" },
  yerelMimari: { label: "Yerel Mimari", color: "bg-orange-50 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300" },
  modernYasam: { label: "Modern Yaşam", color: "bg-violet-50 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300" },
}

export const projectsData: Project[] = [
  {
    id: "eco-tower",
    title: "Eco Tower Office Complex",
    description: "İstanbul'da LEED Platinum sertifikalı, sürdürülebilir ofis kompleksi. Yenilenebilir enerji kaynakları, yağmur suyu hasadı ve doğal aydınlatma ile %60 enerji tasarrufu sağlıyor.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
    tags: ["ofis", "surdurulebilir", "leed", "odullu"],
    location: "İstanbul",
    year: "2022",
    detailsLink: "/mnk-mimarlik/projeler/eco-tower"
  },
  {
    id: "seaside-residential",
    title: "Seaside Residential Complex",
    description: "İzmir'de doğayla bütünleşen modern konut kompleksi. Çağdaş tasarımı ve akıllı ev teknolojileriyle, konforlu ve sürdürülebilir bir yaşam alanı sunuyor.",
    image: "https://images.unsplash.com/photo-1613685703305-fba7a6181d86?ixlib=rb-4.0.3",
    tags: ["konut", "akilliEv", "modernYasam", "surdurulebilir"],
    location: "İzmir",
    year: "2023",
    detailsLink: "/mnk-mimarlik/projeler/seaside-residential"
  },
  {
    id: "cultural-center",
    title: "Modern Kültür Merkezi",
    description: "Ankara'nın merkezinde çok amaçlı kültürel aktivitelere ev sahipliği yapan çağdaş mimari yapı. Akustik tasarımı ve esnek kullanım alanlarıyla öne çıkıyor.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3",
    tags: ["kultur", "akustik", "odullu"],
    location: "Ankara",
    year: "2021",
    detailsLink: "/mnk-mimarlik/projeler/cultural-center"
  },
  {
    id: "green-school",
    title: "Yeşil Eğitim Kampüsü",
    description: "Bursa'da çevre dostu malzemeler ve pasif ısıtma-soğutma teknikleriyle tasarlanmış, enerji ihtiyacının büyük kısmını güneş panelleriyle karşılayan eğitim kampüsü.",
    image: "https://images.unsplash.com/photo-1562768575-6a77780bc72b?ixlib=rb-4.0.3",
    tags: ["egitim", "ekoDostu", "yenilenebilir", "surdurulebilir"],
    location: "Bursa",
    year: "2022",
    detailsLink: "/mnk-mimarlik/projeler/green-school"
  },
  {
    id: "boutique-hotel",
    title: "Butik Otel & Spa",
    description: "Kapadokya'nın eşsiz doğasıyla uyumlu, yerel taş malzemelerle inşa edilmiş, lüks ve konforlu bir konaklama tesisi. Geleneksel dokuyu modern tasarımla buluşturuyor.",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3",
    tags: ["otel", "yerelMimari", "modernYasam"],
    location: "Nevşehir",
    year: "2023",
    detailsLink: "/mnk-mimarlik/projeler/boutique-hotel"
  },
  {
    id: "smart-residence",
    title: "Akıllı Rezidans Kulesi",
    description: "İstanbul'un merkezinde tüm yaşam alanlarında otomasyon sistemleri kullanılan, enerji verimliliği yüksek, lüks rezidans projesi.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3",
    tags: ["konut", "akilliEv", "surdurulebilir"],
    location: "İstanbul",
    year: "2023",
    detailsLink: "/mnk-mimarlik/projeler/smart-residence"
  },
  {
    id: "tech-campus",
    title: "Teknoloji Şirketi Kampüsü",
    description: "Ankara'nın teknoloji vadisinde yer alan, açık ofis düzeni ve sosyal alanlarıyla çalışan memnuniyetini önceleyen kurumsal kampüs projesi.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3",
    tags: ["ofis", "surdurulebilir", "modernYasam"],
    location: "Ankara",
    year: "2022",
    detailsLink: "/mnk-mimarlik/projeler/tech-campus"
  },
  {
    id: "mountain-lodge",
    title: "Dağ Evi Kompleksi",
    description: "Uludağ'da doğal malzemeler kullanılarak inşa edilen, kış sporları tutkunları için tasarlanmış lüks dağ evi kompleksi.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3",
    tags: ["konut", "yerelMimari", "ekoDostu"],
    location: "Bursa",
    year: "2021",
    detailsLink: "/mnk-mimarlik/projeler/mountain-lodge"
  },
  {
    id: "urban-renewal",
    title: "Kentsel Dönüşüm Projesi",
    description: "İzmir'de tarihi dokuya saygılı, sürdürülebilir malzemelerle tasarlanmış bir kentsel yenileme projesi.",
    image: "https://images.unsplash.com/photo-1579546929662-711aa81148cf?ixlib=rb-4.0.3",
    tags: ["konut", "surdurulebilir", "yerelMimari"],
    location: "İzmir",
    year: "2021",
    detailsLink: "/mnk-mimarlik/projeler/urban-renewal"
  }
]
