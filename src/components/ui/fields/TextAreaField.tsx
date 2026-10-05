import type { ComponentPropsWithRef } from "react";
import { cx } from "@/lib/cx";
import { CONTROL_BASE, controlBorderClass, FieldShell, fieldErrorId } from "./FieldShell";

export type TextAreaFieldProps = {
  readonly id: string;
  readonly label: string;
  readonly error?: string;
} & Omit<ComponentPropsWithRef<"textarea">, "id" | "className" | "aria-invalid" | "aria-describedby">;

/** Multi-line field: 24px radius (never a pill), 16px by 24px padding, 120px minimum, vertical resize. */
export function TextAreaField({ id, label, error, rows = 4, ...rest }: TextAreaFieldProps) {
  const hasError = typeof error === "string" && error.length > 0;
  return (
    <FieldShell id={id} label={label} error={error}>
      <textarea
        id={id}
        rows={rows}
        aria-invalid={hasError || undefined}
        aria-describedby={hasError ? fieldErrorId(id) : undefined}
        className={cx(CONTROL_BASE, "min-h-30 resize-y rounded-card px-6 py-4", controlBorderClass(hasError))}
        {...rest}
      />
    </FieldShell>
  );
}
