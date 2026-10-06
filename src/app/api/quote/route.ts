import { deliverQuote } from "@/lib/deliver-quote";
import { checkRateLimit, clientIpFrom } from "@/lib/rate-limit";
import {
  parseQuoteBody,
  validateQuote,
  type QuoteApiResponse,
} from "@/lib/quote-validation";

/** Largest request body we accept (10 KB). */
const MAX_BODY_BYTES = 10 * 1024;

/** 5 requests per IP per 10 minutes. */
const RATE_LIMIT = { limit: 5, windowMs: 10 * 60 * 1000 } as const;

const NO_STORE = { "Cache-Control": "no-store" } as const;

function json(
  body: QuoteApiResponse,
  status: number,
  headers: Record<string, string> = {},
): Response {
  return Response.json(body, { status, headers: { ...NO_STORE, ...headers } });
}

/**
 * Reads the body as text, stopping as soon as it passes the byte limit.
 * Security: content-length can be missing (chunked) or false, so never buffer an unbounded body.
 * Returns null when the body is too large.
 */
async function readBodyWithLimit(
  request: Request,
  limit: number,
): Promise<string | null> {
  if (!request.body) return "";
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;
  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > limit) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const merged = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return new TextDecoder().decode(merged);
}

/**
 * Security: browsers always send Origin on cross-site POSTs. Reject requests whose Origin
 * host does not match this site, so other sites cannot post the form on a visitor's behalf.
 * Requests without an Origin header (curl, server-to-server) fall through to the other checks.
 */
function isCrossSite(request: Request): boolean {
  const origin = request.headers.get("origin");
  if (!origin) return false;
  let originHost: string;
  try {
    originHost = new URL(origin).host;
  } catch {
    return true;
  }
  const hosts = [
    request.headers.get("host"),
    request.headers.get("x-forwarded-host"),
  ]
    .flatMap((value) => (value ? value.split(",") : []))
    .map((value) => value.trim().toLowerCase());
  return !hosts.includes(originHost.toLowerCase());
}

/**
 * POST /api/quote. Accepts the quote form as JSON, re-validates it with the shared rules,
 * and hands it to EmailJS. Never returns stack traces or environment values.
 */
export async function POST(request: Request): Promise<Response> {
  if (isCrossSite(request)) {
    return json({ ok: false, message: "This request is not allowed." }, 403);
  }

  const contentType = request.headers.get("content-type") ?? "";
  if (!contentType.toLowerCase().startsWith("application/json")) {
    return json({ ok: false, message: "Send the form as JSON." }, 415);
  }

  const declaredLength = Number(request.headers.get("content-length") ?? "0");
  if (Number.isFinite(declaredLength) && declaredLength > MAX_BODY_BYTES) {
    return json({ ok: false, message: "The request is too large." }, 413);
  }

  const rate = checkRateLimit(clientIpFrom(request.headers), RATE_LIMIT);
  if (!rate.allowed) {
    return json(
      {
        ok: false,
        message:
          "You have sent a few requests in a short time. Please wait a few minutes and try again.",
      },
      429,
      { "Retry-After": String(rate.retryAfterSeconds) },
    );
  }

  let text: string | null;
  try {
    text = await readBodyWithLimit(request, MAX_BODY_BYTES);
  } catch {
    return json({ ok: false, message: "We could not read the request." }, 400);
  }
  if (text === null) {
    return json({ ok: false, message: "The request is too large." }, 413);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return json({ ok: false, message: "The request is not valid JSON." }, 400);
  }

  const input = parseQuoteBody(parsed);
  if (!input) {
    return json(
      { ok: false, message: "The request is missing form fields." },
      400,
    );
  }

  // Honeypot filled: almost certainly a bot. Pretend it worked and drop it.
  if (input.company.trim().length > 0) {
    return json({ ok: true }, 200);
  }

  const result = validateQuote(input);
  if (!result.ok) {
    return json({ ok: false, errors: result.errors }, 400);
  }

  const delivery = await deliverQuote(result.data);
  if (!delivery.ok) {
    return json({ ok: false, message: delivery.message }, delivery.status);
  }

  return json({ ok: true }, 200);
}
