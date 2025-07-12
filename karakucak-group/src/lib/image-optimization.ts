// src/lib/image-optimization.ts
import { ImageProps } from 'next/image';

/**
 * Optimize image loading with appropriate size and quality attributes
 * @param priority Whether the image should be prioritized for loading
 * @param type Image type (hero, content, thumbnail, icon)
 */
export function getOptimizedImageProps(
  priority: boolean = false,
  type: 'hero' | 'content' | 'thumbnail' | 'icon' = 'content'
): Partial<ImageProps> {
  // Base configuration
  const baseConfig: Partial<ImageProps> = {
    priority,
    loading: priority ? 'eager' : 'lazy',
  };
  
  // Type-specific configurations
  switch (type) {
    case 'hero':
      return {
        ...baseConfig,
        quality: 85,
        sizes: '100vw',
        placeholder: 'blur',
        blurDataURL: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAFeAJc4yT5jgAAAABJRU5ErkJggg==', // Light blue placeholder
        className: 'object-cover',
      };
      
    case 'content':
      return {
        ...baseConfig,
        quality: 80,
        sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
        className: 'object-cover',
      };
      
    case 'thumbnail':
      return {
        ...baseConfig,
        quality: 70,
        sizes: '(max-width: 640px) 50vw, 33vw',
        className: 'object-cover',
      };
      
    case 'icon':
      return {
        ...baseConfig,
        quality: 75,
        sizes: '96px',
        className: 'object-contain',
      };
      
    default:
      return baseConfig;
  }
}

/**
 * Generate srcSet attribute value for responsive images when not using Next/Image
 * @param imagePath Base path of the image
 * @param widths Array of widths to include in srcSet
 * @param format Image format (webp is recommended for best performance)
 */
export function generateResponsiveSrcSet(
  imagePath: string,
  widths: number[] = [320, 640, 768, 1024, 1280, 1536, 1920],
  format: 'webp' | 'jpg' | 'png' | 'avif' = 'webp'
): string {
  // For external images, return as-is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // Handle local images - optimize for responsive loading
  const basePath = imagePath.split('.').slice(0, -1).join('.');
  
  return widths
    .map(width => `${basePath}.${format} ${width}w`)
    .join(', ');
}

/**
 * Get appropriate sizes attribute based on the image's usage context
 * @param context Where the image is being used
 */
export function getImageSizes(context: 'hero' | 'card' | 'content' | 'gallery'): string {
  switch (context) {
    case 'hero':
      return '100vw';
    case 'card':
      return '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw';
    case 'content':
      return '(max-width: 768px) 100vw, 70vw';
    case 'gallery':
      return '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw';
    default:
      return '100vw';
  }
}
