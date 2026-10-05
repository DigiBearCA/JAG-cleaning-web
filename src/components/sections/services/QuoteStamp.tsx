export function QuoteStamp() {
  return (
    <div className="hidden sm:block absolute -top-8 -right-8 w-24 h-24 text-accent z-10 pointer-events-none" style={{ transform: "rotate(-8deg)" }}>
      <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
        <path d="M50 0 L60 20 L80 15 L75 35 L95 45 L80 60 L85 80 L65 75 L50 95 L35 75 L15 80 L20 60 L5 45 L25 35 L20 15 L40 20 Z" />
        <text x="50" y="55" textAnchor="middle" className="fill-on-accent type-eyebrow" fontSize="12" style={{letterSpacing: 0}}>FREE</text>
      </svg>
    </div>
  );
}

