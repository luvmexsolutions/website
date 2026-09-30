'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Quotes } from '@phosphor-icons/react';
import { SectionWrapper } from '@/components/layout/section-wrapper';

const testimonials = [
  {
    quote: "LUVMEX rebuilt our entire data infrastructure in 14 weeks. The system handles 3x our previous volume and hasn't had a single incident since launch. This is what great engineering looks like.",
    name: 'Sarah Chen',
    role: 'CTO at Meridian Health',
    company: 'Meridian Health',
    avatar: 'https://picsum.photos/seed/woman-professional-1/200/200',
  },
  {
    quote: "We came with a half-baked idea for a SaaS product. They helped us define the architecture, scoped the MVP in 3 weeks, and launched in 4 months. The product is now serving 12,000 users.",
    name: 'James OBrien',
    role: 'Founder, Flowstate',
    company: 'Flowstate',
    avatar: 'https://picsum.photos/seed/man-professional-2/200/200',
  },
  {
    quote: "Their AI integration work is genuinely exceptional. The LLM pipeline they built cut our manual processing time by 80% and improved accuracy beyond anything we thought possible at this stage.",
    name: 'Priya Nair',
    role: 'VP Engineering, Trakr',
    company: 'Trakr',
    avatar: 'https://picsum.photos/seed/woman-executive-3/200/200',
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number, dir: number) => {
    setDirection(dir);
    setCurrent(next);
  };

  const prev = () => go((current - 1 + testimonials.length) % testimonials.length, -1);
  const next = () => go((current + 1) % testimonials.length, 1);

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => go((current + 1) % testimonials.length, 1), 6000);
    return () => clearInterval(id);
  }, [current]);

  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir * 32, filter: 'blur(4px)' }),
    center: { opacity: 1, x: 0, filter: 'blur(0)' },
    exit:  (dir: number) => ({ opacity: 0, x: dir * -32, filter: 'blur(4px)' }),
  };

  return (
    <SectionWrapper id="testimonials" className="relative border-t border-surface-border/40">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-radial from-violet-600/8 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Section label */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] font-bold tracking-tighter text-content-primary mb-14 md:mb-18"
      >
        What clients say
      </motion.h2>

      {/* Main carousel */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-center">

        {/* Quote area */}
        <div className="relative min-h-[200px] overflow-hidden">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-6"
            >
              {/* Quote mark */}
              <Quotes size={36} weight="fill" className="text-brand-500/40" />

              {/* Quote text */}
              <blockquote className="text-xl sm:text-2xl md:text-[1.6rem] font-medium text-content-primary leading-relaxed tracking-tight max-w-[28ch]">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-500/30 flex-shrink-0">
                  <Image
                    src={testimonials[current].avatar}
                    alt={testimonials[current].name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-semibold text-content-primary">{testimonials[current].name}</div>
                  <div className="text-xs text-content-tertiary">{testimonials[current].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls + indicator column */}
        <div className="flex lg:flex-col items-center gap-4">
          {/* Navigation */}
          <div className="flex lg:flex-col gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="group w-11 h-11 rounded-full border border-surface-border flex items-center justify-center text-content-secondary hover:text-content-primary hover:border-brand-500/40 hover:bg-surface-elevated transition-all duration-300 active:scale-90"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform duration-300" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="group w-11 h-11 rounded-full border border-surface-border flex items-center justify-center text-content-secondary hover:text-content-primary hover:border-brand-500/40 hover:bg-surface-elevated transition-all duration-300 active:scale-90"
            >
              <ArrowRight size={18} className="group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </div>

          {/* Progress dots */}
          <div className="flex lg:flex-col gap-1.5">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i, i > current ? 1 : -1)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="transition-all duration-400"
              >
                <motion.div
                  animate={{ opacity: i === current ? 1 : 0.3, scale: i === current ? 1.2 : 1 }}
                  className="w-1.5 h-1.5 rounded-full bg-brand-400"
                />
              </button>
            ))}
          </div>
        </div>

      </div>

      {/* All three cards preview (mobile: hidden, tablet: show below) */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => go(i, i > current ? 1 : -1)}
            className={`group relative overflow-hidden rounded-2xl p-5 border cursor-pointer transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] ${
              i === current
                ? 'border-brand-500/40 bg-surface-elevated shadow-glow-sm'
                : 'border-surface-border bg-surface-card hover:border-surface-border-accent hover:bg-surface-elevated'
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                <Image src={t.avatar} alt={t.name} fill sizes="36px" className="object-cover" />
              </div>
              <div>
                <div className="text-xs font-semibold text-content-primary">{t.name}</div>
                <div className="text-[10px] text-content-tertiary">{t.role}</div>
              </div>
            </div>
            <p className="text-xs text-content-secondary leading-relaxed line-clamp-3">
              &ldquo;{t.quote}&rdquo;
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
