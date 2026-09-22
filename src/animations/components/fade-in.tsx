'use client';

import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { fadeIn } from '@/animations/variants';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { useIntersection } from '@/hooks/use-intersection';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  once?: boolean;
  className?: string;
}

/**
 * Fade-in animation wrapper.
 * Fades children in when they enter the viewport.
 * Respects prefers-reduced-motion.
 */
export function FadeIn({ children, delay = 0, once = true, className }: FadeInProps) {
  const shouldReduce = useReducedMotion();
  const { ref, isInView } = useIntersection({ once });

  if (shouldReduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={fadeIn}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
