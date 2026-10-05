/**
 * Server only. Imported by app/api/quote/route.ts and nothing else.
 *
 * In-memory, per-IP sliding-window rate limiter.
 * Note: the map lives in the memory of one server instance. On serverless platforms it
 * resets on every cold start and is not shared between instances, so treat it as a
 * light burst guard, not a hard security boundary.
 */

export interface RateLimitOptions {
  readonly limit: number;
  readonly windowMs: number;
}

export type RateLimitResult =
  | { readonly allowed: true; readonly remaining: number }
  | { readonly allowed: false; readonly retryAfterSeconds: number };

/** Upper bound on tracked keys so a flood of unique IPs cannot grow memory without limit. */
const MAX_TRACKED_KEYS = 5000;

const hits = new Map<string, number[]>();

function prune(now: number, windowMs: number): void {
  for (const [key, timestamps] of hits) {
    const recent = timestamps.filter((time) => now - time < windowMs);
    if (recent.length === 0) hits.delete(key);
    else hits.set(key, recent);
  }
}

export function checkRateLimit(key: string, options: RateLimitOptions, now: number = Date.now()): RateLimitResult {
  if (hits.size > MAX_TRACKED_KEYS) prune(now, options.windowMs);

  const recent = (hits.get(key) ?? []).filter((time) => now - time < options.windowMs);

  if (recent.length >= options.limit) {
    hits.set(key, recent);
    const oldest = recent[0] ?? now;
    const retryAfterSeconds = Math.max(1, Math.ceil((oldest + options.windowMs - now) / 1000));
    return { allowed: false, retryAfterSeconds };
  }

  recent.push(now);
  hits.set(key, recent);
  return { allowed: true, remaining: options.limit - recent.length };
}

/**
 * Best-effort client IP from the x-forwarded-for header (first entry).
 * The header can be spoofed when the app is not behind a trusted proxy; hosting
 * platforms such as Vercel overwrite it with the real client address.
 */
export function clientIpFrom(headers: Headers): string {
  const forwarded = headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  if (first) return first.slice(0, 64);
  const realIp = headers.get("x-real-ip")?.trim();
  return realIp ? realIp.slice(0, 64) : "unknown";
}
