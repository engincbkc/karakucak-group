"use client";

import React from "react";
import { 
  SectorHero, 
  SectorServices, 
  SectorApproach,
  SectorCta, 
  MnkArchitectureFeature, 
  MnkCollaboration
} from "@/components/sections/sector-page";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";

// Icon bileşenleri
import { HomeIcon, OfficeIcon, BuildingIcon, MuseumIcon } from "@/components/ui/icons"

export default function InsaatTaahhutPage() {
  return (
    <div className="pt-16">
      <SectorHero 
        title="İnşaat & Taahhüt" 
        description="Modern mimari anlayışımız ve yüksek mühendislik standartlarımızla inşaat sektöründe güvenilir çözümler sunuyoruz."
        backgroundImage="/images/insaat-bg.jpg"
        primaryButtonText="Projelerimiz"
        primaryButtonLink="#projeler"
        secondaryButtonText="İletişime Geçin"
        secondaryButtonLink="/iletisim"
        overlayColor="from-gray-900/95 to-blue-900/80"
      />
      
      <SectorServices 
        title="Hizmetlerimiz" 
        description="Karakucak Group olarak, sürdürülebilir ve yenilikçi mimari tasarımlarla çevresel, ekonomik ve sosyal değer yaratan projeler geliştiriyoruz."
        services={[
          { icon: <HomeIcon />, title: "Konut Projeleri" },
          { icon: <OfficeIcon />, title: "Ticari Yapılar" },
          { icon: <BuildingIcon />, title: "Endüstriyel Tesisler" },
          { icon: <MuseumIcon />, title: "Kültür Merkezleri" }
        ]}
        imageSrc="/images/insaat-services.jpg"
        imageAlt="İnşaat Hizmetlerimiz"
      />
      
      <MnkArchitectureFeature 
        description1="MNK Mimarlık, Karakucak Group'un mimari vizyonunu temsil eden inovatif ve sürdürülebilir projelere imza atan mimarlık şirketidir."
        description2="Modern ve çevre dostu tasarım anlayışımızla her proje için özgün çözümler üretiyoruz."
        featureImage="/images/mnk-feature.jpg"
        buttonText="MNK Mimarlık'ı Keşfedin"
        buttonLink="/mnk-mimarlik"
      />
      
      <div id="projeler" className="mb-20">
        <ProjectsShowcase
          title="Öne Çıkan Projelerimiz"
          subtitle="İnşaat ve taahhüt alanında gerçekleştirdiğimiz prestijli projelerimizden bazıları"
          limitProjects={9} // Daha fazla proje gösterimi için
          showViewAllButton={true}
          showFilters={true}
          viewAllLink="/projeler"
          defaultViewMode="gallery" // Başlangıçta galeri görünümü
          className="py-12"
        />
      </div>
      
      <SectorCta 
        title="Projeleriniz İçin Yanınızdayız" 
        description="Modern, sürdürülebilir ve fonksiyonel yapı projeleri için bizimle iletişime geçin."
        buttons={[
          { text: "Bize Ulaşın", href: "/iletisim", isPrimary: true },
          { text: "Referansları Görün", href: "/referanslar" }
        ]}
      />
    </div>
  );
}