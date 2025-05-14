import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MnkMimarlikPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3"
            alt="MNK Mimarlu0131k"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">MNK Mimarlu0131k</h1>
            <p className="text-xl mb-8">
              Su00fcrdu00fcru00fclebilir ve yeniliku00e7i mimari tasaru0131mlarla u00e7evresel, 
              ekonomik ve sosyal deu011fer yaratan projeler geliu015ftiriyoruz.
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
              MNK Mimarlu0131k olarak, modern ve su00fcrdu00fcru00fclebilir tasaru0131m anlayu0131u015fu0131yla 
              mu00fcu015fterilerimize kapsamlu0131 mimari hizmetler sunuyoruz.
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Mimari Tasaru0131m</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Konut, ticari, kurumsal ve karma kullanu0131mlu0131 projeler iu00e7in yeniliku00e7i ve estetik mimari 
                tasaru0131mlar geliu015ftiriyoruz.
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">u0130u00e7 Mimarlu0131k</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Fonksiyonel ve estetik iu00e7 mekanlar yaratarak, kullanu0131cu0131 deneyimini ve yau015fam kalitesini 
                yu00fckseltiyoruz.
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Su00fcrdu00fcru00fclebilir Tasaru0131m</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                u00c7evre dostu malzemeler ve enerji verimli sistemlerle, su00fcrdu00fcru00fclebilir ve eko-dostu yapu0131lar 
                tasarlu0131yoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* u00d6ne u00c7u0131kan Projeler */}
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
              u00d6ne u00c7u0131kan Projelerimiz
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              MNK Mimarlu0131k'in imzasu0131nu0131 tau015fu0131yan yeniliku00e7i ve u00f6du00fcllu00fc projelerimizden bazu0131laru0131
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
                  u0130stanbul'da LEED Platinum sertifikalu0131, su00fcrdu00fcru00fclebilir ofis kompleksi. Yenilenebilir enerji 
                  kaynaklaru0131, yau011fmur suyu hasadu0131 ve dou011fal aydu0131nlatma ile %60 enerji tasarrufu sau011flu0131yor.
                </p>
                <div className="mt-auto">
                  <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">u00d6du00fcllu00fc Proje</span>
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
                  u0130zmir'de dou011fayla bu00fctu00fcnleu015fen modern konut kompleksi. u00c7au011fdau015f tasaru0131mu0131 ve aku0131llu0131 ev 
                  teknolojileriyle, konforlu ve su00fcrdu00fcru00fclebilir bir yau015fam alanu0131 sunuyor.
                </p>
                <div className="mt-auto">
                  <span className="inline-block bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">Modern Yau015fam</span>
                  <span className="inline-block bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 text-xs font-semibold px-2.5 py-0.5 rounded-full">Aku0131llu0131 Ev</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex justify-center mt-10">
            <Link 
              href="/projeler" 
              className="px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              Tu00fcm Projeleri Gu00f6ru00fcntu00fcle
            </Link>
          </div>
        </div>
      </section>

      {/* Yaklau015fu0131mu0131mu0131z */}
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
                Tasaru0131m Yaklau015fu0131mu0131mu0131z
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                MNK Mimarlu0131k olarak, insan odaklu0131 ve u00e7evre dostu tasaru0131m prensiplerini benimsiyoruz. 
                Her projeyi, kullanu0131cu0131 deneyimini u00f6n planda tutarak ve yerel bau011flamu0131 gu00f6z u00f6nu00fcnde 
                bulundurarak ele alu0131yoruz.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Yeniliku00e7i teknolojiler ve malzemelerle, estetik, iu015flevsellik ve su00fcrdu00fcru00fclebilirliu011fi 
                bir araya getirerek, zamanu0131n u00f6tesinde deu011fer yaratan yapu0131lar tasarlu0131yoruz.
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
                <li className="mb-2">Kullanu0131cu0131 odaklu0131 tasaru0131m</li>
                <li className="mb-2">Su00fcrdu00fcru00fclebilir ve u00e7evre dostu yaklau015fu0131m</li>
                <li className="mb-2">Yeniliku00e7i ve u00e7au011fdau015f estetik anlayu0131u015fu0131</li>
                <li>Yerel ku00fcltu00fcr ve bau011flama saygu0131</li>
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
                alt="Mimarlu0131k Ekibimiz"
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
