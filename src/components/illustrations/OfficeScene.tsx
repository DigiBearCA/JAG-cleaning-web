import { gridWindows, Sparkle, SvgFrame, WindowGrid, type IllustrationProps } from "./shared";

const TALL_WINDOWS = gridWindows(270, 116, 38, 36, 3, 5, ["0,0", "2,1", "1,3"]);
const SHORT_WINDOWS = gridWindows(112, 200, 42, 38, 3, 3, ["1,0", "2,2"]);

/** Commercial service hero: two office buildings with lit windows. */
export function OfficeScene({ label, className }: IllustrationProps) {
  return (
    <SvgFrame viewBox="0 0 480 400" label={label} className={className}>
      <rect width="480" height="400" className="fill-illus-sky" />

      <Sparkle cx={428} cy={74} r={28} className="fill-accent" />
      <Sparkle cx={68} cy={92} r={12} className="fill-illus-ground" />

      {/* Tall building */}
      <rect x="268" y="78" width="104" height="20" rx="4" className="fill-illus-body" />
      <rect x="250" y="92" width="140" height="250" rx="6" className="fill-illus-body" />
      <WindowGrid windows={TALL_WINDOWS} width={26} height={22} />
      <rect x="300" y="296" width="40" height="46" rx="4" className="fill-illus-detail" />

      {/* Shorter building */}
      <rect x="90" y="176" width="150" height="166" rx="6" className="fill-illus-body" />
      <WindowGrid windows={SHORT_WINDOWS} width={30} height={24} />
      <rect x="145" y="304" width="40" height="38" rx="4" className="fill-illus-detail" />

      <path d="M0 330C120 312 360 312 480 330V400H0Z" className="fill-illus-ground" />
    </SvgFrame>
  );
}
