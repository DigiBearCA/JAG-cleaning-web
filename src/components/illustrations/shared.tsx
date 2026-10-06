import type { ReactNode } from "react";

export interface IllustrationProps {
  /** Short description. Omit to hide the illustration from assistive tech. */
  readonly label?: string;
  readonly className?: string;
}

interface SvgFrameProps extends IllustrationProps {
  readonly viewBox: string;
  readonly children: ReactNode;
}

/** Shared root: fills its (fixed aspect-ratio) frame and handles decorative vs labelled. */
export function SvgFrame({
  label,
  className,
  viewBox,
  children,
}: SvgFrameProps) {
  const labelled = typeof label === "string" && label.length > 0;
  return (
    <svg
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid slice"
      role={labelled ? "img" : undefined}
      aria-label={labelled ? label : undefined}
      aria-hidden={labelled ? undefined : true}
      focusable="false"
      className={className ?? "block size-full"}
    >
      {children}
    </svg>
  );
}

/** Four-point sparkle centred on (cx, cy) with radius r. */
export function Sparkle({
  cx,
  cy,
  r,
  className,
}: {
  readonly cx: number;
  readonly cy: number;
  readonly r: number;
  readonly className: string;
}) {
  const k = r * 0.22;
  const d = `M${cx} ${cy - r}C${cx + k} ${cy - k} ${cx + k} ${cy - k} ${cx + r} ${cy}C${cx + k} ${cy + k} ${cx + k} ${cy + k} ${cx} ${cy + r}C${cx - k} ${cy + k} ${cx - k} ${cy + k} ${cx - r} ${cy}C${cx - k} ${cy - k} ${cx - k} ${cy - k} ${cx} ${cy - r}Z`;
  return <path d={d} className={className} />;
}

export interface SnowDot {
  readonly x: number;
  readonly y: number;
  readonly r: number;
}

/** Falling snow as small circles. */
export function Snowfall({
  dots,
  className,
}: {
  readonly dots: ReadonlyArray<SnowDot>;
  readonly className: string;
}) {
  return (
    <g className={className}>
      {dots.map((dot) => (
        <circle key={`${dot.x}-${dot.y}`} cx={dot.x} cy={dot.y} r={dot.r} />
      ))}
    </g>
  );
}

export interface WindowRect {
  readonly x: number;
  readonly y: number;
  readonly accent?: boolean;
}

/** A grid of building windows; accent windows read as lit. */
export function WindowGrid({
  windows,
  width,
  height,
}: {
  readonly windows: ReadonlyArray<WindowRect>;
  readonly width: number;
  readonly height: number;
}) {
  return (
    <g>
      {windows.map((win) => (
        <rect
          key={`${win.x}-${win.y}`}
          x={win.x}
          y={win.y}
          width={width}
          height={height}
          rx={3}
          className={win.accent ? "fill-accent" : "fill-illus-detail"}
        />
      ))}
    </g>
  );
}

/** Builds window positions for a cols x rows grid, marking some as accent by "col,row" key. */
export function gridWindows(
  startX: number,
  startY: number,
  stepX: number,
  stepY: number,
  cols: number,
  rows: number,
  accents: ReadonlyArray<string>,
): ReadonlyArray<WindowRect> {
  const result: WindowRect[] = [];
  for (let row = 0; row < rows; row += 1) {
    for (let col = 0; col < cols; col += 1) {
      result.push({
        x: startX + col * stepX,
        y: startY + row * stepY,
        accent: accents.includes(`${col},${row}`),
      });
    }
  }
  return result;
}
