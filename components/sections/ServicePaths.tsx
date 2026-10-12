import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SERVICE_LINES } from "@/lib/services";

/** The three services side by side, each with a way to learn more and a way to ask. */
export function ServicePaths({
  eyebrow = "What We Do",
  title = "Three ways we can help",
  description = "Pick the service that fits where you are. Not sure? Ask for a free website check and we'll point you in the right direction.",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {SERVICE_LINES.map((service, index) => (
          <article
            key={service.id}
            className="flex flex-col rounded-2xl border border-line bg-paper p-8"
          >
            <p className="font-display text-3xl text-maple">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-display text-2xl text-ink">
              {service.name}
            </h3>
            <p className="mt-2 text-sm font-medium text-signal">
              {service.audience}
            </p>
            <p className="mt-4 text-ink-muted">{service.summary}</p>
            <ul className="mt-6 mb-6 space-y-2 text-sm text-ink-muted">
              {service.packages.map((name) => (
                <li key={name} className="flex gap-2">
                  <span className="text-maple">—</span>
                  {name}
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <p className="border-t border-line pt-5 font-display text-lg text-ink">
                {service.price}
              </p>
              <div className="mt-6 flex flex-col items-start gap-3">
                <Button href={service.quote.href}>{service.quote.label}</Button>
                <Link
                  href={service.learnMore.href}
                  className="inline-flex items-center py-2 text-sm font-medium text-ink underline decoration-line decoration-2 underline-offset-4 transition-colors hover:text-maple hover:decoration-maple"
                >
                  {service.learnMore.label}
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
