"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type ThemeContextType = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
  themeClasses: (lightClass: string, darkClass: string) => string;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Server ve client arasındaki hidrasyon uyumsuzluklarını önlemek için
  // başlangıçta varsayılan tema değeri
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Bu effect yalnızca client tarafında ve bir kez çalışır
  useEffect(() => {
    // Client tarafında olduğumuzdan emin olalım
    if (typeof window === 'undefined') return;
    
    // Tarayıcı tarafında tema tercihi kontrolü
    const savedTheme = localStorage.getItem("theme");
    let newIsDarkTheme = false;
    
    if (savedTheme === "dark") {
      newIsDarkTheme = true;
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      newIsDarkTheme = false;
      document.documentElement.classList.remove("dark");
    } else {
      // Kullanıcı tercihini kontrol et
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      newIsDarkTheme = prefersDark;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }
    
    setIsDarkTheme(newIsDarkTheme);
    setIsInitialized(true);
  }, []);

  const toggleTheme = () => {
    setIsDarkTheme(prev => {
      const newTheme = !prev;
      localStorage.setItem("theme", newTheme ? "dark" : "light");
      
      if (newTheme) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
      return newTheme;
    });
  };
  
  // İki farklı class döndüren yardımcı fonksiyon
  const themeClasses = (lightClass: string, darkClass: string) => {
    return isDarkTheme ? darkClass : lightClass;
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, themeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
