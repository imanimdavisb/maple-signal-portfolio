import Link from "next/link";
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type Variant = "primary" | "secondary" | "secondaryOnDark" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary: "bg-maple text-white hover:bg-maple-dark",
  secondary: "bg-transparent text-ink border border-ink/20 hover:border-maple hover:text-maple",
  secondaryOnDark:
    "bg-transparent text-paper border border-paper/30 hover:border-paper hover:text-maple",
  ghost: "bg-transparent text-ink hover:text-maple",
};

export function buttonClasses(variant: Variant = "primary", className = "") {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maple focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:opacity-50 disabled:pointer-events-none";
  return `${base} ${variantClasses[variant]} ${className}`;
}

interface ButtonProps {
  href: string;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function Button({ href, variant = "primary", className = "", children, onClick }: ButtonProps) {
  return (
    <Link href={href} onClick={onClick} className={buttonClasses(variant, className)}>
      {children}
    </Link>
  );
}

export function ButtonExternal({
  href,
  variant = "primary",
  className = "",
  children,
}: Omit<ButtonProps, "onClick">) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={buttonClasses(variant, className)}>
      {children}
    </a>
  );
}

interface SubmitButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

export function SubmitButton({
  variant = "primary",
  className = "",
  children,
  ...rest
}: SubmitButtonProps) {
  return (
    <button type="submit" className={buttonClasses(variant, className)} {...rest}>
      {children}
    </button>
  );
}
