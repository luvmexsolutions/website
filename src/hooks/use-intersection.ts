'use client';

import { useEffect, useRef, useState, type RefObject } from 'react';
import { INTERSECTION_THRESHOLD } from '@/lib/constants';

interface UseIntersectionOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

interface UseIntersectionReturn {
  ref: RefObject<HTMLDivElement | null>;
  isInView: boolean;
}

/**
 * Intersection Observer hook.
 * Returns whether the referenced element is in the viewport.
 * With `once: true` (default), stops observing after first intersection.
 */
export function useIntersection({
  threshold = INTERSECTION_THRESHOLD,
  rootMargin = '0px 0px -50px 0px',
  once = true,
}: UseIntersectionOptions = {}): UseIntersectionReturn {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isInView };
}
