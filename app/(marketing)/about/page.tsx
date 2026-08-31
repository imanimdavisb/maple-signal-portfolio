import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { PRIMARY_CTA } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: "Maple & Signal designs conversion-focused websites for local businesses.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A studio built around one idea: your website should bring you customers"
        description="Maple & Signal is a web design studio focused entirely on local businesses — the kind that win or lose customers based on how their website performs."
      />

      <Section>
        <div className="grid gap-12 sm:grid-cols-2">
          <div>
            <SectionHeading eyebrow="The Name" title="Maple & Signal" />
            <p className="mt-4 text-ink-muted">
              Maple represents craft and warmth — the care that goes into every design decision.
              Signal represents clarity and performance — the idea that a website should communicate
              clearly and get results. Every project we take on balances both.
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Our Approach" title="Strategy first, design second" />
            <p className="mt-4 text-ink-muted">
              Before any design work starts, we map out what a business actually needs its website
              to do — what services to lead with, what questions customers ask first, and where a
              visitor is most likely to leave. The design follows from that.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow="Who We Work With"
          title="Local businesses who depend on their website to bring in work"
        />
        <p className="mt-6 max-w-2xl text-lg text-ink-muted">
          Home service companies, contractors, and other local businesses where a website is often
          a customer&apos;s first impression — and where a slow, generic, or outdated site is actively
          costing leads.
        </p>
      </Section>

      <CTASection
        title="Have a project in mind?"
        primaryCta={PRIMARY_CTA}
        secondaryCta={{ label: "View Our Work", href: "/work" }}
      />
    </>
  );
}
