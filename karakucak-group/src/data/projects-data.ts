import { Project } from "@/components/ui/project-card"
import projectsData from './projects.json';
import projectTagsData from './projecttags.json';

export interface TagInfo {
  label: string;
  color?: string;
}

export interface ProjectData {
  tr: {
    tags: Record<string, TagInfo>;
    projects: Project[];
  };
  en: {
    tags: Record<string, TagInfo>;
    projects: Project[];
  };
}

// JSON dosyasından veri yükle
export function getProjectsData(locale: string = 'tr'): { tags: Record<string, TagInfo>, projects: Project[] } {
  try {
    // Projeleri ve etiketleri ayrı dosyalardan yükle
    const projectData = projectsData as any;
    const tagData = projectTagsData as any;
    
    // İstenen dil verilerine göre döndür, yoksa Türkçe verileri kullan
    const localeProjects = projectData[locale] ? projectData[locale].projects : projectData.tr.projects;
    const localeTags = tagData[locale] || tagData.tr;
    
    // Her proje için detailsLink ekle
    const projectsWithLinks = localeProjects.map((project: Project) => ({
      ...project,
      detailsLink: `/mnk-mimarlik/projeler/${project.slug}`
    }));
    
    return {
      tags: localeTags,
      projects: projectsWithLinks
    };
  } catch (error) {
    console.error('Proje verileri yüklenirken hata oluştu:', error);
    return { tags: {}, projects: [] };
  }
}

// Belirli bir projeyi slug'a göre getir
export function getProjectBySlug(slug: string, locale: string = 'tr'): Project | null {
  try {
    const { projects } = getProjectsData(locale);
    return projects.find(project => project.slug === slug) || null;
  } catch (error) {
    console.error('Proje bulunamadı:', error);
    return null;
  }
}

// Tüm projelerin slug'larını getir
export function getAllProjectSlugs(): string[] {
  try {
    const { projects } = getProjectsData('tr');
    return projects.map(project => project.slug || '');
  } catch (error) {
    console.error('Proje slug\'ları yüklenirken hata oluştu:', error);
    return [];
  }
}
