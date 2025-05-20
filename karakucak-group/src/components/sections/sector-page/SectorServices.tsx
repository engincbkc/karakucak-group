// src/components/sections/sector-page/SectorServices.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export type ServiceItem = {
  icon: React.ReactNode;
  title: string;
};

type SectorServicesProps = {
  title: string;
  description: string;
  services: ServiceItem[];
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
};

export default function SectorServices({
  title,
  description,
  services,
  imageSrc,
  imageAlt,
  reversed = false,
}: SectorServicesProps) {
  // Card hover animasyon efekti
  const cardVariants = {
    initial: { scale: 1, y: 0, boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" },
    hover: { 
      scale: 1.03, 
      y: -5, 
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
      transition: { duration: 0.3 }
    }
  };

  // Ikon hover animasyon efekti
  const iconVariants = {
    initial: { rotate: 0, scale: 1 },
    hover: { 
      rotate: [0, -10, 10, -5, 0], 
      scale: 1.1,
      transition: { duration: 0.5, ease: "easeInOut" }
    }
  };
  
  return (
    <section className="py-12 sm:py-16 md:py-20" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Başlık ve Açıklama Alanı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14 md:mb-16 max-w-4xl mx-auto"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1.5 bg-amber-500 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: "6rem" }}
            transition={{ duration: 0.8, delay: 0.3 }}
          ></motion.div>
          
          <motion.p 
            className="text-gray-700 text-lg max-w-3xl mx-auto px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {description}
          </motion.p>
        </motion.div>
        
        {/* İçerik Düzeni - Görsel ve Hizmetler */}
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-10 lg:gap-16`}>
          {/* Sol Taraf - Resim */}
          <motion.div 
            className="w-full lg:w-5/12 relative"
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl w-full h-80 sm:h-96 md:h-[450px]">
              {/* Görsel Animasyonu */}
              <motion.div
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.2 }}
                className="w-full h-full"
              >
                <Image 
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </motion.div>
              
              {/* Görsel üzerinde overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            {/* Dekoratif Arka Plan Elementi */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -z-10 w-full h-full rounded-xl bg-amber-100/50 -bottom-4 -right-4"
            />
          </motion.div>
          
          {/* Sağ Taraf - Hizmetler */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-7/12 mt-10 lg:mt-0"
          >
            {/* Hizmet Kartları Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-xl p-5 border border-gray-100 shadow-lg cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileHover="hover"
                  variants={cardVariants}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                    {/* Simge Alanı */}
                    <motion.div 
                      variants={iconVariants}
                      className="flex-shrink-0 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full p-3 shadow-md"
                    >
                      {service.icon}
                    </motion.div>
                    
                    {/* Başlık */}
                    <div className="text-center sm:text-left">
                      <h3 className="text-lg font-semibold mb-2 text-gray-800">{service.title}</h3>
                      <div className="w-10 h-0.5 bg-amber-400 mb-2 mx-auto sm:mx-0"></div>
                      <p className="text-gray-600 text-sm">
                        Profesyonel çözümler sunuyoruz
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
