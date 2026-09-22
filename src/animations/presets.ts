/**
 * Animation duration presets in seconds.
 * Keep animations under MAX_BUDGET (600ms) for performance.
 */
export const duration = {
  fast: 0.15,
  normal: 0.35,
  slow: 0.5,
} as const;

/**
 * Easing presets.
 */
export const easing = {
  /** Smooth ease — general purpose */
  smooth: [0.25, 0.1, 0.25, 1.0] as const,
  /** Decelerate — elements entering the screen */
  decelerate: [0.0, 0.0, 0.2, 1.0] as const,
  /** Spring — interactive, bouncy feel */
  spring: { type: 'spring' as const, stiffness: 100, damping: 15 },
} as const;

/**
 * Stagger delay between children in a staggered animation.
 */
export const staggerDelay = 0.08;
