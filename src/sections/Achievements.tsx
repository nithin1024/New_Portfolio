"use client";

import { Award, Star, Target, Trophy } from "lucide-react";
import { ACHIEVEMENTS } from "@/constants/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Card } from "@/components/ui/card";

const ICONS = {
  target: Target,
  trophy: Trophy,
  award: Award,
  star: Star,
} as const;

export function Achievements() {
  return (
    <section id="achievements" aria-labelledby="achievements-heading" className="relative scroll-mt-28 section-pad">
      <div className="container-pad">
        <SectionHeading
          id="achievements-heading"
          eyebrow="Achievements"
          title="Milestones that matter"
          description="Selected outcomes from ML research, platform building, and open-source growth."
        />

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
          {ACHIEVEMENTS.map((item, index) => {
            const Icon = ICONS[item.icon as keyof typeof ICONS] ?? Award;
            return (
              <Reveal key={item.id} delay={index * 0.06}>
                <Card className="flex h-full gap-5 p-7 transition hover-lift hover:bg-white/[0.04] sm:p-8">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/[0.08] text-accent">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-heading text-lg font-medium tracking-[-0.03em] text-white">
                        {item.title}
                      </h3>
                      <span className="text-xs text-secondary">{item.year}</span>
                    </div>
                    <p className="mt-3 text-sm leading-[1.75] text-secondary">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
