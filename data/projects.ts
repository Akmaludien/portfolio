import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    id: "rainfall-prediction",
    title: "Rainfall Monitoring & Prediction System",
    summary:
      "End-to-end AI-powered rainfall monitoring and forecasting system combining Bidirectional LSTM, backend services, REST APIs, and monitoring dashboards — built as an undergraduate thesis.",
    thumbnail: "/images/project-rainfall.jpg",
    technologies: [
      "Python",
      "TensorFlow",
      "Bi-LSTM",
      "FastAPI",
      "MQTT",
      "InfluxDB",
      "Docker",
    ],
    viewProjectUrl: "https://www.simprech-jabar.my.id/",
    githubUrl: "https://github.com/Akmaludien/rainfall-prediction",
  },
  {
    id: "skdquest",
    title: "SKDQuest",
    summary:
      "Gamified learning platform for SKD preparation with interactive quizzes, progression systems, leaderboards, analytics, and real-time backend powered by Supabase.",
    thumbnail: "/images/project-skd.jpg",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Supabase",
      "Framer Motion",
    ],
    viewProjectUrl: "https://skdquest.vercel.app",
    githubUrl: "https://github.com/Madtoy14/PROJECT-SKD",
  },
  {
    id: "vysera",
    title: "Vysera",
    summary:
      "Personal AI workspace app that organizes AI-assisted workflows, productivity utilities, and development tools in one place.",
    thumbnail: "/images/project-skd.jpg",
    technologies: ["Flutter", "Dart", "Riverpod", "GoRouter"],
    githubUrl: "https://github.com/Akmaludien", // TODO: replace with Vysera repo URL
  },
  {
    id: "vinyasa",
    title: "Vinyasa",
    summary:
      "Design intelligence tool that analyzes reference websites and extracts computed styles, design tokens, and reusable design specifications.",
    thumbnail: "/images/project-rainfall.jpg",
    technologies: ["TypeScript", "Playwright"],
    githubUrl: "https://github.com/Akmaludien", // TODO: replace with Vinyasa repo URL
  },
  {
    id: "nexora",
    title: "Nexora",
    summary:
      "Transforms raw product ideas into structured PRDs and agent-ready development specifications for AI coding tools.",
    thumbnail: "/images/project-skd.jpg",
    technologies: ["TypeScript", "Prompt Engineering", "AI Workflows"],
    githubUrl: "https://github.com/Akmaludien", // TODO: replace with Nexora repo URL
  },
];
