import { Briefcase, CircleDot } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const duties = [
  "Digital marketing for a full-service travel agency",
  "Creating attractive promotional posters",
  "Designing marketing materials using Canva",
  "Supporting the company's digital presence",
  "Producing visual content for promotional campaigns",
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <SectionHeading index="06" label="Experience" title="Where I've worked" />
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
        <Reveal delay={80}>
          <article className="lift-card p-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-primary">
                <Briefcase size={18} />
              </span>
              <div>
                <h3 className="text-lg font-semibold">Digital Marketing Intern</h3>
                <p className="text-sm text-muted-foreground">
                  Navada Travel &amp; Tours Pvt. Ltd. — Kathmandu, Nepal
                </p>
              </div>
              <span className="ml-auto rounded-full border border-border px-3 py-1 font-mono text-[0.7rem] text-muted-foreground">
                6 months
              </span>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Navada Travel &amp; Tours is a full-service tourism and travel agency offering
              domestic and international flight bookings, holiday and pilgrimage packages, visa
              processing, hotel reservations, vehicle rentals and corporate MICE services.
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {duties.map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm text-foreground/90">
                  <CircleDot size={13} className="mt-1 shrink-0 text-primary" />
                  {d}
                </li>
              ))}
            </ul>

            <p className="mt-6 border-t border-border pt-5 text-sm text-muted-foreground">
              A role that combined technology, creativity, marketing and visual communication.
            </p>
          </article>
        </Reveal>

        <Reveal delay={160}>
          <div className="lift-card flex h-full flex-col justify-center p-7">
            <p className="flex items-center gap-2 text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Open to freelance opportunities
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Development, design, AI tooling, posters and video — if it's interesting, I'd like to
              hear about it.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex w-fit items-center rounded-full border border-primary/40 px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Start a conversation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
