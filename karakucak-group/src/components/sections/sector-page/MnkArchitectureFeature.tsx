// src/components/sections/sector-page/MnkArchitectureFeature.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type MnkArchitectureFeatureProps = {
  title?: string;
  description1: string;
  description2: string;
  backgroundImage?: string;
  featureImage: string;
  buttonText: string;
  buttonLink: string;
  imageTag?: string;
  imageCaption?: string;
  showButton?: boolean; // İsteğe bağlı, butonu gösterip göstermemeyi kontrol eder
};

export default function MnkArchitectureFeature({
  title = 'MNK Mimarlık',
  description1,
  description2,
  backgroundImage = 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3',
  featureImage,
  buttonText,
  buttonLink,
  imageTag = 'Ödüllü Proje',
  imageCaption = 'Modern Mimari Yaklaşım',
  showButton = false, // Varsayılan olarak buton gizlenir
}: MnkArchitectureFeatureProps) {
  return (
    <section className="py-10 sm:py-14 md:py-16 bg-gradient-to-r from-slate-900 to-gray-800 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={backgroundImage}
          alt="Mimari Tasarım Arkaplan"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 md:gap-8 lg:gap-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/2 text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-5 inline-block border-b-3 sm:border-b-4 border-yellow-500 pb-1 sm:pb-2">{title}</h2>
            <p className="text-base sm:text-lg mb-3 sm:mb-4 md:mb-5">{description1}</p>
            <p className="text-base sm:text-lg mb-5 sm:mb-6 md:mb-7">{description2}</p>
            {showButton && (
              <Link 
                href={buttonLink} 
                className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg"
              >
                <span>{buttonText}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            )}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full md:w-5/12 mt-6 md:mt-0"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl transition-all duration-500 h-64 sm:h-80 md:h-96">
              <Image
                src={featureImage}
                alt="MNK Mimarlık Projesi"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4 sm:p-6">
                <p className="text-yellow-400 text-xs sm:text-sm font-semibold mb-1 sm:mb-2">{imageTag}</p>
                <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 sm:mb-2">{imageCaption}</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
