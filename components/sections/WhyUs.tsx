import { SectionHeading } from "@/components/ui/SectionHeading";

const reasons = [
  {
    title: "Built for local business owners",
    description:
      "We design for how homeowners and local customers actually search and decide, not for design-award juries.",
  },
  {
    title: "Conversion is the design brief",
    description: "Every layout decision is made to move a visitor toward a call, a form, or a quote request.",
  },
  {
    title: "Every project starts with strategy",
    description:
      "Before any design work begins, we map out the business's services, service area, and the questions customers ask first.",
  },
  {
    title: "A long-term web partner",
    description:
      "Sites are structured to be extended over time — new services, new locations, new case studies — without a rebuild.",
  },
];

export function WhyUs() {
  return (
    <>
      <SectionHeading eyebrow="Why Maple & Signal" title="Built for local business owners, not design awards" />
      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {reasons.map((reason, index) => (
          <div key={reason.title} className="flex gap-5">
            <span className="font-display text-2xl text-maple">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="font-display text-xl text-ink">{reason.title}</h3>
              <p className="mt-2 text-ink-muted">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
