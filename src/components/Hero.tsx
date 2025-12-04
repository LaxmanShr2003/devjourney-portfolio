import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, Download } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Terminal-style intro */}
          <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-4 mb-8 inline-block animate-fade-in-up">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-3 h-3 rounded-full bg-terminal-red" />
              <span className="w-3 h-3 rounded-full bg-terminal-yellow" />
              <span className="w-3 h-3 rounded-full bg-terminal-green" />
              <span className="ml-2 text-muted-foreground text-xs font-mono">terminal</span>
            </div>
            <code className="text-terminal-green font-mono text-sm md:text-base">
              <span className="text-muted-foreground">$</span> whoami
            </code>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Hi, I'm{" "}
            <span className="text-gradient">Laxman Shrestha</span>
          </h1>

          <div className="flex items-center gap-3 mb-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="h-1 w-12 bg-gradient-primary rounded-full" />
            <p className="text-xl md:text-2xl text-muted-foreground font-mono">
              Backend Developer → DevOps Engineer
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mb-8 animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
            Building scalable backend systems with Node.js while learning the path of DevOps. 
            Passionate about cloud infrastructure, containerization, and delivering reliable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/Laxman_Shrestha_CV.docx" download>
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://github.com/LaxmanShr2003"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all hover:glow-subtle"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/laxman-shrestha-9619ba230"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all hover:glow-subtle"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:laxmangit9861@gmail.com"
              className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all hover:glow-subtle"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </section>
  );
};
