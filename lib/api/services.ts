/**
 * API Services
 * All API calls are centralized here
 * 
 * 🔄 TO INTEGRATE REAL APIs:
 * 1. Replace mock data imports with real API calls
 * 2. Update endpoint URLs
 * 3. Remove simulateDelay() calls
 * 4. Keep the same function signatures for seamless integration
 */

import { api } from './client';
import type {
  DashboardStats,
  BinsResponse,
  UsersResponse,
  NotificationsResponse,
  RoutesResponse,
  ActivitiesResponse,
  DriversResponse,
  ChartData,
  Bin,
  User,
  Route,
  Driver,
  BinFilters,
  UserFilters,
} from '@/types/api';

// Import mock data (REMOVE THESE WHEN REAL APIs ARE READY)
import {
  mockDashboardStats,
  mockBins,
  mockUsers,
  mockNotifications,
  mockRoutes,
  mockActivities,
  mockDrivers,
  mockChartData,
  simulateDelay,
} from './mockData';

/**
 * Dashboard Services
 */
export const dashboardService = {
  /**
   * Get dashboard statistics
   * 🔄 REPLACE: GET /api/dashboard/stats
   */
  async getStats(): Promise<DashboardStats> {
    await simulateDelay(300);
    
    // 🔄 REPLACE WITH:
    // const response = await api.get<DashboardStats>('/dashboard/stats');
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch stats');
    
    return mockDashboardStats;
  },

  /**
   * Get chart data for dashboard
   * 🔄 REPLACE: GET /api/dashboard/charts?type=collections
   */
  async getChartData(type: string = 'collections'): Promise<ChartData> {
    await simulateDelay(400);
    
    // 🔄 REPLACE WITH:
    // const response = await api.get<ChartData>(`/dashboard/charts?type=${type}`);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch chart data');
    
    return mockChartData;
  },

  /**
   * Get recent activities
   * 🔄 REPLACE: GET /api/dashboard/activities?limit=10
   */
  async getActivities(limit: number = 10): Promise<ActivitiesResponse> {
    await simulateDelay(350);
    
    // 🔄 REPLACE WITH:
    // const response = await api.get<ActivitiesResponse>(`/dashboard/activities?limit=${limit}`);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch activities');
    
    return {
      activities: mockActivities.slice(0, limit),
      total: mockActivities.length,
    };
  },
};

/**
 * Bins Services
 */
export const binsService = {
  /**
   * Get all bins with filters
   * 🔄 REPLACE: GET /api/bins?page=1&pageSize=10&status=active
   */
  async getBins(filters?: BinFilters): Promise<BinsResponse> {
    await simulateDelay(400);
    
    // 🔄 REPLACE WITH:
    // const params = new URLSearchParams(filters as any);
    // const response = await api.get<BinsResponse>(`/bins?${params}`);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch bins');
    
    let filteredBins = [...mockBins];
    
    // Apply filters (client-side for mock data)
    if (filters?.status && filters.status !== 'all') {
      filteredBins = filteredBins.filter(bin => bin.status === filters.status);
    }
    if (filters?.type && filters.type !== 'all') {
      filteredBins = filteredBins.filter(bin => bin.type === filters.type);
    }
    if (filters?.search) {
      const search = filters.search.toLowerCase();
      filteredBins = filteredBins.filter(
        bin =>
          bin.id.toLowerCase().includes(search) ||
          bin.location.toLowerCase().includes(search)
      );
    }
    
    return {
      bins: filteredBins,
      total: filteredBins.length,
      page: filters?.page || 1,
      pageSize: filters?.pageSize || 10,
    };
  },

  /**
   * Get single bin by ID
   * 🔄 REPLACE: GET /api/bins/:id
   */
  async getBinById(id: string): Promise<Bin> {
    await simulateDelay(300);
    
    // 🔄 REPLACE WITH:
    // const response = await api.get<Bin>(`/bins/${id}`);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Bin not found');
    
    const bin = mockBins.find(b => b.id === id);
    if (!bin) throw new Error('Bin not found');
    return bin;
  },

  /**
   * Create new bin
   * 🔄 REPLACE: POST /api/bins
   */
  async createBin(data: Partial<Bin>): Promise<Bin> {
    await simulateDelay(500);
    
    // 🔄 REPLACE WITH:
    // const response = await api.post<Bin>('/bins', data);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to create bin');
    
    const newBin: Bin = {
      id: `BIN-${Date.now()}`,
      type: data.type || 'General Waste',
      location: data.location || '',
      fillLevel: 0,
      status: 'active',
      lastUpdated: new Date().toISOString(),
      capacity: data.capacity || '120L',
      ...data,
    } as Bin;
    
    return newBin;
  },

  /**
   * Update bin
   * 🔄 REPLACE: PUT /api/bins/:id
   */
  async updateBin(id: string, data: Partial<Bin>): Promise<Bin> {
    await simulateDelay(500);
    
    // 🔄 REPLACE WITH:
    // const response = await api.put<Bin>(`/bins/${id}`, data);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to update bin');
    
    const bin = mockBins.find(b => b.id === id);
    if (!bin) throw new Error('Bin not found');
    return { ...bin, ...data };
  },

  /**
   * Delete bin
   * 🔄 REPLACE: DELETE /api/bins/:id
   */
  async deleteBin(id: string): Promise<void> {
    await simulateDelay(500);
    
    // 🔄 REPLACE WITH:
    // const response = await api.delete(`/bins/${id}`);
    // if (!response.success) {
    //   throw new Error(response.error || 'Failed to delete bin');
    // }
    
    console.log(`Bin ${id} deleted (mock)`);
  },
};

/**
 * Users Services
 */
export const usersService = {
  /**
   * Get all users with filters
   * 🔄 REPLACE: GET /api/users?page=1&pageSize=10
   */
  async getUsers(filters?: UserFilters): Promise<UsersResponse> {
    await simulateDelay(400);
    
    // 🔄 REPLACE WITH:
    // const params = new URLSearchParams(filters as any);
    // const response = await api.get<UsersResponse>(`/users?${params}`);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch users');
    
    let filteredUsers = [...mockUsers];
    
    if (filters?.role && filters.role !== 'all') {
      filteredUsers = filteredUsers.filter(user => user.role === filters.role);
    }
    if (filters?.status && filters.status !== 'all') {
      filteredUsers = filteredUsers.filter(user => user.status === filters.status);
    }
    if (filters?.search) {
      const search = filters.search.toLowerCase();
      filteredUsers = filteredUsers.filter(
        user =>
          user.name.toLowerCase().includes(search) ||
          user.email.toLowerCase().includes(search)
      );
    }
    
    return {
      users: filteredUsers,
      total: filteredUsers.length,
      page: filters?.page || 1,
      pageSize: filters?.pageSize || 10,
    };
  },

  /**
   * Get single user by ID
   * 🔄 REPLACE: GET /api/users/:id
   */
  async getUserById(id: string): Promise<User> {
    await simulateDelay(300);
    
    // 🔄 REPLACE WITH:
    // const response = await api.get<User>(`/users/${id}`);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'User not found');
    
    const user = mockUsers.find(u => u.id === id);
    if (!user) throw new Error('User not found');
    return user;
  },

  /**
   * Create new user
   * 🔄 REPLACE: POST /api/users
   */
  async createUser(data: Partial<User>): Promise<User> {
    await simulateDelay(500);
    
    // 🔄 REPLACE WITH:
    // const response = await api.post<User>('/users', data);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to create user');
    
    const newUser: User = {
      id: `USR${Date.now()}`,
      name: data.name || '',
      email: data.email || '',
      role: data.role || 'Viewer',
      status: 'Active',
      lastActive: new Date().toISOString(),
      ...data,
    } as User;
    
    return newUser;
  },

  /**
   * Update user
   * 🔄 REPLACE: PUT /api/users/:id
   */
  async updateUser(id: string, data: Partial<User>): Promise<User> {
    await simulateDelay(500);
    
    // 🔄 REPLACE WITH:
    // const response = await api.put<User>(`/users/${id}`, data);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to update user');
    
    const user = mockUsers.find(u => u.id === id);
    if (!user) throw new Error('User not found');
    return { ...user, ...data };
  },

  /**
   * Delete user
   * 🔄 REPLACE: DELETE /api/users/:id
   */
  async deleteUser(id: string): Promise<void> {
    await simulateDelay(500);
    
    // 🔄 REPLACE WITH:
    // const response = await api.delete(`/users/${id}`);
    // if (!response.success) {
    //   throw new Error(response.error || 'Failed to delete user');
    // }
    
    console.log(`User ${id} deleted (mock)`);
  },
};

/**
 * Notifications Services
 */
export const notificationsService = {
  /**
   * Get all notifications
   * 🔄 REPLACE: GET /api/notifications
   */
  async getNotifications(): Promise<NotificationsResponse> {
    await simulateDelay(350);
    
    // 🔄 REPLACE WITH:
    // const response = await api.get<NotificationsResponse>('/notifications');
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch notifications');
    
    const unreadCount = mockNotifications.filter(n => !n.read).length;
    
    return {
      notifications: mockNotifications,
      unreadCount,
      total: mockNotifications.length,
    };
  },

  /**
   * Mark notification as read
   * 🔄 REPLACE: PATCH /api/notifications/:id/read
   */
  async markAsRead(id: string): Promise<void> {
    await simulateDelay(300);
    
    // 🔄 REPLACE WITH:
    // const response = await api.patch(`/notifications/${id}/read`);
    // if (!response.success) {
    //   throw new Error(response.error || 'Failed to mark as read');
    // }
    
    console.log(`Notification ${id} marked as read (mock)`);
  },

  /**
   * Mark all notifications as read
   * 🔄 REPLACE: PATCH /api/notifications/read-all
   */
  async markAllAsRead(): Promise<void> {
    await simulateDelay(400);
    
    // 🔄 REPLACE WITH:
    // const response = await api.patch('/notifications/read-all');
    // if (!response.success) {
    //   throw new Error(response.error || 'Failed to mark all as read');
    // }
    
    console.log('All notifications marked as read (mock)');
  },
};

/**
 * Routes Services
 */
export const routesService = {
  /**
   * Get all routes
   * 🔄 REPLACE: GET /api/routes
   */
  async getRoutes(): Promise<RoutesResponse> {
    await simulateDelay(400);
    
    // 🔄 REPLACE WITH:
    // const response = await api.get<RoutesResponse>('/routes');
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch routes');
    
    return {
      routes: mockRoutes,
      total: mockRoutes.length,
      optimizationScore: 92,
    };
  },

  /**
   * Create new route
   * 🔄 REPLACE: POST /api/routes
   */
  async createRoute(data: Partial<Route>): Promise<Route> {
    await simulateDelay(500);
    
    // 🔄 REPLACE WITH:
    // const response = await api.post<Route>('/routes', data);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to create route');
    
    const newRoute: Route = {
      id: `R-${Date.now()}`,
      name: data.name || '',
      driver: data.driver || '',
      driverId: data.driverId || '',
      bins: data.bins || [],
      status: 'pending',
      distance: data.distance || 0,
      estimatedTime: data.estimatedTime || 0,
      ...data,
    } as Route;
    
    return newRoute;
  },
};

/**
 * Drivers Services
 */
export const driversService = {
  /**
   * Get all drivers
   * 🔄 REPLACE: GET /api/drivers
   */
  async getDrivers(): Promise<DriversResponse> {
    await simulateDelay(400);
    
    // 🔄 REPLACE WITH:
    // const response = await api.get<DriversResponse>('/drivers');
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // throw new Error(response.error || 'Failed to fetch drivers');
    
    return {
      drivers: mockDrivers,
      total: mockDrivers.length,
    };
  },

  /**
   * Get driver location
   * 🔄 REPLACE: GET /api/drivers/:id/location
   */
  async getDriverLocation(id: string): Promise<{ lat: number; lng: number } | null> {
    await simulateDelay(300);
    
    // 🔄 REPLACE WITH:
    // const response = await api.get<{ lat: number; lng: number }>(`/drivers/${id}/location`);
    // if (response.success && response.data) {
    //   return response.data;
    // }
    // return null;
    
    const driver = mockDrivers.find(d => d.id === id);
    return driver?.location || null;
  },
};
