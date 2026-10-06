import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Icon, type IconName } from "@/components/icons";
import { cx } from "@/lib/cx";

export type ButtonVariant = "accent" | "primary" | "outline";
/** Colour of an outline button, matched to the surface it sits on. */
export type ButtonTone = "onLight" | "onAlt" | "onDark";
/** md: 48px. sm: 40px (header). bar: 48px compact pill for the mobile sticky bar. */
export type ButtonSize = "md" | "sm" | "bar";

interface ButtonStyleProps {
  readonly variant?: ButtonVariant;
  readonly tone?: ButtonTone;
  readonly size?: ButtonSize;
  readonly fullWidth?: boolean;
  readonly icon?: IconName;
  readonly iconPosition?: "start" | "end";
  readonly className?: string;
  readonly children: ReactNode;
}

export type ButtonAsLinkProps = ButtonStyleProps & {
  readonly href: string;
} & Omit<ComponentPropsWithoutRef<"a">, "href" | "className" | "children">;

export type ButtonAsButtonProps = ButtonStyleProps & {
  readonly href?: undefined;
  readonly loading?: boolean;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const BASE =
  "inline-flex shrink-0 items-center justify-center rounded-pill text-center transition duration-150 ease-brand select-none active:scale-98 aria-disabled:cursor-not-allowed aria-disabled:opacity-60 disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100";

const SIZE: Record<ButtonSize, string> = {
  md: "h-12 min-w-30 gap-2 px-7 type-button",
  sm: "h-10 min-w-30 gap-2 px-5 type-button",
  // flex-auto (not flex-1): at 360px equal thirds are ~103px, too narrow for icon + "WhatsApp"; a content basis lets all three labels fit.
  bar: "h-12 min-w-0 flex-auto gap-1.5 px-2.5 type-small font-medium",
};

const SOLID: Record<"accent" | "primary", string> = {
  accent: "bg-accent text-on-accent hover:bg-accent-hover",
  primary: "bg-primary text-on-primary hover:bg-primary-hover",
};

const OUTLINE: Record<ButtonTone, string> = {
  onLight: "border-[1.5px] border-primary text-primary hover:bg-primary/8",
  onAlt:
    "border-[1.5px] border-alt-outline text-alt-outline hover:bg-alt-outline/10",
  onDark: "border-[1.5px] border-on-dark text-on-dark hover:bg-on-dark/10",
};

export interface ButtonClassOptions {
  readonly variant?: ButtonVariant;
  readonly tone?: ButtonTone;
  readonly size?: ButtonSize;
  readonly fullWidth?: boolean;
  readonly className?: string;
}

/** Class string for the pill button, usable on any element. */
export function buttonClasses({
  variant = "accent",
  tone = "onLight",
  size = "md",
  fullWidth = false,
  className,
}: ButtonClassOptions = {}): string {
  return cx(
    BASE,
    SIZE[size],
    variant === "outline" ? OUTLINE[tone] : SOLID[variant],
    fullWidth && "w-full",
    className,
  );
}

function isLinkProps(props: ButtonProps): props is ButtonAsLinkProps {
  return typeof props.href === "string";
}

function isInternalPath(href: string): boolean {
  return href.startsWith("/") && !href.startsWith("//");
}

function isExternalWeb(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}

function ButtonContent({
  icon,
  iconPosition,
  size,
  children,
}: Pick<ButtonStyleProps, "icon" | "iconPosition" | "size" | "children">) {
  const iconNode = icon ? (
    <Icon name={icon} size={size === "bar" ? 18 : 20} className="shrink-0" />
  ) : null;
  return (
    <>
      {iconPosition === "start" ? iconNode : null}
      <span className="min-w-0 truncate">{children}</span>
      {iconPosition === "end" ? iconNode : null}
    </>
  );
}

/**
 * Pill button. Renders next/link for site paths, a plain <a> for tel:, mailto:, hash and
 * external links, or a <button>. All share one look.
 */
export function Button(props: ButtonProps) {
  if (isLinkProps(props)) {
    const {
      variant,
      tone,
      size,
      fullWidth,
      icon,
      iconPosition = "start",
      className,
      children,
      href,
      ...rest
    } = props;
    const classes = buttonClasses({
      variant,
      tone,
      size,
      fullWidth,
      className,
    });
    const content = (
      <ButtonContent icon={icon} iconPosition={iconPosition} size={size}>
        {children}
      </ButtonContent>
    );
    if (isInternalPath(href)) {
      return (
        <Link href={href} className={classes} {...rest}>
          {content}
        </Link>
      );
    }
    const externalProps = isExternalWeb(href)
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a href={href} className={classes} {...externalProps} {...rest}>
        {content}
      </a>
    );
  }

  const {
    variant,
    tone,
    size,
    fullWidth,
    icon,
    iconPosition = "start",
    className,
    children,
    loading = false,
    disabled,
    type = "button",
    ...rest
  } = props;
  return (
    <button
      type={type}
      className={buttonClasses({ variant, tone, size, fullWidth, className })}
      disabled={disabled === true || loading}
      aria-busy={loading || undefined}
      {...rest}
    >
      <ButtonContent icon={icon} iconPosition={iconPosition} size={size}>
        {children}
      </ButtonContent>
    </button>
  );
}
