import Image from "next/image";
import type { Headshot as HeadshotData } from "@/lib/portfolios/types";

/**
 * Shows the client's photo when one is set in their data file,
 * otherwise the template's designed placeholder.
 * Put photos in /public/headshots and reference them as "/headshots/name.jpg".
 */
export function Headshot({
  headshot,
  sizes,
  className,
  placeholder,
  priority,
}: {
  headshot: HeadshotData;
  sizes: string;
  className?: string;
  placeholder: React.ReactNode;
  priority?: boolean;
}) {
  if (!headshot) return <>{placeholder}</>;
  return (
    <Image
      src={headshot.src}
      alt={headshot.alt}
      fill
      sizes={sizes}
      priority={priority}
      className={className ?? "object-cover"}
    />
  );
}
