/** The three Maple & Signal services, as shown on the home and Services pages. */

export interface ServiceLine {
  id: "business-websites" | "professional-portfolios" | "website-audits";
  name: string;
  audience: string;
  summary: string;
  /** Short price line. Business websites are quoted per project. */
  price: string;
  packages: string[];
  learnMore: { label: string; href: string };
  quote: { label: string; href: string };
}

export const SERVICE_LINES: ServiceLine[] = [
  {
    id: "business-websites",
    name: "Business Website Design",
    audience: "Small businesses, entrepreneurs, independent professionals & seasonal service providers",
    summary:
      "Conversion-focused websites built to turn visitors into calls, quote requests, and booked jobs.",
    price: "Quoted per project",
    packages: ["Starter Site", "Growth Site", "Custom Build"],
    learnMore: { label: "Explore Business Websites", href: "/services#business-websites" },
    quote: { label: "Request a Quote", href: "/contact?service=business-website" },
  },
  {
    id: "professional-portfolios",
    name: "Professional Portfolio Websites",
    audience: "Students, recent graduates, career changers & established professionals",
    summary:
      "A polished personal website that presents your experience, projects, and goals in one link.",
    price: "From $199",
    packages: ["Career Launch", "Career Transition", "Professional Growth"],
    learnMore: { label: "See Portfolio Demos", href: "/professional-portfolios" },
    quote: { label: "Start a Portfolio", href: "/professional-portfolios#inquiry" },
  },
  {
    id: "website-audits",
    name: "Website Audits & Improvements",
    audience: "Anyone with a website that isn't bringing in the results it should",
    summary:
      "A clear review of design, mobile, SEO basics, speed, accessibility, and conversion, with a prioritized fix list.",
    price: "Free check · Full audit $149",
    packages: ["Free Website Check", "Full Website Audit", "Audit + Fix Sprint", "Ongoing Improvements"],
    learnMore: { label: "Explore Website Audits", href: "/website-audits" },
    quote: { label: "Get a Free Website Check", href: "/contact?service=website-audit" },
  },
];
