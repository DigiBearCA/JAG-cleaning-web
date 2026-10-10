import type { ComponentPropsWithRef } from "react";
import { cx } from "@/lib/cx";
import { CONTROL_BASE, controlBorderClass, FieldShell, fieldErrorId } from "./FieldShell";

export type TextFieldProps = {
  readonly id: string;
  readonly label: string;
  readonly error?: string;
  readonly floatLabel?: boolean;
} & Omit<ComponentPropsWithRef<"input">, "id" | "className" | "aria-invalid" | "aria-describedby">;

/** Single-line pill input, 48px tall, with a visible label and linked error message. */
export function TextField({ id, label, error, type = "text", floatLabel, ...rest }: TextFieldProps) {
  const hasError = typeof error === "string" && error.length > 0;
  const labelBorder = hasError ? "border-danger peer-focus:border-danger" : "border-input-border peer-focus:border-primary";
  const shouldAlwaysFloat = floatLabel || type === "datetime-local" || type === "date";
  
  return (
    <FieldShell id={id} error={error}>
      <div className="relative flex">
        <input
          id={id}
          type={type}
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? fieldErrorId(id) : undefined}
          {...rest}
          placeholder=" "
          className={cx(
            CONTROL_BASE,
            "peer h-12 rounded-pill px-6",
            type === "datetime-local" && "[color-scheme:light] [&::-webkit-calendar-picker-indicator]:cursor-pointer",
            controlBorderClass(hasError)
          )}
        />
        <label
          htmlFor={id}
          className={cx(
            "pointer-events-none absolute left-4 top-0 -translate-y-1/2 bg-white px-2 type-small font-medium text-ink-muted transition-all duration-150 ease-brand border-[1.5px] rounded-pill",
            labelBorder,
            !shouldAlwaysFloat &&
              "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:border-transparent peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:bg-white peer-focus:type-small peer-focus:font-medium peer-focus:text-primary",
            shouldAlwaysFloat && "peer-focus:text-primary",
            hasError && "peer-focus:text-danger"
          )}
        >
          {label}
        </label>
      </div>
    </FieldShell>
  );
}
