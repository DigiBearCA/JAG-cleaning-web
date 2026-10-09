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

export function BriefcaseIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M12 12v.01" />
    </IconBase>
  );
}

export function RugIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <rect x="4" y="6" width="16" height="12" rx="1" />
      <path d="M3 8h1M3 12h1M3 16h1M20 8h1M20 12h1M20 16h1" />
    </IconBase>
  );
}

export function TilesIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 4h16v16H4zM12 4v16M4 12h16" />
    </IconBase>
  );
}

export function ScrubberIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M12 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3M18 18H14a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3" />
      <circle cx="16" cy="16" r="4" />
      <path d="M7 6v12M10 6v12" />
    </IconBase>
  );
}

export function DebrisIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 12v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6M8 8l2-2 4 4" />
      <path d="M12 10l-2 3M16 12l-2 4M8 15l2 2" />
    </IconBase>
  );
}

export function LeafIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M11 20c-5.5-2.5-8-7.5-8-12 5 0 9 2 13 6-3.5-3-8.5-4.5-13-4.5C6.5 13 9 17.5 11 20z" />
      <path d="M11 20C11 12 15 7 21 4" />
    </IconBase>
  );
}

export function HammerIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M14 13.5l-6 6a2 2 0 1 1-2.8-2.8l6-6M15 8l4.5 4.5M16.5 6.5l-3 3M19.5 9.5l-3 3" />
      <path d="M12 6a2 2 0 0 1 2.8-2.8l4.5 4.5A2 2 0 0 1 16.5 10.5Z" />
    </IconBase>
  );
}

export function WallIcon(props: IconProps) {
  return (
    <IconBase {...props}>
      <path d="M4 4h16v16H4zM4 10h16M4 16h16M10 4v6M14 10v6M9 16v4" />
    </IconBase>
  );
}
export function ContactIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1254 1254" 
      width={size} 
      height={size}
      fill="none"
      {...rest}
    >
      <path fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round" d="M150 150 C180 140 215 150 245 175 L370 285 C410 320 405 375 370 410 C340 440 300 465 288 490 C280 510 292 540 330 600 C400 700 500 780 600 835 C625 848 650 850 660 835 C675 810 690 760 710 740 C740 715 800 720 845 745 L935 830 C985 880 985 940 950 985 C900 1050 830 1090 740 1088 C600 1085 440 980 280 820 C140 680 40 520 33 390 C33 300 80 210 130 165 Z"/>
      
      <g fill="none" stroke="currentColor" strokeWidth="24" strokeLinecap="round" strokeLinejoin="round">
        <path d="M528 282 H670 Q695 282 695 304 Q695 325 672 325 H528 Z"/>
        <path d="M528 345 H625 Q638 345 638 357 Q638 370 625 370 H528 Z"/>
        <path d="M528 380 H600 Q620 380 624 410 L636 466 H676 Q706 470 706 505 V605 Q706 648 665 648 H565 Q528 645 528 600 Z"/>
      </g>
      <g stroke="currentColor" strokeLinecap="round" fill="none">
        <line x1="732" y1="302" x2="765" y2="302" strokeWidth="24"/>
        <line x1="673" y1="348" x2="694" y2="398" strokeWidth="24"/>
      </g>
      
      <text x="820" y="630" fill="none" stroke="currentColor" strokeWidth="12" fontSize="180" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }} fontWeight="bold">24</text>
    </svg>
  );
}

export function ServicesIcon({ size = 24, ...rest }: IconProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1254 1254" 
      width={size} 
      height={size}
      fill="none"
      {...rest}
    >
      <g fill="none" stroke="currentColor" strokeWidth="27" strokeLinecap="round" strokeLinejoin="round">
        {/* Cap */}
        <path d="M413 110 Q607 20 802 110 L803 262 Q607 190 413 262 Z"/>
        <path d="M421 270 V296 M795 270 V296"/>
    
        {/* Ears with curl */}
        <path d="M437 361 C430 342 412 332 400 352 C390 372 398 405 420 428 L447 442"/>
        <path d="M778 361 C785 342 803 332 815 352 C825 372 817 405 795 428 L768 442"/>
    
        {/* Face / jaw */}
        <path d="M440 452 C446 545 518 617 607 617 C696 617 769 545 775 452"/>
    
        {/* Mask top edge */}
        <path d="M440 443 Q607 432 775 443"/>
    
        {/* Mask side lines */}
        <path d="M497 470 L484 558"/>
        <path d="M718 470 L731 558"/>
        {/* Mask chin */}
        <path d="M524 578 Q607 610 691 578"/>
    
        {/* Collars */}
        <path d="M462 612 L466 712 L540 677"/>
        <path d="M745 612 L741 712 L670 677"/>
    
        {/* Shoulders / arms */}
        <path d="M445 632 Q360 660 318 748"/>
        <path d="M762 635 Q890 680 930 822"/>
    
        {/* Center placket */}
        <path d="M605 738 V1098"/>
    
        {/* Pocket */}
        <path d="M396 832 H528 V948 L462 1003 L396 955 Z"/>
    
        {/* Spray bottle: nozzle head */}
        <path d="M103 539 H274 V675"/>
        <path d="M103 539 V588 H165"/>
        <path d="M150 539 V588"/>
        <path d="M165 590 C165 640 172 665 195 688"/>
        <path d="M288 572 C320 580 330 600 330 630 V672"/>
    
        {/* Spray bottle: hand */}
        <rect x="174" y="690" width="130" height="228" rx="44"/>
        <path d="M247 752 H292 M247 806 H292 M247 862 H292"/>
    
        {/* Spray bottle: body */}
        <path d="M205 928 L172 985 C148 1030 146 1070 148 1100 H346 C350 1070 346 1030 322 985 L270 928"/>
        <path d="M148 1062 H346"/>
    
        {/* Squeegee */}
        <path d="M812 492 H1175"/>
        <path d="M805 542 H1178 V595 H1150 L995 708 L842 595 H805 Z"/>
        <path d="M995 708 V858"/>
        <path d="M925 920 C925 880 955 862 995 862 C1035 862 1060 880 1060 920 V1040 C1060 1080 1035 1100 995 1100 C955 1100 925 1080 925 1040 Z"/>
        <path d="M940 928 H985 M940 985 H985 M940 1040 H985"/>
      </g>
    </svg>
  );
}
