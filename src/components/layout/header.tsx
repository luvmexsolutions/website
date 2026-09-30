'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ButtonLink } from '@/components/ui/button';
import { navItems, navCTA } from '@/config/navigation';
import { siteConfig } from '@/config/site';
import { MobileNav } from './mobile-nav';
import { ThemeToggle } from '@/components/theme/theme-toggle';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isActive = (href: string): boolean => {
    if (href.startsWith('/#')) return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* Floating glass pill nav */}
      <header
        ref={headerRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-center px-4 pt-5 pb-2 transition-all duration-700',
          'pointer-events-none'
        )}
      >
        <nav
          className={cn(
            'relative flex h-12 items-center justify-between gap-8 rounded-full px-4',
            'pointer-events-auto w-full max-w-[820px]',
            'transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]',
            scrolled
              ? 'glass shadow-bezel border border-surface-border'
              : 'bg-transparent'
          )}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 text-sm font-bold text-content-primary tracking-tight hover:text-brand-400 transition-colors duration-300"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Nav links */}
          <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300',
                    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500',
                    active
                      ? 'text-content-primary bg-surface-elevated'
                      : 'text-content-secondary hover:text-content-primary hover:bg-white/5'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* CTA & ThemeToggle */}
          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            <ThemeToggle />
            <Link
              href={navCTA.href}
              id="nav-cta-btn"
              className={cn(
                'group flex items-center gap-2 rounded-full pl-4 pr-1.5 py-1.5',
                'bg-brand-600 hover:bg-brand-500 text-white text-sm font-medium',
                'transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]',
                'active:scale-[0.97] shadow-glow-sm'
              )}
            >
              <span>{navCTA.label}</span>
              <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center group-hover:translate-x-0.5 group-hover:-translate-y-px transition-transform duration-500">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="rotate-[-45deg]">
                  <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </Link>
          </div>

          {/* Mobile Right: ThemeToggle + hamburger */}
          <div className="flex lg:hidden items-center gap-1.5">
            <ThemeToggle />
            <button
              type="button"
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 -mr-1 min-w-[44px] min-h-[44px] flex items-center justify-center text-content-secondary hover:text-content-primary transition-colors"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
            <span className="flex flex-col gap-[5px] w-5">
              <span className={cn(
                'block h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center',
                isMobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
              )} />
              <span className={cn(
                'block h-px bg-current transition-all duration-300',
                isMobileMenuOpen ? 'opacity-0 scale-x-0' : ''
              )} />
              <span className={cn(
                'block h-px bg-current transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-center',
                isMobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              )} />
            </span>
          </button>
        </div>
        </nav>
      </header>

      <MobileNav isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
