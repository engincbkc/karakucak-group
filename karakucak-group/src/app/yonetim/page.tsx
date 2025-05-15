"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { OrganizationChart } from "@/components/sections/organization-chart";
import { BoardOfDirectors } from "@/components/sections/board-of-directors";
import { CollaborationCTA } from "@/components/sections/collaboration-cta";
import { ChevronRight } from "lucide-react";

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
      <section id="yonetim-ekibi" className="py-24">
        <div className="container mx-auto px-5 sm:px-10">
          <BoardOfDirectors />
        </div>
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
        </div>
      </section>

      {/* Kariyer ve İşbirliği Fırsatları */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <CollaborationCTA 
          title="Kariyer Fırsatları" 
          subtitle="Ekibimize Katılın" 
          description="Karakucak Group bünyesinde kariyer yapmak ve profesyonel gelişiminizi hızlandırmak için, açık pozisyonlarımızı inceleyin veya özgeçmişinizi gönderin. Grubumuzun dört ana sektöründe uzmanlaşma fırsatları sizleri bekliyor."
          primaryCTA={{
            text: 'Açık Pozisyonları İnceleyin',
            href: '/kurumsal/kariyer'
          }}
          secondaryCTA={{
            text: 'Özgeçmiş Gönderin',
            href: '/iletisim?subject=İş Başvurusu'
          }}
          phone="+90 212 123 45 67"
          stats={{
            experience: 25,
            projects: 500,
            network: 100,
            sectors: 4
          }}
        />
      </motion.div>

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
