export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  architecture: string[];
  features: string[];
  challenges: string[];
  results: string[];
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  gradient: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "experience" | "hackathon" | "achievement";
  tags?: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  skills: string[];
  icon: "ibm" | "aws" | "ai";
  credentialUrl?: string;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  icon: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa?: string;
  highlights: string[];
}

export interface GitHubProfile {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
  location: string | null;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  topics: string[];
}

export interface LanguageStat {
  language: string;
  count: number;
  percentage: number;
  color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
