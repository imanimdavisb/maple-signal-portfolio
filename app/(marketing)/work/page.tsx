import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ProjectGrid } from "@/components/project/ProjectGrid";
import { CTASection } from "@/components/sections/CTASection";
import { getAllProjects } from "@/lib/projects";
import { PRIMARY_CTA } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Case studies of conversion-focused websites Maple & Signal has designed for local businesses.",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <>
      <PageHeader
        eyebrow="Our Work"
        title="Websites built to bring local businesses more customers"
        description="Every project starts with the same goal: turn visitors into leads. Here's how that looks in practice."
      />
      <Section>
        <ProjectGrid projects={projects} />
      </Section>
      <CTASection
        title="Want a website like this for your business?"
        primaryCta={PRIMARY_CTA}
      />
    </>
  );
}
