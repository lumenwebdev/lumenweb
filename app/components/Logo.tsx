import Image from "next/image";
import Link from "next/link";
import { cn } from "./ui/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 font-display", className)}
      aria-label="Lumen Web — página inicial"
    >
      <Image
        src="/brand/logo-icon.png"
        alt="Lumen Web"
        width={28}
        height={31}
        className="h-7 w-auto"
        priority
      />
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Lumen<span className="text-accent">Web</span>
      </span>
    </Link>
  );
}
