import { forwardRef } from "react";
import { Github, ExternalLink } from "lucide-react";
import type { Translation, Project } from "../../types";

interface ProjectsProps {
  t: Translation["projects"];
  projects: Project[];
}

export const Projects = forwardRef<HTMLElement, ProjectsProps>(
  ({ t, projects }, ref) => {
    return (
      <section
        ref={ref}
        className="pt-16 min-h-screen flex items-center relative"
      >
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {t.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-card to-muted border border-border/50 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl"
              >
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    {project.github !== "" && (
                      <a
                        target="_blank"
                        href={project.github}
                        aria-label="Go to GitHub"
                        className="p-2 bg-gray-500 rounded-full text-white hover:bg-white/30 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    <a
                      target="_blank"
                      href={project.demo}
                      aria-label="Go to project"
                      className="p-2 bg-gray-500 rounded-full text-white hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-xs rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

Projects.displayName = "Projects";
