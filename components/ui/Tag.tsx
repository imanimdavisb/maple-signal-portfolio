import type { ReactNode } from "react";

type Tone = "neutral" | "maple" | "signal";

const toneClasses: Record<Tone, string> = {
  neutral: "bg-ink/5 text-ink-muted",
  maple: "bg-maple/10 text-maple-dark",
  signal: "bg-signal-light text-signal",
};

export function Tag({ children, tone = "neutral" }: { children: ReactNode; tone?: Tone }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${toneClasses[tone]}`}
    >
      {children}
    </span>
  );
}
