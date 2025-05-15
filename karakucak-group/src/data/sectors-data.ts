// src/data/sectors-data.ts
import sectorsData from './sectors.json';

export interface SectorService {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  items: Array<{
    icon: string;
    title: string;
  }>;
}

export interface SectorFeature {
  title: string;
  description1: string;
  description2: string;
  featureImage: string;
  buttonText: string;
  buttonLink: string;
}

export interface SectorProjects {
  showProjects: boolean;
  title: string;
  subtitle: string;
  viewAllLink: string;
  viewAllText: string;
  itemsPerPage: number;
  filter: string[];
}

export interface SectorCta {
  title: string;
  description: string;
  buttons: Array<{
    text: string;
    href: string;
    isPrimary?: boolean;
  }>;
}

export interface Sector {
  id: string;
  title: string;
  description: string;
  backgroundImage: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  overlayColor?: string;
  services: SectorService;
  feature: SectorFeature;
  projects: SectorProjects;
  cta: SectorCta;
}

export function getSectorData(locale: string = 'tr'): {
  sectors: Sector[];
} {
  try {
    const data = sectorsData as any;
    const localeData = data[locale] || data.tr;
    
    return localeData;
  } catch (error) {
    console.error("Error loading sector data:", error);
    return { sectors: [] };
  }
}

export function getSectorBySlug(slug: string, locale: string = 'tr'): Sector | null {
  try {
    const data = getSectorData(locale);
    const sector = data.sectors.find(sector => sector.id === slug);
    
    if (!sector) {
      return null;
    }
    
    return sector;
  } catch (error) {
    console.error(`Error fetching sector with slug ${slug}:`, error);
    return null;
  }
}

export function getAllSectorSlugs(): string[] {
  try {
    const data = getSectorData('tr');
    return data.sectors.map(sector => sector.id);
  } catch (error) {
    console.error("Error getting all sector slugs:", error);
    return [];
  }
}
