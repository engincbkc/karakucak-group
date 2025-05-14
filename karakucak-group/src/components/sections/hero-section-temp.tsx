"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";

// Kurumsal sektör içerikleri
const sectorContents = [
  {
    id: 1,
    title: "Otomotiv ve Madencilik",
    subtitle: "Yenilikçi Çözümler",
    description: "Yenilikçi ve sürdürülebilir otomotiv çözümleri ile madencilik sektöründe lider yaklaşımlarımızla güvenilir iş ortağınızız.",
    link: "/otomotiv-madencilik",
    btnText: "Detayları Görüntüle",
    color: "from-blue-900 to-blue-700"
  },
  {
    id: 2,
    title: "Pamuk ve Tekstil",
    subtitle: "Kalite ve Güven",
    description: "Kaliteli pamuk üretiminden modern tekstil ürünlerine kadar Karakucak Group olarak entegre bir hizmet zinciri sunuyoruz.",
    link: "/pamuk-tekstil",
    btnText: "Tekstil Hizmetlerimiz",
    color: "from-green-800 to-green-600"
  },
  {
    id: 3,
    title: "MNK Mimarlık",
    subtitle: "Yaratıcı Tasarımlar",
    description: "Sürdürülebilir, modern ve fonksiyonel mimarlık hizmetlerimizle projelerinize değer katıyor, hayallerinizi gerçeğe dönüştürüyoruz.",
    link: "/mnk-mimarlik",
    btnText: "Projelerimizi İnceleyin",
    color: "from-gray-900 to-gray-700"
  },
  {
    id: 4,
    title: "Karakucak Group",
    subtitle: "1998'den Beri Hizmetinizde",
    description: "Kalite, güven ve yenilikçilik ilkelerimizle Türkiye'nin önde gelen şirketler grubuyuz. Sektörlerinde lider markalarımızla hizmetinizdeyiz.",
    link: "/hakkimizda",
    btnText: "Hakkımızda",
    color: "from-blue-950 to-blue-800"
  }
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Client tarafında render kontrolü  
  useEffect(() => {
    setMounted(true);
    
    // Otomatik slider için interval
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sectorContents.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Sonraki slide'a geçiş
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sectorContents.length);
  };
  
  // Önceki slide'a geçiş
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sectorContents.length) % sectorContents.length);
  };
  
  // SSR ile Client-side render arasındaki farkı ortadan kaldırmak için:
  // SSR için basit bir şablon göster
  if (!mounted) {
    return (
      <section className="bg-gradient-to-b from-gray-900 to-gray-800 h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">Karakucak Group</h1>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-screen bg-gray-900 overflow-hidden">
      {/* Arkaplan gradyanları */}
      {sectorContents.map((content, index) => (
        <div
          key={content.id}
          className={`absolute inset-0 bg-gradient-to-br ${content.color} transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      
      {/* İçerik */}
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center relative z-10">
        <div className="max-w-screen-lg">
          {sectorContents.map((content, index) => (
            <div
              key={content.id}
              className={`transition-all duration-1000 absolute w-full ${
                index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={mounted && index === currentIndex ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-white"
              >
                <p className="text-blue-400 text-xl md:text-2xl font-medium mb-2">
                  {content.subtitle}
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {content.title}
                </h2>
                <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
                  {content.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href={content.link}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:-translate-y-1"
                  >
                    {content.btnText}
                  </Link>
                  <Link
                    href="/iletisim"
                    className="px-6 py-3 border border-white/50 hover:bg-white/10 text-white rounded-lg font-medium transition-all hover:-translate-y-1"
                  >
                    İletişime Geçin
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Slider kontrolleri */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-3 z-20">
        {sectorContents.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-500 w-8" : "bg-gray-400/50"
            }`}
            aria-label={`Slayt ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Prev/Next butonları */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition-all z-20"
        aria-label="Önceki"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/40 transition-all z-20"
        aria-label="Sonraki"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Overlay - arka plandaki içerikleri biraz karartır */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </section>
  );
}
