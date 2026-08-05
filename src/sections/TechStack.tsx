"use client";

import { TECH_STACK } from "@/constants/skills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";

export function TechStack() {
  const categories = Array.from(new Set(TECH_STACK.map((t) => t.category)));

  return (
    <section id="tech-stack" aria-labelledby="tech-stack-heading" className="relative scroll-mt-28 section-pad bg-[#080808]/80">
      <div className="container-pad">
        <SectionHeading
          id="tech-stack-heading"
          eyebrow="Tech Stack"
          title="Everyday engineering stack"
          description="Languages and frameworks I reach for when building AI systems and full-stack products."
        />

        <div className="space-y-8">
          {categories.map((category, i) => (
            <Reveal key={category} delay={i * 0.05}>
              <div>
                <h3 className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-secondary">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.filter((t) => t.category === category).map((tech) => (
                    <Badge
                      key={tech.name}
                      className="px-3 py-1.5 text-sm transition hover:border-primary/40 hover:bg-primary/15"
                    >
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
