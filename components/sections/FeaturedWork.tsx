import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, ButtonExternal } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { BrowserFrame } from "@/components/project/BrowserFrame";
import { getFeaturedProjects } from "@/lib/projects";
import type { Project } from "@/lib/projects/types";

export function FeaturedWork() {
  const projects = getFeaturedProjects();
  if (projects.length === 0) return null;

  return (
    <>
      <SectionHeading eyebrow="Selected Work" title="Concept case studies for local businesses" />
      <div className="mt-12 space-y-20">
        {projects.map((project) => (
          <FeaturedProject key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <BrowserFrame>
        {project.cardImage.src ? (
          <Image
            src={project.cardImage.src}
            alt={project.cardImage.alt}
            width={900}
            height={560}
            className="w-full"
          />
        ) : (
          <PlaceholderImage
            label={project.cardImage.alt}
            aspect="video"
            className="rounded-none border-0"
          />
        )}
      </BrowserFrame>

      <div>
        <Tag tone="signal">{project.industry}</Tag>
        <h3 className="mt-4 font-display text-3xl text-ink">{project.name}</h3>
        <p className="mt-4 text-lg text-ink-muted">{project.summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.featureTags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={`/work/${project.slug}`}>View Case Study</Button>
          {project.liveUrl ? (
            <ButtonExternal href={project.liveUrl} variant="secondary">
              View Live Site
            </ButtonExternal>
          ) : (
            <span className="inline-flex items-center rounded-full border border-dashed border-ink/25 px-6 py-3 text-sm text-ink-muted">
              Live Demo Coming Soon
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
