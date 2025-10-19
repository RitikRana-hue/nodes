/**
 * API Module Exports
 * Central export point for all API-related functionality
 */

// API Client
export { api, apiClient } from './client';
export type { ApiResponse, ApiError } from './client';

// Admin API Services
export {
  dashboardService,
  binsService,
  usersService,
  notificationsService,
  routesService,
  driversService,
} from './services';

// User API Services
export {
  userDashboardService,
  userBinsService,
  userVehiclesService,
  userReportsService,
  userNotificationsService,
  userProfileService,
  userAnalyticsService,
} from './userServices';

// Mock Data (for development only)
export * from './mockData';
export {
  mockUserProfile,
  mockNearbyBins,
  mockVehicles,
  mockReports,
  mockUserNotifications,
  mockUserDashboardStats,
  mockEcoImpact,
} from './userMockData';
