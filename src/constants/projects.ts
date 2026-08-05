import type { Project } from "@/types";

export const PROJECTS: Project[] = [
  {
    id: "algoarena",
    title: "AlgoArena",
    subtitle: "Online Judge Platform",
    description:
      "A full-stack online judge for practicing data structures and algorithms with secure code execution, real-time verdicts, and a modern competitive programming experience.",
    overview:
      "AlgoArena is an online coding platform that lets developers submit solutions in multiple languages, run them against curated test cases in isolated Docker containers, and receive instant feedback. Built for students and interview preparation, it combines a clean React frontend with a Node.js/Express API and MongoDB persistence.",
    architecture: [
      "React SPA with problem browser, code editor, and submission history",
      "Express REST API handling auth, problems, and submission queues",
      "Docker-based sandboxed execution workers for safe code runs",
      "MongoDB for users, problems, test cases, and verdict storage",
      "JWT authentication with role-based access for problem setters",
    ],
    features: [
      "Multi-language code submission and judging",
      "Isolated Docker sandbox for secure execution",
      "Problem catalog with difficulty tags and topics",
      "Submission history with runtime and memory metrics",
      "Admin tools for creating and managing problems",
    ],
    challenges: [
      "Designing a secure sandbox that prevents malicious code escape",
      "Managing concurrent submissions without blocking the API",
      "Balancing judge fairness with timeout and memory limits",
      "Building a responsive code editor UX across devices",
    ],
    results: [
      "End-to-end online judge workflow from submit to verdict",
      "Dockerized execution pipeline for safe multi-language runs",
      "Scalable MongoDB schema for problems and submissions",
      "Production-ready architecture suitable for campus deployments",
    ],
    techStack: ["Node.js", "Express", "React", "MongoDB", "Docker"],
    githubUrl: "https://github.com/nithin1024/AlgoArena-Code-Judge-Platform",
    liveUrl: "https://github.com/nithin1024/AlgoArena-Code-Judge-Platform",
    image: "/projects/algoarena.svg",
    gradient: "from-sky-500/20 to-cyan-500/5",
  },
  {
    id: "nsms-travels",
    title: "NSMS Travels",
    subtitle: "Responsive Booking Platform",
    description:
      "A responsive travel booking platform with itinerary discovery, seamless booking flows, and a polished UI designed for mobile-first travelers.",
    overview:
      "NSMS Travels is a full-stack travel booking experience focused on clarity and conversion. Users can browse destinations, filter packages, and complete bookings through a streamlined flow optimized for both desktop and mobile.",
    architecture: [
      "Responsive frontend with modular booking and listing views",
      "Service layer for packages, availability, and booking state",
      "Form validation and confirmation workflow for reservations",
      "Component-driven UI system for consistent travel content",
    ],
    features: [
      "Destination and package browsing with filters",
      "Responsive booking flow across screen sizes",
      "Clean itinerary presentation and trip details",
      "Accessible forms with validation feedback",
      "Mobile-first layout for on-the-go travelers",
    ],
    challenges: [
      "Keeping booking UX simple without sacrificing information density",
      "Ensuring layout integrity across phones, tablets, and desktops",
      "Structuring travel content so packages remain scannable",
    ],
    results: [
      "Fully responsive booking experience",
      "Clear package discovery and reservation flow",
      "Reusable UI patterns ready for backend integration",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    githubUrl: "https://github.com/nithin1024/NSMS_Travels",
    liveUrl: "https://github.com/nithin1024/NSMS_Travels",
    image: "/projects/nsms-travels.svg",
    gradient: "from-orange-500/20 to-amber-500/5",
  },
  {
    id: "bank-loan-risk",
    title: "Bank Loan Credit Risk Assessment",
    subtitle: "Machine Learning Risk Model",
    description:
      "An ML pipeline that assesses bank loan credit risk using Random Forest and SMOTETomek resampling, achieving 81% predictive accuracy on imbalanced data.",
    overview:
      "This project builds a credit risk assessment model for bank loan applications. It addresses severe class imbalance with SMOTETomek, engineers predictive features from applicant data, and evaluates ensemble classifiers to improve default prediction reliability for lending decisions.",
    architecture: [
      "Data ingestion and exploratory analysis on loan datasets",
      "Feature engineering and encoding of applicant attributes",
      "SMOTETomek resampling to balance default vs non-default classes",
      "Random Forest training with cross-validated hyperparameter tuning",
      "Evaluation via accuracy, precision, recall, and confusion matrix",
    ],
    features: [
      "End-to-end credit risk modeling pipeline",
      "SMOTETomek for robust imbalance handling",
      "Random Forest ensemble with tuned thresholds",
      "Interpretability through feature importance",
      "Reproducible Jupyter workflow for experimentation",
    ],
    challenges: [
      "Severe class imbalance biasing naive classifiers",
      "Avoiding data leakage during resampling and validation",
      "Selecting metrics that reflect real lending cost of errors",
    ],
    results: [
      "Achieved 81% predictive accuracy on held-out evaluation",
      "Improved minority-class recall via SMOTETomek balancing",
      "Delivered actionable feature importance for risk officers",
      "Documented methodology suitable for academic and industry review",
    ],
    techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "SMOTETomek"],
    githubUrl:
      "https://github.com/nithin1024/Machine-learning-for-bank-loan-risk-assessment_Enhancing-predictive-acuuracy",
    liveUrl:
      "https://github.com/nithin1024/Machine-learning-for-bank-loan-risk-assessment_Enhancing-predictive-acuuracy",
    image: "/projects/bank-loan.svg",
    gradient: "from-emerald-500/20 to-teal-500/5",
  },
  {
    id: "cancer-classification",
    title: "Multi-Class Cancer Classification",
    subtitle: "CNN & Vision Transformer",
    description:
      "Deep learning system for multi-class cancer classification comparing CNN architectures and Vision Transformers in PyTorch, with rigorous confusion-matrix evaluation.",
    overview:
      "This research-oriented project classifies cancer types from medical imagery using convolutional neural networks and Vision Transformers. Models are trained in PyTorch, compared on accuracy and class-wise performance, and analyzed through confusion matrices to surface strengths and failure modes.",
    architecture: [
      "Image preprocessing, augmentation, and stratified dataset splits",
      "CNN baseline architectures for hierarchical visual features",
      "Vision Transformer pathway for attention-based classification",
      "PyTorch training loop with checkpointing and early stopping",
      "Confusion matrix and per-class metric reporting for evaluation",
    ],
    features: [
      "Multi-class cancer image classification",
      "Side-by-side CNN vs Vision Transformer comparison",
      "PyTorch-based reproducible training pipeline",
      "Confusion matrix analysis for clinical interpretability",
      "Augmentation strategies to improve generalization",
    ],
    challenges: [
      "Limited labeled medical data and class imbalance across cancer types",
      "Preventing overfitting on high-capacity Vision Transformer models",
      "Interpreting misclassifications that matter clinically",
    ],
    results: [
      "Comparable multi-class performance across CNN and ViT pathways",
      "Clear confusion-matrix insights into class confusion patterns",
      "Reusable PyTorch training and evaluation codebase",
      "Strong foundation for further medical imaging research",
    ],
    techStack: ["Python", "PyTorch", "CNN", "Vision Transformer", "OpenCV"],
    githubUrl:
      "https://github.com/nithin1024/MultiClass-Cancer-Classification-using-deep-learning-models",
    liveUrl:
      "https://github.com/nithin1024/MultiClass-Cancer-Classification-using-deep-learning-models",
    image: "/projects/cancer-ml.svg",
    gradient: "from-violet-500/20 to-fuchsia-500/5",
  },
];
