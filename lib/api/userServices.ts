/**
 * User API Services
 * All user-facing API calls are centralized here
 * 
 * 🔄 TO INTEGRATE REAL APIs:
 * 1. Replace mock data imports with real API calls
 * 2. Update endpoint URLs to match backend
 * 3. Remove simulateDelay() calls
 * 4. Keep the same function signatures for seamless integration
 */

import { api } from './client';
import type {
  UserProfile,
  NearbyBinsResponse,
  NearbyVehiclesResponse,
  ReportsResponse,
  UserNotificationsResponse,
  UserDashboardStats,
  EcoImpact,
  Report,
  CreateReportPayload,
  BinFilters,
  VehicleFilters,
  ReportFilters,
} from '@/types/user';

// Import mock data (REMOVE THESE WHEN REAL APIs ARE READY)
import {
  mockUserProfile,
  mockNearbyBins,
  mockVehicles,
  mockReports,
  mockUserNotifications,
  mockUserDashboardStats,
  mockEcoImpact,
  simulateDelay,
} from './userMockData';

/**
 * User Dashboard Services
 */
export const userDashboardService = {
  /**
   * Get user dashboard statistics
   * 🔄 REPLACE: GET /api/user/dashboard/stats
   */
  async getStats(): Promise<UserDashboardStats> {
    await simulateDelay(300);

    // 🔄 REPLACE WITH:
    // const response = await api.get<UserDashboardStats>('/user/dashboard/stats');
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch stats');

    return mockUserDashboardStats;
  },
};

/**
 * Bins Services
 */
export const userBinsService = {
  /**
   * Get nearby bins based on user location
   * 🔄 REPLACE: GET /api/user/bins/nearby?lat={lat}&lng={lng}
   */
  async getNearbyBins(
    lat: number,
    lng: number,
    filters?: BinFilters
  ): Promise<NearbyBinsResponse> {
    await simulateDelay(400);

    // 🔄 REPLACE WITH:
    // const params = new URLSearchParams({
    //   lat: lat.toString(),
    //   lng: lng.toString(),
    //   ...(filters?.status && { status: filters.status }),
    //   ...(filters?.type && { type: filters.type }),
    //   ...(filters?.maxDistance && { maxDistance: filters.maxDistance.toString() }),
    // });
    // const response = await api.get<NearbyBinsResponse>(`/user/bins/nearby?${params}`);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch nearby bins');

    let filteredBins = [...mockNearbyBins];

    // Apply filters
    if (filters?.status) {
      filteredBins = filteredBins.filter(bin => bin.status === filters.status);
    }
    if (filters?.type) {
      filteredBins = filteredBins.filter(bin => bin.type === filters.type);
    }
    if (filters?.maxDistance) {
      filteredBins = filteredBins.filter(bin => bin.distance <= filters.maxDistance!);
    }

    // Apply sorting
    if (filters?.sortBy) {
      filteredBins.sort((a, b) => {
        let comparison = 0;
        switch (filters.sortBy) {
          case 'distance':
            comparison = a.distance - b.distance;
            break;
          case 'fillLevel':
            comparison = a.fillLevel - b.fillLevel;
            break;
          case 'lastCleaned':
            comparison = new Date(a.lastCleaned).getTime() - new Date(b.lastCleaned).getTime();
            break;
        }
        return filters.sortOrder === 'desc' ? -comparison : comparison;
      });
    }

    return {
      bins: filteredBins,
      total: filteredBins.length,
      userLocation: { lat, lng },
    };
  },

  /**
   * Get bin details by ID
   * 🔄 REPLACE: GET /api/user/bins/{id}
   */
  async getBinById(id: string) {
    await simulateDelay(300);

    // 🔄 REPLACE WITH:
    // const response = await api.get(`/user/bins/${id}`);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch bin details');

    const bin = mockNearbyBins.find(b => b.id === id);
    if (!bin) throw new Error('Bin not found');
    return bin;
  },
};

/**
 * Vehicles Services
 */
export const userVehiclesService = {
  /**
   * Get nearby vehicles based on user location
   * 🔄 REPLACE: GET /api/user/vehicles/nearby?lat={lat}&lng={lng}
   */
  async getNearbyVehicles(
    lat: number,
    lng: number,
    filters?: VehicleFilters
  ): Promise<NearbyVehiclesResponse> {
    await simulateDelay(400);

    // 🔄 REPLACE WITH:
    // const params = new URLSearchParams({
    //   lat: lat.toString(),
    //   lng: lng.toString(),
    //   ...(filters?.status && { status: filters.status }),
    //   ...(filters?.maxDistance && { maxDistance: filters.maxDistance.toString() }),
    // });
    // const response = await api.get<NearbyVehiclesResponse>(`/user/vehicles/nearby?${params}`);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch nearby vehicles');

    let filteredVehicles = [...mockVehicles];

    // Apply filters
    if (filters?.status) {
      filteredVehicles = filteredVehicles.filter(v => v.status === filters.status);
    }
    if (filters?.maxDistance) {
      filteredVehicles = filteredVehicles.filter(v => v.distance <= filters.maxDistance!);
    }

    // Apply sorting
    if (filters?.sortBy) {
      filteredVehicles.sort((a, b) => {
        const comparison = filters.sortBy === 'distance'
          ? a.distance - b.distance
          : 0;
        return filters.sortOrder === 'desc' ? -comparison : comparison;
      });
    }

    return {
      vehicles: filteredVehicles,
      total: filteredVehicles.length,
      userLocation: { lat, lng },
    };
  },

  /**
   * Get vehicle details by ID
   * 🔄 REPLACE: GET /api/user/vehicles/{id}
   */
  async getVehicleById(id: string) {
    await simulateDelay(300);

    // 🔄 REPLACE WITH:
    // const response = await api.get(`/user/vehicles/${id}`);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch vehicle details');

    const vehicle = mockVehicles.find(v => v.id === id);
    if (!vehicle) throw new Error('Vehicle not found');
    return vehicle;
  },
};

/**
 * Reports Services
 */
export const userReportsService = {
  /**
   * Get user's reports
   * 🔄 REPLACE: GET /api/user/reports
   */
  async getReports(filters?: ReportFilters): Promise<ReportsResponse> {
    await simulateDelay(400);

    // 🔄 REPLACE WITH:
    // const params = new URLSearchParams({
    //   ...(filters?.status && { status: filters.status }),
    //   ...(filters?.type && { type: filters.type }),
    //   ...(filters?.dateFrom && { dateFrom: filters.dateFrom }),
    //   ...(filters?.dateTo && { dateTo: filters.dateTo }),
    // });
    // const response = await api.get<ReportsResponse>(`/user/reports?${params}`);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch reports');

    let filteredReports = [...mockReports];

    // Apply filters
    if (filters?.status) {
      filteredReports = filteredReports.filter(r => r.status === filters.status);
    }
    if (filters?.type) {
      filteredReports = filteredReports.filter(r => r.type === filters.type);
    }

    // Calculate stats
    const stats = {
      pending: filteredReports.filter(r => r.status === 'pending').length,
      inProgress: filteredReports.filter(r => r.status === 'in-progress').length,
      resolved: filteredReports.filter(r => r.status === 'resolved').length,
      rejected: filteredReports.filter(r => r.status === 'rejected').length,
    };

    return {
      reports: filteredReports,
      total: filteredReports.length,
      stats,
    };
  },

  /**
   * Create a new report
   * 🔄 REPLACE: POST /api/user/reports
   */
  async createReport(payload: CreateReportPayload): Promise<Report> {
    await simulateDelay(500);

    // 🔄 REPLACE WITH:
    // const formData = new FormData();
    // formData.append('type', payload.type);
    // formData.append('title', payload.title);
    // formData.append('description', payload.description);
    // formData.append('location', JSON.stringify(payload.location));
    // if (payload.binId) formData.append('binId', payload.binId);
    // if (payload.photos) {
    //   payload.photos.forEach(photo => formData.append('photos', photo));
    // }
    // const response = await api.post<Report>('/user/reports', formData);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to create report');

    const newReport: Report = {
      id: `report-${Date.now()}`,
      type: payload.type,
      title: payload.title,
      description: payload.description,
      status: 'pending',
      priority: 'medium',
      location: payload.location,
      binId: payload.binId,
      photos: payload.photos?.map((_, i) => `/images/report-${i}.jpg`),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      userId: 'user-001',
    };

    return newReport;
  },

  /**
   * Get report by ID
   * 🔄 REPLACE: GET /api/user/reports/{id}
   */
  async getReportById(id: string): Promise<Report> {
    await simulateDelay(300);

    // 🔄 REPLACE WITH:
    // const response = await api.get<Report>(`/user/reports/${id}`);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch report');

    const report = mockReports.find(r => r.id === id);
    if (!report) throw new Error('Report not found');
    return report;
  },
};

/**
 * Notifications Services
 */
export const userNotificationsService = {
  /**
   * Get user notifications
   * 🔄 REPLACE: GET /api/user/notifications
   */
  async getNotifications(): Promise<UserNotificationsResponse> {
    await simulateDelay(300);

    // 🔄 REPLACE WITH:
    // const response = await api.get<UserNotificationsResponse>('/user/notifications');
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch notifications');

    const unreadCount = mockUserNotifications.filter(n => !n.read).length;

    return {
      notifications: mockUserNotifications,
      unreadCount,
      total: mockUserNotifications.length,
    };
  },

  /**
   * Mark notification as read
   * 🔄 REPLACE: PATCH /api/user/notifications/{id}/read
   */
  async markAsRead(id: string): Promise<void> {
    await simulateDelay(200);

    // 🔄 REPLACE WITH:
    // const response = await api.patch(`/user/notifications/${id}/read`);
    // if (!response.success) {
    //   throw new Error(response.error || 'Failed to mark notification as read');
    // }

    const notification = mockUserNotifications.find(n => n.id === id);
    if (notification) {
      notification.read = true;
    }
  },

  /**
   * Mark all notifications as read
   * 🔄 REPLACE: PATCH /api/user/notifications/read-all
   */
  async markAllAsRead(): Promise<void> {
    await simulateDelay(300);

    // 🔄 REPLACE WITH:
    // const response = await api.patch('/user/notifications/read-all');
    // if (!response.success) {
    //   throw new Error(response.error || 'Failed to mark all notifications as read');
    // }

    mockUserNotifications.forEach(n => n.read = true);
  },
};

/**
 * Profile Services
 */
export const userProfileService = {
  /**
   * Get user profile
   * 🔄 REPLACE: GET /api/user/profile
   */
  async getProfile(): Promise<UserProfile> {
    await simulateDelay(300);

    // 🔄 REPLACE WITH:
    // const response = await api.get<UserProfile>('/user/profile');
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch profile');

    return mockUserProfile;
  },

  /**
   * Update user profile
   * 🔄 REPLACE: PATCH /api/user/profile
   */
  async updateProfile(updates: Partial<UserProfile>): Promise<UserProfile> {
    await simulateDelay(400);

    // 🔄 REPLACE WITH:
    // const response = await api.patch<UserProfile>('/user/profile', updates);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to update profile');

    Object.assign(mockUserProfile, updates);
    return mockUserProfile;
  },

  /**
   * Update password
   * 🔄 REPLACE: POST /api/user/profile/password
   */
  async updatePassword(currentPassword: string, newPassword: string): Promise<void> {
    await simulateDelay(400);

    // 🔄 REPLACE WITH:
    // const response = await api.post('/user/profile/password', {
    //   currentPassword,
    //   newPassword,
    // });
    // if (!response.success) {
    //   throw new Error(response.error || 'Failed to update password');
    // }

    // Mock success
  },

  /**
   * Upload avatar image
   * 🔄 REPLACE: POST /api/user/profile/avatar
   */
  async uploadAvatar(file: File): Promise<string> {
    await simulateDelay(1000);

    // 🔄 REPLACE WITH:
    // const formData = new FormData();
    // formData.append('avatar', file);
    // const response = await api.post<{ avatarUrl: string }>('/user/profile/avatar', formData);
    // if (response.success && response.data) {
    //   return response.data.avatarUrl;
    // }
    // throw new Error(response.error || 'Failed to upload avatar');

    // Mock successful upload - return a new avatar URL
    const newAvatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${Date.now()}`;

    // Update the mock profile with new avatar
    mockUserProfile.avatar = newAvatarUrl;

    return newAvatarUrl;
  },
};

/**
 * Analytics / Eco Impact Services
 */
export const userAnalyticsService = {
  /**
   * Get eco impact data
   * 🔄 REPLACE: GET /api/user/analytics/eco-impact?period={period}
   */
  async getEcoImpact(period: 'week' | 'month' | 'year' | 'all-time' = 'month'): Promise<EcoImpact> {
    await simulateDelay(400);

    // 🔄 REPLACE WITH:
    // const response = await api.get<EcoImpact>(`/user/analytics/eco-impact?period=${period}`);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch eco impact');

    return { ...mockEcoImpact, period };
  },
};
