import Link from 'next/link';
import { CheckCircle, ArrowUpRight } from '@phosphor-icons/react/dist/ssr';
import { Icon } from '@/components/ui/icon';
import { TechBadge } from '@/components/common/tech-badge';
import type { Service } from '@/types/services';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  service: Service;
  className?: string;
  featured?: boolean;
}

export function ServiceCard({ service, className, featured = false }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        'group relative flex flex-col justify-between overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary',
        'rounded-[1.5rem] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] h-full',
        'border border-surface-border hover:border-surface-border-accent',
        'bg-surface-card shadow-inner-highlight',
        'hover:shadow-card-hover hover:-translate-y-0.5',
        featured ? 'p-8 md:p-10' : 'p-6 md:p-7',
        className
      )}
    >
      {/* Top gradient accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-400/50 transition-all duration-700" />

      {/* Hover glow blob */}
      <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-radial from-brand-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

      <div>
        {/* Icon + Title */}
        <div className="flex items-start justify-between mb-5">
          <div
            className={cn(
              'rounded-xl bg-brand-500/10 border border-brand-500/15 text-brand-400 flex items-center justify-center shrink-0',
              'group-hover:bg-brand-500/18 group-hover:border-brand-500/30 group-hover:text-brand-300 transition-all duration-500 group-hover:scale-105',
              featured ? 'w-14 h-14' : 'w-11 h-11'
            )}
          >
            <Icon name={service.icon} size={featured ? 26 : 22} />
          </div>
          <ArrowUpRight
            size={16}
            className="text-content-tertiary opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-500"
            weight="bold"
          />
        </div>

        <h3
          className={cn(
            'font-semibold text-content-primary group-hover:text-brand-200 transition-colors duration-300 mb-3 tracking-tight',
            featured ? 'text-2xl' : 'text-lg'
          )}
        >
          {service.title}
        </h3>

        <p className={cn('text-content-secondary leading-relaxed', featured ? 'text-base' : 'text-sm')}>
          {service.shortDescription}
        </p>

        {/* Feature list */}
        {featured && (
          <ul className="mt-6 space-y-2">
            {service.features.slice(0, 4).map((feature) => (
              <li key={feature} className="flex items-start gap-2.5 text-sm text-content-secondary">
                <CheckCircle weight="fill" size={14} className="flex-shrink-0 mt-0.5 text-brand-400" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer: tech badges */}
      <div className="mt-6 pt-5 border-t border-surface-border/50 flex flex-wrap gap-1.5">
        {service.technologies.slice(0, featured ? 6 : 3).map((tech) => (
          <TechBadge key={tech} name={tech} size="sm" />
        ))}
        {service.technologies.length > (featured ? 6 : 3) && (
          <span className="text-xs text-content-tertiary self-center px-1 font-mono">
            +{service.technologies.length - (featured ? 6 : 3)}
          </span>
        )}
      </div>
    </Link>
  );
}
