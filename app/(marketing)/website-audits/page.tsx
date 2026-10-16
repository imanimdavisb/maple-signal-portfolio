import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/forms/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import {
  AUDIT_AREAS,
  AUDIT_FAQ,
  AUDIT_PACKAGES,
  AUDIT_STEPS,
} from "@/lib/audits";

export const metadata: Metadata = {
  title: "Website Audits & Improvements",
  description:
    "Website audits from Maple & Signal: a free website check, a full $149 audit of design, mobile usability, SEO basics, speed, accessibility, and conversion, plus fixes and ongoing improvements.",
};

const AUDIT_CTA = {
  label: "Get a Free Website Check",
  href: "/contact?service=website-audit",
};

export default function WebsiteAuditsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Website Audits & Improvements"
        title="Find out what your website is costing you"
        description="A clear, honest review of the site you already have, with the fixes that matter most in priority order. Start with a free check, or go deeper with a full audit."
      />

      <Section id="packages">
        <SectionHeading
          eyebrow="Audit Packages"
          title="Start free, go as deep as you need"
          description="Every audit ends with a plan you can act on, whether you make the changes yourself or have us handle them."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {AUDIT_PACKAGES.map((pkg) => (
            <article
              key={pkg.name}
              className={`flex flex-col rounded-2xl border bg-paper p-7 ${
                pkg.highlight ? "border-maple ring-1 ring-maple" : "border-line"
              }`}
            >
              <h3 className="font-display text-xl text-ink">{pkg.name}</h3>
              <p className="mt-4 h-5 text-xs font-medium uppercase tracking-wider text-ink-muted">
                {pkg.pricePrefix}
              </p>
              <p className="mt-1 font-display text-4xl text-ink">
                {pkg.price}
                {pkg.priceNote && (
                  <span className="font-sans text-base text-ink-muted">
                    {pkg.priceNote}
                  </span>
                )}
              </p>
              <p className="mt-4 text-sm text-ink-muted">{pkg.summary}</p>
              <ul className="mt-6 mb-8 space-y-3 text-sm text-ink-muted">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-maple">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button
                href={pkg.cta.href}
                variant={pkg.highlight ? "primary" : "secondary"}
                className="mt-auto"
              >
                {pkg.cta.label}
              </Button>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-ink-muted">
          Prices are starting points. Fix sprints and ongoing improvements are
          scoped to your site, and you&apos;ll get a quote before any paid work
          begins.
        </p>
      </Section>

      <Section tone="alt">
        <SectionHeading
          eyebrow="What We Review"
          title="Six areas that decide whether visitors stay"
        />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIT_AREAS.map((area, index) => (
            <div key={area.title} className="flex gap-5">
              <span className="font-display text-2xl text-maple">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-xl text-ink">{area.title}</h3>
                <p className="mt-2 text-ink-muted">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How It Works"
          title="From first look to fixed"
        />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {AUDIT_STEPS.map((step) => (
            <div key={step.step}>
              <p className="font-display text-3xl text-maple">{step.step}</p>
              <h3 className="mt-3 font-display text-lg text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Beyond the Audit"
              title="When fixes aren't enough"
              description="If your audit shows the site needs a fresh start, we can rebuild it with a conversion-focused structure while keeping the branding and content that already works."
            />
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/services#business-websites">
                See Website Packages
              </Button>
              <Button href="/work" variant="secondary">
                View Our Work
              </Button>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-paper p-8">
            <p className="text-sm font-medium uppercase tracking-wider text-signal">
              Good to know
            </p>
            <ul className="mt-5 space-y-4 text-ink-muted">
              <li className="flex gap-3">
                <span className="text-maple">—</span>
                Your Full Website Audit fee is credited toward a redesign booked
                within 30 days.
              </li>
              <li className="flex gap-3">
                <span className="text-maple">—</span>
                Audits work for any platform: Wix, Squarespace, WordPress,
                Shopify, or custom.
              </li>
              <li className="flex gap-3">
                <span className="text-maple">—</span>
                No access to your site is needed for an audit.
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions about audits" />
        <div className="mt-10 max-w-2xl">
          <FAQ items={AUDIT_FAQ} />
        </div>
      </Section>

      <CTASection
        eyebrow="Free Website Check"
        title="See your top five fixes, free."
        description="Send us your website address and we'll reply with the first changes we'd make."
        primaryCta={AUDIT_CTA}
        secondaryCta={{ label: "Explore All Services", href: "/services" }}
      />
    </>
  );
}
