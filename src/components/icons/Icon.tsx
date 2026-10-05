import type { IconProps } from "./IconBase";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  BriefcaseIcon,
  BroomIcon,
  BuildingIcon,
  CalendarIcon,
  CheckIcon,
  ChevronDownIcon,
  ClockIcon,
  CloseIcon,
  DebrisIcon,
  FacebookIcon,
  HammerIcon,
  HomeIcon,
  InstagramIcon,
  KeyIcon,
  LeafIcon,
  MailIcon,
  MapPinIcon,
  MenuIcon,
  MinusIcon,
  PhoneIcon,
  PlusIcon,
  ReceiptIcon,
  RugIcon,
  ScrubberIcon,
  ShieldIcon,
  SnowflakeIcon,
  SparkleIcon,
  TilesIcon,
  WallIcon,
  WhatsAppIcon,
} from "./icons";

const ICONS = {
  home: HomeIcon,
  building: BuildingIcon,
  briefcase: BriefcaseIcon,
  rug: RugIcon,
  tiles: TilesIcon,
  scrubber: ScrubberIcon,
  debris: DebrisIcon,
  leaf: LeafIcon,
  hammer: HammerIcon,
  wall: WallIcon,
  snowflake: SnowflakeIcon,
  phone: PhoneIcon,
  whatsapp: WhatsAppIcon,
  mail: MailIcon,
  mapPin: MapPinIcon,
  clock: ClockIcon,
  check: CheckIcon,
  arrowRight: ArrowRightIcon,
  arrowUpRight: ArrowUpRightIcon,
  chevronDown: ChevronDownIcon,
  plus: PlusIcon,
  minus: MinusIcon,
  menu: MenuIcon,
  close: CloseIcon,
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  calendar: CalendarIcon,
  shield: ShieldIcon,
  receipt: ReceiptIcon,
  sparkle: SparkleIcon,
  broom: BroomIcon,
  key: KeyIcon,
} as const;

/** Icon names usable from typed content files. */
export type IconName = keyof typeof ICONS;

export interface NamedIconProps extends IconProps {
  readonly name: IconName;
}

/** Renders an icon by name so content files can reference icons as plain strings. */
export function Icon({ name, ...props }: NamedIconProps) {
  const Component = ICONS[name];
  return <Component {...props} />;
}
