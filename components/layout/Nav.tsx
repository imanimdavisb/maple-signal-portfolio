"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, PRIMARY_CTA, SITE_NAME } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";

export function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isCurrent = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-maple focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
        <Link href="/" className="font-display text-xl text-ink">
          {SITE_NAME}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-5 lg:flex xl:gap-7">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.href) ? "page" : undefined}
              className="text-sm font-medium whitespace-nowrap text-ink-muted transition-colors hover:text-ink aria-[current=page]:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <span className="hidden xl:block">
            <Button href={PRIMARY_CTA.href} className="text-sm whitespace-nowrap">
              {PRIMARY_CTA.label}
            </Button>
          </span>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line bg-paper px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={isCurrent(link.href) ? "page" : undefined}
                className="text-base font-medium text-ink aria-[current=page]:text-maple"
              >
                {link.label}
              </Link>
            ))}
            <Button
              href={PRIMARY_CTA.href}
              onClick={() => setOpen(false)}
              className="mt-2 w-full"
            >
              {PRIMARY_CTA.label}
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M2 5h14M2 9h14M2 13h14" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4l10 10M14 4L4 14" strokeLinecap="round" />
    </svg>
  );
}
