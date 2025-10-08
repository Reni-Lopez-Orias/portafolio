import { forwardRef } from "react";
import { Rocket, Download, ArrowUpRight, Code, Github, Linkedin, Mail } from "lucide-react";
import type { Translation } from "../../types";

interface HeroProps {
  t: Translation["hero"];
  language: string;
  isVisible: boolean;
  onViewProjects: () => void;
}

export const Hero = forwardRef<HTMLElement, HeroProps>(({ t, language, isVisible, onViewProjects }, ref) => {
  return (
    <section ref={ref} className="pt-16 min-h-screen flex items-center relative">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            {/* <div className="mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 text-primary rounded-full text-sm font-medium flex items-center gap-2 w-fit">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                {t.available}
              </span>
            </div> */}

            <h1 className="text-5xl sm:text-7xl font-bold mt-4 mb-8 leading-tight">
              <span className="block">{t.greeting}</span>
              <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-pulse">
                {t.role}
              </span>
            </h1>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl"
                onClick={onViewProjects}
              >
                <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                {t.viewProjects}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <a
                target="_blank"
                href={
                  language === "en"
                    ? "https://resume-reni-lopez.web.app/assets/files/CV-ReniLopez-en.pdf"
                    : "https://resume-reni-lopez.web.app/assets/files/CV-ReniLopez-es.pdf"
                }
                className="px-8 py-4 border-2 border-gradient-to-r from-primary to-secondary rounded-xl font-medium hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                {t.downloadCV}
              </a>
            </div>

            <div className="flex gap-6">
              <a
                target="_blank"
                href="https://github.com/Reni-Lopez-Orias"
                className="p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/reni-lópez-b09a22196"
                className="p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:19lopz@gmail.com"
                className="p-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="relative">
              <div className="w-auto sm:w-96 h-96 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full opacity-20 blur-3xl animate-pulse"></div>
                <div className="flex items-center justify-center relative w-full h-full bg-gradient-to-br from-card to-muted rounded-3xl p-8 shadow-2xl border border-border/50">
                  <div className="text-center space-y-6">
                    <div className="w-20 h-20 mx-auto bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center">
                      <Code className="w-10 h-10 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">
                        {t.yearsExperience}
                      </h3>
                      <p className="text-muted-foreground">
                        {t.developingSolutions}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";