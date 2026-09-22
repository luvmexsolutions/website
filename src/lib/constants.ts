/**
 * Application-wide constants.
 */

/** Maximum length for form description field */
export const MAX_DESCRIPTION_LENGTH = 2000;

/** Maximum length for name fields */
export const MAX_NAME_LENGTH = 100;

/** Minimum touch target size in pixels (WCAG 2.5.8) */
export const MIN_TOUCH_TARGET = 44;

/** Animation duration thresholds */
export const ANIMATION = {
  FAST: 150,
  NORMAL: 350,
  SLOW: 500,
  MAX_BUDGET: 600,
} as const;

/** Intersection Observer default threshold */
export const INTERSECTION_THRESHOLD = 0.1;
