"use client";

import { useActionState, useState } from "react";
import { useSearchParams } from "next/navigation";
import { submitAuditRequest, type AuditRequestState } from "@/lib/forms/actions";
import { SERVICE_OPTIONS, isServiceValue, type ServiceValue } from "@/lib/forms/services";
import { CONTACT_EMAIL } from "@/lib/site-config";
import { SubmitButton } from "@/components/ui/Button";

const initialState: AuditRequestState = { status: "idle" };

const inputClasses =
  "w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-muted/60 focus:border-maple focus:outline-none focus:ring-1 focus:ring-maple";

/**
 * Reads `?service=website-audit` (etc.) to preselect the service. Render inside
 * <Suspense> with a plain <ContactForm> as the fallback, so the static page
 * still contains the full form.
 */
export function ContactFormWithParams({ deliveryReady }: { deliveryReady: boolean }) {
  const requested = useSearchParams().get("service") ?? "";
  return (
    <ContactForm
      deliveryReady={deliveryReady}
      initialService={isServiceValue(requested) ? requested : ""}
    />
  );
}

export function ContactForm({
  deliveryReady,
  initialService = "",
}: {
  deliveryReady: boolean;
  initialService?: ServiceValue | "";
}) {
  const [state, formAction, isPending] = useActionState(submitAuditRequest, initialState);
  const [service, setService] = useState<ServiceValue | "">(initialService);
  const isPortfolio = service === "professional-portfolio";

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-line bg-paper-alt p-8 text-center">
        <p className="font-display text-2xl text-ink">Request received</p>
        <p className="mt-2 text-ink-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-6">
      {!deliveryReady && (
        <p className="rounded-lg border border-dashed border-maple/50 bg-maple/5 px-4 py-3 text-sm text-maple-dark">
          <strong className="font-medium">Not connected yet:</strong> this form isn&apos;t linked to an
          inbox, so requests sent here won&apos;t arrive. Please email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>{" "}
          for now.
        </p>
      )}
      {(state.status === "error" || state.status === "not-sent") && (
        <p role="alert" className="rounded-lg bg-maple/10 px-4 py-3 text-sm text-maple-dark">
          {state.message}
        </p>
      )}

      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-ink">
          What can we help with?
        </label>
        <select
          id="service"
          name="service"
          required
          value={service}
          onChange={(event) => setService(event.target.value as ServiceValue)}
          className={`${inputClasses} appearance-none bg-[url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' fill='none' stroke='%236e665c' stroke-width='1.5'><path d='M1 1l5 5 5-5'/></svg>")] bg-[length:12px_8px] bg-[position:right_1rem_center] bg-no-repeat pr-10`}
        >
          <option value="" disabled>
            Choose a service
          </option>
          {SERVICE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {isPortfolio && (
          <p className="mt-2 text-sm text-ink-muted">
            Tip: the{" "}
            <a href="/professional-portfolios#inquiry" className="text-maple underline underline-offset-2">
              portfolio inquiry form
            </a>{" "}
            asks the questions we need to recommend a package.
          </p>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your Name" name="name" required autoComplete="name" values={state.values} />
        <Field
          label={isPortfolio ? "Business or School (optional)" : "Business Name"}
          name="businessName"
          required={!isPortfolio}
          autoComplete="organization"
          values={state.values}
        />
        <Field label="Email" name="email" type="email" required autoComplete="email" values={state.values} />
        <Field label="Phone (optional)" name="phone" type="tel" autoComplete="tel" values={state.values} />
        <Field
          label={isPortfolio ? "LinkedIn or Current Website (optional)" : "Current Website (optional)"}
          name="currentWebsite"
          className="sm:col-span-2"
          autoComplete="url"
          values={state.values}
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          {isPortfolio
            ? "What would you like your portfolio to do for you? (optional)"
            : "What are you hoping your website will do for your business? (optional)"}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          defaultValue={state.values?.message}
          className={inputClasses}
        />
      </div>

      {/* Honeypot: hidden from people, often filled in by bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <p className="text-xs text-ink-muted">
        We only use this information to respond to your request. We don&apos;t sell or share your
        details with third parties.
      </p>
      <SubmitButton disabled={isPending}>
        {isPending ? "Sending..." : service === "website-audit" || service === "" ? "Get My Free Website Audit" : "Send My Request"}
      </SubmitButton>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  values,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  values?: Record<string, string>;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        defaultValue={values?.[name]}
        className={inputClasses}
      />
    </div>
  );
}
