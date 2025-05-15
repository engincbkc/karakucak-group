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
    <section className="py-24 bg-white" data-aos="fade-up">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-12`}>
          <motion.div
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-3">{title}</h2>
            <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-yellow-500 rounded-full p-1">
                    {service.icon}
                  </div>
                  <p className="text-gray-800 font-medium">{service.title}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-5/12"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: '440px' }}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover transform hover:scale-110 transition-transform duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
