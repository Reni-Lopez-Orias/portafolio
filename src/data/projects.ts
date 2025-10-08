import type { Project } from "../types";

export const projects = (t: any, language: string): Project[] => [
  {
    title: language === "es" ? "Next.js SEO Fundamentals de Vercel" : "Next.js SEO Fundamentals de Vercel",
    description: language === "es" 
      ? "Next.Certificación en Next.js SEO Fundamentals otorgada por Vercel, enfocada en optimización del rendimiento y posicionamiento web con Next.jsjs SEO Fundamentals de Vercel"
      : "Certified in Next.js SEO Fundamentals by Vercel, focused on performance optimization and web SEO using Next.js.",
    image: "/images/NextSEO.png",
    technologies: ["NextJS", "React Components", "TypeScript", "TailwindCSS"],
    github: "https://github.com/Reni-Lopez-Orias/nextjs-lighthouse",
    demo: "https://nextjs-lighthouse-zeta.vercel.app/",
    featured: true,
    color: "",
  },
  {
    title: language === "es" ? "Sport Schedule" : "Sport Schedule",
    description: language === "es"
      ? "Utiliza la API de ESPN para mostrar los partidos de diferentes ligas por fecha. Muestra cuotas para apuestas deportivas. Funciona perfectamente en dispositivos de escritorio y móviles."
      : "Uses the ESPN API to display games from different leagues by date. Shows odds for sports betting. Works seamlessly on desktop and mobile devices.",
    image: "/images/SportSchedule.png",
    technologies: ["Next.js", "React Components", "TypeScript", "TailwindCSS", "ESPN API", "Vercel"],
    github: "https://github.com/Reni-Lopez-Orias/sport-schedule",
    demo: "https://sport-schedule.vercel.app/",
    featured: true,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: language === "es" ? "To-Do App" : "To-Do App",
    description: language === "es"
      ? "Aplicación To-Do desarrollada con Next.js 14, que permite gestionar tareas con autenticación, validaciones y base de datos en la nube."
      : "To-Do App built with Next.js 14, featuring task management with authentication, validation, and cloud database integration.",
    image: "/images/TodoApp.png",
    technologies: ["Next.js", "React Components", "TailwindCSS + daisyUI", "PostgreSQL (Neon)"],
    github: "https://github.com/Reni-Lopez-Orias/next-todo",
    demo: "https://next-todo-tan-xi.vercel.app/sign-in",
    featured: false,
    color: "from-violet-500 to-purple-500",
  },
  {
    title: language === "es" ? "wagerhub.net" : "wagerhub.net",
    description: language === "es"
      ? "WagerHub es la página principal para agentes de un sportsbook, mostrando partidos de diferentes ligas, cuotas de apuestas y estadísticas clave, con un diseño responsivo y moderno para escritorio y dispositivos móviles."
      : "WagerHub is the front page for sportsbook agents, displaying games from various leagues, betting odds, and key statistics, with a responsive and modern design for desktop and mobile devices.",
    image: "/images/WagerHub.png",
    technologies: ["React", "Bootstrap"],
    github: "",
    demo: "https://wagerhub.net",
    featured: false,
    color: "from-emerald-500 to-teal-500",
  },
];