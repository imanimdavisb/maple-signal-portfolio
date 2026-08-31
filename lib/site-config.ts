export const SITE_NAME = "Maple & Signal";
export const SITE_TAGLINE = "Conversion-focused websites for local businesses.";

/**
 * PLACEHOLDER — replace with the real production domain before launch.
 * Used only for absolute URLs in metadata (canonical/OG tags, sitemap, robots).
 */
export const SITE_URL = "https://www.maplesignal.example";

/**
 * PLACEHOLDER — replace with a real inbox once one is set up.
 */
export const CONTACT_EMAIL = "hello@maplesignal.example";

export const NAV_LINKS = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const PRIMARY_CTA = { label: "Get a Free Website Audit", href: "/contact" };
export const SECONDARY_CTA = { label: "View Our Work", href: "/work" };

/**
 * Social links are optional and only rendered in the footer when present.
 * PLACEHOLDER — add real profile URLs when available.
 */
export const SOCIAL_LINKS: { label: string; href: string }[] = [];
