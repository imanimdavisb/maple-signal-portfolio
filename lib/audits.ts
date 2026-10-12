/**
 * Website Audits & Improvements: packages, prices, and what an audit covers.
 * Prices approved by Maple & Signal on 2026-10-12 as starting prices.
 */

export interface AuditPackage {
  name: string;
  /** Display price, e.g. "$149". */
  price: string;
  /** Shown above the price, e.g. "Starting at". */
  pricePrefix?: string;
  priceNote?: string;
  summary: string;
  includes: string[];
  cta: { label: string; href: string };
  highlight?: boolean;
}

const AUDIT_CONTACT = "/contact?service=website-audit";

export const AUDIT_PACKAGES: AuditPackage[] = [
  {
    name: "Free Website Check",
    price: "$0",
    summary: "A quick, no-obligation look at your site with the first fixes we'd make.",
    includes: [
      "Review of your homepage on desktop and phone",
      "Your top 5 fixes, in priority order",
      "Sent by email, no call required",
    ],
    cta: { label: "Get a Free Check", href: AUDIT_CONTACT },
  },
  {
    name: "Full Website Audit",
    price: "$149",
    summary: "A complete written review of your site with a prioritized plan you can act on.",
    includes: [
      "Written report covering all six audit areas",
      "Prioritized fix list: quick wins to bigger projects",
      "30-minute walkthrough call",
      "Fee credited toward a redesign booked within 30 days",
    ],
    cta: { label: "Request a Full Audit", href: AUDIT_CONTACT },
    highlight: true,
  },
  {
    name: "Audit + Fix Sprint",
    price: "$449",
    pricePrefix: "Starting at",
    summary: "The full audit, then we make the top-priority fixes on your existing site.",
    includes: [
      "Everything in the Full Website Audit",
      "Hands-on fixes to your current site, scoped up front",
      "Summary of what changed and what's next",
    ],
    cta: { label: "Request a Quote", href: AUDIT_CONTACT },
  },
  {
    name: "Ongoing Improvements",
    price: "$99",
    pricePrefix: "Starting at",
    priceNote: "/month",
    summary: "Steady, month-to-month care so your site keeps getting better after launch.",
    includes: [
      "Monthly check of speed, forms, and broken links",
      "Content updates and small improvements",
      "A short monthly summary of what changed",
    ],
    cta: { label: "Request a Quote", href: AUDIT_CONTACT },
  },
];

export const AUDIT_AREAS: { title: string; description: string }[] = [
  {
    title: "Design & First Impression",
    description:
      "Does the site look credible and current, and is it obvious within seconds what you do and who it's for?",
  },
  {
    title: "Mobile Usability",
    description:
      "Tap targets, text size, menus, and forms on a real phone screen, where many visitors arrive first.",
  },
  {
    title: "SEO Basics",
    description:
      "Page titles, descriptions, headings, local details, and the technical basics search engines look for.",
  },
  {
    title: "Speed",
    description:
      "How quickly key pages load, and which images, scripts, or plugins are slowing them down.",
  },
  {
    title: "Accessibility",
    description:
      "Color contrast, image descriptions, keyboard access, and form labels, so more people can use the site.",
  },
  {
    title: "Conversion Opportunities",
    description:
      "Calls to action, contact paths, trust signals, and forms: the places visitors decide to reach out, or leave.",
  },
];

export const AUDIT_STEPS = [
  {
    step: "01",
    title: "Send Your Site",
    description: "Share your website address and what you want it to do for you.",
  },
  {
    step: "02",
    title: "We Review",
    description: "We go through your site on desktop and phone across all six audit areas.",
  },
  {
    step: "03",
    title: "Get Your Plan",
    description: "You receive your fixes in priority order, with a walkthrough call for full audits.",
  },
  {
    step: "04",
    title: "Fix or Upgrade",
    description: "Make the changes yourself, have us handle them, or plan a redesign.",
  },
];

export const AUDIT_FAQ = [
  {
    question: "What's the difference between the free check and the full audit?",
    answer:
      "The free check looks at your homepage and sends your top five fixes by email. The full audit reviews the whole site across all six areas, comes as a written report with a prioritized plan, and includes a 30-minute walkthrough call.",
  },
  {
    question: "Do you need access to my website?",
    answer:
      "Not for an audit. We review your site the way visitors and search engines see it. For an Audit + Fix Sprint or Ongoing Improvements, we'll need access to make changes, and we'll agree on the scope before we start.",
  },
  {
    question: "Can you audit a site built on Wix, Squarespace, WordPress, or Shopify?",
    answer:
      "Yes. The audit covers what visitors experience, so it works for any platform. Some fixes depend on what the platform allows, and we'll note that in your plan.",
  },
  {
    question: "Will an audit guarantee more traffic or customers?",
    answer:
      "No one can honestly guarantee that. An audit shows you what's getting in the way, so you can fix the problems most likely to cost you visitors and inquiries.",
  },
  {
    question: "What if my site needs more than fixes?",
    answer:
      "Sometimes a rebuild is the better investment. If so, we'll say so plainly, and your Full Website Audit fee is credited toward a redesign booked within 30 days.",
  },
];
