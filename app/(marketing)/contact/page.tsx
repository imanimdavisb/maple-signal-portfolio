import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm, ContactFormWithParams } from "@/components/forms/ContactForm";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/site-config";
import { isDeliveryConfigured } from "@/lib/forms/deliver";

export const metadata: Metadata = {
  title: "Contact / Free Website Audit",
  description:
    "Request a free website check, a quote for a business website, or a professional portfolio website from Maple & Signal.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free website audit or start a project"
        description="Tell us what you need: a new business website, a review of your current site, or a professional portfolio. We'll follow up with what's working, what isn't, and how we'd approach it."
      />
      <Section>
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
          <Suspense fallback={<ContactForm deliveryReady={isDeliveryConfigured()} />}>
            <ContactFormWithParams deliveryReady={isDeliveryConfigured()} />
          </Suspense>
          <div className="space-y-8 text-sm text-ink-muted">
            <div>
              <p className="font-medium text-ink">Prefer email?</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block text-maple">
                {CONTACT_EMAIL}
              </a>
            </div>
            <div>
              <p className="font-medium text-ink">Prefer to talk?</p>
              <a href={CONTACT_PHONE.href} className="mt-1 block text-maple">
                {CONTACT_PHONE.label}
              </a>
            </div>
            <div>
              <p className="font-medium text-ink">What happens next</p>
              <p className="mt-1">
                We&apos;ll review what you share and follow up within one business day with next
                steps.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
