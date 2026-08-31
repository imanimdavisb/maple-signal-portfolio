import { Container } from "./Container";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-line bg-paper pt-32 pb-16 sm:pt-40 sm:pb-20">
      <Container>
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-maple">
              {eyebrow}
            </p>
          )}
          <h1 className="font-display text-4xl text-ink sm:text-5xl">{title}</h1>
          {description && <p className="mt-5 text-lg text-ink-muted">{description}</p>}
        </div>
      </Container>
    </section>
  );
}
