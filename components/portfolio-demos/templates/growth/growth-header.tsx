"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import type { GrowthProfile } from "@/lib/portfolios/types";
import { useMenu } from "@/components/portfolio-demos/shared/use-menu";
import { cn } from "@/lib/cn";
import type { NavItem } from "../shared";

const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export function GrowthHeader({
  profile,
  items,
  primary,
}: {
  profile: GrowthProfile;
  items: NavItem[];
  primary: string[];
}) {
  const { open: menuOpen, toggle: toggleMenu, close: closeMenu, panelRef, toggleRef } = useMenu();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-500",
        menuOpen ? "bg-[var(--g-bg)]" : scrolled ? "bg-[var(--g-bg)]/92 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between gap-6 px-5 text-[12px] tracking-[0.2em] uppercase sm:px-10">
        <Link href="#intro" onClick={closeMenu} className="text-[var(--g-ink)]">
          {profile.person.name}
        </Link>
        <nav aria-label={`${profile.person.firstName}’s portfolio`} className="hidden md:block">
          <ul className="flex gap-8 text-[var(--g-soft)]">
            {items
              .filter((i) => primary.includes(i.id))
              .map((i) => (
                <li key={i.id}>
                  <a href={`#${i.id}`} className="transition hover:text-[var(--g-ink)]">
                    {i.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        <button
          ref={toggleRef}
          type="button"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="growth-index"
          className="group flex items-center gap-3 text-[var(--g-ink)]"
        >
          {menuOpen ? "Close" : "Index"}
          <span aria-hidden="true" className="relative block h-2 w-6">
            <span className={cn("absolute left-0 h-px w-full bg-current transition duration-500", menuOpen ? "top-1 rotate-45" : "top-0")} />
            <span className={cn("absolute left-0 h-px bg-[var(--g-accent)] transition-all duration-500", menuOpen ? "top-1 w-full -rotate-45" : "top-2 w-3/5 group-hover:w-full")} />
          </span>
        </button>
      </div>

      <div
        id="growth-index"
        ref={panelRef}
        hidden={!menuOpen}
        className="fixed inset-x-0 top-[var(--menu-top,4rem)] bottom-0 overflow-y-auto bg-[var(--g-bg)]"
      >
        <nav aria-label="Index" className="mx-auto grid max-w-[90rem] gap-12 px-5 pt-8 pb-16 sm:px-10 lg:grid-cols-12">
          <ol className="lg:col-span-8">
            {items.map((item, i) => (
              <li key={item.id} className="border-b border-[var(--g-line)]">
                <a
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className="group flex items-baseline gap-6 py-3 sm:py-4"
                >
                  <span className="w-10 text-[11px] tracking-[0.2em] text-[var(--g-accent)]">{roman[i]}</span>
                  <span className="font-[family-name:var(--font-demo-cormorant)] text-[2.2rem] leading-none transition duration-500 group-hover:translate-x-2 group-hover:italic sm:text-[3rem]">
                    {item.label}
                  </span>
                </a>
              </li>
            ))}
          </ol>
          <div className="flex flex-col gap-4 text-[15px] lg:col-span-4 lg:pt-4">
            <p className="text-[var(--g-soft)]">{profile.person.availability}</p>
            <a
              href={profile.resume.href}
              download={profile.resume.fileName}
              className="inline-flex items-center gap-2 self-start border-b border-[var(--g-accent)] pb-1 text-[var(--g-ink)]"
            >
              <Download className="size-4" aria-hidden="true" />
              Executive résumé (PDF)
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
