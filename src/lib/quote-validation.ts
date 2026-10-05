/**
 * Quote form validation. Pure functions shared by the client form and the /api/quote route.
 * Written by hand on purpose (no validation library).
 */

export const SERVICE_OPTIONS = [
  { value: "home", label: "Home Cleaning" },
  { value: "business", label: "Business Cleaning" },
  { value: "snow", label: "Snow Removal" },
] as const;

export type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];

export const QUOTE_LIMITS = {
  nameMin: 2,
  nameMax: 80,
  phoneMinDigits: 10,
  phoneMax: 30,
  emailMax: 200,
  messageMax: 1000,
  /** Hard cap for the honeypot value we bother reading. */
  honeypotMax: 200,
} as const;

/** Raw values as typed by the visitor (or received by the server). */
export interface QuoteInput {
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly service: string;
  readonly message: string;
  /** Honeypot. Real visitors never see or fill this. */
  readonly company: string;
}

/** Clean, validated values ready for delivery. */
export interface QuoteData {
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly service: ServiceValue;
  readonly message: string;
}

export type QuoteField = "name" | "phone" | "email" | "service" | "message";

/** Field order, used to focus the first invalid field. */
export const QUOTE_FIELDS: ReadonlyArray<QuoteField> = ["name", "phone", "email", "service", "message"];

export type QuoteErrors = Partial<Record<QuoteField, string>>;

export type QuoteValidationResult =
  | { readonly ok: true; readonly data: QuoteData }
  | { readonly ok: false; readonly errors: QuoteErrors };

/** Response body returned by POST /api/quote. */
export type QuoteApiResponse =
  | { readonly ok: true }
  | { readonly ok: false; readonly errors?: QuoteErrors; readonly message?: string };

export const EMPTY_QUOTE_INPUT: QuoteInput = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
  company: "",
};

const PHONE_STRIP = /[\s\-()]/g;
const DIGITS_ONLY = /^\d+$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isServiceValue(value: string): value is ServiceValue {
  return SERVICE_OPTIONS.some((option) => option.value === value);
}

export function serviceLabel(value: ServiceValue): string {
  const match = SERVICE_OPTIONS.find((option) => option.value === value);
  return match ? match.label : value;
}

/** Removes spaces, dashes, parentheses, and one leading plus sign. */
function phoneDigits(phone: string): string {
  const stripped = phone.replace(PHONE_STRIP, "");
  return stripped.startsWith("+") ? stripped.slice(1) : stripped;
}

/** Collapses runs of whitespace in single-line fields and trims the ends. */
function cleanLine(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

/** Returns an error message for one field, or undefined when the value is valid. */
export function validateQuoteField(field: QuoteField, rawValue: string): string | undefined {
  switch (field) {
    case "name": {
      const value = cleanLine(rawValue);
      if (value.length === 0) return "Enter your name.";
      if (value.length < QUOTE_LIMITS.nameMin) return `Your name needs at least ${QUOTE_LIMITS.nameMin} characters.`;
      if (value.length > QUOTE_LIMITS.nameMax) return `Keep your name to ${QUOTE_LIMITS.nameMax} characters or fewer.`;
      return undefined;
    }
    case "phone": {
      const value = rawValue.trim();
      if (value.length === 0) return "Enter your phone number.";
      if (value.length > QUOTE_LIMITS.phoneMax) return `Keep your phone number to ${QUOTE_LIMITS.phoneMax} characters or fewer.`;
      const digits = phoneDigits(value);
      if (!DIGITS_ONLY.test(digits) || digits.length < QUOTE_LIMITS.phoneMinDigits) {
        return `Enter a phone number with at least ${QUOTE_LIMITS.phoneMinDigits} digits, for example 780 555 0123.`;
      }
      return undefined;
    }
    case "email": {
      const value = cleanLine(rawValue);
      if (value.length === 0) return undefined; // Optional
      if (value.length > QUOTE_LIMITS.emailMax) return `Keep your email to ${QUOTE_LIMITS.emailMax} characters or fewer.`;
      if (!EMAIL_REGEX.test(value)) return "Enter a valid email address.";
      return undefined;
    }
    case "service": {
      if (rawValue.length === 0) return "Choose the service you need.";
      if (!isServiceValue(rawValue)) return "Choose one of the listed services.";
      return undefined;
    }
    case "message": {
      if (rawValue.trim().length > QUOTE_LIMITS.messageMax) {
        return `Keep your message to ${QUOTE_LIMITS.messageMax} characters or fewer.`;
      }
      return undefined;
    }
  }
}

/** Validates every field and returns either clean data or a map of errors. */
export function validateQuote(input: QuoteInput): QuoteValidationResult {
  const errors: QuoteErrors = {};
  for (const field of QUOTE_FIELDS) {
    const message = validateQuoteField(field, input[field]);
    if (message) errors[field] = message;
  }

  const service = input.service;
  if (Object.keys(errors).length > 0 || !isServiceValue(service)) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name: cleanLine(input.name),
      phone: input.phone.trim(),
      email: cleanLine(input.email),
      service,
      message: input.message.trim(),
    },
  };
}

/** Returns the first field (in form order) that has an error. */
export function firstInvalidField(errors: QuoteErrors): QuoteField | undefined {
  return QUOTE_FIELDS.find((field) => errors[field] !== undefined);
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

/** Reads an optional string property, capping its length so oversized values cannot grow. */
function readString(record: Record<string, unknown>, key: string, max: number): string | null {
  const value = record[key];
  if (value === undefined || value === null) return "";
  if (typeof value !== "string") return null;
  // Keep one character over the limit so validation still reports "too long".
  return value.slice(0, max + 1);
}

/**
 * Type guard for request JSON. Returns null when the shape is wrong
 * (not an object, or a field that is present but not a string).
 */
export function parseQuoteBody(body: unknown): QuoteInput | null {
  if (!isRecord(body)) return null;
  const name = readString(body, "name", QUOTE_LIMITS.nameMax * 2);
  const phone = readString(body, "phone", QUOTE_LIMITS.phoneMax);
  const email = readString(body, "email", QUOTE_LIMITS.emailMax * 2);
  const service = readString(body, "service", 20);
  const message = readString(body, "message", QUOTE_LIMITS.messageMax * 2);
  const company = readString(body, "company", QUOTE_LIMITS.honeypotMax);
  if (name === null || phone === null || email === null || service === null || message === null || company === null) {
    return null;
  }
  return { name, phone, email, service, message, company };
}

/** Type guard for the API response, used by the client. */
export function isQuoteApiResponse(value: unknown): value is QuoteApiResponse {
  if (!isRecord(value) || typeof value.ok !== "boolean") return false;
  if (value.ok) return true;
  const { errors, message } = value;
  if (message !== undefined && typeof message !== "string") return false;
  if (errors !== undefined) {
    if (!isRecord(errors)) return false;
    for (const [key, entry] of Object.entries(errors)) {
      if (!QUOTE_FIELDS.some((field) => field === key) || typeof entry !== "string") return false;
    }
  }
  return true;
}
