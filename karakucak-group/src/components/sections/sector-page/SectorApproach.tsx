// src/components/sections/sector-page/SectorApproach.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export type ApproachItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type SectorApproachProps = {
  title: string;
  description: string;
  approaches: ApproachItem[];
  imageSrc: string;
  imageAlt: string;
  imageCaption?: string;
  imageSubtitle?: string;
  imageTag?: string;
  backgroundClass?: string;
};

export default function SectorApproach({
  title,
  description,
  approaches,
  imageSrc,
  imageAlt,
  imageCaption,
  imageSubtitle,
  imageTag,
  backgroundClass = 'bg-gradient-to-r from-gray-100 to-gray-200',
}: SectorApproachProps) {
  return (
    <section className={`py-24 ${backgroundClass} overflow-hidden relative`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-3">{title}</h2>
            <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
            <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
            
            <div className="space-y-4 mb-8">
              {approaches.map((approach, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-5 shadow-md transform hover:scale-105 transition-transform duration-300"
                >
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="bg-yellow-500 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                      {approach.icon}
                    </span>
                    {approach.title}
                  </h3>
                  <p className="text-gray-600 pl-11">{approach.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-5/12"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ height: '500px' }}>
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
              {(imageTag || imageCaption || imageSubtitle) && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  {imageTag && <p className="text-yellow-400 text-sm font-semibold mb-2">{imageTag}</p>}
                  {imageCaption && <h3 className="text-white text-2xl font-bold mb-2">{imageCaption}</h3>}
                  {imageSubtitle && <p className="text-white/90">{imageSubtitle}</p>}
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
