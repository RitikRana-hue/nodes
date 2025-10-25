"use client";

import Sidebar from "app/components/layout/Sidebar";
import ProtectedRoute from "./components/ProtectedRoute";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/dashboard/login';

  return (
    <ProtectedRoute>
      <div className="flex">
        {!isLoginPage && <Sidebar />}
        <main className={`flex-1 ${!isLoginPage ? 'ml-16 sm:ml-64' : ''} min-h-screen bg-gray-50 dark:bg-gray-900`}>
          {children}
        </main>
      </div>
    </ProtectedRoute>
  );
}
