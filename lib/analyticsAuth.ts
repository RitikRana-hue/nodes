/**
 * Analytics Dashboard Authentication
 * Role-based access control for backend analytics
 */

export interface AnalyticsUser {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Analyst' | 'Operator';
  permissions: string[];
}

export interface AuthAnalyticsUser {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Analyst' | 'Operator';
}

const ANALYTICS_CURRENT_USER_KEY = 'nodesio_analytics_user';

// Demo accounts
export const DEMO_ACCOUNTS = {
  admin: {
    email: 'admin@nodesio.com',
    password: 'admin123',
    user: {
      id: 'admin-001',
      name: 'Admin User',
      email: 'admin@nodesio.com',
      role: 'Admin' as const,
      permissions: ['all'],
    }
  },
  analyst: {
    email: 'analyst@nodesio.com',
    password: 'analyst123',
    user: {
      id: 'analyst-001',
      name: 'Analyst User',
      email: 'analyst@nodesio.com',
      role: 'Analyst' as const,
      permissions: ['view', 'export', 'analytics'],
    }
  },
  operator: {
    email: 'operator@nodesio.com',
    password: 'operator123',
    user: {
      id: 'operator-001',
      name: 'Operator User',
      email: 'operator@nodesio.com',
      role: 'Operator' as const,
      permissions: ['view', 'update_status', 'assign'],
    }
  }
};

export const getCurrentAnalyticsUser = (): AuthAnalyticsUser | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const user = localStorage.getItem(ANALYTICS_CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error reading analytics user:', error);
    return null;
  }
};

const setCurrentAnalyticsUser = (user: AuthAnalyticsUser): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(ANALYTICS_CURRENT_USER_KEY, JSON.stringify(user));
};

export const isAnalyticsAuthenticated = (): boolean => {
  return getCurrentAnalyticsUser() !== null;
};

export const analyticsLogin = (
  email: string,
  password: string
): { success: boolean; user?: AuthAnalyticsUser; error?: string } => {
  if (typeof window === 'undefined') {
    return { success: false, error: 'Not in browser environment' };
  }

  // Check demo accounts
  const account = Object.values(DEMO_ACCOUNTS).find(
    acc => acc.email === email && acc.password === password
  );

  if (!account) {
    return { success: false, error: 'Invalid email or password' };
  }

  const authUser: AuthAnalyticsUser = {
    id: account.user.id,
    name: account.user.name,
    email: account.user.email,
    role: account.user.role,
  };

  setCurrentAnalyticsUser(authUser);
  return { success: true, user: authUser };
};

export const analyticsLogout = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(ANALYTICS_CURRENT_USER_KEY);
};

export const hasPermission = (permission: string): boolean => {
  const user = getCurrentAnalyticsUser();
  if (!user) return false;

  const account = Object.values(DEMO_ACCOUNTS).find(
    acc => acc.user.email === user.email
  );

  if (!account) return false;

  return account.user.permissions.includes('all') || 
         account.user.permissions.includes(permission);
};
