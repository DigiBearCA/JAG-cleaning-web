import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export interface ContainerProps {
  readonly className?: string;
  readonly children: ReactNode;
}

/** 1120px max width, 16px side padding on mobile and 24px from 768px. */
export function Container({ className, children }: ContainerProps) {
  return <div className={cx("mx-auto w-full max-w-280 px-4 md:px-6", className)}>{children}</div>;
}
