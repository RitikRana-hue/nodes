"use client";

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useTheme } from '../../context/ThemeContext'
import { logout, getSession } from '../../dashboard/utils/auth'

export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const unreadCount = 3; // This would come from your notification system
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userEmail, setUserEmail] = useState('admin@nodesio.com');

  useEffect(() => {
    const session = getSession();
    if (session) {
      setUserEmail(session.username);
    }
  }, []);

  const handleLogout = () => {
    logout();
    router.push('/dashboard/login');
  };

  // Function to get the appropriate icon based on theme
  const getThemeIcon = (currentTheme: string) => {
    switch(currentTheme) {
      case 'light':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        );
      case 'dark':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12.79A9 9 0 0 1 11.21 3 7 7 0 0 0 12 21a9 9 0 0 1 9-8.21z" />
          </svg>
        );
      case 'system':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  // Function to get theme name for display
  const getThemeName = (themeValue: string) => {
    switch(themeValue) {
      case 'light': return 'Light';
      case 'dark': return 'Dark';
      case 'system': return 'System';
      default: return 'Light';
    }
  };
 
  return (
    <div>
      <div className="fixed top-0 left-0 z-40 w-16 sm:w-64 h-screen transition-transform -translate-x-0 border-r border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800" aria-label="Sidebar">
        <div className="h-full px-3 py-4 overflow-y-auto bg-white dark:bg-gray-800 flex flex-col justify-between">
          {/* Logo Section */}
          <div className="space-y-6">
            <div className="flex items-center p-2 border-b border-gray-200 dark:border-gray-700 pb-4">
              {theme === 'dark' ? (
                <img src="/images/logo.png" alt="NodesIO Logo" className="w-8 h-8 rounded-full" />
              ) : (
                <img src="/images/nodesio.png" alt="NodesIO Logo" className="w-8 h-8 rounded-full" />
              )}
              <span className="mx-3 text-xl font-bold text-gray-900 dark:text-white hidden sm:block">NodesIO</span>
            </div>

            {/* Navigation Menu */}
            <ul className="space-y-2">
              <li>
                <Link href="/dashboard" className="flex items-center p-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 rounded-lg transition-all duration-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    <path d="M8 6h10"/>
                    <path d="M6 12h9"/>
                    <path d="M11 18h7"/>
                  </svg>
                  <span className="hidden sm:block ml-3 font-medium">Overview</span>
                </Link>
              </li>
              
              <li>
                <Link href="/dashboard/bins" className="flex items-center p-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 rounded-lg transition-all duration-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    <path d="M10 11v6"/>
                    <path d="M14 11v6"/>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/>
                    <path d="M3 6h18"/>
                    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                  </svg>
                  <span className="hidden sm:block ml-3 font-medium">Bins</span>
                </Link>
              </li>
              
              <li>
                <Link href="/dashboard/driver" className="flex items-center p-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 rounded-lg transition-all duration-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/>
                    <circle cx="7" cy="17" r="2"/>
                    <path d="M9 17h6"/>
                    <circle cx="17" cy="17" r="2"/>
                  </svg>
                  <span className="hidden sm:block ml-3 font-medium">Drivers</span>
                </Link>
              </li>
              
              <li>
                <Link href="/dashboard/users" className="flex items-center p-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 rounded-lg transition-all duration-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                    <path d="M16 3.128a4 4 0 0 1 0 7.744"/>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                    <circle cx="9" cy="7" r="4"/>
                  </svg>
                  <span className="hidden sm:block ml-3 font-medium">Users</span>
                </Link>
              </li>
              
              <li>
                <Link href="/dashboard/routes" className="flex items-center p-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 rounded-lg transition-all duration-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    <circle cx="6" cy="19" r="3"/>
                    <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"/>
                    <circle cx="18" cy="5" r="3"/>
                  </svg>
                  <span className="hidden sm:block ml-3 font-medium">Routes</span>
                </Link>
              </li>

              {/* Notifications Section */}
              <li className="relative">
                <Link 
                  href="/dashboard/notifications"
                  className="flex items-center p-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 rounded-lg transition-all duration-200 group w-full"
                >
                  <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                    </svg>
                    {unreadCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {unreadCount}
                      </span>
                    )}
                  </div>
                  <span className="hidden sm:block ml-3 font-medium">Notifications</span>
                </Link>
              </li>
              
              <li>
                <Link href="/dashboard/settings" className="flex items-center p-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700 dark:hover:text-blue-400 rounded-lg transition-all duration-200 group">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                    <circle cx="12" cy="12" r="3"/>
                  </svg>
                  <span className="hidden sm:block ml-3 font-medium">Settings</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Bottom Section */}
          <div className="space-y-4">
            {/* Theme Toggle - Now a Dropdown */}
            <div className="p-2">
              <div className="space-y-2">
                <div className="flex items-center mb-2">
                  <span className="text-sm text-gray-700 dark:text-gray-300">Theme</span>
                </div>
                <div className="relative">
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center justify-between w-full p-2 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200 ease-in-out"
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                  >
                    <div className="flex items-center">
                      <span className="text-blue-600 dark:text-blue-400 mr-2">
                        {getThemeIcon(theme)}
                      </span>
                      <span className="hidden sm:block">{getThemeName(theme)}</span>
                    </div>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={dropdownOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                    </svg>
                  </button>
                  
                  {dropdownOpen && (
                    <div className="absolute right-0 mt-2 w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50">
                      <ul>
                        <li>
                          <button
                            onClick={() => {
                              setTheme('light');
                              setDropdownOpen(false);
                            }}
                            className={`flex items-center w-full px-4 py-2 text-left ${theme === 'light' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300'} hover:bg-blue-50 dark:hover:bg-blue-900/20`}
                          >
                            <span className="mr-2">{getThemeIcon('light')}</span>
                            <span>Light</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              setTheme('dark');
                              setDropdownOpen(false);
                            }}
                            className={`flex items-center w-full px-4 py-2 text-left ${theme === 'dark' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300'} hover:bg-blue-50 dark:hover:bg-blue-900/20`}
                          >
                            <span className="mr-2">{getThemeIcon('dark')}</span>
                            <span>Dark</span>
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              setTheme('system');
                              setDropdownOpen(false);
                            }}
                            className={`flex items-center w-full px-4 py-2 text-left ${theme === 'system' ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20' : 'text-gray-700 dark:text-gray-300'} hover:bg-blue-50 dark:hover:bg-blue-900/20`}
                          >
                            <span className="mr-2">{getThemeIcon('system')}</span>
                            <span>System</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* User Profile */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full overflow-hidden">
                  {theme === 'dark' ? (
                    <img src="/images/logo.png" alt="User" className="w-full h-full object-cover rounded-full" />
                  ) : (
                    <img src="/images/nodesio.png" alt="User" className="w-full h-full object-cover rounded-full" />
                  )}
                </div>
                <div className="hidden sm:block ml-3 flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Dashboard User</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{userEmail}</p>
                </div>
              </div>
            </div>

            {/* Logout */}
            <div className="p-2">
              <button 
                onClick={handleLogout}
                className="flex items-center w-full p-2 text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-900/20 hover:text-red-700 dark:hover:text-red-400 rounded-lg transition-all duration-200 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-red-600 dark:group-hover:text-red-400">
                  <path d="m16 17 5-5-5-5"/>
                  <path d="M21 12H9"/>
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                </svg>
                <span className="hidden sm:block ml-3 font-medium">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}