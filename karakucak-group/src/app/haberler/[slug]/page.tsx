import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ChevronLeft, Calendar, Tag } from 'lucide-react'
import { getNewsBySlug, getAllNewsSlugs } from '@/data/news-data'
import { getProjectBySlug } from '@/data/projects-data'
import { generateNewsMetadata } from '@/app/metadata'

// Tüm haber slug'larını alma fonksiyonu - dinamik statik yollar üretimi için
export function generateStaticParams() {
  const slugs = getAllNewsSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

// Bu fonksiyon sayfa meta verilerini dinamik olarak üretir
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Next.js 15'te params'yi beklemeliyiz
  const slug = await Promise.resolve(params.slug)
  const newsItem = getNewsBySlug(slug)
  
  if (!newsItem) {
    return {
      title: 'Haber Bulunamadı',
      description: 'Aradığınız haber bulunamadı.'
    }
  }
  
  return generateNewsMetadata(
    newsItem.title,
    newsItem.excerpt,
    newsItem.image,
    newsItem.publishDate
  )
}

// Viewport konfigürasyonu için ayrı bir export
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 2,
}

// Haber detay sayfası bileşeni - Next.js 15 ile uyumlu olarak async yapıldı
export default async function NewsDetailPage({ params }: { params: { slug: string } }) {
  // Next.js 15'te params'yi beklemeliyiz
  const slug = await Promise.resolve(params.slug)
  const newsItem = getNewsBySlug(slug)
  
  // Eğer haber bulunamazsa 404 sayfasına yönlendir
  if (!newsItem) {
    notFound()
  }
  
  // Tarih formatı
  const date = new Date(newsItem.publishDate)
  const formattedDate = date.toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
  
  // İlişkili projeler (varsa)
  const relatedProjects = newsItem.relatedProjects?.map(slug => getProjectBySlug(slug)).filter(Boolean) || []
  
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Bölümü */}
      <div className="relative w-full h-[50vh] md:h-[60vh] bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <Image 
          src={newsItem.image} 
          alt={newsItem.title} 
          fill 
          priority
          className="object-contain p-4" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        
        {/* Geri dön butonu */}
        <div className="absolute top-8 left-8 z-10">
          <Link 
            href="/haberler" 
            className="flex items-center gap-2 text-white bg-black/20 backdrop-blur-sm hover:bg-black/40 px-4 py-2 rounded-full transition duration-300"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Tüm Haberler</span>
          </Link>
        </div>
        
        {/* Haber başlık ve detay bilgileri - Semantic HTML geliştirilmiş */}
        <header className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">{newsItem.title}</h1>
            
            <div className="flex flex-wrap items-center text-white/90 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{formattedDate}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5" />
                <span>{newsItem.category}</span>
              </div>
            </div>
          </div>
        </header>
      </div>
      
      {/* İçerik Bölümü */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Ana içerik */}
          <div className="lg:w-2/3">
            {/* Haber özeti */}
            <div className="mb-8">
              <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed font-medium italic">
                {newsItem.excerpt}
              </p>
            </div>
            
            {/* Haber içeriği */}
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
            </div>
            
            {/* Galeri (varsa) */}
            {newsItem.gallery && newsItem.gallery.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Galeri</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {newsItem.gallery.map((item, index) => (
                    <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                      <Image 
                        src={item.url} 
                        alt={item.alt} 
                        fill 
                        className="object-contain transition-transform hover:scale-105 duration-700" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* İlişkili projeler (varsa) */}
            {relatedProjects.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">İlişkili Projeler</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedProjects.map((project) => (
                    <Link key={project?.id} href={`/mnk-mimarlik/projeler/${project?.slug}`} className="group">
                      <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                        <Image 
                          src={project?.image || ''} 
                          alt={project?.title || ''} 
                          fill 
                          className="object-contain transition-transform group-hover:scale-105 duration-500" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-lg font-bold text-white">{project?.title}</h3>
                          <p className="text-sm text-white/80">{project?.location}, {project?.year}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Yan panel */}
          <div className="lg:w-1/3">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Haber Bilgileri</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Yayınlanma Tarihi</h4>
                  <p className="text-gray-900 dark:text-white">{formattedDate}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Kategori</h4>
                  <p className="text-gray-900 dark:text-white">{newsItem.category}</p>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Paylaş</h4>
                  <div className="flex gap-3">
                    <a href="#" className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="bg-blue-400 text-white p-2 rounded-full hover:bg-blue-500 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M18.885 4.125A9.094 9.094 0 0012 2.25c-5.033 0-9.128 4.095-9.128 9.128 0 1.605.417 3.171 1.214 4.55l-1.286 4.748 4.838-1.268a9.09 9.09 0 004.362 1.11c5.033 0 9.128-4.095 9.128-9.128 0-2.437-.942-4.73-2.657-6.457l-.01-.01-.322-.322-.254-.254zm-6.885 14.04a7.57 7.57 0 01-3.81-1.035l-.285-.167-2.913.763.783-2.851-.193-.328a7.61 7.61 0 01-1.157-4.034c0-4.208 3.428-7.636 7.636-7.636 2.039 0 3.962.798 5.41 2.246a7.63 7.63 0 012.226 5.4c0 4.208-3.428 7.636-7.636 7.636l-.06.006z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="bg-blue-700 text-white p-2 rounded-full hover:bg-blue-800 transition">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 9.94v-8.37H5.5v8.37h2.77z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  href="/haberler" 
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg text-center transition duration-300 font-medium"
                >
                  Tüm Haberlere Gözat
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
