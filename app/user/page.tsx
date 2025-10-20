"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import {
  Trash2,
  TrendingUp,
  Clock,
  Truck,
  MapPin,
  RefreshCw,
  AlertCircle
} from 'lucide-react';
import { userDashboardService, userBinsService, userVehiclesService } from '@/lib/api/userServices';
import type { UserDashboardStats, NearbyBin, Vehicle } from '@/types/user';

// Dynamically import map component (client-side only)
const UserMap = dynamic(() => import('./components/UserMap'), { ssr: false });

export default function UserDashboard() {
  const [stats, setStats] = useState<UserDashboardStats | null>(null);
  const [nearbyBins, setNearbyBins] = useState<NearbyBin[]>([]);
  const [nearbyVehicles, setNearbyVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [userLocation] = useState({ lat: 30.7333, lng: 76.7794 }); // Mock user location

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      const [statsData, binsData, vehiclesData] = await Promise.all([
        userDashboardService.getStats(),
        userBinsService.getNearbyBins(userLocation.lat, userLocation.lng, { maxDistance: 1000 }),
        userVehiclesService.getNearbyVehicles(userLocation.lat, userLocation.lng, { maxDistance: 2000 }),
      ]);

      setStats(statsData);
      setNearbyBins(binsData.bins);
      setNearbyVehicles(vehiclesData.vehicles);
    } catch (error) {
      console.error('Failed to fetch dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'empty': return 'text-green-600 bg-green-100 dark:bg-green-900/20';
      case 'half': return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20';
      case 'full': return 'text-red-600 bg-red-100 dark:bg-red-900/20';
      case 'maintenance': return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
      default: return 'text-gray-600 bg-gray-100 dark:bg-gray-900/20';
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Sector 15, Chandigarh
            </p>
          </div>
          <button
            onClick={fetchDashboardData}
            className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Nearby Bins */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Nearby Bins</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {stats?.nearbyBins.total || 0}
                </p>
                <div className="flex items-center gap-2 mt-2 text-xs">
                  <span className="text-green-600">●</span>
                  <span className="text-gray-600 dark:text-gray-400">{stats?.nearbyBins.empty} Empty</span>
                  <span className="text-red-600">●</span>
                  <span className="text-gray-600 dark:text-gray-400">{stats?.nearbyBins.full} Full</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Trash2 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Next Pickup */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Next Pickup</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {stats?.nextPickup.eta || 'N/A'}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  Today at {stats?.nextPickup.time || 'N/A'}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Your Reports */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Your Reports</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {stats?.userReports.total || 0}
                </p>
                <p className="text-xs text-green-600 mt-2">
                  {stats?.userReports.resolved} Resolved
                </p>
              </div>
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>

          {/* Active Vehicles */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Vehicles</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {stats?.nearbyVehicles || 0}
                </p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-2">
                  In your area
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Truck className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Map and Quick Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Map */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Real-Time Map</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Nearby bins and vehicles</p>
            </div>
            <div className="h-[500px]">
              <UserMap
                userLocation={userLocation}
                bins={nearbyBins}
                vehicles={nearbyVehicles}
              />
            </div>
          </div>

          {/* Quick Info */}
          <div className="space-y-6">
            {/* Nearby Bins List */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Nearby Bins</h3>
              </div>
              <div className="p-4 space-y-3 max-h-[300px] overflow-y-auto">
                {nearbyBins.slice(0, 5).map((bin) => (
                  <div key={bin.id} className="flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{bin.location}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{bin.distance}m away</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(bin.status)}`}>
                      {bin.fillLevel}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Vehicles */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Active Vehicles</h3>
              </div>
              <div className="p-4 space-y-3">
                {nearbyVehicles.slice(0, 3).map((vehicle) => (
                  <div key={vehicle.id} className="flex items-start justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">{vehicle.vehicleNumber}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">{vehicle.driverName}</p>
                    </div>
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                      ETA: {vehicle.eta}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-sm p-6 text-white">
              <AlertCircle className="w-8 h-8 mb-3" />
              <h3 className="text-lg font-semibold mb-2">Report an Issue</h3>
              <p className="text-sm text-blue-100 mb-4">
                See a full bin or other problem? Let us know!
              </p>
              <button className="w-full px-4 py-2 bg-white text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors">
                Create Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
