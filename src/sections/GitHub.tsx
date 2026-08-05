"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ExternalLink, GitFork, Star, UserPlus, Users } from "lucide-react";
import type { GitHubProfile, GitHubRepo, LanguageStat } from "@/types";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Reveal } from "@/components/shared/Reveal";
import { ContributionGraph } from "@/components/shared/ContributionGraph";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GitHubPayload {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  languages: LanguageStat[];
  totalStars: number;
}

export function GitHubSection() {
  const [data, setData] = useState<GitHubPayload | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch("/api/github");
        if (!res.ok) throw new Error("Failed to load GitHub data");
        const json = (await res.json()) as GitHubPayload;
        if (!cancelled) setData(json);
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Unable to fetch GitHub");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="relative scroll-mt-28 section-pad"
    >
      <div className="container-pad">
        <SectionHeading
          id="github-heading"
          eyebrow="GitHub"
          title="Open source presence"
          description="Live profile stats, repositories, language distribution, and contribution activity."
        />

        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-28 animate-pulse rounded-2xl bg-white/5" />
            ))}
          </div>
        ) : null}

        {error ? (
          <Card className="p-6 text-center">
            <p className="text-secondary">{error}</p>
            <Button asChild className="mt-4" variant="secondary">
              <a
                href="https://github.com/nithin1024"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit GitHub Profile
              </a>
            </Button>
          </Card>
        ) : null}

        {data ? (
          <>
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  label: "Repositories",
                  value: data.profile.public_repos,
                  icon: ExternalLink,
                },
                { label: "Stars", value: data.totalStars, icon: Star },
                { label: "Followers", value: data.profile.followers, icon: Users },
                {
                  label: "Following",
                  value: data.profile.following,
                  icon: UserPlus,
                },
              ].map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.05}>
                  <Card className="p-5 hover-lift">
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-secondary">{stat.label}</p>
                      <stat.icon className="h-4 w-4 text-primary" />
                    </div>
                    <p className="mt-3 font-heading text-3xl font-semibold text-white">
                      {stat.value}
                    </p>
                  </Card>
                </Reveal>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <Reveal>
                <Card className="overflow-hidden">
                  <CardHeader className="flex-row items-center gap-4 space-y-0">
                    <Image
                      src={data.profile.avatar_url}
                      alt={data.profile.name ?? data.profile.login}
                      width={56}
                      height={56}
                      className="rounded-full border border-white/10"
                    />
                    <div>
                      <CardTitle>{data.profile.name ?? data.profile.login}</CardTitle>
                      <p className="text-sm text-secondary">@{data.profile.login}</p>
                    </div>
                    <Button asChild size="sm" variant="secondary" className="ml-auto">
                      <a
                        href={data.profile.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Profile
                      </a>
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-6 text-sm text-secondary">
                      {data.profile.bio ?? "AI & Data Science engineer building in public."}
                    </p>
                    <p className="mb-3 text-sm font-medium text-white">Contribution calendar</p>
                    <ContributionGraph username={data.profile.login} />
                  </CardContent>
                </Card>
              </Reveal>

              <Reveal delay={0.1}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Language distribution</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {data.languages.slice(0, 6).map((lang) => (
                      <div key={lang.language}>
                        <div className="mb-1.5 flex items-center justify-between text-sm">
                          <span className="text-white">{lang.language}</span>
                          <span className="text-secondary">{lang.percentage}%</span>
                        </div>
                        <div
                          className="h-2 overflow-hidden rounded-full bg-white/5"
                          role="meter"
                          aria-label={`${lang.language} usage`}
                          aria-valuenow={lang.percentage}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        >
                          <div
                            className="h-full rounded-full transition-all"
                            style={{
                              width: `${lang.percentage}%`,
                              backgroundColor: lang.color,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </Reveal>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 font-heading text-xl font-medium tracking-[-0.03em] text-white">
                Pinned & top repositories
              </h3>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {data.repos.map((repo, i) => (
                  <Reveal key={repo.id} delay={i * 0.04}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      <Card className="h-full p-5 hover-lift hover:bg-white/[0.04]">
                        <div className="flex items-start justify-between gap-3">
                          <h4 className="font-heading font-semibold text-white">
                            {repo.name}
                          </h4>
                          <ExternalLink className="h-4 w-4 shrink-0 text-secondary" />
                        </div>
                        <p className="mt-2 line-clamp-2 text-sm text-secondary">
                          {repo.description ?? "No description provided."}
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-secondary">
                          {repo.language ? <Badge variant="secondary">{repo.language}</Badge> : null}
                          <span className="inline-flex items-center gap-1">
                            <Star className="h-3.5 w-3.5" /> {repo.stargazers_count}
                          </span>
                          <span className="inline-flex items-center gap-1">
                            <GitFork className="h-3.5 w-3.5" /> {repo.forks_count}
                          </span>
                        </div>
                      </Card>
                    </a>
                  </Reveal>
                ))}
              </div>
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}
