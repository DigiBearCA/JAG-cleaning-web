/** First focusable element on every page. Hidden until focused. */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-60 focus:inline-flex focus:h-12 focus:items-center focus:rounded-pill focus:bg-primary focus:px-7 focus:type-button focus:text-on-primary"
    >
      Skip to content
    </a>
  );
}
