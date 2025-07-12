// src/app/sitemap.ts
import { MetadataRoute } from 'next';
import { getAllSectorSlugs } from '@/data/sectors-data';
import { getProjectsData } from '@/data/projects-data';
import { getNewsData, NewsItem } from '@/data/news-data';

// Dinamik Sitemap Oluşturucu
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://karakucakgroup.com';
  
  // Temel sayfalar
  const routes = ['', '/hakkimizda', '/iletisim', '/haberler', '/projeler'].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
  
  // Sektör sayfaları
  const sectorSlugs = getAllSectorSlugs();
  const sectorRoutes = sectorSlugs.map(slug => ({
    url: `${baseUrl}/sektor/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));
  
  // Proje sayfaları
  const projects = getProjectsData().projects;
  const projectRoutes = projects.map(project => ({
    url: `${baseUrl}/projeler/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));
  
  // Haber sayfaları
  const newsData = getNewsData();
  const newsRoutes = newsData.news.map((news: NewsItem) => ({
    url: `${baseUrl}/haberler/${news.slug}`,
    lastModified: new Date(news.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  
  return [...routes, ...sectorRoutes, ...projectRoutes, ...newsRoutes];
}
