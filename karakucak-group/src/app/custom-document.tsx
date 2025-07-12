'use client';

import React, { useEffect } from 'react';

/**
 * Custom document component to load service worker and handle PWA capabilities
 * Performance monitoring is now handled at the page level with PerformanceMonitor component
 */
export function CustomDocument() {
  useEffect(() => {
    // Mark the start of performance measurement
    if (typeof window !== 'undefined' && window.performance) {
      performance.mark('app-started');
    }
    
    // Load service worker registration script
    const script = document.createElement('script');
    script.src = '/register-sw.js';
    script.async = true;
    document.body.appendChild(script);
    
    // Performance optimization: Preload critical resources
    const preloadLinks = [
      { href: '/images/logo/logo.png', as: 'image' },
      { href: '/favicon.svg', as: 'image' }
    ];
    
    preloadLinks.forEach(link => {
      const linkElement = document.createElement('link');
      linkElement.rel = 'preload';
      linkElement.href = link.href;
      linkElement.as = link.as;
      document.head.appendChild(linkElement);
    });
    
    return () => {
      // Mark the end of app initialization for performance measurement
      if (typeof window !== 'undefined' && window.performance) {
        performance.mark('app-ready');
        performance.measure('app-initialization', 'app-started', 'app-ready');
      }
    };
  }, []);

  return null; // This component doesn't render anything
}
