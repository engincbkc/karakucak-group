/**
 * Core Web Vitals reporting utility
 * 
 * This module provides functions to measure and report Core Web Vitals metrics
 * which are important for SEO and user experience:
 * - LCP (Largest Contentful Paint)
 * - FID (First Input Delay)
 * - CLS (Cumulative Layout Shift)
 * - FCP (First Contentful Paint)
 * - TTFB (Time to First Byte)
 */

import { useEffect } from 'react';

// Type definitions for web-vitals library
type MetricCallback = (metric: { name: string; id: string; value: number; delta: number }) => void;

// Web Vitals metric names
type MetricName = 'LCP' | 'FID' | 'CLS' | 'FCP' | 'TTFB';

// Structure for reporting metrics
interface VitalsMetric {
  id: string;
  name: MetricName;
  value: number;
  delta: number;
}

// Safely import web-vitals without breaking SSR or CSR
const getWebVitals = async () => {
  if (typeof window !== 'undefined') {
    try {
      return await import('web-vitals');
    } catch (err) {
      console.error('Web Vitals yüklenemedi:', err);
      return null;
    }
  }
  return null;
};

// Function to report metrics to analytics or console
function reportMetric(metric: VitalsMetric) {
  // Değerleri yuvarlayıp daha okunaklı hale getir
  const formattedValue = metric.name === 'CLS' 
    ? metric.value.toFixed(3) 
    : Math.round(metric.value) + 'ms';
  
  // Log to console in development
  console.log(` Web Vital: ${metric.name}: ${formattedValue}`);
  
  // Send to analytics service in production
  if (process.env.NODE_ENV === 'production') {
    // Burada Google Analytics veya kendi API'nize gönderebilirsiniz
    // sendToAnalytics(metric);
  }
}

/**
 * Hook to automatically measure and report Core Web Vitals metrics
 */
export function useWebVitals() {
  useEffect(() => {
    // SSR kontrolü
    if (typeof window === 'undefined') return;

    const loadAndInitializeWebVitals = async () => {
      const webVitalsModule = await getWebVitals();
      
      if (!webVitalsModule) return;
      
      const { getCLS, getFID, getLCP, getFCP, getTTFB } = webVitalsModule;

      // Create a uniform callback for all metrics
      const handleMetric: MetricCallback = (metric) => {
        reportMetric(metric as VitalsMetric);
      };

      // Register all metrics
      getCLS(handleMetric);
      getFID(handleMetric);
      getLCP(handleMetric);
      getFCP(handleMetric);
      getTTFB(handleMetric);
    };

    // Initialize metrics collection
    loadAndInitializeWebVitals().catch(err => {
      console.error('Web Vitals başlatılamadı:', err);
    });
  }, []);
}

/**
 * Helper to determine if the browser is supporting the Performance API
 */
export function isPerformanceSupported() {
  return (
    typeof window !== 'undefined' &&
    window.performance &&
    typeof window.performance.getEntriesByType === 'function' &&
    typeof window.performance.mark === 'function'
  );
}

/**
 * Measures time between two named points in code
 */
export function measurePerformance(metricName: string, startMark: string, endMark: string) {
  if (!isPerformanceSupported()) return;
  
  try {
    performance.measure(metricName, startMark, endMark);
    const measures = performance.getEntriesByName(metricName, 'measure');
    const latestMeasure = measures[measures.length - 1];
    
    if (process.env.NODE_ENV !== 'production') {
      console.log(`[Performance] ${metricName}: ${latestMeasure?.duration.toFixed(2)}ms`);
    }
    
    return latestMeasure?.duration;
  } catch (e) {
    console.error('Error measuring performance:', e);
    return null;
  }
}
