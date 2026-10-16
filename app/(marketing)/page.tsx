import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { WhatWeBuild } from "@/components/sections/WhatWeBuild";
import { WhyUs } from "@/components/sections/WhyUs";
import { ServicesSummary } from "@/components/sections/ServicesSummary";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTASection } from "@/components/sections/CTASection";
import { ServicePaths } from "@/components/sections/ServicePaths";
import { MeetFounder } from "@/components/sections/MeetFounder";
import { DemoShowcase } from "@/components/portfolios/DemoShowcase";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { PRIMARY_CTA } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Maple & Signal — Business Websites, Portfolios & Website Audits" },
  description:
    "Maple & Signal designs conversion-focused websites for small businesses, professional portfolio websites for students and professionals, and website audits that show what to fix first.",
};

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Web Design, Portfolios & Website Audits"
        title="Websites that bring in customers, and portfolios that tell your story."
        description="Maple & Signal designs conversion-focused websites for small businesses, entrepreneurs, and independent professionals, professional portfolio websites for every stage of a career, and audits that show exactly what to fix on the site you already have."
        primaryCta={PRIMARY_CTA}
        secondaryCta={{ label: "Find the Right Service", href: "#services" }}
      />
      <Section tone="alt" id="services">
        <ServicePaths />
      </Section>
      <Section>
        <FeaturedWork />
      </Section>
      <Section tone="alt">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Professional Portfolios"
            title="Portfolio websites for every stage of a career"
            description="Three complete demo sites for fictional clients: a new graduate, a career changer, and an executive."
          />
          <Button href="/professional-portfolios" variant="secondary">
            Explore Portfolios
          </Button>
        </div>
        <div className="mt-12">
          <DemoShowcase />
        </div>
      </Section>
      <Section>
        <WhatWeBuild />
      </Section>
      <Section tone="alt">
        <WhyUs />
      </Section>
      <Section>
        <MeetFounder />
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
        description="Get a free audit of your current website, start a new business site, or build a portfolio that represents you."
        primaryCta={PRIMARY_CTA}
        secondaryCta={{ label: "Explore Services", href: "/services" }}
      />
    </>
  );
}
