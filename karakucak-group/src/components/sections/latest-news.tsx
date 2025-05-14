"use client"

import React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { NewsCard } from "@/components/ui/news-card"
import { getLatestNews, getNewsData } from "@/data/news-data"

interface LatestNewsProps {
  title?: string;
  subtitle?: string;
  count?: number;
  viewAllLink?: string;
  showViewAllButton?: boolean;
  className?: string;
}

export function LatestNews({
  title = "Son Haberlerimiz",
  subtitle = "Karakucak Group'tan en son haberler, etkinlikler ve duyurular",
  count = 3,
  viewAllLink = "/haberler",
  showViewAllButton = true,
  className
}: LatestNewsProps) {
  // Haberleri ve kategorileri yükle
  const { categories } = getNewsData();
  const latestNews = getLatestNews(count);
  
  return (
    <div className={`py-16 bg-gray-50 ${className || ''}`}>
      <div className="container mx-auto px-4">
        {/* Başlık ve alt başlık */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-gray-600 max-w-3xl mx-auto"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
        
        {/* Haberler */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {latestNews.map((newsItem, index) => {
            // Kategori bilgisi
            const category = categories[newsItem.category] || {
              label: newsItem.category,
              color: "bg-blue-100 text-blue-800"
            };
            
            return (
              <div key={newsItem.id} className="h-full">
                <Link 
                  href={`/haberler/${newsItem.slug}`}
                  className="block h-full transition-transform hover:scale-[1.01] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
                >
                  <NewsCard 
                    news={newsItem}
                    categoryLabel={category.label}
                    categoryColor={category.color}
                    variant="default"
                  />
                </Link>
              </div>
            );
          })}
        </div>
        
        {/* Tüm haberlere göz at butonu */}
        {showViewAllButton && (
          <div className="text-center">
            <Link 
              href={viewAllLink}
              className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors font-medium group"
            >
              Tüm Haberlere Göz At
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
