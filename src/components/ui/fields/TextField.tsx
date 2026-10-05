import type { ComponentPropsWithRef } from "react";
import { cx } from "@/lib/cx";
import { CONTROL_BASE, controlBorderClass, FieldShell, fieldErrorId } from "./FieldShell";

export type TextFieldProps = {
  readonly id: string;
  readonly label: string;
  readonly error?: string;
} & Omit<ComponentPropsWithRef<"input">, "id" | "className" | "aria-invalid" | "aria-describedby">;

/** Single-line pill input, 48px tall, with a visible label and linked error message. */
export function TextField({ id, label, error, type = "text", ...rest }: TextFieldProps) {
  const hasError = typeof error === "string" && error.length > 0;
  return (
    <FieldShell id={id} label={label} error={error}>
      <input
        id={id}
        type={type}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? fieldErrorId(id) : undefined}
        className={cx(CONTROL_BASE, "h-12 rounded-pill px-6", controlBorderClass(hasError))}
        {...rest}
      />
    </FieldShell>
  );
}
