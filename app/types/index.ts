import { LucideIcon } from "lucide-react";

export type Theme = "light" | "dark";
export type Language = "es" | "en";

export interface Skill {
  name: string;
  icon: LucideIcon;
  color: string;
  technologies: string[];
  level: number;
}

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  demo: string;
  featured: boolean;
  color: string;
}

export interface Translation {
  nav: {
    inicio: string;
    habilidades: string;
    proyectos: string;
    contacto: string;
  };
  hero: {
    available: string;
    greeting: string;
    role: string;
    description: string;
    viewProjects: string;
    downloadCV: string;
    yearsExperience: string;
    developingSolutions: string;
  };
  skills: {
    title: string;
    subtitle: string;
    frontend: string;
    backend: string;
    database: string;
    mobile: string;
  };
  projects: {
    title: string;
    subtitle: string;
    featured: string;
    code: string;
    demo: string;
  };
  contact: {
    title: string;
    subtitle: string;
    info: string;
    email: string;
    name: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    message: string;
    messagePlaceholder: string;
    sendMessage: string;
  };
  footer: {
    rights: string;
  };
}