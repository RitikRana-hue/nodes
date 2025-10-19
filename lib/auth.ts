/**
 * Authentication Utilities
 * Local storage-based authentication for User Dashboard
 */

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // In production, this would be hashed
  createdAt: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

// Storage keys
const USERS_KEY = 'nodesio_users';
const CURRENT_USER_KEY = 'nodesio_current_user';

// Demo account credentials
export const DEMO_ACCOUNT = {
  email: 'demo@nodesio.com',
  password: 'demo123',
  user: {
    id: 'demo-user-001',
    name: 'Demo User',
    email: 'demo@nodesio.com',
    password: 'demo123',
    createdAt: new Date().toISOString(),
  }
};

/**
 * Initialize demo account in localStorage if not exists
 */
export const initializeDemoAccount = (): void => {
  if (typeof window === 'undefined') return;
  
  const users = getUsers();
  const demoExists = users.some(u => u.email === DEMO_ACCOUNT.email);
  
  if (!demoExists) {
    users.push(DEMO_ACCOUNT.user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }
};

/**
 * Get all users from localStorage
 */
export const getUsers = (): User[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  } catch (error) {
    console.error('Error reading users from localStorage:', error);
    return [];
  }
};

/**
 * Save users to localStorage
 */
const saveUsers = (users: User[]): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

/**
 * Get current logged-in user
 */
export const getCurrentUser = (): AuthUser | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error reading current user from localStorage:', error);
    return null;
  }
};

/**
 * Set current user
 */
const setCurrentUser = (user: AuthUser): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
};

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};

/**
 * Login user
 */
export const login = (email: string, password: string): { success: boolean; user?: AuthUser; error?: string } => {
  if (typeof window === 'undefined') {
    return { success: false, error: 'Not in browser environment' };
  }

  // Check demo account
  if (email === DEMO_ACCOUNT.email && password === DEMO_ACCOUNT.password) {
    const authUser: AuthUser = {
      id: DEMO_ACCOUNT.user.id,
      name: DEMO_ACCOUNT.user.name,
      email: DEMO_ACCOUNT.user.email,
    };
    setCurrentUser(authUser);
    return { success: true, user: authUser };
  }

  // Check registered users
  const users = getUsers();
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return { success: false, error: 'Invalid email or password' };
  }

  const authUser: AuthUser = {
    id: user.id,
    name: user.name,
    email: user.email,
  };
  
  setCurrentUser(authUser);
  return { success: true, user: authUser };
};

/**
 * Signup new user
 */
export const signup = (
  name: string,
  email: string,
  password: string
): { success: boolean; user?: AuthUser; error?: string } => {
  if (typeof window === 'undefined') {
    return { success: false, error: 'Not in browser environment' };
  }

  // Validate inputs
  if (!name || !email || !password) {
    return { success: false, error: 'All fields are required' };
  }

  if (password.length < 6) {
    return { success: false, error: 'Password must be at least 6 characters' };
  }

  if (!isValidEmail(email)) {
    return { success: false, error: 'Invalid email format' };
  }

  // Check if user already exists
  const users = getUsers();
  const existingUser = users.find(u => u.email === email);

  if (existingUser) {
    return { success: false, error: 'Email already registered' };
  }

  // Create new user
  const newUser: User = {
    id: `user-${Date.now()}`,
    name,
    email,
    password, // In production, hash this!
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  saveUsers(users);

  // Auto login
  const authUser: AuthUser = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };
  
  setCurrentUser(authUser);
  return { success: true, user: authUser };
};

/**
 * Logout user
 */
export const logout = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(CURRENT_USER_KEY);
};

/**
 * Validate email format
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate password strength
 */
export const validatePassword = (password: string): { valid: boolean; message?: string } => {
  if (password.length < 6) {
    return { valid: false, message: 'Password must be at least 6 characters' };
  }
  return { valid: true };
};

/**
 * Check if passwords match
 */
export const passwordsMatch = (password: string, confirmPassword: string): boolean => {
  return password === confirmPassword;
};
