'use client';

import React, { useEffect, useState } from 'react';
import { useIntersectionObserver } from '@/hooks/use-intersection-observer';

interface LazyLoadProps {
  children: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  placeholder?: React.ReactNode;
  className?: string;
}

/**
 * LazyLoad component that only renders its children when it becomes visible in the viewport
 * Improves initial page load performance and Core Web Vitals
 */
export function LazyLoad({
  children,
  threshold = 0.1,
  rootMargin = '200px',
  placeholder,
  className = '',
}: LazyLoadProps) {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ 
    threshold, 
    rootMargin,
    triggerOnce: true,
  });
  
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Use state to track actual rendering with a small delay for smooth transitions
  useEffect(() => {
    if (isVisible && !isLoaded) {
      const timer = setTimeout(() => {
        setIsLoaded(true);
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [isVisible, isLoaded]);
  
  // If we have SSR, we should already show content 
  // This makes the component work properly with Next.js SSR
  useEffect(() => {
    // Check if we're running in browser and not in server-side rendering
    if (typeof window !== 'undefined') {
      // If above the fold (likely to be in initial viewport), load immediately
      if (rootMargin === '100%') {
        setIsLoaded(true);
      }
    }
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {isLoaded ? children : placeholder || (
        <div className="w-full h-48 bg-gray-100 animate-pulse rounded-lg" />
      )}
    </div>
  );
}
