import { MapPin, GraduationCap, Briefcase } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {/* Main content */}
            <div className="md:col-span-2 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                I'm an enthusiastic and detail-oriented developer with a keen interest in Backend Development 
                and a growing passion for DevOps engineering. I have hands-on experience in creating and 
                maintaining web applications, handling data, building secure systems, and ensuring smooth 
                application performance.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Currently transitioning from a Node.js developer role towards DevOps, I'm actively learning 
                cloud infrastructure, containerization with Docker, and CI/CD practices. I believe in 
                delivering reliable, scalable, and efficient solutions while continuously growing as a professional.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My experience includes working with AWS services (EC2, S3, RDS, Lambda), implementing 
                microservices architecture, and deploying applications in both traditional and serverless 
                environments.
              </p>

              {/* Quick info cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Kathmandu, Nepal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card border border-border rounded-lg">
                  <Briefcase className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-mono text-sm text-muted-foreground">Experience</p>
                    <p className="text-foreground">6+ months internship</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education card */}
            <div className="space-y-4">
              <div className="p-6 bg-card border border-border rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                  <h3 className="font-mono font-semibold">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-foreground font-medium">B.Sc. Information Technology</p>
                    <p className="text-sm text-muted-foreground">LBEF (APU Affiliated)</p>
                    <p className="text-xs text-primary font-mono mt-1">2025</p>
                  </div>
                  <div className="h-px bg-border" />
                  <div>
                    <p className="text-foreground font-medium">+2 Management</p>
                    <p className="text-sm text-muted-foreground">Computer Science</p>
                    <p className="text-xs text-primary font-mono mt-1">New Millennium College</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
