"use client";

import { useEffect, useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Building2, 
  Trash2, 
  Truck, 
  FileText,
  Activity,
  RefreshCw,
  MapPin,
  Zap,
  Shield,
  Clock,
} from 'lucide-react';
import { mockGlobalKPIs } from '@/lib/api/hqMockData';
import type { GlobalKPIs } from '@/types/hq';

export default function HQOverview() {
  const [kpis, setKpis] = useState<GlobalKPIs>(mockGlobalKPIs);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const refreshData = async () => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setKpis(mockGlobalKPIs);
      setLastUpdated(new Date());
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    // Auto-refresh every 30 seconds
    const interval = setInterval(refreshData, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Enhanced Header with Gradient */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 text-white shadow-xl">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="w-full sm:w-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg flex-shrink-0">
                <Building2 className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <div className="min-w-0 flex-1">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold truncate">Headquarters Overview</h1>
                <p className="text-blue-100 mt-1 flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 flex-shrink-0" />
                  <span className="truncate">
                    Last updated: {mounted ? lastUpdated.toLocaleTimeString() : '--:--:--'}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <select className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-sm text-white">
              <option className="text-gray-900">Last 24 Hours</option>
              <option className="text-gray-900">Last 7 Days</option>
              <option className="text-gray-900">Last 30 Days</option>
              <option className="text-gray-900">Last 90 Days</option>
            </select>
            <button
              onClick={refreshData}
              disabled={loading}
              className="flex items-center gap-2 px-6 py-2 bg-white text-blue-600 hover:bg-blue-50 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
          </div>
        </div>
        
        {/* Quick Stats in Header */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-4 sm:mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
            <div className="text-blue-100 text-xs sm:text-sm mb-1 truncate">Total Regions</div>
            <div className="text-2xl sm:text-3xl font-bold truncate">{kpis.regions.total}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
            <div className="text-blue-100 text-xs sm:text-sm mb-1 truncate">Active Users</div>
            <div className="text-2xl sm:text-3xl font-bold truncate">{kpis.users.online.toLocaleString()}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
            <div className="text-blue-100 text-xs sm:text-sm mb-1 truncate">Total Bins</div>
            <div className="text-2xl sm:text-3xl font-bold truncate">{kpis.bins.total.toLocaleString()}</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
            <div className="text-blue-100 text-xs sm:text-sm mb-1 truncate">Fleet Active</div>
            <div className="text-2xl sm:text-3xl font-bold truncate">{kpis.vehicles.onRoute}</div>
          </div>
        </div>
      </div>

      {/* Regions & Cities */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            Regions & Cities
          </h2>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            View Map
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <KPICard
            title="Total Regions"
            value={kpis.regions.total}
            subtitle={`${kpis.regions.active} active`}
            trend="up"
            trendValue="+2 this month"
            icon={Building2}
            color="blue"
          />
          <KPICard
            title="Active Cities"
            value={kpis.cities.active}
            subtitle={`${kpis.cities.total} total`}
            percentage={(kpis.cities.active / kpis.cities.total * 100).toFixed(1)}
            icon={Building2}
            color="purple"
          />
          <KPICard
            title="Critical Regions"
            value={kpis.regions.critical}
            subtitle="Need attention"
            alert
            icon={Activity}
            color="red"
          />
        </div>
      </div>

      {/* Users */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <Users className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            Users & Personnel
          </h2>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <KPICard
            title="Total Users"
            value={kpis.users.total.toLocaleString()}
            icon={Users}
            color="green"
          />
          <KPICard
            title="Admins"
            value={kpis.users.admins}
            subtitle="System administrators"
            icon={Users}
            color="purple"
          />
          <KPICard
            title="Drivers"
            value={kpis.users.drivers.toLocaleString()}
            subtitle="Fleet operators"
            icon={Users}
            color="blue"
          />
          <KPICard
            title="Users"
            value={kpis.users.users.toLocaleString()}
            subtitle="End users"
            icon={Users}
            color="green"
          />
          <KPICard
            title="Online Now"
            value={kpis.users.online.toLocaleString()}
            percentage={(kpis.users.online / kpis.users.total * 100).toFixed(1)}
            icon={Activity}
            color="green"
          />
        </div>
      </div>

      {/* Bins */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Trash2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            Bins Status
          </h2>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <KPICard
            title="Total Bins"
            value={kpis.bins.total.toLocaleString()}
            icon={Trash2}
            color="gray"
          />
          <KPICard
            title="Active Bins"
            value={kpis.bins.active.toLocaleString()}
            percentage={(kpis.bins.active / kpis.bins.total * 100).toFixed(1)}
            icon={Trash2}
            color="green"
          />
          <KPICard
            title="Full Bins"
            value={kpis.bins.full.toLocaleString()}
            alert
            icon={Trash2}
            color="red"
          />
          <KPICard
            title="Offline Bins"
            value={kpis.bins.offline.toLocaleString()}
            subtitle="Need attention"
            icon={Trash2}
            color="orange"
          />
          <KPICard
            title="Avg Fill Level"
            value={`${kpis.bins.avgFillLevel}%`}
            trend={kpis.bins.avgFillLevel > 70 ? 'up' : 'down'}
            icon={Activity}
            color="blue"
          />
        </div>
      </div>

      {/* Vehicles */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
              <Truck className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            Fleet Status
          </h2>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Track Live</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <KPICard
            title="Total Vehicles"
            value={kpis.vehicles.total}
            icon={Truck}
            color="gray"
          />
          <KPICard
            title="On Route"
            value={kpis.vehicles.onRoute}
            percentage={(kpis.vehicles.onRoute / kpis.vehicles.total * 100).toFixed(1)}
            icon={Truck}
            color="green"
          />
          <KPICard
            title="Idle"
            value={kpis.vehicles.idle}
            subtitle="Available"
            icon={Truck}
            color="blue"
          />
          <KPICard
            title="Maintenance"
            value={kpis.vehicles.maintenance}
            subtitle="Under service"
            icon={Truck}
            color="orange"
          />
        </div>
      </div>

      {/* Reports */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
              <FileText className="w-5 h-5 text-red-600 dark:text-red-400" />
            </div>
            Reports & Issues
          </h2>
          <button className="text-sm text-blue-600 dark:text-blue-400 hover:underline">View All</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <KPICard
            title="Total Reports"
            value={kpis.reports.total.toLocaleString()}
            icon={FileText}
            color="gray"
          />
          <KPICard
            title="Pending"
            value={kpis.reports.pending}
            alert
            icon={FileText}
            color="red"
          />
          <KPICard
            title="Resolved"
            value={kpis.reports.resolved.toLocaleString()}
            percentage={(kpis.reports.resolved / kpis.reports.total * 100).toFixed(1)}
            icon={FileText}
            color="green"
          />
          <KPICard
            title="Today"
            value={kpis.reports.todayCount}
            trend="up"
            trendValue="+12 from yesterday"
            icon={FileText}
            color="blue"
          />
          <KPICard
            title="Resolution Rate"
            value={`${kpis.reports.resolutionRate}%`}
            trend="up"
            icon={Activity}
            color="green"
          />
        </div>
      </div>

      {/* Analytics & Charts */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
          <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
            <Zap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          </div>
          Analytics & Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Operations Trend</h3>
              <TrendingUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="h-64 flex items-center justify-center bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <div className="text-center">
                <Activity className="w-12 h-12 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Line Chart: Daily operations summary</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border border-purple-200 dark:border-purple-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Performing Cities</h3>
              <Building2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="h-64 flex items-center justify-center bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Bar Chart: City efficiency rankings</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border border-green-200 dark:border-green-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Report Distribution</h3>
              <FileText className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div className="h-64 flex items-center justify-center bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <div className="text-center">
                <FileText className="w-12 h-12 text-green-600 dark:text-green-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Donut Chart: Report categories</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border border-orange-200 dark:border-orange-800 rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Overflow Heatmap</h3>
              <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="h-64 flex items-center justify-center bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-orange-600 dark:text-orange-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 dark:text-gray-400">Heatmap: Overflow frequency by region</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            System Health
          </h3>
          <span className="text-xs font-semibold text-green-700 dark:text-green-400 px-3 py-1 bg-green-100 dark:bg-green-900/40 rounded-full">All Systems Operational</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">API Status</span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xs font-semibold text-green-700 dark:text-green-400 px-3 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">Operational</span>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Database</span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xs font-semibold text-green-700 dark:text-green-400 px-3 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">Healthy</span>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">IoT Network</span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xs font-semibold text-green-700 dark:text-green-400 px-3 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">98% Online</span>
          </div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Uptime</span>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-xs font-semibold text-green-700 dark:text-green-400 px-3 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">99.9%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// KPI Card Component
function KPICard({
  title,
  value,
  subtitle,
  percentage,
  trend,
  trendValue,
  alert,
  icon: Icon,
  color = 'gray',
}: {
  title: string;
  value: string | number;
  subtitle?: string;
  percentage?: string;
  trend?: 'up' | 'down';
  trendValue?: string;
  alert?: boolean;
  icon?: any;
  color?: string;
}) {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
    green: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
    purple: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
    red: 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800',
    orange: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
    gray: 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700',
  };

  return (
    <div className={`border rounded-xl p-4 sm:p-5 transition-all hover:shadow-lg hover:-translate-y-1 ${alert ? colorClasses.red : colorClasses[color as keyof typeof colorClasses]}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wide truncate pr-2">{title}</div>
        {Icon && <Icon className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </div>
      <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1 break-words">{value}</div>
      {percentage && (
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">{percentage}% of total</div>
      )}
      {subtitle && (
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 truncate">{subtitle}</div>
      )}
      {trend && trendValue && (
        <div className={`text-xs font-medium mt-2 flex items-center gap-1 truncate ${trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
          {trend === 'up' ? <TrendingUp className="w-3 h-3 flex-shrink-0" /> : <TrendingDown className="w-3 h-3 flex-shrink-0" />}
          <span className="truncate">{trendValue}</span>
        </div>
      )}
    </div>
  );
}
