import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TechBadgeProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md';
}

export function TechBadge({ name, className, size = 'md' }: TechBadgeProps) {
  return (
    <Badge
      variant="default"
      className={cn(
        'font-mono font-medium tracking-tight bg-surface-elevated/70 text-content-secondary border border-surface-border hover:border-brand-500/30 hover:text-content-primary transition-colors duration-200',
        size === 'sm' ? 'text-xs px-2.5 py-0.5' : 'text-xs md:text-sm px-3 py-1',
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-brand-400/80 mr-2 shrink-0 inline-block" />
      {name}
    </Badge>
  );
}
