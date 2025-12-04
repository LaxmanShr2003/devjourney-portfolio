import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-primary font-mono text-sm">05.</span>
            <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
            <div className="flex-1 h-px bg-border ml-4" />
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-12">
            {/* Contact info */}
            <div>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm currently open to new opportunities and always interested in discussing 
                backend development, DevOps practices, or any exciting projects. Feel free 
                to reach out!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:laxmangit9861@gmail.com"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground">Email</p>
                    <p className="text-foreground">laxmangit9861@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+9779861962333"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-all group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground">Phone</p>
                    <p className="text-foreground">+977 9861962333</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-mono text-muted-foreground">Location</p>
                    <p className="text-foreground">Budhanilkantha, Kathmandu, Nepal</p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-4 mt-8">
                <a
                  href="https://github.com/LaxmanShr2003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://linkedin.com/in/laxman-shrestha-9619ba230"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card border border-border rounded-lg text-muted-foreground hover:text-primary hover:border-primary transition-all"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* CTA Card */}
            <div className="flex flex-col items-center justify-center p-8 bg-gradient-card border border-primary/30 rounded-lg text-center">
              <div className="p-4 bg-primary/10 rounded-full mb-6">
                <Send className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
              <p className="text-muted-foreground mb-6">
                Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:laxmangit9861@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
