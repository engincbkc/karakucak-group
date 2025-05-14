"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface DirectorProps {
  name: string
  position: string
  image: string
  bio: string
}

const directors: DirectorProps[] = [
  {
    name: "Ahmet Karakucak",
    position: "Yönetim Kurulu Başkanı",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
    bio: "25 yılı aşkın iş deneyimi ile Ahmet Karakucak, grubun kurucusu ve vizyoneridir. Otomotiv ve madencilik sektöründeki yatırımlarla başlayan kariyeri, tekstil ve mimarlık alanındaki girişimlerle genişlemiştir."
  },
  {
    name: "Ayşe Karakucak",
    position: "Başkan Yardımcısı",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    bio: "Tekstil sektöründe uzmanlaşmış olan Ayşe Karakucak, grubun pamuk ve tekstil bölümünün gelişiminde önemli rol oynamıştır. Sürdürülebilir üretim ve yenilikçi tasarım konularında liderlik etmektedir."
  },
  {
    name: "Mehmet Yılmaz",
    position: "Otomotiv Bölüm Başkanı",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    bio: "20 yıllık otomotiv sektörü deneyimi ile Mehmet Yılmaz, grubun otomotiv segmentini yönetmektedir. Elektrifikasyon ve yeni mobilite çözümleri konusunda uzmanlaşmıştır."
  },
  {
    name: "Fatma Demir",
    position: "Finans Direktörü",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
    bio: "Uluslararası finans yönetimi konusunda uzmanlaşmış olan Fatma Demir, grubun finansal stratejilerini yönetmekte ve sürdürülebilir büyümeyi sağlamaktadır."
  },
  {
    name: "Ali Kaya",
    position: "MNK Mimarlık Direktörü",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    bio: "Ödüllü mimar Ali Kaya, MNK Mimarlık bölümünün kurucusudur. Sürdürülebilir ve yenilikçi mimari tasarımlarıyla tanınmaktadır."
  },
  {
    name: "Zeynep Toprak",
    position: "AR-GE Direktörü",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3",
    bio: "Yenilikçi teknolojiler ve sürdürülebilir çözümler konusunda uzmanlaşmış olan Zeynep Toprak, grubun tüm sektörlerindeki araştırma ve geliştirme faaliyetlerini yönetmektedir."
  }
]

const DirectorCard = ({ name, position, image, bio }: DirectorProps) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <div className="relative h-72">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{name}</h3>
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">{position}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{bio}</p>
      </div>
    </motion.div>
  )
}

export function BoardOfDirectors() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Yönetim Kurulumuz
          </h2>
          <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Karakucak Group'un başarısının arkasındaki deneyimli liderlik ekibimizle tanışın. 
            Vizyoner yaklaşımları ve derin sektör bilgileriyle şirketimizi geleceğe taşıyorlar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {directors.map((director) => (
            <DirectorCard
              key={director.name}
              name={director.name}
              position={director.position}
              image={director.image}
              bio={director.bio}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
