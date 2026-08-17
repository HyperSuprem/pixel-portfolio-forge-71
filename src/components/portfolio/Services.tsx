import {
  Code2,
  PenTool,
  BrainCircuit,
  Megaphone,
  Image as ImageIcon,
  Clapperboard,
  Handshake,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    body: "Build clean, responsive, user-friendly websites using modern web technologies.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    body: "Design intuitive interfaces and experiences using Figma and modern design principles.",
  },
  {
    icon: BrainCircuit,
    title: "AI Solutions",
    body: "Develop practical AI-powered tools and applications that solve real problems.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    body: "Create digital marketing content and promotional material for businesses and organizations.",
  },
  {
    icon: ImageIcon,
    title: "Poster & Graphic Design",
    body: "Create attractive promotional posters and social graphics using Canva and Photoshop.",
  },
  {
    icon: Clapperboard,
    title: "Video Editing",
    body: "Create engaging and polished video content for digital platforms.",
  },
  {
    icon: Handshake,
    title: "Freelance Development",
    body: "Open to freelance projects across development, design, AI tools and digital content.",
  },
];

export function Services() {
  return (
    <Section id="services" alt>
        <Reveal>
          <SectionHeading index="05" label="Services" title="What I can do" />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="lift-card group h-full p-6 sm:p-7">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface-2 text-primary-bright transition-colors group-hover:border-primary/50">
                  <s.icon size={18} />
                </span>
                <h3 className="mt-5 text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
    </Section>
  );
}
