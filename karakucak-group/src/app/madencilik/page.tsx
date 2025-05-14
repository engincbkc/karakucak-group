"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MadencilikPage() {
  return (
    <div className="pt-16">
      <section className="bg-slate-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Madencilik</h1>
          <p className="text-xl">
            Çevre dostu madencilik uygulamalarımız ve ileri teknoloji ekipmanlarımızla
            sürdürülebilir madencilik faaliyetleri yürütüyoruz.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Madencilik Sektöründeki Yaklaşımımız</h2>
          <p className="mb-6">
            Karakucak Group olarak, madencilik sektöründe çevre dostu ve sürdürülebilir
            uygulamalarla öne çıkıyoruz. Modern teknolojiler kullanarak doğal kaynakların
            verimli ve sorumlu bir şekilde çıkarılmasını sağlıyoruz. İş güvenliği ve çevresel
            etkileri minimize etmek için tüm operasyonlarımızda en yüksek standartları uyguluyoruz.
          </p>
          
          <div className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1565345270904-18a154e34e80?ixlib=rb-4.0.3"
              alt="Madencilik Operasyonlarımız"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Teknolojik Altyapımız</h2>
          <p className="mb-6">
            İleri teknoloji madencilik ekipmanları ve akıllı sistemlerle, verimliliği artırırken
            çevresel etkiyi azaltıyoruz. Yapay zeka ve IoT teknolojileri kullanarak geliştirdiğimiz
            akıllı madencilik sistemleri ile operasyonel güvenliği ve üretim kapasitesini optimize ediyoruz.
          </p>

          <div className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1605743615798-8edb5ddad298?ixlib=rb-4.0.3"
              alt="Akıllı Madencilik Sistemleri"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Madencilik Faaliyetlerimiz</h2>
          <p className="mb-8">
            Farklı madencilik alanlarında uzmanlaşmış ekiplerimizle kapsamlı çözümler sunuyoruz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1519408469771-2586093c60f1?ixlib=rb-4.0.3"
                  alt="Değerli Maden Çıkarımı"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Değerli Maden Çıkarımı
                </h3>
                <p className="mb-4">
                  Altın, gümüş ve diğer değerli madenlerin çıkarımında, minimum çevresel etki ile maksimum verimlilik sağlayacak yöntemler kullanıyoruz.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1510172951991-856a654063f9?ixlib=rb-4.0.3"
                  alt="Endüstriyel Mineraller"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Endüstriyel Mineraller
                </h3>
                <p className="mb-4">
                  Çeşitli endüstriyel kullanımlar için kritik öneme sahip minerallerin çıkarımı ve işlenmesinde uzmanlaşmış modern tesislerimiz bulunmaktadır.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1524594345772-a02f9e155e79?ixlib=rb-4.0.3"
                  alt="Yenilenebilir Enerji"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Sürdürülebilir Restorasyon
                </h3>
                <p className="mb-4">
                  Madencilik faaliyetlerimiz sona erdikten sonra, alanların yeniden doğaya kazandırılması için kapsamlı restorasyon projeleri yürütüyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Madencilik Çözümleri İçin Bizimle İletişime Geçin</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Madencilik sektöründeki uzmanlığımız ve yenilikçi yaklaşımımızla
            ihtiyaçlarınıza özel çözümler sunmak için hazırız. Detaylı bilgi ve iş birliği
            fırsatları için bizimle iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-white text-slate-800 font-medium px-6 py-3 rounded-lg hover:bg-slate-100 transition-colors"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </div>
  );
}
