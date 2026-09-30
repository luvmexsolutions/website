'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { statsContent } from '@/content/stats';

export function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ['0%', '100%']);

  return (
    <SectionWrapper id="stats" className="relative border-t border-surface-border/40 py-20 md:py-28">
      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[250px] bg-gradient-radial from-brand-600/10 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Animated connector line */}
      <div ref={ref} className="hidden md:block relative mb-12">
        <div className="h-px bg-surface-border/60 w-full" />
        <motion.div
          style={{ width: lineWidth }}
          className="absolute top-0 left-0 h-px bg-gradient-to-r from-brand-600 via-violet-500 to-brand-400"
        />
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
        {statsContent.items.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group text-center"
          >
            {/* Value */}
            <div className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-br from-brand-600 via-violet-600 to-content-primary dark:from-brand-300 dark:via-violet-400 dark:to-content-primary mb-3 tabular-nums transition-transform duration-500 group-hover:scale-105">
              {stat.value}
            </div>

            {/* Expanding line */}
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-brand-500/60 to-transparent mx-auto mb-3 group-hover:w-16 group-hover:via-brand-400/80 transition-all duration-500" />

            {/* Label */}
            <div className="text-sm font-medium text-content-secondary">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
