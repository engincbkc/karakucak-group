"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
// Image import removed as it's not being used
import { cn } from "@/lib/utils"
import { Menu, X, ChevronDown } from "lucide-react"
import { ThemeSwitcher } from "../ui/theme-switcher"
import { useTheme } from "@/lib/theme-context"

const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { 
    name: "Sektörlerimiz", 
    href: "#",
    children: [
      { name: "Otomotiv", href: "/sektor/otomotiv" },
      { name: "İnşaat & Taahhüt", href: "/sektor/insaat-taahhut" },
      { name: "Pamuk Sanayi", href: "/sektor/pamuk-sanayi" },
      { name: "Madencilik", href: "/sektor/madencilik" },
      { name: "Tarım", href: "/sektor/tarim" }
    ] 
  },
  { name: "Hakkımızda", href: "/hakkimizda" },
  { name: "Yönetim", href: "/yonetim" },
  { name: "İletişim", href: "/iletisim" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState("")
  const { isDarkTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? "" : name)
  }

  return (
    <header 
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-between">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold text-gray-900 dark:text-white">
                  Karakucak Group
                </span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                {navigation.map((item) => 
                  !item.children ? (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div key={item.name} className="relative">
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center px-3 py-2 text-sm font-medium text-gray-900 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {openDropdown === item.name && (
                        <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                          <div className="py-1" role="menu" aria-orientation="vertical">
                            {item.children.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Theme Toggle Button */}
            <div className="flex items-center">
              <ThemeSwitcher variant="icon" className="ml-4" />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => 
              !item.children ? (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <div key={item.name} className="relative">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center w-full px-3 py-2 text-base font-medium text-gray-900 dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400"
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </header>
  )
}
