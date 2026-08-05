"use client";

import { ExternalLink } from "lucide-react";
import { CERTIFICATES } from "@/constants/content";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { CertificateIcon } from "@/components/illustrations/CertificateIcon";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Certificates() {
  return (
    <section
      id="certificates"
      aria-labelledby="certificates-heading"
      className="relative scroll-mt-28 section-pad bg-[#080808]/80"
    >
      <div className="container-pad">
        <SectionHeading
          id="certificates-heading"
          eyebrow="Certificates"
          title="Credentials & learning"
          description="Formal coursework and cloud foundations that complement hands-on engineering."
        />

        <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {CERTIFICATES.map((cert, index) => (
            <Reveal key={cert.id} delay={index * 0.08}>
              <article>
                <Card className="group relative flex h-full flex-col overflow-hidden hover-lift hover:bg-white/[0.04]">
                  <div
                    className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-primary/40 to-accent opacity-80"
                    aria-hidden
                  />
                  <div
                    className="pointer-events-none absolute -right-10 top-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/15"
                    aria-hidden
                  />
                  <CardHeader>
                    <CertificateIcon name={cert.icon} className="mb-4" />
                    <CardTitle className="text-xl leading-snug">{cert.title}</CardTitle>
                    <p className="text-sm text-primary">
                      {cert.issuer} · <time dateTime={cert.date}>{cert.date}</time>
                    </p>
                  </CardHeader>
                  <CardContent className="mt-auto flex flex-1 flex-col">
                    <p className="mb-5 text-sm leading-[1.75] text-secondary">
                      {cert.description}
                    </p>
                    <ul
                      className="mb-6 flex list-none flex-wrap gap-2 p-0"
                      aria-label={`${cert.title} skills`}
                    >
                      {cert.skills.map((skill) => (
                        <li key={skill}>
                          <Badge variant="secondary">{skill}</Badge>
                        </li>
                      ))}
                    </ul>
                    {cert.credentialUrl ? (
                      <Button asChild size="sm" variant="secondary" className="mt-auto w-fit">
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View ${cert.title} certificate`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                          View Certificate
                        </a>
                      </Button>
                    ) : null}
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
