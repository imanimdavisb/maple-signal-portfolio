"use server";

export interface AuditRequestState {
  status: "idle" | "success" | "error";
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitAuditRequest(
  _prevState: AuditRequestState,
  formData: FormData
): Promise<AuditRequestState> {
  const name = String(formData.get("name") ?? "").trim();
  const businessName = String(formData.get("businessName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const currentWebsite = String(formData.get("currentWebsite") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !businessName || !email) {
    return {
      status: "error",
      message: "Please fill in your name, business name, and email.",
    };
  }

  if (!EMAIL_PATTERN.test(email)) {
    return { status: "error", message: "Please enter a valid email address." };
  }

  // PLACEHOLDER: no email/CRM provider is connected yet. Once one is chosen
  // (e.g. Resend, a form backend, or a CRM webhook), send the submission there.
  console.log("New website audit request:", {
    name,
    businessName,
    email,
    phone,
    currentWebsite,
    message,
  });

  return {
    status: "success",
    message: "Thanks — we'll be in touch within one business day.",
  };
}
