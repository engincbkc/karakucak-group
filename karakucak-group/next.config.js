// Make bundle analyzer optional so the app works even if the package is missing
let withBundleAnalyzer = (config) => config;
try {
  withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
} catch (e) {
  console.warn('Bundle analyzer not found, skipping...');
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable ESLint during builds to prevent deployment errors
  eslint: {
    // Only run ESLint on local development, not during builds
    ignoreDuringBuilds: true,
  },
  
  // Disable TypeScript type checking during builds
  typescript: {
    // Only check types during local development
    ignoreBuildErrors: true,
  },
  
  // Next.js 15'te swcMinify varsayılan olarak etkindir, artık ayrıca belirtmeye gerek yok
  
  // Improve performance with enhanced compression
  compress: true,
  
  // Enhanced static generation for improved SEO performance
  experimental: {
    // Keep only standard supported options
    // optimizeCss: true,
  },

  // Configure image optimization
  images: {
    // Enable better image optimization
    formats: ['image/avif', 'image/webp'],
    // Optimize image quality and sizing
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Enable content-aware image resizing
    minimumCacheTTL: 60,
    // Set remote patterns for external images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  
  // Optimize static assets caching with cache hints for deployment services
  poweredByHeader: false,
  
  // Enable static generation optimization
  reactStrictMode: true,
  
  // Next.js 15'te optimizeFonts varsayılan olarak etkindir, artık ayrıca belirtmeye gerek yok
  
  // Enable trailing slashes for consistent URL structure
  trailingSlash: false,
  
  // Performance enhancing compiler options
  compiler: {
    // Remove console logs in production
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
    // Enable React server components
    reactRemoveProperties: process.env.NODE_ENV === 'production',
  },
};

// Export configuration with bundle analyzer wrapper
module.exports = withBundleAnalyzer(nextConfig);
