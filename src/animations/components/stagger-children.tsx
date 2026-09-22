'use client';

import { type ReactNode } from 'react';
import { motion } from 'motion/react';
import { staggerContainer, slideUp } from '@/animations/variants';
import { useReducedMotion } from '@/hooks/use-reduced-motion';
import { useIntersection } from '@/hooks/use-intersection';

interface StaggerChildrenProps {
  children: ReactNode;
  once?: boolean;
  className?: string;
}

/**
 * Stagger children animation wrapper.
 * Staggers entry of child elements when the container enters the viewport.
 *
 * Each direct child must be wrapped in a motion.div with the slideUp variant,
 * or use the <StaggerItem> sub-component.
 */
export function StaggerChildren({
  children,
  once = true,
  className,
}: StaggerChildrenProps) {
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
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Individual stagger item — use inside <StaggerChildren>.
 */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={slideUp} className={className}>
      {children}
    </motion.div>
  );
}
