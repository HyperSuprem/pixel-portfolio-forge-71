import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  alt = false,
  className,
}: {
  id: string;
  children: ReactNode;
  alt?: boolean;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-12 sm:py-16",
        alt && "border-y border-border bg-surface/40",
        className,
      )}
    >
      <div className="container-grid">{children}</div>
    </section>
  );
}
