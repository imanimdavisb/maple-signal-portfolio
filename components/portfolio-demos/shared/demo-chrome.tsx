"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowUpRight, X } from "lucide-react";
import type { PackageId } from "@/lib/portfolios/packages";
import { inquiryHref } from "@/lib/portfolios/links";

/** Thin studio bar above every demo: back to Maple & Signal, demo label, build yours. */
export function DemoBar({ templateName, packageId }: { templateName: string; packageId: PackageId }) {
  return (
    <div className="relative z-50 bg-ink font-sans text-[12.5px] text-paper">
      <div className="mx-auto flex h-10 max-w-[88rem] items-center justify-between gap-3 px-4 sm:px-6">
        <Link
          href="/professional-portfolios#demos"
          className="group inline-flex items-center gap-1.5 rounded-sm text-paper/85 transition hover:text-paper"
        >
          <ArrowLeft className="size-3.5 transition group-hover:-translate-x-0.5" aria-hidden="true" />
          <span>
            Back to <span className="font-medium text-paper">Maple &amp; Signal</span>
          </span>
        </Link>
        <p className="hidden text-paper/70 md:block">
          Fictional demonstration · <span className="text-paper">{templateName}</span> template
        </p>
        <Link
          href={inquiryHref(packageId)}
          className="inline-flex items-center gap-1 rounded-sm font-medium text-paper underline decoration-maple decoration-2 underline-offset-4 transition hover:text-maple"
        >
          Build yours
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

/**
 * Persistent, dismissible call to action that appears once the visitor
 * has scrolled past the first screen of a demo.
 */
export function BuildYoursCta({ packageId }: { packageId: PackageId }) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <aside
      aria-label="Build a site like this"
      className={`fixed inset-x-3 bottom-3 z-40 font-sans transition duration-500 ease-out sm:inset-x-auto sm:right-5 sm:bottom-5 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex items-center justify-between gap-2 rounded-full border border-white/10 bg-ink/95 py-1.5 pr-1.5 pl-4 text-paper shadow-[0_18px_50px_-12px_rgb(0_0_0/0.5)] backdrop-blur">
        <span className="size-1.5 shrink-0 rounded-full bg-maple" aria-hidden="true" />
        <p className="hidden min-w-0 flex-1 truncate text-[13px] text-paper/80 sm:block">Want a website like this?</p>
        <Link
          href={inquiryHref(packageId)}
          tabIndex={visible ? 0 : -1}
          className="inline-flex min-w-0 items-center gap-1 rounded-full bg-paper px-3.5 py-2 text-[13px] font-medium text-ink transition hover:bg-maple hover:text-white"
        >
          Build yours with Maple &amp; Signal
          <ArrowUpRight className="size-3.5" aria-hidden="true" />
        </Link>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          tabIndex={visible ? 0 : -1}
          className="grid size-8 shrink-0 place-items-center rounded-full text-paper/60 transition hover:bg-white/10 hover:text-paper"
          aria-label="Dismiss"
        >
          <X className="size-4" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
