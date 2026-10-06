import type { ReactNode, SVGProps } from "react";

export interface IconProps extends Omit<
  SVGProps<SVGSVGElement>,
  "children" | "width" | "height"
> {
  /** Rendered width and height in px. Defaults to 24. */
  readonly size?: number;
  /** Accessible name. When omitted the icon is decorative and hidden from assistive tech. */
  readonly title?: string;
}

interface IconBaseProps extends IconProps {
  readonly children: ReactNode;
}

/** Shared 24px outline frame: currentColor stroke, 1.5px, round caps and joins. Server-safe. */
export function IconBase({
  size = 24,
  title,
  children,
  ...rest
}: IconBaseProps) {
  const labelled = typeof title === "string" && title.length > 0;
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      focusable="false"
      aria-hidden={labelled ? undefined : true}
      role={labelled ? "img" : undefined}
      aria-label={labelled ? title : undefined}
      {...rest}
    >
      {children}
    </svg>
  );
}
