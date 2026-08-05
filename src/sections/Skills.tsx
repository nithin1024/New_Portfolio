"use client";

import { SKILL_CATEGORIES } from "@/constants/skills";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { SkillIcon } from "@/components/illustrations/SkillIcon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="relative scroll-mt-28 section-pad bg-[#080808]/80"
    >
      <div className="container-pad">
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="Tools I use to ship"
          description="A practical stack spanning languages, frontend, backend, data, and ML."
        />

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {SKILL_CATEGORIES.map((category, index) => (
            <Reveal key={category.title} delay={index * 0.05}>
              <article>
                <Card className="group h-full hover-lift hover:bg-white/[0.04]">
                  <CardHeader className="flex-row items-center gap-4 space-y-0">
                    <SkillIcon name={category.icon} />
                    <CardTitle>{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul
                      className="flex list-none flex-wrap gap-2 p-0"
                      aria-label={`${category.title} skills`}
                    >
                      {category.skills.map((skill) => (
                        <li key={skill}>
                          <Badge variant="secondary">{skill}</Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
