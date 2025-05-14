"use client"

import React, { useState, useEffect } from "react"
// Using named imports instead of general import to avoid "export *" error
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules"
import { ChevronDown } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"

// Sektör bilgileri
const sectors = [
  {
    id: 1,
    title: "Otomotiv ve Madencilik",
    subtitle: "Endüstriyel Çözümler",
    description: "Yenilikçi ve sürdürülebilir otomotiv çözümleri ile madencilik sektöründe lider yaklaşımlarımızla güvenilir iş ortağınızız.",
    image: "https://images.unsplash.com/photo-1580983218765-f663bec07b37?q=80&w=2070&auto=format", 
    link: "/otomotiv-madencilik",
    btnText: "Detayları Görüntüle"
  },
  {
    id: 2,
    title: "Pamuk ve Tekstil",
    subtitle: "Kaliteli Üretim",
    description: "Kaliteli pamuk üretiminden modern tekstil ürünlerine kadar Karakucak Group olarak entegre bir hizmet zinciri sunuyoruz.",
    image: "https://images.unsplash.com/photo-1626099216068-626122d11b42?q=80&w=2070&auto=format",
    link: "/pamuk-tekstil",
    btnText: "Tekstil Hizmetlerimiz"
  },
  {
    id: 3,
    title: "MNK Mimarlık",
    subtitle: "Modern Tasarım",
    description: "Sürdürülebilir, modern ve fonksiyonel mimarlık hizmetlerimizle projelerinize değer katıyor, hayallerinizi gerçeğe dönüştürüyoruz.",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2070&auto=format",
    link: "/mnk-mimarlik",
    btnText: "Projelerimizi İnceleyin"
  },
  {
    id: 4,
    title: "Karakucak Group",
    subtitle: "25 Yıllık Deneyim",
    description: "1998'den beri kalite, güven ve yenilikçilik ilkelerimizle Türkiye'nin önde gelen şirketler grubuyuz. Sektörlerinde lider markalarımızla hizmetinizdeyiz.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format",
    link: "/hakkimizda",
    btnText: "Hakkımızda"
  }
];

// Özel CSS stil tanımları
const swiperCustomStyles = {
  '.swiper-button-next, .swiper-button-prev': {
    color: 'rgba(255, 255, 255, 0.7)',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    background: 'rgba(0, 0, 0, 0.3)',
    '&:hover': {
      color: 'white',
      background: 'rgba(0, 0, 0, 0.5)'
    },
    '&::after': {
      fontSize: '22px',
      fontWeight: 'bold'
    }
  },
  '.swiper-button-next': {
    right: '20px'
  },
  '.swiper-button-prev': {
    left: '20px'
  },
  '.swiper-pagination-bullet': {
    background: 'white',
    opacity: 0.5,
    '&-active': {
      opacity: 1,
      background: '#60a5fa'
    }
  }
};

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

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
        background: #60a5fa;
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
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-700">
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
        {sectors.map((sector) => (
          <SwiperSlide key={sector.id} className="relative h-full w-full overflow-hidden">
            {/* Her sektör için özel arkaplan görüntüsü */}
            <div className="absolute inset-0 z-0">
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                priority
                className="object-cover brightness-[0.6] filter"
              />
              {/* Gradyan overlay - içeriğin daha iyi görünmesi için */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent z-10"></div>
            </div>
            
            {/* İçerik alanı - Her slayt için bağımsız içerik katmanı */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 hero-content-container">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="max-w-3xl"
                >
                  <p className="text-blue-400 font-medium text-lg md:text-xl mb-2">{sector.subtitle}</p>
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                    {sector.title}
                  </h1>
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl">
                    {sector.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <Link
                      href={sector.link}
                      className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-medium transition-all hover:shadow-lg hover:-translate-y-1"
                    >
                      {sector.btnText}
                    </Link>
                    <Link
                      href="/iletisim"
                      className="px-6 py-3 rounded-lg bg-transparent hover:bg-white/10 border border-white text-white text-sm md:text-base font-medium transition-all hover:-translate-y-1"
                    >
                      İletişime Geçin
                    </Link>
                  </div>
                </motion.div>
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
          <ChevronDown className="h-6 w-6 text-blue-400 animate-bounce" />
        </div>
      </motion.div>
      
      {/* Kurumsal rozet */}
      <div className="absolute top-6 right-6 z-30 hidden md:block">
        <div className="bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <p className="text-white text-sm">
            <span className="font-bold">1998'den beri</span> hizmetinizdeyiz
          </p>
        </div>
      </div>
    </section>
  );
}
