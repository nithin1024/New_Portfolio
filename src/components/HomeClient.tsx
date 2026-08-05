"use client";

import dynamic from "next/dynamic";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { useAccessibilityPrefs } from "@/hooks/useAccessibilityPrefs";
import { SkipToContent } from "@/components/shared/SkipToContent";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Education } from "@/sections/Education";
import { Contact } from "@/sections/Contact";

const CursorGlow = dynamic(
  () => import("@/components/shared/CursorGlow").then((m) => m.CursorGlow),
  { ssr: false }
);

const Projects = dynamic(
  () => import("@/sections/Projects").then((m) => m.Projects),
  { loading: () => <SectionSkeleton label="Loading projects" /> }
);

const GitHubSection = dynamic(
  () => import("@/sections/GitHub").then((m) => m.GitHubSection),
  { loading: () => <SectionSkeleton label="Loading GitHub activity" /> }
);

const Certificates = dynamic(() =>
  import("@/sections/Certificates").then((m) => m.Certificates)
);

const Achievements = dynamic(() =>
  import("@/sections/Achievements").then((m) => m.Achievements)
);

const TechStack = dynamic(() =>
  import("@/sections/TechStack").then((m) => m.TechStack)
);

const Resume = dynamic(() => import("@/sections/Resume").then((m) => m.Resume));

function SectionSkeleton({ label }: { label: string }) {
  return (
    <div className="section-pad container-pad" role="status" aria-label={label}>
      <span className="sr-only">{label}</span>
      <div className="mx-auto mb-12 h-10 w-64 animate-pulse rounded-full bg-white/5" />
      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-64 animate-pulse rounded-[1.25rem] bg-white/[0.04]" />
        <div className="h-64 animate-pulse rounded-[1.25rem] bg-white/[0.04]" />
      </div>
    </div>
  );
}

export function HomeClient() {
  useSmoothScroll();
  useAccessibilityPrefs();

  return (
    <>
      <SkipToContent />
      <CursorGlow />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <GitHubSection />
        <Certificates />
        <Achievements />
        <TechStack />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
