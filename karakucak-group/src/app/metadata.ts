// src/app/metadata.ts
import { Metadata } from 'next';

// Default metadata that can be extended by individual pages
export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://karakucakgroup.com'),
  title: {
    default: 'Karakucak Group | Otomotiv, İnşaat, Tarım, Madencilik ve Tekstil',
    template: '%s | Karakucak Group'
  },
  description: 'Karakucak Group, sektör lideri olarak otomotiv, inşaat, tarım, madencilik ve tekstil alanlarında yenilikçi çözümler sunmaktadır.',
  keywords: ['Karakucak Group', 'otomotiv', 'inşaat', 'tarım', 'madencilik', 'tekstil', 'Şanlıurfa'],
  authors: [{ name: 'Karakucak Group' }],
  creator: 'Karakucak Group',
  publisher: 'Karakucak Group',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/tr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://karakucakgroup.com',
    siteName: 'Karakucak Group',
    title: 'Karakucak Group | Otomotiv, İnşaat, Tarım, Madencilik ve Tekstil',
    description: 'Karakucak Group, sektör lideri olarak otomotiv, inşaat, tarım, madencilik ve tekstil alanlarında yenilikçi çözümler sunmaktadır.',
    images: [
      {
        url: '/images/karakucak-og-image.jpg', // Varsayılan OG görseli
        width: 1200,
        height: 630,
        alt: 'Karakucak Group',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karakucak Group | Otomotiv, İnşaat, Tarım, Madencilik ve Tekstil',
    description: 'Karakucak Group, sektör lideri olarak otomotiv, inşaat, tarım, madencilik ve tekstil alanlarında yenilikçi çözümler sunmaktadır.',
    images: ['/images/karakucak-og-image.jpg'],
    creator: '@karakucakgroup',
  },
  viewport: 'width=device-width, initial-scale=1',
  other: {
    'format-detection': 'telephone=no',
  },
};

// Sektör sayfaları için metadata oluşturucu fonksiyon
export function generateSectorMetadata(
  sectorName: string, 
  description: string,
  imageUrl: string,
): Metadata {
  const title = `${sectorName} | Karakucak Group`;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: sectorName,
        },
      ],
    },
    twitter: {
      title,
      description,
      images: [imageUrl],
    },
  };
}

// Haber sayfaları için metadata oluşturucu fonksiyon
export function generateNewsMetadata(
  title: string, 
  excerpt: string,
  imageUrl: string,
  publishDate: string,
): Metadata {
  return {
    title: title,
    description: excerpt,
    openGraph: {
      title: title,
      description: excerpt,
      type: 'article',
      publishedTime: publishDate,
      url: `https://karakucakgroup.com/haberler/${title.toLowerCase().replace(/\s+/g, '-')}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: excerpt,
      images: [imageUrl],
    },
  };
}

// Proje sayfaları için metadata oluşturucu fonksiyon
export function generateProjectMetadata(
  title: string, 
  description: string,
  imageUrl: string,
  tags: string[],
): Metadata {
  return {
    title: `${title} | MNK Mimarlık`,
    description: description,
    keywords: [...tags, 'proje', 'mimarlık', 'tasarım', 'MNK Mimarlık'],
    openGraph: {
      title: title,
      description: description,
      type: 'website',
      url: `https://karakucakgroup.com/mnk-mimarlik/projeler/${title.toLowerCase().replace(/\s+/g, '-')}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      images: [imageUrl],
    },
  };
}
