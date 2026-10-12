/**
 * Portfolio data model.
 *
 * Each client site is one data file (see ./simone-adeyemi.ts etc.) that picks a
 * template and fills in that template's sections. Swap the data, keep the design.
 *
 * Shared shapes come first; each template then adds the sections it needs.
 */
import type { PackageId } from "@/lib/portfolios/packages";

export type TemplateId = "launch" | "transition" | "growth";

/**
 * A contact or social link.
 * Set `href` to null for demo profiles: the button stays visible but explains
 * that it is a placeholder instead of sending visitors somewhere fake.
 */
export type ContactLink = {
  kind: "linkedin" | "email" | "github" | "website" | "phone" | "calendar";
  label: string;
  /** What the visitor sees, e.g. "simone@example.com". Defaults to label. */
  display?: string;
  href: string | null;
};

export type Headshot = { src: string; alt: string } | null;

export type Certification = {
  name: string;
  issuer: string;
  year: string;
  status?: "Completed" | "In progress";
};

export type Education = {
  school: string;
  degree: string;
  location?: string;
  start?: string;
  end: string;
  details?: string[];
  honors?: string[];
  coursework?: string[];
};

export type Role = {
  org: string;
  role: string;
  location?: string;
  start: string;
  end: string;
  summary?: string;
  bullets: string[];
  tags?: string[];
};

export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  summary: string;
  role?: string;
  problem?: string;
  approach?: string[];
  outcome?: string[];
  tools: string[];
};

export type Metric = { value: string; label: string; context?: string };

export type BaseProfile = {
  slug: string;
  template: TemplateId;
  /** Shows the "fictional demonstration" labels. Set false for real clients. */
  fictional: boolean;
  /** Package this design belongs to, used by the "Build yours" call to action. */
  packageId: PackageId;
  seo: { title: string; description: string };
  /** Accent color for this client. Each template derives its palette from it. */
  theme: { accent: string };
  person: {
    name: string;
    firstName: string;
    initials: string;
    role: string;
    location: string;
    pronouns?: string;
    headshot: Headshot;
    availability?: string;
  };
  intro: { eyebrow: string; headline: string; lede: string };
  about: string[];
  resume: { href: string; fileName: string; updated: string };
  contact: { heading: string; blurb: string; links: ContactLink[] };
  certifications: Certification[];
};

/* --------------------------------- Launch --------------------------------- */

export type LaunchProfile = BaseProfile & {
  template: "launch";
  facts: { label: string; value: string }[];
  education: Education[];
  experience: Role[];
  leadership: Role[];
  skills: { group: string; items: string[] }[];
  projects: Project[];
};

/* ------------------------------- Transition ------------------------------- */

export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  org: string;
  kind: "role" | "learning" | "milestone";
  detail: string;
  carriedForward: string[];
};

export type TransitionProfile = BaseProfile & {
  template: "transition";
  summary: string;
  quickFacts: Metric[];
  transition: {
    from: string;
    to: string;
    heading: string;
    statement: string[];
  };
  transferableSkills: { skill: string; then: string; next: string }[];
  accomplishments: Metric[];
  timeline: TimelineEntry[];
  roles: Role[];
  projects: Project[];
};

/* --------------------------------- Growth --------------------------------- */

export type CaseStudy = {
  id: string;
  title: string;
  org: string;
  sector: string;
  year: string;
  challenge: string;
  approach: string[];
  outcome: string[];
  metrics: Metric[];
};

export type GrowthProfile = BaseProfile & {
  template: "growth";
  expertise: { title: string; description: string }[];
  highlights: Metric[];
  positions: Role[];
  philosophy: { quote: string; principles: { title: string; body: string }[] };
  caseStudies: CaseStudy[];
  accomplishments: string[];
  credentials: {
    education: Education[];
    boards: { org: string; role: string; period: string }[];
  };
  /** Optional: only include if it fits the person's profile. */
  thoughtLeadership?: {
    kind: "Talk" | "Article" | "Panel" | "Podcast";
    title: string;
    venue: string;
    year: string;
  }[];
};

export type PortfolioProfile = LaunchProfile | TransitionProfile | GrowthProfile;
