"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { CaseStudy } from "@/lib/portfolios/types";
import { cn } from "@/lib/cn";

/** Case study reader: an index of studies beside a detail panel (stacked on small screens). */
export function CaseStudies({ studies }: { studies: CaseStudy[] }) {
  const [index, setIndex] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const study = studies[index];

  const onKeyDown = (e: React.KeyboardEvent) => {
    const keys: Record<string, number> = {
      ArrowDown: index + 1,
      ArrowRight: index + 1,
      ArrowUp: index - 1,
      ArrowLeft: index - 1,
    };
    if (!(e.key in keys)) return;
    e.preventDefault();
    const next = (keys[e.key] + studies.length) % studies.length;
    setIndex(next);
    listRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]")[next]?.focus();
  };

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
      <div
        ref={listRef}
        role="tablist"
        aria-orientation="vertical"
        aria-label="Case studies"
        onKeyDown={onKeyDown}
        className="border-t border-[var(--g-line)] lg:col-span-5"
      >
        {studies.map((s, i) => {
          const selected = i === index;
          return (
            <button
              key={s.id}
              id={`cs-tab-${s.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              aria-controls="cs-panel"
              tabIndex={selected ? 0 : -1}
              onClick={() => setIndex(i)}
              className="group relative grid w-full grid-cols-[3rem_1fr] gap-2 border-b border-[var(--g-line)] py-6 text-left"
            >
              <span
                aria-hidden="true"
                className={cn(
                  "absolute bottom-[-1px] left-0 h-px bg-[var(--g-accent)] transition-all duration-700",
                  selected ? "w-full" : "w-0",
                )}
              />
              <span className="pt-1.5 text-[11px] tracking-[0.2em] text-[var(--g-accent)]">0{i + 1}</span>
              <span>
                <span
                  className={cn(
                    "block font-[family-name:var(--font-demo-cormorant)] text-[1.7rem] leading-[1.1] transition duration-500 sm:text-[2rem]",
                    selected ? "text-[var(--g-ink)] italic" : "text-[var(--g-soft)] group-hover:text-[var(--g-ink)]",
                  )}
                >
                  {s.title}
                </span>
                <span className="mt-2 block text-[12px] tracking-[0.16em] text-[var(--g-soft)] uppercase">
                  {s.org} · {s.year}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <div id="cs-panel" role="tabpanel" aria-labelledby={`cs-tab-${study.id}`} tabIndex={0} className="lg:col-span-7">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={study.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="bg-[var(--g-panel)] p-7 sm:p-12"
          >
            <p className="text-[11px] tracking-[0.2em] text-[var(--g-accent)] uppercase">
              {study.sector} · {study.org}
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-demo-cormorant)] text-[2.2rem] leading-[1.05] sm:text-[2.8rem]">
              {study.title}
            </h3>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-y border-[var(--g-line)] py-6">
              {study.metrics.map((m) => (
                <div key={m.label} className="flex flex-col-reverse">
                  <dt className="mt-2 text-[13px] text-[var(--g-soft)]">{m.label}</dt>
                  <dd className="font-[family-name:var(--font-demo-cormorant)] text-[2.6rem] leading-none text-[var(--g-accent)]">{m.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 space-y-8 text-[15.5px] leading-relaxed">
              <div>
                <h4 className="text-[11px] tracking-[0.2em] text-[var(--g-soft)] uppercase">Context</h4>
                <p className="mt-3 text-[var(--g-ink)]/90">{study.challenge}</p>
              </div>
              <div>
                <h4 className="text-[11px] tracking-[0.2em] text-[var(--g-soft)] uppercase">Approach</h4>
                <ul className="mt-3 space-y-2.5">
                  {study.approach.map((a) => (
                    <li key={a} className="flex gap-4">
                      <span className="mt-3 h-px w-4 shrink-0 bg-[var(--g-accent)]" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[11px] tracking-[0.2em] text-[var(--g-soft)] uppercase">Outcome</h4>
                <ul className="mt-3 space-y-2.5">
                  {study.outcome.map((a) => (
                    <li key={a} className="flex gap-4">
                      <span className="mt-3 h-px w-4 shrink-0 bg-[var(--g-accent)]" aria-hidden="true" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>
    </div>
  );
}
