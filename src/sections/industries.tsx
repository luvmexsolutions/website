'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Icon } from '@/components/ui/icon';
import { industries } from '@/config/industries';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function Industries() {
  return (
    <SectionWrapper id="industries" className="relative border-t border-surface-border/40">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-radial from-indigo-600/10 via-transparent to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      {/* Left-aligned header */}
      <div className="mb-16 md:mb-20 max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold tracking-tighter text-content-primary leading-[1.1] mb-4"
        >
          Specialized for Regulated & High-Growth Sectors
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-body-sm text-content-secondary leading-relaxed max-w-[52ch]"
        >
          Domain literacy meets engineering rigor — navigating strict compliance, data sovereignty, and mission-critical workflows.
        </motion.p>
      </div>

      {/* Industry cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {industries.map((industry, i) => (
          <motion.div
            key={industry.slug}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href={`/industries/${industry.slug}`}
              className={cn(
                'group relative overflow-hidden flex flex-col justify-between h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-primary',
                'rounded-[1.5rem] p-7 md:p-8',
                'border border-surface-border hover:border-surface-border-accent bg-surface-card shadow-inner-highlight',
                'transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:shadow-card-hover'
              )}
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gradient-radial from-brand-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

              {/* Top accent */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-500/0 to-transparent group-hover:via-brand-400/40 transition-all duration-700" />

              <div>
                {/* Icon + arrow */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-surface-elevated border border-surface-border text-brand-400 flex items-center justify-center group-hover:bg-brand-500/12 group-hover:border-brand-500/25 group-hover:text-brand-300 group-hover:scale-105 transition-all duration-500">
                    <Icon name={industry.icon} size={22} />
                  </div>
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="text-content-tertiary opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-500"
                  />
                </div>

                <h3 className="text-lg font-semibold text-content-primary mb-3 group-hover:text-brand-200 transition-colors duration-300 tracking-tight">
                  {industry.title}
                </h3>
                <p className="text-sm text-content-secondary leading-relaxed">
                  {industry.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-surface-border/50 flex items-center gap-2 text-sm font-medium text-brand-400/70 group-hover:text-brand-300 transition-colors duration-300">
                <span>View vertical capabilities</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-300">
                  <path d="M2 10L10 2M10 2H5M10 2V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
