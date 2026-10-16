import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CONTACT_PHONE } from "@/lib/site-config";

/** Who visitors will work with, in Imani's own words. */
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
            I started Maple &amp; Signal because talented people and small-business owners
            deserve to be seen. Many have the skills, passion and experience to succeed but
            struggle to communicate their value online.
          </p>
          <p>
            I wanted to make professional websites and portfolios more accessible, helping
            people tell their stories, build confidence and connect with opportunities that can
            improve their lives.
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
