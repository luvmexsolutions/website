'use client';

import { useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { navItems, navCTA } from '@/config/navigation';
import { ArrowUpRight } from '@phosphor-icons/react';
import { ThemeToggle } from '@/components/theme/theme-toggle';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  const isActive = (href: string): boolean => {
    if (href.startsWith('/#')) return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      requestAnimationFrame(() => { closeButtonRef.current?.focus(); });
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !navRef.current) return;
    const focusable = getFocusableElements(navRef.current);
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          'fixed inset-0 z-50 backdrop-blur-2xl bg-surface-primary/85 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden',
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div
        ref={navRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        onKeyDown={handleKeyDown}
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full max-w-sm',
          'border-l border-surface-border/60 bg-surface-secondary/95 backdrop-blur-2xl',
          'transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex h-full flex-col px-7 py-7">

          {/* Close button */}
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-content-primary tracking-tight">Menu</span>
            <button
              ref={closeButtonRef}
              type="button"
              id="mobile-nav-close"
              onClick={onClose}
              className="p-2 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full text-content-secondary hover:text-content-primary hover:bg-surface-elevated transition-all duration-300"
              aria-label="Close menu"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

          {/* Nav links — staggered */}
          <nav className="mt-10 flex flex-col" aria-label="Mobile navigation links">
            {navItems.map((item, i) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'group flex items-center justify-between py-4 border-b border-surface-border/50 text-xl font-semibold tracking-tight transition-all duration-300',
                    'focus-visible:outline-none focus-visible:text-brand-400',
                    active
                      ? 'text-brand-400'
                      : 'text-content-secondary hover:text-content-primary'
                  )}
                  style={{
                    transitionDelay: isOpen ? `${i * 50}ms` : '0ms',
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? 'translateY(0)' : 'translateY(12px)',
                  }}
                >
                  {item.label}
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Footer: Theme Toggle & CTA */}
          <div className="mt-auto space-y-3 pb-safe-area-inset-bottom">
            <div className="pt-2">
              <ThemeToggle showLabel className="py-3 px-4 w-full" />
            </div>

            <div onClick={onClose}>
              <Link
                href={navCTA.href}
                id="mobile-nav-cta"
                className="flex items-center justify-between w-full rounded-full px-6 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold text-base transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
              >
                <span>{navCTA.label}</span>
                <span className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                  <ArrowUpRight size={14} weight="bold" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
