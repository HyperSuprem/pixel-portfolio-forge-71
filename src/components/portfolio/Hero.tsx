import { ArrowRight, Mail } from "lucide-react";
import portrait from "@/assets/suprem.jpg.asset.json";

const stats = [
  { value: "9.8", label: "Semester 2 CGPA" },
  { value: "4", label: "Projects built" },
  { value: "6", label: "Months internship" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-[-20%] left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="container-grid relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2/60 px-3 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="label-mono">Available for freelance</span>
            </p>

            <h1 className="mt-7 text-[2.75rem] leading-[1.02] font-extrabold tracking-tight sm:text-6xl lg:text-[4.25rem]">
              Suprem <span className="text-primary-bright">Timsina</span>
            </h1>

            <p className="mt-5 font-mono text-sm text-primary-bright sm:text-base">
              Computer Science Student · Developer · AI &amp; Cybersecurity Enthusiast
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              I'm Suprem, a CS undergraduate at SIT Tumkur focused on engineering clean,
              user-centric software. I work with C, Java, and Python to build practical AI tools,
              explore cybersecurity, and tackle complex data structures.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#projects" className="btn-primary group">
                View My Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-ghost">
                <Mail size={16} />
                Let's Connect
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-7">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-3xl font-bold text-primary-bright">{s.value}</dd>
                  <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-[20rem] lg:col-span-5">
            <div className="glow-ring relative aspect-square overflow-hidden rounded-full border border-border">
              <img
                src={portrait.url}
                alt="Portrait of Suprem Timsina"
                width={849}
                height={1259}
                className="h-full w-full object-cover object-top"
              />
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-t from-background/60 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
