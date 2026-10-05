import { IconBase, type IconProps } from "./IconBase";

/* Custom outline icons on a 24px grid, at least 2px inside the box. Pure and server-safe. */

export function HomeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M3.5 10.5 12 3.75l8.5 6.75" />
      <path d="M6 9v10a1 1 0 0 0 1 1h3.25v-5.5h3.5V20H17a1 1 0 0 0 1-1V9" />
    </IconBase>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 20V5a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v15" />
      <path d="M15 9h3a1 1 0 0 1 1 1v10" />
      <path d="M3 20h18" />
      <path d="M8 8h1M11 8h1M8 11.5h1M11 11.5h1M8 15h1M11 15h1" />
      <path d="M17 13h.01M17 16.5h.01" />
    </IconBase>
  );
}

export function SnowflakeIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9" />
      <path d="M9.5 4.5 12 6l2.5-1.5M9.5 19.5 12 18l2.5 1.5" />
      <path d="M17.3 6.1 17.2 9l2.5 1.4M19.7 13.6 17.2 15l.1 2.9" />
      <path d="M6.7 6.1 6.8 9l-2.5 1.4M4.3 13.6 6.8 15l-.1 2.9" />
    </IconBase>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5.5 4h3l1.5 4-2 1.25a10.5 10.5 0 0 0 6.75 6.75L16 14l4 1.5v3a2 2 0 0 1-2 2C10.27 20.5 3.5 13.73 3.5 6a2 2 0 0 1 2-2z" />
    </IconBase>
  );
}

/** Simplified speech bubble with a handset. Intentionally not the trademarked logo. */
export function WhatsAppIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M20.25 12a8.25 8.25 0 0 1-12.1 7.3L3.75 20.25l1-4.15A8.25 8.25 0 1 1 20.25 12z" />
      <path d="M9.25 8.5h1.1l.9 2-.85.85a4.6 4.6 0 0 0 2.25 2.25l.85-.85 2 .9v1.1a1 1 0 0 1-1 1A6.25 6.25 0 0 1 8.25 9.5a1 1 0 0 1 1-1z" />
    </IconBase>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.75 6.75 8.25 6.5 8.25-6.5" />
    </IconBase>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}

export function ClockIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </IconBase>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </IconBase>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </IconBase>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M7 17 17 7M8.5 7H17v8.5" />
    </IconBase>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m6 9 6 6 6-6" />
    </IconBase>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 5v14M5 12h14" />
    </IconBase>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M5 12h14" />
    </IconBase>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </IconBase>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </IconBase>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17 7h.01" />
    </IconBase>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M15.5 4H14a3.5 3.5 0 0 0-3.5 3.5V20" />
      <path d="M7.5 11h7" />
    </IconBase>
  );
}

export function CalendarIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" />
    </IconBase>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3.25 19 6v5.5c0 4.5-3 8-7 9.25-4-1.25-7-4.75-7-9.25V6z" />
      <path d="m9 12 2 2 4-4" />
    </IconBase>
  );
}

export function ReceiptIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M6 3.5h12v17l-2-1.5-2 1.5-2-1.5-2 1.5-2-1.5-2 1.5z" />
      <path d="M9 8h6M9 11.5h6M9 15h3.5" />
    </IconBase>
  );
}

/** Four-point sparkle. */
export function SparkleIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 3c.7 5 2.3 8.3 9 9-6.7.7-8.3 4-9 9-.7-5-2.3-8.3-9-9 6.7-.7 8.3-4 9-9z" />
    </IconBase>
  );
}

export function BroomIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="m19.5 4.5-7.25 7.25" />
      <path d="m10 9.5 4.5 4.5" />
      <path d="M10.75 10.25 6.5 13c-1.4.9-2.1 3.5-2.25 6.75 3.25-.15 5.85-.85 6.75-2.25l2.75-4.25" />
      <path d="m7.25 16.75-1.5 1.5M9.5 16.25l-1.25 2" />
    </IconBase>
  );
}

export function KeyIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <circle cx="8" cy="16" r="4" />
      <path d="m10.85 13.15 8.4-8.4M16.5 7.5l2 2M14 10l1.5 1.5" />
    </IconBase>
  );
}
