"use client";

import { motion } from "framer-motion";

/** Lightweight ambient background — CSS-first, minimal JS motion. */
export function AnimatedGradient() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute -left-1/4 top-[-10%] h-[50vh] w-[50vw] rounded-full bg-primary/[0.11] blur-[120px] motion-safe:animate-pulse" />
      <div className="absolute -right-1/4 bottom-[-5%] h-[42vh] w-[42vw] rounded-full bg-accent/[0.07] blur-[120px]" />
      <motion.div
        className="absolute left-[20%] top-[30%] h-64 w-64 rounded-full bg-primary/[0.06] blur-[90px]"
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050505_72%)]" />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage:
            "radial-gradient(ellipse at 50% 35%, black 10%, transparent 70%)",
        }}
      />
    </div>
  );
}
