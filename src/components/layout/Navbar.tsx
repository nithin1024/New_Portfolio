"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { NAV_ITEMS } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const ids = ["home", ...NAV_ITEMS.map((n) => n.href.replace("#", ""))];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <motion.nav
        aria-label="Primary"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: EASE }}
        className={cn(
          "mx-auto flex h-12 max-w-5xl items-center justify-between rounded-full border px-3.5 transition-all duration-500 sm:h-14 sm:px-5",
          scrolled || open
            ? "border-white/10 bg-[#050505]/75 shadow-[0_16px_48px_-24px_rgba(0,0,0,0.9)] backdrop-blur-2xl"
            : "border-white/[0.06] bg-white/[0.025] backdrop-blur-md"
        )}
      >
        <Link
          href="#home"
          className="font-heading text-[15px] font-medium tracking-[-0.03em] text-white transition hover:opacity-75"
          onClick={close}
        >
          {SITE_CONFIG.shortName}
          <span className="text-primary">.</span>
        </Link>

        <div className="hidden items-center gap-0.5 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = active === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-1.5 text-[13px] transition-colors duration-300",
                  isActive ? "text-white" : "text-secondary hover:text-white/90"
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.07]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-1 md:flex">
          <a
            href="https://github.com/nithin1024"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-secondary transition hover:bg-white/[0.05] hover:text-white"
          >
            <FaGithub className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="https://www.linkedin.com/in/bandaru-nithinkumar-711a6529a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-secondary transition hover:bg-white/[0.05] hover:text-white"
          >
            <FaLinkedin className="h-4 w-4" aria-hidden />
          </a>
          <Button asChild size="sm" className="ml-1.5">
            <a href={SITE_CONFIG.resumePath} download>
              Resume
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, y: -6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.98 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="mx-auto mt-2 max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#050505]/92 p-2.5 backdrop-blur-2xl md:hidden"
            role="navigation"
            aria-label="Mobile"
          >
            <div className="flex flex-col">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className={cn(
                    "rounded-2xl px-4 py-3.5 text-[15px] transition",
                    active === item.href
                      ? "bg-white/[0.05] text-white"
                      : "text-secondary hover:bg-white/[0.04] hover:text-white"
                  )}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-1 flex items-center gap-2 border-t border-white/10 px-3 pt-3">
                <a
                  href="https://github.com/nithin1024"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="rounded-full p-2.5 text-secondary hover:text-white"
                >
                  <FaGithub className="h-5 w-5" aria-hidden />
                </a>
                <a
                  href="https://www.linkedin.com/in/bandaru-nithinkumar-711a6529a"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-full p-2.5 text-secondary hover:text-white"
                >
                  <FaLinkedin className="h-5 w-5" aria-hidden />
                </a>
                <Button asChild size="sm" className="ml-auto">
                  <a href={SITE_CONFIG.resumePath} download onClick={close}>
                    Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
