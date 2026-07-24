export interface Project {
  id: string;
  title: string;
  summary: string;
  thumbnail: string;
  technologies: string[];
  viewProjectUrl: string;
  githubUrl: string;
}

export interface JourneyMilestone {
  id: string;
  title: string;
  description?: string;
}

export interface Experience {
  id: string;
  category: string;
  title: string;
  description: string;
  period?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
