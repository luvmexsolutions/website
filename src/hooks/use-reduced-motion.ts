'use client';

import { useEffect, useState } from 'react';

/**
 * Detects if the user prefers reduced motion.
 * Returns true if the user has enabled reduced motion in their OS settings.
 */
export function useReducedMotion(): boolean {
  const [shouldReduce, setShouldReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShouldReduce(mq.matches);

    const handler = (e: MediaQueryListEvent) => setShouldReduce(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return shouldReduce;
}
