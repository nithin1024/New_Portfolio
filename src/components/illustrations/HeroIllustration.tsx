"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeroIllustrationProps {
  className?: string;
}

export function HeroIllustration({ className }: HeroIllustrationProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[420px] sm:max-w-[480px] lg:max-w-none",
        className
      )}
      role="img"
      aria-label="Abstract illustration of an AI engineer workspace with neural network and code panels"
    >
      <div
        className="absolute inset-[-8%] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.16),transparent_62%)]"
        aria-hidden
      />
      <svg
        viewBox="0 0 520 520"
        className="relative h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="heroRing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="heroPanel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255,255,255,0.1)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.03)" />
          </linearGradient>
          <radialGradient id="heroCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
          </radialGradient>
        </defs>

        <circle cx="260" cy="260" r="210" fill="url(#heroCore)" />

        <motion.circle
          cx="260"
          cy="260"
          r="180"
          stroke="url(#heroRing)"
          strokeWidth="1.5"
          strokeDasharray="8 14"
          fill="none"
          opacity={0.55}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
          style={{ originX: "260px", originY: "260px" }}
        />

        <motion.circle
          cx="260"
          cy="260"
          r="140"
          stroke="rgba(56,189,248,0.35)"
          strokeWidth="1"
          fill="none"
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          style={{ originX: "260px", originY: "260px" }}
        />

        <motion.g
          animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <rect
            x="130"
            y="150"
            width="260"
            height="220"
            rx="24"
            fill="url(#heroPanel)"
            stroke="rgba(255,255,255,0.12)"
          />
          <circle cx="156" cy="176" r="5" fill="#F97316" />
          <circle cx="174" cy="176" r="5" fill="#38BDF8" />
          <circle cx="192" cy="176" r="5" fill="#A0AEC0" />

          <rect x="156" y="210" width="120" height="8" rx="4" fill="#38BDF8" opacity="0.85" />
          <rect x="156" y="236" width="190" height="7" rx="3.5" fill="rgba(255,255,255,0.18)" />
          <rect x="156" y="258" width="160" height="7" rx="3.5" fill="rgba(255,255,255,0.12)" />
          <rect x="156" y="280" width="175" height="7" rx="3.5" fill="rgba(255,255,255,0.1)" />
          <rect x="156" y="310" width="90" height="7" rx="3.5" fill="#F97316" opacity="0.7" />
          <rect x="156" y="332" width="140" height="7" rx="3.5" fill="rgba(255,255,255,0.12)" />
        </motion.g>

        {[
          { x: 70, y: 180, delay: 0 },
          { x: 420, y: 150, delay: 0.4 },
          { x: 90, y: 360, delay: 0.8 },
          { x: 400, y: 340, delay: 1.2 },
        ].map((node) => (
          <motion.circle
            key={`${node.x}-${node.y}`}
            cx={node.x}
            cy={node.y}
            r="7"
            fill="#38BDF8"
            animate={reduceMotion ? undefined : { opacity: [0.35, 1, 0.35], scale: [1, 1.15, 1] }}
            transition={{
              duration: 3.2,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <path
          d="M77 180 C140 200, 140 240, 156 250"
          stroke="rgba(56,189,248,0.35)"
          strokeWidth="1.5"
        />
        <path
          d="M420 157 C360 190, 340 220, 320 230"
          stroke="rgba(249,115,22,0.35)"
          strokeWidth="1.5"
        />
        <path
          d="M97 360 C150 340, 150 320, 156 310"
          stroke="rgba(56,189,248,0.28)"
          strokeWidth="1.5"
        />
        <path
          d="M400 340 C350 320, 340 300, 320 290"
          stroke="rgba(249,115,22,0.28)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
