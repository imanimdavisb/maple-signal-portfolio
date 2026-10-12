/**
 * Portfolio registry.
 *
 * To add a client: copy the demo file that matches their package, edit the data,
 * import it here and add it to `portfolios`. It will be served at
 * /portfolios/<slug> using the template named in its `template` field.
 */
import { adrienneVale } from "./adrienne-vale";
import { marcusBell } from "./marcus-bell";
import { simoneAdeyemi } from "./simone-adeyemi";
import type { PortfolioProfile, TemplateId } from "./types";

export const portfolios: PortfolioProfile[] = [simoneAdeyemi, marcusBell, adrienneVale];

export function getPortfolio(slug: string) {
  return portfolios.find((p) => p.slug === slug);
}

/** Display info for each template, used on the sales site. */
export const templateInfo: Record<
  TemplateId,
  { name: string; audience: string; mood: string; demoSlug: string; number: string }
> = {
  launch: {
    name: "Career Launch",
    audience: "Recent graduates & entry-level professionals",
    mood: "Fresh, editorial, quietly confident",
    demoSlug: "simone-adeyemi",
    number: "01",
  },
  transition: {
    name: "Career Transition",
    audience: "Job seekers & career changers",
    mood: "Structured, modern, story-led",
    demoSlug: "marcus-bell",
    number: "02",
  },
  growth: {
    name: "Professional Growth",
    audience: "Experienced professionals & executives",
    mood: "Luxury editorial, restrained motion",
    demoSlug: "adrienne-vale",
    number: "03",
  },
};

export type { PortfolioProfile, TemplateId };
