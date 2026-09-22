import Link from 'next/link';
import { ButtonLink } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { ctaContent } from '@/content/cta';
import { cn } from '@/lib/utils';

interface CtaBannerProps {
  className?: string;
  headline?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CtaBanner({
  className,
  headline = ctaContent.headline,
  description = ctaContent.description,
  primaryLabel = ctaContent.primaryCTA.label,
  primaryHref = ctaContent.primaryCTA.href,
  secondaryLabel = ctaContent.secondaryCTA.label,
  secondaryHref = ctaContent.secondaryCTA.href,
}: CtaBannerProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-2xl md:rounded-3xl border border-surface-border bg-gradient-to-b from-surface-elevated/90 to-surface-secondary/90 p-8 md:p-14 text-center backdrop-blur-sm',
        'shadow-elevated shadow-brand-950/20',
        className
      )}
    >
      {/* Background ambient radial glow */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-brand-500/20 via-brand-600/5 to-transparent blur-3xl"
        aria-hidden="true"
      />

      {/* Grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:32px_32px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-6">
          <Icon name="sparkles" size={14} className="text-brand-400" />
          <span>Product Engineering & Architecture</span>
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-content-primary mb-5">
          {headline}
        </h2>

        <p className="text-body md:text-body-lg text-content-secondary max-w-xl mx-auto mb-8">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ButtonLink
            href={primaryHref}
            variant="primary"
            size="lg"
            className="w-full sm:w-auto"
          >
            <span>{primaryLabel}</span>
            <Icon name="arrow-right" size={16} />
          </ButtonLink>

          {secondaryLabel && secondaryHref && (
            <ButtonLink
              href={secondaryHref}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            >
              <span>{secondaryLabel}</span>
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
}
