import type { AnimationVariant } from '@/types/index';

// Animation Variants (Reusable across all pages)
export const fadeInUp: AnimationVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

export const fadeInDown: AnimationVariant = {
  hidden: { opacity: 0, y: -60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6 } 
  }
};

export const fadeIn: AnimationVariant = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.6 } 
  }
};

export const staggerContainer: AnimationVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const scaleIn: AnimationVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5 } 
  }
};

// Site Configuration
export const SITE_CONFIG = {
  name: 'NodesIO',
  description: 'Smart IoT Waste Management Solutions',
  url: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ogImage: '/images/landingpageIMG.png',
  links: {
    twitter: 'https://twitter.com/nodesio',
    github: 'https://github.com/nodesio',
    linkedin: 'https://linkedin.com/company/nodesio',
  },
};

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
  { name: 'Careers', href: '/careers' },
];

// Dashboard Navigation
export const DASHBOARD_NAV = [
  { name: 'Overview', href: '/dashboard', icon: 'dashboard' },
  { name: 'Bins', href: '/dashboard/bins', icon: 'trash' },
  { name: 'Drivers', href: '/dashboard/driver', icon: 'truck' },
  { name: 'Users', href: '/dashboard/users', icon: 'users' },
  { name: 'Routes', href: '/dashboard/routes', icon: 'route' },
  { name: 'Notifications', href: '/dashboard/notifications', icon: 'bell' },
  { name: 'Settings', href: '/dashboard/settings', icon: 'settings' },
];

// API Endpoints
export const API_ENDPOINTS = {
  auth: {
    login: '/api/auth/login',
    logout: '/api/auth/logout',
    verify: '/api/auth/verify',
  },
  contact: '/api/contact',
  newsletter: '/api/newsletter',
  jobs: '/api/jobs',
};

// Session Configuration
export const SESSION_CONFIG = {
  maxAge: 24 * 60 * 60, // 24 hours in seconds
  cookieName: 'auth-token',
  jwtSecret: process.env.JWT_SECRET || 'fallback-secret-change-in-production',
};

// Rate Limiting
export const RATE_LIMIT_CONFIG = {
  login: {
    maxAttempts: 5,
    windowMs: 15 * 60 * 1000, // 15 minutes
  },
  api: {
    maxRequests: 100,
    windowMs: 60 * 1000, // 1 minute
  },
};

// Image Optimization
export const IMAGE_CONFIG = {
  formats: ['image/webp', 'image/avif'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  quality: 85,
};

// Blog Categories
export const BLOG_CATEGORIES = [
  'All',
  'Technology',
  'Case Study',
  'Sustainability',
  'Cost Optimization',
  'Artificial Intelligence',
];

// Contact Form Subjects
export const CONTACT_SUBJECTS = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'demo', label: 'Request a Demo' },
  { value: 'pricing', label: 'Pricing Information' },
  { value: 'support', label: 'Technical Support' },
  { value: 'partnership', label: 'Partnership Opportunities' },
  { value: 'other', label: 'Other' },
];
