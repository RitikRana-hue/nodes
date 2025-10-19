/**
 * HQ Dashboard Authentication
 * Enterprise-level authentication with role-based access control
 */

export interface HQAuthUser {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Regional Admin' | 'Analyst' | 'Operator';
  region?: string;
  permissions: string[];
}

const HQ_USER_KEY = 'nodesio_hq_user';
const HQ_THEME_KEY = 'nodesio_hq_theme';

// Demo accounts with different roles
export const HQ_DEMO_ACCOUNTS = {
  superAdmin: {
    email: 'admin@nodesio.com',
    password: 'admin123',
    user: {
      id: 'hq-admin-001',
      name: 'Super Admin',
      email: 'admin@nodesio.com',
      role: 'Super Admin' as const,
      permissions: ['all'],
    }
  },
  regionalAdmin: {
    email: 'regional@nodesio.com',
    password: 'regional123',
    user: {
      id: 'hq-regional-001',
      name: 'Regional Admin',
      email: 'regional@nodesio.com',
      role: 'Regional Admin' as const,
      region: 'North India',
      permissions: ['view', 'edit', 'manage_region', 'reports'],
    }
  },
  analyst: {
    email: 'analyst@nodesio.com',
    password: 'analyst123',
    user: {
      id: 'hq-analyst-001',
      name: 'Data Analyst',
      email: 'analyst@nodesio.com',
      role: 'Analyst' as const,
      permissions: ['view', 'analytics', 'export', 'reports'],
    }
  },
  operator: {
    email: 'operator@nodesio.com',
    password: 'operator123',
    user: {
      id: 'hq-operator-001',
      name: 'System Operator',
      email: 'operator@nodesio.com',
      role: 'Operator' as const,
      permissions: ['view', 'update_status', 'assign_tasks'],
    }
  }
};

export const getCurrentHQUser = (): HQAuthUser | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const user = localStorage.getItem(HQ_USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('Error reading HQ user:', error);
    return null;
  }
};

const setCurrentHQUser = (user: HQAuthUser): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(HQ_USER_KEY, JSON.stringify(user));
  
  // Log audit
  logAudit({
    userId: user.id,
    userName: user.name,
    action: 'LOGIN',
    resource: 'Authentication',
    details: `User logged in with role: ${user.role}`,
  });
};

export const isHQAuthenticated = (): boolean => {
  return getCurrentHQUser() !== null;
};

export const hqLogin = (
  email: string,
  password: string
): { success: boolean; user?: HQAuthUser; error?: string } => {
  if (typeof window === 'undefined') {
    return { success: false, error: 'Not in browser environment' };
  }

  // Check demo accounts
  const account = Object.values(HQ_DEMO_ACCOUNTS).find(
    acc => acc.email === email && acc.password === password
  );

  if (!account) {
    return { success: false, error: 'Invalid email or password' };
  }

  const authUser: HQAuthUser = {
    id: account.user.id,
    name: account.user.name,
    email: account.user.email,
    role: account.user.role,
    region: 'region' in account.user ? account.user.region : undefined,
    permissions: account.user.permissions,
  };

  setCurrentHQUser(authUser);
  return { success: true, user: authUser };
};

export const hqLogout = (): void => {
  if (typeof window === 'undefined') return;
  
  const user = getCurrentHQUser();
  if (user) {
    logAudit({
      userId: user.id,
      userName: user.name,
      action: 'LOGOUT',
      resource: 'Authentication',
      details: 'User logged out',
    });
  }
  
  localStorage.removeItem(HQ_USER_KEY);
};

export const hasHQPermission = (permission: string): boolean => {
  const user = getCurrentHQUser();
  if (!user) return false;

  return user.permissions.includes('all') || user.permissions.includes(permission);
};

// Theme Management
export const getTheme = (): 'light' | 'dark' | 'system' => {
  if (typeof window === 'undefined') return 'system';
  
  try {
    const theme = localStorage.getItem(HQ_THEME_KEY);
    return (theme as 'light' | 'dark' | 'system') || 'system';
  } catch {
    return 'system';
  }
};

export const setTheme = (theme: 'light' | 'dark' | 'system'): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(HQ_THEME_KEY, theme);
  
  // Apply theme
  const root = document.documentElement;
  if (theme === 'dark') {
    root.classList.add('dark');
  } else if (theme === 'light') {
    root.classList.remove('dark');
  } else {
    // System preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }
};

// Audit Logging
interface AuditLogEntry {
  userId: string;
  userName: string;
  action: string;
  resource: string;
  details: string;
}

const AUDIT_LOGS_KEY = 'nodesio_hq_audit_logs';

export const logAudit = (entry: AuditLogEntry): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const logs = getAuditLogs();
    const newLog = {
      id: `audit-${Date.now()}`,
      ...entry,
      timestamp: new Date().toISOString(),
      ipAddress: '127.0.0.1', // Mock IP
      status: 'Success' as const,
    };
    
    logs.unshift(newLog);
    
    // Keep only last 100 logs
    const trimmedLogs = logs.slice(0, 100);
    localStorage.setItem(AUDIT_LOGS_KEY, JSON.stringify(trimmedLogs));
  } catch (error) {
    console.error('Error logging audit:', error);
  }
};

export const getAuditLogs = (): any[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const logs = localStorage.getItem(AUDIT_LOGS_KEY);
    return logs ? JSON.parse(logs) : [];
  } catch {
    return [];
  }
};
