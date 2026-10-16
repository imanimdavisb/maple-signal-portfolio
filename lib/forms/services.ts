/** Options for "What can we help with?" on the contact form. */
export const SERVICE_OPTIONS = [
  { value: "business-website", label: "A business website" },
  { value: "website-audit", label: "A website audit or improvements" },
  { value: "professional-portfolio", label: "A professional portfolio website" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];

export function isServiceValue(value: string): value is ServiceValue {
  return SERVICE_OPTIONS.some((option) => option.value === value);
}
