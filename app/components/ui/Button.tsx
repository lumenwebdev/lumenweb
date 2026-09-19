import Link from "next/link";
import { cn } from "./cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const styles =
    variant === "primary"
      ? "bg-accent text-background hover:bg-accent-soft hover:-translate-y-0.5 shadow-[0_0_0_1px_rgba(0,209,247,0.4),0_20px_40px_-15px_rgba(0,209,247,0.55)]"
      : "border border-border-strong text-foreground hover:border-accent/60 hover:text-accent hover:-translate-y-0.5";

  return (
    <Link
      href={href}
      className={cn(base, styles, className)}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </Link>
  );
}
