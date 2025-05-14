"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
// Swiper ve modüllerini içe aktaralım
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules"
// Swiper stillerini içe aktaralım
import "swiper/css"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"

// Custom CSS fix for swiper
const swiperStyles = `
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
  .swiper-slide {
    position: relative;
    z-index: 1;
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
`

// Sektörler için içerik array'i
const sectors = [
  {
    id: 1,
    title: "Otomotiv ve Madencilik",
    description: "Yenilikçi ve sürdürülebilir otomotiv çözümleri ile madencilik sektöründe lider yaklaşımlarımızla güvenilir iş ortağınızız.",
    image: "https://images.unsplash.com/photo-1583508805133-8fd03a9916d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=90", 
    link: "/otomotiv-madencilik"
  },
  {
    id: 2,
    title: "Pamuk ve Tekstil",
    description: "Kaliteli pamuk üretiminden modern tekstil ürünlerine kadar Karakucak Group olarak entegre bir hizmet zinciri sunuyoruz.",
    image: "https://images.unsplash.com/photo-1618372609037-74fd1f9f7f1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=90",
    link: "/pamuk-tekstil"
  },
  {
    id: 3,
    title: "MNK Mimarlık",
    description: "Sürdürülebilir, modern ve fonksiyonel mimarlık hizmetlerimizle projelerinize değer katıyor, hayallerinizi gerçeğe dönüştürüyoruz.",
    image: "https://images.unsplash.com/photo-1613564813921-310cee8ec805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=90",
    link: "/mnk-mimarlik"
  },
  {
    id: 4,
    title: "Karakucak Group",
    description: "1998'den beri kalite, güven ve yenilikçilik ilkelerimizle Türkiye'nin önde gelen şirketler grubuyuz. Sektörlerinde lider markalarımızla hizmetinizdeyiz.",
    image: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=90",
    link: "/hakkimizda"
  }
]

export function HeroSection() {
  const [isReady, setIsReady] = useState(false)
  
  // Component mount olduktan sonra swiper'ı göster (server/client hidrasyon sorunlarını önlemek için)
  useEffect(() => {
    setIsReady(true)
  }, [])
  
  // Custom CSS'i head içine ekle
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const styleSheet = document.createElement('style')
      styleSheet.type = 'text/css'
      styleSheet.innerText = swiperStyles
      document.head.appendChild(styleSheet)
      
      return () => {
        document.head.removeChild(styleSheet)
      }
    }
  }, [])
  
  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
      {isReady ? (
        <Swiper
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          effect={"fade"}
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
            // Swiper için z-index ve positioning düzenlemesi
            position: 'relative',
            zIndex: 1,
            isolation: 'isolate', // Kapsayıcı için yeni stacking context oluşturur
          }}
        >
          {sectors.map((sector) => (
            <SwiperSlide key={sector.id} className="relative" style={{ overflow: 'hidden' }}>
              {/* Background image */}
              <div className="absolute inset-0 z-0" style={{ backgroundColor: '#000' }}>
                <Image
                  src={sector.image}
                  alt={sector.title}
                  fill
                  priority
                  className="object-cover opacity-30"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="max-w-3xl"
                >
                  <h2 className="text-2xl md:text-3xl font-medium text-blue-400 mb-3">
                    Karakucak Group
                  </h2>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                    {sector.title}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-300 mb-8">
                    {sector.description}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      href={sector.link}
                      className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-medium transition-colors duration-300 transform hover:scale-105"
                    >
                      Keşfedin
                    </Link>
                    <Link
                      href="/iletisim"
                      className="px-6 py-3 rounded-lg bg-transparent hover:bg-white/10 border border-white text-white text-sm md:text-base font-medium transition-colors duration-300 transform hover:scale-105"
                    >
                      İletişime Geçin
                    </Link>
                  </div>
                </motion.div>
              </div>
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-[1]" />
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
