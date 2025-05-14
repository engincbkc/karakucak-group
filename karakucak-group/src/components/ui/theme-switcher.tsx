"use client"

import React from "react"
import { useThemeContext } from "../theme-context"
import { Sun, Moon } from "lucide-react"

interface ThemeSwitcherProps {
  variant?: "icon" | "button" | "minimal"
  className?: string
}

export function ThemeSwitcher({ 
  variant = "icon",
  className = ""
}: ThemeSwitcherProps) {
  const { isDarkTheme, toggleTheme } = useThemeContext()

  if (variant === "minimal") {
    return (
      <button
        onClick={toggleTheme}
        className={`p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 ${className}`}
        aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
      >
        {isDarkTheme ? (
          <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        ) : (
          <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
        )}
      </button>
    )
  }

  if (variant === "button") {
    return (
      <button
        onClick={toggleTheme}
        className={`flex items-center gap-2 px-3 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${className}`}
        aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
      >
        {isDarkTheme ? (
          <>
            <Sun className="h-4 w-4 text-amber-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Light</span>
          </>
        ) : (
          <>
            <Moon className="h-4 w-4 text-indigo-500" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">Dark</span>
          </>
        )}
      </button>
    )
  }

  // Default icon variant
  return (
    <button
      onClick={toggleTheme}
      className={`relative p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors ${className}`}
      aria-label={isDarkTheme ? "Switch to light theme" : "Switch to dark theme"}
    >
      <div className="flex items-center justify-center">
        {isDarkTheme ? (
          <Sun className="h-5 w-5 text-amber-500" />
        ) : (
          <Moon className="h-5 w-5 text-indigo-500" />
        )}
      </div>
    </button>
  )
}
