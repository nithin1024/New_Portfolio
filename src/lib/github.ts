import type { GitHubProfile, GitHubRepo, LanguageStat } from "@/types";
import { LANGUAGE_COLORS } from "@/constants/skills";

const GITHUB_USERNAME = "nithin1024";
const GITHUB_API = "https://api.github.com";

async function githubFetch<T>(endpoint: string): Promise<T> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
    "User-Agent": "nithinkumar-portfolio",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(`${GITHUB_API}${endpoint}`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

export async function getGitHubProfile(): Promise<GitHubProfile> {
  return githubFetch<GitHubProfile>(`/users/${GITHUB_USERNAME}`);
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  return githubFetch<GitHubRepo[]>(
    `/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`
  );
}

export function computeLanguageStats(repos: GitHubRepo[]): LanguageStat[] {
  const counts = new Map<string, number>();

  for (const repo of repos) {
    if (!repo.language) continue;
    counts.set(repo.language, (counts.get(repo.language) ?? 0) + 1);
  }

  const total = Array.from(counts.values()).reduce((a, b) => a + b, 0) || 1;

  return Array.from(counts.entries())
    .map(([language, count]) => ({
      language,
      count,
      percentage: Math.round((count / total) * 100),
      color: LANGUAGE_COLORS[language] ?? "#38BDF8",
    }))
    .sort((a, b) => b.count - a.count);
}

export function getContributionCalendarUrl(username = GITHUB_USERNAME) {
  return `https://ghchart.rshah.org/38BDF8/${username}`;
}

export { GITHUB_USERNAME };
