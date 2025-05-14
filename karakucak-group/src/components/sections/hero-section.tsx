"use client"

import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background overlay with slight opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1492901096107-c0dae90d2146?ixlib=rb-4.0.3"
          alt="Karakucak Group Headquarters"
          fill
          priority
          className="object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Karakucak Group ile 
            <span className="text-blue-400"> Geleceği</span> İnşa Ediyoruz
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Otomotiv, madencilik, tekstil ve mimarlık sektörlerinde 25 yılı aşkın deneyimle, 
            yenilikçi ve sürdürülebilir çözümler sunuyoruz.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/hakkimizda"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-medium transition-colors"
            >
              Hakkımızda
            </Link>
            <Link
              href="/iletisim"
              className="px-6 py-3 rounded-lg bg-transparent hover:bg-white/10 border border-white text-white text-sm md:text-base font-medium transition-colors"
            >
              İletişime Geçin
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Keşfedin</span>
            <div className="w-0.5 h-8 bg-gray-400 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
