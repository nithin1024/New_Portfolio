"use client";

import {
  Brain,
  Cloud,
  Code2,
  Database,
  Layout,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const MAP: Record<string, LucideIcon> = {
  code: Code2,
  layout: Layout,
  server: Server,
  database: Database,
  brain: Brain,
  wrench: Wrench,
  cloud: Cloud,
};

interface SkillIconProps {
  name: string;
  className?: string;
}

export function SkillIcon({ name, className }: SkillIconProps) {
  const Icon = MAP[name] ?? Code2;
  return (
    <div
      className={cn(
        "flex h-11 w-11 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br from-primary/15 to-transparent text-primary transition duration-500 group-hover:scale-105 group-hover:border-primary/25",
        className
      )}
      aria-hidden
    >
      <Icon className="h-5 w-5" strokeWidth={1.5} />
    </div>
  );
}
