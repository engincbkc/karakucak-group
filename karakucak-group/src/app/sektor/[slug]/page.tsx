// src/app/sektor/[slug]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { 
  SectorHero, 
  SectorServices, 
  SectorApproach,
  SectorCta, 
  MnkArchitectureFeature 
} from "@/components/sections/sector-page";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";

// Data ve ikonlar
import { getSectorBySlug, getAllSectorSlugs } from "@/data/sectors-data";
import { getProjectsData } from "@/data/projects-data";
import { 
  HomeIcon, OfficeIcon, BuildingIcon, MuseumIcon,
  MiningIcon, ProcessingIcon, EnvironmentIcon, ConsultingIcon,
  CottonIcon, TextileIcon, CarIcon, PartsIcon, TechIcon, LogisticsIcon,
  CropIcon, OrganicIcon, IrrigationIcon
} from "@/components/ui/icons";

// İkon eşleştiricisi fonksiyonu - memoized ve server component uyumlu
const getIconByName = (iconName: string) => {
  const iconMap: Record<string, React.ReactNode> = {
    home: <HomeIcon />,
    office: <OfficeIcon />,
    building: <BuildingIcon />,
    museum: <MuseumIcon />,
    car: <CarIcon />,
    parts: <PartsIcon />,
    tech: <TechIcon />,
    logistics: <LogisticsIcon />,
    crop: <CropIcon />,
    organic: <OrganicIcon />,
    irrigation: <IrrigationIcon />,
    mining: <MiningIcon />,
    processing: <ProcessingIcon />,
    environment: <EnvironmentIcon />,
    consulting: <ConsultingIcon />,
    cotton: <CottonIcon />,
    textile: <TextileIcon />
  };
  
  return iconMap[iconName] || <BuildingIcon />; // Varsayılan bir ikon
};

// SSG için - statik sayfaları önceden oluşturma
export async function generateStaticParams() {
  // Tüm sektör slug'larını data fonksiyonumuzdan alıyoruz
  const slugs = getAllSectorSlugs();
  
  // Her slug için bir parametre objesi döndürüyoruz
  return slugs.map((slug: string) => ({
    slug: slug,
  }));
}

// Sayfa bileşeni - Server Component (varsayılan)
export default async function SectorPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Sektör verilerini yükle - getStaticProps benzeri fonksiyonalite için
  const sector = await fetchSectorData(slug);

  console.log(sector);
  
  // Sektör bulunamadıysa 404 döndür
  if (!sector) {
    notFound();
  }
  
  // Projeleri getir ve optimizasyon için cache uygula
  
  // Servis elemanlarını ikon bileşenleriyle zenginleştirme
  const servicesWithIcons = sector.services.items.map(item => ({
    icon: getIconByName(item.icon),
    title: item.title
  }));

  // Priority loading için önemli içerikleri işaretleme
  const shouldPrioritizeImage = true; // Ana hero görseli için

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section - Ekranın tamamını kaplayacak şekilde */}
      <section className="relative w-full">
        <SectorHero 
          title={sector.companyName} // Şirket adını ana başlık olarak geçiyoruz
          subtitle={sector.title} // Sektör adını alt başlık olarak geçiyoruz
          description={sector.description} // About alabiliyorsak onu, yoksa descriptionı kullan
          backgroundImage={sector.backgroundImage}
          primaryButtonText={sector.primaryButtonText}
          primaryButtonLink={sector.primaryButtonLink}
          secondaryButtonText={sector.secondaryButtonText}
          secondaryButtonLink={sector.secondaryButtonLink}
          overlayColor={sector.overlayColor}
          priority={shouldPrioritizeImage} // Priority image loading için
          stats={sector.stats} // İstatistik bilgilerini geçiyoruz
        />
      </section>
 
      
      {/* Sektöre özel özellik bölümü - Parallax efekti ile */}
      <section className="py-8 sm:py-12 md:py-16 px-4 md:px-8 mt-0">
        <MnkArchitectureFeature 
          title={sector.feature.title}
          description1={sector.about}
          description2=""
          featureImage={sector.feature.featureImage}
          buttonText={sector.feature.buttonText}
          buttonLink={sector.feature.buttonLink}
          imageTag={sector.title} /* Sektör başlığını imageTag olarak kullanıyoruz */
          imageCaption={sector.companyDetail} /* Şirket detaylarını imageCaption olarak kullanıyoruz */
        />
      </section>

           
      {/* Hizmetler - Modern kaydırma animasyonu ile */}
      <section className="py-8 sm:py-10 md:py-16 px-4 md:px-8 bg-gray-50">
        <SectorServices 
          title={sector.services.title}
          description={sector.services.description}
          services={servicesWithIcons}
          imageSrc={sector.services.imageSrc}
          imageAlt={sector.services.imageAlt}
        />
      </section>
      
      {/* Projeler bölümü - ProjectsShowcase bilesen kullanılıyor, sadece /sektor/insaat-taahhut sayfasında görünür */}
      {sector.projects.showProjects && slug === 'insaat-taahhut' && (
        <section id="projeler">
          <ProjectsShowcase
            title={sector.projects.title}
            subtitle={sector.projects.subtitle}
            limitProjects={9}
            showFilters={true}
            showViewAllButton={true}
            viewAllLink={sector.projects.viewAllLink}
            defaultViewMode="grid"
            className=""
          />
        </section>
      )}
      
      {/* CTA - Modern gradient arka plan ile */}
      <section className="py-10 sm:py-14 md:py-16 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
        <SectorCta 
          title={sector.cta.title}
          description={sector.cta.description}
          buttons={sector.cta.buttons}
        />
      </section>
    </div>
  );
}

// Data fetching fonksiyonları - performans optimizasyonu için ayrıştırıldı

// Sektör verisini getiren fonksiyon - cache ile optimize edilmiş
async function fetchSectorData(slug: string) {
  // Next.js App Router cache stratejisi kullanımı
  // Varsayılan force-cache ile statik olarak önbelleğe alır (SSG benzeri)
  const sector = getSectorBySlug(slug);
  return sector;
}

// Projeleri getiren ve filtreleyen fonksiyon - cache ile optimize edilmiş
async function fetchFilteredProjects(filterTags: string[]) {
  // Tüm projeleri getir (bu da önbelleğe alınabilir)
  const allProjects = getProjectsData().projects;
  
  // Filtreleme işlemleri
  let filteredProjects = allProjects.filter(project => {
    // Eğer projede tags yoksa veya boşsa filtreden geçirme
    if (!project.tags || project.tags.length === 0) return false;
    
    // Sektör filtresi için projede en az bir tag eşleşmesi olmalı
    return filterTags.some(tag => project.tags.includes(tag));
  });
  
  // Filtreleme sonuç vermezse tüm projeleri göster (ilk 9 proje)
  if (filteredProjects.length === 0) {
    filteredProjects = allProjects.slice(0, 9);
  }

  return { filteredProjects };
}
