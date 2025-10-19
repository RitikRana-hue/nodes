/**
 * Analytics Dashboard Mock Data
 * Mock data for backend analytics dashboard
 */

import type {
  DashboardOverview,
  AdminUser,
  AdminBin,
  AdminVehicle,
  AdminReport,
  RegionalData,
} from '@/types/analytics';

// Dashboard Overview
export const mockDashboardOverview: DashboardOverview = {
  users: {
    total: 15847,
    active: 12456,
    inactive: 3391,
    newToday: 234,
  },
  drivers: {
    total: 456,
    online: 342,
    offline: 114,
    onRoute: 287,
  },
  bins: {
    total: 8934,
    active: 8456,
    full: 1234,
    needsMaintenance: 89,
    avgFillLevel: 62,
  },
  vehicles: {
    total: 234,
    onRoute: 187,
    idle: 38,
    maintenance: 9,
  },
  reports: {
    total: 4567,
    pending: 234,
    inProgress: 456,
    resolved: 3877,
    todayCount: 89,
  },
};

// Users
export const mockUsers: AdminUser[] = [
  {
    id: 'U001',
    name: 'Rajesh Kumar',
    email: 'rajesh.kumar@example.com',
    role: 'User',
    status: 'Active',
    region: 'Sector 15, Chandigarh',
    registrationDate: '2024-01-15',
    lastLogin: '2024-10-19T14:30:00Z',
    totalReports: 12,
    activityScore: 85,
  },
  {
    id: 'U002',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    role: 'User',
    status: 'Active',
    region: 'Sector 17, Chandigarh',
    registrationDate: '2024-02-20',
    lastLogin: '2024-10-19T10:15:00Z',
    totalReports: 8,
    activityScore: 72,
  },
  {
    id: 'D001',
    name: 'Amit Singh',
    email: 'amit.singh@nodesio.com',
    role: 'Driver',
    status: 'Active',
    region: 'Zone A',
    registrationDate: '2023-11-10',
    lastLogin: '2024-10-19T15:00:00Z',
    totalReports: 0,
    activityScore: 95,
  },
  {
    id: 'U003',
    name: 'Neha Gupta',
    email: 'neha.gupta@example.com',
    role: 'User',
    status: 'Inactive',
    region: 'Sector 22, Chandigarh',
    registrationDate: '2024-03-05',
    lastLogin: '2024-09-15T08:20:00Z',
    totalReports: 3,
    activityScore: 45,
  },
  {
    id: 'A001',
    name: 'Vikram Patel',
    email: 'vikram.patel@nodesio.com',
    role: 'Admin',
    status: 'Active',
    region: 'All Zones',
    registrationDate: '2023-06-01',
    lastLogin: '2024-10-19T16:00:00Z',
    totalReports: 0,
    activityScore: 100,
  },
];

// Bins
export const mockBins: AdminBin[] = [
  {
    id: 'BIN-001',
    location: 'Sector 15 Market',
    address: 'Near City Center, Sector 15',
    status: 'full',
    fillLevel: 95,
    lastCleaned: '2024-10-18T08:00:00Z',
    lastUpdated: '2024-10-19T16:30:00Z',
    sensorId: 'SNS-1001',
    zone: 'Zone A',
    coordinates: { lat: 30.7340, lng: 76.7800 },
    capacity: '240L',
    type: 'General Waste',
  },
  {
    id: 'BIN-002',
    location: 'Sector 17 Plaza',
    address: 'Shopping Complex, Sector 17',
    status: 'active',
    fillLevel: 45,
    lastCleaned: '2024-10-19T06:00:00Z',
    lastUpdated: '2024-10-19T16:25:00Z',
    sensorId: 'SNS-1002',
    zone: 'Zone B',
    coordinates: { lat: 30.7410, lng: 76.7850 },
    capacity: '240L',
    type: 'Recyclable',
  },
  {
    id: 'BIN-003',
    location: 'Sector 22 Park',
    address: 'Rose Garden, Sector 22',
    status: 'maintenance',
    fillLevel: 30,
    lastCleaned: '2024-10-17T10:00:00Z',
    lastUpdated: '2024-10-19T12:00:00Z',
    sensorId: 'SNS-1003',
    zone: 'Zone C',
    coordinates: { lat: 30.7300, lng: 76.7750 },
    capacity: '120L',
    type: 'Organic',
  },
];

// Vehicles
export const mockVehicles: AdminVehicle[] = [
  {
    id: 'VEH-001',
    vehicleNumber: 'CH-01-AB-1234',
    driverName: 'Amit Singh',
    driverId: 'D001',
    status: 'on-route',
    currentRoute: 'Route A - Sector 15-17',
    capacityUsed: 75,
    lastUpdated: '2024-10-19T16:30:00Z',
    location: { lat: 30.7380, lng: 76.7830 },
    todayCollections: 23,
  },
  {
    id: 'VEH-002',
    vehicleNumber: 'CH-01-CD-5678',
    driverName: 'Suresh Kumar',
    driverId: 'D002',
    status: 'idle',
    capacityUsed: 0,
    lastUpdated: '2024-10-19T16:15:00Z',
    location: { lat: 30.7450, lng: 76.7900 },
    todayCollections: 18,
  },
  {
    id: 'VEH-003',
    vehicleNumber: 'CH-01-EF-9012',
    driverName: 'Rajesh Patel',
    driverId: 'D003',
    status: 'maintenance',
    capacityUsed: 0,
    lastUpdated: '2024-10-19T10:00:00Z',
    location: { lat: 30.7500, lng: 76.8000 },
    todayCollections: 0,
  },
];

// Reports
export const mockReports: AdminReport[] = [
  {
    id: 'REP-001',
    userId: 'U001',
    userName: 'Rajesh Kumar',
    category: 'full-bin',
    priority: 'high',
    status: 'pending',
    description: 'Bin overflowing at Sector 15 Market',
    location: 'Sector 15 Market',
    region: 'Zone A',
    timestamp: '2024-10-19T14:30:00Z',
  },
  {
    id: 'REP-002',
    userId: 'U002',
    userName: 'Priya Sharma',
    category: 'damage',
    priority: 'medium',
    status: 'in-progress',
    description: 'Broken bin lid at Sector 17',
    location: 'Sector 17 Plaza',
    region: 'Zone B',
    timestamp: '2024-10-19T10:15:00Z',
    assignedTo: 'Maintenance Team A',
  },
  {
    id: 'REP-003',
    userId: 'U003',
    userName: 'Neha Gupta',
    category: 'missed-pickup',
    priority: 'low',
    status: 'resolved',
    description: 'Scheduled pickup was missed',
    location: 'Sector 22',
    region: 'Zone C',
    timestamp: '2024-10-18T08:00:00Z',
    assignedTo: 'Operations Team',
    resolvedAt: '2024-10-19T12:00:00Z',
  },
];

// Regional Data
export const mockRegionalData: RegionalData[] = [
  {
    region: 'Zone A - Sector 15-17',
    totalBins: 1234,
    avgFillLevel: 65,
    totalUsers: 5678,
    totalDrivers: 45,
    reportsCount: 234,
    vehicleCount: 23,
    cleanlinessScore: 85,
    coordinates: { lat: 30.7340, lng: 76.7800 },
  },
  {
    region: 'Zone B - Sector 18-22',
    totalBins: 2345,
    avgFillLevel: 58,
    totalUsers: 6789,
    totalDrivers: 56,
    reportsCount: 189,
    vehicleCount: 28,
    cleanlinessScore: 88,
    coordinates: { lat: 30.7450, lng: 76.7900 },
  },
  {
    region: 'Zone C - Sector 23-26',
    totalBins: 1567,
    avgFillLevel: 72,
    totalUsers: 4567,
    totalDrivers: 34,
    reportsCount: 312,
    vehicleCount: 19,
    cleanlinessScore: 78,
    coordinates: { lat: 30.7550, lng: 76.8000 },
  },
];

export const simulateDelay = (ms: number = 500) =>
  new Promise((resolve) => setTimeout(resolve, ms));
