/**
 * Balanced card-grid helpers. Each grid class constant is paired with a span
 * helper; always use them together so columns and spans stay in sync.
 *
 * All class strings are written out in full so Tailwind can detect them.
 */

/** Services chapter grid (`grid-cols-2 md:grid-cols-6`): 2 columns on mobile, 3 from md. */
export function getCardSpans(count: number, index: number): string {
  const isLast = index === count - 1;
  const mobile = count % 2 === 1 && isLast ? "col-span-2" : "col-span-1";
  return `${mobile} ${desktopSpan(count, index)}`;
}

/**
 * Card grid: 1 column below sm, 2 columns from sm, 3 columns from md
 * (6 tracks so a short last row can stretch to full width).
 */
export const CARD_GRID_CLASS = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6";

/**
 * - xs: every card is one full-width column.
 * - sm: odd count, the last card spans both columns.
 * - md: cards span 2 of 6 tracks; a last row of 1 card spans all 6,
 *   a last row of 2 cards spans 3 each.
 */
export function getCardGridSpans(count: number, index: number): string {
  const isLast = index === count - 1;
  const sm = count % 2 === 1 && isLast ? "sm:col-span-2" : "sm:col-span-1";
  return `${sm} ${desktopSpan(count, index)}`;
}

function desktopSpan(count: number, index: number): string {
  const remainder = count % 3;
  if (remainder === 1 && index === count - 1) return "md:col-span-6";
  if (remainder === 2 && index >= count - 2) return "md:col-span-3";
  return "md:col-span-2";
}
