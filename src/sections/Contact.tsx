"use client";

import { FormEvent, useId, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CheckCircle2, Loader2, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SITE_CONFIG } from "@/constants/site";
import { sendContactEmail } from "@/lib/email";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { CopyEmailButton } from "@/components/shared/CopyEmailButton";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  const errorId = useId();
  const reduceMotion = useReducedMotion();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in all fields.");
      setStatus("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    try {
      await sendContactEmail({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setStatus("idle"), 3500);
    } catch {
      setStatus("error");
      setError("Something went wrong. Please email me directly or try again.");
    }
  }

  const invalid = status === "error" && !!error;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative scroll-mt-28 section-pad"
    >
      <div className="container-pad">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Let's build something"
          description="Open to internships, collaborations, and interesting engineering problems."
        />

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <Reveal>
            <Card className="h-full p-7 sm:p-8">
              <h3 className="font-heading text-xl font-medium tracking-[-0.03em] text-white">
                Connect directly
              </h3>
              <p className="mt-3 text-[0.95rem] leading-[1.75] text-secondary">
                Prefer socials or email? Reach out through any of these channels — I typically
                respond within a day.
              </p>

              <div className="mt-10 space-y-3">
                <div className="flex min-h-14 items-center gap-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-4 py-3.5 transition hover:border-white/15 hover:bg-white/[0.04]">
                  <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div className="min-w-0 flex-1">
                    <p className="text-[11px] uppercase tracking-[0.16em] text-secondary">
                      Email
                    </p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="mt-0.5 block truncate text-sm text-white link-underline w-fit"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                  <CopyEmailButton email={SITE_CONFIG.email} />
                </div>

                {[
                  {
                    label: "GitHub",
                    href: "https://github.com/nithin1024",
                    icon: FaGithub,
                    value: "@nithin1024",
                  },
                  {
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/in/bandaru-nithinkumar-711a6529a",
                    icon: FaLinkedin,
                    value: "bandaru-nithinkumar",
                  },
                  {
                    label: "LeetCode",
                    href: "https://leetcode.com/u/sBKS5iBGMC/",
                    icon: SiLeetcode,
                    value: "sBKS5iBGMC",
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-h-14 items-center gap-3.5 rounded-2xl border border-white/[0.08] bg-white/[0.02] px-4 py-3.5 transition hover:border-white/15 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  >
                    <item.icon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-secondary">
                        {item.label}
                      </p>
                      <p className="mt-0.5 break-all text-sm text-white">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="p-7 sm:p-9">
              <form onSubmit={onSubmit} className="space-y-5" noValidate aria-busy={status === "loading"}>
                <div>
                  <label htmlFor="name" className="mb-2.5 block text-sm text-secondary">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    aria-invalid={invalid && !name.trim()}
                    aria-describedby={error ? errorId : undefined}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2.5 block text-sm text-secondary">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-invalid={invalid && (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))}
                    aria-describedby={error ? errorId : undefined}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="mb-2.5 block text-sm text-secondary">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the role, project, or idea..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    aria-invalid={invalid && !message.trim()}
                    aria-describedby={error ? errorId : undefined}
                  />
                </div>

                {error ? (
                  <p id={errorId} role="alert" className="text-sm text-[#FDBA74]">
                    {error}
                  </p>
                ) : null}

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                  <MagneticButton
                    type="submit"
                    disabled={status === "loading"}
                    size="lg"
                    className="w-full sm:w-auto"
                    aria-label={status === "loading" ? "Sending message" : "Send message"}
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" aria-hidden />
                        Send Message
                      </>
                    )}
                  </MagneticButton>
                  <Button asChild type="button" variant="ghost" className="w-full sm:w-auto">
                    <a href={`mailto:${SITE_CONFIG.email}`}>Email instead</a>
                  </Button>
                </div>
              </form>

              <AnimatePresence>
                {status === "success" ? (
                  <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    role="status"
                    className="mt-6 flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-3 text-sm text-primary"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0" aria-hidden />
                    Message sent successfully. I&apos;ll get back to you soon.
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
