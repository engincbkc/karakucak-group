"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Form gönderimi simülasyonu
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Form data:", formData);
    setSubmitSuccess(true);
    setIsSubmitting(false);
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3"
            alt="u0130letiu015fim"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">u0130letiu015fim</h1>
            <p className="text-xl mb-8">
              Sorularu0131nu0131z, u00f6nerileriniz veya iu015fbirliu011fi fu0131rsatlaru0131 iu00e7in bizimle iletiu015fime geu00e7in.
              Size en ku0131sa su00fcrrede du00f6nu00fcu015f yapacu011fu0131z.
            </p>
          </div>
        </div>
      </section>

      {/* u0130letiu015fim Bilgileri ve Form */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">u0130letiu015fim Bilgilerimiz</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  Au015fau011fu0131daki kanallardan bizimle iletiu015fime geu00e7ebilir veya formu doldurarak mesaju0131nu0131zu0131 iletebilirsiniz.
                </p>
              </div>

              <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-6 flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Merkez Ofis</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Barbaros Mah. Begonya Sok. No: 3, <br />
                    Atau015fehir, u0130stanbul, 34746
                  </p>
                </div>
              </div>
              
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-6 flex items-start">
                <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Telefon</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    +90 212 123 45 67
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    +90 212 123 45 68
                  </p>
                </div>
              </div>
              
              <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-6 flex items-start">
                <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">E-posta</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    info@karakucakgroup.com
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    kariyer@karakucakgroup.com
                  </p>
                </div>
              </div>

              <div className="rounded-xl bg-gray-50 dark:bg-gray-800 p-6 flex items-start">
                <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mr-4 mt-1" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">u00c7alu0131u015fma Saatleri</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-1">
                    Pazartesi - Cuma: 09:00 - 18:00
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    Cumartesi - Pazar: Kapalu0131
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 h-full">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Bize Yazu0131n</h2>
                
                {submitSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-green-100 dark:bg-green-900 p-6 rounded-lg text-center"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="h-16 w-16 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Mesaju0131nu0131z Alu0131ndu0131</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-6">
                      u0130letiu015fiminiz iu00e7in teu015fekku00fcr ederiz. En ku0131sa su00fcrede size du00f6nu00fcu015f yapacu011fu0131z.
                    </p>
                    <button 
                      onClick={() => setSubmitSuccess(false)}
                      className="px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      Yeni Mesaj Gu00f6nder
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Adu0131nu0131z Soyadu0131nu0131z *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          E-posta Adresiniz *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Telefon Numaranu0131z
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Konu *
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Mesaju0131nu0131z *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                      ></textarea>
                    </div>

                    <div className="flex items-center">
                      <input
                        id="privacy"
                        name="privacy"
                        type="checkbox"
                        required
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                        <a href="/gizlilik-politikasi" className="text-blue-600 dark:text-blue-400 hover:underline">Gizlilik Politikasu0131</a>'nu0131 okudum ve kabul ediyorum.
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center justify-center w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Gu00f6nderiliyor...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Mesaju0131 Gu00f6nder
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Harita */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Bize Ulau015fu0131n</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Merkez ofisimiz u0130stanbul Atau015fehir'de bulunmaktadu0131r. Au015fau011fu0131daki haritadan konumumuzu gu00f6rebilirsiniz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <div className="relative h-[500px] w-full">
              <Image
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3"
                alt="Karakucak Group Lokasyon Haritasu0131"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Diu011fer Ofislerimiz */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Diu011fer Ofislerimiz</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Du00fcnya u00e7apu0131nda hizmet au011fu0131mu0131z ve bu00f6lgesel ofislerimiz ile her zaman yanu0131nu0131zdayu0131z.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Ankara Ofisi</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                u00c7ankaya Cad. No: 42, Kat: 3 <br />
                u00c7ankaya, Ankara
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Tel:</span> +90 312 456 78 90
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">u0130zmir Ofisi</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Alsancak Mah. Kordon Blv. No: 25 <br />
                Konak, u0130zmir
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Tel:</span> +90 232 345 67 89
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Almanya Ofisi</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Unter den Linden 78 <br />
                10117 Berlin, Almanya
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                <span className="font-medium">Tel:</span> +49 30 1234 5678
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
