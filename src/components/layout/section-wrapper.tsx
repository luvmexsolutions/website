import { forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  container?: boolean;
  narrow?: boolean;
}

/**
 * SectionWrapper — consistent section spacing and optional container.
 * Every homepage section uses this wrapper for uniform vertical rhythm.
 * Forwards ref for scroll-based animations.
 */
export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  ({ children, id, className, container = true, narrow = false }, ref) => {
    const content = container ? (
      <Container narrow={narrow}>{children}</Container>
    ) : (
      children
    );

    return (
      <section ref={ref} id={id} className={cn('section-padding', className)}>
        {content}
      </section>
    );
  }
);

SectionWrapper.displayName = 'SectionWrapper';
