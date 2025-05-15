// src/components/sections/sector-page/SectorProjects.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export type ProjectItem = {
  image: string;
  title: string;
  description: string;
  alt?: string;
};

type SectorProjectsProps = {
  title: string;
  description: string;
  projects: ProjectItem[];
  bgColor?: string;
};

export default function SectorProjects({
  title,
  description,
  projects,
  bgColor = 'bg-white',
}: SectorProjectsProps) {
  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="mb-8 max-w-3xl mx-auto text-gray-700">{description}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md transform hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.alt || project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
