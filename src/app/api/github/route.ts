import { NextResponse } from "next/server";
import {
  computeLanguageStats,
  getGitHubProfile,
  getGitHubRepos,
} from "@/lib/github";

export const revalidate = 3600;

export async function GET() {
  try {
    const [profile, allRepos] = await Promise.all([
      getGitHubProfile(),
      getGitHubRepos(),
    ]);

    const repos = [...allRepos]
      .sort((a, b) => {
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      })
      .slice(0, 6);

    const languages = computeLanguageStats(allRepos);
    const totalStars = allRepos.reduce((sum, repo) => sum + repo.stargazers_count, 0);

    return NextResponse.json(
      {
        profile,
        repos,
        languages,
        totalStars,
      },
      {
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to fetch GitHub data",
      },
      { status: 500 }
    );
  }
}
