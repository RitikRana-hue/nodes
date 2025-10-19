/**
 * User Dashboard Types
 * Types specific to the user-facing dashboard
 */

// User User Profile
export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address: string;
  avatar?: string;
  location: {
    lat: number;
    lng: number;
  };
  preferences: {
    notifications: boolean;
    emailAlerts: boolean;
    smsAlerts: boolean;
    theme: 'light' | 'dark' | 'system';
    language: string;
  };
  stats: {
    totalReports: number;
    resolvedReports: number;
    contributionScore: number;
  };
}

// Nearby Bin
export interface NearbyBin {
  id: string;
  type: 'General Waste' | 'Recyclable' | 'Organic' | 'Hazardous';
  location: string;
  address: string;
  fillLevel: number;
  status: 'empty' | 'half' | 'full' | 'maintenance';
  lastCleaned: string;
  nextPickup?: string;
  distance: number; // in meters
  coordinates: {
    lat: number;
    lng: number;
  };
  capacity: string;
  temperature?: number;
}

export interface NearbyBinsResponse {
  bins: NearbyBin[];
  total: number;
  userLocation: {
    lat: number;
    lng: number;
  };
}

// Vehicle Tracking
export interface Vehicle {
  id: string;
  vehicleNumber: string;
  driverName: string;
  driverPhone?: string;
  status: 'on-route' | 'idle' | 'maintenance';
  currentLocation: {
    lat: number;
    lng: number;
  };
  route: {
    id: string;
    name: string;
    stops: string[];
    currentStop: number;
    totalStops: number;
  };
  eta: string; // estimated time to user area
  distance: number; // distance from user in meters
  speed?: number; // km/h
  lastUpdated: string;
}

export interface NearbyVehiclesResponse {
  vehicles: Vehicle[];
  total: number;
  userLocation: {
    lat: number;
    lng: number;
  };
}

// Report Types
export interface Report {
  id: string;
  type: 'full-bin' | 'broken-bin' | 'missed-pickup' | 'other';
  title: string;
  description: string;
  status: 'pending' | 'in-progress' | 'resolved' | 'rejected';
  priority: 'low' | 'medium' | 'high';
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  binId?: string;
  photos?: string[];
  createdAt: string;
  updatedAt: string;
  resolvedAt?: string;
  response?: string;
  userId: string;
}

export interface CreateReportPayload {
  type: 'full-bin' | 'broken-bin' | 'missed-pickup' | 'other';
  title: string;
  description: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  binId?: string;
  photos?: File[];
}

export interface ReportsResponse {
  reports: Report[];
  total: number;
  stats: {
    pending: number;
    inProgress: number;
    resolved: number;
    rejected: number;
  };
}

// User Notifications
export interface UserNotification {
  id: string;
  type: 'pickup' | 'maintenance' | 'alert' | 'update' | 'report-status';
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  priority: 'low' | 'medium' | 'high';
  actionUrl?: string;
  metadata?: {
    binId?: string;
    vehicleId?: string;
    reportId?: string;
    eta?: string;
  };
}

export interface UserNotificationsResponse {
  notifications: UserNotification[];
  unreadCount: number;
  total: number;
}

// Dashboard Stats
export interface UserDashboardStats {
  nearbyBins: {
    total: number;
    empty: number;
    half: number;
    full: number;
  };
  nextPickup: {
    date: string;
    time: string;
    eta: string;
  };
  userReports: {
    total: number;
    pending: number;
    resolved: number;
  };
  nearbyVehicles: number;
}

// Eco Impact / Analytics
export interface EcoImpact {
  userId: string;
  period: 'week' | 'month' | 'year' | 'all-time';
  stats: {
    wasteCollected: number; // in kg
    recyclingRate: number; // percentage
    co2Saved: number; // in kg
    treesEquivalent: number;
    contributionScore: number;
  };
  areaStats: {
    areaName: string;
    cleanlinessScore: number;
    improvement: number; // percentage change
    rank: number; // user's area rank in city
  };
  achievements: Achievement[];
  history: {
    date: string;
    wasteCollected: number;
    recyclingRate: number;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt: string;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
}

// Filters
export interface BinFilters {
  status?: 'empty' | 'half' | 'full' | 'maintenance';
  type?: 'General Waste' | 'Recyclable' | 'Organic' | 'Hazardous';
  maxDistance?: number; // in meters
  sortBy?: 'distance' | 'fillLevel' | 'lastCleaned';
  sortOrder?: 'asc' | 'desc';
}

export interface VehicleFilters {
  status?: 'on-route' | 'idle' | 'maintenance';
  maxDistance?: number; // in meters
  sortBy?: 'distance' | 'eta';
  sortOrder?: 'asc' | 'desc';
}

export interface ReportFilters {
  status?: 'pending' | 'in-progress' | 'resolved' | 'rejected';
  type?: 'full-bin' | 'broken-bin' | 'missed-pickup' | 'other';
  dateFrom?: string;
  dateTo?: string;
  sortBy?: 'createdAt' | 'updatedAt' | 'priority';
  sortOrder?: 'asc' | 'desc';
}
