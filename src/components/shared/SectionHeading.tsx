"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  id?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "center",
  id,
}: SectionHeadingProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className={cn(
        "mb-12 max-w-2xl md:mb-16",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow ? (
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className="font-heading text-balance text-[1.85rem] font-semibold leading-[1.1] tracking-[-0.035em] text-white sm:text-[2.75rem] md:text-[3.15rem]"
      >
        <span className="gradient-text">{title}</span>
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-[0.98rem] leading-[1.7] text-secondary sm:mt-5 sm:text-[1.05rem]",
            align === "center" && "mx-auto max-w-lg"
          )}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
