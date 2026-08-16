import { useEffect, useState } from "react";

const roads = [
  { name: "North", density: 0.9 },
  { name: "East", density: 0.4 },
  { name: "South", density: 0.65 },
  { name: "West", density: 0.2 },
];

export function TrafficVisual() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const green = 2200 + (roads[active]?.density ?? 0.5) * 2600;
    const t = setTimeout(() => setActive((a) => (a + 1) % roads.length), green);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <div className="rounded-xl border border-border bg-background/60 p-5">
      <div className="flex items-center justify-between">
        <p className="label-mono">Live signal simulation</p>
        <p className="font-mono text-[0.7rem] text-primary">green ∝ density</p>
      </div>

      <ul className="mt-5 space-y-3">
        {roads.map((road, i) => {
          const isGreen = i === active;
          return (
            <li key={road.name} className="flex items-center gap-3">
              <span className="w-12 font-mono text-[0.7rem] text-muted-foreground">
                {road.name}
              </span>
              <span
                aria-hidden="true"
                className={`h-2.5 w-2.5 shrink-0 rounded-full transition-colors duration-500 ${
                  isGreen ? "bg-emerald-400 shadow-[0_0_12px_2px_rgba(52,211,153,0.5)]" : "bg-destructive/70"
                }`}
              />
              <span className="h-2 flex-1 overflow-hidden rounded-full bg-surface-2">
                <span
                  className={`block h-full rounded-full transition-all duration-700 ${
                    isGreen ? "bg-emerald-400/80" : "bg-primary/50"
                  }`}
                  style={{ width: `${road.density * 100}%` }}
                />
              </span>
              <span className="w-16 text-right font-mono text-[0.7rem] text-muted-foreground">
                {isGreen ? `${Math.round(2.2 + road.density * 2.6)}s green` : "waiting"}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-xs text-muted-foreground">
        IR sensors estimate density per road; the controller extends the green phase for the
        busiest approach.
      </p>
    </div>
  );
}
