/**
 * HQ Dashboard Types
 * Enterprise-level types for headquarters dashboard
 */

// Authentication & Users
export interface HQUser {
  id: string;
  name: string;
  email: string;
  role: 'Super Admin' | 'Regional Admin' | 'Analyst' | 'Operator';
  status: 'Active' | 'Inactive' | 'Suspended';
  region?: string;
  lastLogin: string;
  sessionTime: number;
  permissions: string[];
}

// Global Overview
export interface GlobalKPIs {
  regions: {
    total: number;
    active: number;
    critical: number;
  };
  cities: {
    total: number;
    active: number;
    monitored: number;
  };
  users: {
    total: number;
    admins: number;
    drivers: number;
    users: number;
    online: number;
  };
  bins: {
    total: number;
    active: number;
    full: number;
    offline: number;
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
    resolved: number;
    todayCount: number;
    resolutionRate: number;
  };
}

// Regional Data
export interface Region {
  id: string;
  name: string;
  city: string;
  country: string;
  coordinates: { lat: number; lng: number };
  avgFillLevel: number;
  activeDrivers: number;
  reportsPending: number;
  sensorHealth: number;
  healthScore: number;
  performance: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  totalBins: number;
  activeBins: number;
  vehicles: number;
  population: number;
}

// IoT Sensors
export interface Sensor {
  id: string;
  binId: string;
  location: string;
  status: 'Active' | 'Offline' | 'Faulty' | 'Maintenance';
  fillLevel: number;
  lastUpdated: string;
  dataDelay: number;
  battery: number;
  temperature: number;
  coordinates: { lat: number; lng: number };
}

export interface SensorStats {
  total: number;
  active: number;
  offline: number;
  faulty: number;
  maintenance: number;
  avgResponseTime: number;
}

// Vehicles
export interface HQVehicle {
  id: string;
  vehicleNumber: string;
  driverName: string;
  driverId: string;
  region: string;
  status: 'Idle' | 'On Route' | 'Maintenance' | 'Emergency';
  capacityUsed: number;
  routeName?: string;
  currentLocation: { lat: number; lng: number };
  lastUpdated: string;
  todayCollections: number;
  efficiency: number;
}

// Reports
export interface HQReport {
  id: string;
  userId: string;
  userName: string;
  region: string;
  category: 'Full Bin' | 'Damage' | 'Missed Pickup' | 'Sensor Issue' | 'Other';
  priority: 'Low' | 'Medium' | 'High' | 'Critical';
  status: 'Pending' | 'Assigned' | 'In Progress' | 'Resolved' | 'Closed';
  description: string;
  location: string;
  assignedTo?: string;
  createdAt: string;
  resolvedAt?: string;
  resolutionTime?: number;
}

// AI Predictions
export interface AIPrediction {
  id: string;
  type: 'Overflow' | 'Route Inefficiency' | 'Sensor Anomaly' | 'Maintenance';
  region: string;
  location: string;
  confidence: number;
  predictedTime: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
  recommendation: string;
  affectedAssets: string[];
}

// System Alerts
export interface SystemAlert {
  id: string;
  type: 'Overflow' | 'Vehicle Delay' | 'Sensor Offline' | 'Report Escalation' | 'System';
  severity: 'Info' | 'Warning' | 'Error' | 'Critical';
  title: string;
  message: string;
  region: string;
  timestamp: string;
  read: boolean;
  actionRequired: boolean;
  actionUrl?: string;
}

// API Keys
export interface APIKey {
  id: string;
  name: string;
  key: string;
  permissions: string[];
  createdAt: string;
  lastUsed: string;
  requestCount: number;
  status: 'Active' | 'Revoked';
}

// Audit Logs
export interface AuditLog {
  id: string;
  userId: string;
  userName: string;
  action: string;
  resource: string;
  details: string;
  ipAddress: string;
  timestamp: string;
  status: 'Success' | 'Failed';
}

// Charts Data
export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface PerformanceMetrics {
  region: string;
  efficiency: number;
  fillRate: number;
  responseTime: number;
  satisfaction: number;
}

// Theme
export type Theme = 'light' | 'dark' | 'system';

// Filters
export interface RegionFilters {
  search?: string;
  performance?: string;
  healthScore?: { min: number; max: number };
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface SensorFilters {
  status?: string;
  region?: string;
  batteryLevel?: { min: number; max: number };
  search?: string;
}

export interface VehicleFilters {
  status?: string;
  region?: string;
  efficiency?: { min: number; max: number };
  search?: string;
}

export interface ReportFilters {
  category?: string;
  priority?: string;
  status?: string;
  region?: string;
  dateFrom?: string;
  dateTo?: string;
  search?: string;
}
