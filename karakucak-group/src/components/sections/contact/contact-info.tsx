"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Building2, MapPin } from "lucide-react";

interface ContactInfoProps {
  address?: string;
  phone?: string;
  email?: string;
  workingHours?: string[];
  title?: string;
  subtitle?: string;
}

export function ContactInfo({
  address = "Atakent Mahallesi, 6052. Sokak NO:1 Karaköprü/Şanlıurfa",
  phone = "0850 281 63 11",
  email = "info@karakucakgroup.com",
  workingHours = ["Pazartesi - Cuma: 09:00 - 18:00", "Cumartesi: 09:00 - 13:00", "Pazar: Kapalı"],
  title = "İletişim Bilgilerimiz",
  subtitle = "Aşağıdaki kanallardan bize ulaşabilir veya doğrudan formu doldurarak mesajınızı iletebilirsiniz."
}: ContactInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-gray-900/30 border border-gray-100 dark:border-gray-700/50 p-8"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-8">{subtitle}</p>
      
      <div className="space-y-6">
        {/* Address */}
        <div className="flex">
          <div className="flex-shrink-0 mr-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Adres</h4>
            <a 
              href={`https://maps.google.com/maps?q=${encodeURIComponent(address)}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {address}
            </a>
          </div>
        </div>

        {/* Phone */}
        <div className="flex">
          <div className="flex-shrink-0 mr-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Telefon</h4>
            <a 
              href={`tel:${phone.replace(/\s+/g, '')}`} 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex">
          <div className="flex-shrink-0 mr-4">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <div>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">E-posta</h4>
            <a 
              href={`mailto:${email}`} 
              className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {email}
            </a>
          </div>
        </div>

       
      </div>
    </motion.div>
  );
}
