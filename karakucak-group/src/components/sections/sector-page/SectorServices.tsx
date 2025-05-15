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
  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4 sm:px-6">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-6 md:gap-10 lg:gap-12`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >{title}</motion.h2>
            
            <motion.div 
              className="w-16 sm:w-20 h-1 bg-yellow-500 mb-4 sm:mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: "5rem" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            ></motion.div>
            
            <motion.p 
              className="text-gray-700 mb-6 leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >{description}</motion.p>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-2 sm:space-x-3"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
                >
                  <div className="flex-shrink-0 bg-yellow-500 rounded-full p-1 mt-0.5">
                    {service.icon}
                  </div>
                  <p className="text-gray-800 font-medium text-sm sm:text-base">{service.title}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 relative mt-6 lg:mt-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl w-full h-72 sm:h-80 md:h-96">
              <Image 
                src={imageSrc}
                alt={imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
