"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface SectorCardProps {
  title: string
  description: string
  image: string
  href: string
  index: number
}

const sectorData = [
  {
    title: "Otomotiv",
    description: "Otomotiv sektöründe yenilikçi teknolojiler ve sürdürülebilir çözümlerle müşterilerimizin ihtiyaçlarına uygun çözümler geliştiriyoruz.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3",
    href: "/sektor/otomotiv"
  },
  {
    title: "İnşaat&Taahhüt",
    description: "Modern mimari anlayışımız ve yüksek mühendislik standartlarımızla inşaat sektöründe güvenilir çözümler sunuyoruz.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3",
    href: "/sektor/insaat-taahhut"
  },
  {
    title: "Pamuk Sanayi",
    description: "Sürdürülebilir pamuk üretimi ve işleme teknolojilerimizle tekstil sektörüne değer katan kaliteli ürünler sağlıyoruz.",
    image: "https://images.unsplash.com/photo-1605187337001-2356749647e2?ixlib=rb-4.0.3",
    href: "/sektor/pamuk-sanayi"
  },
  {
    title: "Madencilik",
    description: "Çevre dostu madencilik uygulamalarımız ve ileri teknoloji ekipmanlarımızla doğal kaynakları verimli şekilde değerlendiriyoruz.",
    image: "https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-4.0.3",
    href: "/sektor/madencilik"
  },
  {
    title: "Tarım",
    description: "Modern tarım teknolojileri ve sürdürülebilir uygulamalarla tarımsal üretimde verimliliği artırıyor, geleceğin tarımını şekillendiriyoruz.",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3",
    href: "/sektor/tarim"
  }
]

const SectorCard = ({ title, description, image, href, index }: SectorCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all"
    >
      <div className="relative h-64 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
      </div>
      
      <div className="absolute bottom-0 w-full p-5">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{description}</p>
        
        <Link 
          href={href}
          className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Keşfedin
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

export function SectorCards() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Faaliyet Alanlarımız</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Karakucak Group olarak, birbirinden farklı sektörlerde yenilikçi çözümlerle müşterilerimize değer katıyoruz.
            Sektörlerimiz hakkında daha fazla bilgi edinmek için aşağıdan seçim yapabilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectorData.map((sector, index) => (
            <SectorCard
              key={sector.title}
              title={sector.title}
              description={sector.description}
              image={sector.image}
              href={sector.href}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
