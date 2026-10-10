/**
 * Pure helper to compute responsive grid column span classes for the services card grid.
 * Grid definition: `grid-cols-2 md:grid-cols-6`
 *
 * Rules:
 * - Mobile (2 columns): span is 2 only for the last card when count is odd, otherwise 1.
 * - Desktop (6 columns, representing a 3-column layout):
 *   - Normal cards: span 2 (2/6 = 1/3 row)
 *   - Balanced last row: remainder r = count % 3. When r !== 0, the last r cards span 6 / r:
 *     - r === 1: last card spans 6 (full row)
 *     - r === 2: last 2 cards span 3 each (half row each)
 */
export function getCardSpans(count: number, index: number): string {
  // Mobile span (2-column layout)
  const isLastMobile = count % 2 === 1 && index === count - 1;
  const mobileClass = isLastMobile ? "col-span-2" : "col-span-1";

  // Desktop span (6-column layout representing 3 columns)
  const remainder = count % 3;
  let desktopClass = "md:col-span-2";

  if (remainder === 1 && index === count - 1) {
    desktopClass = "md:col-span-6";
  } else if (remainder === 2 && index >= count - 2) {
    desktopClass = "md:col-span-3";
  }

  return `${mobileClass} ${desktopClass}`;
}

