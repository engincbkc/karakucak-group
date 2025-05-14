"use client";

import React from "react";
import Image from "next/image";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";

const executives = [
  {
    name: "Ahmet Karakucak",
    position: "Yönetim Kurulu Başkanı",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
    bio: "25 yılı aşkın iş deneyimi ile Ahmet Karakucak, grubun kurucusu ve vizyoneridir. Otomotiv ve madencilik sektöründeki yatırımlarla başlayan kariyeri, tekstil ve mimarlık alanındaki girişimlerle genişlemiştir."
  },
  {
    name: "Ayşe Karakucak",
    position: "Başkan Yardımcısı",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
    bio: "Tekstil sektöründe uzmanlaşmış olan Ayşe Karakucak, grubun pamuk ve tekstil bölümünün gelişiminde önemli rol oynamıştır. Sürdürülebilir üretim ve yenilikçi tasarım konularında liderlik etmektedir."
  },
  {
    name: "Mehmet Yılmaz",
    position: "CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
    bio: "20 yıllık yönetim deneyimi ile Mehmet Yılmaz, grubun tüm faaliyetlerini yönetmekte ve stratejik büyümeyi sağlamaktadır. Öncü liderlik yaklaşımı ve vizyon sahibi perspektifi ile şirketi geleceğe taşımaktadır."
  },
  {
    name: "Ali Kaya",
    position: "MNK Mimarlık Direktörü",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3",
    bio: "Ödüllü mimar Ali Kaya, MNK Mimarlık bölümünün kurucusudur. Sürdürülebilir ve yenilikçi mimari tasarımlarıyla tanınmaktadır."
  },
  {
    name: "Fatma Demir",
    position: "Finans Direktu00f6ru00fc",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3",
    bio: "Uluslararasu0131 finans yu00f6netimi konusunda uzmanlaşmu0131u015f olan Fatma Demir, grubun finansal stratejilerini yu00f6netmekte ve su00fcrdu00fcru00fclebilir bu00fcyu00fcmeyi sağlamaktadu0131r."
  },
  {
    name: "Zeynep Toprak",
    position: "AR-GE Direktu00f6ru00fc",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3",
    bio: "Yeniliku00e7i teknolojiler ve su00fcrdu00fcru00fclebilir u00e7u00f6zu00fcmler konusunda uzmanlaşmu0131u015f olan Zeynep Toprak, grubun tu00fcm sektu00f6rlerindeki arau015ftu0131rma ve geliu015ftirme faaliyetlerini yu00f6netmektedir."
  },
  {
    name: "Mustafa Yazar",
    position: "Otomotiv Bu00f6lu00fcm Bau015fkanu0131",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3",
    bio: "Otomotiv sektu00f6ru00fcnde 18 yu0131llu0131k deneyime sahip olan Mustafa Yazar, grubun otomotiv faaliyetlerini yu00f6netmekte ve yeni teknolojilerin entegrasyonunda u00f6ncu00fclu00fck etmektedir."
  },
  {
    name: "Aylin Koru",
    position: "İnsan Kaynakları Direktu00f6ru00fc",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3",
    bio: "İnsan kaynakları ve organizasyonel geliu015fim konularında uzmanlaşmu0131u015f olan Aylin Koru, yetenek yu00f6netimi ve kurumsal ku00fcltu00fcr stratejileriyle, grubun insan sermayesini gu00fcu00e7lendirmektedir."
  },
  {
    name: "Kemal Aksoy",
    position: "Madencilik Bu00f6lu00fcm Bau015fkanu0131",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3",
    bio: "Maden mu00fchendisliu011fi alanında uzman olan Kemal Aksoy, grubun madencilik operasyonlarını yu00f6netmekte ve su00fcrdu00fcru00fclebilir madencilik uygulamalarını hayata geu00e7irmektedir."
  }
];

export default function YonetimPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3"
            alt="Yu00f6netim Ekibimiz"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Yu00f6netim Kadromuz</h1>
            <p className="text-xl mb-8">
              Karakucak Group'un bau015faru0131su0131nu0131n arkasu0131ndaki deneyimli liderlik ekibimizle tanu0131u015fu0131n. 
              Vizyoner yaklau015fu0131mlaru0131 ve derin sektu00f6r bilgileriyle u015firketimizi geleceu011fe tau015fu0131yorlar.
            </p>
          </div>
        </div>
      </section>

      {/* Yu00f6netim Ekibi */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((executive, index) => (
              <motion.div 
                key={executive.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="relative h-72">
                  <Image
                    src={executive.image}
                    alt={executive.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{executive.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{executive.position}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{executive.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Organizasyon Yapu0131mu0131z */}
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
              Organizasyon Yapu0131mu0131z
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Karakucak Group, her biri alaında uzman profesyonellerden oluu015fan gu00fcu00e7lu00fc bir organizasyon 
              yapu0131su0131yla faaliyet gu00f6stermektedir.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="flex flex-col items-center">
              <div className="bg-blue-600 text-white p-4 rounded-lg text-center mb-4 w-64">
                <h3 className="text-lg font-bold">Yu00f6netim Kurulu</h3>
              </div>
              
              <div className="w-1 h-8 bg-gray-300 dark:bg-gray-600"></div>
              
              <div className="bg-blue-500 text-white p-4 rounded-lg text-center mb-4 w-56">
                <h3 className="text-lg font-bold">CEO</h3>
              </div>
              
              <div className="w-1 h-8 bg-gray-300 dark:bg-gray-600"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
                <div className="flex flex-col items-center">
                  <div className="bg-green-500 text-white p-3 rounded-lg text-center mb-4 w-full">
                    <h3 className="text-md font-medium">Finans</h3>
                  </div>
                  
                  <div className="w-1 h-6 bg-gray-300 dark:bg-gray-600"></div>
                  
                  <div className="grid grid-cols-1 gap-2 w-full">
                    <div className="bg-green-400 text-white p-2 rounded-lg text-center text-sm">Muhasebe</div>
                    <div className="bg-green-400 text-white p-2 rounded-lg text-center text-sm">Yatu0131ru0131mcu0131 İliu015fkileri</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-purple-500 text-white p-3 rounded-lg text-center mb-4 w-full">
                    <h3 className="text-md font-medium">Operasyonlar</h3>
                  </div>
                  
                  <div className="w-1 h-6 bg-gray-300 dark:bg-gray-600"></div>
                  
                  <div className="grid grid-cols-1 gap-2 w-full">
                    <div className="bg-purple-400 text-white p-2 rounded-lg text-center text-sm">Otomotiv</div>
                    <div className="bg-purple-400 text-white p-2 rounded-lg text-center text-sm">Madencilik</div>
                    <div className="bg-purple-400 text-white p-2 rounded-lg text-center text-sm">Tekstil</div>
                    <div className="bg-purple-400 text-white p-2 rounded-lg text-center text-sm">Mimarlu0131k</div>
                  </div>
                </div>
                
                <div className="flex flex-col items-center">
                  <div className="bg-yellow-500 text-white p-3 rounded-lg text-center mb-4 w-full">
                    <h3 className="text-md font-medium">Destek Birimleri</h3>
                  </div>
                  
                  <div className="w-1 h-6 bg-gray-300 dark:bg-gray-600"></div>
                  
                  <div className="grid grid-cols-1 gap-2 w-full">
                    <div className="bg-yellow-400 text-white p-2 rounded-lg text-center text-sm">İnsan Kaynakları</div>
                    <div className="bg-yellow-400 text-white p-2 rounded-lg text-center text-sm">AR-GE</div>
                    <div className="bg-yellow-400 text-white p-2 rounded-lg text-center text-sm">Hukuk</div>
                    <div className="bg-yellow-400 text-white p-2 rounded-lg text-center text-sm">Bilgi Teknolojileri</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kariyer Fırsatları */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6">Kariyer Fu0131rsatlaru0131</h2>
              <p className="text-lg mb-6">
                Karakucak Group, yetenekli profesyonellere geliu015fme ve kariyer fu0131rsatlaru0131 sunmaktadu0131r. 
                Dinamik, yeniliku00e7i ve u00e7eu015fitliliu011fe deu011fer veren bir ortamda, geleceğin liderlerini 
                yetiu015ftiriyoruz.
              </p>
              <ul className="list-disc pl-6 mb-6">
                <li className="mb-2">Profesyonel geliu015fim ve eu011fitim programları</li>
                <li className="mb-2">Uluslararasu0131 kariyer fu0131rsatlaru0131</li>
                <li className="mb-2">Yeniliku00e7i projeler ve teknolojiler</li>
                <li>Gu00fcu00e7lu00fc takım kültürü ve deu011ferler</li>
              </ul>
              <button className="px-6 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Açık Pozisyonlar
              </button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <Image 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3" 
                alt="Karakucak Group Çalu0131u015fanları"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
