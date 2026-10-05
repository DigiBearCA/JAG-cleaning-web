import { Snowfall, Sparkle, SvgFrame, type IllustrationProps, type SnowDot } from "./shared";

const DOTS: ReadonlyArray<SnowDot> = [
  { x: 52, y: 70, r: 4 },
  { x: 96, y: 150, r: 3 },
  { x: 418, y: 196, r: 4 },
  { x: 446, y: 268, r: 3 },
  { x: 40, y: 250, r: 3.5 },
];

/** Residential service hero: a house with bright windows and a sparkle. */
export function HomeScene({ label, className }: IllustrationProps) {
  return (
    <SvgFrame viewBox="0 0 480 400" label={label} className={className}>
      <rect width="480" height="400" className="fill-illus-sky" />

      <Sparkle cx={392} cy={82} r={32} className="fill-accent" />
      <Sparkle cx={340} cy={132} r={12} className="fill-illus-ground" />

      <rect x="282" y="122" width="28" height="64" className="fill-illus-detail stroke-illus-body" strokeWidth={1.5} />
      <rect x="130" y="198" width="220" height="142" className="fill-illus-body" />
      <path d="M108 210 240 102l132 108Z" className="fill-illus-detail stroke-illus-body" strokeWidth={1.5} strokeLinejoin="round" />
      <path d="M220 340v-64a20 20 0 0 1 40 0v64Z" className="fill-illus-detail" />
      <rect x="154" y="234" width="44" height="44" rx="4" className="fill-accent" />
      <rect x="282" y="234" width="44" height="44" rx="4" className="fill-accent" />
      <path d="M176 234v44M154 256h44M304 234v44M282 256h44" className="stroke-illus-body" strokeWidth={1.5} />
      <Sparkle cx={330} cy={232} r={10} className="fill-illus-ground" />

      <path d="M0 326C120 306 360 306 480 326V400H0Z" className="fill-illus-ground" />
      <path d="M222 318h36l18 82h-72Z" className="fill-illus-sky" />

      <Snowfall dots={DOTS} className="fill-illus-ground" />
    </SvgFrame>
  );
}
