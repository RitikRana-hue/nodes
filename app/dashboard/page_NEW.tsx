"use client";

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useDashboardStats, useActivities } from '@/hooks/useDashboard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import ErrorMessage from '@/components/ui/ErrorMessage';
import SkeletonLoader from '@/components/ui/SkeletonLoader';
import { TrendingUp, Trash2, CheckCircle, Truck, Recycle } from 'lucide-react';

const MyMap = dynamic(() => import('./components/MyMap'), { ssr: false });

const DashboardPage = () => {
  const [isMapEnabled, setIsMapEnabled] = useState(true);
  const [timeRange, setTimeRange] = useState('today');

  // Fetch dashboard stats with auto-refresh every 30 seconds
  const { data: stats, loading: statsLoading, error: statsError, refetch: refetchStats } = useDashboardStats();

  // Fetch recent activities with auto-refresh every 15 seconds
  const { data: activitiesData, loading: activitiesLoading } = useActivities(5);

  // Handle refresh button
  const handleRefresh = () => {
    refetchStats();
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Monitor your waste management system in real-time
            </p>
          </div>
          <div className="flex items-center gap-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm bg-white dark:bg-gray-700 dark:text-gray-200"
            >
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
            <button
              onClick={handleRefresh}
              disabled={statsLoading}
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              <svg className={`w-4 h-4 mr-2 ${statsLoading ? 'animate-spin' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
              </svg>
              {statsLoading ? 'Refreshing...' : 'Refresh'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 dark:bg-gray-900">
        {/* Stats Cards */}
        {statsLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <SkeletonLoader type="stat" count={4} />
          </div>
        ) : statsError ? (
          <div className="mb-8">
            <ErrorMessage message={statsError} onRetry={refetchStats} />
          </div>
        ) : stats ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Total Bins Card */}
            <StatCard
              icon={<Trash2 className="w-6 h-6 text-white" />}
              label="Total Bins"
              value={stats.totalBins.toLocaleString()}
              change="+12"
              color="bg-blue-500"
              textColor="text-blue-600"
            />

            {/* Active Bins Card */}
            <StatCard
              icon={<CheckCircle className="w-6 h-6 text-white" />}
              label="Active Bins"
              value={stats.activeBins.toLocaleString()}
              change="+8"
              color="bg-green-500"
              textColor="text-green-600"
            />

            {/* Collections Card */}
            <StatCard
              icon={<Truck className="w-6 h-6 text-white" />}
              label="Routes Optimized"
              value={stats.routesOptimized.toString()}
              change="+23"
              color="bg-purple-500"
              textColor="text-purple-600"
            />

            {/* Collection Rate Card */}
            <StatCard
              icon={<Recycle className="w-6 h-6 text-white" />}
              label="Collection Rate"
              value={`${stats.collectionRate}%`}
              change="+2.3%"
              color="bg-yellow-500"
              textColor="text-yellow-600"
            />
          </div>
        ) : null}

        {/* Additional Stats Row */}
        {stats && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Cost Savings</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                ${stats.costSavings.toLocaleString()}
              </p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-xs font-medium text-green-600">+18% this month</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Avg Fill Level</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {stats.fillLevelAverage}%
              </p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: `${stats.fillLevelAverage}%` }}
                ></div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Alerts</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {stats.alertsCount}
              </p>
              <p className="text-xs font-medium text-red-600 mt-1">
                Requires attention
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">CO₂ Reduced</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {stats.co2Reduced.toLocaleString()} kg
              </p>
              <div className="flex items-center mt-2">
                <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                <span className="text-xs font-medium text-green-600">Environmental impact</span>
              </div>
            </div>
          </div>
        )}

        {/* Map and Activity Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Bin Locations</h2>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isMapEnabled}
                  onChange={(e) => setIsMapEnabled(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Show Map</span>
              </label>
            </div>
            {isMapEnabled ? (
              <div className="h-96 rounded-lg overflow-hidden">
                <MyMap />
              </div>
            ) : (
              <div className="h-96 flex items-center justify-center bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="text-gray-500 dark:text-gray-400">Map disabled</p>
              </div>
            )}
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Activity</h2>

            {activitiesLoading ? (
              <SkeletonLoader type="text" count={5} />
            ) : activitiesData?.activities ? (
              <div className="space-y-4">
                {activitiesData.activities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 pb-4 border-b border-gray-100 dark:border-gray-700 last:border-0">
                    <div className={`w-2 h-2 rounded-full mt-2 ${activity.severity === 'high' ? 'bg-red-500' :
                        activity.severity === 'medium' ? 'bg-yellow-500' :
                          'bg-green-500'
                      }`}></div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">{activity.description}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {new Date(activity.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 dark:text-gray-400">No recent activity</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable Stat Card Component
interface StatCardProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  color: string;
  textColor: string;
}

const StatCard = ({ icon, label, value, change, color, textColor }: StatCardProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{label}</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{value}</p>
          <p className={`text-xs font-medium ${textColor} mt-1`}>
            {change} from yesterday
          </p>
        </div>
        <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
