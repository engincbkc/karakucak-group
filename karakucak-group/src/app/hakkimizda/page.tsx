"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
// Using named imports instead of general import to avoid "export *" error
import { motion } from "framer-motion";

export default function HakkimizdaPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
            alt="Karakucak Group Headquarters"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Hakku0131mu0131zda</h1>
            <p className="text-xl mb-8">
              Otomotiv, madencilik, pamuk, tekstil ve mimarlu0131k sektu00f6rlerinde 25 yu0131lu0131 au015fku0131n deneyimle, 
              yeniliku00e7i ve su00fcrdu00fcru00fclebilir u00e7u00f6zu00fcmler sunuyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Hikayemiz */}
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
                Hikayemiz
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Karakucak Group'un başarı hikayesi, kurucumuz Said Karakucak'ın tarafu0131ndan, otomotiv paru00e7alaru0131 u00fcretimi ile 
                faaliyete bau015fladu0131. Yu0131llar iu00e7inde su00fcrekli bu00fcyu00fcyen ve geliu015fen u015firketimiz, otomotiv sektu00f6ru00fcndeki 
                bau015faru0131larla gu00fcu00e7lenerek, madencilik alanu0131na yatu0131ru0131m yaptu0131.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                2005 yu0131lu0131nda pamuk ve tekstil sektu00f6ru00fcne giriu015f yapan grubumuz, 2010 yu0131lu0131nda MNK Mimarlu0131k'u0131 
                kurarak, kapsamlu0131 bir u015firketler topluluu011fu haline geldi. Bugu00fcn, u00fcu00e7 ku0131tada faaliyetlerimizi 
                su00fcrdu00fcru00fcyor ve 2500'den fazla u00e7alu0131u015fanu0131mu0131zla mu00fcu015fterilerimize yu00fcksek kaliteli u00fcru00fcn ve 
                hizmetler sunuyoruz.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Karakucak Group olarak, yeniliku00e7i ve su00fcrdu00fcru00fclebilir iu015f modellerimizle sektu00f6rlerimizde 
                grubu olma yolunda emin adımlarla ilerliyoruz.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3" 
                alt="Kurucumuz Said Bey'in vizyonu"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Deu011ferlerimiz */}
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
              Deu011ferlerimiz
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Karakucak Group olarak, tu00fcm faaliyetlerimizde bizi yu00f6nlendiren temel deu011ferlerimiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            >
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Gu00fcvenilirlik</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Mu00fcu015fterilerimize, u00e7alu0131u015fanlaru0131mu0131za ve iu015f ortaklaru0131mu0131za karu015fu0131 du00fcru00fcst ve u015feffaf olmayu0131 
                taahhut ediyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            >
              <div className="h-14 w-14 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Su00fcrdu00fcru00fclebilirlik</h3>
              <p className="text-gray-600 dark:text-gray-300">
                1998'den günümüze kadar sürdürdüğümüz kalite anlayışımız, güven ve yenilikçilikle, Türkiye'nin lider şirketlercek nesillere daha iyi 
                bir du00fcnya bu0131rakmayu0131 hedefliyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            >
              <div className="h-14 w-14 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Yenilik</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Su00fcrekli geliu015fim ve inovasyon ile sektu00f6rlerimizde u00f6ncu00fc rolumuz ve rekabet gu00fccu00fcmuz
                artu0131ru0131yoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            >
              <div className="h-14 w-14 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600 dark:text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Ekip u00c7alu0131u015fmasu0131</h3>
              <p className="text-gray-600 dark:text-gray-300">
                u00c7eu015fitliliu011fe deu011fer vererek, iu015fbirliu011fi ve dayanau015fma ile ortak hedeflerimize ulau015fmayu0131 
                amu00e7lu0131yoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Misyon ve Vizyon */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Misyonumuz</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Karakucak Group olarak misyonumuz, faaliyet gu00f6sterdiu011fimiz tu00fcm sektu00f6rlerde yu00fcksek kaliteli 
                u00fcru00fcn ve hizmetler sunarak, mu00fcu015fterşirketimizin temel değerleri'ni au015fmak ve du00fcrustlukten 
                u00f6du00fcn vermeden su00fcrdu00fcru00fclebilir bir gelecek inu015fa etmektir.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                u00c7alu0131u015fanlaru0131mu0131za deu011fer vererek, topluma ve u00e7evreye karu015fu0131 sorumlu bir u015fekilde hareket 
                ederek, ekonomik kalkynmaya katku0131da bulunmayu0131 hedefliyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Vizyonumuz</h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                Vizyonumuz, otomotiv, madencilik, tekstil ve mimarlu0131k sektu00f6rlerinde global u00f6lu00e7ekte 
                u00f6ncu00fc ve yu00f6n veren bir kuruluu015f olmaktu0131r. Yeniliku00e7i u00e7u00f6zu00fcmler ve su00fcrdu00fcru00fclebilir 
                iu015f modelleriyle, sektu00f6rlerimize u00f6ncu00fclu00fck etmeyi hedefliyoruz.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Mu00fcu015fteri memnuniyetini merkeze alan, u00e7evre dostu uygulamalar ve sosyal sorumluluk 
                projeleriyle, gelecek nesillere daha iyi bir du00fcnya bu0131rakmak iu00e7in u00e7alu0131u015fu0131yoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rakamlarla Biz */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Rakamlarla Karakucak Group</h2>
            <p className="text-lg max-w-3xl mx-auto">
              25 yu0131l boyunca bu00fcyu00fcmeye ve geliu015fmeye devam eden Karakucak Group'un bau015faru0131 hikayesi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-3">1995</div>
              <p className="text-xl font-medium">Kuruluu015f Yu0131lu0131</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-3">12</div>
              <p className="text-xl font-medium">u015eirket</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-3">8</div>
              <p className="text-xl font-medium">u00dclke</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-3">2500+</div>
              <p className="text-xl font-medium">u00c7alu0131u015fan</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Yu00f6netim Kadrosu */}
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
              Yu00f6netim Kadromuz
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Vizyoner liderliu011fiyle Karakucak Group'u geleceu011fe tau015fu0131yan deneyimli yu00f6netim ekibimiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/yonetim" className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-72">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3"
                    alt="Ahmet Karakucak"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ahmet Karakucak</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Yu00f6netim Kurulu Bau015fkanu0131</p>
                </div>
              </motion.div>
            </Link>

            <Link href="/yonetim" className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-72">
                  <Image
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3"
                    alt="Ayu015fe Karakucak"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Ayu015fe Karakucak</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">Bau015fkan Yardu0131mcu0131su0131</p>
                </div>
              </motion.div>
            </Link>

            <Link href="/yonetim" className="block">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-72">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3"
                    alt="Mehmet Yu0131lmaz"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mehmet Yu0131lmaz</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">CEO</p>
                </div>
              </motion.div>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link 
              href="/yonetim" 
              className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Tu00fcm Ekibi Tau015fu0131yu0131n
            </Link>
          </div>
        </div>
      </section>

      {/* u0130letiu015fim CTA */}
      <section className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Birllikte u00c7alu0131u015falu0131m</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Karakucak Group'un yu0131llaru0131n deneyimi ve uzmanlu0131u011fu0131yla projelerinizi hayata geu00e7irmek 
              iu00e7in bizimle iletiu015fime geu00e7in.
            </p>
            <Link 
              href="/iletisim" 
              className="inline-block bg-white text-blue-900 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              u0130letiu015fime Geu00e7in
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
