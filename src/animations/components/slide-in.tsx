'use client';

import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { duration, easing } from '@/animations/presets';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { useIntersection } from '@/hooks/use-intersection';

type Direction = 'up' | 'down' | 'left' | 'right';

interface SlideInProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  once?: boolean;
  className?: string;
}

function getOffset(direction: Direction) {
  const d = 24;
  switch (direction) {
    case 'up':
      return { x: 0, y: d };
    case 'down':
      return { x: 0, y: -d };
    case 'left':
      return { x: -d, y: 0 };
    case 'right':
      return { x: d, y: 0 };
  }
}

/**
 * Slide-in animation wrapper.
 * Slides + fades children from a direction when they enter the viewport.
 * Respects prefers-reduced-motion.
 */
export function SlideIn({
  children,
  direction = 'up',
  delay = 0,
  once = true,
  className,
}: SlideInProps) {
  const shouldReduce = useReducedMotion();
  const { ref, isInView } = useIntersection({ once });

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  const offset = getOffset(direction);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x: offset.x, y: offset.y }
      }
      transition={{
        duration: duration.normal,
        ease: [...easing.smooth] as [number, number, number, number],
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
