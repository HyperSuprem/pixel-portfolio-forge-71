import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    title: "Programming",
    items: [
      { name: "C" },
      { name: "Python" },
      { name: "Java", note: "basic" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
  },
  {
    title: "Technical areas",
    items: [
      { name: "Programming & Scripting" },
      { name: "AI & Machine Learning" },
      { name: "Cybersecurity" },
      { name: "Data Structures & Problem Solving" },
      { name: "Web Development" },
    ],
  },
  {
    title: "Design & creative",
    items: [
      { name: "Canva" },
      { name: "Figma" },
      { name: "Adobe Photoshop" },
      { name: "Video Editing" },
    ],
  },
  {
    title: "Tools",
    items: [{ name: "Visual Studio Code" }, { name: "IntelliJ IDEA" }],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading index="03" label="Skills" title="Tools I build and think with" />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 90}>
            <div className="lift-card h-full p-6 sm:p-7">
              <div className="flex items-baseline justify-between">
                <h3 className="text-base font-semibold">{group.title}</h3>
                <span className="font-mono text-[0.7rem] text-primary-bright">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="rounded-full border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary-bright"
                  >
                    {item.name}
                    {item.note ? (
                      <span className="ml-2 font-mono text-[0.65rem] text-muted-foreground">
                        {item.note}
                      </span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
