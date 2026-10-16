export const SITE_NAME = "Maple & Signal";
export const SITE_TAGLINE = "Business websites, professional portfolios, and website audits.";

/**
 * PLACEHOLDER — replace with the real production domain before launch.
 * Used only for absolute URLs in metadata (canonical/OG tags, sitemap, robots).
 */
export const SITE_URL = "https://www.maplesignal.example";

/**
 * PLACEHOLDER — replace with a real inbox once one is set up.
 */
export const CONTACT_EMAIL = "hello@maplesignal.example";

/** Phone for inquiries. `href` is the dialable form used in tel: links. */
export const CONTACT_PHONE = { label: "(708) 655-8698", href: "tel:+17086558698" };

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Professional Portfolios", href: "/professional-portfolios" },
  { label: "Website Audits", href: "/website-audits" },
  { label: "Our Work", href: "/work" },
  { label: "Contact", href: "/contact" },
] as const;

/** Footer keeps every page reachable, including About (not in the top nav). */
export const FOOTER_LINKS = [
  ...NAV_LINKS.filter((link) => link.href !== "/"),
  { label: "About", href: "/about" },
] as const;

export const PRIMARY_CTA = { label: "Get a Free Website Audit", href: "/contact" };
export const SECONDARY_CTA = { label: "View Our Work", href: "/work" };

/**
 * Social links are optional and only rendered in the footer when present.
 * PLACEHOLDER — add real profile URLs when available.
 */
export const SOCIAL_LINKS: { label: string; href: string }[] = [];
