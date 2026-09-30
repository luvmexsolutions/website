'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight, CheckCircle } from '@phosphor-icons/react';
import { Container } from '@/components/ui/container';
import { heroContent } from '@/content/hero';

/* ─── Animated word-by-word headline ─── */
function SplitHeadline({ text }: { text: string }) {
  const words = text.split(' ');
  return (
    <span>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 32, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
          transition={{ duration: 0.7, delay: 0.2 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block mr-[0.22em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

/* ─── Animated counter ─── */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const dur = 1500;
        const start = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          setCount(Math.round((1 - Math.pow(1 - p, 4)) * target));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return <div ref={ref} className="tabular-nums">{count}{suffix}</div>;
}

/* ─── Magnetic CTA button ─── */
function MagneticButton({ href, children, primary = false }: { href: string; children: React.ReactNode; primary?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 150, damping: 18 });
  const sy = useSpring(my, { stiffness: 150, damping: 18 });

  const handleMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left - r.width / 2) * 0.25);
    my.set((e.clientY - r.top - r.height / 2) * 0.25);
  };
  const handleLeave = () => { mx.set(0); my.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileTap={{ scale: 0.95 }}
      className={
        primary
          ? 'group flex items-center gap-2 rounded-full pl-6 pr-2 py-2 bg-brand-600 hover:bg-brand-500 text-white text-base font-semibold transition-colors duration-300 shadow-glow hover:shadow-glow-lg cursor-pointer'
          : 'group flex items-center gap-2 rounded-full px-6 py-2.5 border border-surface-border hover:border-brand-500/40 text-content-secondary hover:text-content-primary text-base font-medium transition-all duration-400 hover:bg-surface-elevated cursor-pointer'
      }
    >
      {children}
      {primary && (
        <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-400">
          <ArrowUpRight size={14} weight="bold" />
        </span>
      )}
    </motion.a>
  );
}

const capabilities = [
  'Full-stack product engineering',
  'AI & LLM integration',
  'Cloud-native architecture',
  'Zero vendor lock-in',
];

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-24 pb-16">

      {/* ── Cinematic background: real image from Unsplash via picsum ── */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Image
          src="https://picsum.photos/seed/dark-tech-office/1920/1080"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-[0.06] grayscale contrast-150"
          aria-hidden="true"
        />
      </div>

      {/* ── Mesh gradient orbs ── */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full bg-brand-600/20 blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.06, 1], opacity: [0.12, 0.2, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/15 blur-[100px]"
        />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[300px] rounded-full bg-indigo-700/10 blur-[80px]" />
      </div>

      {/* ── Dot grid ── */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.022]"
        style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '38px 38px' }}
        aria-hidden="true"
      />

      <Container wide>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_460px] xl:grid-cols-[1fr_540px] gap-10 lg:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <div className="flex flex-col items-start">

            {/* Live indicator */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7 flex items-center gap-2.5 text-xs font-mono text-content-tertiary"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]" />
              </span>
              Accepting new projects — Q4 2025
            </motion.div>

            {/* H1 — word split animation */}
            <h1 className="text-[clamp(2.6rem,5vw,4.5rem)] font-bold leading-[1.07] tracking-[-0.028em] text-content-primary mb-2 max-w-[14ch]">
              <SplitHeadline text="We Engineer" /><br />
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block text-gradient"
              >
                Software
              </motion.span>{' '}
              <SplitHeadline text="That Scales" />
            </h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 max-w-[44ch] text-lg text-content-secondary leading-relaxed"
            >
              {heroContent.subheadline}
            </motion.p>

            {/* Capabilities */}
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2"
            >
              {capabilities.map((cap, i) => (
                <motion.li
                  key={cap}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.68 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-2 text-sm text-content-secondary"
                >
                  <CheckCircle weight="fill" size={13} className="text-brand-400 flex-shrink-0" />
                  {cap}
                </motion.li>
              ))}
            </motion.ul>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <MagneticButton href={heroContent.primaryCTA.href} primary>
                {heroContent.primaryCTA.label}
              </MagneticButton>
              <MagneticButton href={heroContent.secondaryCTA.href}>
                {heroContent.secondaryCTA.label}
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.0 }}
              className="mt-12 pt-8 border-t border-surface-border/50 flex items-center gap-10 sm:gap-14"
            >
              {[
                { target: 99, suffix: '%', label: 'Uptime SLA' },
                { target: 50, suffix: 'ms', label: 'P99 Latency' },
                { target: 120, suffix: '+', label: 'Engineers' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-brand-300 to-violet-400 font-mono">
                    <Counter target={s.target} suffix={s.suffix} />
                  </div>
                  <div className="text-[11px] text-content-tertiary mt-1 font-medium tracking-wide">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Floating architecture panel ── */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            {/* Outer bezel */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="bezel-outer shadow-bezel"
            >
              {/* Inner core */}
              <div className="bezel-inner overflow-hidden">

                {/* Window chrome */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-surface-border/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[10px] text-content-tertiary">luvmex.pipeline.ts</span>
                  </div>
                  <motion.span
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Live
                  </motion.span>
                </div>

                {/* Architecture SVG */}
                <div className="p-5 relative">
                  {/* Glow behind SVG */}
                  <div className="absolute inset-0 bg-gradient-radial from-brand-500/10 via-transparent to-transparent pointer-events-none" />
                  <svg viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto" aria-hidden="true">
                    <defs>
                      <linearGradient id="hl1" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#818cf8" stopOpacity="0.4" />
                      </linearGradient>
                      <linearGradient id="hl2" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.9" />
                      </linearGradient>
                      <filter id="node-glow">
                        <feGaussianBlur stdDeviation="2.5" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>
                    </defs>
                    {/* Animated dashed lines */}
                    <path d="M88 68 L196 68 L196 130 L330 130" stroke="url(#hl1)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.8">
                      <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="1.8s" repeatCount="indefinite" />
                    </path>
                    <path d="M88 192 L196 192 L196 130" stroke="url(#hl2)" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.8">
                      <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="2.2s" repeatCount="indefinite" />
                    </path>
                    <path d="M196 130 L330 68" stroke="rgba(167,139,250,0.35)" strokeWidth="1.2" />
                    <path d="M196 130 L330 192" stroke="rgba(99,102,241,0.35)" strokeWidth="1.2" />
                    {/* Nodes */}
                    <g transform="translate(22, 44)">
                      <rect width="86" height="48" rx="10" fill="var(--surface-elevated)" stroke="#6366f1" strokeWidth="1.5" filter="url(#node-glow)" />
                      <text x="43" y="21" textAnchor="middle" fill="var(--content-primary)" fontSize="10" fontWeight="600" fontFamily="var(--font-mono)">Web / App</text>
                      <text x="43" y="35" textAnchor="middle" fill="#818cf8" fontSize="8.5" fontFamily="var(--font-mono)">Next.js 16</text>
                    </g>
                    <g transform="translate(22, 168)">
                      <rect width="86" height="48" rx="10" fill="var(--surface-elevated)" stroke="#a78bfa" strokeWidth="1.5" />
                      <text x="43" y="21" textAnchor="middle" fill="var(--content-primary)" fontSize="10" fontWeight="600" fontFamily="var(--font-mono)">AI Models</text>
                      <text x="43" y="35" textAnchor="middle" fill="#a78bfa" fontSize="8.5" fontFamily="var(--font-mono)">LLM / Vision</text>
                    </g>
                    <g transform="translate(152, 98)">
                      <rect width="88" height="64" rx="12" fill="var(--surface-card)" stroke="#818cf8" strokeWidth="2" filter="url(#node-glow)" />
                      <text x="44" y="27" textAnchor="middle" fill="#818cf8" fontSize="11.5" fontWeight="700" fontFamily="var(--font-mono)">LUVMEX</text>
                      <text x="44" y="42" textAnchor="middle" fill="var(--content-primary)" fontSize="9" fontFamily="var(--font-mono)">Core Engine</text>
                      <circle cx="78" cy="14" r="3.5" fill="#10b981" filter="url(#node-glow)">
                        <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
                      </circle>
                    </g>
                    <g transform="translate(296, 44)">
                      <rect width="96" height="48" rx="10" fill="var(--surface-elevated)" stroke="#4f46e5" strokeWidth="1.5" />
                      <text x="48" y="21" textAnchor="middle" fill="var(--content-primary)" fontSize="10" fontWeight="600" fontFamily="var(--font-mono)">Data Fabric</text>
                      <text x="48" y="35" textAnchor="middle" fill="var(--content-secondary)" fontSize="8.5" fontFamily="var(--font-mono)">PostgreSQL</text>
                    </g>
                    <g transform="translate(296, 168)">
                      <rect width="96" height="48" rx="10" fill="var(--surface-elevated)" stroke="#6366f1" strokeWidth="1.5" />
                      <text x="48" y="21" textAnchor="middle" fill="var(--content-primary)" fontSize="10" fontWeight="600" fontFamily="var(--font-mono)">Cloud Edge</text>
                      <text x="48" y="35" textAnchor="middle" fill="#818cf8" fontSize="8.5" fontFamily="var(--font-mono)">AWS / Vercel</text>
                    </g>
                  </svg>
                </div>

                {/* Terminal bar */}
                <div className="mx-4 mb-4 rounded-xl bg-surface-primary/80 border border-surface-border/50 p-3">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-content-tertiary">// high-concurrency engine</span>
                    <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />Healthy
                    </span>
                  </div>
                  <div className="font-mono text-xs leading-5">
                    <span className="text-violet-400">const</span>{' '}
                    <span className="text-content-primary">system</span>
                    <span className="text-content-tertiary"> = </span>
                    <span className="text-brand-300">createEngine</span>
                    <span className="text-content-tertiary">{'({'}</span>
                    <span className="text-amber-300">tier</span>
                    <span className="text-content-tertiary">: </span>
                    <span className="text-emerald-300">&apos;enterprise&apos;</span>
                    <span className="text-content-tertiary">{', ai: true });'}</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </motion.div>

        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-content-tertiary/50"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.16em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-content-tertiary/40 to-transparent"
        />
      </motion.div>
    </section>
  );
}
