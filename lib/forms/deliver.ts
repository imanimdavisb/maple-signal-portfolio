/**
 * Sends form submissions to the inbox/CRM webhook set in INQUIRY_WEBHOOK_URL.
 *
 * Until that variable is set, nothing is delivered and the forms tell the
 * visitor so, instead of showing a success message for a request nobody
 * will receive. See README → "Connect the forms".
 */

export type DeliveryResult = "sent" | "not-configured" | "failed";

export function isDeliveryConfigured() {
  return Boolean(process.env.INQUIRY_WEBHOOK_URL);
}

export async function deliverSubmission(
  form: "website-inquiry" | "portfolio-inquiry",
  fields: Record<string, string>
): Promise<DeliveryResult> {
  const url = process.env.INQUIRY_WEBHOOK_URL;
  if (!url) return "not-configured";

  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (process.env.INQUIRY_WEBHOOK_TOKEN) {
    headers.Authorization = `Bearer ${process.env.INQUIRY_WEBHOOK_TOKEN}`;
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({
        form,
        ...fields,
        submittedAt: new Date().toISOString(),
        source: "maple-signal-website",
      }),
      signal: AbortSignal.timeout(10_000),
    });
    return response.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}

export const NOT_SENT_MESSAGE =
  "Your request was not sent: this form isn't connected to an inbox yet. Please email us instead.";
export const FAILED_MESSAGE =
  "Something went wrong and your request was not sent. Please try again, or email us instead.";
