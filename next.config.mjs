import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image Optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Performance
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,

  // Headers for security and caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          }
        ]
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ]
      }
    ];
  },

  // Redirects
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },

  // Experimental features
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Turbopack configuration for dev mode
  turbopack: {
    resolveAlias: {
      '@/components/*': './app/components/*',
      '@/lib/*': './lib/*',
      '@/types/*': './types/*',
      '@/hooks/*': './hooks/*',
      '@/*': './*',
    },
  },

  // Webpack configuration for path aliases (used in production build)
  webpack: (config, { isServer }) => {
    // Add path aliases - order matters, specific paths first
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': path.resolve(__dirname, 'app/components'),
      '@/lib': path.resolve(__dirname, 'lib'),
      '@/types': path.resolve(__dirname, 'types'),
      '@/hooks': path.resolve(__dirname, 'hooks'),
      '@': path.resolve(__dirname),
    };
    
    return config;
  },
};

export default nextConfig;
