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
 */
export function SectionWrapper({
  children,
  id,
  className,
  container = true,
  narrow = false,
}: SectionWrapperProps) {
  const content = container ? (
    <Container narrow={narrow}>{children}</Container>
  ) : (
    children
  );

  return (
    <section id={id} className={cn('section-padding', className)}>
      {content}
    </section>
  );
}
