import { forwardRef } from "react";
import type { Translation, Skill } from "../../types";

interface SkillsProps {
  t: Translation["skills"];
  skills: Skill[];
}

export const Skills = forwardRef<HTMLElement, SkillsProps>(({ t, skills }, ref) => {
  return (
    <section ref={ref} className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {t.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon; // Usa el componente
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-card to-muted border border-border/50 rounded-2xl p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                ></div>

                <div className="relative">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8" /> {/* Renderiza el componente */}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{skill.name}</h3>

                  <div className="space-y-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                        ></div>
                        <span className="text-sm text-muted-foreground">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = "Skills";