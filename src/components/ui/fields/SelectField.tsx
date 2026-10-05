import type { ComponentPropsWithRef } from "react";
import { ChevronDownIcon } from "@/components/icons";
import { cx } from "@/lib/cx";
import { CONTROL_BASE, controlBorderClass, FieldShell, fieldErrorId } from "./FieldShell";

export interface SelectOption {
  readonly value: string;
  readonly label: string;
}

export type SelectFieldProps = {
  readonly id: string;
  readonly label: string;
  readonly options: ReadonlyArray<SelectOption>;
  /** Text for the empty first option. */
  readonly placeholder?: string;
  readonly error?: string;
} & Omit<ComponentPropsWithRef<"select">, "id" | "className" | "children" | "aria-invalid" | "aria-describedby">;

/** Native select styled as a pill, with a custom chevron inside on the right. */
export function SelectField({ id, label, options, placeholder, error, ...rest }: SelectFieldProps) {
  const hasError = typeof error === "string" && error.length > 0;
  return (
    <FieldShell id={id} label={label} error={error}>
      <div className="relative">
        <select
          id={id}
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? fieldErrorId(id) : undefined}
          className={cx(CONTROL_BASE, "h-12 cursor-pointer appearance-none rounded-pill pr-12 pl-6", controlBorderClass(hasError))}
          {...rest}
        >
          {placeholder ? (
            <option value="" disabled>
              {placeholder}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDownIcon
          size={20}
          className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-primary"
        />
      </div>
    </FieldShell>
  );
}
