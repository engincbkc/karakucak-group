import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects-data'
import ProjectDetail from '@/components/project-detail'
import { generateProjectMetadata } from '@/app/metadata'

// Tüm proje slug'larını alma fonksiyonu - dinamik statik yollar üretimi için
export function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

// Bu fonksiyon sayfa meta verilerini dinamik olarak üretir
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Proje Bulunamadı',
      description: 'Aradığınız proje bulunamadı.'
    }
  }
  
  // Daha gelişmiş metadata oluşturucu fonksiyonunu kullan
  return generateProjectMetadata(
    project.title,
    project.description || 'MNK Mimarlık tarafından tasarlanan ve uygulanan proje',
    project.image,
    project.tags || []
  )
}

// Proje detay sayfası bileşeni
export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }
  
  // Proje için JSON-LD yapılandırılmış veri
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    image: project.image,
    creator: {
      '@type': 'Organization',
      name: 'MNK Mimarlık',
      url: 'https://karakucakgroup.com/mnk-mimarlik',
    },
    datePublished: project.year || new Date().getFullYear().toString(),
    keywords: project.tags?.join(', '),
  }
  
  return (
    <>
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProjectDetail project={project} />
    </>
  )
}

