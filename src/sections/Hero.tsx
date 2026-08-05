"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HERO_PARAGRAPH, SITE_CONFIG, TYPING_ROLES } from "@/constants/site";
import { SOCIAL_LINKS } from "@/constants/navigation";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { EASE } from "@/lib/motion";
import { AnimatedGradient } from "@/components/shared/AnimatedGradient";
import { MagneticButton } from "@/components/shared/MagneticButton";
import { HeroIllustration } from "@/components/illustrations/HeroIllustration";
import { FloatingTechIcons } from "@/components/illustrations/FloatingTechIcons";
import { Button } from "@/components/ui/button";

function AnimatedName({ name }: { name: string }) {
  const reduceMotion = useReducedMotion();
  const words = name.split(" ");

  if (reduceMotion) {
    return (
      <h1 className="font-heading text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[4.6rem]">
        {name}
      </h1>
    );
  }

  return (
    <h1 className="font-heading text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl md:text-7xl lg:text-[4.6rem]">
      {words.map((word, wi) => (
        <span key={`${word}-${wi}`} className="mr-[0.28em] inline-block last:mr-0">
          {word.split("").map((char, i) => (
            <motion.span
              key={`${wi}-${i}`}
              className="inline-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.15 + wi * 0.1 + i * 0.02,
                ease: EASE,
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  );
}

const SOCIAL_ICON = {
  github: FaGithub,
  linkedin: FaLinkedin,
  leetcode: SiLeetcode,
} as const;

export function Hero() {
  const typed = useTypingEffect(TYPING_ROLES, 60, 35, 2000);
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
    >
      <AnimatedGradient />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-16 sm:gap-14 sm:px-8 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 lg:py-28">
        <div className="max-w-2xl">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 text-[11px] font-medium uppercase tracking-[0.26em] text-secondary sm:mb-7"
          >
            AI · Software · Data Engineering
          </motion.p>

          <div id="hero-heading">
            <AnimatedName name={SITE_CONFIG.name} />
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: EASE }}
            className="mt-6 flex min-h-9 items-center text-base font-medium tracking-[-0.02em] text-primary sm:mt-7 sm:text-xl"
            aria-live="polite"
            aria-atomic="true"
          >
            <span>{typed}</span>
            <span className="sr-only">Current role highlight</span>
            <motion.span
              className="ml-1 inline-block h-[1.1em] w-[2px] bg-primary/80"
              aria-hidden
              animate={reduceMotion ? undefined : { opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
            className="mt-6 max-w-lg text-[1.02rem] leading-[1.8] text-secondary sm:mt-8 sm:text-lg"
          >
            {HERO_PARAGRAPH}
          </motion.p>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
            className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <MagneticButton asChild size="lg" className="w-full sm:w-auto">
              <a href="#projects">View Projects</a>
            </MagneticButton>
            <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
              <a href={SITE_CONFIG.resumePath} download={SITE_CONFIG.resumeFileName}>
                <Download className="h-4 w-4 opacity-70" aria-hidden />
                Download Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
            className="mt-7 flex items-center gap-2"
            aria-label="Social profiles"
          >
            {SOCIAL_LINKS.filter((s) => s.icon !== "email").map((social) => {
              const Icon = SOCIAL_ICON[social.icon as keyof typeof SOCIAL_ICON];
              if (!Icon) return null;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-secondary transition duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <FloatingTechIcons />
          <HeroIllustration />
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 text-secondary/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 sm:bottom-10 md:inline-flex"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.24em]">Scroll</span>
          <ArrowDown className="h-4 w-4" aria-hidden />
        </motion.div>
      </a>
    </section>
  );
}
