import { GraduationCap, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

const timeline = [
  {
    school: "Budhanilakantha Secondary English School",
    place: "Nepal",
    title: "Class 10",
    detail: "GPA 3.3 / 4.0",
  },
  {
    school: "Greenland College",
    place: "Nepal",
    title: "Class 12",
    detail: "GPA 3.28 / 4.0",
  },
  {
    school: "Siddaganga Institute of Technology (SIT)",
    place: "Tumkur, India",
    title: "B.E. — Computer Science",
    detail: "Semester 1: 8.75 CGPA · Semester 2: 9.8 CGPA",
    current: true,
  },
];

export function Education() {
  return (
    <Section id="education" alt>
        <Reveal>
          <SectionHeading
            index="02"
            label="Education"
            title="Learning, one semester at a time"
            description="Continuously improving, learning, and aiming higher."
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <ol className="relative space-y-6 border-l border-border pl-6 lg:col-span-8">
            {timeline.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 90} className="relative">
                <span
                  className={`absolute -left-[31px] top-6 h-2.5 w-2.5 rounded-full ${
                    item.current ? "bg-primary" : "bg-muted-foreground/50"
                  }`}
                  aria-hidden="true"
                />
                <div className="lift-card p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <GraduationCap size={16} className="text-primary" />
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.current ? (
                      <span className="rounded-full border border-primary/40 px-2.5 py-0.5 font-mono text-[0.65rem] tracking-wider text-primary uppercase">
                        Ongoing
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-sm text-foreground/90">{item.school}</p>
                  <p className="text-sm text-muted-foreground">{item.place}</p>
                  <p className="mt-3 font-mono text-xs text-muted-foreground">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={200} className="lg:col-span-4">
            <div className="lift-card flex h-full flex-col justify-center p-8 text-center">
              <Sparkles size={18} className="mx-auto text-primary" />
              <p className="mt-4 text-5xl font-extrabold text-primary-bright">9.8</p>
              <p className="label-mono mt-2">Semester 2 CGPA</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Up from 8.75 in semester one — proof that consistency compounds.
              </p>
            </div>
          </Reveal>
        </div>
    </Section>
  );
}
