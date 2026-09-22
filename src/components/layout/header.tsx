'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { navItems, navCTA } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { MobileNav } from './mobile-nav';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-surface-border bg-surface-primary/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-16 items-center justify-between lg:h-18" aria-label="Main navigation">
          <Link
            href="/"
            className="text-heading-4 font-bold text-content-primary tracking-tight hover:text-brand-400 transition-colors"
          >
            {siteConfig.name}
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-body-sm font-medium text-content-secondary',
                  'hover:text-content-primary transition-colors duration-200'
                )}
              >
                {item.label}
              </Link>
            ))}
            <ButtonLink href={navCTA.href} size="sm">
              {navCTA.label}
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 -mr-2 text-content-secondary hover:text-content-primary transition-colors"
            aria-label="Open menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
      </Container>
      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
}
