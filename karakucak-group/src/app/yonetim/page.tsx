"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { ManagementCard } from "@/components/sections/management-card";
import { OrganizationChart } from "@/components/sections/organization-chart";
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
      <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3"
              alt="Yönetim Ekibimiz"
              fill
              className="object-cover opacity-40"
              priority
              sizes="100vw"
              quality={90}
            />
          </motion.div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 lg:py-44">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">Yönetim Kadromuz</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Karakucak Group'un başarısının arkasındaki <span className="text-blue-300 font-semibold">deneyimli liderlik ekibimizle</span> tanışın.
              Vizyoner yaklaşımları ve derin sektör bilgileriyle şirketimizi geleceğe taşıyorlar.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button 
                href="#yonetim-ekibi" 
                variant="primary" 
                size="lg"
                iconPosition="right"
                icon={<ChevronRight />}
              >
                Ekibimizi Tanıyın
              </Button>
              <Button 
                href="/iletisim" 
                variant="outline" 
                size="lg"
              >
                İletişime Geçin
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Yönetim Ekibi */}
      <section id="yonetim-ekibi" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Profesyonel Yönetim Ekibimiz"
            subtitle="Deneyim, uzmanlık ve vizyon sahibi ekibimizle tanışın. Her biri kendi alanında uzmanlaşmış liderlerimiz, Karakucak Group'un başarısının arkasındaki itici güçtür."
            alignment="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <ManagementCard
                key={executive.name}
                name={executive.name}
                position={executive.position}
                image={executive.image}
                bio={executive.bio}
                linkedin={executive.linkedin}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Organizasyon Yapımız */}
      <section id="organizasyon-yapisi" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Organizasyon Yapımız"
            subtitle="Karakucak Group'un kurumsal organizasyon yapısı, her biri alanında uzman profesyonellerden oluşan güçlü bir ekiple desteklenmektedir."
            alignment="center"
            className="mb-16"
            showLine
          />
          
          <OrganizationChart />
          
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Organizasyon yapımız, çağın gereksinimlerine uygun olarak dinamik bir şekilde gelişmeye devam etmektedir. 
              Her departmanımız, alanında uzmanlaşmış profesyonellerden oluşur ve şirketimizin stratejik hedeflerine 
              ulaşmasında kritik rol oynar.
            </p>
            <Button 
              href="/kurumsal/kariyer" 
              variant="secondary"
              size="lg"
              iconPosition="right"
              icon={<ChevronRight />}
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
