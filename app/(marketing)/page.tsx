import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { WhyUs } from "@/components/sections/WhyUs";
import { ServicesSummary } from "@/components/sections/ServicesSummary";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTASection } from "@/components/sections/CTASection";
import { Section } from "@/components/ui/Section";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Maple & Signal — Websites for Local Businesses" },
  description:
    "Maple & Signal designs conversion-focused websites for local businesses — built to turn visitors into calls, quote requests, and customers.",
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Web Design & Digital Strategy"
        title="Websites built to bring your local business more customers."
        description="Maple & Signal designs and builds conversion-focused websites for local businesses — structured around getting visitors to call, request a quote, or book a job."
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />
      <Section>
        <FeaturedWork />
      </Section>
      <Section tone="alt">
        <WhatWeBuild />
      </Section>
      <Section>
        <WhyUs />
      </Section>
      <Section tone="alt">
        <ServicesSummary />
      </Section>
      <Section>
        <ProcessSteps />
      </Section>
      <CTASection
        eyebrow="Ready When You Are"
        title="Let's build a website that works as hard as you do."
        description="Get a free audit of your current website, or start a new project from scratch."
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />
    </>
  );
}
