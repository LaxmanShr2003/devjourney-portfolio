import { Server, Database, Cloud, Code2, GitBranch, Container } from "lucide-react";

const skillCategories = [
  {
    title: "Backend",
    icon: Server,
    color: "text-terminal-green",
    skills: ["Node.js", "Express", "TypeScript", "JavaScript", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    color: "text-terminal-blue",
    skills: ["MySQL", "MongoDB", "MS SQL", "TypeORM", "Mongoose"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "text-primary",
    skills: ["AWS (EC2, S3, RDS, Lambda)", "Docker", "Serverless", "NGINX", "Linux"],
  },
  {
    title: "Architecture",
    icon: Code2,
    color: "text-terminal-yellow",
    skills: ["MVC Pattern", "Repository Pattern", "Microservices", "REST"],
  },
  {
    title: "Tools & Version Control",
    icon: GitBranch,
    color: "text-terminal-red",
    skills: ["Git", "GitHub", "GitHub Actions", "VS Code"],
  },
  {
    title: "Other",
    icon: Container,
    color: "text-muted-foreground",
    skills: ["OOP", "DRY & SOLID", "Agile", "Problem Solving"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Skills & Tools</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <p className="text-muted-foreground mt-4 mb-12 max-w-2xl">
            Technologies and tools I work with regularly to build scalable applications 
            and infrastructure.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                  <h3 className="font-mono font-semibold text-lg">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-md font-mono group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* DevOps Journey note */}
          <div className="mt-12 p-6 bg-gradient-card border border-primary/30 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-mono font-semibold text-lg mb-2">DevOps Journey</h4>
                <p className="text-muted-foreground">
                  Currently expanding my skillset in Kubernetes, Terraform, CI/CD pipelines, 
                  and infrastructure as code. Committed to mastering cloud-native technologies 
                  and automation practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
