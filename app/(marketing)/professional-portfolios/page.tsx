import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { FAQ } from "@/components/forms/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { DemoShowcase } from "@/components/portfolios/DemoShowcase";
import {
  PortfolioInquiryForm,
  PortfolioInquiryFormWithParams,
} from "@/components/portfolios/PortfolioInquiryForm";
import { RichText } from "@/components/portfolio-demos/shared/rich-text";
import { isDeliveryConfigured } from "@/lib/forms/deliver";
import { inquiryHref } from "@/lib/portfolios/links";
import {
  addOns,
  benefits,
  faqs,
  packages,
  pricingNote,
  processSteps,
  studentPricing,
  thirdPartyCosts,
} from "@/lib/portfolios/packages";

export const metadata: Metadata = {
  title: "Professional Portfolio Websites",
  description:
    "Professional portfolio websites for students, recent graduates, career changers, and established professionals. Career Launch $199, Career Transition $249, Professional Growth $399.",
};

export default function ProfessionalPortfoliosPage() {
  const deliveryReady = isDeliveryConfigured();

  return (
    <>
      <PageHeader
        eyebrow="Professional Portfolios"
        title="Your career deserves more than a resume"
        description="Polished personal websites for students, graduates, career changers, and experienced professionals: your experience, your story, and your own space on the web."
      />

      <Section id="demos">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Explore the Demos"
            title="Three designs, one for every stage"
            description="Each demo is a complete working site for a fictional client. Click through them the way a recruiter or hiring manager would."
          />
        </div>
        <div className="mt-12">
          <DemoShowcase />
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="Why a Portfolio Website" title="One link that tells your whole story" />
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title}>
              <h3 className="font-display text-xl text-ink">{benefit.title}</h3>
              <p className="mt-2 text-ink-muted">{benefit.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="packages">
        <SectionHeading
          eyebrow="Packages"
          title="Simple, one-time pricing"
          description={pricingNote}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article
              key={pkg.id}
              className={`flex flex-col rounded-2xl border bg-paper p-8 ${
                pkg.featured ? "border-maple ring-1 ring-maple" : "border-line"
              }`}
            >
              <p className="text-sm font-medium text-signal">{pkg.audience}</p>
              <h3 className="mt-2 font-display text-2xl text-ink">{pkg.name}</h3>
              <p className="mt-4 font-display text-5xl text-ink">${pkg.price}</p>
              <p className="mt-4 text-ink-muted">{pkg.summary}</p>
              <ul className="mt-6 mb-8 space-y-3 text-sm text-ink-muted">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-maple">—</span>
                    <span>
                      <RichText text={item} />
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-3">
                <Button href={inquiryHref(pkg.id)} variant={pkg.featured ? "primary" : "secondary"}>
                  Choose {pkg.name}
                </Button>
                <Button href={`/portfolios/${pkg.demoSlug}`} variant="ghost">
                  View Demo
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-dashed border-signal/40 bg-signal-light p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-xl text-ink">
              {studentPricing.title}
              {!studentPricing.available && (
                <span className="ml-3 inline-flex rounded-full bg-paper px-3 py-1 align-middle font-sans text-xs font-medium text-signal">
                  Coming soon
                </span>
              )}
            </p>
            <p className="mt-2 text-ink-muted">{studentPricing.body}</p>
          </div>
          <Button href="/professional-portfolios?package=student#inquiry" variant="secondary" className="shrink-0">
            Ask About Student Pricing
          </Button>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-display text-2xl text-ink">Optional extras</h3>
            <dl className="mt-6 divide-y divide-line border-y border-line">
              {addOns.map((addOn) => (
                <div key={addOn.name} className="flex flex-col gap-1 py-4 sm:flex-row sm:justify-between sm:gap-6">
                  <div>
                    <dt className="font-medium text-ink">{addOn.name}</dt>
                    <dd className="mt-1 text-sm text-ink-muted">{addOn.detail}</dd>
                  </div>
                  <dd className="shrink-0 text-sm text-ink sm:text-right">
                    <RichText text={addOn.price} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="font-display text-2xl text-ink">Costs paid to other companies</h3>
            <p className="mt-2 text-sm text-ink-muted">Not included in package prices.</p>
            <dl className="mt-6 space-y-5">
              {thirdPartyCosts.map((cost) => (
                <div key={cost.name}>
                  <dt className="font-medium text-ink">{cost.name}</dt>
                  <dd className="mt-1 text-sm text-ink-muted">{cost.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeading eyebrow="How It Works" title="From questionnaire to launch in five steps" />
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <div key={step.title}>
              <p className="font-display text-3xl text-maple">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 font-display text-lg text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-muted">{step.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQ" title="Questions about portfolio websites" />
        <div className="mt-10 max-w-2xl">
          <FAQ
            items={faqs.map((faq) => ({ question: faq.question, answer: <RichText text={faq.answer} /> }))}
          />
        </div>
      </Section>

      <Section tone="alt" id="inquiry">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
          <SectionHeading
            eyebrow="Start Your Portfolio"
            title="Tell us about you"
            description="Share a few details and we'll reply by email with the package we'd recommend and next steps. No payment is taken through this form."
          />
          <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
            <Suspense fallback={<PortfolioInquiryForm deliveryReady={deliveryReady} />}>
              <PortfolioInquiryFormWithParams deliveryReady={deliveryReady} />
            </Suspense>
          </div>
        </div>
      </Section>

      <CTASection
        title="Not sure which package fits?"
        description="Choose “Not sure yet” in the form above, or get in touch and we'll help you decide."
        primaryCta={{ label: "Start Your Portfolio", href: "#inquiry" }}
        secondaryCta={{ label: "Contact Us", href: "/contact?service=professional-portfolio" }}
      />
    </>
  );
}
