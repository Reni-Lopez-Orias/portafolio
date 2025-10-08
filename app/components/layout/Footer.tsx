import { Sparkles } from "lucide-react";

interface FooterProps {
  t: {
    rights: string;
  };
}

export const Footer = ({ t }: FooterProps) => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-extrabold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {"<Reni/>"}
            </span>
          </div>
          <div className="text-muted-foreground text-center">
            © {new Date().getFullYear()}
            {t.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};