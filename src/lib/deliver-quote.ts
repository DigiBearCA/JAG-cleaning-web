/**
 * Server only. Imported by app/api/quote/route.ts and nothing else.
 * (The `server-only` guard package is not installed and no new dependencies are allowed,
 * so keep this module out of client components.)
 *
 * Delivers quote requests through the EmailJS REST API using fetch only (no SDK).
 *
 * EmailJS setup notes:
 * - Server-side calls are blocked by default. In the EmailJS dashboard open
 *   Account > Security and enable "Allow EmailJS API for non-browser applications"
 *   (see the EmailJS docs, REST API section). Also enable "Use Private Key" so the
 *   accessToken below is required.
 * - The email template should use {{name}}, {{phone}}, {{service_label}}, {{message}},
 *   and {{submitted_at}}, with the destination "To Email" set in the template itself.
 * - Environment variables (server only, never NEXT_PUBLIC_):
 *   EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY.
 * - EmailJS allows 1 request per second per account, so a 429 from EmailJS is treated
 *   as a temporary failure. Our own per-IP rate limit also guards against bursts.
 */

import { serviceLabel, type QuoteData } from "@/lib/quote-validation";

const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";
const REQUEST_TIMEOUT_MS = 10_000;

export const NOT_CONFIGURED_MESSAGE = "Quote requests are not set up yet. Please call or message us on WhatsApp.";
export const DELIVERY_FAILED_MESSAGE = "We could not send your request just now. Please try again in a minute, or call or message us on WhatsApp.";

export type DeliveryResult =
  | { readonly ok: true }
  | { readonly ok: false; readonly status: 502 | 503; readonly message: string };

interface EmailJsConfig {
  readonly serviceId: string;
  readonly templateId: string;
  readonly publicKey: string;
  readonly privateKey: string;
}

function readConfig(): EmailJsConfig | null {
  const serviceId = process.env.EMAILJS_SERVICE_ID?.trim();
  const templateId = process.env.EMAILJS_TEMPLATE_ID?.trim();
  const publicKey = process.env.EMAILJS_PUBLIC_KEY?.trim();
  const privateKey = process.env.EMAILJS_PRIVATE_KEY?.trim();
  if (!serviceId || !templateId || !publicKey || !privateKey) return null;
  return { serviceId, templateId, publicKey, privateKey };
}

function submittedAt(): string {
  return new Date().toLocaleString("en-CA", {
    timeZone: "America/Edmonton",
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export async function deliverQuote(data: QuoteData): Promise<DeliveryResult> {
  const config = readConfig();

  if (!config) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[quote] EmailJS is not configured. Development submission:", {
        name: data.name,
        phone: data.phone,
        service: serviceLabel(data.service),
        message: data.message,
      });
      return { ok: true };
    }
    console.error("[quote] EmailJS environment variables are missing in production.");
    return { ok: false, status: 503, message: NOT_CONFIGURED_MESSAGE };
  }

  const payload = {
    service_id: config.serviceId,
    template_id: config.templateId,
    user_id: config.publicKey,
    accessToken: config.privateKey,
    template_params: {
      name: data.name,
      phone: data.phone,
      service_label: serviceLabel(data.service),
      message: data.message.length > 0 ? data.message : "(no message)",
      submitted_at: submittedAt(),
    },
  };

  try {
    const response = await fetch(EMAILJS_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });

    if (response.status === 200) return { ok: true };

    const body = await response.text().catch(() => "");
    if (response.status === 429) {
      console.warn("[quote] EmailJS rate limit hit (temporary).", body.slice(0, 500));
    } else {
      console.error(`[quote] EmailJS responded with ${response.status}.`, body.slice(0, 500));
    }
    return { ok: false, status: 502, message: DELIVERY_FAILED_MESSAGE };
  } catch (error: unknown) {
    const reason = error instanceof Error ? error.name : "unknown error";
    console.error(`[quote] EmailJS request failed: ${reason}.`);
    return { ok: false, status: 502, message: DELIVERY_FAILED_MESSAGE };
  }
}
