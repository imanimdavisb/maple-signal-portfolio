/**
 * Typefaces for the three portfolio demo designs. They don't preload, so the
 * main site never downloads them.
 */
import {
  Bricolage_Grotesque,
  Cormorant_Garamond,
  Fraunces,
  Hanken_Grotesk,
  Inter,
  Manrope,
} from "next/font/google";

/* Career Launch */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT"],
  variable: "--font-demo-fraunces",
  display: "swap",
  preload: false,
});
const manrope = Manrope({ subsets: ["latin"], variable: "--font-demo-manrope", display: "swap", preload: false });

/* Career Transition */
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-demo-bricolage",
  display: "swap",
  preload: false,
});
const inter = Inter({ subsets: ["latin"], variable: "--font-demo-inter", display: "swap", preload: false });

/* Professional Growth */
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-demo-cormorant",
  display: "swap",
  preload: false,
});
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-demo-hanken", display: "swap", preload: false });

export const demoFontVariables = [fraunces, manrope, bricolage, inter, cormorant, hanken]
  .map((f) => f.variable)
  .join(" ");
