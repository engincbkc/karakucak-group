"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, ArrowRight, Phone } from "lucide-react";

type CollaborationCTAProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  phone?: string;
  stats?: {
    experience?: number;
    projects?: number;
    network?: number;
    sectors?: number;
  };
};

export const CollaborationCTA: React.FC<CollaborationCTAProps> = ({
  title = "İşbirliği Yapalım",
  subtitle = "Karakucak Group ile",
  description = "25 yıllık tecrübemiz ve uzman ekibimizle projelerinizde yanınızdayız. Daha detaylı bilgi için bizimle iletişime geçin veya projelerimizi inceleyerek kalitemizi keşfedin.",
  primaryCTA = {
    text: "İletişime Geçin",
    href: "/iletisim"
  },
  secondaryCTA = {
    text: "Projelerimizi İnceleyin",
    href: "/projelerimiz"
  },
  phone = "+90 212 123 45 67",
  stats = {
    experience: 25,
    projects: 500,
    network: 100,
    sectors: 4
  }
}) => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* SEO optimization: Structured data for Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Karakucak Group",
            "url": "https://karakucakgroup.com", 
            "logo": "https://karakucakgroup.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": phone,
              "contactType": "customer service"
            },
            "description": description
          })
        }}
      />
      
      {/* Arka plan tasarımı */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 z-0">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-indigo-600/20 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          
          {/* Subtle grid pattern - for visual texture */}
          <div className="absolute inset-0 opacity-20" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0V20M0 1H20' stroke='white' stroke-opacity='0.1' stroke-width='0.5'/%3E%3C/svg%3E%0A")`,
                 backgroundSize: '30px 30px'
               }}>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-5 sm:px-10 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <div className="inline-block px-4 py-1 mb-6 rounded-full border border-blue-300/30 bg-blue-800/30">
                  <span className="text-sm font-medium text-blue-200 flex items-center">
                    <Users className="w-4 h-4 mr-2" /> İşbirliği Fırsatları
                  </span>
                </div>
                
                <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold mb-6 text-white leading-tight">
                  {subtitle}<br /> 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">{title}</span>
                </h2>
                
                <p className="text-lg xl:text-xl mb-8 text-blue-100/90 max-w-2xl leading-relaxed">
                  {description}
                </p>
              </div>
              
              <div className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/10 shadow-lg">
                  <div className="space-y-4">
                    {primaryCTA && (
                      <div className="flex flex-wrap md:flex-nowrap gap-4">
                        <Button 
                          href={primaryCTA.href} 
                          variant="primary"
                          size="lg"
                          className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-xl shadow-indigo-900/40 border-0"
                          iconPosition="right"
                          icon={<ArrowRight className="w-5 h-5" />}
                        >
                          {primaryCTA.text}
                        </Button>
                      </div>
                    )}
                    
                    {secondaryCTA && (
                      <div className="flex flex-wrap md:flex-nowrap gap-4">
                        <Button 
                          href={secondaryCTA.href} 
                          variant="secondary"
                          size="lg"
                          className="w-full bg-white text-blue-900 hover:bg-gray-100 shadow-lg font-medium"
                        >
                          {secondaryCTA.text}
                        </Button>
                      </div>
                    )}
                    
                    {phone && (
                      <div className="pt-4 mt-2 border-t border-white/10">
                        <div className="flex items-center justify-center">
                          <Phone className="w-4 h-4 text-blue-200 mr-2" />
                          <span className="text-sm text-blue-200">{phone}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust indicators */}
            {stats && (
              <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.experience && (
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-white mb-2">{stats.experience}+</div>
                    <div className="text-blue-200 text-sm text-center">İş Deneyimi</div>
                  </div>
                )}
                {stats.projects && (
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-white mb-2">{stats.projects}+</div>
                    <div className="text-blue-200 text-sm text-center">Tamamlanan Proje</div>
                  </div>
                )}
                {stats.network && (
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-white mb-2">{stats.network}+</div>
                    <div className="text-blue-200 text-sm text-center">Tedarikçi Ağı</div>
                  </div>
                )}
                {stats.sectors && (
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold text-white mb-2">{stats.sectors}</div>
                    <div className="text-blue-200 text-sm text-center">Faaliyet Alanı</div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
