"use server";

import { deliverSubmission, FAILED_MESSAGE, NOT_SENT_MESSAGE } from "./deliver";
import { isServiceValue } from "./services";
import {
  readPortfolioInquiry,
  validatePortfolioInquiry,
  type PortfolioInquiryErrors,
} from "@/lib/portfolios/inquiry";

export interface AuditRequestState {
  status: "idle" | "success" | "error" | "not-sent";
  message?: string;
  /** Echoes the submitted values so the form keeps them after an error. */
  values?: Record<string, string>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitAuditRequest(
  _prevState: AuditRequestState,
  formData: FormData
): Promise<AuditRequestState> {
  // Hidden field real visitors never fill in; bots usually do.
  if (String(formData.get("company") ?? "")) {
    return { status: "error", message: "Your request could not be sent." };
  }

  const service = String(formData.get("service") ?? "").trim();
  const name = String(formData.get("name") ?? "").trim();
  const businessName = String(formData.get("businessName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const currentWebsite = String(formData.get("currentWebsite") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const needsBusinessName = service !== "professional-portfolio";
  const values = { service, name, businessName, email, phone, currentWebsite, message };

  if (!isServiceValue(service)) {
    return { status: "error", message: "Please choose what we can help with.", values };
  }

  if (!name || !email || (needsBusinessName && !businessName)) {
    return {
      status: "error",
      message: needsBusinessName
        ? "Please fill in your name, business name, and email."
        : "Please fill in your name and email.",
      values,
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address.", values };
  }

  const result = await deliverSubmission("website-inquiry", values);

  if (result === "not-configured") return { status: "not-sent", message: NOT_SENT_MESSAGE, values };
  if (result === "failed") return { status: "not-sent", message: FAILED_MESSAGE, values };

  return {
    status: "success",
    message: "Thanks — we'll be in touch within one business day.",
  };
}

export interface PortfolioInquiryState {
  status: "idle" | "success" | "invalid" | "not-sent";
  message?: string;
  errors?: PortfolioInquiryErrors;
  /** Echoes the submitted values so the form keeps them after an error. */
  values?: Record<string, string>;
}

export async function submitPortfolioInquiry(
  _prevState: PortfolioInquiryState,
  formData: FormData
): Promise<PortfolioInquiryState> {
  const input = readPortfolioInquiry(formData);

  if (String(formData.get("company") ?? "")) {
    return { status: "not-sent", message: FAILED_MESSAGE, values: input };
  }

  const errors = validatePortfolioInquiry(input);
  if (Object.keys(errors).length > 0) {
    return { status: "invalid", errors, values: input };
  }

  const result = await deliverSubmission("portfolio-inquiry", input);
  if (result !== "sent") {
    return {
      status: "not-sent",
      message: result === "not-configured" ? NOT_SENT_MESSAGE : FAILED_MESSAGE,
      values: input,
    };
  }

  return {
    status: "success",
    message: "Thanks! We'll reply by email within one business day with next steps.",
  };
}
