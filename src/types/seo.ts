/**
 * SEO metadata types used by config and page-level metadata.
 */
export interface PageSEO {
  title: string;
  description: string;
  ogImage?: string;
}

export interface SiteMetadata {
  siteName: string;
  siteUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  ogImage: string;
  twitterHandle?: string;
}
