"use client";

import { useActionState } from "react";
import { submitAuditRequest, type AuditRequestState } from "@/lib/forms/actions";
import { SubmitButton } from "@/components/ui/Button";

const initialState: AuditRequestState = { status: "idle" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitAuditRequest, initialState);

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
      {state.status === "error" && (
        <p role="alert" className="rounded-lg bg-maple/10 px-4 py-3 text-sm text-maple-dark">
          {state.message}
        </p>
      )}
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Your Name" name="name" required />
        <Field label="Business Name" name="businessName" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone (optional)" name="phone" type="tel" />
        <Field label="Current Website (optional)" name="currentWebsite" className="sm:col-span-2" />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
          What are you hoping your website will do for your business? (optional)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-muted/60 focus:border-maple focus:outline-none focus:ring-1 focus:ring-maple"
        />
      </div>
      <p className="text-xs text-ink-muted">
        We only use this information to respond to your request. We don&apos;t sell or share your
        details with third parties.
      </p>
      <SubmitButton disabled={isPending}>
        {isPending ? "Sending..." : "Get My Free Website Audit"}
      </SubmitButton>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-ink placeholder:text-ink-muted/60 focus:border-maple focus:outline-none focus:ring-1 focus:ring-maple"
      />
    </div>
  );
}
