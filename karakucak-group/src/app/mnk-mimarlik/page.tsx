"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MnkMimarlikPage() {
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

      {/* Öne Çıkan Projeler */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Öne Çıkan Projelerimiz
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              MNK Mimarlık'ın imzasını taşıyan yenilikçi ve ödüllü projelerimizden bazıları
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Proje 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
            >
              <div className="relative h-72">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3"
                  alt="Eco Tower Office Complex"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Eco Tower Office Complex</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  İstanbul'da LEED Platinum sertifikalı, sürdürülebilir ofis kompleksi. Yenilenebilir enerji 
                  kaynakları, yağmur suyu hasadı ve doğal aydınlatma ile %60 enerji tasarrufu sağlıyor.
                </p>
                <div className="mt-auto">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">Ödüllü Proje</span>
                  <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">LEED Platinum</span>
                </div>
              </div>
            </motion.div>

            {/* Proje 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg flex flex-col h-full"
            >
              <div className="relative h-72">
                <Image
                  src="https://images.unsplash.com/photo-1613685703305-fba7a6181d86?ixlib=rb-4.0.3"
                  alt="Seaside Residential Complex"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Seaside Residential Complex</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  İzmir'de doğayla bütünleşen modern konut kompleksi. Çağdaş tasarımı ve akıllı ev 
                  teknolojileriyle, konforlu ve sürdürülebilir bir yaşam alanı sunuyor.
                </p>
                <div className="mt-auto">
                  <span className="inline-block bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">Modern Yaşam</span>
                  <span className="inline-block bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">Akıllı Ev</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-10">
            <Link 
              href="/projeler" 
              className="px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              Tüm Projeleri Görüntüle
            </Link>
          </div>
        </div>
      </section>

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

      {/* u0130letiu015fim CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Projenizi Hayata Geu00e7irelim</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Mimari ihtiyau00e7laru0131nu0131z iu00e7in MNK Mimarlu0131k'in uzman ekibiyle tanu0131u015fu0131n. 
              Projenizin her au015famasu0131nda yanu0131nu0131zda olacak u00e7u00f6zu00fcm ortau011fu0131nu0131z.
            </p>
            <Link 
              href="/iletisim" 
              className="inline-block bg-white text-gray-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              u0130letiu015fime Geu00e7in
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
