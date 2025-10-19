/**
 * API Response Types
 * Define all API response structures here
 */

// Dashboard Stats
export interface DashboardStats {
  totalBins: number;
  activeBins: number;
  collectionRate: number;
  costSavings: number;
  fillLevelAverage: number;
  alertsCount: number;
  routesOptimized: number;
  co2Reduced: number;
}

// Bin Types
export interface Bin {
  id: string;
  type: 'General Waste' | 'Recyclable' | 'Organic' | 'Hazardous';
  location: string;
  fillLevel: number;
  status: 'active' | 'inactive' | 'maintenance' | 'full';
  lastUpdated: string;
  capacity: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  temperature?: number;
  batteryLevel?: number;
}

export interface BinsResponse {
  bins: Bin[];
  total: number;
  page: number;
  pageSize: number;
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'Admin' | 'Manager' | 'Operator' | 'Viewer';
  status: 'Active' | 'Inactive' | 'Pending';
  lastActive: string;
  avatar?: string;
  phone?: string;
  department?: string;
}

export interface UsersResponse {
  users: User[];
  total: number;
  page: number;
  pageSize: number;
}

// Notification Types
export interface Notification {
  id: string;
  type: 'alert' | 'info' | 'success' | 'warning' | 'error';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high' | 'urgent';
  actionUrl?: string;
  metadata?: Record<string, any>;
}

export interface NotificationsResponse {
  notifications: Notification[];
  unreadCount: number;
  total: number;
}

// Route Types
export interface Route {
  id: string;
  name: string;
  driver: string;
  driverId: string;
  bins: string[];
  status: 'active' | 'completed' | 'pending' | 'cancelled';
  distance: number;
  estimatedTime: number;
  actualTime?: number;
  startTime?: string;
  endTime?: string;
  efficiency?: number;
}

export interface RoutesResponse {
  routes: Route[];
  total: number;
  optimizationScore: number;
}

// Activity Types
export interface Activity {
  id: string;
  type: 'collection' | 'maintenance' | 'alert' | 'system';
  description: string;
  timestamp: string;
  user?: string;
  binId?: string;
  severity?: 'low' | 'medium' | 'high';
}

export interface ActivitiesResponse {
  activities: Activity[];
  total: number;
}

// Chart Data Types
export interface ChartDataPoint {
  label: string;
  value: number;
  timestamp?: string;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
  }[];
}

// Driver Types
export interface Driver {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'available' | 'on-route' | 'offline';
  currentRoute?: string;
  vehicleId: string;
  completedRoutes: number;
  rating: number;
  location?: {
    lat: number;
    lng: number;
  };
}

export interface DriversResponse {
  drivers: Driver[];
  total: number;
}

// Settings Types
export interface Settings {
  notifications: {
    email: boolean;
    push: boolean;
    sms: boolean;
  };
  alerts: {
    binFull: boolean;
    maintenance: boolean;
    routeDelay: boolean;
  };
  display: {
    theme: 'light' | 'dark' | 'system';
    language: string;
    timezone: string;
  };
  system: {
    autoRefresh: boolean;
    refreshInterval: number;
    dataRetention: number;
  };
}

// Pagination
export interface PaginationParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// Filters
export interface BinFilters extends PaginationParams {
  status?: string;
  type?: string;
  search?: string;
  fillLevel?: {
    min?: number;
    max?: number;
  };
}

export interface UserFilters extends PaginationParams {
  role?: string;
  status?: string;
  search?: string;
}
