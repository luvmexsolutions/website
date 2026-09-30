'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { SectionWrapper } from '@/components/layout/section-wrapper';
import { whyLuvmexContent } from '@/content/why-luvmex';
import { Icon } from '@/components/ui/icon';

// A cinematic image strip on the right with scroll-parallax
export function WhyLuvmex() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <SectionWrapper id="why-luvmex" className="relative border-t border-surface-border/40 overflow-hidden" ref={sectionRef}>
      {/* Ambient glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-indigo-600/8 via-transparent to-transparent blur-3xl -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

        {/* ── LEFT: content ── */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold tracking-tighter text-content-primary leading-[1.08] mb-5"
          >
            {whyLuvmexContent.headline}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-content-secondary leading-relaxed mb-10 max-w-[44ch]"
          >
            {whyLuvmexContent.subheadline}
          </motion.p>

          {/* Value cards stacked */}
          <div className="space-y-3">
            {whyLuvmexContent.values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-4 p-5 rounded-2xl border border-surface-border hover:border-surface-border-accent bg-surface-card shadow-inner-highlight hover:-translate-y-0.5 hover:shadow-card-hover transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/15 text-brand-400 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-500/18 group-hover:scale-105 transition-all duration-400">
                  <Icon name={val.icon} size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-content-primary mb-1 group-hover:text-brand-200 transition-colors duration-300 tracking-tight">{val.title}</h3>
                  <p className="text-xs text-content-secondary leading-relaxed">{val.description}</p>
                </div>
                {/* Slide-in arrow */}
                <div className="w-6 h-6 rounded-full bg-surface-elevated flex items-center justify-center text-content-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex-shrink-0 mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: parallax image ── */}
        <div className="hidden lg:block relative">
          {/* Outer bezel for the image */}
          <motion.div style={{ opacity: imageOpacity }} className="relative">
            <div className="bezel-outer overflow-hidden">
              <div className="bezel-inner relative overflow-hidden rounded-[calc(2rem-6px)] aspect-[3/4]">
                <motion.div style={{ y: imageY }} className="absolute inset-[-10%] w-[120%] h-[120%]">
                  <Image
                    src="https://picsum.photos/seed/engineering-team-dark/600/800"
                    alt="Engineering team collaborating"
                    fill
                    className="object-cover object-center grayscale-[0.3]"
                    sizes="40vw"
                  />
                  {/* Color overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 via-transparent to-transparent" />
                </motion.div>

                {/* Caption overlay */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="glass rounded-xl p-4">
                    <div className="text-sm font-semibold text-content-primary mb-1">120+ Engineers worldwide</div>
                    <div className="text-xs text-content-secondary">Senior-only team. No juniors on client work.</div>
                    <div className="mt-3 flex gap-2">
                      {[1,2,3,4,5].map(n => (
                        <div key={n} className="relative w-7 h-7 rounded-full overflow-hidden border-2 border-surface-primary">
                          <Image src={`https://picsum.photos/seed/team-member-${n}/60/60`} alt="Team member" fill sizes="28px" className="object-cover" />
                        </div>
                      ))}
                      <div className="w-7 h-7 rounded-full bg-brand-500/20 border-2 border-surface-primary flex items-center justify-center text-[9px] font-mono text-brand-300">+115</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </SectionWrapper>
  );
}
