import { NextRequest, NextResponse } from 'next/server';
import { SignJWT } from 'jose';
import { loginSchema, sanitizeInput } from '@/lib/validation';
import { z } from 'zod';

// Store credentials in environment variables (NOT in code)
const USERS = [
  {
    username: process.env.ADMIN_USERNAME || 'admin@nodesio.com',
    passwordHash: process.env.ADMIN_PASSWORD_HASH || '',
    role: 'admin'
  },
  {
    username: process.env.DEMO_USERNAME || 'demo@nodesio.com',
    passwordHash: process.env.DEMO_PASSWORD_HASH || '',
    role: 'viewer'
  }
];

// Rate limiting store (use Redis in production)
const loginAttempts = new Map<string, { count: number; resetTime: number }>();

async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const attempt = loginAttempts.get(ip);
  
  if (!attempt || now > attempt.resetTime) {
    loginAttempts.set(ip, { count: 1, resetTime: now + 15 * 60 * 1000 });
    return true;
  }
  
  if (attempt.count >= 5) {
    return false;
  }
  
  attempt.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Rate limiting
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many login attempts. Try again in 15 minutes.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate input with Zod
    const validation = loginSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed', 
          details: validation.error.issues 
        },
        { status: 400 }
      );
    }

    const { username, password } = validation.data;

    // Sanitize inputs
    const sanitizedUsername = sanitizeInput(username);

    // Hash password and check
    const hashedPassword = await hashPassword(password);
    const user = USERS.find(
      u => u.username === username && u.passwordHash === hashedPassword
    );

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Create JWT token
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || 'your-secret-key-change-in-production'
    );
    
    const token = await new SignJWT({ 
      username: user.username, 
      role: user.role 
    })
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setExpirationTime('24h')
      .sign(secret);

    // Set HTTP-only cookie
    const response = NextResponse.json({
      success: true,
      user: {
        username: user.username,
        role: user.role
      }
    });

    response.cookies.set('auth-token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 86400 // 24 hours
    });

    return response;

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
