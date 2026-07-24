import { SkillCategory } from "@/lib/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "AI & ML",
    skills: [
      "Python",
      "TensorFlow",
      "Keras",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Prompt Engineering",
    ],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite"],
  },
  {
    name: "Backend",
    skills: ["FastAPI", "REST API", "MQTT"],
  },
  {
    name: "Database",
    skills: ["Supabase", "PostgreSQL", "SQLite", "InfluxDB"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Git", "GitHub", "Docker", "Linux"],
  },
  {
    name: "Professional",
    skills: [
      "Technical Communication",
      "Documentation",
      "Teaching & Mentoring",
      "Problem Solving",
    ],
  },
];
