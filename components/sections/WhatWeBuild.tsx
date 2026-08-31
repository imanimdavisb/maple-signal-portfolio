import { SectionHeading } from "@/components/ui/SectionHeading";

const items = [
  {
    title: "Lead-Generation Websites",
    description:
      "Sites structured around one goal: turning visitors into inquiries, calls, and estimate requests.",
  },
  {
    title: "Local SEO Foundations",
    description:
      "Service-area pages, structured content, and technical fundamentals built in from day one.",
  },
  {
    title: "Conversion-Focused Design",
    description:
      "Clear calls to action, short forms, and trust signals placed exactly where visitors decide.",
  },
  {
    title: "Review & Reputation Integration",
    description: "Live review feeds and social proof woven into the pages that matter most.",
  },
  {
    title: "Mobile-First Builds",
    description: "Designed for the phone screen first, since that's where most local searches happen.",
  },
  {
    title: "Ongoing Support",
    description:
      "Sites built to be updated and extended as a business grows, not a one-and-done handoff.",
  },
];

export function WhatWeBuild() {
  return (
    <>
      <SectionHeading
        eyebrow="What We Build"
        title="Websites built to bring in customers, not just look nice"
      />
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className="font-display text-xl text-ink">{item.title}</h3>
            <p className="mt-2 text-ink-muted">{item.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
