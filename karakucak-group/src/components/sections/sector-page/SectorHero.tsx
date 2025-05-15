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
    <section className="relative overflow-hidden h-[90vh] sm:h-[85vh] md:h-[80vh] min-h-[500px] flex items-center">
      {/* Arka plan görüntüsü - Parallax efekti ile */}
      <motion.div 
        className="absolute inset-0 w-full h-full z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Image
          src={backgroundImage}
          alt={`${title} Arkaplan`}
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor} z-10`}></div>
      </motion.div>
      
      {/* Öne çıkan içerik */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white"
          >
            {logoImage && (
              <motion.div 
                className="mb-6 md:mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={logoImage}
                  alt={`${title} Logo`}
                  width={120}
                  height={60}
                  className="object-contain"
                />
              </motion.div>
            )}
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 md:mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="inline-block">{title}</span>
            </motion.h1>
            
            <motion.div 
              className="w-20 sm:w-24 md:w-32 h-1 sm:h-1.5 bg-yellow-500 mb-6 md:mb-8"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed max-w-xl mb-8 md:mb-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            
            >{description}</motion.p>
            
            {(primaryButtonText || secondaryButtonText) && (
              <motion.div 
                className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                {primaryButtonText && primaryButtonLink && (
                  <motion.a 
                    href={primaryButtonLink} 
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-gray-900 font-semibold rounded-md hover:bg-yellow-400 transition-all shadow-lg flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto"
                    whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {primaryButtonText}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </motion.a>
                )}
                {secondaryButtonText && secondaryButtonLink && (
                  <motion.a 
                    href={secondaryButtonLink} 
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-all flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto"
                    whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {secondaryButtonText}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                  </motion.a>
                )}
              </motion.div>
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
