/**
 * Backend Analytics Dashboard Types
 * Types for admin analytics and monitoring
 */

// Dashboard Overview
export interface DashboardOverview {
  users: {
    total: number;
    active: number;
    inactive: number;
    newToday: number;
  };
  drivers: {
    total: number;
    online: number;
    offline: number;
    onRoute: number;
  };
  bins: {
    total: number;
    active: number;
    full: number;
    needsMaintenance: number;
    avgFillLevel: number;
  };
  vehicles: {
    total: number;
    onRoute: number;
    idle: number;
    maintenance: number;
  };
  reports: {
    total: number;
    pending: number;
    inProgress: number;
    resolved: number;
    todayCount: number;
  };
}

// User Management
export interface AdminUser {
  id: string;
  name: string;
  email: string;
  role: 'User' | 'Driver' | 'Admin' | 'Analyst' | 'Operator';
  status: 'Active' | 'Inactive' | 'Suspended';
  region: string;
  registrationDate: string;
  lastLogin: string;
  totalReports: number;
  activityScore: number;
}

export interface UsersResponse {
  users: AdminUser[];
  total: number;
  page: number;
  pageSize: number;
}

// Bin Management
export interface AdminBin {
  id: string;
  location: string;
  address: string;
  status: 'active' | 'full' | 'maintenance' | 'offline';
  fillLevel: number;
  lastCleaned: string;
  lastUpdated: string;
  sensorId: string;
  zone: string;
  coordinates: { lat: number; lng: number };
  capacity: string;
  type: string;
}

export interface BinsResponse {
  bins: AdminBin[];
  total: number;
  page: number;
  pageSize: number;
}

// Vehicle Management
export interface AdminVehicle {
  id: string;
  vehicleNumber: string;
  driverName: string;
  driverId: string;
  status: 'on-route' | 'idle' | 'maintenance' | 'offline';
  currentRoute?: string;
  capacityUsed: number;
  lastUpdated: string;
  location: { lat: number; lng: number };
  todayCollections: number;
}

export interface VehiclesResponse {
  vehicles: AdminVehicle[];
  total: number;
  page: number;
  pageSize: number;
}

// Reports Management
export interface AdminReport {
  id: string;
  userId: string;
  userName: string;
  category: 'full-bin' | 'damage' | 'missed-pickup' | 'other';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in-progress' | 'resolved' | 'rejected';
  description: string;
  location: string;
  region: string;
  timestamp: string;
  assignedTo?: string;
  resolvedAt?: string;
}

export interface ReportsResponse {
  reports: AdminReport[];
  total: number;
  page: number;
  pageSize: number;
  stats: {
    pending: number;
    inProgress: number;
    resolved: number;
    rejected: number;
  };
}

// Regional Insights
export interface RegionalData {
  region: string;
  totalBins: number;
  avgFillLevel: number;
  totalUsers: number;
  totalDrivers: number;
  reportsCount: number;
  vehicleCount: number;
  cleanlinessScore: number;
  coordinates: { lat: number; lng: number };
}

export interface RegionalInsights {
  regions: RegionalData[];
  total: number;
}

// Analytics Data
export interface AnalyticsData {
  binFillTrend: {
    date: string;
    avgFillLevel: number;
    fullBins: number;
  }[];
  vehicleEfficiency: {
    vehicleId: string;
    avgPickupTime: number;
    routeOptimization: number;
    collectionsCount: number;
  }[];
  userEngagement: {
    date: string;
    activeUsers: number;
    reportsSubmitted: number;
  }[];
  resolutionTime: {
    category: string;
    avgTime: number; // in hours
  }[];
}

// System Settings
export interface SystemSettings {
  roles: {
    name: string;
    permissions: string[];
  }[];
  apiKeys: {
    id: string;
    name: string;
    key: string;
    createdAt: string;
    lastUsed: string;
    requests: number;
  }[];
  auditLogs: {
    id: string;
    userId: string;
    userName: string;
    action: string;
    timestamp: string;
    details: string;
  }[];
}

// Notifications
export interface SystemNotification {
  id: string;
  type: 'bin-overflow' | 'vehicle-breakdown' | 'report-escalation' | 'sensor-offline';
  severity: 'low' | 'medium' | 'high' | 'critical';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

export interface NotificationsResponse {
  notifications: SystemNotification[];
  unreadCount: number;
  total: number;
}

// Filters
export interface UserFilters {
  role?: string;
  status?: string;
  region?: string;
  dateFrom?: string;
  dateTo?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface BinFilters {
  status?: string;
  zone?: string;
  fillLevelMin?: number;
  fillLevelMax?: number;
  lastCleanedFrom?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface VehicleFilters {
  status?: string;
  driverId?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}

export interface ReportFilters {
  category?: string;
  priority?: string;
  status?: string;
  region?: string;
  dateFrom?: string;
  dateTo?: string;
  search?: string;
  page?: number;
  pageSize?: number;
}
