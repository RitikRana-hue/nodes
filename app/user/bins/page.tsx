"use client";

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { Map, List, Filter, Search, MapPin, Clock, Trash2 } from 'lucide-react';
import { userBinsService } from '@/lib/api/userServices';
import type { NearbyBin, BinFilters } from '@/types/user';

const UserMap = dynamic(() => import('../components/UserMap'), { ssr: false });

export default function BinsPage() {
  const [bins, setBins] = useState<NearbyBin[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'list' | 'map'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [userLocation] = useState({ lat: 30.7333, lng: 76.7794 });

  const [filters, setFilters] = useState<BinFilters>({
    sortBy: 'distance',
    sortOrder: 'asc',
  });

  const fetchBins = async () => {
    try {
      setLoading(true);
      const response = await userBinsService.getNearbyBins(
        userLocation.lat,
        userLocation.lng,
        filters
      );
      setBins(response.bins);
    } catch (error) {
      console.error('Failed to fetch bins:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBins();
  }, [filters]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'empty': return 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400';
      case 'half': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400';
      case 'full': return 'bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400';
      case 'maintenance': return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  const getFillLevelColor = (fillLevel: number) => {
    if (fillLevel >= 80) return 'bg-red-500';
    if (fillLevel >= 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const filteredBins = bins.filter(bin =>
    bin.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bin.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bin.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Nearby Bins</h1>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              {filteredBins.length} bins found in your area
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

        {/* Search and Filters */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search bins by location, type..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="inline-flex items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            <Filter className="w-5 h-5 mr-2" />
            Filters
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={filters.status || ''}
                  onChange={(e) => setFilters({ ...filters, status: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">All Status</option>
                  <option value="empty">Empty</option>
                  <option value="half">Half Full</option>
                  <option value="full">Full</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Type
                </label>
                <select
                  value={filters.type || ''}
                  onChange={(e) => setFilters({ ...filters, type: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="">All Types</option>
                  <option value="General Waste">General Waste</option>
                  <option value="Recyclable">Recyclable</option>
                  <option value="Organic">Organic</option>
                  <option value="Hazardous">Hazardous</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sort By
                </label>
                <select
                  value={filters.sortBy || 'distance'}
                  onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as any })}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="distance">Distance</option>
                  <option value="fillLevel">Fill Level</option>
                  <option value="lastCleaned">Last Cleaned</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : viewMode === 'list' ? (
          /* List View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBins.map((bin) => (
              <div
                key={bin.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{bin.location}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{bin.address}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(bin.status)}`}>
                      {bin.status}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4 space-y-3">
                  {/* Fill Level */}
                  <div>
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Fill Level</span>
                      <span className="font-medium text-gray-900 dark:text-white">{bin.fillLevel}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${getFillLevelColor(bin.fillLevel)}`}
                        style={{ width: `${bin.fillLevel}%` }}
                      />
                    </div>
                  </div>

                  {/* Info Grid */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Type</p>
                      <p className="font-medium text-gray-900 dark:text-white">{bin.type}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Capacity</p>
                      <p className="font-medium text-gray-900 dark:text-white">{bin.capacity}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Distance</p>
                      <p className="font-medium text-gray-900 dark:text-white">{bin.distance}m</p>
                    </div>
                    <div>
                      <p className="text-gray-600 dark:text-gray-400">Temperature</p>
                      <p className="font-medium text-gray-900 dark:text-white">{bin.temperature}°C</p>
                    </div>
                  </div>

                  {/* Last Cleaned */}
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
                    <Clock className="w-4 h-4" />
                    <span>Last cleaned: {new Date(bin.lastCleaned).toLocaleDateString()}</span>
                  </div>

                  {/* Next Pickup */}
                  {bin.nextPickup && (
                    <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                      <Trash2 className="w-4 h-4" />
                      <span>Next pickup: {new Date(bin.nextPickup).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border-t border-gray-200 dark:border-gray-700">
                  <button className="w-full text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4" />
                    View on Map
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
                bins={filteredBins}
                vehicles={[]}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
