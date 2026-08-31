export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-maple">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl text-ink sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-ink-muted">{description}</p>}
    </div>
  );
}
