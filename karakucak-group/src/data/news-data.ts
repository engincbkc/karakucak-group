import newsData from './news.json';

export interface NewsCategory {
  label: string;
  color?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  publishDate: string;
  slug: string;
  content: string;
  relatedProjects?: string[];
  gallery?: Array<{url: string, alt: string}>;
}

export interface NewsData {
  tr: {
    categories: Record<string, NewsCategory>;
    news: NewsItem[];
  };
  en: {
    categories: Record<string, NewsCategory>;
    news: NewsItem[];
  };
}

// JSON dosyasından veri yükle
export function getNewsData(locale: string = 'tr'): { categories: Record<string, NewsCategory>, news: NewsItem[] } {
  try {
    const data = newsData as NewsData;
    
    // İstenen dil verilerine göre döndür, yoksa Türkçe verileri kullan
    const localeData = data[locale as keyof NewsData] || data.tr;
    
    return {
      categories: localeData.categories,
      news: localeData.news
    };
  } catch (error) {
    console.error('Haber verileri yüklenirken hata oluştu:', error);
    return { categories: {}, news: [] };
  }
}

// Belirli bir haberi slug'a göre getir
export function getNewsBySlug(slug: string, locale: string = 'tr'): NewsItem | null {
  try {
    const { news } = getNewsData(locale);
    return news.find(item => item.slug === slug) || null;
  } catch (error) {
    console.error('Haber bulunamadı:', error);
    return null;
  }
}

// Tüm haberlerin slug'larını getir
export function getAllNewsSlugs(): string[] {
  try {
    const { news } = getNewsData('tr');
    return news.map(item => item.slug || '');
  } catch (error) {
    console.error('Haber slug\'ları yüklenirken hata oluştu:', error);
    return [];
  }
}

// Belirli bir kategoriye ait haberleri getir
export function getNewsByCategory(category: string, locale: string = 'tr'): NewsItem[] {
  try {
    const { news } = getNewsData(locale);
    return news.filter(item => item.category === category);
  } catch (error) {
    console.error('Kategori haberleri yüklenirken hata oluştu:', error);
    return [];
  }
}

// En son haberleri getir
export function getLatestNews(count: number = 3, locale: string = 'tr'): NewsItem[] {
  try {
    const { news } = getNewsData(locale);
    return news
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .slice(0, count);
  } catch (error) {
    console.error('Son haberler yüklenirken hata oluştu:', error);
    return [];
  }
}
