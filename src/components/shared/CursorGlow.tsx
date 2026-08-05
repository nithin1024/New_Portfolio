"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion, useSpring } from "framer-motion";

export function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const x = useSpring(0, { stiffness: 120, damping: 28, mass: 0.4 });
  const y = useSpring(0, { stiffness: 120, damping: 28, mass: 0.4 });

  useEffect(() => {
    if (reduceMotion) return;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [reduceMotion, x, y]);

  if (reduceMotion || !visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[60] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.07] blur-3xl md:block"
      style={{ left: x, top: y }}
      aria-hidden
    />
  );
}
