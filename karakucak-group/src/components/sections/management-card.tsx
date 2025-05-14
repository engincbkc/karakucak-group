"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { LucideLinkedin, LucideChevronRight } from "lucide-react";
import Link from "next/link";

interface ExecutiveProps {
  name: string;
  position: string;
  image: string;
  bio: string;
  linkedin?: string;
  index: number;
}

export const ManagementCard: React.FC<ExecutiveProps> = ({
  name,
  position,
  image,
  bio,
  linkedin,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
        <div className="relative h-72 overflow-hidden group">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-4 w-full">
              {linkedin && (
                <Link href={linkedin} target="_blank" rel="noopener noreferrer">
                  <div className="bg-white dark:bg-gray-800 p-2 rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors">
                    <LucideLinkedin className="text-blue-700 dark:text-blue-400" />
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{name}</h3>
          <p className="text-blue-700 dark:text-blue-400 font-medium mb-4">{position}</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{bio}</p>
          <Link 
            href={`/yonetim/${name.toLowerCase().replace(/\s+/g, "-")}`}
            className="inline-flex items-center text-blue-700 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors mt-2 group"
          >
            <span className="mr-1">Detaylı Bilgi</span>
            <LucideChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Card>
    </motion.div>
  );
};
