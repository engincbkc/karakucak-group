"use client"

import React, { createContext, useState, useContext, useEffect } from "react"
import { useTheme } from "next-themes"

type ThemeContextType = {
  isDarkTheme: boolean
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme()
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  useEffect(() => {
    // İlk render'da tarayıcı ortamında değilsek (SSR) erken dönüş yap
    if (typeof window === "undefined") return
    
    // Mevcut tema dark'sa veya sistem teması dark ve tema system ise
    const isDark = 
      theme === "dark" || 
      (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    
    setIsDarkTheme(isDark)
  }, [theme])

  // Sistem teması değişikliklerini dinle
  useEffect(() => {
    if (typeof window === "undefined") return

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    
    const handleChange = (e: MediaQueryListEvent) => {
      if (theme === "system") {
        setIsDarkTheme(e.matches)
      }
    }
    
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeContextProvider")
  }
  return context
}
