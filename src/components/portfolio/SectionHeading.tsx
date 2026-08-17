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
      <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface-2/60 px-3 py-1.5">
        <span className="font-mono text-[0.7rem] text-primary-bright">{index}</span>
        <span className="h-3 w-px bg-border" />
        <span className="label-mono">{label}</span>
      </div>
      <h2 className="mt-5 text-3xl leading-tight font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
