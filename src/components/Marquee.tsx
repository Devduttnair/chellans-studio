const ITEMS = [
  "The art of remembering",
  "Est. 1976",
  "Tripunithura · Kerala",
  "Studio portraits",
  "Weddings",
  "Cinematic films",
  "Photo restoration",
  "Fine-art framing",
] as const;

export function Marquee() {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center">
          <span className="px-8 text-[11px] font-medium uppercase tracking-mega text-gold/90">
            {item}
          </span>
          <span className="text-[9px] text-gold/50" aria-hidden="true">
            ◆
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden border-y border-gold/15 bg-coal py-4" role="presentation">
      <div className="animate-marquee flex w-max">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
