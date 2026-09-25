'use client';

import { useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { ButtonLink } from '@/components/ui/button';
import { navItems, navCTA } from '@/config/navigation';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

/** Query all focusable elements inside a container */
function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )
  );
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  /** Check if a nav href matches the current pathname */
  const isActive = (href: string): boolean => {
    if (href.startsWith('/#')) return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Focus the close button when dialog opens
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      // Small delay to allow transition to start
      requestAnimationFrame(() => {
        closeButtonRef.current?.focus();
      });
    }
  }, [isOpen]);

  // Escape key handler
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  // Focus trap handler
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'Tab' || !navRef.current) return;

    const focusable = getFocusableElements(navRef.current);
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey) {
      // Shift+Tab: wrap from first to last
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      // Tab: wrap from last to first
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, []);

  return (
    <>
      <div
        className={cn(
          'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        ref={navRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        onKeyDown={handleKeyDown}
        className={cn(
          'fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-surface-primary border-l border-surface-border',
          'transition-transform duration-300 ease-smooth lg:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="flex justify-end">
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-content-secondary hover:text-content-primary transition-colors"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'text-heading-4 transition-colors py-2 min-h-[44px] flex items-center',
                    active
                      ? 'text-brand-400'
                      : 'text-content-secondary hover:text-content-primary'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-auto pt-8" onClick={onClose}>
            <ButtonLink href={navCTA.href} size="lg" className="w-full">
              {navCTA.label}
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
