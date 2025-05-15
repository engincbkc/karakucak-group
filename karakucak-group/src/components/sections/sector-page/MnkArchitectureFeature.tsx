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
}: MnkArchitectureFeatureProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-gray-800 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-20">
        <Image
          src={backgroundImage}
          alt="Mimari Tasarım Arkaplan"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 text-left"
          >
            <h2 className="text-4xl font-bold mb-6 inline-block border-b-4 border-yellow-500 pb-2">{title}</h2>
            <p className="text-lg mb-6">{description1}</p>
            <p className="text-lg mb-8">{description2}</p>
            <Link 
              href={buttonLink} 
              className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>{buttonText}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-5/12"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500"
              style={{ height: '500px' }}>
              <Image
                src={featureImage}
                alt="MNK Mimarlık Projesi"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <p className="text-yellow-400 text-sm font-semibold mb-2">{imageTag}</p>
                <h3 className="text-white text-2xl font-bold mb-2">{imageCaption}</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
