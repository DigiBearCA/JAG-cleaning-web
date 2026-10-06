import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/icons";
import { cx } from "@/lib/cx";

export interface ChipProps {
  readonly icon?: IconName;
  /** On alt sections the chip background matches the section, so switch to a white chip. */
  readonly surface?: "base" | "alt";
  readonly className?: string;
  readonly children: ReactNode;
}

/** Pill tag: chip colours, 14/22 medium, 4px by 12px padding, optional 16px icon. */
export function Chip({
  icon,
  surface = "base",
  className,
  children,
}: ChipProps) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded-pill px-3 py-1 type-small font-medium",
        surface === "base" ? "bg-chip text-chip-fg" : "bg-white text-primary",
        className,
      )}
    >
      {icon ? <Icon name={icon} size={16} className="shrink-0" /> : null}
      {children}
    </span>
  );
}
