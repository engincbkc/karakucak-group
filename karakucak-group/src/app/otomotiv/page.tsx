"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function OtomotivPage() {
  return (
    <div className="pt-16">
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Otomotiv</h1>
          <p className="text-xl">
            Yenilikçi teknolojiler ve sürdürülebilir çözümlerle otomotiv sektörüne
            değer katıyoruz.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Otomotiv Sektöründeki Uzmanlığımız</h2>
          <p className="mb-6">
            Karakucak Group olarak, otomotiv sektöründe 20 yılı aşkın deneyimimizle,
            yüksek kaliteli otomotiv parçaları üretiminden elektrikli araç komponentlerine kadar
            geniş bir yelpazede hizmet sunuyoruz.
          </p>
          
          <div className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3"
              alt="Otomotiv Üretim Tesisimiz"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Otomotiv Çözümlerimiz</h2>
          <p className="mb-6">
            Modern teknolojileri kullanarak otomotiv endüstrisinin ihtiyaçlarına yönelik
            yenilikçi ve sürdürülebilir çözümler geliştiriyoruz. Müşterilerimizin ihtiyaçlarına
            özel çözümlerle rekabet avantajı sağlıyoruz.
          </p>

          <div className="my-8">
            <Image
              src="https://images.unsplash.com/photo-1537041373723-53e55d254ada?ixlib=rb-4.0.3"
              alt="Otomotiv Teknolojileri"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Önemli Projelerimiz</h2>
          <p className="mb-8">
            Otomotiv alanında gerçekleştirdiğimiz öncü projelerimizden
            bazılarını inceleyebilirsiniz.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3"
                  alt="Elektrikli Araç Komponentleri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Elektrikli Araç Batarya Yönetim Sistemleri
                </h3>
                <p className="mb-4">
                  Öncü batarya yönetim teknolojimiz, elektrikli araçların menzilini ve performansını
                  artırırken, güvenliği maksimize ediyor.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3"
                  alt="Gelişmiş Sürücü Destek Sistemleri"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Gelişmiş Sürücü Destek Sistemleri (ADAS)
                </h3>
                <p className="mb-4">
                  Dünya standartlarında geliştirdiğimiz ADAS teknolojileri, otomotiv üreticilerine
                  güvenli ve yenilikçi çözümler sunuyor.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3"
                  alt="Hafif Kompozit Malzemeler"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">
                  Hafif Kompozit Malzeme Teknolojileri
                </h3>
                <p className="mb-4">
                  Karbon fiber ve diğer ileri kompozit malzemeler kullanarak, araç ağırlığını azaltan ve yakıt verimliliğini artıran çözümler geliştiriyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Projeleriniz İçin Bizimle İletişime Geçin</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Otomotiv sektöründeki uzmanlığımızla, projelerinize değer katmak için
            hazırız. Detaylı bilgi ve işbirliği fırsatları için bizimle iletişime geçin.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-white text-blue-800 font-medium px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
          >
            İletişime Geçin
          </Link>
        </div>
      </section>
    </div>
  );
}
