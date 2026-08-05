"use client";

import { GraduationCap, MapPin } from "lucide-react";
import { EDUCATION } from "@/constants/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="relative scroll-mt-28 section-pad"
    >
      <div className="container-pad">
        <SectionHeading
          id="education-heading"
          eyebrow="Education"
          title="Academic foundation"
          description="Formal training in Artificial Intelligence & Data Science with a systems-minded approach to software."
        />

        <div className="mx-auto max-w-3xl">
          {EDUCATION.map((edu, index) => (
            <Reveal key={edu.id} delay={index * 0.08}>
              <article>
                <Card className="overflow-hidden hover-lift">
                  <CardHeader className="border-b border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-transparent">
                    <div className="flex items-start gap-4">
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary"
                        aria-hidden
                      >
                        <GraduationCap className="h-6 w-6" strokeWidth={1.5} />
                      </div>
                      <div>
                        <CardTitle className="text-xl sm:text-2xl">{edu.degree}</CardTitle>
                        <p className="mt-1 text-primary">{edu.institution}</p>
                        <div className="mt-2 flex flex-wrap gap-3 text-sm text-secondary">
                          <span className="inline-flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5" aria-hidden />
                            {edu.location}
                          </span>
                          <time>{edu.period}</time>
                          {edu.cgpa ? <span>Status: {edu.cgpa}</span> : null}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      {edu.highlights.map((item) => (
                        <li key={item} className="flex gap-3 text-sm leading-relaxed text-secondary">
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                            aria-hidden
                          />
                          {item}
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
