import Link from "next/link";
import { SITE } from "@/config/site";
import { cx } from "@/lib/cx";
import { BrandLogo } from "@/components/icons/BrandLogo";

export interface LogoProps {
  readonly tone?: "light" | "dark";
  readonly onClick?: () => void;
  readonly className?: string;
}

/**
 * Brand logo using SVG. Links home.
 */
export function Logo({ tone = "light", onClick, className }: LogoProps) {
  const onDark = tone === "dark";
  return (
    <Link
      href="/"
      onClick={onClick}
      className={cx(
        "inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring",
        onDark ? "text-on-dark" : "text-primary",
        className,
      )}
      aria-label={SITE.name}
    >
      <BrandLogo className="h-10 w-auto sm:h-12" />
    </Link>
  );
}
