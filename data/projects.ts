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
];
