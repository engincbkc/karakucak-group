"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useAnimation } from "framer-motion"
import { ArrowRight, Calendar } from "lucide-react"

const newsItems = [
  {
    title: "Karakucak Group Elektrikli Otomotiv Yatırımını Duyurdu",
    date: "10 Mayıs 2025",
    excerpt: "Grup, otomotiv sektöründeki varlığını güçlendirmek amacıyla elektrikli araç komponentleri üretimi için 120 milyon dolar yatırım yapacağını açıkladı.",
    image: "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3",
    href: "/haberler/elektrikli-otomotiv-yatirimi"
  },
  {
    title: "MNK Mimarlık'ın Ekolojik Ofis Projesi Uluslararası Ödül Kazandı",
    date: "2 Mayıs 2025",
    excerpt: "MNK Mimarlık'ın tasarladığı sürdürülebilir ofis kompleksi, International Green Building Awards'da birincilik ödülünü kazandı.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
    href: "/haberler/mnk-mimarlik-odulu"
  },
  {
    title: "Organik Pamuk Üretimine Büyük Yatırım",
    date: "15 Nisan 2025",
    excerpt: "Karakucak Group, sürdürülebilir tekstil stratejisi kapsamında organik pamuk üretimini %40 artırmak için çiftçilerle yeni anlaşmalar imzaladı.",
    image: "https://images.unsplash.com/photo-1523471826770-c437acb1e088?ixlib=rb-4.0.3",
    href: "/haberler/organik-pamuk-yatirim"
  },
]

export function NewsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">Bizden Haberler</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              Karakucak Group'un son gelişmeleri, yatırımları ve başarıları hakkında güncel haberler.
            </p>
          </div>
          <Link 
            href="/haberler" 
            className="mt-4 md:mt-0 inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            Tüm Haberler
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>
                <Link 
                  href={item.href}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
                >
                  Devamını Oku
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
