import type { ReactNode, SVGProps } from "react";
import { cx } from "@/lib/cx";

export function SceneFrame({
  children,
  className,
  ...props
}: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cx("block w-full h-auto", className)}
      {...props}
    >
      <rect width="400" height="300" className="fill-illus-sky" />
      {children}
    </svg>
  );
}
