"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Mail, Lock, LogIn, Building2, Shield } from 'lucide-react';
import { hqLogin, isHQAuthenticated, HQ_DEMO_ACCOUNTS } from '@/lib/hqAuth';
import toast, { Toaster } from 'react-hot-toast';

export default function HQLogin() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isHQAuthenticated()) {
      router.push('/hq');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = hqLogin(formData.email, formData.password);

      if (result.success) {
        toast.success(`Welcome, ${result.user?.name}!`);
        setTimeout(() => router.push('/hq'), 500);
      } else {
        toast.error(result.error || 'Login failed');
      }
    } catch (error) {
      toast.error('An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const quickLogin = (accountType: keyof typeof HQ_DEMO_ACCOUNTS) => {
    const account = HQ_DEMO_ACCOUNTS[accountType];
    setFormData({ email: account.email, password: account.password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-4">
      <Toaster position="top-center" />
      
      <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
        {/* Left Side - Branding */}
        <div className="hidden md:flex flex-col justify-center p-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-2xl">
            <Building2 className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            NodesIO Headquarters
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Enterprise Control Center for Smart Waste Management
          </p>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Enterprise Security</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Role-based access control with audit logging</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Building2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">Multi-Regional Control</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Monitor and manage operations across cities</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 p-8">
            <div className="text-center mb-8 md:hidden">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">HQ Dashboard</h2>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Sign In</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Access your headquarters dashboard</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="you@nodesio.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  <>
                    <LogIn className="w-5 h-5" />
                    Sign In
                  </>
                )}
              </button>
            </form>

            {/* Quick Login */}
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    Quick Login
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <button
                  onClick={() => quickLogin('superAdmin')}
                  className="px-3 py-2 text-xs font-medium border border-blue-600 text-blue-600 dark:border-blue-500 dark:text-blue-400 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20"
                >
                  Super Admin
                </button>
                <button
                  onClick={() => quickLogin('regionalAdmin')}
                  className="px-3 py-2 text-xs font-medium border border-purple-600 text-purple-600 dark:border-purple-500 dark:text-purple-400 rounded hover:bg-purple-50 dark:hover:bg-purple-900/20"
                >
                  Regional Admin
                </button>
                <button
                  onClick={() => quickLogin('analyst')}
                  className="px-3 py-2 text-xs font-medium border border-green-600 text-green-600 dark:border-green-500 dark:text-green-400 rounded hover:bg-green-50 dark:hover:bg-green-900/20"
                >
                  Analyst
                </button>
                <button
                  onClick={() => quickLogin('operator')}
                  className="px-3 py-2 text-xs font-medium border border-orange-600 text-orange-600 dark:border-orange-500 dark:text-orange-400 rounded hover:bg-orange-50 dark:hover:bg-orange-900/20"
                >
                  Operator
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            NodesIO HQ Dashboard v1.0 • Enterprise Edition
          </p>
        </div>
      </div>
    </div>
  );
}
