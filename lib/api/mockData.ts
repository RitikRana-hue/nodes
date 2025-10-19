/**
 * Mock Data Provider
 * Realistic placeholder data for development
 * 
 * 🔄 REPLACE THIS: When real APIs are ready, delete this file
 * and update the service functions to call real endpoints
 */

import type {
  DashboardStats,
  Bin,
  User,
  Notification,
  Route,
  Activity,
  Driver,
  ChartData,
} from '@/types/api';

/**
 * Mock Dashboard Stats
 */
export const mockDashboardStats: DashboardStats = {
  totalBins: 1247,
  activeBins: 1189,
  collectionRate: 94.2,
  costSavings: 45000,
  fillLevelAverage: 67,
  alertsCount: 23,
  routesOptimized: 156,
  co2Reduced: 12500,
};

/**
 * Mock Bins Data
 */
export const mockBins: Bin[] = [
  {
    id: 'BIN-001',
    type: 'General Waste',
    location: 'Main Street, Block A',
    fillLevel: 78,
    status: 'active',
    lastUpdated: new Date(Date.now() - 30 * 60000).toISOString(),
    capacity: '120L',
    coordinates: { lat: 40.7128, lng: -74.0060 },
    temperature: 22,
    batteryLevel: 85,
  },
  {
    id: 'BIN-002',
    type: 'Recyclable',
    location: 'Park Entrance',
    fillLevel: 45,
    status: 'active',
    lastUpdated: new Date(Date.now() - 45 * 60000).toISOString(),
    capacity: '80L',
    coordinates: { lat: 40.7138, lng: -74.0070 },
    temperature: 20,
    batteryLevel: 92,
  },
  {
    id: 'BIN-003',
    type: 'Organic',
    location: 'Cafeteria Area',
    fillLevel: 92,
    status: 'full',
    lastUpdated: new Date(Date.now() - 10 * 60000).toISOString(),
    capacity: '100L',
    coordinates: { lat: 40.7148, lng: -74.0080 },
    temperature: 24,
    batteryLevel: 78,
  },
  {
    id: 'BIN-004',
    type: 'General Waste',
    location: 'Office Building B',
    fillLevel: 15,
    status: 'active',
    lastUpdated: new Date(Date.now() - 120 * 60000).toISOString(),
    capacity: '120L',
    coordinates: { lat: 40.7158, lng: -74.0090 },
    temperature: 21,
    batteryLevel: 95,
  },
  {
    id: 'BIN-005',
    type: 'Recyclable',
    location: 'Shopping Mall',
    fillLevel: 63,
    status: 'active',
    lastUpdated: new Date(Date.now() - 60 * 60000).toISOString(),
    capacity: '150L',
    coordinates: { lat: 40.7168, lng: -74.0100 },
    temperature: 23,
    batteryLevel: 88,
  },
  {
    id: 'BIN-006',
    type: 'Hazardous',
    location: 'Industrial Zone',
    fillLevel: 34,
    status: 'maintenance',
    lastUpdated: new Date(Date.now() - 180 * 60000).toISOString(),
    capacity: '60L',
    coordinates: { lat: 40.7178, lng: -74.0110 },
    temperature: 19,
    batteryLevel: 45,
  },
];

/**
 * Mock Users Data
 */
export const mockUsers: User[] = [
  {
    id: 'USR001',
    name: 'John Doe',
    email: 'john.doe@nodesio.com',
    role: 'Admin',
    status: 'Active',
    lastActive: new Date(Date.now() - 15 * 60000).toISOString(),
    avatar: 'JD',
    phone: '+1 234 567 8900',
    department: 'Operations',
  },
  {
    id: 'USR002',
    name: 'Jane Smith',
    email: 'jane.smith@nodesio.com',
    role: 'Manager',
    status: 'Active',
    lastActive: new Date(Date.now() - 30 * 60000).toISOString(),
    avatar: 'JS',
    phone: '+1 234 567 8901',
    department: 'Management',
  },
  {
    id: 'USR003',
    name: 'Mike Brown',
    email: 'mike.brown@nodesio.com',
    role: 'Operator',
    status: 'Inactive',
    lastActive: new Date(Date.now() - 2 * 24 * 60 * 60000).toISOString(),
    avatar: 'MB',
    phone: '+1 234 567 8902',
    department: 'Field Operations',
  },
  {
    id: 'USR004',
    name: 'Lisa White',
    email: 'lisa.white@nodesio.com',
    role: 'Viewer',
    status: 'Active',
    lastActive: new Date(Date.now() - 5 * 60000).toISOString(),
    avatar: 'LW',
    phone: '+1 234 567 8903',
    department: 'Analytics',
  },
];

/**
 * Mock Notifications Data
 */
export const mockNotifications: Notification[] = [
  {
    id: 'NOT001',
    type: 'alert',
    title: 'Bin Full Alert',
    message: 'BIN-003 in Cafeteria Area has reached 92% capacity',
    timestamp: new Date(Date.now() - 10 * 60000).toISOString(),
    read: false,
    priority: 'high',
    actionUrl: '/dashboard/bins/BIN-003',
  },
  {
    id: 'NOT002',
    type: 'warning',
    title: 'Maintenance Required',
    message: 'BIN-006 requires maintenance check',
    timestamp: new Date(Date.now() - 30 * 60000).toISOString(),
    read: false,
    priority: 'medium',
    actionUrl: '/dashboard/bins/BIN-006',
  },
  {
    id: 'NOT003',
    type: 'success',
    title: 'Route Completed',
    message: 'Route R-045 completed successfully by Driver John',
    timestamp: new Date(Date.now() - 60 * 60000).toISOString(),
    read: true,
    priority: 'low',
  },
  {
    id: 'NOT004',
    type: 'info',
    title: 'System Update',
    message: 'Dashboard analytics updated with latest data',
    timestamp: new Date(Date.now() - 120 * 60000).toISOString(),
    read: true,
    priority: 'low',
  },
  {
    id: 'NOT005',
    type: 'alert',
    title: 'Battery Low',
    message: 'BIN-006 battery level at 45%',
    timestamp: new Date(Date.now() - 180 * 60000).toISOString(),
    read: false,
    priority: 'medium',
  },
];

/**
 * Mock Routes Data
 */
export const mockRoutes: Route[] = [
  {
    id: 'R-001',
    name: 'Downtown Route A',
    driver: 'John Driver',
    driverId: 'DRV001',
    bins: ['BIN-001', 'BIN-002', 'BIN-005'],
    status: 'active',
    distance: 12.5,
    estimatedTime: 45,
    startTime: new Date(Date.now() - 30 * 60000).toISOString(),
    efficiency: 92,
  },
  {
    id: 'R-002',
    name: 'Industrial Zone B',
    driver: 'Mike Collector',
    driverId: 'DRV002',
    bins: ['BIN-003', 'BIN-004', 'BIN-006'],
    status: 'pending',
    distance: 18.3,
    estimatedTime: 60,
    efficiency: 88,
  },
  {
    id: 'R-003',
    name: 'Residential Area C',
    driver: 'Sarah Routes',
    driverId: 'DRV003',
    bins: ['BIN-007', 'BIN-008'],
    status: 'completed',
    distance: 8.7,
    estimatedTime: 30,
    actualTime: 28,
    startTime: new Date(Date.now() - 120 * 60000).toISOString(),
    endTime: new Date(Date.now() - 90 * 60000).toISOString(),
    efficiency: 95,
  },
];

/**
 * Mock Activities Data
 */
export const mockActivities: Activity[] = [
  {
    id: 'ACT001',
    type: 'collection',
    description: 'Bin BIN-001 collected successfully',
    timestamp: new Date(Date.now() - 15 * 60000).toISOString(),
    user: 'John Driver',
    binId: 'BIN-001',
    severity: 'low',
  },
  {
    id: 'ACT002',
    type: 'alert',
    description: 'High fill level detected in BIN-003',
    timestamp: new Date(Date.now() - 30 * 60000).toISOString(),
    binId: 'BIN-003',
    severity: 'high',
  },
  {
    id: 'ACT003',
    type: 'maintenance',
    description: 'Maintenance completed on BIN-006',
    timestamp: new Date(Date.now() - 60 * 60000).toISOString(),
    user: 'Mike Brown',
    binId: 'BIN-006',
    severity: 'medium',
  },
  {
    id: 'ACT004',
    type: 'system',
    description: 'System backup completed successfully',
    timestamp: new Date(Date.now() - 120 * 60000).toISOString(),
    severity: 'low',
  },
];

/**
 * Mock Drivers Data
 */
export const mockDrivers: Driver[] = [
  {
    id: 'DRV001',
    name: 'John Driver',
    email: 'john.driver@nodesio.com',
    phone: '+1 234 567 9000',
    status: 'on-route',
    currentRoute: 'R-001',
    vehicleId: 'VEH-101',
    completedRoutes: 145,
    rating: 4.8,
    location: { lat: 40.7128, lng: -74.0060 },
  },
  {
    id: 'DRV002',
    name: 'Mike Collector',
    email: 'mike.collector@nodesio.com',
    phone: '+1 234 567 9001',
    status: 'available',
    vehicleId: 'VEH-102',
    completedRoutes: 132,
    rating: 4.6,
  },
  {
    id: 'DRV003',
    name: 'Sarah Routes',
    email: 'sarah.routes@nodesio.com',
    phone: '+1 234 567 9002',
    status: 'offline',
    vehicleId: 'VEH-103',
    completedRoutes: 98,
    rating: 4.9,
  },
];

/**
 * Mock Chart Data
 */
export const mockChartData: ChartData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      label: 'Collections',
      data: [45, 52, 48, 61, 55, 42, 38],
      backgroundColor: 'rgba(59, 130, 246, 0.5)',
      borderColor: 'rgba(59, 130, 246, 1)',
    },
    {
      label: 'Alerts',
      data: [12, 8, 15, 10, 14, 9, 11],
      backgroundColor: 'rgba(239, 68, 68, 0.5)',
      borderColor: 'rgba(239, 68, 68, 1)',
    },
  ],
};

/**
 * Simulate API delay
 */
export const simulateDelay = (ms: number = 500): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
