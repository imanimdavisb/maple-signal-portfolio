import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "paper" | "alt" | "ink";

const toneClasses: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  alt: "bg-paper-alt text-ink",
  ink: "bg-ink text-paper",
};

export function Section({
  children,
  tone = "paper",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-20 sm:py-28 ${toneClasses[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
