import type { ComponentPropsWithRef } from "react";
import { cx } from "@/lib/cx";
import { CONTROL_BASE, controlBorderClass, FieldShell, fieldErrorId } from "./FieldShell";

export type TextAreaFieldProps = {
  readonly id: string;
  readonly label: string;
  readonly error?: string;
} & Omit<ComponentPropsWithRef<"textarea">, "id" | "className" | "aria-invalid" | "aria-describedby">;

/** Multi-line field: 24px radius (never a pill), 16px by 24px padding, 120px minimum, vertical resize. */
export function TextAreaField({ id, label, error, rows, ...rest }: TextAreaFieldProps) {
  const hasError = typeof error === "string" && error.length > 0;
  const labelBorder = hasError ? "border-danger peer-focus:border-danger" : "border-input-border peer-focus:border-primary";
  
  return (
    <FieldShell id={id} error={error}>
      <div className="relative flex h-full">
        <textarea
          id={id}
          rows={rows}
          placeholder=" "
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? fieldErrorId(id) : undefined}
          className={cx(CONTROL_BASE, "peer h-full min-h-28 resize-y rounded-[24px] px-6 pt-5 pb-4", controlBorderClass(hasError))}
          {...rest}
        />
        <label
          htmlFor={id}
          className={cx(
            "pointer-events-none absolute left-4 top-0 -translate-y-1/2 bg-white px-2 type-small font-medium text-ink-muted transition-all duration-150 ease-brand border-[1.5px] rounded-pill",
            labelBorder,
            "peer-placeholder-shown:top-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:border-transparent peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-base peer-placeholder-shown:font-normal",
            "peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:bg-white peer-focus:type-small peer-focus:font-medium peer-focus:text-primary",
            hasError && "peer-focus:text-danger"
          )}
        >
          {label}
        </label>
      </div>
    </FieldShell>
  );
}
