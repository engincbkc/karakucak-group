"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactHeroProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageUrl?: string;
  scrollToContactForm?: () => void;
}

export function ContactHero({
  title = "İletişime Geçin",
  subtitle = "Karakucak Group",
  description = "Soru, öneri ve işbirliği teklifleriniz için bizimle iletişime geçebilirsiniz. En kısa sürede size dönüş yapacağız.",
  imageUrl = "/images/contact/contact-hero.jpg",
  scrollToContactForm,
}: ContactHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-900 text-white overflow-hidden pt-24 mt-10"> {/* daha fazla üst boşluk eklendi - header ve bildirim altında yer alması için */}
      {/* Advanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-r from-black/40 to-black/20 z-10"></div>
        <Image
          src={imageUrl}
          alt="İletişim Görseli"
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-30"
        />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-blue-500/30 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              {title}
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl md:text-2xl font-medium text-blue-200 mb-8"
          >
            {subtitle}
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button
              onClick={scrollToContactForm}
              className="px-8 py-3 text-lg rounded-full"
            >
              Hemen İletişime Geçin <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
