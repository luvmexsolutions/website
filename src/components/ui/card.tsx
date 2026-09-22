import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-surface-border bg-surface-secondary p-6 sm:p-8',
        'shadow-inner-glow',
        hover && [
          'transition-all duration-300 ease-smooth',
          'hover:-translate-y-0.5 hover:shadow-card-hover hover:border-brand-500/20',
        ],
        className
      )}
    >
      {children}
    </div>
  );
}
