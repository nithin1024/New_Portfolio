"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiNextdotjs,
  SiPytorch,
  SiMongodb,
  SiDocker,
  SiTypescript,
} from "react-icons/si";
import { cn } from "@/lib/utils";

const ICONS = [
  { Icon: SiPython, label: "Python", className: "left-[6%] top-[12%] text-[#3776AB]", delay: 0 },
  { Icon: SiReact, label: "React", className: "right-[4%] top-[18%] text-[#61DAFB]", delay: 0.4 },
  { Icon: SiNextdotjs, label: "Next.js", className: "left-[2%] bottom-[28%] text-white", delay: 0.8 },
  { Icon: SiPytorch, label: "PyTorch", className: "right-[8%] bottom-[22%] text-[#EE4C2C]", delay: 1.1 },
  { Icon: SiMongodb, label: "MongoDB", className: "left-[18%] top-[42%] text-[#47A248]", delay: 0.2 },
  { Icon: SiDocker, label: "Docker", className: "right-[16%] top-[48%] text-[#2496ED]", delay: 1.4 },
  { Icon: SiTypescript, label: "TypeScript", className: "left-[42%] bottom-[8%] text-[#3178C6]", delay: 0.6 },
] as const;

interface FloatingTechIconsProps {
  className?: string;
}

export function FloatingTechIcons({ className }: FloatingTechIconsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className={cn("pointer-events-none absolute inset-0 hidden sm:block", className)} aria-hidden>
      {ICONS.map(({ Icon, label, className: pos, delay }) => (
        <motion.div
          key={label}
          className={cn(
            "absolute flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-[#0c0c0c]/80 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md sm:h-12 sm:w-12",
            pos
          )}
          animate={
            reduceMotion
              ? undefined
              : { y: [0, -10, 0], opacity: [0.7, 1, 0.7] }
          }
          transition={{
            duration: 4.5 + delay,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          title={label}
        >
          <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
        </motion.div>
      ))}
    </div>
  );
}
