"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeContextProvider } from "./theme-context"

type ThemeProviderProps = Parameters<typeof NextThemesProvider>[0]

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeContextProvider>
        {children}
      </ThemeContextProvider>
    </NextThemesProvider>
  )
}
