"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InsaatTaahhutPage() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3"
            alt="İnşaat Arkaplan"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">İnşaat & Taahhüt</h1>
            <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
            <p className="text-xl leading-relaxed">
              Modern mimari anlayışımız ve yüksek mühendislik standartlarımızla
              inşaat sektöründe güvenilir çözümler sunuyoruz. Vizyoner yaklaşımımızla
              yapıların geleceğini şekillendiriyoruz.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <a href="#hizmetler" className="px-8 py-3 bg-yellow-500 text-gray-900 font-medium rounded-lg hover:bg-yellow-400 transition-colors transform hover:scale-105 shadow-lg">
                Hizmetlerimiz
              </a>
              <a href="#yaklasım" className="px-8 py-3 border-2 border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors">
                Yaklaşımımız
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="hizmetler" className="py-24 bg-white" data-aos="fade-up">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-3">İnşaat ve Taahhüt Hizmetlerimiz</h2>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Karakucak Group olarak, sürdürülebilir ve yenilikçi mimari tasarımlarla
                çevresel, ekonomik ve sosyal değer yaratan projeler geliştiriyoruz.
                Konut, ticari yapılar, kültür merkezleri ve daha birçok alanda uzmanlaşmış hizmet sunuyoruz.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-yellow-500 rounded-full p-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-medium">Konut Projeleri</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-yellow-500 rounded-full p-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1h-10a1 1 0 01-1-1V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2H4v-1h16v1h-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-medium">Ticari Yapılar</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-yellow-500 rounded-full p-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-medium">Endüstriyel Tesisler</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 bg-yellow-500 rounded-full p-1">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                    </svg>
                  </div>
                  <p className="text-gray-800 font-medium">Kültür Merkezleri</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-5/12"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl" style={{ height: '440px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3"
                  alt="İnşaat Projemiz"
                  fill
                  className="object-cover transform hover:scale-110 transition-transform duration-700"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="yaklasım" className="py-24 bg-gradient-to-r from-gray-100 to-gray-200 overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-3">Mimari Yaklaşımımız</h2>
              <div className="w-20 h-1 bg-yellow-500 mb-6"></div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Sürdürülebilirlik odaklı tasarım anlayışımızla, doğal çevre ile uyumlu,
                enerji verimli ve kullanıcı dostu yapılar tasarıyoruz. Her projemizde
                modern teknolojileri kullanarak, estetik ve fonksiyonelliği bir araya getiriyoruz.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-lg p-5 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="bg-yellow-500 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                      </svg>
                    </span>
                    Sürdürülebilir Tasarım
                  </h3>
                  <p className="text-gray-600 pl-11">Çevre dostu malzemeler ve enerji tasarruflu sistemlerle yapılarımızın ekolojik ayak izini azaltıyoruz.</p>
                </div>
                
                <div className="bg-white rounded-lg p-5 shadow-md transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-2 flex items-center">
                    <span className="bg-yellow-500 h-8 w-8 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                    </span>
                    Teknolojik Entegrasyon
                  </h3>
                  <p className="text-gray-600 pl-11">Akıllı bina sistemleri ve ileri teknolojilerle konforlu, güvenli ve verimli yapılar tasarlıyoruz.</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-5/12"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl" style={{ height: '500px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3"
                  alt="Mimari Tasarım"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                  <p className="text-yellow-400 text-sm font-semibold mb-2">MODERN YAKLAŞIM</p>
                  <h3 className="text-white text-2xl font-bold mb-2">Çağdaş ve Fonksiyonel</h3>
                  <p className="text-white/90">Estetik tasarım ve fonksiyonellik bir arada</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-slate-900 to-gray-800 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3"
            alt="Mimari Tasarım Arkaplan"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 text-left"
            >
              <h2 className="text-4xl font-bold mb-6 inline-block border-b-4 border-yellow-500 pb-2">MNK Mimarlık</h2>
              <p className="text-lg mb-6">
                Karakucak Group bünyesinde hizmet veren <strong>MNK Mimarlık</strong>, yaratıcı ve yenilikçi mimari tasarım yaklaşımıyla
                modern yapılar inşa etmektedir. Sürdürülebilirlik, estetik ve fonksiyonelliği bir araya getiren tasarım felsefemizle,
                her projeye özgün çözümler sunuyoruz.
              </p>
              <p className="text-lg mb-8">
                Konut projelerinden ticari yapılara, kültürel merkezlerden karma kullanımlı yapılara kadar geniş bir yelpazede
                uzmanlaşmış mimari hizmetler sunan ekibimiz, müşterilerimizin beklentilerini aşan projeler tasarlıyor.
              </p>
              <Link 
                href="/mnk-mimarlik" 
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>MNK Mimarlık'ı Keşfedin</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-5/12"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500"
                style={{ height: '500px' }}>
                <Image
                  src="https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3"
                  alt="MNK Mimarlık Projesi"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <p className="text-yellow-400 text-sm font-semibold mb-2">Ödüllü Proje</p>
                  <h3 className="text-white text-2xl font-bold mb-2">Modern Mimari Yaklaşım</h3>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Öne Çıkan Projelerimiz</h2>
          <p className="mb-8">
            İnşaat ve taahhüt alanında gerçekleştirdiğimiz prestijli projelerimizden
            bazılarını inceleyebilirsiniz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3"
                  alt="Eco Tower Office Complex"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Eco Tower Office Complex
                </h3>
                <p className="mb-4">
                  İstanbul'da LEED Platinum sertifikalı, sürdürülebilir ofis kompleksi. Yenilenebilir enerji sistemleri ile %60 enerji tasarrufu sağlıyor.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1613685703305-fba7a6181d86?ixlib=rb-4.0.3"
                  alt="Seaside Residential Complex"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Seaside Residential Complex
                </h3>
                <p className="mb-4">
                  İzmir'de doğayla bütünleşen modern konut kompleksi. Çağdaş tasarımı ve akıllı ev teknolojileriyle konforlu bir yaşam sunuyor.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3"
                  alt="Green Campus Üniversitesi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Green Campus Üniversitesi
                </h3>
                <p className="mb-4">
                  Antalya'da sürdürülebilir prensipler üzerine inşa edilmiş modern eğitim kampüsü. Yeşil çatılar ve güneş panelleriyle bütünleşik bir eko-sistem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-4">MNK Mimarlık ile İşbirliği</h2>
              <p className="text-gray-700 mb-6">
                İnşaat ve taahhüt projelerinizde, MNK Mimarlık ekibimizle güçlü bir işbirliği yaparak, konsept tasarımdan uygulama projelerine, 
                iç mekân tasarımından peyzaj düzenlemelerine kadar bütünsel çözümler sunuyoruz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Yenilikçi mimari tasarımlar</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Sürdürülebilir yapı projeleri</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Ödüllü tasarım ekibi</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Bütünsel yapı çözümleri</p>
                </div>
              </div>
              <Link
                href="/mnk-mimarlik"
                className="inline-block bg-gradient-to-r from-gray-800 to-gray-700 text-white font-medium px-6 py-3 rounded-lg hover:from-gray-700 hover:to-gray-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1"
              >
                MNK Mimarlık Projelerini İnceleyin
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:w-5/12 mt-10 md:mt-0"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="relative rounded-lg overflow-hidden h-48 transform hover:scale-105 transition-transform duration-300 shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1545580181-7f3baa0b7a9c?ixlib=rb-4.0.3"
                    alt="MNK Mimarlık İç Mekan Tasarımı"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden h-48 transform hover:scale-105 transition-transform duration-300 shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1515263487990-61b07816b324?ixlib=rb-4.0.3"
                    alt="MNK Mimarlık Modern Yapı"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden h-48 transform hover:scale-105 transition-transform duration-300 shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3"
                    alt="MNK Mimarlık Villa Projesi"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative rounded-lg overflow-hidden h-48 transform hover:scale-105 transition-transform duration-300 shadow-md">
                  <Image
                    src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3"
                    alt="MNK Mimarlık Ofis Projesi"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Projeleriniz İçin Yanınızdayız</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            İnşaat ve mimarlık alanındaki uzmanlığımızla, projenizi hayata geçirmek için
            hazırız. Detaylı bilgi ve danışmanlık için bizimle iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/iletisim"
              className="inline-block bg-white text-gray-800 font-medium px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors w-full sm:w-auto"
            >
              İletişime Geçin
            </Link>
            <Link
              href="/mnk-mimarlik"
              className="inline-block bg-transparent border-2 border-white text-white font-medium px-6 py-3 rounded-lg hover:bg-white/10 transition-colors w-full sm:w-auto"
            >
              MNK Mimarlık'ı Ziyaret Edin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
