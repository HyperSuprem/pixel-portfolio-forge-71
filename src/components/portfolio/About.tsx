import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

const focus = [
  "Software Development",
  "Artificial Intelligence",
  "Cybersecurity",
  "Data Structures & Algorithms",
  "UI/UX & Digital Design",
];

export function About() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading index="01" label="About me" title="A student who likes shipping things" />
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-12">
        <Reveal delay={80} className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7">
          <p>
            I'm a Computer Science undergraduate at Siddaganga Institute of Technology, Tumkur.
            Most of my time goes into software development — writing C, Python and Java, breaking
            problems into data structures, and figuring out why something doesn't work yet.
          </p>
          <p>
            Artificial Intelligence and Machine Learning are what pull me forward: I like turning
            models and text processing into tools people can actually use. Alongside that I'm
            exploring cybersecurity, because building something is only half the job — keeping it
            safe is the other half.
          </p>
          <p>
            Before university I spent six months doing digital marketing, poster design and video
            editing for a travel company in Kathmandu. That creative side never left, so UI/UX and
            visual design still shape how I build. I'm open to freelancing and collaboration on
            anything that mixes code, design and curiosity.
          </p>
        </Reveal>

        <Reveal delay={160} className="lg:col-span-5">
          <div className="lift-card h-full p-6 sm:p-7">
            <p className="label-mono">Current focus</p>
            <ul className="mt-5 space-y-3">
              {focus.map((item, i) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 font-mono text-[0.7rem] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
