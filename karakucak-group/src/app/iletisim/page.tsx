"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

export default function IletisimPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 z-0">
          {/* Decorative elements */}
          <div className="absolute top-0 -right-20 w-96 h-96 bg-blue-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-indigo-700/20 rounded-full filter blur-3xl"></div>
          
          {/* Background image with enhanced parallax */}
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.05, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 0.3 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          >
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3"
              alt="İletişim"
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
              quality={90}
            />
          </motion.div>
          
          {/* Subtle overlay patterns */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-40"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-5 sm:px-10 py-28 md:py-36">
          {/* Hero Content */}
          <motion.div
            className="max-w-3xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tag/badge */}
            <div className="inline-block px-4 py-1 mb-6 bg-blue-700/30 backdrop-blur-sm rounded-full border border-blue-500/20">
              <span className="text-sm font-medium text-blue-200">Bizimle İletişime Geçin</span>
            </div>
            
            {/* Main title with gradient */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
                İletişim
              </span>
            </h1>
            
            {/* Subtitle with optimized typography */}
            <p className="text-lg md:text-xl mb-8 text-blue-50/90 max-w-2xl leading-relaxed">
              Sorularınız, önerileriniz veya işbirliği fırsatları için{" "}
              <span className="text-blue-300 font-semibold">Karakucak Group</span> ile iletişime geçin.
              Size en kısa sürede dönüş yapacağız.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Button
                href="#iletisim-bilgileri"
                variant="primary"
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 border-blue-700/50 shadow-lg shadow-blue-700/20"
              >
                Hemen İletişime Geçin
              </Button>
              <Button
                href="/hakkimizda"
                variant="outline"
                size="lg"
                className="border-white/20 backdrop-blur-sm hover:bg-white/10"
              >
                Hakkımızda Daha Fazla Bilgi Alın
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* İletişim Bilgileri ve Form */}
      <section id="iletisim-bilgileri" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Bize Ulaşın"
            subtitle="Aşağıdaki bilgileri kullanarak bize ulaşabilir veya iletişim formunu doldurarak mesajınızı gönderebilirsiniz. En kısa sürede sizinle iletişime geçeceğiz."
            alignment="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 xl:gap-16">
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-6 flex items-start">
                  <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Merkez Ofis</h3>
                    <p className="text-gray-600 dark:text-gray-300">Atakent Mahallesi, 6052. Sokak NO:1 Karaköprü/Şanlıurfa</p>
                  </div>
                </div>

                <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-6 flex items-start">
                  <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Telefon</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="tel:+908502816311" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">0850 281 63 11</a>
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-6 flex items-start">
                  <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">E-posta</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="mailto:info@karakucakgroup.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">info@karakucakgroup.com</a>
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      <a href="mailto:satis@karakucakgroup.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">satis@karakucakgroup.com</a>
                    </p>
                  </div>
                </div>


              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">İletişim Formu</h3>
                <form className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        E-posta Adresiniz
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                        placeholder="E-posta adresiniz"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Konu
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Mesajınızın konusu"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Mesajınız
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Mesajınızı buraya yazın..."
                    ></textarea>
                  </div>

                  <div>
                    <Button type="submit" className="w-full sm:w-auto">
                      Mesajı Gönder
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Harita Bölümü */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Bize Nasıl Ulaşabilirsiniz?"
            subtitle="Aşağıdaki haritayı kullanarak ofisimize kolayca ulaşabilirsiniz. Ziyaret öncesinde randevu almanızı öneririz."
            alignment="center"
            className="mb-16"
          />
          
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] md:h-[500px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.6504900105844!2d29.10011661087428!3d40.99333142012033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac7891defb571%3A0xc2f1e099d5f8727c!2sBattery%20Plaza!5e0!3m2!1str!2str!4v1715711222932!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      
      
      
    
    </div>
  );
}
