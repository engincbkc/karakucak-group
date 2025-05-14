"use client"

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export type ProjectTag = {
  id: string
  label: string
  color?: string
}

interface ProjectFilterProps {
  tags: ProjectTag[]
  selectedTags: string[]
  onTagSelect: (tagId: string) => void
  className?: string
  showTagCount?: boolean
  projectCounts?: Record<string, number>
}

export function ProjectFilter({
  tags,
  selectedTags,
  onTagSelect,
  className,
  showTagCount = false,
  projectCounts = {}
}: ProjectFilterProps) {
  // Etiket renklerini belirle (eğer color değeri verilmemişse)
  const getDefaultTagColor = (index: number) => {
    const colors = [
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
      "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
      "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300"
    ]
    return colors[index % colors.length]
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn("mb-8", className)}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Filtrele</h3>
        {selectedTags.length > 0 && (
          <button 
            onClick={() => selectedTags.forEach(tag => onTagSelect(tag))}
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            Filtreleri Temizle
          </button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => {
          const isSelected = selectedTags.includes(tag.id)
          const tagColor = tag.color || getDefaultTagColor(index)
          const count = projectCounts[tag.id] || 0
          
          return (
            <button
              key={tag.id}
              onClick={() => onTagSelect(tag.id)}
              className={cn(
                "px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                "hover:ring-2 hover:ring-offset-1 hover:ring-offset-white dark:hover:ring-offset-gray-900",
                isSelected 
                  ? `${tagColor} ring-2 ring-offset-1 ring-offset-white dark:ring-offset-gray-900` 
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              )}
            >
              {tag.label}
              {showTagCount && count > 0 && (
                <span className="ml-1.5 px-1.5 py-0.5 text-xs rounded-full bg-white/20 dark:bg-black/20">
                  {count}
                </span>
              )}
            </button>
          )
        })}
      </div>
    </motion.div>
  )
}
