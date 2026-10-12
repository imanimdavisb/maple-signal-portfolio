/** Small text helpers shared by the portfolio templates. */

/** Splits a headline so the last `count` words can be styled for emphasis. */
export function splitLastWords(text: string, count = 2): [string, string] {
  const words = text.trim().split(/\s+/);
  if (words.length <= count) return ["", text];
  return [words.slice(0, -count).join(" ") + " ", words.slice(-count).join(" ")];
}

/** Splits text at the first sentence boundary, for lead-in styling. */
export function splitFirstSentence(text: string): [string, string] {
  const m = text.match(/^([\s\S]+?[.!?])\s+([\s\S]*)$/);
  return m ? [m[1], m[2]] : [text, ""];
}

/** Template-specific section ids used by navigation and scroll spy. */
export type NavItem = { id: string; label: string };
