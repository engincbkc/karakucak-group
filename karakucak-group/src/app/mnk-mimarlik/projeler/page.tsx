'use client'

import React from 'react'
import { ProjectsShowcase } from '@/components/sections/projects-showcase'
import { useTheme } from '@/lib/theme-context'

/* Client component'lerde metadata export edilemez - bunun için ayrı bir metadata.ts dosyası oluşturulabilir */

export default function ProjectsPage() {
  const { themeClasses } = useTheme();
  
  return (
    <div className={themeClasses("bg-white", "bg-gray-900")}>
      {/* Hero Bölümü */}
      <div className={`relative py-24 ${themeClasses("bg-gray-50", "bg-gray-800")}`}>
        <div className="container mx-auto px-4 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold ${themeClasses("text-gray-900", "text-white")} mb-6`}>
            Projelerimiz
          </h1>
          <p className={`text-xl ${themeClasses("text-gray-600", "text-gray-300")} max-w-3xl mx-auto`}>
            MNK Mimarlık'ın imzasını taşıyan yenilikçi ve ödüllü mimari projelerimizi keşfedin.
          </p>
        </div>
      </div>
      
      {/* Projeler Showcae Bileşeni */}
      <ProjectsShowcase 
        title="Tüm Projelerimiz" 
        subtitle="Farklı ölçeklerde ve kapsamlarda, her biri özgün ve sürdürülebilir yaklaşımla tasarlanmış projelerimiz"
        limitProjects={0}
        showViewAllButton={false}
        showFilters={true}
      />
    </div>
  )
}
