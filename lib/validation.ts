import { z } from 'zod';

// Login validation schema
export const loginSchema = z.object({
  username: z.string()
    .email('Invalid email format')
    .min(5, 'Email must be at least 5 characters')
    .max(100, 'Email too long'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .max(100, 'Password too long')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
    .regex(/[@$!%*?&#]/, 'Password must contain at least one special character'),
});

// Contact form validation
export const contactFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  company: z.string().max(100).optional(),
  subject: z.string().min(5).max(200),
  message: z.string().min(10).max(1000),
});

// Job application validation
export const jobApplicationSchema = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
  position: z.string().min(2).max(100),
  resume: z.string().url('Invalid resume URL'),
  coverLetter: z.string().min(50).max(2000).optional(),
});

// Newsletter subscription
export const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

// Sanitize HTML input
export function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, ''); // Remove event handlers
}

// Rate limit key generator
export function getRateLimitKey(ip: string, endpoint: string): string {
  return `ratelimit:${endpoint}:${ip}`;
}
