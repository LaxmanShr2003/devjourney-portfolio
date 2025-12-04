import { Calendar, Building2 } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="mt-12">
            {/* Experience card */}
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full glow-subtle" />
              
              <div className="pb-12">
                <div className="flex flex-wrap items-center gap-4 mb-3">
                  <h3 className="text-xl font-bold">Backend Developer Intern</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-mono">
                    Internship
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-4 text-muted-foreground text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>Reflex IT Solution</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Aug 2024 – Jan 2025 (6 months)</span>
                  </div>
                </div>

                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>Built web applications using Node.js and Express.js framework</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>Developed and optimized RESTful APIs for seamless data exchange</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>Integrated MySQL database for efficient data management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>Implemented security best practices and JWT authentication</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1.5">▹</span>
                    <span>Collaborated with frontend developers to improve UI/UX integration</span>
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["Node.js", "Express", "MySQL", "JWT", "REST APIs"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-md font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
