"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      {/* 404 Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-40">
          <motion.div
            className="w-full h-full"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Image
              src="https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?ixlib=rb-4.0.3"
              alt="404 Sayfa Bulunamadı"
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
          </motion.div>
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-36 lg:py-44 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-9xl font-bold mb-4 tracking-tight">404</h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">Sayfa Bulunamadı</h2>
            <p className="text-xl mb-10 text-gray-100">
              Aradığınız sayfa taşınmış, kaldırılmış veya hiç var olmamış olabilir.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                href="/"
                variant="primary"
                size="lg"
              >
                <Home className="mr-2 h-5 w-5" /> Ana Sayfaya Dön
              </Button>
              <Button 
                href="/iletisim" 
                variant="outline"
                size="lg"
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> İletişime Geç
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* İletişim Bilgileri */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Bizimle İletişime Geçin</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Aradığınız sayfayı bulamasanız da bizimle her zaman iletişime geçebilirsiniz. Size yardımcı olmaktan memnuniyet duyarız.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex items-start">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Merkez Ofis</h3>
                <p className="text-gray-600 dark:text-gray-300">Şanlıurfa Karaköprü</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex items-start">
              <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Telefon</h3>
                <p className="text-gray-600 dark:text-gray-300">+90 212 123 45 67</p>
                <p className="text-gray-600 dark:text-gray-300">+90 212 987 65 43</p>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 flex items-start">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mr-4 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">E-posta</h3>
                <p className="text-gray-600 dark:text-gray-300">info@karakucakgroup.com</p>
                <p className="text-gray-600 dark:text-gray-300">satis@karakucakgroup.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-blue-700 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Hala Yardıma mı İhtiyacınız Var?</h3>
          <p className="text-lg mb-6 text-blue-100 max-w-2xl mx-auto">
            Karakucak Group sektörel uzmanlığıyla sizin için en iyi çözümleri sunmaya hazır. 
          </p>
          <Button 
            href="/iletisim"
            variant="outline"
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100"
          >
            İletişim Sayfasına Git
          </Button>
        </div>
      </section>
    </div>
  );
}
