"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Shared behavior for every mobile menu: Escape to close, body scroll lock,
 * focus moves into the panel on open and back to the toggle on close.
 * Each site styles its own menu around this.
 */
export function useMenu() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((v) => !v), []);

  useEffect(() => {
    if (!open) return;
    const toggleEl = toggleRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    // Menu panels open just below their header. The header isn't always at the
    // top of the viewport (the demo bar sits above it until you scroll), so
    // measure it and hand the position to the panel as --menu-top.
    const header = panelRef.current?.closest("header");
    header?.style.setProperty("--menu-top", `${header.getBoundingClientRect().bottom}px`);
    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus({ preventScroll: true });

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && panelRef.current) {
        const items = [
          ...(toggleEl ? [toggleEl] : []),
          ...panelRef.current.querySelectorAll<HTMLElement>("a, button"),
        ];
        if (!items.length) return;
        const firstEl = items[0];
        const lastEl = items[items.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      toggleEl?.focus();
    };
  }, [open]);

  return { open, setOpen, close, toggle, panelRef, toggleRef };
}
