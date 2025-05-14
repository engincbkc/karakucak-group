"use client"

import React, { useState, useEffect, useMemo } from "react"
import { motion } from "framer-motion"
import { useTheme } from "@/lib/theme-context"
import { ProjectFilter, type ProjectTag } from "@/components/ui/project-filter"
import { ViewToggle, type ViewMode } from "@/components/ui/view-toggle"
import { ProjectCard } from "@/components/ui/project-card"
import { getProjectsData } from "@/data/projects-data"
import { ChevronLeft, ChevronRight, Search, Filter, X } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * ProjectsShowcase bileşeni, projeleri farklı görünüm modlarında göstermek ve etiketlere göre filtrelemek için kullanılır.
 */
export interface ProjectsShowcaseProps {
  title?: string
  subtitle?: string
  isDarkTheme?: boolean
  limitProjects?: number
  showViewAllButton?: boolean
  showFilters?: boolean
  viewAllLink?: string
  className?: string
  defaultViewMode?: ViewMode
}

export function ProjectsShowcase({ 
  title = "Öne Çıkan Projelerimiz", 
  subtitle = "MNK Mimarlık'ın imzasını taşıyan yenilikçi ve ödüllü projelerimizden bazıları", 
  isDarkTheme: propIsDarkTheme,
  limitProjects = 0,
  showViewAllButton = true,
  showFilters = true,
  viewAllLink = "/mnk-mimarlik/projeler",
  className,
  defaultViewMode = "grid"
}: ProjectsShowcaseProps) {
  // Tema context'inden dark tema durumunu al
  const { isDarkTheme: contextIsDarkTheme, themeClasses } = useTheme()
  const isDarkTheme = propIsDarkTheme !== undefined ? propIsDarkTheme : contextIsDarkTheme
  
  // Filtre ve görünüm modu state'leri
  const [viewMode, setViewMode] = useState<ViewMode>(defaultViewMode)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  
  // Sayfa boyutunu görünüm moduna göre ayarla
  const getPageSize = () => {
    switch (viewMode) {
      case "grid": return 6
      case "gallery": return 3
      case "list": return 4
      default: return 6
    }
  }
  
  // Proje verilerini ve etiketleri yükle
  const { projects: projectsData, tags: projectTags } = useMemo(() => {
    return getProjectsData()
  }, [])
  
  // Filtrelenmiş projeleri hesapla
  const filteredProjects = useMemo(() => {
    // Önce arama sorgusuyla filtrele
    let filtered = projectsData.filter((project) => {
      if (!searchQuery) return true
      
      const query = searchQuery.toLowerCase()
      return (
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) || 
        project.location.toLowerCase().includes(query) || 
        (projectTags && project.tags.some((tag) => projectTags[tag]?.label.toLowerCase().includes(query)))
      )
    })
    
    // Sonra seçili etiketlere göre filtrele
    if (selectedTags.length > 0) {
      filtered = filtered.filter((project) => 
        selectedTags.every((tag) => project.tags.includes(tag))
      )
    }
    
    // Limitlendirilmiş projeleri döndür (eğer limit belirtilmişse)
    return limitProjects > 0 ? filtered.slice(0, limitProjects) : filtered
  }, [searchQuery, selectedTags, limitProjects, projectsData, projectTags])

  // Sayfalama için gerekli hesaplamalar
  const projectsPerPage = getPageSize()
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage)
  
  // Mevcut sayfada gösterilecek projeler
  const paginatedProjects = filteredProjects.slice(
    currentPage * projectsPerPage, 
    (currentPage * projectsPerPage) + projectsPerPage
  )
  
  // Sayfa değiştirme fonksiyonları
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(prev => prev + 1)
    }
  }
  
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1)
    }
  }
  
  // Eğer filtreleme veya arama yapıldığında ilk sayfaya dön
  useEffect(() => {
    setCurrentPage(0)
  }, [selectedTags, searchQuery, viewMode])
  
  // Etiket seçme/kaldırma işlemi
  const handleTagSelect = (tagId: string) => {
    setSelectedTags(prev => {
      if (prev.includes(tagId)) {
        return prev.filter(t => t !== tagId)
      } else {
        return [...prev, tagId]
      }
    })
  }
  
  // Benzersiz etiketleri çıkar ve tag listeleri oluştur
  const availableTags = useMemo(() => {
    // projectTags null veya undefined olabilir, bu duruma karşı kontrol yap
    if (!projectTags) return [];
    
    // projectTags nesnesini bir dizi etiket nesnesine dönüştür
    return Object.entries(projectTags).map(([id, tag]) => ({
      id,
      label: tag.label,
      color: tag.color
    }))
  }, [projectTags])
  
  // Etiket başına proje sayısını hesapla
  const tagProjectCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    
    // Arama sorgusuna göre filtrelenmiş projeler için etiket sayılarını hesapla
    const searchFiltered = projectsData.filter((project) => {
      if (!searchQuery) return true
      
      const query = searchQuery.toLowerCase()
      return (
        project.title.toLowerCase().includes(query) || 
        project.description.toLowerCase().includes(query) || 
        project.location.toLowerCase().includes(query)
      )
    })
    
    // Her etiket için kaç projede kullanıldığını bul
    searchFiltered.forEach((project) => {
      project.tags.forEach((tagId) => {
        if (!counts[tagId]) counts[tagId] = 0
        counts[tagId]++
      })
    })
    
    return counts
  }, [searchQuery, projectsData])

  return (
    <section className={cn(
      `py-16 ${themeClasses("bg-gray-50", "bg-gray-800")}`, 
      className
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Başlık ve alt başlık */}
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            {title && (
              <h2 className={`text-3xl font-bold ${themeClasses("text-gray-900", "text-white")} mb-4`}>
                {title}
              </h2>
            )}
            {subtitle && (
              <p className={`text-lg ${themeClasses("text-gray-600", "text-gray-300")} max-w-3xl mx-auto`}>
                {subtitle}
              </p>
            )}
          </motion.div>
        )}

        {/* Kontrol Paneli: Arama, Filtreler ve Görünüm Modu */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          {/* Arama */}
          <div className="relative w-full sm:w-auto sm:min-w-[250px]">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Projelerde ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 pl-10 pr-4 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filtreler ve Görünüm Modu Kontrolleri */}
          <div className="flex items-center gap-3 self-end sm:self-auto">
            {/* Filtre Butonu (Mobil için) */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center gap-2 py-2 px-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-200"
              >
                <Filter className="w-4 h-4" />
                {selectedTags.length > 0 && (
                  <span className="flex items-center justify-center w-5 h-5 bg-blue-500 text-white text-xs rounded-full">
                    {selectedTags.length}
                  </span>
                )}
              </button>
            </div>
            
            {/* Görünüm Modu Değiştirici */}
            <ViewToggle currentView={viewMode} onViewChange={setViewMode} />
          </div>
        </div>
        
        {/* Filtreler (Desktop) */}
        {showFilters && (
          <div className="hidden sm:block mb-8">
            <ProjectFilter
              tags={availableTags}
              selectedTags={selectedTags}
              onTagSelect={handleTagSelect}
              showTagCount
              projectCounts={tagProjectCounts}
            />
          </div>
        )}
        
        {/* Filtreler (Mobil) */}
        {showFilters && isFilterOpen && (
          <div className="sm:hidden mb-8">
            <ProjectFilter
              tags={availableTags}
              selectedTags={selectedTags}
              onTagSelect={handleTagSelect}
              showTagCount
              projectCounts={tagProjectCounts}
            />
          </div>
        )}

        {/* Sonuç Sayısı */}
        {(selectedTags.length > 0 || searchQuery) && (
          <div className="mb-6 text-sm text-gray-500 dark:text-gray-400">
            <span>{filteredProjects.length} proje bulundu</span>
            {(selectedTags.length > 0 || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedTags([])
                  setSearchQuery("")
                }}
                className="ml-2 text-blue-500 hover:underline"
              >
                Filtreleri Temizle
              </button>
            )}
          </div>
        )}

        {/* Projeler Görünümü */}
        {paginatedProjects.length > 0 ? (
          <div className={cn(
            viewMode === "grid" && "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            viewMode === "gallery" && "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8",
            viewMode === "list" && "flex flex-col space-y-6"
          )}>
            {paginatedProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                viewMode={viewMode}
                isDarkTheme={isDarkTheme}
                allTags={projectTags}
                onTagClick={handleTagSelect}
                className="h-full"
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="w-16 h-16 mb-4 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Proje Bulunamadı</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
              Arama kriterlerinize uygun proje bulunamadı. Lütfen farklı anahtar kelimeler deneyin veya filtreleri temizleyin.
            </p>
            <button
              onClick={() => {
                setSelectedTags([])
                setSearchQuery("")
              }}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        )}
        
        {/* Sayfalama */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-10 space-x-4">
            <button 
              onClick={prevPage}
              disabled={currentPage === 0}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Önceki sayfa"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            </button>
            
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {currentPage + 1} / {totalPages}
            </div>
            
            <button 
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className="p-2 rounded-full bg-white dark:bg-gray-700 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Sonraki sayfa"
            >
              <ChevronRight className="w-6 h-6 text-gray-700 dark:text-gray-200" />
            </button>
          </div>
        )}
        
        {/* Tümünü Görüntüle Butonu */}
        {showViewAllButton && !limitProjects && (
          <div className="flex justify-center mt-10">
            <a 
              href={viewAllLink} 
              className="px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
            >
              Tüm Projeleri Görüntüle
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
