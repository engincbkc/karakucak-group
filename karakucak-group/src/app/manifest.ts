// src/app/manifest.ts
import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Karakucak Group',
    short_name: 'Karakucak',
    description: 'Karakucak Group - Otomotiv, İnşaat, Tarım, Madencilik ve Tekstil sektörlerinde lider',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0f3049',
    icons: [
      {
        src: '/icons/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/icons/icon-maskable-192x192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-maskable-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    related_applications: [
      {
        platform: 'web',
        url: 'https://karakucakgroup.com',
      },
    ],
    prefer_related_applications: false,
  };
}
