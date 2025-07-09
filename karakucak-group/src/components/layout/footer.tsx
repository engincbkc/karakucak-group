"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, ChevronRight, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1F224C] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logo and social media */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 border-b border-white/20 pb-8">
          <div className="mb-8 lg:mb-0">
            <div className="flex items-center mb-6">
              <Link href="/" className="block">
                <Image 
                    src="/images/logo/main_logo-removebg-preview.png" 
                    alt="Karakucak Group Logo" 
                    width={500} 
                    height={100} 
                    className="object-contain h-35 w-auto" 
                    priority
                  />
              </Link>
            </div>
            <p className="text-gray-300 max-w-md mb-6">
              Otomotiv, madencilik, pamuk, tekstil ve mimarlık sektörlerinde 15+ yıllık deneyimle, yenilikçi ve sürdürülebilir çözümler sunuyoruz.
            </p>
          </div>
          
          <div>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 hover:bg-amber-500 flex items-center justify-center transition-colors duration-300">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Description */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center">
              <Globe className="mr-2 h-5 w-5 text-amber-500" /> Kurumsal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-amber-500" /> Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-amber-500" /> Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/haberler" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-amber-500" /> Haberler
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
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
            <h3 className="text-lg font-bold text-white mb-6">
              Hizmetlerimiz
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/hizmetler/otomotiv-satis" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-amber-500" /> Otomotiv Satış
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/mimarlik-tasarim" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-amber-500" /> Mimari Tasarım
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/insaat" className="text-gray-300 hover:text-amber-500 transition-colors flex items-center">
                  <ChevronRight className="mr-2 h-4 w-4 text-amber-500" /> İnşaat
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">
              İletişim
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="min-w-[24px] mr-3 mt-1 flex-shrink-0">
                  <Globe className="h-5 w-5 text-amber-500" />
                </div>
                <span className="text-gray-300">
                  Barbaros Mah. Begonya Sok. No: 3, Ataşehir, İstanbul
                </span>
              </li>
              <li className="flex items-start">
                <div className="min-w-[24px] mr-3 mt-1 flex-shrink-0">
                  <Phone className="h-5 w-5 text-amber-500" />
                </div>
                <span className="text-gray-300">
                  +90 216 555 44 33
                </span>
              </li>
              <li className="flex items-start">
                <div className="min-w-[24px] mr-3 mt-1 flex-shrink-0">
                  <Mail className="h-5 w-5 text-amber-500" />
                </div>
                <span className="text-gray-300">
                  info@karakucakgroup.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8">
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
