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
        "scroll-mt-24 py-20 sm:py-28",
        alt && "border-y border-border bg-surface/40",
        className,
      )}
    >
      <div className="container-grid">{children}</div>
    </section>
  );
}
