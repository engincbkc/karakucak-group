"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";

export type ContactInfoItemProps = {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  delay?: number;
};

export const ContactInfoItem = ({
  icon,
  title,
  children,
  delay = 0,
}: ContactInfoItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="p-6 flex items-start gap-4">
          <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {title}
            </h3>
            <div className="text-gray-600 dark:text-gray-300 space-y-1">
              {children}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <ContactInfoItem 
        icon={<MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />} 
        title="Merkez Ofis"
        delay={0.1}
      >
        <p>
          Barbaros Mah. Begonya Sok. No: 3, <br />
          Ataşehir, İstanbul, 34746
        </p>
        <p className="pt-2">
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors font-medium"
          >
            <span>Yol Tarifi Al</span>
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </p>
      </ContactInfoItem>

      <ContactInfoItem 
        icon={<Phone className="h-6 w-6 text-blue-600 dark:text-blue-400" />} 
        title="Telefon"
        delay={0.2}
      >
        <p>+90 212 123 45 67</p>
        <p>+90 212 123 45 68</p>
      </ContactInfoItem>

      <ContactInfoItem 
        icon={<Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />} 
        title="E-posta"
        delay={0.3}
      >
        <p>
          <a href="mailto:info@karakucakgroup.com" className="hover:text-blue-600 transition-colors">
            info@karakucakgroup.com
          </a>
        </p>
        <p>
          <a href="mailto:kariyer@karakucakgroup.com" className="hover:text-blue-600 transition-colors">
            kariyer@karakucakgroup.com
          </a>
        </p>
      </ContactInfoItem>

      <ContactInfoItem 
        icon={<Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />} 
        title="Çalışma Saatleri"
        delay={0.4}
      >
        <p>Pazartesi - Cuma: 09:00 - 18:00</p>
        <p>Cumartesi - Pazar: Kapalı</p>
      </ContactInfoItem>
    </div>
  );
}
