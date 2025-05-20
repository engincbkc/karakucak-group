"use client"

import React, { useState, useEffect } from "react"
// Using named imports instead of general import to avoid "export *" error
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules"
import { ChevronDown, TrendingUp, Award, Clock, ArrowRight, Building, Leaf, Cpu, Globe } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"

// Import data
import { getSectorData } from "@/data/sectors-data"

// Icon bileşenini sektör icon string'ine göre dinamik olarak döndüren fonksiyon
const renderIcon = (iconName: string) => {
  switch(iconName) {
    case 'cpu':
      return <Cpu className="w-10 h-10" />;
    case 'building':
      return <Building className="w-10 h-10" />;
    case 'globe':
      return <Globe className="w-10 h-10" />;
    case 'award':
      return <Award className="w-10 h-10" />;
    case 'leaf':
      return <Leaf className="w-10 h-10" />;
    default:
      return <TrendingUp className="w-10 h-10" />;
  }
}

// CSS and animation related objects

// CSS styles are injected directly through useEffect

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // JSON verilerini alma
  const sectorsData = getSectorData();

  // Sayfanın yüklenmesini bekleyip CSS animasyonlarını çalıştırmak için
  useEffect(() => {
    setIsLoaded(true);
    
    // Özel CSS stillerini sayfa yüklendiğinde ekle
    const style = document.createElement('style');
    style.innerHTML = `
      .swiper-button-next, .swiper-button-prev {
        color: rgba(255, 255, 255, 0.7);
        width: 50px !important;
        height: 50px !important;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background: rgba(0, 0, 0, 0.5);
        transition: all 0.3s ease;
        z-index: 30 !important;
      }
      
      .swiper-button-next:hover, .swiper-button-prev:hover {
        color: white;
        background: rgba(0, 0, 0, 0.7);
      }
      
      .swiper-button-next::after, .swiper-button-prev::after {
        font-size: 22px;
        font-weight: bold;
      }
      
      .swiper-button-next {
        right: 20px;
      }
      
      .swiper-button-prev {
        left: 20px;
      }
      
      /* Mobil görünüm için daha iyi ok konumlandırması */
      @media (max-width: 768px) {
        .swiper-button-next, .swiper-button-prev {
          width: 40px !important;
          height: 40px !important;
          top: auto !important;
          bottom: 25% !important;
        }
        
        .swiper-button-next::after, .swiper-button-prev::after {
          font-size: 18px;
        }
        
        .swiper-button-next {
          right: 10px;
        }
        
        .swiper-button-prev {
          left: 10px;
        }
      }
      
      .swiper-pagination {
        position: absolute;
        bottom: 15px !important;
        z-index: 30 !important;
      }
      
      .swiper-pagination-bullet {
        background: white;
        opacity: 0.5;
        width: 10px;
        height: 10px;
        margin: 0 4px;
      }
      
      .swiper-pagination-bullet-active {
        opacity: 1;
        background: #d97706; /* amber-600 */
        width: 12px;
        height: 12px;
      }
      
      .swiper-wrapper {
        position: relative;
        z-index: 1;
      }
      
      .swiper-slide {
        position: relative !important;
      }
      
      .hero-content-container {
        position: relative;
        z-index: 25 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect={"fade"}
        loop={true}
        slidesPerView={1}
        speed={800}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        className="h-full w-full"
        fadeEffect={{
          crossFade: true
        }}
      >
        {sectorsData.sectors.map((sector) => (
          <SwiperSlide key={sector.id} className="relative h-full w-full overflow-hidden">
            {/* Her sektör için özel arkaplan görüntüsü */}
            <div className="absolute inset-0 z-0">
              <Image
                src={sector.backgroundImage}
                alt={sector.title}
                fill
                priority
                className="object-cover brightness-[0.55] filter"
              />
              {/* Geliştirilmiş gradient overlay - içeriğin daha iyi ve kurumsal görünmesi için */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30 z-10"></div>
            </div>
            
            {/* İçerik alanı - Her slayt için zenginleştirilmiş içerik katmanı */}
            <div className="absolute inset-0 z-20 flex flex-col justify-start sm:justify-center md:justify-center lg:justify-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 hero-content-container mt-0 pt-12 -mt-2 sm:mt-0 sm:pt-0 md:mt-0 md:pt-0">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start sm:items-center md:items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:col-span-8 lg:col-span-7"
                  >
                    {/* Sector Icon ve Badge */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-amber-600/20 backdrop-blur-sm p-3 rounded-xl text-amber-400 hidden sm:block">
                        {renderIcon(sector.icon)}
                      </div>
                      <div className="bg-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-md border border-amber-500/20">
                        <p className="text-amber-400 font-medium text-sm md:text-base tracking-wide">{`${sector.title} Sektörü`}</p>
                      </div>
                    </div>
                    
                    {/* Ana Başlık ve İçerik */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight">
                      {sector.title}
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 mb-6 max-w-3xl leading-relaxed">
                      {sector.description}
                    </p>
                    
                    {/* Anahtar Noktalar */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                      {sector.keyPoints.map((point: string, index: number) => (
                        <div key={index} className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm p-2 sm:p-3 rounded-lg border border-white/10">
                          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
                          <p className="text-sm text-white font-medium">{point}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* İstatistikler */}
                    <div className="flex space-x-6 mb-8">
                      {sector.stats.map((stat: {value: string, label: string}, index: number) => (
                        <div key={index} className="flex flex-col">
                          <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                          <span className="text-xs md:text-sm text-gray-400">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Butonları */}
                    <div className="flex flex-wrap gap-4 mt-2">
                      <Link
                        href={`/sektor/${sector.id}`}
                        className="px-6 py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white text-sm md:text-base font-medium transition-all hover:shadow-lg hover:-translate-y-1 flex items-center space-x-2 group"
                      >
                        <span>Detayları Görüntüle</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                      <Link
                        href="/iletisim"
                        className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm md:text-base font-medium transition-all hover:-translate-y-1"
                      >
                        İletişime Geçin
                      </Link>
                    </div>
                  </motion.div>
                  
                  {/* Sağ Tarafa Görsel Element - Sadece büyük ekranlarda */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 30 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="md:col-span-4 lg:col-span-5 hidden md:block relative"
                  >
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-full max-w-md">
                      <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl z-10"></div>
                        <div className="absolute inset-10 z-20 flex flex-col justify-center items-center text-center space-y-4">
                          <div className="h-16 w-16 rounded-xl bg-amber-600/30 backdrop-blur-md text-white flex items-center justify-center border border-amber-500/30">
                            {renderIcon(sector.icon)}
                          </div>
                          <h3 className="font-bold text-xl text-white">{sector.title}</h3>
                          <p className="text-sm text-gray-300">{sector.companyDetail || sector.companyName}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Aşağı kaydır işaretçisi */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-300 text-sm mb-2 font-medium">Keşfedin</span>
          <ChevronDown className="h-6 w-6 text-amber-400 animate-bounce" />
        </div>
      </motion.div>
      
      {/* Kurumsal rozet - Geliştirilmiş */}
      <div className="absolute top-6 right-6 z-30 hidden md:block">
        <div className="bg-black/30 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 flex items-center space-x-2">
          <Clock className="h-4 w-4 text-amber-400" />
          <p className="text-white text-sm">
            <span className="font-bold">1997'den beri</span> hizmetinizdeyiz
          </p>
        </div>
      </div>
    </section>
  );
}
