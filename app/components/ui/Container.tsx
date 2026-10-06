import { cn } from "./cn";

export function Container({
  className,
  maxW = "max-w-6xl",
  children,
}: {
  className?: string;
  maxW?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full px-6 lg:px-8", maxW, className)}>
      {children}
    </div>
  );
}
