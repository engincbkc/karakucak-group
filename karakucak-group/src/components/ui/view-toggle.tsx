"use client"

import React from "react"
import { Grid, Rows, Maximize, Minimize } from "lucide-react"
import { cn } from "@/lib/utils"

export type ViewMode = "grid" | "gallery" | "list"

interface ViewToggleProps {
  currentView: ViewMode
  onViewChange: (view: ViewMode) => void
  className?: string
}

export function ViewToggle({ currentView, onViewChange, className }: ViewToggleProps) {
  return (
    <div className={cn("flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-sm", className)}>
      <button
        onClick={() => onViewChange("grid")}
        className={cn(
          "p-2 rounded-md flex items-center justify-center transition-colors",
          currentView === "grid" 
            ? "bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400" 
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
        )}
        aria-label="Grid görünümü"
        title="Grid görünümü"
      >
        <Grid className="w-5 h-5" />
      </button>
      
      <button
        onClick={() => onViewChange("gallery")}
        className={cn(
          "p-2 rounded-md flex items-center justify-center transition-colors",
          currentView === "gallery" 
            ? "bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400" 
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
        )}
        aria-label="Galeri görünümü"
        title="Galeri görünümü"
      >
        <Maximize className="w-5 h-5" />
      </button>
      
      <button
        onClick={() => onViewChange("list")}
        className={cn(
          "p-2 rounded-md flex items-center justify-center transition-colors",
          currentView === "list" 
            ? "bg-gray-100 dark:bg-gray-700 text-blue-600 dark:text-blue-400" 
            : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"
        )}
        aria-label="Liste görünümü"
        title="Liste görünümü"
      >
        <Rows className="w-5 h-5" />
      </button>
    </div>
  )
}
