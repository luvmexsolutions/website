import { env } from '@/lib/env';
import type { ApiResult, ApiErrorResponse } from '@/types/api';

/**
 * Typed API client for communicating with the backend.
 * This is THE boundary between frontend and backend.
 *
 * All external API communication flows through this client.
 * When the backend API is connected, only the base URL changes.
 */
class ApiClient {
  private baseUrl: string;

  constructor() {
    this.baseUrl = env.NEXT_PUBLIC_API_URL;
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
