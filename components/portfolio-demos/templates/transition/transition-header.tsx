"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import type { TransitionProfile } from "@/lib/portfolios/types";
import { useMenu } from "@/components/portfolio-demos/shared/use-menu";
import { useScrollSpy } from "@/components/portfolio-demos/shared/use-scroll-spy";
import { cn } from "@/lib/cn";
import type { NavItem } from "../shared";

export function TransitionHeader({ profile, items }: { profile: TransitionProfile; items: NavItem[] }) {
  const { open: menuOpen, toggle: toggleMenu, close: closeMenu, panelRef, toggleRef } = useMenu();
  const active = useScrollSpy(items.map((i) => i.id));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-white/10 text-white",
        // backdrop-filter would trap the fixed drawer inside the header, so drop it while open
        menuOpen ? "bg-[var(--t-navy)]" : "bg-[var(--t-navy)]/95 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-[4.25rem] max-w-[84rem] items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="#intro" onClick={closeMenu} className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="grid size-9 place-items-center bg-[var(--t-accent)] font-[family-name:var(--font-demo-bricolage)] text-[13px] font-extrabold text-[var(--t-navy)]"
          >
            {profile.person.initials}
          </span>
          <span className="leading-tight">
            <span className="block font-[family-name:var(--font-demo-bricolage)] text-[15px] font-bold">{profile.person.name}</span>
            <span className="block text-[12px] text-white/60">{profile.person.role}</span>
          </span>
        </Link>

        <nav aria-label={`${profile.person.firstName}’s portfolio`} className="hidden xl:block">
          <ul className="flex items-center gap-1 text-[13.5px]">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={active === item.id ? "true" : undefined}
                  className={cn(
                    "rounded-md px-3 py-2 transition",
                    active === item.id ? "bg-white/10 text-white" : "text-white/65 hover:text-white",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={profile.resume.href}
            download={profile.resume.fileName}
            className="hidden items-center gap-2 bg-[var(--t-accent)] px-4 py-2.5 text-[13.5px] font-semibold text-[var(--t-navy)] transition hover:bg-white sm:inline-flex"
          >
            <Download className="size-4" aria-hidden="true" />
            Résumé
          </a>
          <button
            ref={toggleRef}
            type="button"
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="transition-menu"
            className="grid size-10 place-items-center border border-white/20 xl:hidden"
          >
            <span className="sr-only">{menuOpen ? "Close menu" : "Open menu"}</span>
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Drawer */}
      <div hidden={!menuOpen} className="fixed inset-0 top-[var(--menu-top,4.25rem)] xl:hidden">
        <button type="button" tabIndex={-1} aria-hidden="true" className="absolute inset-0 bg-black/50" onClick={closeMenu} />
        <div
          id="transition-menu"
          ref={panelRef}
          className="absolute top-0 right-0 bottom-0 flex w-[min(24rem,88vw)] flex-col overflow-y-auto border-l border-white/10 bg-[var(--t-navy)] px-6 pt-6 pb-10"
        >
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {items.map((item, i) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    className="flex items-center gap-4 py-3 font-[family-name:var(--font-demo-bricolage)] text-[1.75rem] font-bold tracking-tight transition hover:text-[var(--t-accent)]"
                  >
                    <span className="w-6 text-[12px] font-medium text-white/40">{String(i + 1).padStart(2, "0")}</span>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={profile.resume.href}
            download={profile.resume.fileName}
            className="mt-8 inline-flex items-center justify-center gap-2 bg-[var(--t-accent)] px-5 py-4 font-semibold text-[var(--t-navy)]"
          >
            <Download className="size-4" aria-hidden="true" />
            Download résumé
          </a>
        </div>
      </div>
    </header>
  );
}
