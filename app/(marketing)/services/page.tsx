import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/forms/FAQ";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CTASection } from "@/components/sections/CTASection";
import { PRIMARY_CTA } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description: "Website design and lead-generation packages for local businesses, from Maple & Signal.",
};

const tiers = [
  {
    name: "Starter Site",
    description:
      "A focused, single-service website for businesses that need a strong, professional presence fast.",
    features: [
      "Up to 5 pages",
      "Mobile-first responsive design",
      "Contact & lead form",
      "Core on-page SEO setup",
    ],
  },
  {
    name: "Growth Site",
    description:
      "A full lead-generation website with the structure local service businesses need to convert visitors.",
    features: [
      "Service & pricing pages",
      "Before & after / project gallery",
      "Google Reviews integration",
      "Service-area page & map",
      "FAQ & estimate/quote form",
    ],
  },
  {
    name: "Custom Build",
    description: "A tailored site for businesses with multiple services, locations, or systems to integrate.",
    features: [
      "Multi-location structure",
      "Custom integrations (booking, CRM, reviews)",
      "Ongoing content & feature additions",
      "Priority support",
    ],
  },
];

const faqItems = [
  {
    question: "How much does a website cost?",
    answer:
      "It depends on the scope of the project — the number of pages, features like galleries or booking forms, and any integrations. Request a quote and we'll put together pricing based on what your business actually needs.",
  },
  {
    question: "How long does a project take?",
    answer:
      "Most projects move through discovery, design, and build in a matter of weeks. We'll give you a specific timeline once we understand the scope.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Yes. Sites are built to be extended over time — new services, new pages, new case studies — and we stay on as a partner rather than disappearing after handoff.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Yes. We can rebuild an existing site with a conversion-focused structure while keeping the branding and content that already works.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Websites built to bring in customers"
        description="Every package is built around one goal: turning visitors into leads for your business."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="flex flex-col rounded-2xl border border-line bg-paper p-8">
              <h3 className="font-display text-2xl text-ink">{tier.name}</h3>
              <p className="mt-3 text-ink-muted">{tier.description}</p>
              <ul className="mt-6 space-y-3 text-sm text-ink-muted">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span className="text-maple">—</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="secondary" className="mt-8">
                Request a Quote
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-10 text-sm text-ink-muted">
          Pricing is scoped to each project —{" "}
          <a href="/contact" className="text-maple underline underline-offset-2">
            get in touch
          </a>{" "}
          for a free audit and a quote tailored to your business.
        </p>
      </Section>

      <Section tone="alt">
        <ProcessSteps />
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mt-10 max-w-2xl">
          <FAQ items={faqItems} />
        </div>
      </Section>

      <CTASection
        title="Ready to talk about your project?"
        primaryCta={PRIMARY_CTA}
        secondaryCta={{ label: "View Our Work", href: "/work" }}
      />
    </>
  );
}
