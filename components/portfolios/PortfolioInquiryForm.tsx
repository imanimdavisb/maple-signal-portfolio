"use client";

import { useActionState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { submitPortfolioInquiry, type PortfolioInquiryState } from "@/lib/forms/actions";
import {
  MAX_REQUIREMENTS,
  portfolioTypeOptions,
  type PortfolioInquiryInput,
} from "@/lib/portfolios/inquiry";
import { careerStages, launchTimeframes } from "@/lib/portfolios/packages";
import { CONTACT_EMAIL } from "@/lib/site-config";
import { SubmitButton } from "@/components/ui/Button";

const initialState: PortfolioInquiryState = { status: "idle" };

const inputClasses =
  "w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-muted/60 focus:border-maple focus:outline-none focus:ring-1 focus:ring-maple aria-[invalid=true]:border-maple-dark";

const selectClasses = `${inputClasses} appearance-none bg-[url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none' stroke='%236e665c' stroke-width='1.5'><path d='M1 1l5 5 5-5'/></svg>")] bg-[length:12px_8px] bg-[position:right_1rem_center] bg-no-repeat pr-10`;

/** Reads `?package=career-launch` (etc.) to preselect a package. Wrap in <Suspense>. */
export function PortfolioInquiryFormWithParams({ deliveryReady }: { deliveryReady: boolean }) {
  const requested = useSearchParams().get("package") ?? "";
  const valid = portfolioTypeOptions.some((option) => option.value === requested);
  return (
    <PortfolioInquiryForm deliveryReady={deliveryReady} initialPackage={valid ? requested : ""} />
  );
}

export function PortfolioInquiryForm({
  deliveryReady,
  initialPackage = "",
}: {
  deliveryReady: boolean;
  initialPackage?: string;
}) {
  const [state, formAction, isPending] = useActionState(submitPortfolioInquiry, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const errors = state.errors ?? {};
  const values: Partial<PortfolioInquiryInput> = state.values ?? { portfolioType: initialPackage };

  // Move focus to the first field with a problem so keyboard and screen-reader users land on it.
  useEffect(() => {
    if (state.status !== "invalid") return;
    formRef.current?.querySelector<HTMLElement>("[aria-invalid=true]")?.focus();
  }, [state]);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-line bg-paper p-8 text-center">
        <p className="font-display text-2xl text-ink">Inquiry received</p>
        <p className="mt-2 text-ink-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} noValidate className="space-y-6">
      {!deliveryReady && (
        <p className="rounded-lg border border-dashed border-maple/50 bg-maple/5 px-4 py-3 text-sm text-maple-dark">
          <strong className="font-medium">Not connected yet:</strong> this form isn&apos;t linked to an
          inbox, so inquiries sent here won&apos;t arrive. Please email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>{" "}
          for now.
        </p>
      )}
      {state.status === "not-sent" && (
        <p role="alert" className="rounded-lg bg-maple/10 px-4 py-3 text-sm text-maple-dark">
          {state.message}
        </p>
      )}
      {state.status === "invalid" && (
        <p role="alert" className="rounded-lg bg-maple/10 px-4 py-3 text-sm text-maple-dark">
          Please check the highlighted fields below.
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" error={errors.fullName}>
          {(props) => (
            <input {...props} type="text" autoComplete="name" defaultValue={values.fullName} className={inputClasses} />
          )}
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          {(props) => (
            <input {...props} type="email" autoComplete="email" defaultValue={values.email} className={inputClasses} />
          )}
        </Field>
        <Field label="Package" name="portfolioType" error={errors.portfolioType}>
          {(props) => (
            <select {...props} key={values.portfolioType} defaultValue={values.portfolioType ?? ""} className={selectClasses}>
              <option value="" disabled>
                Choose a package
              </option>
              {portfolioTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label="Career Stage" name="careerStage" error={errors.careerStage}>
          {(props) => (
            <select {...props} defaultValue={values.careerStage ?? ""} className={selectClasses}>
              <option value="" disabled>
                Choose your stage
              </option>
              {careerStages.map((stage) => (
                <option key={stage} value={stage}>
                  {stage}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label="When would you like to launch?" name="timeframe" error={errors.timeframe}>
          {(props) => (
            <select {...props} defaultValue={values.timeframe ?? ""} className={selectClasses}>
              <option value="" disabled>
                Choose a timeframe
              </option>
              {launchTimeframes.map((timeframe) => (
                <option key={timeframe} value={timeframe}>
                  {timeframe}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field label="LinkedIn or Current Website (optional)" name="profileUrl" error={errors.profileUrl} optional>
          {(props) => (
            <input
              {...props}
              type="text"
              inputMode="url"
              autoComplete="url"
              placeholder="linkedin.com/in/your-name"
              defaultValue={values.profileUrl}
              className={inputClasses}
            />
          )}
        </Field>
      </div>

      <Field
        label="Anything we should know? (optional)"
        name="requirements"
        error={errors.requirements}
        optional
      >
        {(props) => (
          <textarea
            {...props}
            rows={5}
            maxLength={MAX_REQUIREMENTS}
            placeholder="Your goals, the roles you're targeting, sections you'd like, or if you're a student."
            defaultValue={values.requirements}
            className={inputClasses}
          />
        )}
      </Field>

      {/* Honeypot: hidden from people, often filled in by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="portfolio-company">Company</label>
        <input id="portfolio-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="text-xs text-ink-muted">
        We only use this information to respond to your inquiry. We don&apos;t sell or share your
        details with third parties.
      </p>
      <SubmitButton disabled={isPending}>{isPending ? "Sending..." : "Send My Inquiry"}</SubmitButton>
    </form>
  );
}

type ControlProps = {
  id: string;
  name: string;
  required?: boolean;
  "aria-invalid"?: boolean;
  "aria-describedby"?: string;
};

function Field({
  label,
  name,
  error,
  optional,
  children,
}: {
  label: string;
  name: keyof PortfolioInquiryInput;
  error?: string;
  optional?: boolean;
  children: (props: ControlProps) => React.ReactNode;
}) {
  const id = `portfolio-${name}`;
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      {children({
        id,
        name,
        required: !optional,
        "aria-invalid": error ? true : undefined,
        "aria-describedby": error ? errorId : undefined,
      })}
      {error && (
        <p id={errorId} className="mt-2 text-sm text-maple-dark">
          {error}
        </p>
      )}
    </div>
  );
}
