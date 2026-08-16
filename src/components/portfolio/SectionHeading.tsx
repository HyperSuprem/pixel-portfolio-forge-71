import type { ReactNode } from "react";

export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-primary">{index}</span>
        <span className="h-px w-8 bg-primary/50" />
        <span className="label-mono">{label}</span>
      </div>
      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
