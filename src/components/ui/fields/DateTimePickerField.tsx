"use client";

import { useRef, useState } from "react";
import { CalendarIcon } from "@/components/icons";
import { cx } from "@/lib/cx";
import { CONTROL_BASE, controlBorderClass, FieldShell, fieldErrorId } from "./FieldShell";

export interface DateTimePickerFieldProps {
  readonly id: string;
  readonly name: string;
  readonly label: string;
  readonly value: string;
  readonly error?: string;
  readonly required?: boolean;
  readonly min?: string;
  readonly onChange: (value: string) => void;
  readonly onBlur?: () => void;
}

/**
 * Native Browser Date & Time Picker with a Custom Floating Label / Placeholder:
 * - Unfocused & empty: renders as type="text" so the custom placeholder sits centered in text-ink-muted with NO browser default "dd/mm/yyyy --:--" clutter.
 * - Focused or filled: dynamically activates native type="datetime-local" and opens the browser's native picker via showPicker(), allowing full custom hour, minute, and date selection native to the user's OS.
 */
export function DateTimePickerField({
  id,
  name,
  label,
  value,
  error,
  required,
  min,
  onChange,
  onBlur,
}: DateTimePickerFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const hasError = typeof error === "string" && error.length > 0;
  const isFloating = isFocused || Boolean(value);

  const labelStateClass = hasError
    ? "border-danger text-danger bg-white top-0 -translate-y-1/2 type-small font-medium"
    : isFocused
      ? "border-primary text-primary bg-white top-0 -translate-y-1/2 type-small font-medium"
      : value
        ? "border-input-border text-ink-muted bg-white top-0 -translate-y-1/2 type-small font-medium"
        : "border-transparent bg-transparent top-1/2 -translate-y-1/2 text-base font-normal text-ink-muted";

  const handleFocus = () => {
    setIsFocused(true);
    // Open native browser picker dialog on click / focus
    try {
      inputRef.current?.showPicker?.();
    } catch {
      // Browsers without showPicker or on subsequent focus ignore safely
    }
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const handleClick = () => {
    try {
      inputRef.current?.showPicker?.();
    } catch {
      // Ignored if showPicker is unsupported
    }
  };

  return (
    <FieldShell id={id} error={error}>
      <div className="relative flex">
        <input
          ref={inputRef}
          id={id}
          name={name}
          type={isFloating ? "datetime-local" : "text"}
          value={value}
          required={required}
          min={min}
          placeholder=" "
          aria-invalid={hasError || undefined}
          aria-describedby={hasError ? fieldErrorId(id) : undefined}
          onChange={(e) => onChange(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={handleClick}
          className={cx(
            CONTROL_BASE,
            "peer h-12 rounded-pill px-6 cursor-pointer",
            isFloating && "[color-scheme:light] pr-10 [&::-webkit-calendar-picker-indicator]:cursor-pointer",
            controlBorderClass(hasError),
            isFocused && "border-primary",
          )}
        />

        {/* Custom Floating Label / Placeholder */}
        <label
          htmlFor={id}
          className={cx(
            "pointer-events-none absolute left-4 px-2 transition-all duration-150 ease-brand border-[1.5px] rounded-pill",
            labelStateClass,
          )}
        >
          {label}
        </label>

        {/* Calendar Icon when resting */}
        {!isFloating ? (
          <CalendarIcon
            size={18}
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-primary"
          />
        ) : null}
      </div>
    </FieldShell>
  );
}
