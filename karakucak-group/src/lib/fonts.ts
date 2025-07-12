// src/lib/fonts.ts
import { NextFontWithVariable } from 'next/dist/compiled/@next/font';
import { Inter, Montserrat } from 'next/font/google';

// Define primary font - Inter
export const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'sans-serif']
});

// Define heading font - Montserrat
export const montserrat = Montserrat({
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-montserrat',
  preload: true,
  adjustFontFallback: true,
  fallback: ['system-ui', 'Arial', 'sans-serif']
});

// Helper function to get both font variables as a string for className
export function getFontVariables(): string {
  return `${inter.variable} ${montserrat.variable}`;
}

// Font variables for Tailwind CSS
export const fontVariables = {
  sans: 'var(--font-inter)',
  heading: 'var(--font-montserrat)',
};
