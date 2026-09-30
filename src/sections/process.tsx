'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { Icon } from '@/components/ui/icon';
import { processSteps } from '@/config/process';
import { cn } from '@/lib/utils';

/** Single process card with scroll-driven y offset for stacking effect */
function ProcessCard({
  step,
  index,
  total,
}: {
  step: typeof processSteps[0];
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'start 20%'] });
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className="group">
      <div
        className={cn(
          'relative overflow-hidden rounded-[1.5rem] p-6 sm:p-8 flex flex-col border border-surface-border',
          'bg-surface-card shadow-inner-highlight transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
          'hover:border-surface-border-accent hover:-translate-y-1 hover:shadow-card-hover'
        )}
      >
        {/* Progress line at top */}
        <div
          className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-brand-600 to-violet-500 transition-all duration-700 ease-out"
          style={{ width: `${((index + 1) / total) * 100}%` }}
        />

        {/* Step number + icon */}
        <div className="flex items-center justify-between mb-7">
          <span className="font-mono text-4xl font-bold text-brand-400/30 leading-none tabular-nums">
            {String(step.step).padStart(2, '0')}
          </span>
          <div className="w-10 h-10 rounded-xl bg-surface-elevated border border-surface-border text-brand-300 flex items-center justify-center group-hover:bg-brand-500/10 group-hover:border-brand-500/30 group-hover:scale-110 transition-all duration-500">
            <Icon name={step.icon} size={18} />
          </div>
        </div>

        <h3 className="text-base font-semibold text-content-primary mb-2 tracking-tight group-hover:text-brand-200 transition-colors duration-300">
          {step.title}
        </h3>
        <p className="text-xs text-content-secondary leading-relaxed flex-1">{step.description}</p>

        <div className="mt-5 pt-4 border-t border-surface-border/40 font-mono text-[10px] text-content-tertiary tracking-wide flex items-center gap-2">
          <span className="w-1 h-1 rounded-full bg-brand-500/60" />
          Phase {String(step.step).padStart(2, '0')}
        </div>
      </div>
    </motion.div>
  );
}

export function Process() {
  return (
    <SectionWrapper id="process" className="relative border-t border-surface-border/40">
      {/* Section header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-18">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold tracking-tighter text-content-primary leading-[1.08] max-w-md"
        >
          Disciplined Engineering, Iterative Delivery
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xs text-sm text-content-secondary leading-relaxed md:text-right"
        >
          Structured phases, frequent releases, transparent decisions — zero surprise technical debt.
        </motion.p>
      </div>

      {/* Process grid with scroll-driven card reveal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 md:gap-5">
        {processSteps.map((step, i) => (
          <ProcessCard key={step.step} step={step} index={i} total={processSteps.length} />
        ))}
      </div>
    </SectionWrapper>
  );
}
