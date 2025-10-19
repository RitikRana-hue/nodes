"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { isAuthenticated, isSessionExpired, logout } from '../utils/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    // Skip auth check for login page
    if (pathname === '/dashboard/login') {
      setIsChecking(false);
      return;
    }

    // Check authentication
    const checkAuth = () => {
      if (!isAuthenticated()) {
        router.push('/dashboard/login');
        return;
      }

      if (isSessionExpired()) {
        logout();
        router.push('/dashboard/login');
        return;
      }

      setIsChecking(false);
    };

    checkAuth();

    // Set up periodic session check (every 5 minutes)
    const interval = setInterval(() => {
      if (isSessionExpired()) {
        logout();
        router.push('/dashboard/login');
      }
    }, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, [router, pathname]);

  // Show loading screen while checking auth
  if (isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
