"use client"

import React, { ReactNode } from "react"
import Image from "next/image"
import { motion, useInView, useAnimation } from "framer-motion"

interface SectorPageProps {
  title: string
  description: string
  bgImage: string
  children: ReactNode
}

export default function SectorPage({ title, description, bgImage, children }: SectorPageProps) {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={bgImage}
            alt={title}
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl mb-8">{description}</p>
          </div>
        </div>
      </section>

      {/* Page Content */}
      {children}
    </div>
  )
}
