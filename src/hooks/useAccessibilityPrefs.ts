"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect } from "react";

/** Disables smooth scrolling when the user prefers reduced motion. */
export function useAccessibilityPrefs() {
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = reduceMotion ? "auto" : "smooth";
  }, [reduceMotion]);

  return { reduceMotion };
}
