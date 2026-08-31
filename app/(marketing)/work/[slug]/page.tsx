import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button, ButtonExternal } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { BrowserFrame } from "@/components/project/BrowserFrame";
import { FeatureChecklist } from "@/components/project/FeatureChecklist";
import { TechStack } from "@/components/project/TechStack";
import { DesktopScreenshots, MobileScreenshots } from "@/components/project/ScreenshotGallery";
import { BeforeAfter } from "@/components/project/BeforeAfter";
import { CTASection } from "@/components/sections/CTASection";
import { PRIMARY_CTA } from "@/lib/site-config";

export function generateStaticParams() {
  return getAllProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(props: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.name} — Case Study`,
    description: project.summary,
  };
}

const STATUS_LABEL: Record<string, string> = {
  concept: "Concept Redesign",
  live: "Live Client Project",
  "in-progress": "In Progress",
};

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { caseStudy } = project;

  return (
    <>
      <PageHeader
        eyebrow={`${project.industry} · ${project.label ?? STATUS_LABEL[project.status]}`}
        title={project.name}
        description={project.summary}
      />

      <Section>
        <BrowserFrame>
          {project.cardImage.src ? (
            <Image
              src={project.cardImage.src}
              alt={project.cardImage.alt}
              width={1200}
              height={750}
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
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact">{PRIMARY_CTA.label}</Button>
          {project.liveUrl ? (
            <ButtonExternal href={project.liveUrl} variant="secondary">
              View Live Site
            </ButtonExternal>
          ) : (
            <span className="inline-flex items-center rounded-full border border-dashed border-ink/25 px-6 py-3 text-sm text-ink-muted">
              Live Demo Coming Soon
            </span>
          )}
          {project.githubUrl && (
            <ButtonExternal href={project.githubUrl} variant="secondary">
              View Source
            </ButtonExternal>
          )}
        </div>
      </Section>

      <Section tone="alt">
        <div className="grid gap-12 sm:grid-cols-2">
          <CaseStudyBlock title="Project Overview" body={caseStudy.overview} />
          <CaseStudyBlock title="Challenge" body={caseStudy.challenge} />
          <CaseStudyBlock title="Strategy" body={caseStudy.strategy} />
          <CaseStudyBlock title="Website Solution" body={caseStudy.solution} />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Conversion Strategy"
          title={`Designed to turn visitors into ${caseStudy.conversionGoal}`}
        />
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">{caseStudy.conversionStrategy}</p>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="Features Implemented" title="What's built into the site" />
        <div className="mt-10">
          <FeatureChecklist items={caseStudy.featuresImplemented} />
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Design Decisions" title="Why the site looks and works the way it does" />
        <ul className="mt-10 space-y-6">
          {caseStudy.designDecisions.map((decision) => (
            <li key={decision} className="border-l-2 border-maple pl-6 text-ink-muted">
              {decision}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="Project Gallery" title="Desktop" />
        <div className="mt-10">
          <DesktopScreenshots images={caseStudy.desktopScreenshots} />
        </div>
        <SectionHeading eyebrow="Project Gallery" title="Mobile" className="mt-16" />
        <div className="mt-10">
          <MobileScreenshots images={caseStudy.mobileScreenshots} />
        </div>
      </Section>

      {caseStudy.beforeAfter && caseStudy.beforeAfter.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Before & After" title="Project transformations" />
          <div className="mt-10">
            <BeforeAfter pairs={caseStudy.beforeAfter} />
          </div>
        </Section>
      )}

      <Section tone="alt">
        <SectionHeading eyebrow="Technology & Integrations" title="What the site is built on" />
        <div className="mt-8">
          <TechStack items={caseStudy.technologies} />
        </div>
      </Section>

      <CTASection
        eyebrow="Own a Similar Business?"
        title={`Let's build your ${project.industry.toLowerCase()} website.`}
        description="Get a free audit of your current site, or start a new project from scratch."
        primaryCta={PRIMARY_CTA}
        secondaryCta={{ label: "See More Work", href: "/work" }}
      />
    </>
  );
}

function CaseStudyBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="font-display text-xl text-ink">{title}</h3>
      <p className="mt-3 text-ink-muted">{body}</p>
    </div>
  );
}
