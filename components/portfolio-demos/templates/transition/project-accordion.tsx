"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import type { Project } from "@/lib/portfolios/types";
import { cn } from "@/lib/cn";

/** Expandable project cards: summary up front, full story on demand. */
export function ProjectAccordion({ projects }: { projects: Project[] }) {
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <ul className="space-y-4">
      {projects.map((p, i) => {
        const open = openId === p.id;
        return (
          <li
            key={p.id}
            className={cn(
              "border transition-colors duration-300",
              open ? "border-[var(--t-navy)] bg-white" : "border-[var(--t-navy)]/12 bg-white/40 hover:border-[var(--t-navy)]/40",
            )}
          >
            <h3>
              <button
                type="button"
                id={`proj-btn-${p.id}`}
                aria-expanded={open}
                aria-controls={`proj-panel-${p.id}`}
                onClick={() => setOpenId(open ? null : p.id)}
                className="grid w-full grid-cols-[auto_1fr_auto] items-start gap-4 p-6 text-left sm:gap-8 sm:p-8"
              >
                <span className="font-[family-name:var(--font-demo-bricolage)] text-[2.4rem] leading-none font-bold text-[var(--t-accent-ink)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-[12.5px] font-semibold tracking-wide text-[var(--t-soft)] uppercase">{p.category}</span>
                  <span className="mt-1.5 block font-[family-name:var(--font-demo-bricolage)] text-[1.5rem] leading-tight font-bold tracking-[-0.01em] sm:text-[1.8rem]">
                    {p.title}
                  </span>
                  <span className="mt-2 block text-[15.5px] leading-relaxed font-normal text-[var(--t-soft)]">{p.summary}</span>
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "grid size-10 place-items-center border transition duration-300",
                    open
                      ? "rotate-45 border-[var(--t-navy)] bg-[var(--t-navy)] text-white"
                      : "border-[var(--t-navy)]/20",
                  )}
                >
                  <Plus className="size-4" />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={`proj-panel-${p.id}`}
                  role="region"
                  aria-labelledby={`proj-btn-${p.id}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="grid gap-8 border-t border-[var(--t-navy)]/10 p-6 sm:p-8 md:grid-cols-3 md:pl-[6.5rem]">
                    <div>
                      <h4 className="text-[12px] font-semibold tracking-[0.12em] text-[var(--t-soft)] uppercase">Challenge</h4>
                      <p className="mt-3 text-[15px] leading-relaxed">{p.problem}</p>
                      {p.role && <p className="mt-4 text-[13.5px] text-[var(--t-soft)]">My role: {p.role}</p>}
                    </div>
                    <div>
                      <h4 className="text-[12px] font-semibold tracking-[0.12em] text-[var(--t-soft)] uppercase">Approach</h4>
                      <ul className="mt-3 space-y-2.5 text-[15px] leading-relaxed">
                        {p.approach?.map((a) => (
                          <li key={a} className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 bg-[var(--t-accent)]" aria-hidden="true" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[12px] font-semibold tracking-[0.12em] text-[var(--t-soft)] uppercase">Result</h4>
                      <ul className="mt-3 space-y-2.5 text-[15px] leading-relaxed">
                        {p.outcome?.map((a) => (
                          <li key={a} className="flex gap-3">
                            <span className="mt-2 size-1.5 shrink-0 bg-[var(--t-navy)]" aria-hidden="true" />
                            {a}
                          </li>
                        ))}
                      </ul>
                      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tools and methods">
                        {p.tools.map((t) => (
                          <li key={t} className="bg-[var(--t-sand)] px-2.5 py-1 text-[12.5px]">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
