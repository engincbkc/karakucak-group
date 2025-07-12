'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';
import { getOptimizedImageProps } from '@/lib/image-optimization';

interface OptimizedImageProps extends Omit<ImageProps, 'loading' | 'placeholder'> {
  type?: 'hero' | 'content' | 'thumbnail' | 'icon';
  aspectRatio?: 'auto' | '1/1' | '16/9' | '4/3' | '3/2' | '1/2';
  rounded?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * A wrapper around Next.js Image component with built-in performance optimizations
 */
export function OptimizedImage({
  src,
  alt,
  priority = false,
  type = 'content',
  fill,
  width,
  height,
  aspectRatio = 'auto',
  className = '',
  rounded = false,
  ...props
}: OptimizedImageProps) {
  // Get optimized props based on image type
  const optimizedProps = getOptimizedImageProps(priority, type);
  
  // Handle responsive aspect ratios without explicit dimensions
  const aspectRatioClass = aspectRatio !== 'auto' 
    ? `aspect-[${aspectRatio}]` 
    : '';
  
  // Handle rounded corners
  const roundedClass = typeof rounded === 'boolean'
    ? rounded ? 'rounded-lg' : ''
    : `rounded-${rounded}`;
  
  return (
    <div className={`relative overflow-hidden ${aspectRatioClass} ${roundedClass} ${!fill && !width && !height ? 'w-full' : ''}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill || (!width && !height)}
        width={width}
        height={height}
        className={`${optimizedProps.className} ${className}`}
        sizes={optimizedProps.sizes}
        priority={priority}
        quality={optimizedProps.quality as number}
        {...props}
      />
    </div>
  );
}
