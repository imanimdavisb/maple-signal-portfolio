import Image from "next/image";
import type { Project } from "@/lib/projects/types";
import { Tag } from "@/components/ui/Tag";
import { Button, ButtonExternal } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { BrowserFrame } from "./BrowserFrame";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-shadow hover:shadow-lg">
      <BrowserFrame>
        {project.cardImage.src ? (
          <Image
            src={project.cardImage.src}
            alt={project.cardImage.alt}
            width={800}
            height={500}
            className="aspect-[8/5] w-full object-cover"
          />
        ) : (
          <PlaceholderImage
            label={project.cardImage.alt}
            aspect="card"
            className="rounded-none border-0"
          />
        )}
      </BrowserFrame>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <Tag tone="signal">{project.industry}</Tag>

        <div>
          <h3 className="font-display text-2xl text-ink">{project.name}</h3>
          <p className="mt-2 text-ink-muted">{project.summary}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.featureTags.slice(0, 4).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.liveUrl ? (
            <ButtonExternal href={project.liveUrl} variant="secondary">
              View Live Site
            </ButtonExternal>
          ) : (
            <span className="inline-flex items-center rounded-full border border-dashed border-ink/25 px-6 py-3 text-sm text-ink-muted">
              Live Demo Coming Soon
            </span>
          )}
          <Button href={`/work/${project.slug}`}>View Case Study</Button>
        </div>
      </div>
    </article>
  );
}
