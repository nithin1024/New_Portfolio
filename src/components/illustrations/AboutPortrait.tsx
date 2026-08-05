"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AboutPortraitProps {
  className?: string;
  name: string;
  subtitle: string;
}

export function AboutPortrait({ className, name, subtitle }: AboutPortraitProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[1.25rem] border border-white/[0.08] bg-[#0c0c0c]",
        className
      )}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(56,189,248,0.22),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.12),transparent_45%),linear-gradient(160deg,#0a1620_0%,#0c0c0c_55%,#14100c_100%)]"
        aria-hidden
      />

      <svg
        viewBox="0 0 480 600"
        className="relative aspect-[4/5] w-full"
        role="img"
        aria-label={`Portrait illustration of ${name}, ${subtitle}`}
      >
        <defs>
          <linearGradient id="avatarRing" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
          <linearGradient id="avatarFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(56,189,248,0.18)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
          </linearGradient>
          <linearGradient id="fadeBottom" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0c0c0c" stopOpacity="0" />
            <stop offset="45%" stopColor="#0c0c0c" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#0c0c0c" stopOpacity="1" />
          </linearGradient>
        </defs>

        <motion.circle
          cx="240"
          cy="230"
          r="108"
          fill="none"
          stroke="url(#avatarRing)"
          strokeWidth="1.5"
          opacity={0.7}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          style={{ originX: "240px", originY: "230px" }}
          strokeDasharray="6 10"
        />

        <circle
          cx="240"
          cy="230"
          r="88"
          fill="url(#avatarFill)"
          stroke="rgba(255,255,255,0.12)"
        />

        <circle
          cx="240"
          cy="208"
          r="28"
          fill="rgba(56,189,248,0.2)"
          stroke="#38BDF8"
          strokeWidth="2"
        />
        <path
          d="M190 278 C198 248, 282 248, 290 278"
          fill="rgba(56,189,248,0.16)"
          stroke="#38BDF8"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <rect
          x="48"
          y="120"
          width="86"
          height="30"
          rx="15"
          fill="rgba(5,5,5,0.55)"
          stroke="rgba(56,189,248,0.35)"
        />
        <text
          x="91"
          y="140"
          textAnchor="middle"
          fill="#38BDF8"
          fontSize="12"
          fontFamily="Plus Jakarta Sans, Arial, sans-serif"
        >
          Python
        </text>
        <rect
          x="346"
          y="150"
          width="78"
          height="30"
          rx="15"
          fill="rgba(5,5,5,0.55)"
          stroke="rgba(249,115,22,0.35)"
        />
        <text
          x="385"
          y="170"
          textAnchor="middle"
          fill="#F97316"
          fontSize="12"
          fontFamily="Plus Jakarta Sans, Arial, sans-serif"
        >
          React
        </text>
        <rect
          x="56"
          y="320"
          width="70"
          height="30"
          rx="15"
          fill="rgba(5,5,5,0.55)"
          stroke="rgba(255,255,255,0.15)"
        />
        <text
          x="91"
          y="340"
          textAnchor="middle"
          fill="#A0AEC0"
          fontSize="12"
          fontFamily="Plus Jakarta Sans, Arial, sans-serif"
        >
          ML
        </text>
        <rect
          x="340"
          y="300"
          width="86"
          height="30"
          rx="15"
          fill="rgba(5,5,5,0.55)"
          stroke="rgba(56,189,248,0.3)"
        />
        <text
          x="383"
          y="320"
          textAnchor="middle"
          fill="#38BDF8"
          fontSize="12"
          fontFamily="Plus Jakarta Sans, Arial, sans-serif"
        >
          PyTorch
        </text>

        <rect x="0" y="420" width="480" height="180" fill="url(#fadeBottom)" />
        <text
          x="40"
          y="510"
          fill="#FFFFFF"
          fontSize="26"
          fontFamily="Space Grotesk, Arial, sans-serif"
          fontWeight="600"
        >
          {name}
        </text>
        <text
          x="40"
          y="544"
          fill="#8B949E"
          fontSize="15"
          fontFamily="Plus Jakarta Sans, Arial, sans-serif"
        >
          {subtitle}
        </text>
      </svg>
    </div>
  );
}
