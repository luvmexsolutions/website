/**
 * Typed API result — every API call returns this shape.
 * Components pattern-match on `success` to handle data or errors.
 */
export type ApiResult<T> =
  | { success: true; data: T }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

/**
 * Standard API error structure returned by the backend.
 */
export interface ApiErrorResponse {
  message: string;
  fieldErrors?: Record<string, string[]>;
}
