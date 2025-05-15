// src/components/sections/sector-page/SectorHero.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type SectorHeroProps = {
  title: string;
  description: string;
  backgroundImage: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  overlayColor?: string;
  logoImage?: string;
};

const MotionImage = motion(Image);

export default function SectorHero({
  title,
  description,
  backgroundImage,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  overlayColor = 'from-gray-900/95 to-blue-900/80',
  logoImage,
}: SectorHeroProps) {
  return (
    <section className="relative overflow-hidden h-[80vh] min-h-[600px] flex items-center">
      {/* Arka plan görüntüsü */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src={backgroundImage}
          alt={`${title} Arkaplan`}
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor} z-10`}></div>
      </div>
      
      {/* Öne çıkan içerik */}
      <div className="container mx-auto px-4 relative z-20 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            {logoImage && (
              <div className="mb-8">
                <MotionImage
                  src={logoImage}
                  alt={`${title} Logo`}
                  width={120}
                  height={60}
                  className="object-contain"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="inline-block">{title}</span>
            </h1>
            
            <div className="w-32 h-1.5 bg-yellow-500 mb-8"></div>
            
            <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-xl mb-10">{description}</p>
            
            {(primaryButtonText || secondaryButtonText) && (
              <div className="flex flex-wrap gap-5">
                {primaryButtonText && primaryButtonLink && (
                  <motion.a 
                    href={primaryButtonLink} 
                    className="px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-400 transition-colors transform hover:-translate-y-1 hover:shadow-xl shadow-lg flex items-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {primaryButtonText}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </motion.a>
                )}
                {secondaryButtonText && secondaryButtonLink && (
                  <motion.a 
                    href={secondaryButtonLink} 
                    className="px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-all flex items-center gap-2"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {secondaryButtonText}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </motion.a>
                )}
              </div>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="hidden lg:block relative"
          >
            {/* Burada dekoratif elemanlar, grafikler veya öne çıkan bir görsel yerleştirilebilir */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 -right-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Aşağı kaydırma indikatörü */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg className="w-10 h-10 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
}
