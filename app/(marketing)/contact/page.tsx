import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/forms/ContactForm";
import { CONTACT_EMAIL } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact / Free Website Audit",
  description: "Request a free website audit or start a new project with Maple & Signal.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get a free website audit"
        description="Tell us a bit about your business and current website, and we'll follow up with what's working, what isn't, and how we'd approach it."
      />
      <Section>
        <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
          <ContactForm />
          <div className="space-y-8 text-sm text-ink-muted">
            <div>
              <p className="font-medium text-ink">Prefer email?</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block text-maple">
                {CONTACT_EMAIL}
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
