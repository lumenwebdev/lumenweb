"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "./cn";
import { buildObrigadoUrl, trackEvent } from "./trackEvent";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  trackingEvent?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
  onClick,
  trackingEvent,
}: ButtonProps) {
  const isWhatsApp = href.startsWith("https://wa.me/");
  const isExternal = isWhatsApp || href.startsWith("mailto:");

  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

  const styles =
    variant === "primary"
      ? "bg-accent text-on-accent hover:bg-accent-soft hover:-translate-y-0.5 shadow-[0_0_0_1px_rgba(0,194,236,0.35),0_20px_40px_-15px_rgba(0,194,236,0.45)]"
      : "border border-border-strong text-foreground hover:-translate-y-0.5";

  function handleClick(e: React.MouseEvent) {
    onClick?.();

    if (isWhatsApp) {
      // Route through /oferta/obrigado so the Lead event fires reliably on
      // that page's load, instead of racing the outbound navigation here.
      e.preventDefault();
      const url = new URL(href);
      const text = url.searchParams.get("text") ?? "";
      window.open(buildObrigadoUrl(text, trackingEvent), "_blank", "noopener,noreferrer");
      return;
    }

    if (trackingEvent) trackEvent(trackingEvent);
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(base, styles, className)}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {variant === "secondary" && (
        <span
          aria-hidden
          className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-300 ease-out group-hover:scale-x-100"
        />
      )}
      <span
        className={cn(
          "relative",
          variant === "secondary" && "transition-colors duration-200 group-hover:text-on-accent",
        )}
      >
        {children}
      </span>
      <ArrowRight
        aria-hidden
        className={cn(
          "relative h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-1",
          variant === "secondary" && "group-hover:text-on-accent",
        )}
        strokeWidth={2.25}
      />
    </Link>
  );
}
