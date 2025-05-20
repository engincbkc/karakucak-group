// src/components/sections/sector-page/SectorHero.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export type SectorStat = {
  value: string;
  label: string;
};

export type SectorHeroProps = {
  title: string;
  subtitle?: string; // Sektör adı için alt başlık ekledik
  description: string;
  backgroundImage: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  overlayColor?: string;
  logoImage?: string;
  priority?: boolean; // Added priority flag for image optimization
  stats?: SectorStat[]; // Firmaya ait istatistikler
};

const MotionImage = motion(Image);

export default function SectorHero({
  title,
  subtitle,
  description,
  backgroundImage,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  overlayColor = 'from-gray-900/95 to-amber-900/80', // Default rengi amber tonuna değiştirdim
  logoImage,
  priority = true, // Varsayılan olarak true, performans için
  stats,
}: SectorHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[600px] py-16 sm:py-20 flex items-center">
      {/* Arka plan görüntüsü - Parallax efekti ile */}
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="w-full h-full absolute inset-0 bg-gradient-to-r from-gray-900/90 to-amber-900/80" />
        
        <Image
          src="https://images.pexels.com/photos/1117452/pexels-photo-1117452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt={`${title} Arkaplan`}
          fill
          priority={priority}
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
          unoptimized
        />
        <div className={`absolute inset-0 bg-gradient-to-r ${overlayColor || 'from-gray-900/80 to-amber-900/80'} z-10`}></div>
      </motion.div>

      {/* Öne çıkan içerik */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white lg:col-span-3"
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
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 md:mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="inline-block">{title}</span>
            </motion.h1>

            {subtitle && (
              <motion.h2
                className="text-xl sm:text-2xl md:text-3xl text-amber-400 font-medium mb-4 md:mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {subtitle}
              </motion.h2>
            )}

            <motion.div
              className="w-20 sm:w-24 md:w-32 h-1 sm:h-1.5 bg-amber-500 mb-6 md:mb-8"
              initial={{ width: 0 }}
              animate={{ width: "8rem" }}
              transition={{ duration: 0.8, delay: 0.6 }}
            ></motion.div>

            <motion.div
              className="text-base text-gray-100 leading-relaxed mb-8 bg-black/30 backdrop-blur-sm rounded-lg p-4 sm:p-5 max-h-[400px] overflow-y-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: '#f59e0b #00000033',
              }}
            >
              {description.split('. ').map((paragraph, index) => (
                paragraph.trim() && (
                  <motion.p
                    key={index}
                    className={`mb-2 ${index !== 0 ? 'mt-3' : ''}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                  >
                    {paragraph.trim() + '.'}
                  </motion.p>
                )
              ))}
            </motion.div>

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
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-amber-500 text-gray-900 font-semibold rounded-md hover:bg-amber-400 transition-all shadow-lg flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto"
                    whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(245, 158, 11, 0.4)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {primaryButtonText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.a>
                )}

                {secondaryButtonText && secondaryButtonLink && (
                  <motion.a
                    href={secondaryButtonLink}
                    className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/80 text-white font-semibold rounded-md hover:bg-white/10 transition-all shadow-lg flex items-center justify-center sm:justify-start gap-2 w-full sm:w-auto"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {secondaryButtonText}
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
