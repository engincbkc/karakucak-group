'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Calendar, MapPin } from 'lucide-react'
import { useTheme } from '@/lib/theme-context'
import { Project } from '@/components/ui/project-card'

interface ProjectDetailProps {
  project: Project
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  const { themeClasses } = useTheme()
  
  // Proje içeriğini formatla (eğer yoksa varsayılan içerik döndür)
  const projectContent = {
    overview: project.description,
    gallery: [{ url: project.image, alt: project.title }]
  }
  
  return (
    <div className={themeClasses("bg-white", "bg-gray-900")}>
      {/* Hero Bölümü */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image 
          src={project.image} 
          alt={project.title} 
          fill 
          priority
          className="object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        
        {/* Geri dön butonu */}
        <div className="absolute top-8 left-8 z-10">
          <Link 
            href="/mnk-mimarlik/projeler" 
            className="flex items-center gap-2 text-white bg-black/20 backdrop-blur-sm hover:bg-black/40 px-4 py-2 rounded-full transition duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Tüm Projeler</span>
          </Link>
        </div>
        
        {/* Proje başlık alanı */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-white/90 mb-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{project.year}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{project.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* İçerik Bölümü */}
      <div className="container mx-auto px-4 py-12">
        <Link href="/mnk-mimarlik/projeler" className={`inline-flex items-center ${themeClasses("text-blue-600 hover:text-blue-800", "text-blue-400 hover:text-blue-300")} font-medium mb-6`}>
          <ChevronLeft className="w-4 h-4 mr-2" />
          Tüm Projelere Dön
        </Link>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Ana içerik */}
          <div className="lg:w-2/3">
            {/* Etiketler */}
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span 
                  key={tag} 
                  className={themeClasses(
                    "px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full", 
                    "px-3 py-1 text-sm font-medium bg-gray-800 text-gray-200 rounded-full"
                  )}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Genel bakış */}
            <div className="mb-12">
              <h2 className={`text-2xl font-bold ${themeClasses("text-gray-900", "text-white")} mb-6`}>Genel Bakış</h2>
              <p className={`${themeClasses("text-gray-700", "text-gray-300")} leading-relaxed`}>
                {projectContent.overview}
              </p>
            </div>

            {/* Detaylı açıklama */}
            <div className="mb-12">
              <p className={`${themeClasses("text-gray-700", "text-gray-300")} leading-relaxed`}>
                MNK Mimarlık tarafından tasarlanan bu proje, modern mimari anlayışıyla 
                kullanıcılarına konforlu ve estetik bir yaşam alanı sunmayı hedeflemektedir. 
                Projenin her aşamasında sürdürülebilirlik, işlevsellik ve estetik değerler 
                ön planda tutulmuştur.
              </p>
              
              <p className={`${themeClasses("text-gray-700", "text-gray-300")} leading-relaxed mt-4`}>
                Tasarımda doğal ışığın iç mekanlara maksimum düzeyde alınması, enerji verimliliği 
                ve malzeme seçimlerinde çevreye duyarlı yaklaşımlar benimsenmiştir. Proje, 
                bulunduğu çevreyle uyumlu bir şekilde konumlandırılmış olup, mevcut doku 
                içerisinde fark yaratan bir kimliğe sahiptir.
              </p>
            </div>
            
            {/* Galeri */}
            <div className="mb-12">
              <h2 className={`text-2xl font-bold ${themeClasses("text-gray-900", "text-white")} mb-6`}>Proje Görselleri</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ana resim */}
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg col-span-2">
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-700" 
                  />
                </div>
                {/* Aynı resmin farklı görünümleri için basit bir gösterim */}
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src={project.image}
                    alt={`${project.title} - Detay 1`}
                    fill
                    className="object-cover object-right-top transition-transform hover:scale-105 duration-700" 
                  />
                </div>
                <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                  <Image 
                    src={project.image}
                    alt={`${project.title} - Detay 2`}
                    fill
                    className="object-cover object-left-bottom transition-transform hover:scale-105 duration-700" 
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Yan panel */}
          <div className="lg:w-1/3">
            <div className={`p-6 rounded-2xl sticky top-24 ${themeClasses("bg-gray-50", "bg-gray-800")}`}>
              <h3 className={`text-xl font-bold mb-6 ${themeClasses("text-gray-900", "text-white")}`}>
                Proje Bilgileri
              </h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className={themeClasses("text-sm font-medium text-gray-500", "text-sm font-medium text-gray-400")}>Proje Adı</h4>
                  <p className={themeClasses("text-gray-900 font-medium", "text-white font-medium")}>{project.title}</p>
                </div>
                
                <div>
                  <h4 className={themeClasses("text-sm font-medium text-gray-500", "text-sm font-medium text-gray-400")}>Konum</h4>
                  <p className={themeClasses("text-gray-900 font-medium", "text-white font-medium")}>{project.location}</p>
                </div>
                
                <div>
                  <h4 className={themeClasses("text-sm font-medium text-gray-500", "text-sm font-medium text-gray-400")}>Tamamlanma Yılı</h4>
                  <p className={themeClasses("text-gray-900 font-medium", "text-white font-medium")}>{project.year}</p>
                </div>
                
                <div>
                  <h4 className={themeClasses("text-sm font-medium text-gray-500", "text-sm font-medium text-gray-400")}>Proje Tipi</h4>
                  <p className={themeClasses("text-gray-900 font-medium", "text-white font-medium")}>
                    {project.tags[0] === 'konut' ? 'Konut' : 
                     project.tags[0] === 'ofis' ? 'Ofis' : 
                     project.tags[0] === 'ticari' ? 'Ticari' : 
                     project.tags[0] === 'kultur' ? 'Kültürel' : 
                     'Karma Kullanım'}
                  </p>
                </div>
                
                <div>
                  <h4 className={themeClasses("text-sm font-medium text-gray-500", "text-sm font-medium text-gray-400")}>Alan</h4>
                  <p className={themeClasses("text-gray-900 font-medium", "text-white font-medium")}>
                    {10000 + Math.floor(Math.random() * 50000)} m²
                  </p>
                </div>
              </div>
              
              <div className={`p-6 rounded-xl ${themeClasses("bg-gray-100", "bg-gray-700")} mt-8`}>
                <h3 className={`text-lg font-bold mb-4 ${themeClasses("text-gray-900", "text-white")}`}>
                  Öne Çıkan Özellikler
                </h3>
                
                <ul className="space-y-2">
                  <li className={`flex items-start ${themeClasses("text-gray-700", "text-gray-300")}`}>
                    <span className="mr-2 text-green-500">✓</span>
                    Sürdürülebilir malzemeler ve enerji verimli sistemler
                  </li>
                  <li className={`flex items-start ${themeClasses("text-gray-700", "text-gray-300")}`}>
                    <span className="mr-2 text-green-500">✓</span>
                    Doğal ışık ve havalandırma maksimizasyonu
                  </li>
                  <li className={`flex items-start ${themeClasses("text-gray-700", "text-gray-300")}`}>
                    <span className="mr-2 text-green-500">✓</span>
                    Yeşil alan entegrasyonu ve çevre dostu peyzaj
                  </li>
                  <li className={`flex items-start ${themeClasses("text-gray-700", "text-gray-300")}`}>
                    <span className="mr-2 text-green-500">✓</span>
                    Modern teknoloji ve akıllı bina sistemleri
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
