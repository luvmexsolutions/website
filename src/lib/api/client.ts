import type { ApiResult, ApiErrorResponse } from '@/types/api';

/**
 * Typed API client for communicating with the backend.
 *
 * NOTE: This client is intended for SERVER-SIDE use only (API routes,
 * server components, etc.). The backend URL comes from the server-only
 * API_URL environment variable.
 *
 * Client-side forms should call internal API routes (e.g., /api/contact),
 * which use this client under the hood.
 */
class ApiClient {
  private baseUrl: string;

  constructor(baseUrl?: string) {
    this.baseUrl = baseUrl || process.env.API_URL || 'http://localhost:8000/api';
  }

  async post<TResponse>(
    endpoint: string,
    data: unknown
  ): Promise<ApiResult<TResponse>> {
    try {
      const res = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
        signal: AbortSignal.timeout(10_000),
      });

      if (!res.ok) {
        const errorBody: ApiErrorResponse = await res.json().catch(() => ({
          message: 'An unexpected error occurred. Please try again.',
        }));

        return {
          success: false,
          error: errorBody.message,
          fieldErrors: errorBody.fieldErrors,
        };
      }

      const result: TResponse = await res.json();
      return { success: true, data: result };
    } catch {
      return {
        success: false,
        error: 'Unable to connect. Please check your internet and try again.',
      };
    }
  }

  async get<TResponse>(endpoint: string): Promise<ApiResult<TResponse>> {
    try {
      const res = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        signal: AbortSignal.timeout(10_000),
      });

      if (!res.ok) {
        const errorBody: ApiErrorResponse = await res.json().catch(() => ({
          message: 'Failed to fetch data.',
        }));

        return { success: false, error: errorBody.message };
      }

      const result: TResponse = await res.json();
      return { success: true, data: result };
    } catch {
      return {
        success: false,
        error: 'Unable to connect. Please check your internet and try again.',
      };
    }
  }
}

export const api = new ApiClient();
