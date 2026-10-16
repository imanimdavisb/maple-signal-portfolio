import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CONTACT_PHONE } from "@/lib/site-config";

/**
 * Who visitors will work with. Text in the highlighted marker is a placeholder
 * for Imani to replace with her own background.
 */
export function MeetFounder() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[2fr_3fr]">
      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-line bg-paper-alt lg:max-w-none">
        <Image
          src="/team/imani.jpg"
          alt="Imani, founder of Maple & Signal, in graduation cap and gown holding a diploma"
          width={800}
          height={1000}
          className="aspect-[4/5] w-full object-cover"
        />
      </div>
      <div className="max-w-xl">
        <p className="mb-3 text-sm font-medium uppercase tracking-wider text-maple">
          Meet the Founder
        </p>
        <h2 className="font-display text-3xl text-ink sm:text-4xl">Hi, I&apos;m Imani.</h2>
        <div className="mt-6 space-y-4 text-lg text-ink-muted">
          <p>
            I started Maple &amp; Signal to give small businesses and professionals a website
            that actually works for them: clear, fast, and built around the next step you want
            visitors to take.
          </p>
          <p>
            <mark className="placeholder-term" title="Placeholder: replace in components/sections/MeetFounder.tsx">
              A sentence or two about your background and why you do this work.
            </mark>
          </p>
          <p>
            When you reach out, you talk to me. I&apos;ll listen to what you need, tell you
            honestly what I&apos;d recommend, and keep you updated from first draft to launch.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/contact">Start a Conversation</Button>
          <a
            href={CONTACT_PHONE.href}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-maple hover:text-maple"
          >
            Call {CONTACT_PHONE.label}
          </a>
        </div>
      </div>
    </div>
  );
}
