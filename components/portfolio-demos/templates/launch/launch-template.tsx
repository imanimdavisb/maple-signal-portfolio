import Link from "next/link";
import { ArrowDown, ArrowUpRight, Download } from "lucide-react";
import type { LaunchProfile } from "@/lib/portfolios/types";
import { BuildYoursCta, DemoBar } from "@/components/portfolio-demos/shared/demo-chrome";
import { inquiryHref } from "@/lib/portfolios/links";
import { DemoLink } from "@/components/portfolio-demos/shared/demo-link";
import { Headshot } from "@/components/portfolio-demos/shared/headshot";
import { ContactIcon } from "@/components/portfolio-demos/shared/icons";
import { Reveal } from "@/components/portfolio-demos/shared/reveal";
import { splitFirstSentence, splitLastWords, type NavItem } from "../shared";
import { LaunchHeader } from "./launch-header";
import { ProjectGallery } from "./project-gallery";

/**
 * CAREER LAUNCH — fresh, warm, editorial.
 * Fraunces display + Manrope text on warm ivory, with the client's accent as a quiet green thread.
 */

const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function LaunchTemplate({ profile }: { profile: LaunchProfile }) {
  const [lead, emphasis] = splitLastWords(profile.intro.headline, 2);
  const theme = {
    "--l-bg": "#f6f3ec",
    "--l-ink": "#1d1f1c",
    "--l-soft": "#585b53",
    "--l-line": "rgb(29 31 28 / 0.12)",
    "--l-accent": profile.theme.accent,
    "--l-accent-soft": `color-mix(in oklab, ${profile.theme.accent} 16%, #f6f3ec)`,
  } as React.CSSProperties;

  return (
    <div style={theme} className="min-h-dvh bg-[var(--l-bg)] font-[family-name:var(--font-demo-manrope)] text-[var(--l-ink)]">
      <DemoBar templateName="Career Launch" packageId={profile.packageId} />
      <LaunchHeader profile={profile} items={navItems} />

      <main id="main">
        {/* ------------------------------- Intro ------------------------------- */}
        <section id="intro" aria-labelledby="intro-title" className="mx-auto max-w-[80rem] px-5 pt-14 pb-20 sm:px-8 lg:pt-20 lg:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="inline-flex items-center gap-2 rounded-full bg-[var(--l-accent-soft)] px-3.5 py-1.5 text-[13px] font-semibold text-[var(--l-accent)]">
                <span className="size-1.5 rounded-full bg-[var(--l-accent)]" aria-hidden="true" />
                {profile.intro.eyebrow}
              </p>
              <h1
                id="intro-title"
                className="mt-7 font-[family-name:var(--font-demo-fraunces)] text-[clamp(2.7rem,6.4vw,5.6rem)] leading-[0.98] font-[420] tracking-[-0.025em] text-balance [font-variation-settings:'SOFT'_50,'opsz'_144]"
              >
                <span className="sr-only">{profile.person.name}: </span>
                {lead}
                <em className="text-[var(--l-accent)] [font-variation-settings:'SOFT'_100]">{emphasis}</em>
              </h1>
              <p className="mt-7 max-w-xl text-[1.13rem] leading-relaxed text-[var(--l-soft)]">{profile.intro.lede}</p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--l-accent)] px-6 py-3.5 text-[15px] font-semibold text-white transition hover:brightness-110"
                >
                  See my projects
                  <ArrowDown className="size-4 transition group-hover:translate-y-0.5" aria-hidden="true" />
                </a>
                <a
                  href={profile.resume.href}
                  download={profile.resume.fileName}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--l-line)] bg-white/50 px-6 py-3.5 text-[15px] font-semibold transition hover:border-[var(--l-ink)]"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Download résumé
                </a>
              </div>
              <dl className="mt-14 grid grid-cols-1 gap-5 border-t border-[var(--l-line)] pt-7 sm:grid-cols-3">
                {profile.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-[12.5px] text-[var(--l-soft)]">{f.label}</dt>
                    <dd className="mt-1 font-semibold">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative mx-auto w-full max-w-[24rem] lg:col-span-5 lg:max-w-none lg:pl-10">
              <div className="relative aspect-[4/5.2] overflow-hidden rounded-t-full rounded-b-[24px] bg-[var(--l-accent)]">
                <Headshot
                  headshot={profile.person.headshot}
                  sizes="(min-width: 1024px) 34vw, 90vw"
                  priority
                  placeholder={<LaunchPortraitPlaceholder initials={profile.person.initials} />}
                />
              </div>
              <AvailabilityBadge text={profile.person.availability ?? "Open to opportunities"} />
              <p className="mt-4 text-center text-[12px] text-[var(--l-soft)] lg:text-right">
                {profile.person.headshot ? profile.person.location : "Professional headshot placeholder"}
              </p>
            </div>
          </div>
        </section>

        {/* ------------------------------- About ------------------------------- */}
        <LaunchSection id="about" number="01" title="About me">
          <AboutBody profile={profile} />
        </LaunchSection>

        {/* ----------------------------- Education ----------------------------- */}
        <LaunchSection id="education" number="02" title="Education">
          {profile.education.map((ed) => (
            <article key={ed.school} className="rounded-[22px] bg-[var(--l-accent-soft)] p-6 sm:p-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-[family-name:var(--font-demo-fraunces)] text-[2rem] leading-tight sm:text-[2.6rem]">{ed.school}</h3>
                <p className="text-[14px] font-semibold text-[var(--l-accent)]">
                  {ed.start} – {ed.end}
                </p>
              </div>
              <p className="mt-2 text-[17px] font-semibold">{ed.degree}</p>
              {ed.location && <p className="text-[15px] text-[var(--l-soft)]">{ed.location}</p>}
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {ed.details && (
                  <ul className="space-y-2 text-[15.5px]">
                    {ed.details.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[var(--l-accent)]" aria-hidden="true" />
                        {d}
                      </li>
                    ))}
                    {ed.honors?.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[var(--l-accent)]" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                {ed.coursework && (
                  <div>
                    <h4 className="text-[13px] font-semibold tracking-wide text-[var(--l-soft)] uppercase">Relevant coursework</h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {ed.coursework.map((c) => (
                        <li key={c} className="rounded-full border border-[var(--l-line)] bg-[var(--l-bg)] px-3.5 py-1.5 text-[13.5px]">
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </article>
          ))}
        </LaunchSection>

        {/* ----------------------------- Experience ---------------------------- */}
        <LaunchSection id="experience" number="03" title="Experience & internships">
          <ol className="border-t border-[var(--l-line)]">
            {profile.experience.map((r) => (
              <li key={r.org + r.role} className="group relative border-b border-[var(--l-line)] py-8">
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-0 h-px w-0 bg-[var(--l-accent)] transition-all duration-700 group-hover:w-full"
                />
                <div className="grid gap-3 md:grid-cols-12 md:gap-8">
                  <p className="text-[14px] text-[var(--l-soft)] md:col-span-3">
                    {r.start} – {r.end}
                    {r.location && <span className="block">{r.location}</span>}
                  </p>
                  <div className="md:col-span-9">
                    <h3 className="font-[family-name:var(--font-demo-fraunces)] text-[1.65rem] leading-tight">
                      {r.role} <span className="text-[var(--l-soft)] italic">at {r.org}</span>
                    </h3>
                    <ul className="mt-4 space-y-2 text-[15.5px] leading-relaxed text-[var(--l-soft)]">
                      {r.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[var(--l-accent)]" aria-hidden="true" />
                          {b}
                        </li>
                      ))}
                    </ul>
                    {r.tags && (
                      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tools used">
                        {r.tags.map((t) => (
                          <li key={t} className="rounded-full bg-[var(--l-accent-soft)] px-3 py-1 text-[12.5px] font-semibold text-[var(--l-accent)]">
                            {t}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </LaunchSection>

        {/* ----------------------------- Leadership ---------------------------- */}
        <LaunchSection id="leadership" number="04" title="Student leadership">
          <ul className="grid gap-5 md:grid-cols-3">
            {profile.leadership.map((r, i) => (
              <li key={r.org}>
                <Reveal delay={i * 0.08} className="h-full">
                  <article className="flex h-full flex-col rounded-[18px] border border-[var(--l-line)] bg-white/50 p-6">
                    <p className="font-[family-name:var(--font-demo-fraunces)] text-5xl leading-none text-[var(--l-accent)] italic">
                      {r.start}
                    </p>
                    <h3 className="mt-6 text-[17px] font-bold">{r.role}</h3>
                    <p className="text-[15px] text-[var(--l-soft)]">{r.org}</p>
                    <ul className="mt-4 space-y-2 text-[14.5px] leading-relaxed">
                      {r.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                    <p className="mt-auto pt-5 text-[12.5px] text-[var(--l-soft)]">
                      {r.start} – {r.end}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ul>
        </LaunchSection>

        {/* ------------------------------- Skills ------------------------------ */}
        <LaunchSection id="skills" number="05" title="Skills">
          <div className="grid gap-10 md:grid-cols-3">
            {profile.skills.map((g) => (
              <div key={g.group}>
                <h3 className="border-b border-[var(--l-ink)] pb-3 text-[13px] font-bold tracking-[0.08em] uppercase">{g.group}</h3>
                <ul className="mt-4 space-y-2.5">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="font-[family-name:var(--font-demo-fraunces)] text-[1.45rem] leading-tight transition hover:translate-x-1 hover:text-[var(--l-accent)]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </LaunchSection>

        {/* ------------------------------ Projects ----------------------------- */}
        <LaunchSection id="projects" number="06" title="Featured projects">
          <ProjectGallery projects={profile.projects} />
        </LaunchSection>

        {/* --------------------------- Certifications -------------------------- */}
        <LaunchSection id="certifications" number="07" title="Certifications">
          <ul className="divide-y divide-[var(--l-line)] border-y border-[var(--l-line)]">
            {profile.certifications.map((c) => (
              <li key={c.name} className="flex flex-col gap-2 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                <div>
                  <p className="text-[17px] font-semibold">{c.name}</p>
                  <p className="text-[14px] text-[var(--l-soft)]">
                    {c.issuer} · {c.year}
                  </p>
                </div>
                <span
                  className={
                    c.status === "In progress"
                      ? "self-start rounded-full border border-dashed border-[var(--l-accent)] px-3 py-1 text-[12.5px] font-semibold text-[var(--l-accent)] sm:self-auto"
                      : "self-start rounded-full bg-[var(--l-accent)] px-3 py-1 text-[12.5px] font-semibold text-white sm:self-auto"
                  }
                >
                  {c.status ?? "Completed"}
                </span>
              </li>
            ))}
          </ul>
        </LaunchSection>

        {/* ------------------------------ Contact ------------------------------ */}
        <section id="contact" aria-labelledby="contact-title" className="px-3 pb-3 sm:px-5 sm:pb-5">
          <div className="mx-auto max-w-[86rem] overflow-hidden rounded-[28px] bg-[var(--l-accent)] px-6 py-16 text-white sm:px-12 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="text-[14px] font-semibold text-white/80">08 · Contact</p>
                <h2
                  id="contact-title"
                  className="mt-4 font-[family-name:var(--font-demo-fraunces)] text-[clamp(2.6rem,6vw,5rem)] leading-[0.98] tracking-[-0.02em] text-balance"
                >
                  {profile.contact.heading}
                </h2>
                <p className="mt-6 max-w-lg text-[17px] leading-relaxed text-white/85">{profile.contact.blurb}</p>
              </div>
              <div className="flex flex-col justify-end gap-3 lg:col-span-5">
                {profile.contact.links.map((l) => (
                  <DemoLink
                    key={l.kind}
                    link={l}
                    owner={profile.person.firstName}
                    noteClassName="bg-[var(--l-ink)] text-white"
                    className="group flex w-full items-center justify-between gap-4 rounded-full bg-white/10 px-5 py-4 text-left transition hover:bg-white hover:text-[var(--l-ink)]"
                  >
                    <span className="flex min-w-0 items-center gap-3">
                      <ContactIcon kind={l.kind} className="size-4 shrink-0" />
                      <span className="truncate text-[15px] font-semibold">{l.display ?? l.label}</span>
                    </span>
                    <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                  </DemoLink>
                ))}
                <a
                  href={profile.resume.href}
                  download={profile.resume.fileName}
                  className="flex items-center justify-between gap-4 rounded-full bg-white px-5 py-4 text-[15px] font-semibold text-[var(--l-ink)] transition hover:bg-[var(--l-bg)]"
                >
                  <span className="flex items-center gap-3">
                    <Download className="size-4" aria-hidden="true" />
                    Download résumé (PDF)
                  </span>
                  <span className="text-[12.5px] font-normal text-[var(--l-soft)]">Sample</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[80rem] flex-col gap-4 px-5 py-10 text-[13.5px] text-[var(--l-soft)] sm:px-8 md:flex-row md:items-center md:justify-between">
        <p>
          {profile.person.name} is a fictional profile created by Maple &amp; Signal to demonstrate the Career Launch
          design.
        </p>
        <Link
          href={inquiryHref(profile.packageId)}
          className="inline-flex items-center gap-1.5 font-semibold text-[var(--l-ink)] hover:text-[var(--l-accent)]"
        >
          Want a website like this? Build yours with Maple &amp; Signal
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </footer>

      <BuildYoursCta packageId={profile.packageId} />
    </div>
  );
}

function LaunchSection({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto max-w-[80rem] px-5 py-16 sm:px-8 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-3">
          <div className="lg:sticky lg:top-28">
            <p className="font-[family-name:var(--font-demo-fraunces)] text-xl text-[var(--l-accent)] italic">{number}</p>
            <h2 id={`${id}-title`} className="mt-1 font-[family-name:var(--font-demo-fraunces)] text-[2.1rem] leading-tight tracking-[-0.01em]">
              {title}
            </h2>
          </div>
        </div>
        <div className="lg:col-span-9">
          <Reveal>{children}</Reveal>
        </div>
      </div>
    </section>
  );
}

function AboutBody({ profile }: { profile: LaunchProfile }) {
  const [first, ...rest] = profile.about;
  const [firstSentence, remainder] = splitFirstSentence(first);
  return (
    <div className="grid gap-10 xl:grid-cols-9">
      <div className="xl:col-span-6">
        <p className="font-[family-name:var(--font-demo-fraunces)] text-[1.65rem] leading-snug tracking-[-0.01em] sm:text-[2rem]">
          {firstSentence}
        </p>
        <div className="mt-6 space-y-5 text-[16.5px] leading-relaxed text-[var(--l-soft)]">
          {remainder && <p>{remainder}</p>}
          {rest.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>
      <aside className="self-start rounded-[18px] border border-[var(--l-line)] p-6 xl:col-span-3" aria-label="At a glance">
        <dl className="space-y-4 text-[15px]">
          <div>
            <dt className="text-[12.5px] text-[var(--l-soft)]">Currently</dt>
            <dd className="mt-0.5 font-semibold">{profile.person.availability}</dd>
          </div>
          <div>
            <dt className="text-[12.5px] text-[var(--l-soft)]">Location</dt>
            <dd className="mt-0.5 font-semibold">{profile.person.location}</dd>
          </div>
          {profile.person.pronouns && (
            <div>
              <dt className="text-[12.5px] text-[var(--l-soft)]">Pronouns</dt>
              <dd className="mt-0.5 font-semibold">{profile.person.pronouns}</dd>
            </div>
          )}
        </dl>
      </aside>
    </div>
  );
}

function LaunchPortraitPlaceholder({ initials }: { initials: string }) {
  return (
    <div className="absolute inset-0" role="img" aria-label="Headshot placeholder">
      <svg viewBox="0 0 400 520" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="launch-glow" cx="30%" cy="22%" r="85%">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="0.6" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="520" fill="url(#launch-glow)" />
        <g fill="none" stroke="#ffffff" strokeOpacity="0.16">
          {Array.from({ length: 14 }).map((_, i) => (
            <ellipse key={i} cx="200" cy="560" rx={60 + i * 26} ry={40 + i * 30} />
          ))}
        </g>
        <circle cx="200" cy="215" r="70" fill="#ffffff" fillOpacity="0.14" />
        <path d="M70 520c10-110 70-170 130-170s120 60 130 170Z" fill="#ffffff" fillOpacity="0.14" />
      </svg>
      <span className="absolute inset-x-0 bottom-8 text-center font-[family-name:var(--font-demo-fraunces)] text-6xl text-white/90 italic">
        {initials}
      </span>
    </div>
  );
}

function AvailabilityBadge({ text }: { text: string }) {
  const ring = `${text} · `;
  return (
    <div className="absolute -bottom-6 -left-2 grid size-32 place-items-center rounded-full bg-[var(--l-bg)] shadow-[0_10px_30px_-12px_rgb(0_0_0/0.3)] sm:size-36 lg:left-2">
      <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow" aria-hidden="true">
        <defs>
          <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
        </defs>
        <text fontSize="7.2" letterSpacing="0.6" fill="var(--l-ink)" fontWeight="600">
          <textPath href="#badge-circle" textLength="236">
            {ring.toUpperCase()}
          </textPath>
        </text>
      </svg>
      <span className="size-3 rounded-full bg-[var(--l-accent)]" aria-hidden="true" />
      <span className="sr-only">{text}</span>
    </div>
  );
}
