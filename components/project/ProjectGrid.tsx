import type { Project } from "@/lib/projects/types";
import { Button } from "@/components/ui/Button";
import { ProjectCard } from "./ProjectCard";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
      <ComingSoonCard />
    </div>
  );
}

function ComingSoonCard() {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink/20 bg-paper-alt p-10 text-center">
      <p className="font-display text-xl text-ink">More Projects Coming Soon</p>
      <p className="mt-2 max-w-xs text-sm text-ink-muted">
        We&apos;re building our next case study. Want your business featured here?
      </p>
      <Button href="/contact" variant="secondary" className="mt-6">
        Start Your Project
      </Button>
    </div>
  );
}
