import type { ReactNode, SVGProps } from "react";

/*
 * Audience illustrations for the "Who we serve" cards.
 * Hand-drawn flat SVG, transparent background, designed to sit directly on a white card.
 * Colours come only from the --color-art-* theme tokens, so both palettes work.
 * Do not redraw or restyle these. Size them with className (h-24 w-24 md:h-32 md:w-32).
 */

type ArtProps = Omit<SVGProps<SVGSVGElement>, "viewBox" | "children">;
type Tone = "dark" | "mid" | "soft" | "tint" | "accent" | "deep" | "paper";

const SPARKLE_PATH =
  "M0,-10 C1.4,-3.4 3.4,-1.4 10,0 C3.4,1.4 1.4,3.4 0,10 C-1.4,3.4 -3.4,1.4 -10,0 C-3.4,-1.4 -1.4,-3.4 0,-10Z";

const FILL: Record<Tone, string> = {
  dark: "fill-art-dark",
  mid: "fill-art-mid",
  soft: "fill-art-soft",
  tint: "fill-art-tint",
  accent: "fill-art-accent",
  deep: "fill-art-deep",
  paper: "fill-art-paper",
};

interface SparkleProps {
  readonly x: number;
  readonly y: number;
  readonly scale: number;
  readonly tone: Tone;
}

function Sparkle({ x, y, scale, tone }: SparkleProps) {
  return <path className={FILL[tone]} transform={`translate(${x} ${y}) scale(${scale})`} d={SPARKLE_PATH} />;
}

/* Soft ground patch under each illustration. Delete this element to remove it everywhere. */
function Ground() {
  return <ellipse className="fill-art-tint" cx="64" cy="114" rx="42" ry="5.5" />;
}

function Art({ children, ...props }: ArtProps & { readonly children: ReactNode }) {
  return (
    <svg viewBox="0 0 128 128" aria-hidden="true" focusable="false" {...props}>
      {children}
    </svg>
  );
}

export function HomeArt(props: ArtProps) {
  return (
    <Art {...props}>
      <Ground />
      <polygon className="fill-art-mid" points="88,60 104,52 104,104 88,110"/>
      <polygon className="fill-art-soft" points="22,62 55,30 88,62 88,110 22,110"/>
      <rect className="fill-art-mid" x="22" y="104" width="66" height="6"/>
      <polygon className="fill-art-dark" points="55,27 71,19 108,55 92,65"/>
      <path className="stroke-art-mid" d="M62,25 L99,62 M68,22 L104,58" strokeWidth="2" strokeLinecap="round" fill="none"/>
      <polyline className="stroke-art-dark" points="17,66 55,26 93,66" fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      <rect className="fill-art-mid" x="82" y="28" width="11" height="22"/>
      <rect className="fill-art-dark" x="80" y="25" width="15" height="5" rx="1.5"/>
      <circle className="fill-art-dark" cx="55" cy="51" r="8"/>
      <circle className="fill-art-tint" cx="55" cy="51" r="5.2"/>
      <path className="stroke-art-dark" d="M55,46 V56 M50,51 H60" strokeWidth="1.6"/>
      <path className="fill-art-accent" d="M33,110 V88 Q33,79 43,79 Q53,79 53,88 V110Z"/>
      <path className="stroke-art-deep" d="M33,110 V88 Q33,79 43,79" fill="none" strokeWidth="2.5"/>
      <circle className="fill-art-dark" cx="48.5" cy="96" r="1.8"/>
      <rect className="fill-art-dark" x="60" y="74" width="22" height="20" rx="2.5"/>
      <rect className="fill-art-tint" x="62.5" y="76.5" width="8" height="7.5" rx="1"/>
      <rect className="fill-art-tint" x="72" y="76.5" width="7.5" height="7.5" rx="1"/>
      <rect className="fill-art-tint" x="62.5" y="85" width="8" height="6.5" rx="1"/>
      <rect className="fill-art-accent" x="72" y="85" width="7.5" height="6.5" rx="1"/>
      <rect className="fill-art-mid" x="58" y="94" width="26" height="4" rx="1.5"/>
      <polygon className="fill-art-tint" points="92,72 100,68 100,84 92,88"/>
      <circle className="fill-art-mid" cx="112" cy="106" r="9"/>
      <circle className="fill-art-dark" cx="104" cy="109" r="7"/>
      <circle className="fill-art-dark" cx="117" cy="110" r="5.5"/>
      <circle className="fill-art-mid" cx="12" cy="104" r="8"/>
      <circle className="fill-art-dark" cx="19" cy="108" r="6"/>
      <Sparkle x={110} y={24} scale={1.0} tone="accent" />
      <Sparkle x={20} y={38} scale={0.55} tone="mid" />
      <Sparkle x={120} y={56} scale={0.4} tone="accent" />
    </Art>
  );
}

export function ApartmentArt(props: ArtProps) {
  return (
    <Art {...props}>
      <Ground />
      <rect className="fill-art-dark" x="62" y="20" width="36" height="92"/>
      <polygon className="fill-art-mid" points="98,20 110,13 110,105 98,112"/>
      <polygon className="fill-art-soft" points="62,20 98,20 110,13 74,13"/>
      <rect className="fill-art-dark" x="66" y="7" width="3" height="8"/>
      <circle className="fill-art-accent" cx="67.5" cy="6" r="2.4"/>
      <rect className="fill-art-tint" x="68" y="28" width="7" height="9" rx="1.5"/>
      <rect className="fill-art-tint" x="79" y="28" width="7" height="9" rx="1.5"/>
      <rect className="fill-art-tint" x="90" y="28" width="7" height="9" rx="1.5"/>
      <rect className="fill-art-tint" x="68" y="42" width="7" height="9" rx="1.5"/>
      <rect className="fill-art-accent" x="79" y="42" width="7" height="9" rx="1.5"/>
      <rect className="fill-art-tint" x="90" y="42" width="7" height="9" rx="1.5"/>
      <rect className="fill-art-tint" x="68" y="56" width="7" height="9" rx="1.5"/>
      <rect className="fill-art-tint" x="79" y="56" width="7" height="9" rx="1.5"/>
      <rect className="fill-art-tint" x="90" y="56" width="7" height="9" rx="1.5"/>
      <rect className="fill-art-accent" x="68" y="70" width="7" height="9" rx="1.5"/>
      <rect className="fill-art-tint" x="79" y="70" width="7" height="9" rx="1.5"/>
      <rect className="fill-art-tint" x="90" y="70" width="7" height="9" rx="1.5"/>
      <rect className="fill-art-tint" x="68" y="84" width="7" height="9" rx="1.5"/>
      <rect className="fill-art-tint" x="79" y="84" width="7" height="9" rx="1.5"/>
      <rect className="fill-art-accent" x="90" y="84" width="7" height="9" rx="1.5"/>
      <path className="stroke-art-dark" d="M104,22 V104 M104,36 L110,32 M104,52 L110,48 M104,68 L110,64 M104,84 L110,80" strokeWidth="1.4" fill="none" opacity=".55"/>
      <rect className="fill-art-soft" x="16" y="58" width="50" height="54"/>
      <rect className="fill-art-mid" x="12" y="52" width="58" height="8" rx="2"/>
      <rect className="fill-art-dark" x="22" y="68" width="13" height="14" rx="2"/>
      <rect className="fill-art-dark" x="45" y="68" width="13" height="14" rx="2"/>
      <rect className="fill-art-tint" x="24.5" y="70.5" width="8" height="9" rx="1"/>
      <rect className="fill-art-accent" x="47.5" y="70.5" width="8" height="9" rx="1"/>
      <rect className="fill-art-mid" x="19" y="82" width="19" height="3.5" rx="1.2"/>
      <rect className="fill-art-mid" x="42" y="82" width="19" height="3.5" rx="1.2"/>
      <path className="stroke-art-mid" d="M22,85.5 V92 M28.5,85.5 V92 M35,85.5 V92 M45,85.5 V92 M51.5,85.5 V92 M58,85.5 V92" strokeWidth="1.3"/>
      <path className="fill-art-accent" d="M28,112 V100 Q28,95 35,95 Q42,95 42,100 V112Z"/>
      <circle className="fill-art-dark" cx="38" cy="104" r="1.4"/>
      <rect className="fill-art-dark" x="46" y="100" width="14" height="12" rx="1.5"/>
      <rect className="fill-art-tint" x="48.5" y="102.5" width="9" height="7" rx="1"/>
      <circle className="fill-art-mid" cx="12" cy="100" r="9.5"/>
      <circle className="fill-art-dark" cx="19" cy="104" r="7"/>
      <Sparkle x={24} y={32} scale={0.95} tone="accent" />
      <Sparkle x={116} y={38} scale={0.5} tone="mid" />
      <Sparkle x={10} y={64} scale={0.4} tone="accent" />
    </Art>
  );
}

export function OfficeArt(props: ArtProps) {
  return (
    <Art {...props}>
      <Ground />
      <g transform="translate(-6 0)">
      <polygon className="fill-art-mid" points="98,42 112,34 112,104 98,112"/>
      <rect className="fill-art-dark" x="14" y="42" width="84" height="70"/>
      <polygon className="fill-art-soft" points="12,42 98,42 112,34 26,34"/>
      <rect className="fill-art-mid" x="12" y="40" width="88" height="5" rx="1.5"/>
      <rect className="fill-art-tint" x="20" y="48" width="11" height="14" rx="1.5"/>
      <path className="fill-art-paper" d="M21,61 L28,49 L31,49 L24,61Z" opacity=".7"/>
      <rect className="fill-art-tint" x="35" y="48" width="11" height="14" rx="1.5"/>
      <path className="fill-art-paper" d="M36,61 L43,49 L46,49 L39,61Z" opacity=".7"/>
      <rect className="fill-art-tint" x="50" y="48" width="11" height="14" rx="1.5"/>
      <path className="fill-art-paper" d="M51,61 L58,49 L61,49 L54,61Z" opacity=".7"/>
      <rect className="fill-art-tint" x="65" y="48" width="11" height="14" rx="1.5"/>
      <path className="fill-art-paper" d="M66,61 L73,49 L76,49 L69,61Z" opacity=".7"/>
      <rect className="fill-art-tint" x="80" y="48" width="11" height="14" rx="1.5"/>
      <path className="fill-art-paper" d="M81,61 L88,49 L91,49 L84,61Z" opacity=".7"/>
      <rect className="fill-art-tint" x="20" y="66" width="11" height="14" rx="1.5"/>
      <path className="fill-art-paper" d="M21,79 L28,67 L31,67 L24,79Z" opacity=".7"/>
      <rect className="fill-art-tint" x="35" y="66" width="11" height="14" rx="1.5"/>
      <path className="fill-art-paper" d="M36,79 L43,67 L46,67 L39,79Z" opacity=".7"/>
      <rect className="fill-art-tint" x="50" y="66" width="11" height="14" rx="1.5"/>
      <path className="fill-art-paper" d="M51,79 L58,67 L61,67 L54,79Z" opacity=".7"/>
      <rect className="fill-art-tint" x="65" y="66" width="11" height="14" rx="1.5"/>
      <path className="fill-art-paper" d="M66,79 L73,67 L76,67 L69,79Z" opacity=".7"/>
      <rect className="fill-art-tint" x="80" y="66" width="11" height="14" rx="1.5"/>
      <path className="fill-art-paper" d="M81,79 L88,67 L91,67 L84,79Z" opacity=".7"/>
      <rect className="fill-art-tint" x="20" y="84" width="11" height="18" rx="1.5"/>
      <path className="fill-art-paper" d="M21,101 L28,85 L31,85 L24,101Z" opacity=".7"/>
      <rect className="fill-art-tint" x="35" y="84" width="11" height="18" rx="1.5"/>
      <path className="fill-art-paper" d="M36,101 L43,85 L46,85 L39,101Z" opacity=".7"/>
      <rect className="fill-art-tint" x="65" y="84" width="11" height="18" rx="1.5"/>
      <path className="fill-art-paper" d="M66,101 L73,85 L76,85 L69,101Z" opacity=".7"/>
      <rect className="fill-art-tint" x="80" y="84" width="11" height="18" rx="1.5"/>
      <path className="fill-art-paper" d="M81,101 L88,85 L91,85 L84,101Z" opacity=".7"/>
      <rect className="fill-art-soft" x="48" y="86" width="20" height="26" rx="1.5"/>
      <rect className="fill-art-dark" x="50.5" y="88.5" width="7.5" height="23.5"/>
      <rect className="fill-art-dark" x="58.5" y="88.5" width="7.5" height="23.5"/>
      <rect className="fill-art-accent" x="45" y="80" width="26" height="5" rx="1.5"/>
      <rect className="fill-art-mid" x="30" y="26" width="20" height="9" rx="1.5"/>
      <rect className="fill-art-dark" x="33" y="22" width="14" height="5" rx="1.2"/>
      <path className="stroke-art-dark" d="M84,34 V12" strokeWidth="2.4" strokeLinecap="round"/>
      <path className="fill-art-accent" d="M85,13 L102,18.5 L85,24Z"/>
      <path className="stroke-art-dark" d="M104,46 V104" strokeWidth="1.4" opacity=".5"/>
      <Sparkle x={110} y={16} scale={0.9} tone="accent" />
      <Sparkle x={14} y={20} scale={0.55} tone="mid" />
      </g>
      <rect className="fill-art-deep" x="106" y="100" width="12" height="12" rx="2.5"/>
      <path className="fill-art-mid" d="M112,100 C103,92 105,83 112,79 C119,83 121,92 112,100Z"/>
      <path className="fill-art-dark" d="M112,100 C114,92 111,87 112,79 C119,83 121,92 112,100Z"/>
    </Art>
  );
}

export function ManagerArt(props: ArtProps) {
  return (
    <Art {...props}>
      <Ground />
      <g transform="translate(-4 0)">
      <rect className="fill-art-dark" x="22" y="14" width="62" height="92" rx="7"/>
      <rect className="fill-art-paper" x="28" y="24" width="50" height="76" rx="3.5"/>
      <rect className="fill-art-accent" x="40" y="8" width="26" height="15" rx="5"/>
      <circle className="fill-art-deep" cx="53" cy="16" r="3"/>
      <g className="stroke-art-mid" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none">
      <path d="M34,40 L38,44.5 L45,35.5"/>
      <path d="M34,58 L38,62.5 L45,53.5"/>
      </g>
      <rect className="fill-art-soft" x="50" y="38" width="22" height="4.5" rx="2.2"/>
      <rect className="fill-art-soft" x="50" y="56" width="17" height="4.5" rx="2.2"/>
      <rect className="stroke-art-soft" x="34" y="73" width="10" height="10" rx="2.5" fill="none" strokeWidth="2.4"/>
      <rect className="fill-art-soft" x="50" y="76" width="12" height="4.5" rx="2.2"/>
      </g>
      <g transform="translate(78 92) rotate(-32)">
      <rect className="fill-art-deep" x="8" y="-3.5" width="40" height="9" rx="3"/>
      <rect className="fill-art-accent" x="8" y="-5" width="40" height="9" rx="3"/>
      <rect className="fill-art-deep" x="32" y="3" width="7" height="11" rx="2"/>
      <rect className="fill-art-accent" x="32" y="2" width="7" height="10" rx="2"/>
      <rect className="fill-art-deep" x="41" y="3" width="6" height="8" rx="2"/>
      <rect className="fill-art-accent" x="41" y="2" width="6" height="7" rx="2"/>
      <circle className="fill-art-deep" cx="0" cy="1.5" r="16"/>
      <circle className="fill-art-accent" cx="0" cy="0" r="16"/>
      <circle className="fill-art-paper" cx="0" cy="0" r="6.5"/>
      <circle className="stroke-art-deep" cx="0" cy="0" r="6.5" fill="none" strokeWidth="1.6"/>
      </g>
      <Sparkle x={104} y={20} scale={0.9} tone="accent" />
      <Sparkle x={12} y={30} scale={0.5} tone="mid" />
      <Sparkle x={116} y={92} scale={0.4} tone="mid" />
    </Art>
  );
}

export function BuildArt(props: ArtProps) {
  return (
    <Art {...props}>
      <Ground />
      <g transform="translate(114 46) rotate(8)">
      <rect className="fill-art-mid" x="-3.2" y="-4" width="6.4" height="64" rx="3"/>
      <rect className="fill-art-dark" x="-12" y="-22" width="24" height="18" rx="3.5"/>
      <rect className="fill-art-mid" x="-12" y="-22" width="7" height="18" rx="3.5"/>
      </g>
      <rect className="fill-art-mid" x="14" y="98" width="34" height="13" rx="2"/>
      <rect className="fill-art-dark" x="51" y="98" width="34" height="13" rx="2"/>
      <rect className="fill-art-mid" x="88" y="98" width="26" height="13" rx="2"/>
      <rect className="fill-art-dark" x="26" y="83" width="34" height="13" rx="2"/>
      <rect className="fill-art-mid" x="63" y="83" width="34" height="13" rx="2"/>
      <rect className="fill-art-mid" x="14" y="83" width="9" height="13" rx="2"/>
      <g transform="translate(3 18) scale(0.86)">
      <path className="fill-art-accent" d="M26,66 C26,40 44,24 64,24 C84,24 102,40 102,66Z"/>
      <path className="fill-art-deep" d="M64,24 C74,24 83,28 91,36 C84,46 84,56 88,66 L102,66 C102,40 84,24 64,24Z" opacity=".35"/>
      <rect className="fill-art-deep" x="55" y="22" width="18" height="44" rx="5"/>
      <path className="stroke-art-paper" d="M33,58 C34,46 41,37 50,32" fill="none" strokeWidth="3.2" strokeLinecap="round" opacity=".75"/>
      <rect className="fill-art-deep" x="16" y="64" width="96" height="14" rx="7"/>
      <rect className="fill-art-accent" x="16" y="62" width="96" height="14" rx="7"/>
      </g>
      <Sparkle x={14} y={30} scale={0.9} tone="accent" />
      <Sparkle x={100} y={16} scale={0.5} tone="mid" />
      <Sparkle x={8} y={60} scale={0.4} tone="accent" />
    </Art>
  );
}

export function WinterArt(props: ArtProps) {
  return (
    <Art {...props}>
      <Ground />
      <g transform="translate(80 50) rotate(14)">
      <rect className="fill-art-dark" x="-2.8" y="-38" width="5.6" height="58" rx="2.8"/>
      <rect className="fill-art-deep" x="-10" y="-46" width="20" height="8" rx="4"/>
      <rect className="fill-art-accent" x="-10" y="-47.5" width="20" height="8" rx="4"/>
      <path className="fill-art-deep" d="M-15,16 H15 L12,46 Q0,54 -12,46Z"/>
      <path className="fill-art-accent" d="M-15,14 H15 L12,44 Q0,52 -12,44Z"/>
      </g>
      <path className="fill-art-soft" d="M4,113 C8,89 30,81 52,83 C60,77 84,77 96,85 C114,85 124,99 126,113Z"/>
      <path className="fill-art-mid" d="M126,113 C124,99 114,85 96,85 C104,94 104,104 98,113Z" opacity=".5"/>
      <path className="fill-art-tint" d="M18,110 C20,96 34,88 50,90 C44,95 40,102 40,110Z"/>
      <path className="stroke-art-paper" d="M60,92 C72,88 86,90 92,96" strokeWidth="3.2" strokeLinecap="round" fill="none"/>
      <path className="stroke-art-paper" d="M24,98 Q34,92 44,94" strokeWidth="2.6" strokeLinecap="round" fill="none"/>
      <circle className="fill-art-tint" cx="14" cy="106" r="4"/>
      <circle className="fill-art-tint" cx="116" cy="104" r="3.4"/>
      <g className="stroke-art-mid" transform="translate(34 38) scale(1.0)" strokeWidth="3.4" strokeLinecap="round" fill="none">
      <path d="M0,-17 V17 M0,-10 L-5.5,-15.5 M0,-10 L5.5,-15.5 M0,10 L-5.5,15.5 M0,10 L5.5,15.5"/>
      <path d="M0,-17 V17 M0,-10 L-5.5,-15.5 M0,-10 L5.5,-15.5 M0,10 L-5.5,15.5 M0,10 L5.5,15.5" transform="rotate(60)"/>
      <path d="M0,-17 V17 M0,-10 L-5.5,-15.5 M0,-10 L5.5,-15.5 M0,10 L-5.5,15.5 M0,10 L5.5,15.5" transform="rotate(120)"/>
      </g>
      <circle className="fill-art-accent" cx="34" cy="38" r="3.4"/>
      <circle className="fill-art-mid" cx="108" cy="22" r="2.6"/>
      <circle className="fill-art-soft" cx="16" cy="70" r="2.2"/>
      <circle className="fill-art-soft" cx="58" cy="14" r="2.2"/>
      <circle className="fill-art-mid" cx="118" cy="52" r="2"/>
      <Sparkle x={14} y={16} scale={0.5} tone="mid" />
      <Sparkle x={120} y={74} scale={0.5} tone="accent" />
    </Art>
  );
}

export const AUDIENCE_ART = {
  home: HomeArt,
  apartment: ApartmentArt,
  office: OfficeArt,
  manager: ManagerArt,
  build: BuildArt,
  winter: WinterArt,
} as const;

export type AudienceArtId = keyof typeof AUDIENCE_ART;
