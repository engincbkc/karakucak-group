"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import { ViewMode } from "./view-toggle"
import { cn } from "@/lib/utils"

export type Project = {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  location: string
  year: string
  detailsLink?: string
}

interface ProjectCardProps {
  project: Project
  viewMode: ViewMode
  isDarkTheme?: boolean
  allTags: Record<string, {label: string, color?: string}>
  onTagClick?: (tagId: string) => void
  className?: string
}

export function ProjectCard({ 
  project, 
  viewMode, 
  isDarkTheme,
  allTags,
  onTagClick,
  className 
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  // Farklu0131 gu00f6ru00fcnu00fcm modlaru0131 iu00e7in su0131nu0131f du00fczenleri
  const containerClasses = {
    grid: "bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex flex-col h-full",
    gallery: "relative rounded-lg overflow-hidden shadow-xl h-[400px] group",
    list: "bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg flex h-40 sm:h-52 md:h-64"
  }
  
  // Etiket renklerini belirle
  const getTagStyle = (tagId: string) => {
    const tag = allTags[tagId]
    if (!tag?.color) {
      return "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
    }
    return tag.color
  }

  // Galeri modu için overlay ve animasyon
  if (viewMode === "gallery") {
    return (
      <motion.div 
        className={cn(containerClasses.gallery, className)}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Resim */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Eu011fimli gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
        
        {/* Hover durumunda gu00f6ru00fcnen iu00e7erik */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl md:text-2xl font-bold group-hover:text-white transition-colors">
              {project.title}
            </h3>
            <span className="text-sm text-white/80">{project.year}</span>
          </div>
          
          <div className="flex items-center gap-1 text-sm text-white/80 mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {project.location}
          </div>
          
          <motion.div 
            className="flex flex-wrap gap-2 mb-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            transition={{ duration: 0.3 }}
          >
            {project.tags.map((tagId) => (
              <button 
                key={tagId} 
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  onTagClick?.(tagId)
                }}
                className="px-2 py-1 text-xs font-medium rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              >
                {allTags[tagId]?.label || tagId}
              </button>
            ))}
          </motion.div>
          
          <motion.div 
            className="flex justify-end items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            
            {project.detailsLink && (
              <Link 
                href={project.detailsLink}
                className="inline-flex items-center px-3 py-1.5 bg-white/90 text-gray-900 rounded-lg hover:bg-white transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Detaylar
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </Link>
            )}
          </motion.div>
        </div>
      </motion.div>
    )
  }
  
  // Liste görünüm modu
  if (viewMode === "list") {
    return (
      <motion.div 
        className={cn(containerClasses.list, className)}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Sol taraf - Resim */}
        <div className="relative w-1/3 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
        
        {/* Sağ taraf - İçerik */}
        <div className="flex-1 p-4 flex flex-col">
          <div className="flex justify-between items-start mb-1">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
            <div className="text-sm text-gray-500 dark:text-gray-400">{project.year}</div>
          </div>
          
          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mb-1">
            <span>{project.year}</span>
            <span className="mx-1.5">&bull;</span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {project.location}
            </span>
          </div>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 line-clamp-2 mb-2 flex-grow">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tags.slice(0, 3).map((tagId) => (
              <button 
                key={tagId} 
                onClick={(e) => {
                  e.preventDefault()
                  onTagClick?.(tagId)
                }}
                className={`px-2 py-0.5 text-xs font-medium rounded-full ${getTagStyle(tagId)}`}
              >
                {allTags[tagId]?.label || tagId}
              </button>
            ))}
            {project.tags.length > 3 && (
              <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300">
                +{project.tags.length - 3}
              </span>
            )}
          </div>
          
          {project.detailsLink && (
            <div className="mt-auto">
              <Link 
                href={project.detailsLink}
                className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Detayları Görüntüle
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    )
  }
  
  // Varsayılan grid görünüm modu
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(containerClasses.grid, className)}
    >
      <div className="relative overflow-hidden group h-64">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
          <div className="text-sm text-gray-500 dark:text-gray-400">{project.year}</div>
        </div>
        
        <div className="text-sm text-gray-500 dark:text-gray-400 mb-2.5">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {project.location}
          </span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tagId) => (
            <button 
              key={tagId} 
              onClick={(e) => {
                e.preventDefault()
                onTagClick?.(tagId)
              }}
              className={`px-2 py-1 text-xs font-medium rounded-full ${getTagStyle(tagId)}`}
            >
              {allTags[tagId]?.label || tagId}
            </button>
          ))}
        </div>
        
        {project.detailsLink && (
          <Link 
            href={project.detailsLink}
            className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mt-auto"
          >
            Detayları Görüntüle
            <ExternalLink className="w-4 h-4 ml-1" />
          </Link>
        )}
      </div>
    </motion.div>
  )
}
