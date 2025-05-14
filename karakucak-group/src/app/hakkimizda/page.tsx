"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, Building2, Award, Users, Globe, Lightbulb, Clock, BarChart, Target, Shield } from "lucide-react";

export default function HakkimizdaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Gelişmiş Parallax Efekti */}
      <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <motion.div 
          className="absolute inset-0 z-0 overflow-hidden"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
            alt="Karakucak Group Genel Merkez"
            fill
            className="object-cover opacity-40"
            priority
            sizes="100vw"
            quality={90}
          />
        </motion.div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-44">
          <motion.div 
            className="max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">Hakkımızda</h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Otomotiv, madencilik, pamuk, tekstil ve mimarlık sektörlerinde <span className="text-blue-300 font-semibold">25 yılı aşkın deneyimle</span>, 
              yenilikçi ve sürdürülebilir çözümler sunuyoruz.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button 
                href="#hikayemiz" 
                variant="primary" 
                size="lg"
                iconPosition="right"
                icon={<ChevronRight />}
              >
                Hikayemizi Keşfedin
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

      {/* Hikayemiz - Modern ve Etkileyici Tasarım */}
      <section id="hikayemiz" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Hikayemiz" 
            subtitle="1998'den bugüne, değerlerimizden ödün vermeden sürdürülebilir büyüme yolculuğumuz."
            alignment="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573164713712-03790a178651?ixlib=rb-4.0.3"
                  alt="Karakucak Group Kurucu Ofisi"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                />
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-7"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Vizyon Sahibi Bir Başlangıç
              </h3>
              <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                Karakucak Group, 1998 yılında Ahmet Karakucak tarafından madencilik sektöründeki fırsatları değerlendirmek üzere kuruldu. Kısa sürede büyüyen şirketimiz, otomotiv sektöründe yatırımlar yaparak faaliyet alanlarını genişletti.
              </p>
              <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                2005 yılında pamuk ve tekstil sektörüne adım atan grubumuz, 2012 yılında MNK Mimarlık şirketini bünyesine katarak inşaat ve tasarım alanında da faaliyet göstermeye başladı. Bugün, dört ana sektörde yürüttüğümüz faaliyetler ile Türkiye ekonomisine değer katmaya devam ediyoruz.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  href="#degerlerimiz" 
                  variant="secondary"
                  iconPosition="right"
                  icon={<ChevronRight />}
                >
                  Değerlerimizi Keşfedin
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Dört Sektörümüz */}
      <section id="sektorlerimiz" className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Faaliyet Alanlarımız" 
            subtitle="Dört farklı sektörde uzmanlaşmış ekiplerimizle hizmet veriyoruz."
            alignment="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-5 rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-12 h-12 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Otomotiv ve Madencilik</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    Geniş araç filomuz ve madencilik alanındaki yatırımlarımızla sektörün öncü kuruluşları arasında yer alıyoruz. Yenilikçi çözümler ve çevre dostu yaklaşımlar ile fark yaratıyoruz.
                  </p>
                  <Button 
                    href="/sektorler/otomotiv-madencilik" 
                    variant="ghost" 
                    size="sm"
                    iconPosition="right"
                    icon={<ChevronRight />}
                    className="mt-auto"
                  >
                    Detaylı Bilgi
                  </Button>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-5 rounded-full bg-green-100 dark:bg-green-900/30 p-3 w-12 h-12 flex items-center justify-center">
                    <Globe className="w-6 h-6 text-green-700 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Pamuk ve Tekstil</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    Sürdürülebilir üretim prensipleriyle pamuk ve tekstil sektöründe kalite standartlarını yükseltiyoruz. Müşteri odaklı üretim anlayışımızla yerel ve global pazarda güçlü bir varlık gösteriyoruz.
                  </p>
                  <Button 
                    href="/sektorler/pamuk-tekstil" 
                    variant="ghost" 
                    size="sm"
                    iconPosition="right"
                    icon={<ChevronRight />}
                    className="mt-auto"
                  >
                    Detaylı Bilgi
                  </Button>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-5 rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-purple-700 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">MNK Mimarlık</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    Modern ve yenilikçi tasarım çözümleriyle mimarlık sektöründe fark yaratan projeler geliştiriyoruz. Ticari, konut ve kurumsal projelerinizde estetik ve işlevsellik odaklı yaklaşımımızı deneyimleyin.
                  </p>
                  <Button 
                    href="/sektorler/mnk-mimarlik" 
                    variant="ghost" 
                    size="sm"
                    iconPosition="right"
                    icon={<ChevronRight />}
                    className="mt-auto"
                  >
                    Detaylı Bilgi
                  </Button>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full">
                <div className="p-6 flex flex-col h-full">
                  <div className="mb-5 rounded-full bg-amber-100 dark:bg-amber-900/30 p-3 w-12 h-12 flex items-center justify-center">
                    <Award className="w-6 h-6 text-amber-700 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Kurumsal Hizmetler</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                    Karakucak Group olarak kurumsal danışmanlık, yatırım ve stratejik planlama hizmetlerimizle iş ortaklarımıza değer katıyoruz. 25 yıllık tecrübemizle iş dünyanızın gelişimini destekliyoruz.
                  </p>
                  <Button 
                    href="/kurumsal" 
                    variant="ghost" 
                    size="sm"
                    iconPosition="right"
                    icon={<ChevronRight />}
                    className="mt-auto"
                  >
                    Detaylı Bilgi
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Değerlerimiz - İlham Verici Tasarım */}
      <section id="degerlerimiz" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            title="Değerlerimiz" 
            subtitle="25 yıllık başarı hikayemizin arkasındaki temel prensipleri keşfedin."
            alignment="center"
            className="mb-16"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl h-full">
                <div className="mb-5 rounded-full bg-blue-100 dark:bg-blue-900/30 p-3 w-12 h-12 flex items-center justify-center">
                  <Target className="w-6 h-6 text-blue-700 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Yenilikçilik</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Sürekli gelişime ve yeniliğe olan bağlılığımız, bizi sektörlerimizde öncü konuma taşıyor. Teknolojiyi ve yeni trendleri takip ederek iş süreçlerimizi sürekli iyileştiriyoruz.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl h-full">
                <div className="mb-5 rounded-full bg-green-100 dark:bg-green-900/30 p-3 w-12 h-12 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-700 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Güvenilirlik</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  İş ilişkilerimizde şeffaflık ve dürüstlüğü ön planda tutuyoruz. Müşterilerimize, çalışanlarımıza ve iş ortaklarımıza karşı sorumluluklarımızı titizlikle yerine getiriyoruz.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl h-full">
                <div className="mb-5 rounded-full bg-purple-100 dark:bg-purple-900/30 p-3 w-12 h-12 flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-700 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Ekip Çalışması</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Çeşitliliğe değer veren, yetenekleri destekleyen bir çalışma ortamı sunuyoruz. Ortak hedefler doğrultusunda işbirliği ve dayanışma ile çalışan ekiplerimiz, başarılarımızın temelini oluşturuyor.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl h-full">
                <div className="mb-5 rounded-full bg-amber-100 dark:bg-amber-900/30 p-3 w-12 h-12 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-700 dark:text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Uzun Vadeli Düşünce</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Kısa vadeli kazançlar yerine, uzun soluklu başarıları hedefliyoruz. Sürdürülebilir büyüme stratejimiz, gelecek nesillere güçlü bir miras bırakmayı amaçlıyor.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl h-full">
                <div className="mb-5 rounded-full bg-red-100 dark:bg-red-900/30 p-3 w-12 h-12 flex items-center justify-center">
                  <BarChart className="w-6 h-6 text-red-700 dark:text-red-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Mükemmeliyete Bağlılık</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Her projemizde en yüksek kalite standartlarına ulaşmayı hedefliyoruz. Sürekli gelişim ve iyileştirme çalışmalarımızla, hizmet kalitemizi her geçen gün daha da yükseltiyoruz.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl h-full">
                <div className="mb-5 rounded-full bg-teal-100 dark:bg-teal-900/30 p-3 w-12 h-12 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-teal-700 dark:text-teal-400" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Sosyal Sorumluluk</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Topluma ve çevreye karşı sorumluluğumuzun bilincindeyiz. Sürdürülebilir iş uygulamaları ve sosyal sorumluluk projeleriyle, yaşadığımız topluma değer katmayı amaçlıyoruz.
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="mt-16 text-center">
            <Button 
              href="/kurumsal/vizyonumuz" 
              variant="primary"
              size="lg"
              iconPosition="right"
              icon={<ChevronRight />}
            >
              Vizyon ve Misyonumuzu Keşfedin
            </Button>
          </div>
        </div>
      </section>
      
      {/* İletişim CTA */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Karakucak Group ile İşbirliği Yapalım</h2>
            <p className="text-xl mb-8 text-blue-100">
              25 yıllık tecrübemiz ve uzman ekibimizle projelerinizde yanınızdayız. 
              Daha detaylı bilgi için bizimle iletişime geçin.  
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                href="/iletisim" 
                variant="white"
                size="lg"
                iconPosition="right"
                icon={<ChevronRight />}
              >
                İletişime Geçin
              </Button>
              <Button 
                href="/projelerimiz" 
                variant="outline"
                size="lg"
              >
                Projelerimizi İnceleyin
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
