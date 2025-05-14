"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from "@/lib/theme-context"

export interface NewsItem {
  id: string
  title: string
  excerpt: string
  image: string
  category: string
  publishDate: string
  slug: string
  content?: string
  relatedProjects?: string[]
  gallery?: Array<{url: string, alt: string}>
}

interface NewsCardProps {
  news: NewsItem
  categoryLabel?: string
  categoryColor?: string
  variant?: "default" | "featured" | "compact"
  className?: string
}

export function NewsCard({ 
  news, 
  categoryLabel, 
  categoryColor,
  variant = "default",
  className 
}: NewsCardProps) {
  // Tema sistemini kullan
  const { themeClasses } = useTheme();
  
  // Eğer categoryColor verilmemişse varsayılan değeri theme'e göre ayarla
  const defaultCategoryColor = themeClasses(
    "bg-blue-100 text-blue-800", 
    "bg-blue-900/40 text-blue-300"
  );
  
  // Kategori renk sınıfını belirle
  const finalCategoryColor = categoryColor || defaultCategoryColor;
  // Tarih formatı
  const date = new Date(news.publishDate)
  const formattedDate = date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  // Featured (Öne Çıkan) varyantı
  if (variant === "featured") {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          `group relative flex flex-col lg:flex-row ${themeClasses("bg-white", "bg-gray-800")} rounded-xl shadow-md overflow-hidden h-full`,
          className
        )}
      >
        {/* Haber Görseli */}
        <div className="lg:w-1/2 relative aspect-video lg:aspect-auto overflow-hidden">
          <Image 
            src={news.image} 
            alt={news.title} 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          {categoryLabel && (
            <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full ${categoryColor}`}>
              {categoryLabel}
            </span>
          )}
        </div>
        
        {/* Haber İçeriği */}
        <div className="lg:w-1/2 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            <div className={`text-sm ${themeClasses("text-gray-500", "text-gray-400")} mb-3`}>
              {formattedDate}
            </div>
            
            <h2 className={`text-2xl font-bold ${themeClasses("text-gray-900", "text-white")} mb-4 line-clamp-2`}>
              {news.title}
            </h2>
            
            <p className={`${themeClasses("text-gray-600", "text-gray-300")} mb-6 line-clamp-3`}>
              {news.excerpt}
            </p>
          </div>
          
          <div className={`inline-flex items-center ${themeClasses("text-blue-600 hover:text-blue-800", "text-blue-400 hover:text-blue-300")} font-medium group/link`}>
            Devamını Oku
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
          </div>
        </div>
      </motion.div>
    )
  }
  
  // Compact (kompakt) varyantı
  if (variant === "compact") {
    return (
      <motion.div 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className={cn(
          `flex items-center gap-4 ${themeClasses("bg-white", "bg-gray-800")} p-4 rounded-lg shadow-sm`,
          className
        )}
      >
        {/* Küçük Resim */}
        <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden">
          <Image 
            src={news.image} 
            alt={news.title} 
            fill 
            className="object-cover" 
          />
        </div>
        
        {/* İçerik */}
        <div className="flex-1 min-w-0">  {/* min-w-0 için kırılmayı engeller */}
          <h3 className={`text-sm font-semibold ${themeClasses("text-gray-900", "text-white")} line-clamp-2 mb-1`}>
            {news.title}
          </h3>
          
          <div className={`flex items-center text-xs ${themeClasses("text-gray-500", "text-gray-400")} space-x-2`}>
            <span>{formattedDate}</span>
            {categoryLabel && (
              <>
                <span>•</span>
                <span className={`px-1.5 py-0.5 rounded-full ${categoryColor}`}>
                  {categoryLabel}
                </span>
              </>
            )}
          </div>
        </div>
      </motion.div>
    )
  }
  
  // Default varyantı
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        `flex flex-col ${themeClasses("bg-white", "bg-gray-800")} rounded-lg shadow-md overflow-hidden h-full transition-transform hover:translate-y-[-5px] hover:shadow-lg`,
        className
      )}
    >
      {/* Haber Görseli */}
      <div className="relative aspect-video overflow-hidden">
        <Image 
          src={news.image} 
          alt={news.title} 
          fill 
          className="object-cover transition-transform hover:scale-105 duration-500" 
        />
        {categoryLabel && (
          <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full ${categoryColor}`}>
            {categoryLabel}
          </span>
        )}
      </div>
      
      {/* Haber İçeriği */}
      <div className="flex-1 p-6 flex flex-col">
        <div className={`text-sm ${themeClasses("text-gray-500", "text-gray-400")} mb-2`}>
          {formattedDate}
        </div>
        
        <h2 className={`text-xl font-bold ${themeClasses("text-gray-900", "text-white")} mb-3 line-clamp-2`}>
          {news.title}
        </h2>
        
        <p className={`${themeClasses("text-gray-600", "text-gray-300")} mb-4 line-clamp-3 flex-grow`}>
          {news.excerpt}
        </p>
        
        <div className={`${themeClasses("text-blue-600 hover:text-blue-800", "text-blue-400 hover:text-blue-300")} font-medium inline-flex items-center group`}>
          Devamını Oku
          <svg 
            className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}
