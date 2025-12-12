import type { Variants } from 'framer-motion';

// Animation Variants (Reusable across all pages)
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const scaleIn: Variants = {
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
  ogImage: '/images/og-image.jpg',
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

// Services Configuration
export const SERVICES = [
  {
    id: 'smart-bins',
    title: 'Smart Bin Monitoring',
    description: 'Real-time monitoring of waste levels with IoT sensors',
    icon: 'trash',
    features: ['Real-time fill level monitoring', 'Automated alerts', 'Predictive maintenance', 'Cost optimization'],
  },
  {
    id: 'route-optimization',
    title: 'Route Optimization',
    description: 'AI-powered route planning for maximum efficiency',
    icon: 'route',
    features: ['Dynamic route planning', 'Traffic optimization', 'Fuel cost reduction', 'Time efficiency'],
  },
  {
    id: 'analytics',
    title: 'Waste Analytics',
    description: 'Comprehensive analytics and reporting dashboard',
    icon: 'chart',
    features: ['Performance metrics', 'Trend analysis', 'Custom reports', 'Data insights'],
  },
  {
    id: 'fleet-management',
    title: 'Fleet Management',
    description: 'Complete fleet tracking and management solution',
    icon: 'truck',
    features: ['Vehicle tracking', 'Driver management', 'Maintenance scheduling', 'Performance monitoring'],
  },
];

// Features Configuration
export const FEATURES = [
  {
    title: 'Real-time Monitoring',
    description: 'Monitor waste levels across all bins in real-time with our advanced IoT sensors.',
    icon: 'monitor',
  },
  {
    title: 'Smart Routing',
    description: 'Optimize collection routes automatically based on bin fill levels and traffic conditions.',
    icon: 'route',
  },
  {
    title: 'Cost Reduction',
    description: 'Reduce operational costs by up to 40% through intelligent waste management.',
    icon: 'dollar',
  },
  {
    title: 'Environmental Impact',
    description: 'Minimize carbon footprint with optimized routes and reduced unnecessary trips.',
    icon: 'leaf',
  },
  {
    title: 'Data Analytics',
    description: 'Gain insights with comprehensive analytics and customizable reporting.',
    icon: 'chart',
  },
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support and system monitoring.',
    icon: 'support',
  },
];

// Statistics Configuration
export const STATS = [
  { label: 'Cities Served', value: '50+', icon: 'city' },
  { label: 'Smart Bins Deployed', value: '10,000+', icon: 'trash' },
  { label: 'Cost Reduction', value: '40%', icon: 'percent' },
  { label: 'CO2 Reduction', value: '35%', icon: 'leaf' },
];

// Testimonials Configuration
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'City Manager',
    company: 'Metro City Council',
    content: 'NodesIO has transformed our waste management operations. We\'ve seen a 40% reduction in costs and significantly improved efficiency.',
    avatar: '/images/testimonials/sarah.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Operations Director',
    company: 'GreenWaste Solutions',
    content: 'The real-time monitoring and route optimization features have revolutionized how we manage our fleet. Highly recommended!',
    avatar: '/images/testimonials/michael.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Sustainability Manager',
    company: 'EcoCity Initiative',
    content: 'Thanks to NodesIO, we\'ve reduced our carbon footprint by 35% while improving service quality. It\'s a win-win solution.',
    avatar: '/images/testimonials/emily.jpg',
    rating: 5,
  },
];

// FAQ Configuration
export const FAQS = [
  {
    question: 'How does the smart bin monitoring work?',
    answer: 'Our IoT sensors are installed in waste bins to monitor fill levels in real-time. The data is transmitted to our cloud platform where it\'s processed and made available through our dashboard.',
  },
  {
    question: 'What kind of cost savings can we expect?',
    answer: 'Most of our clients see 30-40% reduction in operational costs through optimized routes, reduced fuel consumption, and improved efficiency.',
  },
  {
    question: 'Is the system compatible with existing infrastructure?',
    answer: 'Yes, our solution is designed to integrate seamlessly with existing waste management infrastructure and can be customized to meet specific requirements.',
  },
  {
    question: 'How long does implementation take?',
    answer: 'Implementation typically takes 2-4 weeks depending on the scale of deployment. We provide full support throughout the process.',
  },
  {
    question: 'What kind of support do you provide?',
    answer: 'We offer 24/7 technical support, regular system maintenance, training for your team, and ongoing optimization services.',
  },
];

// Career Positions
export const CAREER_POSITIONS = [
  {
    id: 'senior-fullstack-developer',
    title: 'Senior Full Stack Developer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    experience: '5+ years',
    description: 'Join our engineering team to build scalable IoT solutions for smart waste management.',
    requirements: [
      '5+ years of full-stack development experience',
      'Proficiency in React, Node.js, and TypeScript',
      'Experience with IoT systems and real-time data processing',
      'Knowledge of cloud platforms (AWS, Azure, or GCP)',
    ],
    responsibilities: [
      'Develop and maintain web applications and APIs',
      'Work with IoT data streams and real-time processing',
      'Collaborate with cross-functional teams',
      'Ensure code quality and best practices',
    ],
  },
  {
    id: 'iot-engineer',
    title: 'IoT Systems Engineer',
    department: 'Hardware',
    location: 'San Francisco',
    type: 'Full-time',
    experience: '3+ years',
    description: 'Design and implement IoT solutions for smart waste management systems.',
    requirements: [
      '3+ years of IoT development experience',
      'Experience with embedded systems and sensors',
      'Knowledge of wireless communication protocols',
      'Proficiency in C/C++ and Python',
    ],
    responsibilities: [
      'Design and develop IoT sensor systems',
      'Implement communication protocols',
      'Optimize power consumption and reliability',
      'Collaborate with software teams on data integration',
    ],
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    department: 'Analytics',
    location: 'Remote / New York',
    type: 'Full-time',
    experience: '4+ years',
    description: 'Analyze waste management data to drive insights and optimize operations.',
    requirements: [
      '4+ years of data science experience',
      'Proficiency in Python, R, and SQL',
      'Experience with machine learning and predictive modeling',
      'Knowledge of data visualization tools',
    ],
    responsibilities: [
      'Analyze large datasets to identify patterns and trends',
      'Develop predictive models for route optimization',
      'Create data visualizations and reports',
      'Collaborate with product teams on feature development',
    ],
  },
];

// Social Media Links
export const SOCIAL_LINKS = [
  { name: 'Twitter', url: 'https://twitter.com/nodesio', icon: 'twitter' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/nodesio', icon: 'linkedin' },
  { name: 'GitHub', url: 'https://github.com/nodesio', icon: 'github' },
  { name: 'Facebook', url: 'https://facebook.com/nodesio', icon: 'facebook' },
];

// Footer Links
export const FOOTER_LINKS = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
  ],
  services: [
    { name: 'Smart Bins', href: '/services#smart-bins' },
    { name: 'Route Optimization', href: '/services#route-optimization' },
    { name: 'Analytics', href: '/services#analytics' },
    { name: 'Fleet Management', href: '/services#fleet-management' },
  ],
  support: [
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api-docs' },
    { name: 'Support Center', href: '/support' },
    { name: 'Status Page', href: '/status' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR', href: '/gdpr' },
  ],
};

// Theme Configuration
export const THEME_CONFIG = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
    },
    secondary: {
      50: '#f0fdf4',
      100: '#dcfce7',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
    },
  },
  fonts: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
};

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection and try again.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  UNAUTHORIZED: 'You are not authorized to perform this action.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'An unexpected error occurred. Please try again later.',
  RATE_LIMIT: 'Too many requests. Please wait a moment and try again.',
};

// Success Messages
export const SUCCESS_MESSAGES = {
  CONTACT_SENT: 'Thank you for your message! We\'ll get back to you soon.',
  NEWSLETTER_SUBSCRIBED: 'Successfully subscribed to our newsletter!',
  APPLICATION_SUBMITTED: 'Your application has been submitted successfully!',
  PROFILE_UPDATED: 'Your profile has been updated successfully.',
};

// Loading States
export const LOADING_STATES = {
  SUBMITTING: 'Submitting...',
  LOADING: 'Loading...',
  PROCESSING: 'Processing...',
  SAVING: 'Saving...',
  SENDING: 'Sending...',
};
