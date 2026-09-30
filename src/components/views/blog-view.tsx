'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { Container } from '@/components/ui/container';
import { CtaBanner } from '@/components/common/cta-banner';
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Sparkle,
} from '@phosphor-icons/react';

interface Article {
  title: string;
  slug: string;
  date: string;
  readTime: string;
  tag: string;
  description: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export function BlogView({ articles }: { articles: Article[] }) {
  return (
    <div className="py-20 md:py-32 relative overflow-hidden">
      {/* Background ambient glow */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-radial from-brand-600/15 via-brand-500/5 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <Container wide>
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono mb-6"
          >
            <Sparkle size={14} className="text-brand-400" />
            <span>ENGINEERING FIELD LOGS</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-content-primary mb-6 font-display leading-[1.1]"
          >
            Architectural Insights &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-800 dark:from-brand-300 dark:via-indigo-300 dark:to-white">
              Technical Notes
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-content-secondary leading-relaxed"
          >
            Written by our principal engineers and system architects. Unfiltered explorations of distributed systems, Next.js performance, database concurrency, and production reliability.
          </motion.p>
        </div>

        {/* Articles Grid with Curated Thematic Imagery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 md:mb-32">
          {articles.map((article, idx) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bezel-outer rounded-3xl overflow-hidden bg-surface-card hover:border-brand-500/40 transition-all duration-400 group flex flex-col justify-between"
            >
              <div>
                {/* Article Image Preview */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-secondary">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-primary via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-[11px] font-mono font-semibold text-brand-300 border border-brand-500/30">
                    {article.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs font-mono text-content-tertiary mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={13} />
                      <span>{article.date}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-content-primary mb-3 group-hover:text-brand-300 transition-colors leading-snug font-display">
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-content-secondary leading-relaxed line-clamp-3 mb-6">
                    {article.description}
                  </p>
                </div>
              </div>

              {/* Author & Footer */}
              <div className="p-6 pt-0 border-t border-surface-border/50 mt-auto">
                <div className="flex items-center justify-between pt-4">
                  <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-brand-500/30">
                      <Image
                        src={article.author.avatar}
                        alt={article.author.name}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-content-primary">
                        {article.author.name}
                      </div>
                      <div className="text-[10px] text-content-tertiary">
                        {article.author.role}
                      </div>
                    </div>
                  </div>

                  <span className="text-brand-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 text-xs font-semibold">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <CtaBanner
          headline="Have questions about our architectural practices?"
          description="Schedule a technical consultation to explore how these principles apply to your systems."
          primaryLabel="Connect with an Architect"
          primaryHref="/contact"
        />
      </Container>
    </div>
  );
}
