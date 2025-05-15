"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useTheme } from "@/lib/theme-context";
import { ProjectsShowcase } from "@/components/sections/projects-showcase";

export default function MnkMimarlikPage() {
  const { isDarkTheme, themeClasses } = useTheme();
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1613564813921-310cee8ec805?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=90"
            alt="MNK Mimarlık"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MNK Mimarlık</h1>
            <p className="text-xl mb-8">
              Sürdürülebilir ve yenilikçi mimari tasarımlarla çevresel, 
              ekonomik ve sosyal değer yaratan projeler geliştiriyoruz.
            </p>
            <Link
              href="/mnk-mimarlik/projeler"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Projelerimizi Keşfedin
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              MNK Mimarlık olarak, modern ve sürdürülebilir tasarım anlayışıyla 
              müşterilerimize kapsamlı mimari hizmetler sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Hizmet 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="h-14 w-14 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Mimari Tasarım</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Konut, ticari, kurumsal ve karma kullanımlı projeler için yenilikçi ve estetik mimari 
                tasarımlar geliştiriyoruz.
              </p>
            </motion.div>

            {/* Hizmet 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">İç Mimarlık</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Fonksiyonel ve estetik iç mekanlar yaratarak, kullanıcı deneyimini ve yaşam kalitesini 
                yükseltiyoruz.
              </p>
            </motion.div>

            {/* Hizmet 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <div className="h-14 w-14 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Sürdürülebilir Tasarım</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Çevre dostu malzemeler ve enerji verimli sistemlerle, sürdürülebilir ve eko-dostu yapılar 
                tasarlıyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projeler Showcase Bileşeni */}
      <ProjectsShowcase isDarkTheme={isDarkTheme} />


      {/* Yaklaşımımız */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Tasarım Yaklaşımımız
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                MNK Mimarlık olarak, insan odaklı ve çevre dostu tasarım prensiplerini benimsiyoruz. 
                Her projeyi, kullanıcı deneyimini ön planda tutarak ve yerel bağlamı göz önünde 
                bulundurarak ele alıyoruz.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Yenilikçi teknolojiler ve malzemelerle, estetik, işlevsellik ve sürdürülebilirliği 
                bir araya getirerek, zamanın ötesinde değer yaratan yapılar tasarıyoruz.
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li className="mb-2">Kullanıcı odaklı tasarım</li>
                <li className="mb-2">Sürdürülebilir ve çevre dostu yaklaşım</li>
                <li className="mb-2">Yenilikçi ve çağdaş estetik anlayışı</li>
                <li>Yerel kültür ve bağlama saygı</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3" 
                alt="Mimarlık Ekibimiz"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Projenizi Hayata Geçirelim</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Mimari ihtiyaçlarınız için MNK Mimarlık'in uzman ekibiyle tanışın. 
              Projenizin her aşamasında yanınızda olacak çözüm ortağınız.
            </p>
            <Link 
              href="/iletisim" 
              className="inline-block bg-white text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              İletişime Geçin
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}