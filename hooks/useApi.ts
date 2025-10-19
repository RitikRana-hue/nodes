/**
 * Custom Hooks for API Data Fetching
 * Reusable hooks with loading, error, and caching states
 */

import { useState, useEffect, useCallback, useRef } from 'react';

export interface UseApiOptions {
  autoFetch?: boolean;
  cacheTime?: number; // Cache duration in milliseconds
  refetchInterval?: number; // Auto-refetch interval in milliseconds
  onSuccess?: (data: any) => void;
  onError?: (error: string) => void;
}

export interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  mutate: (newData: T) => void;
}

/**
 * Generic hook for fetching data from API
 * 
 * @example
 * const { data, loading, error, refetch } = useApi(
 *   () => dashboardService.getStats(),
 *   { autoFetch: true, refetchInterval: 30000 }
 * );
 */
export function useApi<T>(
  fetcher: () => Promise<T>,
  options: UseApiOptions = {}
): UseApiResult<T> {
  const {
    autoFetch = true,
    cacheTime = 0,
    refetchInterval = 0,
    onSuccess,
    onError,
  } = options;

  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(autoFetch);
  const [error, setError] = useState<string | null>(null);

  const cacheRef = useRef<{ data: T; timestamp: number } | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const fetchData = useCallback(async () => {
    // Check cache
    if (cacheRef.current && cacheTime > 0) {
      const age = Date.now() - cacheRef.current.timestamp;
      if (age < cacheTime) {
        setData(cacheRef.current.data);
        setLoading(false);
        return;
      }
    }

    setLoading(true);
    setError(null);

    try {
      const result = await fetcher();
      setData(result);
      
      // Update cache
      if (cacheTime > 0) {
        cacheRef.current = {
          data: result,
          timestamp: Date.now(),
        };
      }

      onSuccess?.(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      onError?.(errorMessage);
    } finally {
      setLoading(false);
    }
  }, [fetcher, cacheTime, onSuccess, onError]);

  // Auto-fetch on mount
  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [autoFetch, fetchData]);

  // Set up refetch interval
  useEffect(() => {
    if (refetchInterval > 0) {
      intervalRef.current = setInterval(() => {
        fetchData();
      }, refetchInterval);

      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [refetchInterval, fetchData]);

  // Manual mutate function (optimistic updates)
  const mutate = useCallback((newData: T) => {
    setData(newData);
    if (cacheTime > 0) {
      cacheRef.current = {
        data: newData,
        timestamp: Date.now(),
      };
    }
  }, [cacheTime]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
    mutate,
  };
}

/**
 * Hook for paginated data fetching
 */
export interface UsePaginatedApiOptions<T> extends UseApiOptions {
  initialPage?: number;
  pageSize?: number;
}

export interface UsePaginatedApiResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
  mutate: (newData: T) => void;
  page: number;
  setPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  hasMore: boolean;
}

export function usePaginatedApi<T>(
  fetcher: (page: number, pageSize: number) => Promise<T & { total?: number }>,
  options: UsePaginatedApiOptions<T> = {}
): UsePaginatedApiResult<T> {
  const { initialPage = 1, pageSize = 10, ...apiOptions } = options;
  const [page, setPage] = useState(initialPage);

  const paginatedFetcher = useCallback(
    () => fetcher(page, pageSize),
    [fetcher, page, pageSize]
  );

  const apiResult = useApi(paginatedFetcher, apiOptions);

  const hasMore = apiResult.data
    ? (apiResult.data as any).total > page * pageSize
    : false;

  const nextPage = useCallback(() => {
    if (hasMore) {
      setPage((p) => p + 1);
    }
  }, [hasMore]);

  const prevPage = useCallback(() => {
    setPage((p) => Math.max(1, p - 1));
  }, []);

  return {
    data: apiResult.data,
    loading: apiResult.loading,
    error: apiResult.error,
    refetch: apiResult.refetch,
    mutate: apiResult.mutate as (newData: T) => void,
    page,
    setPage,
    nextPage,
    prevPage,
    hasMore,
  };
}

/**
 * Hook for mutations (POST, PUT, DELETE)
 */
export interface UseMutationResult<T, V> {
  mutate: (variables: V) => Promise<T | null>;
  data: T | null;
  loading: boolean;
  error: string | null;
  reset: () => void;
}

export function useMutation<T, V>(
  mutationFn: (variables: V) => Promise<T>
): UseMutationResult<T, V> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const mutate = useCallback(
    async (variables: V): Promise<T | null> => {
      setLoading(true);
      setError(null);

      try {
        const result = await mutationFn(variables);
        setData(result);
        return result;
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Mutation failed';
        setError(errorMessage);
        return null;
      } finally {
        setLoading(false);
      }
    },
    [mutationFn]
  );

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  return {
    mutate,
    data,
    loading,
    error,
    reset,
  };
}
