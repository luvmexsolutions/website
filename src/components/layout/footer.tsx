import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { siteConfig } from '@/config/site';
import { footerLinks } from '@/config/footer';

/**
 * Footer — site-wide footer.
 * Server Component — no client JS.
 */
export function Footer() {
  return (
    <footer className="relative border-t border-surface-border/60 bg-surface-secondary overflow-hidden">
      {/* Top fade gradient */}
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-500/30 to-transparent"
        aria-hidden="true"
      />

      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-brand-900/20 via-transparent to-transparent blur-3xl"
        aria-hidden="true"
      />

      <Container>
        <div className="py-14 sm:py-20 relative z-10">
          {/* Grid: Logo column + link columns */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

            {/* Brand column */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link
                href="/"
                className="inline-block text-lg font-bold text-content-primary tracking-tighter hover:text-brand-400 transition-colors duration-300"
              >
                {siteConfig.name}
              </Link>
              <p className="mt-4 text-sm text-content-tertiary leading-relaxed max-w-[28ch]">
                {siteConfig.description}
              </p>

              {/* Social links */}
              <div className="mt-7 flex gap-3">
                {siteConfig.socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="group flex h-9 w-9 items-center justify-center rounded-full border border-surface-border bg-surface-card text-content-tertiary hover:text-content-primary hover:border-brand-500/30 hover:bg-brand-500/8 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)]"
                  >
                    <SocialIcon platform={social.icon} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-content-tertiary mb-5">
                  {group.title}
                </h3>
                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-content-secondary hover:text-content-primary transition-colors duration-200 link-underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-8 border-t border-surface-border/60 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-xs text-content-tertiary font-mono">
              {siteConfig.legal.copyright}
            </p>
            <div className="flex gap-6">
              <Link
                href={siteConfig.legal.privacyUrl}
                className="text-xs text-content-tertiary hover:text-content-secondary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href={siteConfig.legal.termsUrl}
                className="text-xs text-content-tertiary hover:text-content-secondary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/** Inline SVG social icons */
function SocialIcon({ platform }: { platform: string }) {
  const size = 16;
  switch (platform) {
    case 'linkedin':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case 'github':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      );
    case 'x':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    default:
      return null;
  }
}
