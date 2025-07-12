'use client';

import { useEffect } from 'react';

/**
 * Karakucak Group için performans izleme bileşeni
 * Core Web Vitals metriklerini izler ve raporlar
 */
export function PerformanceMonitor({ pageName }: { pageName: string }) {
  useEffect(() => {
    // Sadece tarayıcıda çalıştır
    if (typeof window === 'undefined' || !window.performance) return;

    // Sayfa görüntüleme zamanını işaretle
    performance.mark(`${pageName}-view-start`);

    // Web Vitals metrikleri için
    const loadWebVitals = async () => {
      try {
        // Dinamik import - sadece istemci tarafında çalışır
        const webVitals = await import('web-vitals');

        // Metrikleri raporlama fonksiyonu
        const reportWebVital = (metric: any) => {
          // Değeri formatla (CLS için ondalık, diğerleri için ms)
          const formattedValue = metric.name === 'CLS' 
            ? metric.value.toFixed(3) 
            : Math.round(metric.value) + 'ms';
          
          console.log(`📊 Web Vital: ${metric.name}: ${formattedValue}`);
          
          // Analytics'e göndermek isterseniz:
          // if (process.env.NODE_ENV === 'production') {
          //   // sendToAnalytics(metric);
          // }
        };

        // Tüm metrikleri izle
        webVitals.onCLS(reportWebVital);
        webVitals.onFID(reportWebVital);
        webVitals.onLCP(reportWebVital);
        webVitals.onFCP(reportWebVital);
        webVitals.onTTFB(reportWebVital);
      } catch (error) {
        console.error('Web Vitals yüklenemedi:', error);
      }
    };

    // Web Vitals ölçümünü başlat
    loadWebVitals();

    // Sayfa yükleme süresini ölç
    const measurePageLoad = () => {
      performance.mark(`${pageName}-view-end`);
      
      try {
        performance.measure(
          `${pageName}-view-duration`,
          `${pageName}-view-start`,
          `${pageName}-view-end`
        );
        
        // Ölçüm sonucunu göster
        const measures = performance.getEntriesByName(`${pageName}-view-duration`);
        if (measures.length > 0) {
          console.log(`🔍 ${pageName} sayfası yükleme süresi: ${Math.round(measures[0].duration)}ms`);
        }
      } catch (error) {
        console.error('Performans ölçümü alınırken hata oluştu:', error);
      }
    };

    // Sayfa yüklendiğinde ölçümü tamamla
    if (document.readyState === 'complete') {
      measurePageLoad();
    } else {
      window.addEventListener('load', measurePageLoad);
    }

    // Cleanup
    return () => {
      window.removeEventListener('load', measurePageLoad);
    };
  }, [pageName]);

  // Bu bileşen görsel olarak hiçbir şey render etmez
  return null;
}