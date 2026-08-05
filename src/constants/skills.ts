import type { SkillCategory } from "@/types";

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Programming",
    icon: "code",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    title: "Frontend",
    icon: "layout",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "Express", "REST APIs", "JWT Auth"],
  },
  {
    title: "Databases",
    icon: "database",
    skills: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Machine Learning",
    icon: "brain",
    skills: ["Scikit-learn", "PyTorch", "Pandas", "NumPy", "OpenCV"],
  },
  {
    title: "Developer Tools",
    icon: "wrench",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Postman", "Jupyter"],
  },
  {
    title: "Cloud",
    icon: "cloud",
    skills: ["AWS", "Docker", "Vercel", "Cloud Foundations"],
  },
];

export const TECH_STACK = [
  { name: "Python", category: "Language" },
  { name: "Java", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "C++", category: "Language" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MongoDB", category: "Database" },
  { name: "MySQL", category: "Database" },
  { name: "PyTorch", category: "ML" },
  { name: "Scikit-learn", category: "ML" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Git", category: "Tools" },
] as const;

export const LANGUAGE_COLORS: Record<string, string> = {
  Python: "#3572A5",
  Java: "#b07219",
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Jupyter: "#DA5B0B",
  "Jupyter Notebook": "#DA5B0B",
  C: "#555555",
  "C++": "#f34b7d",
  Shell: "#89e051",
  Dockerfile: "#384d54",
};
