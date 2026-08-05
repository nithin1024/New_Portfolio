"use client";

import { useState } from "react";
import { getContributionCalendarUrl } from "@/lib/github";

interface ContributionGraphProps {
  username: string;
}

export function ContributionGraph({ username }: ContributionGraphProps) {
  const [failed, setFailed] = useState(false);
  const src = getContributionCalendarUrl(username);

  if (failed) {
    return (
      <div className="rounded-xl border border-white/[0.08] bg-white/[0.03] p-6 text-center">
        <p className="text-sm text-secondary">
          Contribution graph unavailable right now.
        </p>
        <a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex text-sm text-primary underline-offset-4 hover:underline"
        >
          View activity on GitHub
        </a>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-white/[0.08] bg-black/30 p-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={`GitHub contribution calendar for ${username}`}
        className="min-w-[640px] w-full"
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
