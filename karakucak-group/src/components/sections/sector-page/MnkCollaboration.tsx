// src/components/sections/sector-page/MnkCollaboration.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

type FeatureItem = {
  text: string;
};

type ImageItem = {
  src: string;
  alt: string;
};

type MnkCollaborationProps = {
  title: string;
  description: string;
  features: FeatureItem[];
  images: ImageItem[];
  buttonText: string;
  buttonLink: string;
  bgColor?: string;
};

export default function MnkCollaboration({
  title,
  description,
  features,
  images,
  buttonText,
  buttonLink,
  bgColor = 'bg-gray-100',
}: MnkCollaborationProps) {
  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-6">{description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{feature.text}</p>
                </div>
              ))}
            </div>
            <Link
              href={buttonLink}
              className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              {buttonText}
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-5/12 mt-10 md:mt-0"
          >
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div 
                  key={index} 
                  className="relative rounded-lg overflow-hidden h-48 transform hover:scale-105 transition-transform duration-300 shadow-md"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
