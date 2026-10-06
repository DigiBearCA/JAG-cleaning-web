import {
  gridWindows,
  Snowfall,
  Sparkle,
  SvgFrame,
  WindowGrid,
  type IllustrationProps,
  type SnowDot,
} from "./shared";

const OFFICE_WINDOWS = gridWindows(322, 176, 46, 40, 3, 6, [
  "2,0",
  "1,1",
  "0,3",
  "2,4",
]);

const SNOW: ReadonlyArray<SnowDot> = [
  { x: 56, y: 64, r: 5 },
  { x: 132, y: 124, r: 4 },
  { x: 38, y: 210, r: 4 },
  { x: 246, y: 72, r: 6 },
  { x: 196, y: 160, r: 3.5 },
  { x: 334, y: 92, r: 4 },
  { x: 400, y: 132, r: 3.5 },
  { x: 520, y: 172, r: 4.5 },
  { x: 506, y: 270, r: 5 },
  { x: 30, y: 312, r: 3.5 },
  { x: 268, y: 186, r: 3 },
];

/** Home page hero: a snow-covered house beside an office building on a calm winter day. */
export function HeroIllustration({ label, className }: IllustrationProps) {
  return (
    <SvgFrame viewBox="0 0 560 520" label={label} className={className}>
      <rect width="560" height="520" className="fill-illus-sky" />

      <Sparkle cx={474} cy={92} r={36} className="fill-accent" />
      <Sparkle cx={420} cy={58} r={14} className="fill-illus-ground" />

      {/* Office building */}
      <rect
        x="320"
        y="134"
        width="130"
        height="24"
        rx="4"
        className="fill-illus-body"
      />
      <rect
        x="300"
        y="150"
        width="170"
        height="310"
        rx="6"
        className="fill-illus-body"
      />
      <WindowGrid windows={OFFICE_WINDOWS} width={30} height={24} />
      <rect
        x="365"
        y="414"
        width="40"
        height="46"
        rx="4"
        className="fill-illus-detail"
      />

      {/* House */}
      <rect
        x="225"
        y="222"
        width="26"
        height="60"
        className="fill-illus-detail stroke-illus-body"
        strokeWidth={1.5}
      />
      <rect
        x="80"
        y="300"
        width="210"
        height="160"
        className="fill-illus-body"
      />
      <path
        d="M60 312 185 206l125 106Z"
        className="fill-illus-detail stroke-illus-body"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M165 460v-64a20 20 0 0 1 40 0v64Z"
        className="fill-illus-detail"
      />
      <rect
        x="104"
        y="336"
        width="42"
        height="42"
        rx="4"
        className="fill-accent"
      />
      <rect
        x="224"
        y="336"
        width="42"
        height="42"
        rx="4"
        className="fill-accent"
      />
      <path
        d="M125 336v42M104 357h42M245 336v42M224 357h42"
        className="stroke-illus-body"
        strokeWidth={1.5}
      />

      {/* Snowy ground with a cleared path to the door */}
      <path
        d="M0 450C140 428 420 428 560 450V520H0Z"
        className="fill-illus-ground"
      />
      <path d="M168 438h34l22 82h-78Z" className="fill-illus-sky" />

      <Snowfall dots={SNOW} className="fill-illus-ground" />
    </SvgFrame>
  );
}
