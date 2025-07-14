// src/app/sitemap.ts
import { MetadataRoute } from 'next';
type ChangeFreq = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'always' | 'hourly' | 'never';
import { getAllSectorSlugs } from '@/data/sectors-data';
import { getProjectsData } from '@/data/projects-data';
import { getNewsData, NewsItem } from '@/data/news-data';

// Dinamik ve kapsamlı sitemap oluşturucu - SEO iyileştirilmiş
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://karakucakgroup.com';
  const currentDate = new Date();
  
  // Dil varyantları için alternatif URL'ler
  const languages = ['tr', 'en'];
  
  // Temel sayfalar (Hem TR hem EN)
  const staticPages = ['', '/hakkimizda', '/iletisim', '/haberler', '/projeler'];
  const routes = [];
  
  // Her statik sayfa için dil varyantlarını ekle
  for (const lang of languages) {
    const langPrefix = lang === 'tr' ? '' : `/${lang}`;
    for (const route of staticPages) {
      routes.push({
        url: `${baseUrl}${langPrefix}${route}`,
        lastModified: currentDate,
        changeFrequency: route === '' ? 'daily' : 'weekly' as ChangeFreq,
        priority: route === '' ? 1 : 0.8,
      });
    }
  }
  
  // Sektör sayfaları - SEO için öncelik düzenlenmiş
  const sectorSlugs = getAllSectorSlugs();
  const sectorRoutes = [];
  
  for (const lang of languages) {
    const langPrefix = lang === 'tr' ? '' : `/${lang}`;
    for (const slug of sectorSlugs) {
      sectorRoutes.push({
        url: `${baseUrl}${langPrefix}/sektor/${slug}`,
        lastModified: currentDate,
        changeFrequency: 'monthly' as ChangeFreq,
        priority: 0.8,
      });
    }
  }
  
  // Proje sayfaları - Dinamik lastModified ile
  const projects = getProjectsData().projects;
  const projectRoutes = [];
  
  for (const lang of languages) {
    const langPrefix = lang === 'tr' ? '' : `/${lang}`;
    for (const project of projects) {
      projectRoutes.push({
        url: `${baseUrl}${langPrefix}/projeler/${project.slug}`,
        // Her proje için şimdiki tarihi kullan (projelerde updateDate tanımlı olmadığı için)
        lastModified: currentDate,
        changeFrequency: 'monthly' as ChangeFreq,
        priority: 0.7,
      });
    }
  }
  
  // Haber sayfaları - Yayınlanma tarihine göre lastModified
  const newsData = getNewsData();
  const newsRoutes = [];
  
  for (const lang of languages) {
    const langPrefix = lang === 'tr' ? '' : `/${lang}`;
    for (const news of newsData.news) {
      // Geçerli bir tarih olduğundan emin ol
      const pubDate = new Date(news.publishDate);
      const validDate = isNaN(pubDate.getTime()) ? currentDate : pubDate;
      
      newsRoutes.push({
        url: `${baseUrl}${langPrefix}/haberler/${news.slug}`,
        lastModified: validDate,
        // Haberler daha sık güncellenebilir
        changeFrequency: 'weekly' as ChangeFreq,
        // Yeni haberler daha yüksek öncelik
        priority: isRecent(validDate) ? 0.9 : 0.6,
      });
    }
  }
  
  return [...routes, ...sectorRoutes, ...projectRoutes, ...newsRoutes];
}

// Son 30 günde yayınlanan haberler için daha yüksek öncelik
function isRecent(date: Date): boolean {
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  return date >= thirtyDaysAgo;
}
