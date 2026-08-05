import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SITE_CONFIG } from "@/constants/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06]">
      <div className="container-pad flex flex-col items-center justify-between gap-8 py-12 sm:flex-row sm:py-14">
        <div className="text-center sm:text-left">
          <p className="font-heading text-[15px] font-medium tracking-[-0.03em] text-white">
            {SITE_CONFIG.name}
            <span className="text-primary">.</span>
          </p>
          <p className="mt-2 text-[13px] text-secondary">
            © {year} · Built with Next.js · Deployed on Vercel
          </p>
        </div>

        <div className="flex items-center gap-1">
          {[
            {
              href: "https://github.com/nithin1024",
              label: "GitHub",
              icon: FaGithub,
            },
            {
              href: "https://www.linkedin.com/in/bandaru-nithinkumar-711a6529a",
              label: "LinkedIn",
              icon: FaLinkedin,
            },
            {
              href: "https://leetcode.com/u/sBKS5iBGMC/",
              label: "LeetCode",
              icon: SiLeetcode,
            },
            {
              href: `mailto:${SITE_CONFIG.email}`,
              label: "Email",
              icon: Mail,
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={item.label}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-secondary transition hover:bg-white/[0.05] hover:text-white"
            >
              <item.icon className="h-4 w-4" aria-hidden />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
