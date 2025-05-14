"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules"
import { ChevronDown, ArrowRight } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"

// Custom swiper styles
const swiperStyles = `
  .swiper {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .swiper-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .swiper-slide {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .slide-content {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    z-index: 20;
    pointer-events: none; /* Bu, içeriğe tıklamaya izin vermek için gerekli */
  }
  .slide-content * {
    pointer-events: auto; /* İçerik elemanlarına tıklamayı etkinleştir */
  }
  .slide-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.7) 100%);
    z-index: 10;
  }
  .slide-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  .slide-title {
    font-size: 3rem;
    font-weight: 700;
    color: white;
    margin-bottom: 1rem;
  }
  .slide-subtitle {
    font-size: 1.5rem;
    font-weight: 500;
    color: #3b82f6;
    margin-bottom: 0.5rem;
  }
  .slide-description {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
    max-width: 60%;
  }
  .slide-button {
    display: inline-flex;
    align-items: center;
    padding: 12px 24px;
    background: #3b82f6;
    color: white;
    border-radius: 6px;
    font-weight: 600;
    margin-right: 16px;
    transition: all 0.3s ease;
  }
  .slide-button:hover {
    background: #2563eb;
    transform: translateY(-2px);
  }
  .slide-button-outline {
    display: inline-flex;
    align-items: center;
    padding: 12px 24px;
    border: 2px solid white;
    color: white;
    border-radius: 6px;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  .slide-button-outline:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
  .swiper-pagination {
    position: absolute;
    bottom: 30px !important;
    z-index: 30;
  }
  .swiper-button-next, .swiper-button-prev {
    color: white !important;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(4px);
    border-radius: 50%;
    width: 50px !important;
    height: 50px !important;
    margin: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 30;
  }
  .swiper-button-next:after, .swiper-button-prev:after {
    font-size: 20px !important;
  }
  .swiper-pagination-bullet {
    background-color: white !important;
    opacity: 0.7;
  }
  .swiper-pagination-bullet-active {
    background-color: #3b82f6 !important;
    opacity: 1;
  }
  .swiper-slide-active {
    z-index: 2;
  }
  .swiper-fade .swiper-slide-active {
    pointer-events: auto;
    visibility: visible;
    opacity: 1;
  }
  .swiper-fade .swiper-slide {
    transition-property: opacity;
    pointer-events: none;
    visibility: hidden;
    opacity: 0;
  }
  @media (max-width: 768px) {
    .slide-title {
      font-size: 2rem;
    }
    .slide-subtitle {
      font-size: 1.2rem;
    }
    .slide-description {
      font-size: 1rem;
      max-width: 90%;
    }
  }
`

// Hero içerikleri - Daha güvenilir statik görsel URL'leri
const sectors = [
  {
    id: 1,
    title: "Otomotiv ve Madencilik",
    description: "Yenilikçi ve sürdürülebilir otomotiv çözümleri ile madencilik sektöründe lider yaklaşımlarımızla güvenilir iş ortağınızız.",
    image: "https://picsum.photos/seed/otomotiv/2000/1000", 
    link: "/otomotiv-madencilik",
    btnText: "Detayları Görüntüle"
  },
  {
    id: 2,
    title: "Pamuk ve Tekstil",
    description: "Kaliteli pamuk üretiminden modern tekstil ürünlerine kadar Karakucak Group olarak entegre bir hizmet zinciri sunuyoruz.",
    image: "https://picsum.photos/seed/tekstil/2000/1000",
    link: "/pamuk-tekstil",
    btnText: "Tekstil Hizmetlerimiz"
  },
  {
    id: 3,
    title: "MNK Mimarlık",
    description: "Sürdürülebilir, modern ve fonksiyonel mimarlık hizmetlerimizle projelerinize değer katıyor, hayallerinizi gerçeğe dönüştürüyoruz.",
    image: "https://picsum.photos/seed/mimarlik/2000/1000",
    link: "/mnk-mimarlik",
    btnText: "Projelerimizi İnceleyin"
  },
  {
    id: 4,
    title: "Karakucak Group",
    description: "1998'den beri kalite, güven ve yenilikçilik ilkelerimizle Türkiye'nin önde gelen şirketler grubuyuz. Sektörlerinde lider markalarımızla hizmetinizdeyiz.",
    image: "https://picsum.photos/seed/kurumsal/2000/1000",
    link: "/hakkimizda",
    btnText: "Hakkımızda"
  }
]

// Client component olarak Hero Section
export function HeroSection() {
  const [clientReady, setClientReady] = useState(false);
  
  // CSS'i inject etmek için
  useEffect(() => {
    // Client-side'da olduğumuzu kontrol et
    setClientReady(true);
    
    // Inject the custom styles into the head
    const styleElement = document.createElement('style');
    styleElement.innerHTML = swiperStyles;
    document.head.appendChild(styleElement);
    
    // Cleanup
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);
  
  // Yükleme durumu göster
  if (!clientReady) {
    return (
      <section className="relative h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="h-full w-full flex items-center justify-center bg-gray-900">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }
  
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
        <Swiper
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          effect={"fade"}
          loop={true} /* Slaytların sürekli dönmesini sağlar */
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          className="h-full w-full swiper-container"
          style={{
            position: 'relative',
            zIndex: 5,
          }}
        >
          {sectors.map((sector) => (
            <SwiperSlide key={sector.id} className="swiper-slide">
              {/* Background image */}
              <Image
                src={sector.image}
                alt={sector.title}
                fill
                priority
                sizes="100vw"
                className="object-cover"
                style={{ zIndex: 5 }}
              />
              
              {/* Dark overlay */}
              <div className="slide-overlay"></div>
              
              {/* Content */}
              <div className="slide-content">
                <div className="slide-container">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <p className="slide-subtitle">Karakucak Group</p>
                    <h1 className="slide-title">{sector.title}</h1>
                    <p className="slide-description">{sector.description}</p>
                    
                    <div className="flex flex-wrap gap-4">
                      <Link
                        href={sector.link}
                        className="slide-button"
                      >
                        {sector.btnText}
                      </Link>
                      <Link
                        href="/iletisim"
                        className="slide-button-outline"
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
      ) : (
        /* Yükleme durumunda fallback içerik */
        <div className="h-full w-full flex items-center justify-center bg-gray-900">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-300 text-sm mb-2 font-medium">Aşağı Kaydır</span>
          <div className="w-0.5 h-8 bg-blue-400 animate-bounce" />
        </div>
      </motion.div>
      
      {/* Corporate badge */}
      <div className="absolute top-6 right-6 z-20 hidden md:block">
        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full">
          <p className="text-white text-sm">
            <span className="font-bold">1998'den beri</span> hizmetinizdeyiz
          </p>
        </div>
      </div>
    </section>
  )
}
