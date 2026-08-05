"use client";

import { Download, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/constants/site";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { Card } from "@/components/ui/card";

export function Resume() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="relative scroll-mt-28 section-pad bg-[#080808]/80">
      <div className="container-pad">
        <SectionHeading
          id="resume-heading"
          eyebrow="Resume"
          title="Curriculum vitae"
          description="Download a PDF copy or preview the latest resume inline."
        />

        <Reveal>
          <Card className="mx-auto max-w-4xl overflow-hidden p-0">
            <div className="flex flex-col items-start justify-between gap-4 border-b border-white/10 bg-white/[0.02] p-6 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-primary/10 text-primary">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-white">
                    {SITE_CONFIG.name} — Resume
                  </p>
                  <p className="text-sm text-secondary">PDF · Updated for 2026</p>
                </div>
              </div>
              <MagneticButton asChild>
                <a href={SITE_CONFIG.resumePath} download={SITE_CONFIG.resumeFileName}>
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </MagneticButton>
            </div>

            <div className="bg-[#050505] p-3 sm:p-4">
              <div className="hidden sm:block">
                <iframe
                  title={`${SITE_CONFIG.name} resume PDF preview`}
                  src={`${SITE_CONFIG.resumePath}#view=FitH`}
                  className="h-[min(70vh,720px)] w-full rounded-xl border border-white/10 bg-white"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.03] p-8 text-center sm:hidden">
                <FileText className="h-10 w-10 text-primary" aria-hidden />
                <p className="text-sm leading-relaxed text-secondary">
                  PDF preview works best on larger screens. Download the resume to view it on
                  mobile.
                </p>
                <MagneticButton asChild>
                  <a href={SITE_CONFIG.resumePath} download={SITE_CONFIG.resumeFileName}>
                    <Download className="h-4 w-4" aria-hidden />
                    Download PDF
                  </a>
                </MagneticButton>
              </div>
              <p className="mt-3 hidden text-center text-xs text-secondary sm:block">
                If the preview does not load in your browser, use the download button above.
              </p>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
