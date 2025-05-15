"use client"

import React, { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, TrendingUp, Award, Building, Leaf, Cpu, Globe, CheckCircle, Users, BarChart3 } from "lucide-react"

interface SectorCardProps {
  title: string
  subtitle: string
  description: string
  image: string
  href: string
  icon: React.ReactNode
  keyFeatures: string[]
  stats: { label: string; value: string }[]
  index: number
}

const sectorData = [
  {
    title: "Otomotiv",
    subtitle: "Yenilikçi Teknolojiler",
    description: "Otomotiv sektöründe yenilikçi teknolojiler ve sürdürülebilir çözümlerle müşterilerimizin ihtiyaçlarına uygun çözümler geliştiriyoruz. Mühendislik mükemmelliği ve ileri üretim süreçlerimizle sektöre değer katıyoruz.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3",
    href: "/sektor/otomotiv",
    icon: <Cpu className="w-6 h-6" />,
    keyFeatures: [
      "Lider üretim teknolojileri",
      "Kalite güvence sistemleri",
      "Sürdürülebilir tedarik zinciri"
    ],
    stats: [
      { label: "Üretim Kapasitesi", value: "+150K" },
      { label: "İş Ortağı", value: "45+" }
    ]
  },
  {
    title: "İnşaat & Taahhüt",
    subtitle: "Modern Mühendislik",
    description: "Modern mimari anlayışımız ve yüksek mühendislik standartlarımızla inşaat sektöründe güvenilir çözümler sunuyoruz. Sürdürülebilir ve dayanıklı yapılar inşa ederek sektörde fark yaratıyoruz.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3",
    href: "/sektor/insaat-taahhut",
    icon: <Building className="w-6 h-6" />,
    keyFeatures: [
      "Yüksek mühendislik standartları",
      "Sürdürülebilir tasarım",
      "Profesyonel proje yönetimi"
    ],
    stats: [
      { label: "Tamamlanan Proje", value: "100+" },
      { label: "m² İnşaat", value: "2.5M+" }
    ]
  },
  {
    title: "Pamuk Sanayi",
    subtitle: "Global Tekstil Çözümleri",
    description: "Sürdürülebilir pamuk üretimi ve işleme teknolojilerimizle tekstil sektörüne değer katan kaliteli ürünler sağlıyoruz. Uluslararası standartlarda üretim yaparak global müşteri ağımıza hizmet veriyoruz.",
    image: "https://images.unsplash.com/photo-1605187337001-2356749647e2?ixlib=rb-4.0.3",
    href: "/sektor/pamuk-sanayi",
    icon: <Globe className="w-6 h-6" />,
    keyFeatures: [
      "Çevre dostu üretim süreçleri",
      "Yüksek kalite standartları",
      "Entegre tedarik zinciri"
    ],
    stats: [
      { label: "Yıllık Kapasite", value: "120K Ton" },
      { label: "İhracat Ülkesi", value: "40+" }
    ]
  },
  {
    title: "Madencilik",
    subtitle: "Sürdürülebilir Operasyonlar",
    description: "Çevre dostu madencilik uygulamalarımız ve ileri teknoloji ekipmanlarımızla doğal kaynakları verimli şekilde değerlendiriyoruz. Güvenlik standartlarımız ve çevresel duyarlılığımızla sektörde öncü rol üstleniyoruz.",
    image: "https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-4.0.3",
    href: "/sektor/madencilik",
    icon: <Award className="w-6 h-6" />,
    keyFeatures: [
      "Çevre dostu madencilik",
      "Yüksek teknoloji ekipmanları",
      "Uluslararası güvenlik standartları"
    ],
    stats: [
      { label: "Maden Sahası", value: "18+" },
      { label: "Çalışan", value: "500+" }
    ]
  },
  {
    title: "Tarım",
    subtitle: "İnovatif Tarım Sistemleri",
    description: "Modern tarım teknolojileri ve sürdürülebilir uygulamalarla tarımsal üretimde verimliliği artırıyor, geleceğin tarımını şekillendiriyoruz. Akıllı tarım sistemleri ve verimli kaynak kullanımıyla sektörde fark yaratıyoruz.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3",
    href: "/sektor/tarim",
    icon: <Leaf className="w-6 h-6" />,
    keyFeatures: [
      "Akıllı tarım teknolojileri",
      "Optimum kaynak kullanımı",
      "Sürdürülebilir tarım uygulamaları"
    ],
    stats: [
      { label: "Arazi", value: "75K Hektar" },
      { label: "Ürün Çeşidi", value: "15+" }
    ]
  }
]

const SectorCard = ({ title, subtitle, description, image, href, icon, keyFeatures, stats, index }: SectorCardProps) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  
  return (
    <motion.div 
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800/90 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700/30 flex flex-col h-full transform hover:-translate-y-2"
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
            <div className="text-blue-400">
              {icon}
            </div>
            <span className="text-white font-medium text-sm">{subtitle}</span>
          </div>
        </div>
        
        {/* Floating Stats Badge - Top Right */}
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-blue-600/20 backdrop-blur-md border border-blue-500/20 px-3 py-1.5 rounded-lg">
            <div className="flex items-center space-x-2">
              <BarChart3 className="w-4 h-4 text-blue-400" />
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
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Stats Row */}
        <div className="flex justify-between mb-6 border-t border-gray-100 dark:border-gray-700/30 pt-4">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <Link 
          href={href}
          className="mt-auto inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl group"
        >
          <span>Detaylı Bilgi</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  )
}

export function SectorCards() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 relative overflow-hidden">
      {/* Background Decoration Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-50 dark:opacity-30">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-blue-100 dark:bg-blue-900/20 blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-blue-50 dark:bg-blue-900/10 blur-3xl"></div>
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
          <div className="inline-flex items-center bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/30 rounded-full px-4 py-2 mb-6">
            <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-700 dark:text-blue-300 font-medium text-sm">Global Faaliyet Alanları</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Faaliyet <span className="text-blue-600 dark:text-blue-400">Alanlarımız</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Karakucak Group olarak, <span className="font-medium text-gray-800 dark:text-gray-100">birbirinden farklı sektörlerde</span> yenilikçi çözümler ve ileri teknolojiler kullanarak müşterilerimize maksimum değer sunuyoruz.
          </p>
          
          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">5+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Faaliyet Sektörü</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">1.200+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Toplam Çalışan</div>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/30">
                <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white">25+</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Yıllık Tecrübe</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {sectorData.map((sector, index) => (
            <SectorCard
              key={sector.title}
              title={sector.title}
              subtitle={sector.subtitle}
              description={sector.description}
              image={sector.image}
              href={sector.href}
              icon={sector.icon}
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
