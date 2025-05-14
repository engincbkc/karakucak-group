import { notFound } from 'next/navigation'
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects-data'
import ProjectDetail from '@/components/project-detail'

// Tüm proje slug'larını alma fonksiyonu - dinamik statik yollar üretimi için
export function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

// Bu fonksiyon sayfa meta verilerini dinamik olarak üretir
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Proje Bulunamadı',
      description: 'Aradığınız proje bulunamadı.'
    }
  }
  
  return {
    title: `${project.title} | MNK Mimarlık`,
    description: project.description,
    openGraph: {
      images: [{ url: project.image }],
    },
  }
}

// Proje detay sayfası bileşeni
export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    notFound()
  }
  
  return <ProjectDetail project={project} />
}

