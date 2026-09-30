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
        'rounded-[1.5rem] border border-surface-border bg-surface-card shadow-inner-highlight',
        hover && [
          'transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
          'hover:-translate-y-0.5 hover:shadow-card-hover hover:border-surface-border-accent',
        ],
        className
      )}
    >
      {children}
    </div>
  );
}
