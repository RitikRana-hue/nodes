// User & Authentication Types
export interface User {
  username: string;
  role: 'admin' | 'viewer';
}

export interface SessionData extends User {
  loginTime: string;
  sessionId: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

// Blog Types
export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  role: string;
  date: string;
  views: string;
  readTime: string;
  category: string;
  thumbnail: string;
  excerpt: string;
  content: string;
  featured?: boolean;
}

// Job Types
export interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  experience: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

// Contact Form Types
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

// Dashboard Types
export interface BinData {
  id: string;
  location: string;
  fillLevel: number;
  status: 'active' | 'inactive' | 'maintenance';
  lastCollection: string;
  coordinates: [number, number];
}

export interface RouteData {
  id: string;
  name: string;
  driver: string;
  bins: string[];
  status: 'active' | 'completed' | 'pending';
  distance: number;
  estimatedTime: number;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface ApiError {
  error: string;
  details?: any;
  statusCode: number;
}

// Animation Types
export interface AnimationVariant {
  hidden: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
  };
  visible: {
    opacity: number;
    y?: number;
    x?: number;
    scale?: number;
    transition?: {
      duration?: number;
      delay?: number;
      staggerChildren?: number;
    };
  };
}
