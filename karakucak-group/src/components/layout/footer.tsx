"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, ChevronRight, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#2F3272] via-[#242B68] to-[#1F224C] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logo and social media */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 border-b border-white/10 pb-8 backdrop-blur-sm">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center mb-6">
              <Link href="/" className="block">
                <Image 
                    src="/images/logo/main_logo-removebg-preview.png" 
                    alt="Karakucak Group Logo" 
                    width={750} 
                    height={250} 
                    className="object-contain h-50 w-auto" 
                    priority
                  />
              </Link>
            </div>
            <p className="text-gray-100 max-w-md mb-6">
              Otomotiv, madencilik, pamuk, tekstil ve mimarlık sektörlerinde 25+ yıllık deneyimle, yenilikçi ve sürdürülebilir çözümler sunuyoruz.
            </p>
          </div>
          
          <div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/20 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300 shadow-lg">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/20 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300 shadow-lg">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/20 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300 shadow-lg">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/20 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300 shadow-lg">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12 relative">
          {/* Decorative elements */}
          <div className="absolute -left-12 top-10 w-24 h-24 bg-blue-300/10 rounded-full filter blur-xl"></div>
          <div className="absolute right-0 bottom-0 w-36 h-36 bg-indigo-400/10 rounded-full filter blur-xl"></div>
          {/* Company Description */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="p-2 bg-white/10 rounded-lg mr-2">
                <Globe className="h-5 w-5 text-amber-400" />
              </span>
              Kurumsal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-200 hover:text-amber-400 transition-colors flex items-center group">
                  <ChevronRight className="mr-2 h-4 w-4 text-amber-500 group-hover:translate-x-1 transition-transform" /> Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-200 hover:text-amber-400 transition-colors flex items-center group">
                  <ChevronRight className="mr-2 h-4 w-4 text-amber-500 group-hover:translate-x-1 transition-transform" /> Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/haberler" className="text-gray-200 hover:text-amber-400 transition-colors flex items-center group">
                  <ChevronRight className="mr-2 h-4 w-4 text-amber-500 group-hover:translate-x-1 transition-transform" /> Haberler
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="p-2 bg-white/10 rounded-lg mr-2 inline-flex">
                <svg className="h-5 w-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </span>
              Sektörlerimiz
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/sektor/otomotiv-bayii" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-amber-500" /> Otomotiv
                </Link>
              </li>
              <li>
                <Link href="/sektor/madencilik" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-amber-500" /> Madencilik
                </Link>
              </li>
              <li>
                <Link href="/sektor/tekstil" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-amber-500" /> Tekstil
                </Link>
              </li>
              <li>
                <Link href="/sektor/mimarlik" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-amber-500" /> Mimarlık
                </Link>
              </li>
              <li>
                <Link href="/sektor/tarim" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-amber-500" /> Tarım
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
           
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <span className="p-2 bg-white/10 rounded-lg mr-2">
                <Mail className="h-5 w-5 text-amber-400" />
              </span>
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="min-w-[24px] mr-3 mt-1 flex-shrink-0 p-2 bg-white/10 rounded-lg">
                  <Globe className="h-5 w-5 text-amber-400" />
                </div>
                <span className="text-gray-200">
                  Atakent Mahallesi, 6052. Sokak NO:1 Karaköprü/Şanlıurfa
                </span>
              </li>
              <li className="flex items-start">
                <div className="min-w-[24px] mr-3 mt-1 flex-shrink-0 p-2 bg-white/10 rounded-lg">
                  <Phone className="h-5 w-5 text-amber-400" />
                </div>
                <a href="tel:+908502816311" className="text-gray-200 hover:text-amber-400 transition-colors group-hover:translate-x-1 inline-flex items-center group">
                  0850 281 63 11
                </a>
              </li>
              <li className="flex items-start">
                <div className="min-w-[24px] mr-3 mt-1 flex-shrink-0 p-2 bg-white/10 rounded-lg">
                  <Mail className="h-5 w-5 text-amber-400" />
                </div>
                <a href="mailto:info@karakucakgroup.com" className="text-gray-200 hover:text-amber-400 transition-colors group-hover:translate-x-1 inline-flex items-center group">
                  info@karakucakgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-300 mb-4 md:mb-0">
              © {new Date().getFullYear()} Karakucak Group. Tüm hakları saklıdır.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6">
              <Link href="/gizlilik-politikasi" className="text-xs text-gray-300 hover:text-amber-500 transition-colors">
                Gizlilik Politikası
              </Link>
              <Link href="/kvkk" className="text-xs text-gray-300 hover:text-amber-500 transition-colors">
                KVKK
              </Link>
              <Link href="/cerez-politikasi" className="text-xs text-gray-300 hover:text-amber-500 transition-colors">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
