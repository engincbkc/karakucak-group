"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, TrendingUp, Award, Building, Leaf, Cpu, Globe, CheckCircle, Users, BarChart3 } from "lucide-react"

// Import data
import { getSectorData } from "@/data/sectors-data"
import { getCompanyInfo } from "@/data/company-info-data"

interface SectorCardProps {
  id: string
  title: string // Şirket adı
  subtitle: string // Sektör adı
  description: string
  image: string
  href: string
  iconName: string
  keyFeatures: string[]
  stats: { label: string; value: string }[]
  index: number
}

// Icon bileşenini ikonName'e göre return eden fonksiyon
const renderIcon = (iconName: string) => {
  switch(iconName) {
    case 'cpu':
      return <Cpu className="w-6 h-6" />;
    case 'building':
      return <Building className="w-6 h-6" />;
    case 'globe':
      return <Globe className="w-6 h-6" />;
    case 'award':
      return <Award className="w-6 h-6" />;
    case 'leaf':
      return <Leaf className="w-6 h-6" />;
    default:
      return <TrendingUp className="w-6 h-6" />;
  }
}

// JSON'dan veri çekecek şekilde statik dizi kaldırıldı

const SectorCard = ({ id, title, subtitle, description, image, href, iconName, keyFeatures, stats, index }: SectorCardProps) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/90 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700/30 flex flex-col h-full transform hover:-translate-y-2 w-full md:w-[calc(50%-1rem)] xl:w-[calc(33.333%-1rem)] max-w-md"
    >
      {/* Card Header with Image */}
      <div className="relative h-56 md:h-64 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110 group-hover:filter group-hover:brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"></div>
        
        {/* Sector Title Badge */}
        <div className="absolute top-4 left-4 z-10">
          <div className="bg-black/40 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full flex items-center space-x-3">
            <div className="text-amber-400">
              {renderIcon(iconName)}
            </div>
            <span className="text-white font-medium text-sm">{subtitle}</span>
          </div>
        </div>
        
        {/* Floating Stats Badge - Top Right */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-amber-600/20 backdrop-blur-md border border-amber-500/20 px-3 py-1.5 rounded-lg">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4 text-amber-400" />
              <span className="text-white text-xs font-bold">{stats[0].value}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="flex flex-col flex-grow p-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 line-clamp-3 flex-grow">{description}</p>
        
        {/* Key Features */}
        <div className="mb-6">
          <ul className="space-y-2">
            {keyFeatures.map((feature, idx) => (
              <li key={idx} className="flex items-start space-x-2">
                <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Stats Row */}
        <div className="flex justify-between mb-6 border-t border-gray-100 dark:border-gray-700/30 pt-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xl font-bold text-amber-600 dark:text-amber-400">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <Link 
          href={href}
          className="mt-auto inline-flex items-center justify-center bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl group"
        >
          <span>Detaylı Bilgi</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

export function SectorCards() {
  // JSON verilerini alma
  const sectorsData = getSectorData().sectors;
  const companyInfo = getCompanyInfo();
  
  // Sektör kartları için veri hazırlama
  const sectorCardsData = sectorsData.map(sector => {
    return {
      id: sector.id,
      title: sector.companyName, // Şirket adı
      subtitle: sector.title,  // Sektör adı
      description: sector.description,
      image: sector.backgroundImage,
      href: `/sektor/${sector.id}`,
      iconName: sector.icon,
      keyFeatures: sector.keyPoints,
      stats: [
        ...sector.stats  // JSON'dan gelen istatistikler
      ]
    };
  });
  
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Background Decoration Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50 dark:opacity-30">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-amber-100 dark:bg-amber-900/20 blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-amber-50 dark:bg-amber-900/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          {/* Section Title Badge */}
          <div className="inline-flex items-center bg-amber-50 dark:bg-amber-900/30 border border-amber-100 dark:border-amber-800/30 rounded-full px-4 py-2 mb-6">
            <Globe className="w-5 h-5 text-amber-600 dark:text-amber-400 mr-2" />
            <span className="text-amber-700 dark:text-amber-300 font-medium text-sm">Global Faaliyet Alanları</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Şirketlerimiz ve <span className="text-amber-600 dark:text-amber-400">Faaliyet Alanları</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Karakucak Group olarak, <span className="font-medium text-gray-800 dark:text-gray-100">birbirinden farklı sektörlerde</span> yenilikçi çözümler ve ileri teknolojiler kullanarak müşterilerimize maksimum değer sunuyoruz.
          </p>
          
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-amber-100 dark:bg-amber-900/30">
                <Building className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">5+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Faaliyet Sektörü</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-amber-100 dark:bg-amber-900/30">
                <Users className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">1.000+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Toplam Çalışan</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-amber-100 dark:bg-amber-900/30">
                <TrendingUp className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">15+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Yıllık Tecrübe</div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {sectorCardsData.map((sector, index) => (
            <SectorCard
              key={sector.id}
              id={sector.id}
              title={sector.title}
              subtitle={sector.subtitle}
              description={sector.description}
              image={sector.image}
              href={sector.href}
              iconName={sector.iconName}
              keyFeatures={sector.keyFeatures}
              stats={sector.stats}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
