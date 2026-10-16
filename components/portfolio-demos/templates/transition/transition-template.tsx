import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BadgeCheck, Download } from "lucide-react";
import type { TransitionProfile } from "@/lib/portfolios/types";
import { BuildYoursCta, DemoBar } from "@/components/portfolio-demos/shared/demo-chrome";
import { inquiryHref } from "@/lib/portfolios/links";
import { DemoLink } from "@/components/portfolio-demos/shared/demo-link";
import { Headshot } from "@/components/portfolio-demos/shared/headshot";
import { ContactIcon } from "@/components/portfolio-demos/shared/icons";
import { Reveal } from "@/components/portfolio-demos/shared/reveal";
import { splitFirstSentence, type NavItem } from "../shared";
import { CareerTimeline } from "./career-timeline";
import { ProjectAccordion } from "./project-accordion";
import { TransitionHeader } from "./transition-header";

/**
 * CAREER TRANSITION — confident, structured, story-led.
 * Bricolage Grotesque display + Inter text. Midnight navy and warm sand, with the
 * client's accent reserved for direction: arrows, numbers and the path forward.
 */

const navItems: NavItem[] = [
  { id: "summary", label: "Summary" },
  { id: "story", label: "Story" },
  { id: "skills", label: "Skills" },
  { id: "impact", label: "Impact" },
  { id: "timeline", label: "Timeline" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function TransitionTemplate({ profile }: { profile: TransitionProfile }) {
  const [then, next] = splitFirstSentence(profile.intro.headline);
  const theme = {
    "--t-navy": "#111b2b",
    "--t-navy-2": "#18243a",
    "--t-sand": "#ece5d9",
    "--t-paper": "#f7f4ee",
    "--t-soft": "#525a66",
    "--t-accent": profile.theme.accent,
    "--t-accent-ink": `color-mix(in oklab, ${profile.theme.accent} 55%, #111b2b)`,
  } as React.CSSProperties;

  return (
    <div style={theme} className="min-h-dvh bg-[var(--t-paper)] font-[family-name:var(--font-demo-inter)] text-[var(--t-navy)]">
      <DemoBar templateName="Career Transition" packageId={profile.packageId} />
      <TransitionHeader profile={profile} items={navItems} />

      <main id="main">
        {/* -------------------------------- Hero ------------------------------- */}
        <section id="intro" aria-labelledby="intro-title" className="grain relative overflow-hidden bg-[var(--t-navy)] text-white">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_70%_30%,black,transparent_70%)]"
          />
          <div className="relative mx-auto max-w-[84rem] px-5 pt-14 pb-16 sm:px-8 lg:pt-20 lg:pb-24">
            <div className="grid gap-14 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <p className="flex flex-wrap items-center gap-3 text-[13.5px] font-medium">
                  <span className="text-white/65">{profile.transition.from}</span>
                  <span aria-hidden="true" className="flex items-center text-[var(--t-accent)]">
                    <span className="h-0.5 w-10 bg-[var(--t-accent)] sm:w-16" />
                    <ArrowRight className="-ml-1 size-4" />
                  </span>
                  <span className="sr-only">to</span>
                  <span className="text-[var(--t-accent)]">{profile.transition.to}</span>
                </p>
                <h1
                  id="intro-title"
                  className="mt-7 font-[family-name:var(--font-demo-bricolage)] text-[clamp(2.75rem,7vw,6.4rem)] leading-[0.95] font-bold tracking-[-0.04em] text-balance [font-variation-settings:'wdth'_92]"
                >
                  <span className="sr-only">{profile.person.name}: </span>
                  {then} <span className="text-[var(--t-accent)]">{next}</span>
                </h1>
                <p className="mt-8 max-w-2xl text-[1.15rem] leading-relaxed text-white/75">{profile.intro.lede}</p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href="#timeline"
                    className="group inline-flex items-center gap-2 bg-[var(--t-accent)] px-6 py-4 text-[15px] font-semibold text-[var(--t-navy)] transition hover:bg-white"
                  >
                    See my career path
                    <ArrowDown className="size-4 transition group-hover:translate-y-0.5" aria-hidden="true" />
                  </a>
                  <a
                    href={profile.resume.href}
                    download={profile.resume.fileName}
                    className="inline-flex items-center gap-2 border border-white/25 px-6 py-4 text-[15px] font-semibold transition hover:border-white hover:bg-white/5"
                  >
                    <Download className="size-4" aria-hidden="true" />
                    Download résumé
                  </a>
                </div>
              </div>

              <div className="mx-auto w-full max-w-[22rem] lg:col-span-4 lg:max-w-none">
                <div className="relative mr-4 mb-4">
                  <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 border-2 border-[var(--t-accent)]" />
                  <div className="relative aspect-[4/5] overflow-hidden bg-[var(--t-navy-2)]">
                    <Headshot
                      headshot={profile.person.headshot}
                      sizes="(min-width: 1024px) 28vw, 80vw"
                      priority
                      placeholder={<TransitionPortraitPlaceholder initials={profile.person.initials} />}
                    />
                  </div>
                </div>
                <p className="mt-6 flex justify-between text-[12.5px] text-white/55">
                  <span>{profile.person.headshot ? profile.person.name : "Professional headshot placeholder"}</span>
                  <span>
                    {profile.person.location}
                    {profile.person.pronouns ? ` · ${profile.person.pronouns}` : ""}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <dl className="relative grid grid-cols-2 border-t border-white/10 bg-[var(--t-navy-2)] md:grid-cols-4">
            {profile.quickFacts.map((f, i) => (
              <div
                key={f.label}
                className={`px-5 py-6 sm:px-8 ${i % 2 ? "border-l border-white/10" : ""} ${i >= 2 ? "border-t border-white/10 md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
              >
                <dt className="text-[12.5px] text-white/60">{f.label}</dt>
                <dd className="mt-1 font-[family-name:var(--font-demo-bricolage)] text-[2rem] leading-none font-bold">{f.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ------------------------------ Summary ------------------------------ */}
        <TSection id="summary" kicker="Professional summary">
          <p className="max-w-4xl text-[1.35rem] leading-[1.55] font-light tracking-[-0.01em] sm:text-[1.7rem]">
            {profile.summary}
          </p>
        </TSection>

        {/* ------------------------------- Story ------------------------------- */}
        <section id="story" aria-labelledby="story-title" className="bg-[var(--t-sand)]">
          <div className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-5">
              <p className="text-[12.5px] font-semibold tracking-[0.14em] text-[var(--t-accent-ink)] uppercase">Career transition</p>
              <h2
                id="story-title"
                className="mt-4 font-[family-name:var(--font-demo-bricolage)] text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.98] font-bold tracking-[-0.035em]"
              >
                {profile.transition.heading}
              </h2>
              <div className="mt-10 hidden border-l-2 border-[var(--t-accent)] pl-5 lg:block">
                <p className="text-[13px] text-[var(--t-soft)]">From</p>
                <p className="font-semibold">{profile.transition.from}</p>
                <p className="mt-4 text-[13px] text-[var(--t-soft)]">To</p>
                <p className="font-semibold">{profile.transition.to}</p>
              </div>
            </div>
            <div className="space-y-6 lg:col-span-7 lg:pt-10">
              {profile.transition.statement.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className={i === 0 ? "text-[1.3rem] leading-relaxed font-medium" : "text-[17px] leading-relaxed text-[var(--t-navy)]/80"}>
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------- Transferable skills ----------------------- */}
        <TSection id="skills" kicker="Transferable skills" title="What I’ve done, and where it fits next.">
          <div role="table" aria-label="Transferable skills" className="border-t-2 border-[var(--t-navy)]">
            <div role="row" className="hidden grid-cols-12 gap-6 py-4 text-[12px] font-semibold tracking-[0.12em] text-[var(--t-soft)] uppercase md:grid">
              <span role="columnheader" className="col-span-3">Skill</span>
              <span role="columnheader" className="col-span-4">In retail operations</span>
              <span role="columnheader" className="col-span-5">In project & operations roles</span>
            </div>
            {profile.transferableSkills.map((s) => (
              <div
                key={s.skill}
                role="row"
                className="group grid gap-2 border-t border-[var(--t-navy)]/12 px-0 py-6 transition-colors duration-300 hover:bg-[var(--t-navy)] hover:text-white md:grid-cols-12 md:gap-6 md:px-4 md:-mx-4"
              >
                <span role="rowheader" className="font-[family-name:var(--font-demo-bricolage)] text-[1.35rem] font-bold md:col-span-3">
                  {s.skill}
                </span>
                <span role="cell" className="text-[15.5px] leading-relaxed text-[var(--t-soft)] group-hover:text-white/70 md:col-span-4">
                  <span className="mr-2 text-[11px] font-semibold tracking-wider uppercase md:hidden">Then</span>
                  {s.then}
                </span>
                <span role="cell" className="flex gap-3 text-[15.5px] leading-relaxed md:col-span-5">
                  <ArrowRight className="mt-1 size-4 shrink-0 text-[var(--t-accent-ink)] group-hover:text-[var(--t-accent)]" aria-hidden="true" />
                  {s.next}
                </span>
              </div>
            ))}
          </div>
        </TSection>

        {/* ------------------------------- Impact ------------------------------ */}
        <section id="impact" aria-labelledby="impact-title" className="grain bg-[var(--t-navy)] text-white">
          <div className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
            <p className="text-[12.5px] font-semibold tracking-[0.14em] text-[var(--t-accent)] uppercase">Accomplishments</p>
            <h2
              id="impact-title"
              className="mt-4 max-w-3xl font-[family-name:var(--font-demo-bricolage)] text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.98] font-bold tracking-[-0.035em]"
            >
              Results that travel with me.
            </h2>
            <ul className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
              {profile.accomplishments.map((a, i) => (
                <li key={a.label} className="bg-[var(--t-navy)]">
                  <Reveal delay={i * 0.08} className="flex h-full flex-col p-7">
                    <p className="font-[family-name:var(--font-demo-bricolage)] text-[2.6rem] leading-none font-bold tracking-[-0.03em] text-[var(--t-accent)]">
                      {a.value}
                    </p>
                    <p className="mt-4 text-[16px] font-semibold">{a.label}</p>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-white/65">{a.context}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ------------------------------ Timeline ----------------------------- */}
        <TSection id="timeline" kicker="Interactive career timeline" title="How each step built the next.">
          <p className="-mt-6 mb-12 max-w-xl text-[15.5px] text-[var(--t-soft)]">
            Select a moment to see what it involved and the skills I carried forward. Use the arrow keys to move along the
            timeline.
          </p>
          <CareerTimeline entries={profile.timeline} />
        </TSection>

        {/* ---------------------------- Previous roles -------------------------- */}
        <section id="experience" aria-labelledby="experience-title" className="bg-[var(--t-sand)]">
          <div className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="text-[12.5px] font-semibold tracking-[0.14em] text-[var(--t-accent-ink)] uppercase">Previous roles</p>
                <h2
                  id="experience-title"
                  className="mt-4 font-[family-name:var(--font-demo-bricolage)] text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[0.98] font-bold tracking-[-0.035em]"
                >
                  Nine years of operations experience.
                </h2>
              </div>
              <ol className="space-y-4 lg:col-span-8">
                {profile.roles.map((r) => (
                  <li key={r.role + r.start} className="bg-[var(--t-paper)] p-6 sm:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-[family-name:var(--font-demo-bricolage)] text-[1.5rem] leading-tight font-bold">{r.role}</h3>
                      <p className="text-[14px] font-semibold text-[var(--t-accent-ink)]">
                        {r.start} – {r.end}
                      </p>
                    </div>
                    <p className="text-[15px] text-[var(--t-soft)]">
                      {r.org}
                      {r.location ? ` · ${r.location}` : ""}
                    </p>
                    {r.summary && <p className="mt-4 text-[15.5px]">{r.summary}</p>}
                    <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-[var(--t-navy)]/80">
                      {r.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 bg-[var(--t-accent)]" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    {r.tags && (
                      <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Highlights">
                        {r.tags.map((t) => (
                          <li key={t} className="border border-[var(--t-navy)]/15 px-2.5 py-1 text-[12.5px] font-medium">
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* --------------------------- Certifications -------------------------- */}
        <TSection id="certifications" kicker="Certifications" title="Formal training for the next chapter.">
          <ul className="grid gap-4 md:grid-cols-3">
            {profile.certifications.map((c) => (
              <li key={c.name} className="flex flex-col border border-[var(--t-navy)]/12 bg-white p-6">
                <BadgeCheck
                  className={c.status === "In progress" ? "size-7 text-[var(--t-soft)]" : "size-7 text-[var(--t-accent-ink)]"}
                  aria-hidden="true"
                />
                <p className="mt-5 font-[family-name:var(--font-demo-bricolage)] text-[1.25rem] leading-snug font-bold">{c.name}</p>
                <p className="mt-2 text-[14.5px] text-[var(--t-soft)]">{c.issuer}</p>
                <p className="mt-auto pt-6 text-[13px] font-semibold">
                  {c.status === "In progress" ? `In progress · ${c.year}` : `Earned ${c.year}`}
                </p>
              </li>
            ))}
          </ul>
        </TSection>

        {/* ------------------------------ Projects ------------------------------ */}
        <TSection id="projects" kicker="Selected projects" title="Projects, start to finish.">
          <ProjectAccordion projects={profile.projects} />
        </TSection>

        {/* ------------------------------- Contact ----------------------------- */}
        <section id="contact" aria-labelledby="contact-title" className="grain bg-[var(--t-navy)] text-white">
          <div className="mx-auto grid max-w-[84rem] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
            <div className="lg:col-span-7">
              <p className="text-[12.5px] font-semibold tracking-[0.14em] text-[var(--t-accent)] uppercase">Contact</p>
              <h2
                id="contact-title"
                className="mt-4 font-[family-name:var(--font-demo-bricolage)] text-[clamp(2.6rem,6vw,5rem)] leading-[0.95] font-bold tracking-[-0.04em] text-balance"
              >
                {profile.contact.heading}
              </h2>
              <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/75">{profile.contact.blurb}</p>
            </div>
            <div className="flex flex-col justify-end lg:col-span-5">
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {profile.contact.links.map((l) => (
                  <li key={l.kind}>
                    <DemoLink
                      link={l}
                      owner={profile.person.firstName}
                      noteClassName="bg-white text-[var(--t-navy)]"
                      className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="flex min-w-0 items-center gap-4">
                        <span className="grid size-10 shrink-0 place-items-center bg-white/10 transition group-hover:bg-[var(--t-accent)] group-hover:text-[var(--t-navy)]">
                          <ContactIcon kind={l.kind} className="size-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[12.5px] text-white/55">{l.label}</span>
                          <span className="block truncate text-[16px] font-semibold">{l.display ?? l.label}</span>
                        </span>
                      </span>
                      <ArrowUpRight className="size-5 shrink-0 text-white/50 transition group-hover:text-[var(--t-accent)]" aria-hidden="true" />
                    </DemoLink>
                  </li>
                ))}
              </ul>
              <a
                href={profile.resume.href}
                download={profile.resume.fileName}
                className="mt-6 inline-flex items-center justify-center gap-2 bg-[var(--t-accent)] px-6 py-4 text-[15px] font-semibold text-[var(--t-navy)] transition hover:bg-white"
              >
                <Download className="size-4" aria-hidden="true" />
                Download résumé (sample PDF)
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--t-navy)] text-white/60">
        <div className="mx-auto flex max-w-[84rem] flex-col gap-4 border-t border-white/10 px-5 py-8 text-[13.5px] sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>
            {profile.person.name} is a fictional profile created by Maple &amp; Signal to demonstrate the Career
            Transition design.
          </p>
          <Link
            href={inquiryHref(profile.packageId)}
            className="inline-flex items-center gap-1.5 font-semibold text-white hover:text-[var(--t-accent)]"
          >
            Want a website like this? Build yours with Maple &amp; Signal
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </footer>

      <BuildYoursCta packageId={profile.packageId} />
    </div>
  );
}

function TSection({
  id,
  kicker,
  title,
  children,
}: {
  id: string;
  kicker: string;
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-[84rem] px-5 py-20 sm:px-8 lg:py-28">
      {title ? (
        <>
          <p className="text-[12.5px] font-semibold tracking-[0.14em] text-[var(--t-accent-ink)] uppercase">{kicker}</p>
          <h2
            id={`${id}-title`}
            className="mt-4 mb-14 max-w-3xl font-[family-name:var(--font-demo-bricolage)] text-[clamp(2.2rem,4.5vw,3.6rem)] leading-[0.98] font-bold tracking-[-0.035em]"
          >
            {title}
          </h2>
        </>
      ) : (
        <h2 id={`${id}-title`} className="mb-8 text-[12.5px] font-semibold tracking-[0.14em] text-[var(--t-accent-ink)] uppercase">
          {kicker}
        </h2>
      )}
      <Reveal>{children}</Reveal>
    </section>
  );
}

function TransitionPortraitPlaceholder({ initials }: { initials: string }) {
  return (
    <div className="absolute inset-0" role="img" aria-label="Headshot placeholder">
      <svg viewBox="0 0 400 500" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="tr-bg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#24324a" />
            <stop offset="1" stopColor="#141f31" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#tr-bg)" />
        <circle cx="200" cy="200" r="78" fill="#ffffff" fillOpacity="0.07" />
        <path d="M60 500c8-120 70-190 140-190s132 70 140 190Z" fill="#ffffff" fillOpacity="0.07" />
        <g stroke="var(--t-accent)" strokeOpacity="0.5">
          <line x1="24" y1="24" x2="64" y2="24" />
          <line x1="24" y1="24" x2="24" y2="64" />
          <line x1="376" y1="476" x2="336" y2="476" />
          <line x1="376" y1="476" x2="376" y2="436" />
        </g>
      </svg>
      <span className="absolute top-6 right-6 font-[family-name:var(--font-demo-bricolage)] text-5xl font-extrabold text-white/15">
        {initials}
      </span>
    </div>
  );
}
