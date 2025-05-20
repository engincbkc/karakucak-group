// src/data/company-info-data.ts
import companyInfoData from './company-info.json';

export interface CompanyTheme {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
}

export interface Company {
  id: string;
  name: string;
  sector: string;
  sectorName: string;
  slogan: string;
  foundedYear: string;
  description: string;
  featured: boolean;
}

export interface CompanyInfo {
  companyName: string;
  foundedYear: string;
  theme: CompanyTheme;
  companies: Company[];
}

export function getCompanyInfo(locale: string = 'tr'): CompanyInfo {
  try {
    const data = companyInfoData as any;
    const localeData = data[locale] || data.tr;
    
    return localeData;
  } catch (error) {
    console.error("Error loading company info data:", error);
    return {
      companyName: 'Karakucak Group',
      foundedYear: '1997',
      theme: {
        primary: 'amber-600',
        secondary: 'amber-700',
        accent: 'orange-500',
        background: 'gray-50'
      },
      companies: []
    };
  }
}

export function getCompanyById(companyId: string, locale: string = 'tr'): Company | null {
  try {
    const data = getCompanyInfo(locale);
    const company = data.companies.find(company => company.id === companyId);
    
    if (!company) {
      return null;
    }
    
    return company;
  } catch (error) {
    console.error(`Error fetching company with id ${companyId}:`, error);
    return null;
  }
}

export function getCompaniesBySector(sectorId: string, locale: string = 'tr'): Company[] {
  try {
    const data = getCompanyInfo(locale);
    return data.companies.filter(company => company.sector === sectorId);
  } catch (error) {
    console.error(`Error fetching companies for sector ${sectorId}:`, error);
    return [];
  }
}

export function getFeaturedCompanies(locale: string = 'tr'): Company[] {
  try {
    const data = getCompanyInfo(locale);
    return data.companies.filter(company => company.featured);
  } catch (error) {
    console.error("Error getting featured companies:", error);
    return [];
  }
}
