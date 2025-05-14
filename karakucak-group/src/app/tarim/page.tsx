"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TarimPage() {
  return (
    <div className="pt-16">
      <section className="bg-emerald-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Tarım</h1>
          <p className="text-xl">
            Modern tarım teknolojileri ve sürdürülebilir uygulamalarla tarımsal üretimde
            verimliliği artırıyoruz.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Tarımsal Faaliyetlerimiz</h2>
          <p className="mb-6">
            Karakucak Group olarak, modern tarım teknolojilerini kullanarak toprak, su ve
            enerji kaynaklarını en verimli şekilde değerlendiriyoruz. Sürdürülebilir tarım
            uygulamalarıyla çevresel etkiyi en aza indirirken, yüksek verimli ve kaliteli
            tarımsal üretim gerçekleştiriyoruz.
          </p>
          
          <div className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3"
              alt="Tarımsal Alanlarımız"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Sürdürülebilir Tarım Yaklaşımımız</h2>
          <p className="mb-6">
            İklim değişikliğinin tarım üzerindeki etkilerini göz önünde bulundurarak, su tasarrufu
            sağlayan damlama sulama sistemleri, hassas tarım teknolojileri ve biyolojik mücadele
            yöntemleri kullanıyoruz. Toprak sağlığını korumak ve iyileştirmek için organik tarım
            yöntemlerini de uyguluyor, kimyasal kullanımını minimum seviyede tutuyoruz.
          </p>

          <div className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3"
              alt="Sürdürülebilir Tarım Uygulamaları"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Teknolojik Çözümlerimiz</h2>
          <p className="mb-8">
            Tarımsal üretimde verimliliği artırmak için en son teknolojik yenilikleri kullanıyoruz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1585644156283-af8ad4018eb1?ixlib=rb-4.0.3"
                  alt="Hassas Tarım Teknolojileri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Hassas Tarım Teknolojileri
                </h3>
                <p className="mb-4">
                  Uydu görüntüleri, sensörler ve drone teknolojileri ile tarımsal alanların sürekli izlenmesi ve hassas müdahaleler yapılması.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1578594640334-b15bae5d5b91?ixlib=rb-4.0.3"
                  alt="Akıllı Sulama Sistemleri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Akıllı Sulama Sistemleri
                </h3>
                <p className="mb-4">
                  Toprak nem seviyelerini sürekli izleyen ve sadece gerektiğinde, gerektiği kadar sulama yapan akıllı sistemlerle su tasarrufu sağlıyoruz.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1589923188651-268a9765e432?ixlib=rb-4.0.3"
                  alt="Organik Tarım"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Organik Tarım
                </h3>
                <p className="mb-4">
                  Kimyasal girdileri minimize eden, toprağın doğal yapısını ve biyolojik çeşitliliği koruyan sürdürülebilir tarım yöntemleri uyguluyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Tarımsal Çözümler İçin Yanınızdayız</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Modern tarım uygulamaları ve teknolojileri ile ilgili danışmanlık hizmetlerimiz
            veya işbirliği fırsatları için bizimle iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-white text-emerald-800 font-medium px-6 py-3 rounded-lg hover:bg-emerald-50 transition-colors"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </div>
  );
}
