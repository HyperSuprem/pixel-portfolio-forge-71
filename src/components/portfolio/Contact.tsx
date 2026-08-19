import { useState, type FormEvent } from "react";
import { Mail, Linkedin, Send, CheckCircle2, Instagram, MessageCircle } from "lucide-react";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { Section } from "./Section";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100, "Name is too long"),
  email: z.string().trim().email("Enter a valid email address").max(255, "Email is too long"),
  message: z
    .string()
    .trim()
    .min(10, "Tell me a little more (10+ characters)")
    .max(1000, "Message must be under 1000 characters"),
});

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    const result = schema.safeParse(data);

    if (!result.success) {
      const next: Errors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof Errors;
        if (key && !next[key]) next[key] = issue.message;
      });
      setErrors(next);
      setSent(false);
      return;
    }

    setErrors({});
    setSent(true);
    form.reset();
  }

  const field =
    "w-full rounded-lg border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary/60 focus:ring-2 focus:ring-ring/30 focus:outline-none";

  return (
    <Section id="contact" alt>
        <Reveal>
          <SectionHeading
            index="07"
            label="Contact"
            title="Let's Build Something Together."
            description="Freelance work, collaborations or just a good technical conversation — my inbox is open."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal delay={80} className="space-y-4 lg:col-span-5">
            <a
              href="mailto:timsinasuprem11@gmail.com"
              className="lift-card flex items-center gap-4 p-5"
              aria-label="Email Suprem Timsina"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface-2 text-primary-bright">
                <Mail size={18} />
              </span>
              <span>
                <span className="label-mono block">Email</span>
                <span className="mt-1 block text-sm">timsinasuprem11@gmail.com</span>
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/suprem-timsina-387086392"
              target="_blank"
              rel="noopener noreferrer"
              className="lift-card flex items-center gap-4 p-5"
              aria-label="LinkedIn profile"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface-2 text-primary-bright">
                <Linkedin size={18} />
              </span>
              <span>
                <span className="label-mono block">LinkedIn</span>
                <span className="mt-1 block text-sm">linkedin.com/in/suprem-timsina</span>
              </span>
            </a>
          </Reveal>

          <Reveal delay={160} className="lg:col-span-7">
            <form onSubmit={onSubmit} noValidate className="lift-card p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="label-mono">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    maxLength={100}
                    placeholder="Your name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={`${field} mt-2`}
                  />
                  {errors.name ? (
                    <p id="name-error" className="mt-2 text-xs text-destructive">
                      {errors.name}
                    </p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email" className="label-mono">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    maxLength={255}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    className={`${field} mt-2`}
                  />
                  {errors.email ? (
                    <p id="email-error" className="mt-2 text-xs text-destructive">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="message" className="label-mono">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1000}
                  placeholder="What would you like to build?"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={`${field} mt-2 resize-y`}
                />
                {errors.message ? (
                  <p id="message-error" className="mt-2 text-xs text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="btn-primary focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
                >
                  Send Message
                  <Send size={15} />
                </button>
                <p aria-live="polite" className="text-sm">
                  {sent ? (
                    <span className="inline-flex items-center gap-2 text-primary-bright">
                      <CheckCircle2 size={15} /> Thanks — your message is ready to send.
                    </span>
                  ) : null}
                </p>
              </div>
            </form>
          </Reveal>
        </div>
    </Section>
  );
}
