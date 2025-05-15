// src/components/sections/sector-page/SectorCta.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type ButtonItem = {
  text: string;
  href: string;
  isPrimary?: boolean;
  className?: string;
};

type SectorCtaProps = {
  title: string;
  description: string;
  buttons: ButtonItem[];
  backgroundClass?: string;
};

export default function SectorCta({
  title,
  description,
  buttons,
  backgroundClass = 'bg-gray-800 text-white',
}: SectorCtaProps) {
  return (
    <section className={`${backgroundClass} py-16`}>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6">{title}</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={button.className || 
                  `inline-block ${button.isPrimary 
                    ? 'bg-white text-gray-800 hover:bg-gray-100' 
                    : 'bg-transparent border-2 border-white text-white hover:bg-white/10'
                  } font-medium px-6 py-3 rounded-lg transition-colors w-full sm:w-auto`
                }
              >
                {button.text}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
