'use client';

import React, { useState, useEffect, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getNewsData, NewsItem } from '@/data/news-data'

export default function NewsPage() {
  // Haberleri ve kategorileri yükle
  const { news, categories } = getNewsData()
  
  // Aktif kategori state'i
  const [activeCategory, setActiveCategory] = useState('all')
  
  // Haberleri tarihe göre sırala (en yeniden eskiye) - useMemo ile önbelleğe al
  const sortedNews = useMemo(() => {
    return [...news].sort((a, b) => 
      new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()
    );
  }, [news]); // Sadece news değiştiğinde yeniden hesapla
  
  // Filtrelenmiş haberler için state - kategoriye göre filtrelenmiş haberler
  const [filteredNews, setFilteredNews] = useState<NewsItem[]>(sortedNews)
  
  // Kategori veya sortedNews değiştiğinde haberleri filtrele
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredNews(sortedNews)
    } else {
      setFilteredNews(sortedNews.filter(item => item.category === activeCategory))
    }
  }, [activeCategory, sortedNews]) // Şimdi güvenli, çünkü sortedNews sadece news değiştiğinde değişir
  
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Bölümü */}
      <div className="relative py-24 bg-gray-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <Image 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3" 
            alt="Haberler" 
            fill 
            priority
            className="object-contain" 
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Haberler</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Karakucak Group ve şirketlerimizin son gelişmeleri, etkinlikleri ve başarıları
          </p>
        </div>
      </div>
      
      {/* Haberler İçerik Bölümü */}
      <div className="container mx-auto px-4 py-16">
        {/* Kategori Filtreleri */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <button 
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-full transition ${
              activeCategory === 'all' 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            Tümü
          </button>
          
          {Object.entries(categories).map(([id, category]) => (
            <button 
              key={id}
              onClick={() => setActiveCategory(id)}
              className={`px-4 py-2 rounded-full transition ${
                activeCategory === id 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      
        {/* Haberler Listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((newsItem) => {
            // Tarih formatı
            const date = new Date(newsItem.publishDate)
            const formattedDate = date.toLocaleDateString('tr-TR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })
            
            // Kategori bilgisi
            const category = categories[newsItem.category]
            
            return (
              <div key={newsItem.id} className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full transition-transform hover:translate-y-[-5px] hover:shadow-lg">
                {/* Haber Görseli */}
                <div className="relative w-full h-[220px] bg-gray-100 dark:bg-gray-700">
                  <Image 
                    src={newsItem.image} 
                    alt={newsItem.title} 
                    fill 
                    className="object-contain transition-transform hover:scale-105 duration-500" 
                  />
                  {category && (
                    <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-medium rounded-full ${category.color || 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300'}`}>
                      {category.label}
                    </span>
                  )}
                </div>
                
                {/* Haber İçeriği */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {formattedDate}
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {newsItem.title}
                  </h2>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
                    {newsItem.excerpt}
                  </p>
                  
                  <Link 
                    href={`/haberler/${newsItem.slug}`}
                    className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium inline-flex items-center group"
                  >
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
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
