import type { ReactNode } from "react";
import { MotionProvider } from "@/components/portfolio-demos/shared/motion-provider";
import { demoFontVariables } from "./fonts";

/**
 * Portfolio demos are complete sample sites, so they skip the Maple & Signal
 * nav and footer and carry their own typefaces. Each demo has its own bar
 * linking back to the Professional Portfolios page.
 */
export default function DemosLayout({ children }: { children: ReactNode }) {
  return (
    <div className={`${demoFontVariables} flex-1`}>
      <MotionProvider>{children}</MotionProvider>
    </div>
  );
}
