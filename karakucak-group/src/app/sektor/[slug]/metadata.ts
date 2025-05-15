import { Metadata } from 'next';
import { getSectorBySlug, getAllSectorSlugs } from '@/data/sectors-data';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // Get sector data based on slug
  const sector = getSectorBySlug(params.slug);
  
  // If sector not found, return basic metadata
  if (!sector) {
    return {
      title: 'Sektör Bulunamadı | Karakucak Group',
      description: 'Aradığınız sektör sayfası bulunamadı.',
    };
  }

  return {
    title: `${sector.title} | Karakucak Group`,
    description: sector.description,
    openGraph: {
      title: `${sector.title} | Karakucak Group`,
      description: sector.description,
      images: [{ url: sector.backgroundImage, width: 1200, height: 630, alt: sector.title }],
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${sector.title} | Karakucak Group`,
      description: sector.description,
      images: [sector.backgroundImage],
    },
    alternates: {
      canonical: `https://karakucakgroup.com/sektor/${params.slug}`,
    },
  };
}

// Export dynamicParams as false to return a 404 for paths not returned by generateStaticParams
export const dynamicParams = false;
