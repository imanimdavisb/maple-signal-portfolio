import { healthyGreenLandscape } from "./data/healthy-green-landscape";
import { fernBasinSalonSpa } from "./data/fern-basin-salon-spa";
import type { Project } from "./types";

const projects: Project[] = [healthyGreenLandscape, fernBasinSalonSpa];

export function getAllProjects(): Project[] {
  return projects;
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
