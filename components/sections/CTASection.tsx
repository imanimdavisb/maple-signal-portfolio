import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export function CTASection({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <Section tone="ink">
      <div className="max-w-2xl">
        {eyebrow && (
          <p className="mb-4 text-sm font-medium uppercase tracking-wider text-maple">{eyebrow}</p>
        )}
        <h2 className="font-display text-3xl sm:text-4xl">{title}</h2>
        {description && <p className="mt-4 text-lg text-paper/70">{description}</p>}
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href={primaryCta.href}>{primaryCta.label}</Button>
          {secondaryCta && (
            <Button href={secondaryCta.href} variant="secondaryOnDark">
              {secondaryCta.label}
            </Button>
          )}
        </div>
      </div>
    </Section>
  );
}
