/**
 * Navigation item in the main nav.
 */
export interface NavItem {
  label: string;
  href: string;
}

/**
 * Navigation CTA button.
 */
export interface NavCTA {
  label: string;
  href: string;
}

/**
 * Footer link group.
 */
export interface FooterLinkGroup {
  title: string;
  links: NavItem[];
}

/**
 * Social media link.
 */
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
