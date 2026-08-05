"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { PROJECTS } from "@/constants/projects";
import type { Project } from "@/types";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function ProjectCard({
  project,
  onOpen,
  index,
}: {
  project: Project;
  onOpen: (project: Project) => void;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.08}>
      <article>
        <Card className="group flex h-full flex-col overflow-hidden hover-lift hover:bg-white/[0.04]">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="relative aspect-[16/10] min-h-[180px] overflow-hidden text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/50"
            aria-label={`Open details for ${project.title}`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
              aria-hidden
            />
            <Image
              src={project.image}
              alt={`${project.title} preview`}
              fill
              className="object-cover opacity-90 transition duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
              priority={index < 2}
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/25 to-transparent"
              aria-hidden
            />
            <div
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/35 text-white opacity-100 backdrop-blur-md transition duration-300 sm:opacity-0 sm:group-hover:opacity-100"
              aria-hidden
            >
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </button>
          <CardHeader>
            <p className="text-[11px] uppercase tracking-[0.22em] text-primary/90">
              {project.subtitle}
            </p>
            <CardTitle className="mt-2 text-xl sm:text-2xl">{project.title}</CardTitle>
            <p className="mt-3 text-[0.95rem] leading-[1.7] text-secondary">
              {project.description}
            </p>
          </CardHeader>
          <CardContent className="mt-auto flex flex-1 flex-col gap-6">
            <ul
              className="flex list-none flex-wrap gap-2 p-0"
              aria-label={`${project.title} tech stack`}
            >
              {project.techStack.map((tech) => (
                <li key={tech}>
                  <Badge variant="secondary">{tech}</Badge>
                </li>
              ))}
            </ul>
            <ul className="space-y-2" aria-label={`${project.title} highlights`}>
              {project.features.slice(0, 3).map((feature) => (
                <li
                  key={feature}
                  className="flex gap-2.5 text-[13px] leading-relaxed text-secondary"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap gap-2.5">
              <Button size="sm" onClick={() => onOpen(project)} className="min-h-10">
                View details
              </Button>
              <Button asChild size="sm" variant="secondary" className="min-h-10">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                >
                  <FaGithub className="h-3.5 w-3.5" aria-hidden />
                  GitHub
                </a>
              </Button>
              {project.liveUrl ? (
                <Button asChild size="sm" variant="outline" className="min-h-10">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                    Live Demo
                  </a>
                </Button>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </article>
    </Reveal>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative scroll-mt-28 section-pad bg-[#080808]/80"
    >
      <div className="container-pad">
        <SectionHeading
          id="projects-heading"
          eyebrow="Projects"
          title="Selected work"
          description="Production-minded systems across online judging, travel booking, credit risk ML, and medical imaging."
        />

        <div className="grid gap-6 sm:gap-7 md:grid-cols-2 md:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent>
          {selected ? (
            <>
              <DialogHeader>
                <p className="text-[11px] uppercase tracking-[0.22em] text-primary/90">
                  {selected.subtitle}
                </p>
                <DialogTitle className="mt-2">{selected.title}</DialogTitle>
                <DialogDescription className="mt-3 text-[0.95rem] leading-relaxed">
                  {selected.overview}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-8 text-sm">
                {[
                  { title: "Architecture", items: selected.architecture, color: "bg-primary" },
                  { title: "Features", items: selected.features, color: "bg-accent" },
                  { title: "Challenges", items: selected.challenges, color: "bg-white/40" },
                  { title: "Results", items: selected.results, color: "bg-primary" },
                ].map((block) => (
                  <div key={block.title}>
                    <h4 className="mb-3 font-heading text-base font-medium tracking-[-0.02em] text-white">
                      {block.title}
                    </h4>
                    <ul className="space-y-2.5 text-secondary">
                      {block.items.map((item) => (
                        <li key={item} className="flex gap-3 leading-relaxed">
                          <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${block.color}`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="flex flex-wrap gap-2.5 border-t border-white/[0.08] pt-5">
                  <Button asChild>
                    <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                  {selected.liveUrl ? (
                    <Button asChild variant="secondary">
                      <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
