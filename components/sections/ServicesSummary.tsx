import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const tiers = [
  {
    name: "Starter Site",
    description: "A focused, single-service site to establish a strong online presence fast.",
  },
  {
    name: "Growth Site",
    description:
      "A full lead-generation website with pricing, galleries, reviews, and service-area pages.",
  },
  {
    name: "Custom Build",
    description: "A tailored build for businesses with multiple services, locations, or integrations.",
  },
];

export function ServicesSummary() {
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow="Services" title="Packages built around your business" />
        <Button href="/services" variant="secondary">
          View All Services
        </Button>
      </div>
      <div className="mt-12 grid gap-8 sm:grid-cols-3">
        {tiers.map((tier) => (
          <div key={tier.name} className="rounded-2xl border border-line bg-paper p-8">
            <h3 className="font-display text-xl text-ink">{tier.name}</h3>
            <p className="mt-3 text-ink-muted">{tier.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
