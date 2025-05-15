"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { OrganizationChart } from "@/components/sections/organization-chart";
import { BoardOfDirectors } from "@/components/sections/board-of-directors";
import { ChevronRight } from "lucide-react";

// Yönetici verileri - Türkçe karakterler düzeltildi
const executives = [
  {
    name: "Ahmet Karakucak",
    position: "Yönetim Kurulu Başkanı",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
    bio: "25 yılı aşkın iş deneyimi ile Ahmet Karakucak, grubun kurucusu ve vizyoneridir. Otomotiv ve madencilik sektöründeki yatırımlarla başlayan kariyeri, tekstil ve mimarlık alanındaki girişimlerle genişlemiştir.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Ayşe Karakucak",
    position: "Başkan Yardımcısı",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    bio: "Tekstil sektöründe uzmanlaşmış olan Ayşe Karakucak, grubun pamuk ve tekstil bölümünün gelişiminde önemli rol oynamıştır. Sürdürülebilir üretim ve yenilikçi tasarım konularında liderlik etmektedir.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Mehmet Yılmaz",
    position: "CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    bio: "20 yıllık yönetim deneyimi ile Mehmet Yılmaz, grubun tüm faaliyetlerini yönetmekte ve stratejik büyümeyi sağlamaktadır. Öncü liderlik yaklaşımı ve vizyon sahibi perspektifi ile şirketi geleceğe taşımaktadır.",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Ali Kaya",
    position: "MNK Mimarlık Direktörü",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    bio: "Ödüllü mimar Ali Kaya, MNK Mimarlık bölümünün kurucusudur. Sürdürülebilir ve yenilikçi mimari tasarımlarıyla tanınmaktadır."
  },
  {
    name: "Fatma Demir",
    position: "Finans Direktörü",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
    bio: "Uluslararası finans yönetimi konusunda uzmanlaşmış olan Fatma Demir, grubun finansal stratejilerini yönetmekte ve sürdürülebilir büyümeyi sağlamaktadır."
  },
  {
    name: "Zeynep Toprak",
    position: "AR-GE Direktörü",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3",
    bio: "Yenilikçi teknolojiler ve sürdürülebilir çözümler konusunda uzmanlaşmış olan Zeynep Toprak, grubun tüm sektörlerindeki araştırma ve geliştirme faaliyetlerini yönetmektedir."
  },
  {
    name: "Mustafa Yazar",
    position: "Otomotiv Bölüm Başkanı",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3",
    bio: "Otomotiv sektöründe 18 yıllık deneyime sahip olan Mustafa Yazar, grubun otomotiv faaliyetlerini yönetmekte ve yeni teknolojilerin entegrasyonunda öncülük etmektedir."
  },
  {
    name: "Aylin Koru",
    position: "İnsan Kaynakları Direktörü",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3",
    bio: "İnsan kaynakları ve organizasyonel gelişim konularında uzmanlaşmış olan Aylin Koru, yetenek yönetimi ve kurumsal kültür stratejileriyle, grubun insan sermayesini güçlendirmektedir."
  },
  {
    name: "Kemal Aksoy",
    position: "Madencilik Bölüm Başkanı",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3",
    bio: "Maden mühendisliği alanında uzman olan Kemal Aksoy, grubun madencilik operasyonlarını yönetmekte ve sürdürülebilir madencilik uygulamalarını hayata geçirmektedir."
  }
];

export default function YonetimPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-blue-700/20 rounded-full filter blur-3xl"></div>
          
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.05, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3"
              alt="Yönetim Ekibimiz"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              quality={90}
            />
          </motion.div>
          
          {/* Subtle grid overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-5 sm:px-10 py-28 md:py-36">
          <motion.div
            className="max-w-3xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 mb-5 bg-blue-700/30 backdrop-blur-sm rounded-full border border-blue-500/20">
              <span className="text-sm font-medium text-blue-200">Karakucak Grup Yönetimi</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                Yönetim Kadromuz
              </span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-blue-50/90 max-w-2xl">
              Karakucak Group'un başarısının arkasındaki <span className="text-blue-300 font-semibold">deneyimli liderlik ekibimizle</span> tanışın.
              Vizyoner yaklaşımları ve derin sektör bilgileriyle şirketimizi geleceğe taşıyorlar.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <Button 
                href="#yonetim-ekibi" 
                variant="primary" 
                size="lg"
                iconPosition="right"
                icon={<ChevronRight className="w-5 h-5" />}
                className="bg-blue-600 hover:bg-blue-700 border-blue-700/50 shadow-lg shadow-blue-700/20"
              >
                Ekibimizi Tanıyın
              </Button>
              <Button 
                href="/iletisim" 
                variant="outline" 
                size="lg"
                className="border-white/20 backdrop-blur-sm hover:bg-white/10"
              >
                İletişime Geçin
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Yönetim Ekibi */}
      <section id="yonetim-ekibi">
        <BoardOfDirectors />
      </section>

      {/* Organizasyon Yapımız */}
      <section id="organizasyon-yapisi" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-3xl opacity-50"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-3xl opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-5 sm:px-10 relative z-10">
          <SectionHeader
            title="Organizasyon Yapımız"
            subtitle="Karakucak Group'un kurumsal organizasyon yapısı, her biri alanında uzman profesyonellerden oluşan güçlü bir ekiple desteklenmektedir."
            alignment="center"
            className="mb-16"
            showLine
          />
          
          <div className="max-w-7xl mx-auto">
            <OrganizationChart />
          </div>
          
          <motion.div 
            className="mt-20 text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700/30 rounded-2xl p-8 sm:p-10 max-w-4xl mx-auto shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Sürdürülebilir Büyüme</h3>
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Organizasyon yapımız, çağın gereksinimlerine uygun olarak dinamik bir şekilde gelişmeye devam etmektedir. 
              Her departmanımız, alanında uzmanlaşmış profesyonellerden oluşur ve şirketimizin stratejik hedeflerine 
              ulaşmasında kritik rol oynar.
            </p>
            <Button 
              href="/kurumsal/kariyer" 
              variant="secondary"
              size="lg"
              iconPosition="right"
              icon={<ChevronRight className="w-5 h-5" />}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg shadow-blue-700/20 border-0"
            >
              Kariyer Fırsatlarını İnceleyin
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Kariyer Fırsatları */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Kariyer Fırsatları</h2>
              <p className="text-lg mb-6">
                Karakucak Group, yetenekli profesyonellere gelişme ve kariyer fırsatları sunmaktadır. 
                Dinamik, yenilikçi ve çeşitliliğe değer veren bir ortamda, geleceğin liderlerini 
                yetiştiriyoruz.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Profesyonel gelişim ve eğitim programları</li>
                <li className="mb-2">Uluslararası kariyer fırsatları</li>
                <li className="mb-2">Yenilikçi projeler ve teknolojiler</li>
                <li>Güçlü takım kültürü ve değerler</li>
              </ul>
              <Button
                href="/kurumsal/kariyer"
                variant="outline"
                className="bg-white text-blue-700 hover:bg-blue-50"
              >
                Açık Pozisyonları Görüntüleyin
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3" 
                alt="Karakucak Group Çalışanları"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Kurumsal Değerlerimiz</h2>
              <p className="text-xl mb-8 text-blue-100">
                Yenilikçilik, sürdürülebilirlik ve müşteri odaklı yaklaşımımız, 25 yıllık başarı hikayemizin temelini oluşturuyor. 
                Değerlerimiz hakkında daha fazla bilgi almak için kurumsal sayfamızı ziyaret edin.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  href="/hakkimizda#degerlerimiz" 
                  variant="outline"
                  size="lg"
                  iconPosition="right"
                  icon={<ChevronRight />}
                  className="bg-white text-blue-700 hover:bg-gray-100"
                >
                  Değerlerimizi Keşfedin
                </Button>
                <Button 
                  href="/kurumsal/vizyon-misyon" 
                  variant="outline"
                  size="lg"
                >
                  Vizyon ve Misyonumuz
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
