// src/components/sections/GalleryShowcase.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  location?: string;
  year?: string;
  slug?: string;
};

type GalleryShowcaseProps = {
  title: string;
  subtitle?: string;
  projects: Project[];
  viewAllLink?: string;
  viewAllText?: string;
  itemsPerPage?: number;
  className?: string;
};

export default function GalleryShowcase({
  title,
  subtitle,
  projects,
  viewAllLink = '/projeler',
  viewAllText = 'Tüm Projeleri Görüntüle',
  itemsPerPage = 3,
  className = '',
}: GalleryShowcaseProps) {
  const [currentPage, setCurrentPage] = useState(0);
  
  // Projeleri sayfala
  const totalPages = Math.ceil(projects.length / itemsPerPage);
  const startIdx = currentPage * itemsPerPage;
  const visibleProjects = projects.slice(startIdx, startIdx + itemsPerPage);
  
  // Sayfa değiştirme fonksiyonları
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };

  return (
    <section className={`py-16 bg-gray-50 ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Galeri Görünümü */}
        <div className="grid grid-cols-1 gap-8 mb-10">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row overflow-hidden h-auto md:h-96">
                {/* Mobil görünümde daha yüksek görsel için h-64 yerine h-80 kullanıyoruz */}
                <div className="w-full h-80 md:w-3/5 md:h-full relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    priority
                    className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="w-full md:w-2/5 p-5 md:p-8 flex flex-col justify-center">
                  <div className="mb-2 flex items-center text-sm text-gray-500">
                    {project.location && <span className="mr-4">{project.location}</span>}
                    {project.year && <span>{project.year}</span>}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm sm:text-base mb-4 md:mb-6 line-clamp-3 md:line-clamp-none">
                    {project.description}
                  </p>
                  
                  {project.slug && (
                    <Link 
                      href={`/projeler/${project.slug}`}
                      className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      Detayları Görüntüle
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Sayfalama Kontrolleri */}
        <div className="flex justify-between items-center mt-10">
          <div className="flex items-center space-x-4">
            <button 
              onClick={prevPage}
              disabled={currentPage === 0}
              className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              aria-label="Önceki sayfa"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <div className="text-sm text-gray-600">
              {currentPage + 1} / {totalPages}
            </div>
            
            <button 
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              aria-label="Sonraki sayfa"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>
          
          {viewAllLink && (
            <Link 
              href={viewAllLink}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              {viewAllText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
