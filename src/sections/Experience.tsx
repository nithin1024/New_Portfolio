"use client";

import { EXPERIENCE_TIMELINE } from "@/constants/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const typeLabel: Record<string, string> = {
  education: "Education",
  experience: "Experience",
  hackathon: "Hackathon",
  achievement: "Achievement",
};

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative scroll-mt-28 section-pad"
    >
      <div className="container-pad">
        <SectionHeading
          id="experience-heading"
          eyebrow="Experience"
          title="Timeline"
          description="Education, hackathons, competitive coding, and continuous building."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent sm:left-1/2 sm:-translate-x-px"
            aria-hidden
          />

          <ol className="m-0 list-none space-y-10 p-0">
            {EXPERIENCE_TIMELINE.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <Reveal key={item.id} delay={index * 0.06}>
                  <li
                    className={`relative flex flex-col sm:flex-row ${
                      isLeft ? "sm:justify-start" : "sm:justify-end"
                    }`}
                  >
                    <span
                      className="absolute left-4 top-8 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-[#050505] bg-primary shadow-[0_0_16px_rgba(56,189,248,0.5)] sm:left-1/2"
                      aria-hidden
                    />
                    <Card
                      className={`ml-10 p-6 hover-lift sm:ml-0 sm:w-[calc(50%-2.25rem)] sm:p-7 ${
                        isLeft ? "sm:mr-auto" : "sm:ml-auto"
                      }`}
                    >
                      <div className="flex flex-wrap items-center gap-2.5">
                        <Badge>{typeLabel[item.type]}</Badge>
                        <time className="text-xs tracking-wide text-secondary">
                          {item.period}
                        </time>
                      </div>
                      <h3 className="mt-4 font-heading text-lg font-medium tracking-[-0.03em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-primary/90">{item.organization}</p>
                      <p className="mt-4 text-sm leading-[1.75] text-secondary">
                        {item.description}
                      </p>
                      {item.tags ? (
                        <ul className="mt-5 flex list-none flex-wrap gap-2 p-0">
                          {item.tags.map((tag) => (
                            <li key={tag}>
                              <Badge variant="secondary">{tag}</Badge>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </Card>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
