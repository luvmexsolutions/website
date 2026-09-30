'use client';

import { motion } from 'motion/react';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Card } from '@/components/ui/card';
import { TechBadge } from '@/components/common/tech-badge';
import { technologies } from '@/config/technologies';
import { Icon } from '@/components/ui/icon';
import { cn } from '@/lib/utils';

export function Technology() {
  const categoryIcons: Record<string, string> = {
    Frontend: 'globe',
    Backend: 'code',
    Database: 'layers',
    'Cloud & DevOps': 'cloud',
    'AI & Data': 'brain',
  };

  return (
    <SectionWrapper id="technology" className="relative border-t border-surface-border/40">
      {/* Full-width heading — different from the other sections */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-16 md:mb-20"
      >
        <h2 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold tracking-tighter text-content-primary leading-[1.1] mb-4 max-w-xl">
          Proven, Scalable, Production-Grade
        </h2>
        <p className="text-body-sm text-content-secondary leading-relaxed max-w-[50ch]">
          Enterprise-grade stacks selected for reliability, velocity, runtime performance, and zero vendor lock-in.
        </p>
      </motion.div>

      {/* Tech grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {technologies.map((category, i) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: i * 0.09,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
              'group relative overflow-hidden rounded-[1.5rem] p-7 md:p-8 flex flex-col justify-between',
              'border border-surface-border hover:border-surface-border-accent bg-surface-card shadow-inner-highlight',
              'transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:shadow-card-hover'
            )}
          >
            {/* Hover glow */}
            <div className="pointer-events-none absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-radial from-brand-500/8 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-2xl" />

            <div>
              {/* Icon + category */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-surface-border text-brand-400 flex items-center justify-center group-hover:bg-brand-500/10 group-hover:border-brand-500/25 group-hover:text-brand-300 group-hover:scale-105 transition-all duration-500">
                  <Icon
                    name={categoryIcons[category.category] || 'code'}
                    size={19}
                  />
                </div>
                <h3 className="text-base font-semibold text-content-primary tracking-tight group-hover:text-brand-200 transition-colors duration-300">
                  {category.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <TechBadge key={tech.name} name={tech.name} size="md" />
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-surface-border/50 flex items-center justify-between text-[11px] font-mono text-content-tertiary">
              <span>{category.items.length} core tools</span>
              <span className="text-brand-400/70 group-hover:text-brand-300 transition-colors duration-300">Production-verified</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
