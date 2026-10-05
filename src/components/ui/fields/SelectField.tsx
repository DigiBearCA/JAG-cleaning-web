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
  const labelBorder = hasError ? "border-danger peer-focus:border-danger" : "border-input-border peer-focus:border-primary";
  
  return (
    <FieldShell id={id} error={error}>
      <div className="relative flex">
        <select
          id={id}
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? fieldErrorId(id) : undefined}
          className={cx(CONTROL_BASE, "peer h-12 cursor-pointer appearance-none rounded-pill pr-12 pl-6", controlBorderClass(hasError))}
          {...rest}
        >
          {placeholder ? (
            <option value="" disabled>
              {/* Note: don't show text in the option if we are floating a label */}
            </option>
          ) : null}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label
          htmlFor={id}
          className={cx(
            "pointer-events-none absolute left-4 top-0 -translate-y-1/2 bg-white px-2 type-small font-medium text-ink-muted transition-all duration-150 ease-brand border-[1.5px] rounded-pill",
            labelBorder,
            "peer-invalid:top-1/2 peer-invalid:-translate-y-1/2 peer-invalid:border-transparent peer-invalid:bg-transparent peer-invalid:text-base peer-invalid:font-normal",
            "peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:bg-white peer-focus:type-small peer-focus:font-medium peer-focus:text-primary",
            hasError && "peer-focus:text-danger"
          )}
        >
          {label}
        </label>
        <ChevronDownIcon
          size={20}
          className="pointer-events-none absolute top-1/2 right-5 -translate-y-1/2 text-primary"
        />
      </div>
    </FieldShell>
  );
}
