import type { Skill } from "../types";
import { Globe, Server, Database, Smartphone } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const skills = (t: any): Skill[] => [
  {
    name: t.skills.frontend,
    icon: Globe, // Pasa el componente, no el JSX
    color: "from-pink-500 to-rose-500",
    technologies: ["React", "Angular", "TypeScript", "Next.js"],
    level: 95,
  },
  {
    name: t.skills.backend,
    icon: Server,
    color: "from-blue-500 to-indigo-500",
    technologies: ["Node.js", ".Net", "Express", "NestJS"],
    level: 90,
  },
  {
    name: t.skills.database,
    icon: Database,
    color: "from-green-500 to-emerald-500",
    technologies: ["PostgreSQL", "MongoDB", "SQL Server", "Firebase"],
    level: 85,
  },
  {
    name: t.skills.mobile,
    icon: Smartphone,
    color: "from-purple-500 to-violet-500",
    technologies: ["React Native", "Ionic", "iOS", "Android"],
    level: 80,
  },
];