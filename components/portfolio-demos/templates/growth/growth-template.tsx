import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import type { GrowthProfile } from "@/lib/portfolios/types";
import { BuildYoursCta, DemoBar } from "@/components/portfolio-demos/shared/demo-chrome";
import { inquiryHref } from "@/lib/portfolios/links";
import { DemoLink } from "@/components/portfolio-demos/shared/demo-link";
import { Headshot } from "@/components/portfolio-demos/shared/headshot";
import { ContactIcon } from "@/components/portfolio-demos/shared/icons";
import { Reveal } from "@/components/portfolio-demos/shared/reveal";
import type { NavItem } from "../shared";
import { CaseStudies } from "./case-studies";
import { GrowthHeader } from "./growth-header";
import { ParallaxPortrait } from "./parallax-portrait";

/**
 * PROFESSIONAL GROWTH — luxury editorial meets modern technology.
 * Cormorant Garamond display + Hanken Grotesk text on deep charcoal,
 * warm off-white type and a single restrained metallic accent.
 */

const roman = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

export function GrowthTemplate({ profile }: { profile: GrowthProfile }) {
  const navItems: NavItem[] = [
    { id: "biography", label: "Biography" },
    { id: "expertise", label: "Expertise" },
    { id: "career", label: "Career highlights" },
    { id: "philosophy", label: "Leadership philosophy" },
    { id: "case-studies", label: "Case studies" },
    { id: "accomplishments", label: "Accomplishments" },
    { id: "credentials", label: "Credentials" },
    ...(profile.thoughtLeadership?.length ? [{ id: "speaking", label: "Speaking & writing" }] : []),
    { id: "contact", label: "Contact" },
  ];
  const num = (id: string) => roman[navItems.findIndex((n) => n.id === id)];
  const [firstName, ...lastNames] = profile.person.name.split(" ");

  const theme = {
    "--g-bg": "#121110",
    "--g-panel": "#1b1a18",
    "--g-ink": "#eee9e0",
    "--g-soft": "#a7a196",
    "--g-line": "rgb(238 233 224 / 0.14)",
    "--g-accent": profile.theme.accent,
  } as React.CSSProperties;

  return (
    <div
      style={theme}
      className="min-h-dvh bg-[var(--g-bg)] font-[family-name:var(--font-demo-hanken)] text-[var(--g-ink)] selection:bg-[var(--g-accent)] selection:text-[var(--g-bg)]"
    >
      <DemoBar templateName="Professional Growth" packageId={profile.packageId} />
      <GrowthHeader profile={profile} items={navItems} primary={["biography", "expertise", "case-studies", "contact"]} />

      <main id="main">
        {/* -------------------------------- Intro ------------------------------ */}
        <section id="intro" aria-labelledby="intro-title" className="grain relative">
          <div className="mx-auto max-w-[90rem] px-5 pt-10 pb-20 sm:px-10 lg:pt-16 lg:pb-28">
            <div className="flex flex-wrap items-center justify-between gap-4 text-[11.5px] tracking-[0.22em] uppercase">
              <p className="text-[var(--g-accent)]">{profile.intro.eyebrow}</p>
              <p className="text-[var(--g-soft)]">{profile.person.location}</p>
            </div>

            <div className="mt-10 grid gap-14 lg:mt-14 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-8">
                <h1
                  id="intro-title"
                  className="font-[family-name:var(--font-demo-cormorant)] text-[clamp(4.6rem,14vw,13.5rem)] leading-[0.8] font-medium tracking-[-0.03em]"
                >
                  {firstName}
                  <br />
                  <em className="pl-[0.6em] font-normal">{lastNames.join(" ")}</em>
                </h1>
                <div className="mt-14 grid gap-10 md:grid-cols-2 lg:mt-20">
                  <p className="font-[family-name:var(--font-demo-cormorant)] text-[clamp(1.8rem,2.8vw,2.5rem)] leading-[1.1] italic">
                    {profile.intro.headline}
                  </p>
                  <div>
                    <p className="text-[16px] leading-relaxed text-[var(--g-soft)]">{profile.intro.lede}</p>
                    <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 text-[14px]">
                      <a
                        href="#case-studies"
                        className="group inline-flex items-center gap-2 border-b border-[var(--g-accent)] pb-1.5 tracking-wide"
                      >
                        View case studies
                        <ArrowDown className="size-4 text-[var(--g-accent)] transition group-hover:translate-y-0.5" aria-hidden="true" />
                      </a>
                      <a
                        href={profile.resume.href}
                        download={profile.resume.fileName}
                        className="inline-flex items-center gap-2 border-b border-[var(--g-line)] pb-1.5 tracking-wide text-[var(--g-soft)] transition hover:border-[var(--g-ink)] hover:text-[var(--g-ink)]"
                      >
                        <Download className="size-4" aria-hidden="true" />
                        Executive résumé
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mx-auto w-full max-w-[22rem] lg:col-span-4 lg:max-w-none">
                <div className="relative aspect-[3/4] border-t border-[var(--g-accent)]">
                  <ParallaxPortrait>
                    <Headshot
                      headshot={profile.person.headshot}
                      sizes="(min-width: 1024px) 30vw, 90vw"
                      priority
                      className="object-cover grayscale-[35%]"
                      placeholder={<GrowthPortraitPlaceholder />}
                    />
                  </ParallaxPortrait>
                </div>
                <p className="mt-3 text-[11px] tracking-[0.2em] text-[var(--g-soft)] uppercase">
                  {profile.person.headshot ? profile.person.role : "Portrait placeholder"}
                </p>
              </div>
            </div>
          </div>

          <dl className="mx-auto grid max-w-[90rem] grid-cols-2 border-y border-[var(--g-line)] px-5 sm:px-10 lg:grid-cols-4">
            {profile.highlights.map((h, i) => (
              <div
                key={h.label}
                className={`flex flex-col-reverse py-8 ${i % 2 ? "pl-6 border-l border-[var(--g-line)]" : "pr-6"} ${i >= 2 ? "border-t border-[var(--g-line)] lg:border-t-0" : ""} ${i === 2 ? "lg:border-l lg:pl-6" : ""}`}
              >
                <dt className="mt-3 max-w-[12rem] text-[13px] leading-snug text-[var(--g-soft)]">{h.label}</dt>
                <dd className="font-[family-name:var(--font-demo-cormorant)] text-[clamp(3rem,6vw,4.75rem)] leading-none">{h.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ------------------------------ Biography ---------------------------- */}
        <GSection id="biography" numeral={num("biography")} title="Executive biography">
          <div className="grid gap-10 lg:grid-cols-2">
            {profile.about.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-[1.2rem] leading-relaxed first-letter:float-left first-letter:mt-1 first-letter:mr-3 first-letter:font-[family-name:var(--font-demo-cormorant)] first-letter:text-[5.2rem] first-letter:leading-[0.75] first-letter:text-[var(--g-accent)] lg:col-span-2 lg:max-w-4xl lg:text-[1.4rem]"
                    : "text-[16.5px] leading-relaxed text-[var(--g-soft)]"
                }
              >
                {p}
              </p>
            ))}
          </div>
        </GSection>

        {/* ------------------------------ Expertise ---------------------------- */}
        <GSection id="expertise" numeral={num("expertise")} title="Areas of expertise">
          <ol className="border-t border-[var(--g-line)]">
            {profile.expertise.map((e, i) => (
              <li key={e.title} className="group grid gap-3 border-b border-[var(--g-line)] py-7 md:grid-cols-12 md:items-baseline md:gap-8">
                <span className="text-[11px] tracking-[0.2em] text-[var(--g-accent)] md:col-span-1">0{i + 1}</span>
                <h3 className="font-[family-name:var(--font-demo-cormorant)] text-[2rem] leading-tight transition duration-500 group-hover:translate-x-2 group-hover:italic md:col-span-6 md:text-[2.6rem]">
                  {e.title}
                </h3>
                <p className="text-[15.5px] leading-relaxed text-[var(--g-soft)] transition duration-500 md:col-span-5 md:opacity-70 md:group-hover:opacity-100">
                  {e.description}
                </p>
              </li>
            ))}
          </ol>
        </GSection>

        {/* --------------------------- Career highlights ------------------------ */}
        <GSection id="career" numeral={num("career")} title="Career highlights">
          <ol className="space-y-0 border-t border-[var(--g-line)]">
            {profile.positions.map((p) => (
              <li key={p.org} className="grid gap-3 border-b border-[var(--g-line)] py-8 md:grid-cols-12 md:gap-8">
                <p className="text-[13px] tracking-[0.14em] text-[var(--g-soft)] md:col-span-2">
                  {p.start} — {p.end}
                </p>
                <div className="md:col-span-5">
                  <h3 className="font-[family-name:var(--font-demo-cormorant)] text-[1.75rem] leading-tight">{p.role}</h3>
                  <p className="mt-1 text-[14px] tracking-wide text-[var(--g-accent)]">{p.org}</p>
                </div>
                <ul className="space-y-2 text-[15px] leading-relaxed text-[var(--g-soft)] md:col-span-5">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </GSection>

        {/* ------------------------- Leadership philosophy ---------------------- */}
        <section id="philosophy" aria-labelledby="philosophy-title" className="bg-[var(--g-panel)]">
          <div className="mx-auto max-w-[90rem] px-5 py-24 sm:px-10 lg:py-36">
            <h2 id="philosophy-title" className="text-center text-[11.5px] tracking-[0.22em] text-[var(--g-soft)] uppercase">
              <span className="text-[var(--g-accent)]">{num("philosophy")}</span> · Leadership philosophy
            </h2>
            <Reveal>
              <blockquote className="mx-auto mt-10 max-w-5xl text-center font-[family-name:var(--font-demo-cormorant)] text-[clamp(2.6rem,6.5vw,6rem)] leading-[1] italic">
                <span className="text-[var(--g-accent)]" aria-hidden="true">
                  “
                </span>
                {profile.philosophy.quote}
                <span className="text-[var(--g-accent)]" aria-hidden="true">
                  ”
                </span>
              </blockquote>
            </Reveal>
            <div className="mt-20 grid gap-10 md:grid-cols-3 md:gap-12">
              {profile.philosophy.principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1}>
                  <div className="border-t border-[var(--g-accent)] pt-6">
                    <h3 className="font-[family-name:var(--font-demo-cormorant)] text-[1.9rem] leading-tight">{p.title}</h3>
                    <p className="mt-3 text-[15.5px] leading-relaxed text-[var(--g-soft)]">{p.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------ Case studies -------------------------- */}
        <GSection id="case-studies" numeral={num("case-studies")} title="Featured case studies">
          <CaseStudies studies={profile.caseStudies} />
        </GSection>

        {/* ---------------------------- Accomplishments ------------------------- */}
        <GSection id="accomplishments" numeral={num("accomplishments")} title="Major accomplishments">
          <ol className="grid gap-px bg-[var(--g-line)] sm:grid-cols-2">
            {profile.accomplishments.map((a, i) => (
              <li key={a} className="flex gap-6 bg-[var(--g-bg)] py-8 sm:px-8 sm:first:pl-0 sm:[&:nth-child(3)]:pl-0">
                <span className="font-[family-name:var(--font-demo-cormorant)] text-[2.4rem] leading-none text-[var(--g-accent)] italic">
                  {i + 1}
                </span>
                <p className="pt-1 text-[1.1rem] leading-relaxed">{a}</p>
              </li>
            ))}
          </ol>
        </GSection>

        {/* ------------------------------ Credentials --------------------------- */}
        <GSection id="credentials" numeral={num("credentials")} title="Professional credentials">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <h3 className="text-[11.5px] tracking-[0.22em] text-[var(--g-soft)] uppercase">Education</h3>
              <ul className="mt-5 space-y-5">
                {profile.credentials.education.map((e) => (
                  <li key={e.school}>
                    <p className="font-[family-name:var(--font-demo-cormorant)] text-[1.6rem] leading-tight">{e.degree}</p>
                    <p className="mt-1 text-[14px] text-[var(--g-soft)]">
                      {e.school} · {e.end}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11.5px] tracking-[0.22em] text-[var(--g-soft)] uppercase">Certifications</h3>
              <ul className="mt-5 space-y-5">
                {profile.certifications.map((c) => (
                  <li key={c.name}>
                    <p className="font-[family-name:var(--font-demo-cormorant)] text-[1.6rem] leading-tight">{c.name}</p>
                    <p className="mt-1 text-[14px] text-[var(--g-soft)]">
                      {c.issuer} · {c.year}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-[11.5px] tracking-[0.22em] text-[var(--g-soft)] uppercase">Board &amp; advisory</h3>
              <ul className="mt-5 space-y-5">
                {profile.credentials.boards.map((b) => (
                  <li key={b.org}>
                    <p className="font-[family-name:var(--font-demo-cormorant)] text-[1.6rem] leading-tight">{b.org}</p>
                    <p className="mt-1 text-[14px] text-[var(--g-soft)]">
                      {b.role} · {b.period}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </GSection>

        {/* --------------------------- Speaking & writing ----------------------- */}
        {profile.thoughtLeadership?.length ? (
          <GSection id="speaking" numeral={num("speaking")} title="Speaking & writing">
            <ul className="border-t border-[var(--g-line)]">
              {profile.thoughtLeadership.map((t) => (
                <li key={t.title} className="grid grid-cols-[4.5rem_1fr] gap-x-4 gap-y-1 border-b border-[var(--g-line)] py-6 md:grid-cols-12 md:items-baseline md:gap-8">
                  <span className="text-[11px] tracking-[0.2em] text-[var(--g-accent)] uppercase md:col-span-2">{t.kind}</span>
                  <p className="font-[family-name:var(--font-demo-cormorant)] text-[1.6rem] leading-tight italic md:col-span-6 md:text-[1.9rem]">
                    {t.title}
                  </p>
                  <p className="col-start-2 text-[14.5px] text-[var(--g-soft)] md:col-span-3 md:col-start-auto">{t.venue}</p>
                  <p className="col-start-2 text-[14px] text-[var(--g-soft)] md:col-span-1 md:col-start-auto md:text-right">{t.year}</p>
                </li>
              ))}
            </ul>
          </GSection>
        ) : null}

        {/* -------------------------------- Contact ----------------------------- */}
        <section id="contact" aria-labelledby="contact-title" className="grain border-t border-[var(--g-line)]">
          <div className="mx-auto grid max-w-[90rem] gap-14 px-5 py-24 sm:px-10 lg:grid-cols-12 lg:py-36">
            <div className="lg:col-span-7">
              <p className="text-[11.5px] tracking-[0.22em] text-[var(--g-soft)] uppercase">
                <span className="text-[var(--g-accent)]">{num("contact")}</span> · Contact
              </p>
              <h2
                id="contact-title"
                className="mt-6 font-[family-name:var(--font-demo-cormorant)] text-[clamp(2.8rem,6.5vw,5.75rem)] leading-[0.98] text-balance"
              >
                {profile.contact.heading}
              </h2>
              <p className="mt-6 max-w-lg text-[16.5px] leading-relaxed text-[var(--g-soft)]">{profile.contact.blurb}</p>
            </div>
            <div className="flex flex-col justify-end lg:col-span-5">
              <ul className="border-t border-[var(--g-line)]">
                {profile.contact.links.map((l) => (
                  <li key={l.kind} className="border-b border-[var(--g-line)]">
                    <DemoLink
                      link={l}
                      owner={profile.person.firstName}
                      noteClassName="bg-[var(--g-ink)] text-[var(--g-bg)]"
                      className="group flex w-full items-center justify-between gap-4 py-5 text-left"
                    >
                      <span className="flex min-w-0 items-center gap-4">
                        <ContactIcon kind={l.kind} className="size-4 shrink-0 text-[var(--g-accent)]" strokeWidth={1.5} />
                        <span className="truncate font-[family-name:var(--font-demo-cormorant)] text-[1.6rem] leading-none transition group-hover:italic">
                          {l.label}
                        </span>
                      </span>
                      <ArrowUpRight className="size-5 shrink-0 text-[var(--g-soft)] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--g-ink)]" aria-hidden="true" />
                    </DemoLink>
                  </li>
                ))}
                <li className="border-b border-[var(--g-line)]">
                  <a
                    href={profile.resume.href}
                    download={profile.resume.fileName}
                    className="group flex items-center justify-between gap-4 py-5"
                  >
                    <span className="flex items-center gap-4">
                      <Download className="size-4 text-[var(--g-accent)]" strokeWidth={1.5} aria-hidden="true" />
                      <span className="font-[family-name:var(--font-demo-cormorant)] text-[1.6rem] leading-none transition group-hover:italic">
                        Executive résumé
                      </span>
                    </span>
                    <span className="text-[12px] tracking-[0.16em] text-[var(--g-soft)] uppercase">PDF · sample</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--g-line)]">
        <div className="mx-auto flex max-w-[90rem] flex-col gap-4 px-5 py-8 text-[13px] text-[var(--g-soft)] sm:px-10 md:flex-row md:items-center md:justify-between">
          <p>
            {profile.person.name} is a fictional profile created by Maple &amp; Signal to demonstrate the Professional
            Growth design. All organizations and results are invented.
          </p>
          <Link
            href={inquiryHref(profile.packageId)}
            className="inline-flex shrink-0 items-center gap-1.5 text-[var(--g-ink)] hover:text-[var(--g-accent)]"
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

function GSection({
  id,
  numeral,
  title,
  children,
}: {
  id: string;
  numeral: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-[90rem] px-5 py-20 sm:px-10 lg:py-32">
      <div className="mb-12 flex items-end justify-between gap-6 lg:mb-16">
        <h2 id={`${id}-title`} className="font-[family-name:var(--font-demo-cormorant)] text-[clamp(2.4rem,5vw,4.25rem)] leading-none">
          {title}
        </h2>
        <span className="pb-2 text-[11.5px] tracking-[0.22em] text-[var(--g-accent)]" aria-hidden="true">
          {numeral}
        </span>
      </div>
      <Reveal>{children}</Reveal>
    </section>
  );
}

function GrowthPortraitPlaceholder() {
  return (
    <div className="absolute inset-0" role="img" aria-label="Portrait placeholder">
      <svg viewBox="0 0 300 400" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="gr-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#2e2b26" />
            <stop offset="1" stopColor="#171614" />
          </linearGradient>
          <linearGradient id="gr-fig" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#4a443b" />
            <stop offset="1" stopColor="#24211d" />
          </linearGradient>
          <radialGradient id="gr-light" cx="78%" cy="12%" r="70%">
            <stop offset="0" stopColor="var(--g-accent)" stopOpacity="0.28" />
            <stop offset="1" stopColor="var(--g-accent)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="300" height="400" fill="url(#gr-bg)" />
        <rect width="300" height="400" fill="url(#gr-light)" />
        <circle cx="150" cy="150" r="54" fill="url(#gr-fig)" />
        <path d="M44 400c6-100 50-170 106-170s100 70 106 170Z" fill="url(#gr-fig)" />
        <g stroke="var(--g-accent)" strokeOpacity="0.35" strokeWidth="0.75" fill="none">
          <line x1="0" y1="330" x2="300" y2="330" />
          <line x1="236" y1="0" x2="236" y2="400" />
        </g>
      </svg>
    </div>
  );
}
