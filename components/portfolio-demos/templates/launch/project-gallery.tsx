"use client";

import { useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "@/lib/portfolios/types";

/** Generative cover art so projects look considered without needing screenshots. */
export function ProjectCover({ index }: { index: number }) {
  const v = index % 3;
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="260" fill="var(--l-accent-soft)" />
      {v === 0 &&
        Array.from({ length: 9 }).map((_, i) => (
          <rect
            key={i}
            x={40 + i * 37}
            y={200 - (40 + ((i * 53) % 120))}
            width="22"
            height={40 + ((i * 53) % 120)}
            rx="2"
            fill="var(--l-accent)"
            opacity={0.25 + (i % 4) * 0.18}
          />
        ))}
      {v === 1 && (
        <g fill="none" stroke="var(--l-accent)" strokeWidth="1.5">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx="290" cy="150" r={20 + i * 22} opacity={1 - i * 0.11} />
          ))}
          <path d="M20 220 C120 120, 180 240, 300 90" strokeWidth="3" />
        </g>
      )}
      {v === 2 && (
        <g>
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 10 }).map((_, c) => (
              <circle
                key={`${r}-${c}`}
                cx={40 + c * 36}
                cy={45 + r * 34}
                r={(r + c) % 4 === 0 ? 9 : 4}
                fill="var(--l-accent)"
                opacity={(r + c) % 4 === 0 ? 0.9 : 0.3}
              />
            )),
          )}
        </g>
      )}
    </svg>
  );
}

export function ProjectGallery({ projects }: { projects: Project[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const project = projects.find((p) => p.id === openId);

  const open = (id: string) => {
    setOpenId(id);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <li key={p.id} className={i === 0 ? "md:col-span-2 lg:col-span-1" : undefined}>
            <button
              type="button"
              onClick={() => open(p.id)}
              aria-haspopup="dialog"
              className="group flex h-full w-full flex-col overflow-hidden rounded-[18px] border border-[var(--l-line)] bg-white/60 text-left transition duration-500 hover:-translate-y-1 hover:border-[var(--l-accent)] hover:shadow-[0_24px_50px_-30px_rgb(30_40_30/0.45)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="h-full w-full transition duration-700 group-hover:scale-[1.04]">
                  <ProjectCover index={i} />
                </div>
                <span className="absolute top-4 left-4 rounded-full bg-[var(--l-bg)] px-3 py-1 text-[12px] font-semibold">
                  {p.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-[12.5px] text-[var(--l-soft)]">{p.year}</p>
                <h3 className="mt-1 font-[family-name:var(--font-demo-fraunces)] text-[1.7rem] leading-tight">{p.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[var(--l-soft)]">{p.summary}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-semibold text-[var(--l-accent)]">
                  Read the case study
                  <ArrowUpRight className="size-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </span>
              </div>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        aria-labelledby="project-dialog-title"
        onClose={() => setOpenId(null)}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-auto max-h-[90dvh] w-[min(44rem,calc(100vw-1.5rem))] overflow-y-auto rounded-[20px] bg-[var(--l-bg)] p-0 text-[var(--l-ink)] backdrop:bg-black/50 open:animate-[page-in_0.4s_ease-out]"
      >
        {project && (
          <article>
            <div className="relative aspect-[16/7] overflow-hidden">
              <ProjectCover index={projects.indexOf(project)} />
              <button
                type="button"
                onClick={close}
                className="absolute top-4 right-4 grid size-10 place-items-center rounded-full bg-[var(--l-bg)] transition hover:bg-white"
                aria-label="Close project details"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            </div>
            <div className="p-6 sm:p-10">
              <p className="text-[13px] font-semibold text-[var(--l-accent)]">
                {project.category} · {project.year}
              </p>
              <h3 id="project-dialog-title" className="mt-2 font-[family-name:var(--font-demo-fraunces)] text-4xl leading-tight">
                {project.title}
              </h3>
              {project.role && <p className="mt-2 text-[15px] text-[var(--l-soft)]">{project.role}</p>}
              <dl className="mt-8 space-y-7 text-[15.5px] leading-relaxed">
                {project.problem && (
                  <div>
                    <dt className="font-semibold">The question</dt>
                    <dd className="mt-1.5 text-[var(--l-soft)]">{project.problem}</dd>
                  </div>
                )}
                {project.approach && (
                  <div>
                    <dt className="font-semibold">What I did</dt>
                    <dd className="mt-1.5">
                      <ul className="space-y-2 text-[var(--l-soft)]">
                        {project.approach.map((a) => (
                          <li key={a} className="flex gap-3">
                            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[var(--l-accent)]" aria-hidden="true" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
                {project.outcome && (
                  <div>
                    <dt className="font-semibold">What came of it</dt>
                    <dd className="mt-1.5">
                      <ul className="space-y-2 text-[var(--l-soft)]">
                        {project.outcome.map((a) => (
                          <li key={a} className="flex gap-3">
                            <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[var(--l-accent)]" aria-hidden="true" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                )}
                <div>
                  <dt className="font-semibold">Tools</dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span key={t} className="rounded-full bg-[var(--l-accent-soft)] px-3 py-1 text-[13px]">
                        {t}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </article>
        )}
      </dialog>
    </>
  );
}
