import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="bg-paper pt-28 pb-20 sm:pt-36 sm:pb-28">
      <Container>
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-maple">{eyebrow}</p>
          )}
          <h1 className="font-display text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink-muted">{description}</p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-wrap gap-4">
              {primaryCta && <Button href={primaryCta.href}>{primaryCta.label}</Button>}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="secondary">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
