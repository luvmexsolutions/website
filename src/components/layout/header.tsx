'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui/container';
import { ButtonLink } from '@/components/ui/button';
import { navItems, navCTA } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { MobileNav } from './mobile-nav';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  /** Check if a nav href matches the current pathname */
  const isActive = (href: string): boolean => {
    // Hash links like /#services match on homepage
    if (href.startsWith('/#')) return pathname === '/';
    // Exact match for non-hash routes
    return pathname === href || pathname.startsWith(`${href}/`);
  };

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
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'text-body-sm font-medium transition-colors duration-200',
                    active
                      ? 'text-brand-400'
                      : 'text-content-secondary hover:text-content-primary'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <ButtonLink href={navCTA.href} size="sm">
              {navCTA.label}
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-content-secondary hover:text-content-primary transition-colors"
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
