// Authentication utility functions for dashboard

export interface SessionData {
  username: string;
  role: string;
  loginTime: string;
  sessionId: string;
}

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  const authFlag = localStorage.getItem('dashboard_auth');
  const sessionData = sessionStorage.getItem('dashboard_session');
  
  return authFlag === 'true' && sessionData !== null;
};

/**
 * Get current session data
 */
export const getSession = (): SessionData | null => {
  if (typeof window === 'undefined') return null;
  
  try {
    const sessionData = sessionStorage.getItem('dashboard_session');
    if (!sessionData) return null;
    
    return JSON.parse(sessionData) as SessionData;
  } catch {
    return null;
  }
};

/**
 * Logout user and clear session
 */
export const logout = (): void => {
  if (typeof window === 'undefined') return;
  
  sessionStorage.removeItem('dashboard_session');
  localStorage.removeItem('dashboard_auth');
  localStorage.removeItem('dashboard_user');
};

/**
 * Check if session is expired (24 hour timeout)
 */
export const isSessionExpired = (): boolean => {
  const session = getSession();
  if (!session) return true;
  
  const loginTime = new Date(session.loginTime);
  const now = new Date();
  const hoursDiff = (now.getTime() - loginTime.getTime()) / (1000 * 60 * 60);
  
  return hoursDiff > 24;
};

/**
 * Validate session and return user info
 */
export const validateSession = (): SessionData | null => {
  if (!isAuthenticated()) return null;
  if (isSessionExpired()) {
    logout();
    return null;
  }
  
  return getSession();
};
