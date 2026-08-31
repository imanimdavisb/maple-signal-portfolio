import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "We learn about your business, your customers, and what your website needs to do for you.",
  },
  {
    step: "02",
    title: "Design",
    description: "A conversion-focused layout built around your services, pricing, and service area.",
  },
  {
    step: "03",
    title: "Build",
    description: "A fast, responsive, mobile-first site built on modern web foundations.",
  },
  {
    step: "04",
    title: "Launch & Support",
    description: "We launch your site and stay on as a partner as your business grows.",
  },
];

export function ProcessSteps() {
  return (
    <>
      <SectionHeading eyebrow="Our Process" title="How a project comes together" />
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <div key={step.step}>
            <p className="font-display text-3xl text-maple">{step.step}</p>
            <h3 className="mt-3 font-display text-lg text-ink">{step.title}</h3>
            <p className="mt-2 text-sm text-ink-muted">{step.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
