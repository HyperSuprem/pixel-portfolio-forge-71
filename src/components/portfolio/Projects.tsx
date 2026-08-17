import { Github, ExternalLink, Cpu } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";
import { TrafficVisual } from "./TrafficVisual";

const projects = [
  {
    id: "01",
    title: "AI Quiz Generator From Text",
    body: "An AI-powered tool that generates quizzes from provided text or content, helping users quickly create learning and assessment material.",
    highlights: [
      "Artificial Intelligence",
      "Text processing",
      "Automated quiz generation",
      "Educational use case",
    ],
    tech: ["Python", "AI"],
    snippet: ["$ python quizgen.py --input notes.txt", "> parsing text ...", "> 10 questions generated"],
  },
  {
    id: "02",
    title: "ATM System",
    body: "A programming project simulating core ATM functionality — demonstrating programming logic, user interaction and transaction-based operations.",
    highlights: [
      "Programming fundamentals",
      "Logical problem solving",
      "User interaction",
      "Transaction handling",
    ],
    tech: ["C", "Java"],
    snippet: ["> 1. Withdraw  2. Deposit", "> select option: 1", "> balance updated"],
  },
  {
    id: "04",
    title: "Personal Portfolio",
    body: "An evolving personal portfolio website showcasing technical skills, projects, education, services, creative work and professional journey.",
    highlights: ["Currently developing", "Responsive design", "UI/UX", "Personal branding"],
    tech: ["HTML", "CSS", "JavaScript"],
    snippet: ["> status: in progress", "> sections: 8", "> deploying soon"],
    wip: true,
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading
          index="04"
          label="Projects"
          title="Things I've built"
          description="Small experiments and real hardware — each one taught me something I couldn't read in a book."
        />
      </Reveal>

      {/* Featured project */}
      <Reveal delay={80} className="mt-12">
        <article className="lift-card overflow-hidden p-0">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-primary-bright">03</span>
                <span className="rounded-full border border-primary/40 px-2.5 py-0.5 font-mono text-[0.65rem] tracking-wider text-primary uppercase">
                  Featured
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
                Intelligent Traffic Management System
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                An Arduino-based traffic management concept designed to reduce unnecessary waiting
                time at traffic junctions. IR sensors placed on different roads detect and estimate
                traffic density, and the system dynamically adjusts the green-signal duration —
                higher density means a longer green light.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
                {[
                  "Arduino",
                  "IR sensors",
                  "Traffic density detection",
                  "Automated traffic control",
                  "Embedded systems",
                  "Real-world problem solving",
                ].map((h) => (
                  <li key={h} className="flex items-start gap-2 text-foreground/90">
                    <Cpu size={13} className="mt-1 shrink-0 text-primary" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-wrap gap-2">
                {["Arduino", "C", "IR Sensors"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-t border-border bg-surface-2/40 p-7 sm:p-9 lg:border-t-0 lg:border-l">
              <TrafficVisual />
            </div>
          </div>
        </article>
      </Reveal>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 110}>
            <article className="lift-card flex h-full flex-col overflow-hidden">
              <div className="border-b border-border bg-surface-2/50 p-5">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2 w-2 rounded-full bg-destructive/60" />
                  <span className="h-2 w-2 rounded-full bg-primary/60" />
                  <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
                </div>
                <pre className="mt-4 font-mono text-[0.7rem] leading-relaxed whitespace-pre-wrap text-muted-foreground">
                  {p.snippet.join("\n")}
                </pre>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-primary-bright">{p.id}</span>
                  {p.wip ? (
                    <span className="font-mono text-[0.65rem] tracking-wider text-muted-foreground uppercase">
                      In progress
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-foreground/85">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Github size={13} /> Repository coming soon
                  </span>
                  <ExternalLink size={13} className="ml-auto opacity-40" />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
