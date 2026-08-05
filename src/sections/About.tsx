"use client";

import { ABOUT_STORY, EXPERIENCE_TIMELINE } from "@/constants/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { AboutPortrait } from "@/components/illustrations/AboutPortrait";
import { Badge } from "@/components/ui/badge";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-28 section-pad"
    >
      <div className="container-pad">
        <SectionHeading
          id="about-heading"
          eyebrow="About"
          title="Engineer first. Builder always."
          description="A short story of how I approach AI, software, and problem solving."
        />

        <div className="grid items-start gap-10 sm:gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <AboutPortrait
              name="Bandaru Nithinkumar"
              subtitle="AI & Data Science · Bengaluru"
              className="mx-auto w-full max-w-md lg:max-w-none"
            />
          </Reveal>

          <div className="lg:pt-2">
            <Reveal>
              <p className="font-heading text-balance text-[1.4rem] font-medium leading-[1.3] tracking-[-0.035em] text-white sm:text-[1.65rem] md:text-[2rem]">
                {ABOUT_STORY.intro}
              </p>
            </Reveal>

            <div className="mt-8 space-y-5">
              {ABOUT_STORY.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.08 * (i + 1)}>
                  <p className="max-w-xl text-[1.02rem] leading-[1.8] text-secondary">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.25}>
              <ul className="mt-10 flex list-none flex-wrap gap-2.5 p-0" aria-label="Focus areas">
                {ABOUT_STORY.focusAreas.map((area) => (
                  <li key={area}>
                    <Badge variant="secondary">{area}</Badge>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-14 space-y-5">
              <h3 className="text-[11px] font-medium uppercase tracking-[0.24em] text-secondary">
                Journey snapshot
              </h3>
              <ol className="relative space-y-8 border-l border-white/[0.08] pl-7">
                {EXPERIENCE_TIMELINE.slice(0, 3).map((item, i) => (
                  <Reveal key={item.id} delay={0.1 * i}>
                    <li className="relative">
                      <span
                        className="absolute -left-[1.95rem] top-1.5 h-2 w-2 rounded-full bg-primary shadow-[0_0_16px_rgba(56,189,248,0.55)]"
                        aria-hidden
                      />
                      <p className="text-[11px] uppercase tracking-[0.2em] text-primary/90">
                        <time>{item.period}</time>
                      </p>
                      <p className="mt-2 font-medium tracking-[-0.02em] text-white">
                        {item.title}
                      </p>
                      <p className="mt-1 text-sm text-secondary">{item.organization}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
