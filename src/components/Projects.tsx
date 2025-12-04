import { ExternalLink, Github, Bus, Brain, Cloud, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "School Bus Tracking System",
    description:
      "Real-time school bus tracking system for parents, drivers, and administrators. Features GPS integration, student attendance, chat, and notifications.",
    icon: Bus,
    tags: ["Flutter", "Node.js", "Express", "React", "MySQL", "WebSocket", "Kafka", "Docker"],
    featured: true,
    type: "Final Year Project",
  },
  {
    title: "Mental Health Care - AWS Deployment",
    description:
      "Full-stack mental health web application deployed on AWS Cloud using EC2, S3, RDS, VPC, and NGINX for hosting, storage, and load balancing.",
    icon: Brain,
    tags: ["AWS EC2", "S3", "RDS", "VPC", "NGINX"],
    featured: true,
    type: "Cloud Project",
  },
  {
    title: "Serverless Mental Health App",
    description:
      "Deployed the Mental Health Care project in serverless architecture using AWS Lambda, API Gateway, CloudFormation, and IAM.",
    icon: Cloud,
    tags: ["Serverless Framework", "AWS Lambda", "API Gateway", "CloudFormation", "S3"],
    featured: false,
    type: "Serverless",
  },
  {
    title: "FoodyMan - Food Ordering System",
    description:
      "Online food ordering platform with food management, cart, checkout, and delivery tracking functionality.",
    icon: Utensils,
    tags: ["ASP.NET", "C#", "MS SQL Server"],
    featured: false,
    type: "Web App",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Projects</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <p className="text-muted-foreground mt-4 mb-12 max-w-2xl">
            A selection of projects I've worked on, showcasing my skills in backend development,
            cloud infrastructure, and full-stack applications.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-card ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-primary">{project.type}</span>
                      <h3 className="text-xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="opacity-50 hover:opacity-100">
                      <Github className="w-5 h-5" />
                    </Button>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-md font-mono group-hover:bg-primary/10 group-hover:text-primary transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://github.com/LaxmanShr2003" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                See More on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
