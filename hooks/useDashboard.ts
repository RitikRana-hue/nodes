/**
 * Dashboard-specific hooks
 * Pre-configured hooks for common dashboard operations
 */

import { useApi, useMutation } from './useApi';
import {
  dashboardService,
  binsService,
  usersService,
  notificationsService,
  routesService,
  driversService,
} from '@/lib/api/services';
import type {
  DashboardStats,
  BinsResponse,
  UsersResponse,
  NotificationsResponse,
  RoutesResponse,
  DriversResponse,
  ChartData,
  Bin,
  User,
  Route,
  BinFilters,
  UserFilters,
} from '@/types/api';

/**
 * Hook to fetch dashboard statistics
 * Auto-refreshes every 30 seconds
 * 
 * @example
 * const { data: stats, loading, error, refetch } = useDashboardStats();
 */
export function useDashboardStats() {
  return useApi<DashboardStats>(
    () => dashboardService.getStats(),
    {
      autoFetch: true,
      refetchInterval: 30000, // Refresh every 30 seconds
      cacheTime: 10000, // Cache for 10 seconds
    }
  );
}

/**
 * Hook to fetch chart data
 * 
 * @example
 * const { data: chartData, loading } = useChartData('collections');
 */
export function useChartData(type: string = 'collections') {
  return useApi<ChartData>(
    () => dashboardService.getChartData(type),
    {
      autoFetch: true,
      cacheTime: 60000, // Cache for 1 minute
    }
  );
}

/**
 * Hook to fetch recent activities
 * 
 * @example
 * const { data: activities, loading } = useActivities(10);
 */
export function useActivities(limit: number = 10) {
  return useApi(
    () => dashboardService.getActivities(limit),
    {
      autoFetch: true,
      refetchInterval: 15000, // Refresh every 15 seconds
    }
  );
}

/**
 * Hook to fetch bins with filters
 * 
 * @example
 * const { data: bins, loading, refetch } = useBins({ status: 'active' });
 */
export function useBins(filters?: BinFilters) {
  return useApi<BinsResponse>(
    () => binsService.getBins(filters),
    {
      autoFetch: true,
      cacheTime: 30000, // Cache for 30 seconds
    }
  );
}

/**
 * Hook to fetch single bin
 * 
 * @example
 * const { data: bin, loading } = useBin('BIN-001');
 */
export function useBin(id: string) {
  return useApi<Bin>(
    () => binsService.getBinById(id),
    {
      autoFetch: !!id,
      cacheTime: 30000,
    }
  );
}

/**
 * Hook to create a new bin
 * 
 * @example
 * const { mutate: createBin, loading } = useCreateBin();
 * await createBin({ type: 'General Waste', location: 'Main St' });
 */
export function useCreateBin() {
  return useMutation<Bin, Partial<Bin>>(
    (data) => binsService.createBin(data)
  );
}

/**
 * Hook to update a bin
 * 
 * @example
 * const { mutate: updateBin, loading } = useUpdateBin();
 * await updateBin({ id: 'BIN-001', fillLevel: 85 });
 */
export function useUpdateBin() {
  return useMutation<Bin, { id: string } & Partial<Bin>>(
    ({ id, ...data }) => binsService.updateBin(id, data)
  );
}

/**
 * Hook to delete a bin
 * 
 * @example
 * const { mutate: deleteBin, loading } = useDeleteBin();
 * await deleteBin('BIN-001');
 */
export function useDeleteBin() {
  return useMutation<void, string>(
    (id) => binsService.deleteBin(id)
  );
}

/**
 * Hook to fetch users with filters
 * 
 * @example
 * const { data: users, loading } = useUsers({ role: 'Admin' });
 */
export function useUsers(filters?: UserFilters) {
  return useApi<UsersResponse>(
    () => usersService.getUsers(filters),
    {
      autoFetch: true,
      cacheTime: 60000, // Cache for 1 minute
    }
  );
}

/**
 * Hook to fetch single user
 * 
 * @example
 * const { data: user, loading } = useUser('USR001');
 */
export function useUser(id: string) {
  return useApi<User>(
    () => usersService.getUserById(id),
    {
      autoFetch: !!id,
      cacheTime: 60000,
    }
  );
}

/**
 * Hook to create a new user
 * 
 * @example
 * const { mutate: createUser, loading } = useCreateUser();
 * await createUser({ name: 'John', email: 'john@example.com', role: 'Admin' });
 */
export function useCreateUser() {
  return useMutation<User, Partial<User>>(
    (data) => usersService.createUser(data)
  );
}

/**
 * Hook to update a user
 * 
 * @example
 * const { mutate: updateUser, loading } = useUpdateUser();
 * await updateUser({ id: 'USR001', role: 'Manager' });
 */
export function useUpdateUser() {
  return useMutation<User, { id: string } & Partial<User>>(
    ({ id, ...data }) => usersService.updateUser(id, data)
  );
}

/**
 * Hook to delete a user
 * 
 * @example
 * const { mutate: deleteUser, loading } = useDeleteUser();
 * await deleteUser('USR001');
 */
export function useDeleteUser() {
  return useMutation<void, string>(
    (id) => usersService.deleteUser(id)
  );
}

/**
 * Hook to fetch notifications
 * Auto-refreshes every 10 seconds
 * 
 * @example
 * const { data: notifications, loading, refetch } = useNotifications();
 */
export function useNotifications() {
  return useApi<NotificationsResponse>(
    () => notificationsService.getNotifications(),
    {
      autoFetch: true,
      refetchInterval: 10000, // Refresh every 10 seconds
    }
  );
}

/**
 * Hook to mark notification as read
 * 
 * @example
 * const { mutate: markAsRead, loading } = useMarkNotificationRead();
 * await markAsRead('NOT001');
 */
export function useMarkNotificationRead() {
  return useMutation<void, string>(
    (id) => notificationsService.markAsRead(id)
  );
}

/**
 * Hook to mark all notifications as read
 * 
 * @example
 * const { mutate: markAllRead, loading } = useMarkAllNotificationsRead();
 * await markAllRead();
 */
export function useMarkAllNotificationsRead() {
  return useMutation<void, void>(
    () => notificationsService.markAllAsRead()
  );
}

/**
 * Hook to fetch routes
 * 
 * @example
 * const { data: routes, loading } = useRoutes();
 */
export function useRoutes() {
  return useApi<RoutesResponse>(
    () => routesService.getRoutes(),
    {
      autoFetch: true,
      refetchInterval: 20000, // Refresh every 20 seconds
      cacheTime: 30000,
    }
  );
}

/**
 * Hook to create a new route
 * 
 * @example
 * const { mutate: createRoute, loading } = useCreateRoute();
 * await createRoute({ name: 'Route A', driver: 'John', bins: ['BIN-001'] });
 */
export function useCreateRoute() {
  return useMutation<Route, Partial<Route>>(
    (data) => routesService.createRoute(data)
  );
}

/**
 * Hook to fetch drivers
 * 
 * @example
 * const { data: drivers, loading } = useDrivers();
 */
export function useDrivers() {
  return useApi<DriversResponse>(
    () => driversService.getDrivers(),
    {
      autoFetch: true,
      refetchInterval: 15000, // Refresh every 15 seconds
      cacheTime: 30000,
    }
  );
}

/**
 * Hook to fetch driver location
 * 
 * @example
 * const { data: location, loading } = useDriverLocation('DRV001');
 */
export function useDriverLocation(driverId: string) {
  return useApi<{ lat: number; lng: number } | null>(
    () => driversService.getDriverLocation(driverId),
    {
      autoFetch: !!driverId,
      refetchInterval: 5000, // Refresh every 5 seconds for real-time tracking
    }
  );
}
