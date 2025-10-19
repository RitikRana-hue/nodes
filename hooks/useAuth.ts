import { useState, useEffect } from 'react';

export interface SessionData {
  username: string;
  role: string;
  loginTime: string;
  sessionId: string;
}

/**
 * Custom hook for authentication management
 */
export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [session, setSession] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/verify', {
        credentials: 'include',
      });
      
      if (response.ok) {
        const data = await response.json();
        setIsAuthenticated(data.authenticated);
        setSession(data.user || null);
      } else {
        setIsAuthenticated(false);
        setSession(null);
      }
    } catch (error) {
      setIsAuthenticated(false);
      setSession(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setIsAuthenticated(false);
      setSession(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return {
    isAuthenticated,
    session,
    loading,
    logout,
    refetch: checkAuth,
  };
}
