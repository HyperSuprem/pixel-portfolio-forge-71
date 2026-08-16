import { ArrowRight, Mail, MapPin } from "lucide-react";
import portrait from "@/assets/suprem-portrait.jpg";

const stats = [
  { value: "9.8", label: "Semester 2 CGPA" },
  { value: "4", label: "Projects built" },
  { value: "6", label: "Months internship" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute top-[-10%] right-[-10%] h-[420px] w-[420px] rounded-full bg-primary/12 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="label-mono flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
            Available for freelance
          </p>

          <h1 className="mt-6 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-6xl">
            Suprem
            <br />
            Timsina
          </h1>

          <p className="mt-5 font-mono text-sm text-primary sm:text-base">
            Computer Science Student · Developer · AI &amp; Cybersecurity Enthusiast
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            I'm Suprem, a CS undergraduate at SIT Tumkur focused on engineering clean, user-centric
            software. I work with C, Java, and Python to build practical AI tools, explore
            cybersecurity, and tackle complex data structures.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              View My Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/60 hover:text-primary"
            >
              <Mail size={16} />
              Let's Connect
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-border pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-bold text-primary">{s.value}</dd>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="glow-ring relative overflow-hidden rounded-[2rem] border border-border">
            <img
              src={portrait}
              alt="Portrait of Suprem Timsina"
              width={912}
              height={1104}
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="lift-card absolute -bottom-6 -left-4 max-w-[15rem] p-4 backdrop-blur-sm">
            <p className="font-mono text-[0.7rem] text-primary">&lt;/&gt; currently</p>
            <p className="mt-1 text-sm leading-snug">
              Building AI tools &amp; embedded systems at SIT Tumkur.
            </p>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin size={12} /> Tumkur, India
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
