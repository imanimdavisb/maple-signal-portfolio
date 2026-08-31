import type { Project } from "../types";

export const healthyGreenLandscape: Project = {
  slug: "healthy-green-landscape",
  name: "Healthy Green Landscape",
  industry: "Lawn Care & Landscaping",
  status: "concept",
  featured: true,
  summary:
    "A conversion-focused lead-generation website concept for a local lawn care company — built to turn visitors into free-estimate requests.",
  featureTags: [
    "Lead Gen Form",
    "Service Pricing",
    "Before & After Gallery",
    "Google Reviews",
    "Service-Area Map",
  ],
  cardImage: { alt: "Healthy Green Landscape homepage concept preview" },
  // PLACEHOLDER — the live demo URL is not finalized. Set this string to
  // activate the "View Live Site" links across the site; leave it `null`
  // to keep showing the "Live Demo Coming Soon" state.
  liveUrl: null,
  caseStudy: {
    overview:
      "Healthy Green Landscape is a concept redesign for a local lawn care and landscaping business, created to demonstrate how Maple & Signal approaches lead-generation websites for home service companies. The project reimagines a lawn care company's online presence around a single goal: turning visitors into free-estimate requests.",
    challenge:
      "Local lawn care companies compete on trust and responsiveness as much as price. A website for this kind of business has to answer a homeowner's questions fast — what services are offered, what they typically cost, whether the company is trustworthy, and whether they service the homeowner's neighborhood — or the visitor leaves and calls a competitor instead.",
    strategy:
      "The concept was built around a clear conversion path rather than a general brochure layout: lead with services and service area, back it up with pricing transparency and real review signals, and keep a low-friction estimate form within reach on every page. Every section was designed to move a visitor one step closer to requesting a quote.",
    solution:
      "The site structure prioritizes the decisions a homeowner actually makes: which services they need, what those services typically cost, whether the company works in their area, and what past customers think. A before-and-after project gallery and a live Google Reviews feed were used as trust signals placed close to the calls to action, rather than buried on a separate page.",
    conversionStrategy:
      "Calls to action — 'Get a Free Estimate' — appear at natural decision points, after the services section, after pricing, and after reviews, instead of relying on a single contact page. The estimate form was kept short by design, since long forms are a common drop-off point for local-service leads. The intent is to reduce the number of steps and the amount of typing between a homeowner deciding they're interested and the business actually receiving that lead.",
    conversionGoal: "estimate requests",
    featuresImplemented: [
      "Conversion-focused service pages with clear calls to action",
      "Lawn care service pricing presentation",
      "Before & after project gallery",
      "Live Google Reviews integration",
      "Interactive service-area map",
      "FAQ section addressing common homeowner questions",
      "Short-form free estimate request form",
      "Social media integration",
      "Fully responsive, mobile-first layout",
    ],
    designDecisions: [
      "Green was reserved for photography and real project imagery rather than the UI chrome, so the site reads as a landscaping business — not a generic template.",
      "Pricing was presented as ranges tied to service type, so homeowners can self-qualify before requesting an estimate.",
      "The estimate form was placed within easy reach on mobile, where the majority of local-service searches happen.",
      "Reviews and the before/after gallery were positioned close to pricing, so trust signals appear exactly where a visitor is deciding whether to convert.",
    ],
    technologies: [
      "Next.js",
      "Responsive, mobile-first CSS",
      "Google Reviews integration",
      "Google Maps service-area embed",
      "Estimate request form handling",
    ],
    desktopScreenshots: [
      { alt: "Healthy Green Landscape desktop homepage concept" },
      { alt: "Healthy Green Landscape desktop services & pricing concept" },
      { alt: "Healthy Green Landscape desktop reviews & gallery concept" },
      { alt: "Healthy Green Landscape desktop service-area & FAQ concept" },
    ],
    mobileScreenshots: [
      { alt: "Healthy Green Landscape mobile homepage concept" },
      { alt: "Healthy Green Landscape mobile estimate form concept" },
      { alt: "Healthy Green Landscape mobile gallery concept" },
    ],
    // No beforeAfter set: this is a concept build, not a redesign of a
    // confirmed prior site, so no "before" state is shown or implied.
  },
};
