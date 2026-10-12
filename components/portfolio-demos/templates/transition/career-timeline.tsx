"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Briefcase, Flag, GraduationCap } from "lucide-react";
import type { TimelineEntry } from "@/lib/portfolios/types";
import { cn } from "@/lib/cn";

const kindMeta = {
  role: { label: "Role", Icon: Briefcase },
  learning: { label: "Learning", Icon: GraduationCap },
  milestone: { label: "Milestone", Icon: Flag },
} as const;

/** Interactive career timeline: an accessible tab list of moments with a detail panel. */
export function CareerTimeline({ entries }: { entries: TimelineEntry[] }) {
  const [index, setIndex] = useState(Math.max(0, entries.length - 4));
  const listRef = useRef<HTMLDivElement>(null);
  const entry = entries[index];
  const { Icon } = kindMeta[entry.kind];

  // Start with the selected moment visible when the track scrolls sideways on small screens.
  useEffect(() => {
    const list = listRef.current;
    const tab = list?.querySelector<HTMLElement>("[aria-selected=true]");
    if (list && tab && list.scrollWidth > list.clientWidth) list.scrollLeft = tab.offsetLeft - 16;
  }, []);

  const select = (i: number, focus = false) => {
    const next = (i + entries.length) % entries.length;
    setIndex(next);
    const tab = listRef.current?.querySelectorAll<HTMLButtonElement>("[role=tab]")[next];
    tab?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
    if (focus) tab?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    const map: Record<string, number> = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: entries.length - 1 };
    if (e.key in map) {
      e.preventDefault();
      select(map[e.key], true);
    }
  };

  return (
    <div>
      <div className="relative">
        <div
          ref={listRef}
          role="tablist"
          aria-label="Career timeline"
          onKeyDown={onKeyDown}
          className="flex snap-x snap-mandatory gap-0 overflow-x-auto pb-2 [scrollbar-width:none] lg:overflow-visible"
        >
          {entries.map((e, i) => {
            const selected = i === index;
            const passed = i <= index;
            return (
              <button
                key={e.id}
                id={`tl-tab-${e.id}`}
                role="tab"
                type="button"
                aria-selected={selected}
                aria-controls="tl-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => select(i)}
                className="group relative flex min-w-[8.5rem] flex-1 snap-start flex-col justify-start pt-9 pr-3 text-left"
              >
                {/* track */}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-[0.9rem] right-0 left-0 h-0.5 transition-colors duration-500",
                    passed ? "bg-[var(--t-accent)]" : "bg-[var(--t-navy)]/15",
                    i === entries.length - 1 && "right-auto w-6",
                  )}
                />
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-0 left-0 grid size-8 place-items-center rounded-full border-2 transition duration-300",
                    selected
                      ? "scale-110 border-[var(--t-navy)] bg-[var(--t-navy)] text-[var(--t-accent)]"
                      : passed
                        ? "border-[var(--t-accent)] bg-[var(--t-paper)] text-[var(--t-navy)] group-hover:bg-[var(--t-accent)]"
                        : "border-[var(--t-navy)]/20 bg-[var(--t-paper)] text-[var(--t-navy)]/50 group-hover:border-[var(--t-navy)]",
                  )}
                >
                  {(() => {
                    const K = kindMeta[e.kind].Icon;
                    return <K className="size-3.5" />;
                  })()}
                </span>
                <span
                  className={cn(
                    "mt-3 block font-[family-name:var(--font-demo-bricolage)] text-[1.35rem] leading-none font-bold transition",
                    selected ? "text-[var(--t-navy)]" : "text-[var(--t-navy)]/45 group-hover:text-[var(--t-navy)]",
                  )}
                >
                  {e.period}
                </span>
                <span
                  className={cn(
                    "mt-1.5 block text-[13px] leading-snug transition",
                    selected ? "text-[var(--t-navy)]" : "text-[var(--t-soft)]",
                  )}
                >
                  {e.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div
        id="tl-panel"
        role="tabpanel"
        aria-labelledby={`tl-tab-${entry.id}`}
        className="mt-10 grid overflow-hidden bg-[var(--t-navy)] text-white lg:grid-cols-12"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 p-7 sm:p-10 lg:col-span-12 lg:grid-cols-12"
          >
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 bg-white/10 px-2.5 py-1 text-[12px] font-semibold tracking-wide uppercase">
                <Icon className="size-3.5 text-[var(--t-accent)]" aria-hidden="true" />
                {kindMeta[entry.kind].label} · {entry.period}
              </p>
              <h3 className="mt-5 font-[family-name:var(--font-demo-bricolage)] text-[2rem] leading-tight font-bold tracking-[-0.02em] sm:text-[2.5rem]">
                {entry.title}
              </h3>
              <p className="mt-1 text-[15px] text-white/65">{entry.org}</p>
              <p className="mt-6 max-w-xl text-[16.5px] leading-relaxed text-white/85">{entry.detail}</p>
            </div>
            <div className="lg:col-span-5 lg:border-l lg:border-white/10 lg:pl-8">
              <h4 className="text-[12px] font-semibold tracking-[0.12em] text-white/55 uppercase">Carried forward</h4>
              <ul className="mt-4 flex flex-wrap gap-2">
                {entry.carriedForward.map((s) => (
                  <li key={s} className="border border-[var(--t-accent)]/50 px-3 py-1.5 text-[14px] text-[var(--t-accent)]">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-[13px] text-[var(--t-soft)]" aria-live="polite">
          {index + 1} of {entries.length}
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => select(index - 1)}
            className="grid size-11 place-items-center border border-[var(--t-navy)]/20 transition hover:bg-[var(--t-navy)] hover:text-white"
            aria-label="Previous moment"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => select(index + 1)}
            className="grid size-11 place-items-center border border-[var(--t-navy)]/20 transition hover:bg-[var(--t-navy)] hover:text-white"
            aria-label="Next moment"
          >
            <ArrowRight className="size-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
