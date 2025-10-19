"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import toast, { Toaster } from 'react-hot-toast';
import { 
  LayoutDashboard,
  Users,
  Wifi,
  Truck,
  FileText,
  MapPin,
  Brain,
  Settings,
  Bell,
  LogOut,
  Menu,
  X,
  Sun,
  Moon,
  Building2,
} from 'lucide-react';
import { hqLogout, getCurrentHQUser, isHQAuthenticated, getTheme, setTheme, type HQAuthUser } from '@/lib/hqAuth';

export default function HQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<HQAuthUser | null>(null);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const user = getCurrentHQUser();
    setCurrentUser(user);
    
    const theme = getTheme();
    setCurrentTheme(theme === 'dark' ? 'dark' : 'light');
    setTheme(theme);
  }, []);

  const navigation = [
    { name: 'Overview', href: '/hq', icon: LayoutDashboard },
    { name: 'Regions', href: '/hq/regions', icon: MapPin },
    { name: 'IoT Monitor', href: '/hq/iot', icon: Wifi },
    { name: 'Vehicles', href: '/hq/vehicles', icon: Truck },
    { name: 'Reports', href: '/hq/reports', icon: FileText },
    { name: 'AI Insights', href: '/hq/ai', icon: Brain },
    { name: 'Users', href: '/hq/users', icon: Users },
    { name: 'System', href: '/hq/system', icon: Settings },
    { name: 'Alerts', href: '/hq/alerts', icon: Bell },
  ];

  const isActive = (href: string) => {
    if (href === '/hq') {
      return pathname === href;
    }
    return pathname?.startsWith(href);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  // Public routes
  const publicRoutes = ['/hq/login'];
  const isPublicRoute = publicRoutes.some(route => pathname?.startsWith(route));

  useEffect(() => {
    if (!isHQAuthenticated() && !isPublicRoute) {
      router.push('/hq/login');
    }
  }, [pathname, router, isPublicRoute]);

  if (isPublicRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Toaster position="top-right" />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Mobile sidebar backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-gray-900/50 z-40 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <aside
          className={`
            fixed top-0 left-0 z-50 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0
          `}
        >
          <div className="flex flex-col h-full">
            {/* Logo & User */}
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between mb-3">
                <Link href="/hq" className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h1 className="text-lg font-bold text-gray-900 dark:text-white">NodesIO</h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Headquarters</p>
                  </div>
                </Link>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="lg:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              {currentUser && (
                <div className="flex items-center gap-2 px-2 py-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {currentUser.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">{currentUser.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{currentUser.role}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
              {navigation.map((item) => {
                const Icon = item.icon;
                const active = isActive(item.href);
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={`
                      flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors
                      ${active
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Bottom actions */}
            <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700 space-y-1">
              <button
                onClick={toggleTheme}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {currentTheme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                <span className="font-medium">{currentTheme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
              </button>
              <button
                onClick={() => {
                  hqLogout();
                  toast.success('Logged out successfully');
                  router.push('/hq/login');
                }}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <div className="lg:pl-64">
          {/* Mobile header */}
          <header className="lg:hidden sticky top-0 z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(true)}
                className="text-gray-700 dark:text-gray-300"
              >
                <Menu className="w-6 h-6" />
              </button>
              <Link href="/hq" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">NodesIO HQ</h1>
              </Link>
              <Link href="/hq/alerts" className="relative text-gray-700 dark:text-gray-300">
                <Bell className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                  4
                </span>
              </Link>
            </div>
          </header>

          {/* Page content */}
          <main className="min-h-screen p-4 sm:p-6 lg:p-8 overflow-y-auto">
            <div className="max-w-full overflow-x-hidden">
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
