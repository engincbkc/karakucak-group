import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PamukTekstilPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-green-900 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1606914879483-62d3dda669ae?ixlib=rb-4.0.3"
            alt="Pamuk ve Tekstil"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Pamuk ve Tekstil</h1>
            <p className="text-xl mb-8">
              Tarladan mağazaya kadar uzanan entegre değer zincirimizle, 
              en kaliteli pamuk ve tekstil ürünlerini üretiyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Özet Bilgi */}
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
                Pamuk Üretiminde Sürdürülebilirlik
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Karakucak Group olarak, pamuk üretiminde sürdürülebilirlik ilkelerini benimsiyoruz. 
                Çiftçilerimizle yakın işbirliği içinde, organik ve geleneksel pamuk üretimini 
                destekleyerek, yüksek kaliteli hammadde tedarik ediyoruz.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Modern tarım teknikleri ve su tasarruflu sulama sistemleri kullanarak, çevresel etkimizi 
                minimize ederken verimlilik ve kaliteyi maksimize ediyoruz. Tüm üretim süreçlerimiz, 
                uluslararası sürdürülebilirlik standartlarına uygun olarak gerçekleştiriliyor.
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
                <li className="mb-2">Organik pamuk üretimi</li>
                <li className="mb-2">Sürdürülebilir tarım uygulamaları</li>
                <li className="mb-2">Çiftçi eğitim ve destek programları</li>
                <li className="mb-2">Su tasarruflu sulama sistemleri</li>
                <li>Uluslararası sertifikasyonlar</li>
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
                src="https://images.unsplash.com/photo-1503787684685-b828afa72216?ixlib=rb-4.0.3" 
                alt="Pamuk Tarlalarımız"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tekstil Bölümü */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 md:order-1 rounded-xl overflow-hidden shadow-lg"
            >
              <Image 
                src="https://images.unsplash.com/photo-1545150279-0d119c3b2b50?ixlib=rb-4.0.3" 
                alt="Modern Tekstil Tesisimiz"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 md:order-2"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Modern Tekstil Üretimi
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Tekstil üretiminde en son teknolojileri kullanarak, yüksek kaliteli kumaş ve giyim 
                ürünleri üretiyoruz. İplik, dokuma, boya ve terbiye süreçlerimiz, uluslararası 
                standartlarda ve çevre dostu yöntemlerle gerçekleştiriliyor.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                AR-GE bölümümüz, yenilikçi tekstil ürünleri ve üretim teknikleri geliştirerek, 
                sektördeki rekabet gücümüzü artırıyor. Üretim tesislerimiz, enerji verimliliği ve 
                atık yönetimi konularında örnek teşkil ediyor.
              </p>
              <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 mb-6">
                <li className="mb-2">Yüksek kaliteli iplik ve kumaş üretimi</li>
                <li className="mb-2">Çevre dostu boya ve terbiye işlemleri</li>
                <li className="mb-2">Katma değerli tekstil ürünleri</li>
                <li className="mb-2">Enerji verimli üretim tesisleri</li>
                <li>İleri teknoloji AR-GE çalışmaları</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ürünlerimiz */}
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
              Ürün Gruplarımız
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Pamuk ve tekstil alanında ürettiğimiz yüksek kaliteli ürün gruplarımız aşağıda listelenmiştir.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Ürün 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1555529771-7888783a18d3?ixlib=rb-4.0.3"
                  alt="Organik Pamuk Ürünleri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Organik Pamuk Ürünleri
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Sürdürülebilir tarım uygulamalarıyla üretilen, sertifikalı organik pamuk ürünleri 
                  koleksiyonumuz çevre dostu ve yüksek kaliteli bir yaşam sunuyor.
                </p>
                <Link 
                  href="/urunler/organik-pamuk"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Ürünleri İncele
                </Link>
              </div>
            </motion.div>

            {/* Ürün 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1590330297626-d7aff25a0431?ixlib=rb-4.0.3"
                  alt="Ev Tekstili"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Ev Tekstili
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Yatak çarşafları, havlular, perdeler ve diğer ev tekstil ürünleri ile yaşam alanlarınıza 
                  konfor ve şıklık katıyoruz.
                </p>
                <Link 
                  href="/urunler/ev-tekstili"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Ürünleri İncele
                </Link>
              </div>
            </motion.div>

            {/* Ürün 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1520263115673-610416f52ab6?ixlib=rb-4.0.3"
                  alt="Endüstriyel Tekstil"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Endüstriyel Tekstil
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Otomotiv, sağlık, mimari ve diğer endüstriyel alanlara yönelik teknik tekstil çözümlerimiz 
                  ile sektörlere değer katıyoruz.
                </p>
                <Link 
                  href="/urunler/endustriyel-tekstil"
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  Ürünleri İncele
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sürdürülebilirlik Taahhüdümüz */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Sürdürülebilirlik Taahhüdümüz
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Pamuk ve tekstil üretiminde çevresel ve sosyal sorumluluklarımızı önemsiyoruz.
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
              <div className="h-14 w-14 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Su Tasarrufu</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Damlama sulama sistemleri ve ileri su geri dönüşüm teknolojileri ile su ayak izimizi %40 azalttık.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            >
              <div className="h-14 w-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600 dark:text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Enerji Verimliliği</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yenilenebilir enerji kaynakları ve enerji verimli ekipmanlar kullanarak karbon ayak izimizi düşürüyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            >
              <div className="h-14 w-14 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600 dark:text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Kimyasal Azaltımı</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Organik tarım uygulamaları ve çevre dostu boya işlemleri ile kimyasal kullanımını minimize ediyoruz.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md"
            >
              <div className="h-14 w-14 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600 dark:text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Sosyal Sorumluluk</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Adil çalışma koşulları, çiftçi eğitim programları ve topluluk projeleri ile sosyal değer yaratıyoruz.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="bg-green-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Pamuk ve Tekstil Çözümlerimiz</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Yüksek kaliteli pamuk ve tekstil ürünlerimiz hakkında daha fazla bilgi edinmek veya işbirliği 
              fırsatlarını değerlendirmek için bizimle iletişime geçin.
            </p>
            <Link 
              href="/iletisim" 
              className="inline-block bg-white text-green-900 font-medium px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
            >
              İletişime Geçin
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
