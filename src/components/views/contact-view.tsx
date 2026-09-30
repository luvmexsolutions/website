'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/container';
import { ContactForm } from '@/features/contact/components/contact-form';
import {
  EnvelopeSimple,
  Clock,
  ShieldCheck,
  Sparkle,
  CheckCircle,
  ChatCircleDots,
} from '@phosphor-icons/react';
import { siteConfig } from '@/config/site';

export function ContactView() {
  return (
    <div className="py-20 md:py-32 relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-radial from-brand-600/15 via-brand-500/5 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container wide>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Assurance */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-4">
                <Sparkle size={14} className="text-brand-400" />
                <span>DIRECT ACCESS TO PRINCIPAL ENGINEERS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-content-primary mb-4 font-display leading-[1.15]">
                Let&apos;s Engineer Your Next Product
              </h1>
              <p className="text-base sm:text-lg text-content-secondary leading-relaxed">
                Whether you need a ground-up SaaS platform, an AI automation pipeline, or mission-critical custom software, we bring architecture expertise to your team.
              </p>
            </motion.div>

            {/* Direct contact items */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-3 pt-2"
            >
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-card border border-surface-border hover:border-brand-500/30 transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center shrink-0">
                  <EnvelopeSimple size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-content-tertiary">
                    Direct Engineering Email
                  </div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm font-semibold text-content-primary hover:text-brand-300 transition-colors"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-card border border-surface-border">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-content-tertiary">
                    Response SLA
                  </div>
                  <div className="text-sm font-semibold text-content-primary">
                    Guaranteed within 24 business hours
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-card border border-surface-border">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-content-tertiary">
                    Mutual NDA & IP
                  </div>
                  <div className="text-sm font-semibold text-content-primary">
                    Mutual NDA signed prior to code reviews
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Senior Architect Consultation Preview with Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="bezel-outer p-5 rounded-2xl bg-surface-card"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-500/40 shrink-0">
                  <Image
                    src="https://picsum.photos/seed/alex-vance-architect/200/200"
                    alt="Alexander Vance, Principal Architect"
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-semibold text-content-primary">
                    Alexander Vance
                  </div>
                  <div className="text-[11px] text-brand-400 font-mono">
                    Chief Architect & Co-Founder
                  </div>
                </div>
              </div>
              <p className="text-xs text-content-secondary leading-relaxed">
                &ldquo;Every project proposal includes an architecture assessment, data schema outline, and estimated sprint breakdown prepared directly by our senior team.&rdquo;
              </p>
            </motion.div>

            {/* Client Testimonial Preview with Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="p-5 rounded-2xl bg-surface-elevated/40 border border-surface-border/80"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="https://picsum.photos/seed/man-professional-2/100/100"
                    alt="James O'Brien"
                    fill
                    sizes="36px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-xs font-bold text-content-primary">James O&apos;Brien</div>
                  <div className="text-[10px] text-content-tertiary">Founder, Flowstate</div>
                </div>
              </div>
              <p className="text-xs italic text-content-secondary leading-relaxed">
                &ldquo;LUVMEX acts as an extension of our core technical leadership. Their architecture precision allowed us to ship on time without compromising scalability.&rdquo;
              </p>
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bezel-outer p-6 sm:p-10 rounded-3xl bg-surface-card">
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-content-primary mb-1 font-display">
                  Project Inquiry & Discovery
                </h2>
                <p className="text-xs sm:text-sm text-content-secondary">
                  Fill in your details below and an engineering lead will review your specifications.
                </p>
              </div>

              <ContactForm />
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
