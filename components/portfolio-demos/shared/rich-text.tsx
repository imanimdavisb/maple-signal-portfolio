import { Fragment } from "react";

/**
 * Renders a string, turning [[placeholder text]] into a highlighted marker.
 * Used for business terms that haven't been finalized yet (see lib/portfolios/packages.ts).
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^\[\[([^\]]+)\]\]$/);
        if (match) {
          return (
            <mark key={i} className="placeholder-term" title="Placeholder: edit in lib/portfolios/packages.ts">
              {match[1]}
            </mark>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
