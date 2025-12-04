import { Terminal, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a href="#" className="flex items-center gap-2 text-primary font-mono text-sm">
            <Terminal className="w-4 h-4" />
            <span>laxman.dev</span>
          </a>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-terminal-red fill-terminal-red" /> by Laxman Shrestha
          </p>

          <p className="text-muted-foreground text-sm font-mono">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
