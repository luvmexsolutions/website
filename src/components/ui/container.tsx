import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
  wide?: boolean;
}

export function Container({ children, className, narrow, wide }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-8 lg:px-12',
        narrow && 'max-w-narrow',
        wide && 'max-w-wide',
        !narrow && !wide && 'max-w-content',
        className
      )}
    >
      {children}
    </div>
  );
}
