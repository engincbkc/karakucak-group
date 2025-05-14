"use client"

import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
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
    image: "https://images.unsplash.com/photo-1589923188651-268a9765e432?q=80&w=2070&auto=format", 
    link: "/otomotiv-madencilik",
    btnText: "Detayları Görüntüle"
  },
  {
    id: 2,
    title: "Pamuk ve Tekstil",
    subtitle: "Kaliteli Üretim",
    description: "Kaliteli pamuk üretiminden modern tekstil ürünlerine kadar Karakucak Group olarak entegre bir hizmet zinciri sunuyoruz.",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format",
    link: "/pamuk-tekstil",
    btnText: "Tekstil Hizmetlerimiz"
  },
  {
    id: 3,
    title: "MNK Mimarlık",
    subtitle: "Modern Tasarım",
    description: "Sürdürülebilir, modern ve fonksiyonel mimarlık hizmetlerimizle projelerinize değer katıyor, hayallerinizi gerçeğe dönüştürüyoruz.",
    image: "https://images.unsplash.com/photo-1613390792897-aa0c0a70074f?q=80&w=2070&auto=format",
    link: "/mnk-mimarlik",
    btnText: "Projelerimizi İnceleyin"
  },
  {
    id: 4,
    title: "Karakucak Group",
    subtitle: "25 Yıllık Deneyim",
    description: "1998'den beri kalite, güven ve yenilikçilik ilkelerimizle Türkiye'nin önde gelen şirketler grubuyuz. Sektörlerinde lider markalarımızla hizmetinizdeyiz.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format",
    link: "/hakkimizda",
    btnText: "Hakkımızda"
  }
];

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Sayfanın yüklenmesini bekleyip CSS animasyonlarını çalıştırmak için
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-700">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect={"fade"}
        loop={true}
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
        className="h-full w-full"
      >
        {sectors.map((sector) => (
          <SwiperSlide key={sector.id} className="relative">
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
            
            {/* İçerik alanı */}
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
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
                <div className="flex flex-wrap gap-4">
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
