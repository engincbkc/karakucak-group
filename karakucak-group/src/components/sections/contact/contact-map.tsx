"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPinned, ExternalLink } from "lucide-react";

interface ContactMapProps {
  title?: string;
  subtitle?: string;
  description?: string;
  embedUrl?: string;
  mapUrl?: string;
  mapLinkText?: string;
}

export function ContactMap({
  title = "Bizi Ziyaret Edin",
  subtitle = "Karakucak Group Merkez Lokasyonu",
  description = "Merkez ofisimizin konumunu harita üzerinde görebilir ve detaylı yol tarifi alabilirsiniz. Tüm sorularınız için sizi ofisimize bekliyoruz.",
  embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3127.3649449480946!2d38.7911887!3d37.1944072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1535dbecdb16d2a3%3A0xa72e24e18493562!2sKarakucak%20Group!5e0!3m2!1str!2str!4v1625837254897!5m2!1str!2str",
  mapUrl = "https://maps.google.com/maps?q=Karakucak+Group+Atakent+Mahallesi,+6052.+Sokak+NO:1+Karaköprü/Şanlıurfa&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapLinkText = "Google Haritalar'da Aç"
}: ContactMapProps) {
  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-70"></div>
        <div className="absolute right-10 top-10 w-32 h-32 bg-blue-400/10 rounded-full filter blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-64 h-64 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-blue-500/20 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
              <MapPinned className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">{subtitle}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              {title}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative aspect-video w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        >
          <iframe
            src={embedUrl}
            className="absolute inset-0 w-full h-full border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Karakucak Group Konum Haritası"
          ></iframe>

          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 right-4 flex items-center bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-lg shadow-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            {mapLinkText}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
