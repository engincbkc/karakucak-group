"use client"

import React from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Users, TrendingUp, Building2, GlobeLock } from "lucide-react"

const stats = [
  {
    label: "Çalışan Sayısı",
    value: "1000+",
    icon: Users,
    description: "5 sektörde faaliyet gösteren dünya çapında çalışanlar"
  },
 
  {
    label: "Şirket Sayısı",
    value: "5",
    icon: Building2,
    description: "Grup çatısı altındaki şirketler"
  },
  
]

export function StatsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Karakucak Group İstatistikleri</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            25 yılı aşkın deneyimimizle sürekli büyüyor ve geliştiriyoruz. İşte Karakucak Group'u rakamlarla tanımlayan bazı istatistiklerimiz.
          </p>
        </motion.div>

        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mb-4">
                <stat.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h3>
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">{stat.label}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">{stat.description}</p>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
