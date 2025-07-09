"use client";

import React, { useRef } from "react";
import { ContactHero } from "@/components/sections/contact/contact-hero";
import { ContactInfo } from "@/components/sections/contact/contact-info";
import { ContactMap } from "@/components/sections/contact/contact-map";
import { ContactForm } from "@/components/forms/contact-form";
import { SectionHeader } from "@/components/ui/section-header";

export default function IletisimPage() {
  const formRef = useRef<HTMLDivElement>(null);
  
  const scrollToContactForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <ContactHero 
        scrollToContactForm={scrollToContactForm}
        title="Bize Ulaşın"
        subtitle="Karakucak Group"
        description="İhtiyaçlarınıza özel çözümler için Karakucak Group uzman ekibi ile hemen iletişime geçin. Kurumsal ya da bireysel tüm sorularınız için yanınızdayız."
        imageUrl="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3"
      />

      {/* İletişim Bilgileri ve Form */}
      <section id="contact-form" ref={formRef} className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 -translate-x-1/2 translate-y-1/4 w-96 h-96 bg-blue-100 dark:bg-blue-900/20 rounded-full filter blur-[120px] opacity-70 dark:opacity-30"></div>
        <div className="absolute bottom-0 left-0 translate-x-1/3 -translate-y-1/2 w-72 h-72 bg-purple-100 dark:bg-purple-900/20 rounded-full filter blur-[100px] opacity-70 dark:opacity-30"></div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <SectionHeader
            title="Size Nasıl Yardımcı Olabiliriz?"
            subtitle="Söz konusu işiniz olunca, detaylar çok önemlidir. Projeleriniz, önerileriniz veya sorularınız için aşağıdaki iletişim seçeneklerini kullanabilirsiniz."
            alignment="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Side - Contact Info */}
            <div className="lg:col-span-4">
              <ContactInfo 
                title="İletişim Bilgilerimiz"
                subtitle="Aşağıdaki kanallardan bize ulaşabilir veya doğrudan formu doldurarak mesajınızı iletebilirsiniz."
                address="Atakent Mahallesi, 6052. Sokak NO:1 Karaköprü/Şanlıurfa"
                phone="0850 281 63 11"
                email="info@karakucakgroup.com"
                workingHours={["Pazartesi - Cuma: 09:00 - 18:00", "Cumartesi: 09:00 - 13:00", "Pazar: Kapalı"]}
              />
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-8">
              <div className="relative">
                {/* Section title with accent */}
                <div className="flex items-center gap-3 mb-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="text-blue-600 dark:text-blue-400">|</span> Mesaj Gönderin
                  </h3>
                  <div className="h-px flex-grow bg-gradient-to-l from-transparent to-blue-500/50 dark:to-blue-400/30"></div>
                </div>

                {/* Contact Form */}
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700/50 p-8">
                  <ContactForm 
                    formEndpoint="https://formsubmit.co/mirzakarakucakk@gmail.com"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Harita */}
      <ContactMap 
        title="Bizi Ziyaret Edin"
        subtitle="Karakucak Group Merkez Lokasyonu"
        description="Merkez ofisimizin konumunu harita üzerinde görebilir ve detaylı yol tarifi alabilirsiniz. Tüm sorularınız için sizi ofisimize bekliyoruz."
        embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.893816890036!2d38.785029!3d37.1540319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x153471ebdc619a95%3A0xfc28d8c6d3c5a673!2sKaraK%C3%B6pr%C3%BC%2C%20%C5%9Eanl%C4%B1urfa!5e0!3m2!1str!2str!4v1652825554264!5m2!1str!2str"
        mapUrl="https://maps.google.com/maps?q=Karakucak+Group+Atakent+Mahallesi,+6052.+Sokak+NO:1+Karaköprü/Şanlıurfa&t=&z=15&ie=UTF8&iwloc=&output=embed"
      />
    </div>
  );
}