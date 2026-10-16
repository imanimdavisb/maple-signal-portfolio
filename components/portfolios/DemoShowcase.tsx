import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { BrowserFrame } from "@/components/project/BrowserFrame";
import { portfolios, templateInfo } from "@/lib/portfolios";
import { packages } from "@/lib/portfolios/packages";
import { inquiryHref } from "@/lib/portfolios/links";

/** One card per portfolio demo, in the same browser-frame style as Our Work. */
export function DemoShowcase() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      {portfolios.map((profile) => {
        const info = templateInfo[profile.template];
        const pkg = packages.find((p) => p.id === profile.packageId);
        return (
          <article
            key={profile.slug}
            className="flex flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-shadow hover:shadow-lg"
          >
            <Link href={`/portfolios/${profile.slug}`} aria-label={`View the ${info.name} demo`}>
              <BrowserFrame>
                <Image
                  src={`/portfolios/${profile.slug}-card.jpg`}
                  alt={`${info.name} demo: ${profile.person.name}'s portfolio homepage`}
                  width={1200}
                  height={750}
                  className="aspect-[8/5] w-full object-cover object-top"
                />
              </BrowserFrame>
            </Link>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex flex-wrap items-center gap-2">
                <Tag tone="signal">{info.name}</Tag>
                {pkg && <Tag tone="maple">${pkg.price}</Tag>}
              </div>
              <div>
                <h3 className="font-display text-2xl text-ink">{profile.person.name}</h3>
                <p className="mt-1 text-sm text-ink-muted">
                  {profile.person.role} · <span className="italic">Fictional demo</span>
                </p>
              </div>
              <p className="text-ink-muted">
                {info.audience}. {info.mood}.
              </p>
              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                <Button href={`/portfolios/${profile.slug}`}>View Demo</Button>
                <Button href={inquiryHref(profile.packageId)} variant="secondary">
                  Choose {info.name}
                </Button>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
