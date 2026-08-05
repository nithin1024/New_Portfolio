import type { NavItem, SocialLink } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/nithin1024",
    icon: "github",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bandaru-nithinkumar-711a6529a",
    icon: "linkedin",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/nithin1024",
    icon: "leetcode",
  },
  {
    name: "Email",
    href: "mailto:nithinkumar.bandaru@gmail.com",
    icon: "email",
  },
];
