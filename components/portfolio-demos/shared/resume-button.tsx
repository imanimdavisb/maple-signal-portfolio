import type { BaseProfile } from "@/lib/portfolios/types";

/** Download link for a client's resume file (stored in /public/resumes). */
export function ResumeLink({
  resume,
  className,
  children,
}: {
  resume: BaseProfile["resume"];
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a href={resume.href} download={resume.fileName} className={className}>
      {children}
    </a>
  );
}
