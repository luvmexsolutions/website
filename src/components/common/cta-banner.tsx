'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowUpRight, CalendarBlank } from '@phosphor-icons/react';
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
    <motion.div
      initial={{ opacity: 0, y: 36, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn('relative overflow-hidden rounded-[2rem] border border-surface-border/40 p-px', className)}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-r from-brand-600/30 via-violet-500/20 to-brand-600/30 animate-shimmer" />

      {/* Inner surface */}
      <div className="relative overflow-hidden rounded-[calc(2rem-1px)] bg-surface-secondary/95 px-8 sm:px-16 py-16 sm:py-24">

        {/* Background orbs */}
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-radial from-brand-500/25 via-violet-700/8 to-transparent blur-3xl"
        />
        <div className="pointer-events-none absolute -bottom-20 -right-20 w-[350px] h-[350px] bg-gradient-radial from-violet-600/15 to-transparent blur-3xl" />

        {/* Dot grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }}
          aria-hidden="true"
        />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2rem] sm:text-[2.75rem] md:text-[3.25rem] font-bold tracking-tighter text-content-primary leading-[1.08] mb-5"
          >
            {headline}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-content-secondary leading-relaxed mb-10 max-w-lg mx-auto"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA */}
            <Link
              href={primaryHref}
              id="cta-primary-btn"
              className="group flex items-center gap-2 rounded-full pl-7 pr-2 py-2 bg-brand-600 hover:bg-brand-500 text-white text-base font-semibold transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] shadow-glow hover:shadow-glow-lg"
            >
              <span>{primaryLabel}</span>
              <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-400">
                <ArrowUpRight size={14} weight="bold" />
              </span>
            </Link>

            {/* Secondary CTA */}
            {secondaryLabel && secondaryHref && (
              <Link
                href={secondaryHref}
                id="cta-secondary-btn"
                className="group flex items-center gap-2 rounded-full px-6 py-3 border border-surface-border hover:border-brand-500/40 text-content-secondary hover:text-content-primary text-base font-medium transition-all duration-400 hover:bg-surface-elevated"
              >
                <CalendarBlank size={16} />
                <span>{secondaryLabel}</span>
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
