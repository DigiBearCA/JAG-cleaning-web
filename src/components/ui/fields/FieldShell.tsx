import type { ReactNode } from "react";

export interface FieldShellProps {
  readonly id: string;
  readonly error?: string;
  readonly children: ReactNode;
}

/** Id of the error message for a field, for aria-describedby. */
export function fieldErrorId(id: string): string {
  return `${id}-error`;
}

/** Shared wrapper and error message for form fields. */
export function FieldShell({ id, error, children }: FieldShellProps) {
  return (
    <div className="flex flex-col gap-2">
      {children}
      {error ? (
        <p id={fieldErrorId(id)} className="pl-6 type-small text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Shared control classes: 1.5px border, white background, 16px ink text, primary focus border. */
export function controlBorderClass(hasError: boolean): string {
  return hasError ? "border-danger" : "border-input-border focus:border-primary";
}

export const CONTROL_BASE =
  "w-full border-[1.5px] bg-white type-body text-ink transition duration-150 ease-brand placeholder:text-ink-muted focus:outline-none";
