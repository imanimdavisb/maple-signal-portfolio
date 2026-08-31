type Aspect = "video" | "mobile" | "card";

const aspectClasses: Record<Aspect, string> = {
  video: "aspect-video",
  mobile: "aspect-[9/19.5] max-w-[280px]",
  card: "aspect-[4/3]",
};

export function PlaceholderImage({
  label,
  aspect = "video",
  className = "",
}: {
  label: string;
  aspect?: Aspect;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex w-full items-center justify-center border border-dashed border-ink/20 bg-paper-alt p-6 text-center ${aspectClasses[aspect]} ${className}`}
    >
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wider text-ink-muted/70">
          Image Placeholder
        </p>
        <p className="text-sm text-ink-muted">{label}</p>
      </div>
    </div>
  );
}
