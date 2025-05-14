"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PamukSanayiPage() {
  return (
    <div className="pt-16">
      <section className="bg-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Pamuk Sanayi</h1>
          <p className="text-xl">
            Sürdürülebilir pamuk üretimi ve işleme teknolojilerimizle tekstil sektörüne
            değer katıyoruz.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Pamuk Üretimindeki Uzmanlığımız</h2>
          <p className="mb-6">
            Karakucak Group olarak, pamuk sektöründe uzun yıllara dayanan deneyimimizle,
            kaliteli pamuk üretiminden modern tekstil ürünlerine kadar uzanan entegre bir
            değer zinciri sunuyoruz. Çevreye duyarlı üretim teknikleri ve yenilikçi yaklaşımlarla
            sektörün geleceğini şekillendiriyoruz.
          </p>
          
          <div className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1605187337001-2356749647e2?ixlib=rb-4.0.3"
              alt="Pamuk Üretim Tesisimiz"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Sürdürülebilir Tekstil Çözümlerimiz</h2>
          <p className="mb-6">
            Modern ve çevre dostu pamuk işleme teknolojilerimizle, doğa ile uyumlu bir
            şekilde üretim yapıyor, su tüketimini azaltan ve kimyasal kullanımını minimize eden
            süreçler uyguluyoruz. Organik pamuk üretimi konusunda da öncü çalışmalar yürütüyoruz.
          </p>

          <div className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1626099216068-626122d11b42?ixlib=rb-4.0.3"
              alt="Sürdürülebilir Tekstil Üretimi"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Üretim Sürecimiz</h2>
          <p className="mb-8">
            Pamuğun tarladan nihai ürüne dönüşme sürecinde kaliteden ödün vermeden,
            en modern teknolojilerle çalışıyoruz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1536257104579-da83b1de689f?ixlib=rb-4.0.3"
                  alt="Pamuk Hasadı"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Sürdürülebilir Tarım
                </h3>
                <p className="mb-4">
                  Su tasarrufu sağlayan damlama sulama sistemleri ve organik tarım teknikleriyle pamuk yetiştiriciliği yapıyoruz.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1558304970-ffdd2a989735?ixlib=rb-4.0.3"
                  alt="Pamuk İşleme"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Modern İşleme Tesisleri
                </h3>
                <p className="mb-4">
                  İleri teknoloji pamuk işleme tesislerimizde, hammaddeden ipliğe kadar tüm süreçleri en yüksek kalitede gerçekleştiriyoruz.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1618220179428-22790b485390?ixlib=rb-4.0.3"
                  alt="Tekstil u00dcretimi"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Entegre Tekstil Üretimi
                </h3>
                <p className="mb-4">
                  Pamuktan ipliğe, iplikten kumaşa ve nihai tekstil ürünlerine kadar entegre bir üretim zinciri ile müşterilerimize kaliteli çözümler sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-green-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Tekstil İhtiyaçlarınız İçin Yanınızdayız</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Pamuk ve tekstil sektöründeki uzmanlığımızla, işletmenizin ihtiyaçlarına
            özel çözümler sunmak için hazırız. Detaylı bilgi için bizimle iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-white text-green-800 font-medium px-6 py-3 rounded-lg hover:bg-green-50 transition-colors"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </div>
  );
}
