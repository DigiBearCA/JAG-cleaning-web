"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { SelectField } from "@/components/ui/fields/SelectField";
import { TextAreaField } from "@/components/ui/fields/TextAreaField";
import { TextField } from "@/components/ui/fields/TextField";
import { SITE } from "@/config/site";
import { telHref, whatsappHref } from "@/lib/contact-links";
import { cx } from "@/lib/cx";
import {
  EMPTY_QUOTE_INPUT,
  firstInvalidField,
  isQuoteApiResponse,
  SERVICE_OPTIONS,
  validateQuote,
  validateQuoteField,
  type QuoteApiResponse,
  type QuoteErrors,
  type QuoteField,
  type QuoteInput,
  type ServiceValue,
} from "@/lib/quote-validation";

type FormStatus = "idle" | "submitting" | "success" | "error";

export interface QuoteFormProps {
  /** Pre-selects the service, for example on a service page. */
  readonly defaultService?: ServiceValue;
  /** Id for the card, for example "quote" on the Contact page. */
  readonly id?: string;
  /** Id of a visible heading that names the form. */
  readonly labelledBy?: string;
  readonly className?: string;
}

const MESSAGES = {
  fixFields: "Please check the highlighted fields and try again.",
  network: "We could not send your request. Check your connection and try again.",
  tooMany: "You have sent a few requests in a short time. Please wait a few minutes and try again.",
  generic: "We could not send your request just now. Please try again in a minute.",
} as const;

function messageFor(status: number, body: QuoteApiResponse | null): string {
  if (body && !body.ok && typeof body.message === "string" && body.message.length > 0) return body.message;
  if (status === 429) return MESSAGES.tooMany;
  return MESSAGES.generic;
}

/**
 * The site's only form. Validates on submit (and on blur after the first attempt) with the
 * same rules as the server, posts JSON to /api/quote, and handles idle, submitting,
 * success, and error states. Entered values are kept on error.
 */
export function QuoteForm({ defaultService, id, labelledBy, className }: QuoteFormProps) {
  const prefix = useId();
  const [values, setValues] = useState<QuoteInput>({ ...EMPTY_QUOTE_INPUT, service: defaultService ?? "" });
  const [errors, setErrors] = useState<QuoteErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formMessage, setFormMessage] = useState("");
  const [attempted, setAttempted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const inFlight = useRef(false);

  useEffect(() => {
    if (status === "success") successHeadingRef.current?.focus();
  }, [status]);

  const fieldId = (field: keyof QuoteInput) => `${prefix}-${field}`;

  function focusField(field: QuoteField) {
    formRef.current?.querySelector<HTMLElement>(`[name="${field}"]`)?.focus();
  }

  function formatPhone(value: string) {
    const digits = value.replace(/\D/g, "");
    if (!digits) return "";
    if (digits.startsWith("1") && digits.length > 1) {
      const rest = digits.slice(1);
      if (rest.length <= 3) return `1 (${rest}`;
      if (rest.length <= 6) return `1 (${rest.slice(0, 3)}) ${rest.slice(3)}`;
      return `1 (${rest.slice(0, 3)}) ${rest.slice(3, 6)}-${rest.slice(6, 10)}`;
    }
    if (digits.length <= 3) return `(${digits}`;
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
  }

  function handleChange(field: keyof QuoteInput, value: string) {
    if (field === "phone") {
      value = formatPhone(value);
    }
    setValues((current) => ({ ...current, [field]: value }));
    if (field !== "company" && errors[field] !== undefined) {
      setErrors((current) => ({ ...current, [field]: validateQuoteField(field, value) }));
    }
  }

  function handleBlur(field: QuoteField) {
    if (!attempted) return;
    setErrors((current) => ({ ...current, [field]: validateQuoteField(field, values[field]) }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (inFlight.current) return;
    setAttempted(true);

    const result = validateQuote(values);
    if (!result.ok) {
      setErrors(result.errors);
      setStatus("idle");
      setFormMessage("");
      const first = firstInvalidField(result.errors);
      if (first) focusField(first);
      return;
    }

    inFlight.current = true;
    setErrors({});
    setFormMessage("");
    setStatus("submitting");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(values),
      });
      const raw: unknown = await response.json().catch(() => null);
      const body = isQuoteApiResponse(raw) ? raw : null;

      if (response.ok && body?.ok === true) {
        setStatus("success");
        return;
      }

      if (body && !body.ok && body.errors && Object.keys(body.errors).length > 0) {
        setErrors(body.errors);
        setStatus("error");
        setFormMessage(MESSAGES.fixFields);
        const first = firstInvalidField(body.errors);
        if (first) focusField(first);
        return;
      }

      setStatus("error");
      setFormMessage(messageFor(response.status, body));
    } catch {
      setStatus("error");
      setFormMessage(MESSAGES.network);
    } finally {
      inFlight.current = false;
    }
  }

  const submitting = status === "submitting";

  return (
    <div id={id} className={cx("rounded-card border border-line bg-snow p-6 text-ink md:p-8", className)}>
      {status === "success" ? (
        <div className="flex flex-col gap-4">
          <h3 ref={successHeadingRef} tabIndex={-1} className="type-h3 text-primary">
            Thanks, we have your request.
          </h3>
          <p className="type-body text-ink">
            {SITE.responseTime ?? "We will get back to you soon with your free quote."} If it is urgent, call or message us.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href={telHref()} variant="primary" icon="phone">
              Call {SITE.phone.display}
            </Button>
            <Button href={whatsappHref()} variant="outline" icon="whatsapp">
              WhatsApp
            </Button>
          </div>
        </div>
      ) : (
        <form
          ref={formRef}
          noValidate
          onSubmit={handleSubmit}
          aria-labelledby={labelledBy}
          aria-label={labelledBy ? undefined : "Request a free quote"}
          className="flex flex-col gap-4"
        >
          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              id={fieldId("name")}
              name="name"
              label="Name"
              autoComplete="name"
              required
              value={values.name}
              error={errors.name}
              onChange={(event) => handleChange("name", event.target.value)}
              onBlur={() => handleBlur("name")}
            />
            <TextField
              id={fieldId("phone")}
              name="phone"
              type="tel"
              label="Phone number"
              autoComplete="tel"
              inputMode="tel"
              required
              value={values.phone}
              error={errors.phone}
              onChange={(event) => handleChange("phone", event.target.value)}
              onBlur={() => handleBlur("phone")}
            />
            <TextField
              id={fieldId("email")}
              name="email"
              type="email"
              label="Email (optional)"
              autoComplete="email"
              inputMode="email"
              value={values.email}
              error={errors.email}
              onChange={(event) => handleChange("email", event.target.value)}
              onBlur={() => handleBlur("email")}
            />
            <div className="flex flex-col md:row-span-2 md:min-h-0 md:[&>*]:h-full md:[&_textarea]:h-full md:[&_textarea]:min-h-0 md:[&_textarea]:resize-none [&_textarea]:min-h-28">
              <TextAreaField
                id={fieldId("message")}
                name="message"
                label="Anything else we should know? (optional)"
                rows={1}
                value={values.message}
                error={errors.message}
                onChange={(event) => handleChange("message", event.target.value)}
                onBlur={() => handleBlur("message")}
              />
            </div>
            <SelectField
              id={fieldId("service")}
              name="service"
              label="Service needed"
              placeholder="Choose a service"
              options={SERVICE_OPTIONS}
              required
              value={values.service}
              error={errors.service}
              onChange={(event) => handleChange("service", event.target.value)}
              onBlur={() => handleBlur("service")}
            />
          </div>

          {/* Honeypot: hidden from view, the tab order, and the accessibility tree. */}
          <div className="sr-only" aria-hidden="true">
            <label htmlFor={fieldId("company")}>Company</label>
            <input
              id={fieldId("company")}
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={values.company}
              onChange={(event) => handleChange("company", event.target.value)}
            />
          </div>

          <div>
  <div aria-live="polite" aria-atomic="true">
    {status === "error" && formMessage ? (
      <div className="mb-4 flex flex-col gap-1 rounded-card border-[1.5px] border-danger bg-bg px-6 py-4">
        <p className="type-small font-medium text-danger">{formMessage}</p>
        <p className="type-small text-ink">
          You can also{" "}
          <a href={telHref()} className="font-medium text-primary underline underline-offset-4">
            call {SITE.phone.display}
          </a>{" "}
          or{" "}
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-4"
          >
            message us on WhatsApp
          </a>
          .
        </p>
      </div>
    ) : null}
  </div>

  <Button type="submit" fullWidth loading={submitting}>
    {submitting ? "Sending..." : "Get my free quote"}
  </Button>
</div>
        </form>
      )}
    </div>
  );
}
