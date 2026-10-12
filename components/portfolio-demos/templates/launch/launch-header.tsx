"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import type { LaunchProfile } from "@/lib/portfolios/types";
import { useMenu } from "@/components/portfolio-demos/shared/use-menu";
import { useScrollSpy } from "@/components/portfolio-demos/shared/use-scroll-spy";
import { cn } from "@/lib/cn";
import type { NavItem } from "../shared";

export function LaunchHeader({ profile, items }: { profile: LaunchProfile; items: NavItem[] }) {
  const { open: menuOpen, toggle: toggleMenu, close: closeMenu, panelRef, toggleRef } = useMenu();
  const active = useScrollSpy(items.map((i) => i.id));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-[var(--l-line)]",
        // backdrop-filter would trap the fixed menu panel inside the header, so drop it while open
        menuOpen ? "bg-[var(--l-bg)]" : "bg-[var(--l-bg)]/90 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[80rem] items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="#intro"
          onClick={closeMenu}
          className="flex items-center gap-2 font-[family-name:var(--font-demo-fraunces)] text-[1.35rem] italic"
        >
          <span className="size-2 rounded-full bg-[var(--l-accent)]" aria-hidden="true" />
          {profile.person.name}
        </Link>

        <nav aria-label={`${profile.person.firstName}’s portfolio`} className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[14px]">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "relative py-1 transition-colors",
                    active === item.id ? "text-[var(--l-ink)]" : "text-[var(--l-soft)] hover:text-[var(--l-ink)]",
                  )}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute -bottom-1.5 left-1/2 size-1 -translate-x-1/2 rounded-full bg-[var(--l-accent)] transition",
                      active === item.id ? "scale-100" : "scale-0",
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume.href}
            download={profile.resume.fileName}
            className="hidden items-center gap-2 rounded-full border border-[var(--l-ink)] px-4 py-2 text-[13.5px] font-semibold transition hover:bg-[var(--l-ink)] hover:text-[var(--l-bg)] sm:inline-flex"
          >
            <Download className="size-3.5" aria-hidden="true" />
            Résumé
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="launch-menu"
            className="rounded-full px-3 py-2 text-[14px] font-semibold lg:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div
        id="launch-menu"
        ref={panelRef}
        hidden={!menuOpen}
        className="fixed inset-x-0 top-[var(--menu-top,4rem)] bottom-0 overflow-y-auto bg-[var(--l-bg)] lg:hidden"
      >
        <nav aria-label="Mobile" className="flex min-h-full flex-col px-5 pt-8 pb-10 sm:px-8">
          <ul>
            {items.map((item, i) => (
              <li key={item.id} className="border-b border-[var(--l-line)]">
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className="flex items-baseline justify-between py-4 font-[family-name:var(--font-demo-fraunces)] text-4xl tracking-tight"
                >
                  {item.label}
                  <span className="font-[family-name:var(--font-demo-manrope)] text-xs text-[var(--l-soft)]">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.resume.href}
            download={profile.resume.fileName}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--l-accent)] px-6 py-4 font-semibold text-white"
          >
            <Download className="size-4" aria-hidden="true" />
            Download résumé
          </a>
        </nav>
      </div>
    </header>
  );
}
