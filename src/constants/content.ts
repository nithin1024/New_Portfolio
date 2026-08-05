import type {
  Achievement,
  Certificate,
  Education,
  TimelineItem,
} from "@/types";

export const EXPERIENCE_TIMELINE: TimelineItem[] = [
  {
    id: "edu-amrita",
    title: "B.Tech — Artificial Intelligence & Data Science",
    organization: "Amrita Vishwa Vidyapeetham",
    period: "2023 — 2027",
    description:
      "Pursuing a rigorous curriculum covering machine learning, deep learning, data engineering, algorithms, and full-stack software development. Building production-minded projects across ML and systems.",
    type: "education",
    tags: ["AI", "Data Science", "Software Engineering"],
  },
  {
    id: "hackathon",
    title: "Hackathon Participant & Builder",
    organization: "Campus & Open Hackathons",
    period: "2023 — Present",
    description:
      "Competed in and contributed to hackathon projects spanning AI applications, full-stack platforms, and rapid prototyping — shipping demos under tight deadlines with clear problem framing.",
    type: "hackathon",
    tags: ["Hackathons", "Rapid Prototyping", "Teamwork"],
  },
  {
    id: "competitive",
    title: "Competitive Coding & Problem Solving",
    organization: "LeetCode & Practice Platforms",
    period: "Ongoing",
    description:
      "Consistent practice in data structures and algorithms with a focus on clean solutions, complexity analysis, and interview-ready problem solving.",
    type: "achievement",
    tags: ["DSA", "Algorithms", "Problem Solving"],
  },
  {
    id: "opensource",
    title: "Open Source & Personal Projects",
    organization: "GitHub @nithin1024",
    period: "2023 — Present",
    description:
      "Maintaining a growing portfolio of ML notebooks, Java systems, and full-stack applications — from online judges to credit risk models and medical imaging classifiers.",
    type: "experience",
    tags: ["Open Source", "ML", "Full Stack"],
  },
];

export const EDUCATION: Education[] = [
  {
    id: "amrita",
    degree: "B.Tech in Artificial Intelligence & Data Science",
    institution: "Amrita Vishwa Vidyapeetham",
    location: "Bengaluru, Karnataka, India",
    period: "2023 — 2027",
    cgpa: "Pursuing",
    highlights: [
      "Core focus on ML, deep learning, and data engineering",
      "Strong foundation in algorithms and software systems",
      "Hands-on projects in computer vision and predictive modeling",
      "Active participation in hackathons and coding practice",
    ],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "ibm-ds",
    title: "IBM Data Science Professional Certificate",
    issuer: "IBM",
    date: "2024",
    icon: "ibm",
    description:
      "Comprehensive program covering data analysis, Python for data science, machine learning fundamentals, and applied data science methodology.",
    skills: ["Python", "Data Analysis", "Machine Learning", "Visualization"],
    credentialUrl: "https://www.coursera.org/professional-certificates/ibm-data-science",
  },
  {
    id: "aws-academy",
    title: "AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2024",
    icon: "aws",
    description:
      "Foundational cloud computing concepts including AWS core services, security, architecture, pricing, and cloud economics.",
    skills: ["AWS", "Cloud Computing", "Architecture", "Security"],
    credentialUrl: "https://aws.amazon.com/training/awsacademy/",
  },
  {
    id: "ai-cert",
    title: "Artificial Intelligence Fundamentals",
    issuer: "Professional Certification",
    date: "2024",
    icon: "ai",
    description:
      "Covered AI foundations including supervised learning, neural networks, model evaluation, and responsible AI practices.",
    skills: ["AI", "Neural Networks", "Model Evaluation", "Ethics"],
    credentialUrl: "https://github.com/nithin1024",
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "loan-accuracy",
    title: "81% Accuracy — Credit Risk Model",
    description:
      "Built a Random Forest credit risk pipeline with SMOTETomek balancing that achieved 81% predictive accuracy on imbalanced loan data.",
    year: "2024",
    icon: "target",
  },
  {
    id: "algoarena",
    title: "AlgoArena Online Judge",
    description:
      "Designed and implemented a Docker-sandboxed online judge platform for competitive programming practice.",
    year: "2026",
    icon: "trophy",
  },
  {
    id: "medical-ai",
    title: "Medical Imaging Deep Learning",
    description:
      "Developed multi-class cancer classification comparing CNNs and Vision Transformers with rigorous evaluation.",
    year: "2025",
    icon: "award",
  },
  {
    id: "github-growth",
    title: "22+ Public Repositories",
    description:
      "Maintained a diverse GitHub portfolio spanning ML research, Java systems, and full-stack web applications.",
    year: "2026",
    icon: "star",
  },
];

export const ABOUT_STORY = {
  intro:
    "I'm Bandaru Nithinkumar — an AI & Data Science engineer who builds software that thinks and systems that scale.",
  paragraphs: [
    "My work sits at the intersection of artificial intelligence, software development, and data engineering. Whether it's training models for credit risk and medical imaging or shipping full-stack platforms like AlgoArena, I care about clean architecture, measurable results, and user-facing polish.",
    "I thrive on problem solving — from competitive coding and hackathons to debugging production-shaped pipelines. I treat every project as an opportunity to sharpen fundamentals and ship something I'd be proud to demo in a real engineering interview.",
  ],
  focusAreas: [
    "AI & Data Science",
    "Software Development",
    "Machine Learning",
    "Data Engineering",
    "Problem Solving",
    "Hackathons",
    "Competitive Coding",
  ],
};
