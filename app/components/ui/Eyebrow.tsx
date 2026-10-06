import { cn } from "./cn";

export function Eyebrow({
  children,
  className,
  icon,
}: {
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border-strong bg-background-elevated/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent-text",
        className,
      )}
    >
      {icon ?? (
        <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(0,209,247,0.7)]" />
      )}
      {children}
    </span>
  );
}
