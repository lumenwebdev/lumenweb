export function MetricsMarquee({ items }: { items: string[] }) {
  const track = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border bg-background-elevated/60 py-4">
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {track.map((item, i) => (
              <span key={i} className="flex items-center">
                <span className="px-6 text-sm font-semibold uppercase tracking-[0.08em] text-foreground sm:text-base">
                  {item}
                </span>
                <span aria-hidden className="text-lg text-accent-text">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
