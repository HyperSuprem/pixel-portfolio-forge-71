import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Services } from "@/components/portfolio/Services";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";

const title = "Suprem Timsina — CS Student, Developer & AI Enthusiast";
const description =
  "Portfolio of Suprem Timsina, a Computer Science undergraduate at SIT Tumkur building AI tools, embedded systems and clean web experiences.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-portfolio-forge-71.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "https://pixel-portfolio-forge-71.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Suprem Timsina",
          jobTitle: "Computer Science Student & Developer",
          url: "https://pixel-portfolio-forge-71.lovable.app/",
          alumniOf: "Siddaganga Institute of Technology, Tumkur",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Services />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border">
        <div className="container-grid flex flex-col gap-2 py-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono">© {new Date().getFullYear()} Suprem Timsina</p>
          <p className="font-mono">Built with curiosity · Tumkur, India</p>
        </div>
      </footer>
    </div>
  );
}
