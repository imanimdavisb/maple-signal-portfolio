"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { ContactLink } from "@/lib/portfolios/types";
import { cn } from "@/lib/cn";

type DemoLinkProps = {
  link: ContactLink;
  /** Person's first name, used in the placeholder note. */
  owner: string;
  className?: string;
  noteClassName?: string;
  children: React.ReactNode;
};

const destination: Record<ContactLink["kind"], string> = {
  linkedin: "LinkedIn profile",
  email: "email address",
  github: "GitHub profile",
  website: "website",
  phone: "phone number",
  calendar: "booking page",
};

/**
 * A contact link that is honest in demo mode.
 * With a real `href` it is a normal link. With `href: null` (fictional profiles)
 * it explains that the link is a placeholder instead of pointing somewhere fake.
 */
export function DemoLink({ link, owner, className, noteClassName, children }: DemoLinkProps) {
  const [open, setOpen] = useState(false);
  const noteId = useId();
  const wrapper = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!wrapper.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  if (link.href) {
    const external = /^https?:/.test(link.href);
    return (
      <a
        href={link.href}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <span ref={wrapper} className="relative inline-flex">
      <button
        type="button"
        className={className}
        aria-expanded={open}
        aria-controls={noteId}
        onClick={() => setOpen((v) => !v)}
      >
        {children}
      </button>
      <span
        id={noteId}
        role="status"
        className={cn(
          "absolute left-0 top-full z-30 mt-2 w-64 rounded-md px-3.5 py-3 text-left text-[13px] leading-snug shadow-lg transition duration-200",
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0",
          noteClassName ?? "bg-ink text-paper",
        )}
      >
        {open && (
          <>
            <strong className="block font-semibold">Demo placeholder</strong>
            This is a fictional profile. On a real portfolio, this opens {owner}’s{" "}
            {destination[link.kind]}.
          </>
        )}
      </span>
    </span>
  );
}
