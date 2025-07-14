// src/utils/seo-helper.ts
import { Metadata } from 'next';

// SEO enhancement functions for Karakucak Group website
// These functions help improve metadata across sector-specific pages

/**
 * Generates structured data for Organization (Karakucak Group)
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Karakucak Group',
    url: 'https://karakucakgroup.com',
    logo: 'https://karakucakgroup.com/images/logo.png',
    sameAs: [
      'https://www.facebook.com/karakucakgroup',
      'https://www.linkedin.com/company/karakucakgroup',
      'https://twitter.com/karakucakgroup'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+90 850 281 63 11',
      contactType: 'customer service',
      areaServed: 'TR',
      availableLanguage: ['Turkish', 'English'],
    },
    description: 'Karakucak Group, otomotiv, madencilik, pamuk ve tekstil, mimarlık alanlarında faaliyetler gösteren profesyonel şirketler grubudur.',
  };
}

/**
 * Generates enhanced sector-specific metadata
 */
export function generateEnhancedSectorMetadata(
  sectorName: string,
  sectorDescription: string,
  imageUrl: string,
  keywords: string[]
): Metadata {
  return {
    title: `${sectorName} | Karakucak Group`,
    description: sectorDescription,
    keywords: [...keywords, 'Karakucak Group', 'profesyonel', 'kurumsal'],
    openGraph: {
      title: `${sectorName} - Karakucak Group`,
      description: sectorDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${sectorName} - Karakucak Group`,
        }
      ],
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${sectorName} | Karakucak Group`,
      description: sectorDescription,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://karakucakgroup.com/sektor/${sectorName.toLowerCase().replace(/\s+/g, '-')}`,
      languages: {
        'tr-TR': `/sektor/${sectorName.toLowerCase().replace(/\s+/g, '-')}`,
        'en-US': `/en/sector/${sectorName.toLowerCase().replace(/\s+/g, '-')}`,
      },
    },
  };
}

/**
 * Generates enhanced news article metadata with structured data
 */
export function generateEnhancedNewsMetadata(
  title: string,
  excerpt: string,
  imageUrl: string,
  publishDate: string,
  category: string,
  slug: string
): Metadata {
  const formattedDate = new Date(publishDate).toISOString();
  
  return {
    title: `${title} | Karakucak Group Haberleri`,
    description: excerpt,
    openGraph: {
      title,
      description: excerpt,
      type: 'article',
      publishedTime: formattedDate,
      authors: ['Karakucak Group'],
      tags: [category, 'Karakucak', 'haber'],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: excerpt,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://karakucakgroup.com/haberler/${slug}`,
      languages: {
        'tr-TR': `/haberler/${slug}`,
        'en-US': `/en/news/${slug}`,
      },
    },
  };
}

/**
 * Generates JSON-LD schema for an article
 */
export function generateArticleSchema(
  title: string,
  description: string,
  imageUrl: string,
  publishDate: string,
  slug: string
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: title,
    image: [imageUrl],
    datePublished: new Date(publishDate).toISOString(),
    dateModified: new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Karakucak Group',
      url: 'https://karakucakgroup.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Karakucak Group',
      logo: {
        '@type': 'ImageObject',
        url: 'https://karakucakgroup.com/images/logo.png',
      }
    },
    description,
    url: `https://karakucakgroup.com/haberler/${slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://karakucakgroup.com/haberler/${slug}`,
    }
  };
}
