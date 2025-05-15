// src/app/sektor/[slug]/page.tsx

import React from 'react';
import { notFound } from 'next/navigation';
import { 
  SectorHero, 
  SectorServices, 
  SectorApproach,
  SectorCta, 
  MnkArchitectureFeature 
} from "@/components/sections/sector-page";
import GalleryShowcase from "@/components/sections/GalleryShowcase";

// Data ve ikonlar
import { getSectorBySlug, getAllSectorSlugs } from "@/data/sectors-data";
import { getProjectsData } from "@/data/projects-data";
import { HomeIcon, OfficeIcon, BuildingIcon, MuseumIcon } from "@/components/ui/icons";
import { CarIcon, PartsIcon, TechIcon, LogisticsIcon } from "@/components/ui/icons";
import { CropIcon, OrganicIcon, IrrigationIcon } from "@/components/ui/icons";
import { MiningIcon, ProcessingIcon, EnvironmentIcon, ConsultingIcon } from "@/components/ui/icons";
import { CottonIcon, TextileIcon } from "@/components/ui/icons";

// İkon eşleştiricisi fonksiyonu
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

// Bu fonksiyon ile hangi sektör sayfalarının önceden oluşturulacağını belirliyoruz (SSG)
export async function generateStaticParams() {
  // Tüm sektör slug'larını data fonksiyonumuzdan alıyoruz
  const slugs = getAllSectorSlugs();
  
  // Her slug için bir parametre objesi döndürüyoruz
  return slugs.map((slug: string) => ({
    slug: slug,
  }));
}

export default function SectorPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Sektör verilerini yükle
  const sector = getSectorBySlug(slug);
  
  // Sektör bulunamadıysa 404 döndür
  if (!sector) {
    notFound();
  }
  
  // Projeler için filtre uygulama
  const allProjects = getProjectsData().projects;
  
  // Eğer tag'lere göre filtreleme yap, sonuç boşsa tüm projeleri göster
  let filteredProjects = allProjects.filter(project => {
    // Eğer projede tags yoksa veya boşsa filtreden geçirme
    if (!project.tags || project.tags.length === 0) return false;
    
    // Sektör filtresi için projede en az bir tag eşleşmesi olmalı
    return sector.projects.filter.some(tag => project.tags.includes(tag));
  });
  
  // Filtreleme sonuç vermezse tüm projeleri göster (ilk 9 proje)
  if (filteredProjects.length === 0) {
    filteredProjects = allProjects.slice(0, 9);
  }
  
  // Servis elemanlarını ikon bileşenleriyle zenginleştirme
  const servicesWithIcons = sector.services.items.map(item => ({
    icon: getIconByName(item.icon),
    title: item.title
  }));

  return (
    <div className="pt-16 overflow-hidden">
      {/* Hero Section - Ekranın tamamını kaplayacak u015fekilde */}
      <section className="relative w-full">
        <SectorHero 
          title={sector.title}
          description={sector.description}
          backgroundImage={sector.backgroundImage}
          primaryButtonText={sector.primaryButtonText}
          primaryButtonLink={sector.primaryButtonLink}
          secondaryButtonText={sector.secondaryButtonText}
          secondaryButtonLink={sector.secondaryButtonLink}
          overlayColor={sector.overlayColor}
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
      
      {/* Mimarlık Özelliği - Parallax efekti ile */}
      <section className="py-8 sm:py-12 md:py-16 px-4 md:px-8 mt-0">
        <MnkArchitectureFeature 
          title={sector.feature.title}
          description1={sector.feature.description1}
          description2={sector.feature.description2}
          featureImage={sector.feature.featureImage}
          buttonText={sector.feature.buttonText}
          buttonLink={sector.feature.buttonLink}
        />
      </section>
      
      {/* Projeler bölümü - showProjects true ise göster */}
      {sector.projects.showProjects && (
        <section className="py-8 sm:py-12 md:py-16 px-4 md:px-8 bg-gray-50" id="projeler">
          <GalleryShowcase
            title={sector.projects.title}
            subtitle={sector.projects.subtitle}
            projects={filteredProjects.slice(0, 9)}
            viewAllLink={sector.projects.viewAllLink}
            viewAllText={sector.projects.viewAllText}
            itemsPerPage={sector.projects.itemsPerPage}
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
