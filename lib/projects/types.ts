export type ProjectStatus = "concept" | "live" | "in-progress";

export interface ProjectImage {
  /** Also used as the visible label when no `src` is available yet. */
  alt: string;
  /** Omit to render a labeled placeholder instead of a real screenshot. */
  src?: string;
  caption?: string;
}

export interface BeforeAfterPair {
  before: ProjectImage;
  after: ProjectImage;
}

export interface CaseStudyContent {
  overview: string;
  challenge: string;
  strategy: string;
  solution: string;
  conversionStrategy: string;
  /** Short phrase completing "Designed to turn visitors into ___" (e.g. "estimate requests", "booked appointments"). */
  conversionGoal: string;
  featuresImplemented: string[];
  designDecisions: string[];
  technologies: string[];
  desktopScreenshots: ProjectImage[];
  mobileScreenshots: ProjectImage[];
  /** Optional — omit entirely rather than fabricating a before state. */
  beforeAfter?: BeforeAfterPair[];
}

export interface Project {
  slug: string;
  name: string;
  industry: string;
  status: ProjectStatus;
  /** Overrides the default status-derived eyebrow label (e.g. "Concept Project"). */
  label?: string;
  featured: boolean;
  summary: string;
  featureTags: string[];
  cardImage: ProjectImage;
  /** null = not yet available; renders a "coming soon" state instead of a dead link. */
  liveUrl: string | null;
  /** Optional link to the project's public source repository. */
  githubUrl?: string | null;
  caseStudy: CaseStudyContent;
}
