"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Map, List, Truck, Phone, MapPin, Clock, Navigation } from 'lucide-react';
import { userVehiclesService } from '@/lib/api/userServices';
import type { Vehicle } from '@/types/user';

const UserMap = dynamic(() => import('../components/UserMap'), { ssr: false });

export default function VehiclesPage() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [userLocation] = useState({ lat: 30.7333, lng: 76.7794 });

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const response = await userVehiclesService.getNearbyVehicles(
        userLocation.lat,
        userLocation.lng,
        { sortBy: 'distance', sortOrder: 'asc' }
      );
      setVehicles(response.vehicles);
    } catch (error) {
      console.error('Failed to fetch vehicles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchVehicles();

    // Auto-refresh every 30 seconds
    const interval = setInterval(fetchVehicles, 30000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on-route': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'idle': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'maintenance': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Active Vehicles</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {vehicles.length} vehicles tracked in real-time
            </p>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
            >
              <List className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'map'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                }`}
            >
              <Map className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : viewMode === 'list' ? (
          /* List View */
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                        <Truck className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">{vehicle.vehicleNumber}</h3>
                        <p className="text-sm text-purple-100">{vehicle.driverName}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(vehicle.status)}`}>
                      {vehicle.status.replace('-', ' ')}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 space-y-4">
                  {/* Route Info */}
                  <div className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">Current Route</h4>
                      <span className="text-xs text-gray-600 dark:text-gray-400">
                        Stop {vehicle.route.currentStop} of {vehicle.route.totalStops}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300">{vehicle.route.name}</p>

                    {/* Progress Bar */}
                    <div className="mt-3">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-purple-600"
                          style={{ width: `${(vehicle.route.currentStop / vehicle.route.totalStops) * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">ETA</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{vehicle.eta}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Distance</p>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">
                          {(vehicle.distance / 1000).toFixed(1)} km
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="space-y-2 text-sm">
                    {vehicle.speed !== undefined && (
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Current Speed</span>
                        <span className="font-medium text-gray-900 dark:text-white">{vehicle.speed} km/h</span>
                      </div>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 dark:text-gray-400">Last Updated</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {new Date(vehicle.lastUpdated).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>

                  {/* Route Stops */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-2">Route Stops</h4>
                    <div className="space-y-2">
                      {vehicle.route.stops.map((stop, index) => (
                        <div
                          key={index}
                          className={`flex items-center gap-2 text-sm ${index < vehicle.route.currentStop
                              ? 'text-green-600 dark:text-green-400'
                              : index === vehicle.route.currentStop
                                ? 'text-blue-600 dark:text-blue-400 font-medium'
                                : 'text-gray-500 dark:text-gray-500'
                            }`}
                        >
                          <div className={`w-2 h-2 rounded-full ${index < vehicle.route.currentStop
                              ? 'bg-green-600'
                              : index === vehicle.route.currentStop
                                ? 'bg-blue-600'
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`} />
                          <span>{stop}</span>
                          {index === vehicle.route.currentStop && (
                            <span className="ml-auto text-xs">(Current)</span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  {vehicle.driverPhone && (
                    <a
                      href={`tel:${vehicle.driverPhone}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <Phone className="w-4 h-4" />
                      Contact Driver
                    </a>
                  )}
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300">
                    <Navigation className="w-4 h-4" />
                    Track Live
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Map View */
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="h-[calc(100vh-250px)]">
              <UserMap
                userLocation={userLocation}
                bins={[]}
                vehicles={vehicles}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
