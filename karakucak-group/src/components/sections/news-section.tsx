"use client"

import React from "react"
import { LatestNews } from "@/components/sections/latest-news"

export function NewsSection() {
  return (
    <LatestNews 
      title="Bizden Haberler" 
      subtitle="Karakucak Group'un son gelişmeleri, yatırımları ve başarıları hakkında güncel haberler"
      count={3}
      showViewAllButton={true}
      viewAllLink="/haberler"
    />
  )
}
