import {
  Snowfall,
  Sparkle,
  SvgFrame,
  type IllustrationProps,
  type SnowDot,
} from "./shared";

const SNOW: ReadonlyArray<SnowDot> = [
  { x: 40, y: 56, r: 5 },
  { x: 118, y: 96, r: 4 },
  { x: 210, y: 48, r: 5.5 },
  { x: 286, y: 112, r: 4 },
  { x: 330, y: 186, r: 3.5 },
  { x: 446, y: 160, r: 4.5 },
  { x: 404, y: 240, r: 5 },
  { x: 30, y: 168, r: 3.5 },
  { x: 262, y: 200, r: 3 },
  { x: 460, y: 300, r: 3.5 },
  { x: 176, y: 140, r: 3 },
  { x: 362, y: 62, r: 3.5 },
];

/** Snow removal hero: a house with a cleared driveway, snow banks, and falling snow. */
export function SnowScene({ label, className }: IllustrationProps) {
  return (
    <SvgFrame viewBox="0 0 480 400" label={label} className={className}>
      <rect width="480" height="400" className="fill-illus-sky" />

      <Sparkle cx={404} cy={86} r={30} className="fill-accent" />

      {/* House */}
      <rect
        x="186"
        y="150"
        width="24"
        height="56"
        className="fill-illus-detail stroke-illus-body"
        strokeWidth={1.5}
      />
      <rect
        x="60"
        y="214"
        width="190"
        height="122"
        className="fill-illus-body"
      />
      <path
        d="M42 224 155 132l113 92Z"
        className="fill-illus-detail stroke-illus-body"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
      <path
        d="M90 336v-56a18 18 0 0 1 36 0v56Z"
        className="fill-illus-detail"
      />
      <rect
        x="160"
        y="246"
        width="66"
        height="90"
        rx="4"
        className="fill-illus-detail"
      />
      <path
        d="M160 268h66M160 290h66M160 312h66"
        className="stroke-illus-body"
        strokeWidth={1.5}
      />
      <circle
        cx="155"
        cy="192"
        r="13"
        className="fill-accent stroke-illus-body"
        strokeWidth={1.5}
      />

      {/* Snowy ground, cleared driveway, and banks along its edges */}
      <path
        d="M0 328C120 310 360 310 480 328V400H0Z"
        className="fill-illus-ground"
      />
      <path d="M160 324h66l60 76H112Z" className="fill-illus-sky" />
      <path
        d="M96 400c4-26 20-40 40-40 6 0 10 2 14 6l-24 34Z"
        className="fill-illus-ground stroke-illus-sky"
        strokeWidth={1.5}
      />
      <path
        d="M298 400l-30-38c6-6 14-9 22-9 24 0 40 20 44 47Z"
        className="fill-illus-ground stroke-illus-sky"
        strokeWidth={1.5}
      />

      <Snowfall dots={SNOW} className="fill-illus-ground" />
    </SvgFrame>
  );
}
