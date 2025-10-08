
import { useState, useEffect, useRef } from "react";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Navigation } from "../components/layout/Navigation";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Projects } from "../components/sections/Projects";
import { Skills } from "../components/sections/Skills";
import { AnimatedBackground } from "../components/ui/AnimatedBackground";
import { projects } from "../data/projects";
import { skills } from "../data/skills";
import { translations } from "../data/translations";
import { useLanguage } from "../hooks/useLanguage";
import { useMousePosition } from "../hooks/useMousePosition";
import { useTheme } from "../hooks/useTheme";

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage } = useLanguage();
  const mousePosition = useMousePosition();

  // Corrige los tipos de las refs
  const inicioRef = useRef<HTMLElement>(null);
  const habilidadesRef = useRef<HTMLElement>(null);
  const proyectosRef = useRef<HTMLElement>(null);
  const contactoRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLElement> } = {
      inicio: inicioRef,
      habilidades: habilidadesRef,
      proyectos: proyectosRef,
      contacto: contactoRef,
    };

    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const t = translations[language];
  const skillsData = skills(t);
  const projectsData = projects(t, language);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <AnimatedBackground mousePosition={mousePosition} />

      <Header>
        <Navigation
          theme={theme}
          language={language}
          isMenuOpen={isMenuOpen}
          onThemeToggle={toggleTheme}
          onLanguageToggle={toggleLanguage}
          onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
          onNavigate={scrollToSection}
          t={t}
        />
      </Header>

      <Hero
        ref={inicioRef}
        t={t.hero}
        language={language}
        isVisible={isVisible}
        onViewProjects={() => scrollToSection("proyectos")}
      />

      <Skills ref={habilidadesRef} t={t.skills} skills={skillsData} />

      <Projects ref={proyectosRef} t={t.projects} projects={projectsData} />

      <Contact ref={contactoRef} t={t.contact} />

      <Footer t={t.footer} />
    </div>
  );
}
