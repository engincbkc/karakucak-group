'use client';

import { useState, useEffect, useRef, MutableRefObject } from 'react';

interface IntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

/**
 * Custom hook to observe when an element enters the viewport
 * Useful for implementing lazy loading of components and images
 */
export function useIntersectionObserver<T extends HTMLElement>(
  options: IntersectionObserverOptions = {}
): [MutableRefObject<T | null>, boolean] {
  const {
    threshold = 0.1,
    rootMargin = '0px',
    triggerOnce = true,
  } = options;
  
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isElementVisible = entry.isIntersecting;
        setIsVisible(isElementVisible);
        
        // Unobserve after element becomes visible if triggerOnce is true
        if (isElementVisible && triggerOnce && element) {
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);
  
  return [elementRef, isVisible];
}

// Type-safe wrapper for elements that need ref forwarding
export function useIntersectionObserverWithForwardedRef<T extends HTMLElement>(
  forwardedRef: React.ForwardedRef<T>,
  options: IntersectionObserverOptions = {}
): [MutableRefObject<T | null>, boolean] {
  const [internalRef, isVisible] = useIntersectionObserver<T>(options);
  
  useEffect(() => {
    if (!forwardedRef) return;
    
    if (typeof forwardedRef === 'function') {
      forwardedRef(internalRef.current);
    } else {
      forwardedRef.current = internalRef.current;
    }
  }, [forwardedRef, internalRef.current]);
  
  return [internalRef, isVisible];
}
