"use client"

import React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Karakucak Group
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Otomotiv, madencilik, pamuk, tekstil ve mimarlık sektörlerinde 25 yılı aşkın deneyimle, yenilikçi ve sürdürülebilir çözümler sunuyoruz.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Hızlı Bağlantılar
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/yonetim" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  Yönetim
                </Link>
              </li>
              <li>
                <Link href="/kariyer" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  Kariyer
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Sectors */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Sektörlerimiz
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/otomotiv-madencilik" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  Otomotiv ve Madencilik
                </Link>
              </li>
              <li>
                <Link href="/pamuk-tekstil" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  Pamuk ve Tekstil
                </Link>
              </li>
              <li>
                <Link href="/mnk-mimarlik" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                  MNK Mimarlık
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              İletişim
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2 mt-0.5" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Barbaros Mah. Begonya Sok. No: 3, Ataşehir, İstanbul
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  +90 212 123 45 67
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400 mr-2" />
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  info@karakucakgroup.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} Karakucak Group. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/gizlilik-politikasi" className="text-xs text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Gizlilik Politikası
              </Link>
              <Link href="/kvkk" className="text-xs text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                KVKK
              </Link>
              <Link href="/cerez-politikasi" className="text-xs text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                Çerez Politikası
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
