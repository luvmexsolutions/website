import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'brand' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-caption font-medium',
        'transition-colors duration-200',
        variant === 'default' && 'bg-surface-elevated text-content-secondary',
        variant === 'brand' && 'bg-brand-500/10 text-brand-400 border border-brand-500/20',
        variant === 'outline' && 'border border-surface-border text-content-secondary',
        className
      )}
    >
      {children}
    </span>
  );
}
