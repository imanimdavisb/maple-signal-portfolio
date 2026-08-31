import Image from "next/image";
import type { BeforeAfterPair } from "@/lib/projects/types";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function BeforeAfter({ pairs }: { pairs: BeforeAfterPair[] }) {
  return (
    <div className="grid gap-10">
      {pairs.map((pair, index) => (
        <div key={index} className="grid gap-6 sm:grid-cols-2">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-ink-muted">Before</p>
            {pair.before.src ? (
              <Image src={pair.before.src} alt={pair.before.alt} width={600} height={400} className="rounded-xl" />
            ) : (
              <PlaceholderImage label={pair.before.alt} aspect="card" />
            )}
          </div>
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-maple">After</p>
            {pair.after.src ? (
              <Image src={pair.after.src} alt={pair.after.alt} width={600} height={400} className="rounded-xl" />
            ) : (
              <PlaceholderImage label={pair.after.alt} aspect="card" />
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
