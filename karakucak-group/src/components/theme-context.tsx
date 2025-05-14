"use client"

// Bu küpane yeni tema sistemiyle geriye dönük uyumluluk sağlamak için var
// /lib/theme-context.tsx'i kullanarak eski tema kullanan bileşenlerle uyumu korur

import React from "react"
import { useTheme } from "@/lib/theme-context"

// Eskiye uyumluluk için aynı isimli provider ve hook'u yeniden dışa aktar
// Bu bileşen aslında yeni tema sistemimizi kullanarak eski arayüze uyumluluk sağlıyor
export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}

// Eski arayüz ile yeni temamız arasında uyumluluk katmanı
export function useThemeContext() {
  // Yeni tema sistemimizi kullan
  const themeInstance = useTheme()
  
  // Eski arayüze uygun şekilde değerleri döndür
  return {
    isDarkTheme: themeInstance.isDarkTheme,
    toggleTheme: themeInstance.toggleTheme
  }
}
