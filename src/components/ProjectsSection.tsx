import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Finance Management System",
    description:
      "A comprehensive finance tracking application built with CodeIgniter 4, featuring expense management, reporting dashboards, and user authentication.",
    tech: ["CodeIgniter 4", "PHP", "MySQL", "JavaScript"],
    github: "https://github.com/krishnadubey",
  },
  {
    title: "ReachOut Therapist Data Website",
    description:
      "A therapist directory platform that helps users find and connect with mental-health professionals, featuring search, filters, and profile pages.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
    github: "https://github.com/krishnadubey",
  },
  {
    title: "KiddiCove — Child Development",
    description:
      "An engaging website focused on early childhood development resources, activities, and milestone tracking for parents and educators.",
    tech: ["React.js", "Tailwind CSS", "REST API"],
    github: "https://github.com/krishnadubey",
  },
  {
    title: "Client Intake Form System",
    description:
      "A streamlined digital intake form system allowing clients to submit information securely, with admin dashboard for data management.",
    tech: ["PHP", "MySQL", "jQuery", "Bootstrap"],
    github: "https://github.com/krishnadubey",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 section-alt relative overflow-hidden">
    <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-4 max-w-5xl relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
        My <span className="gradient-text">Projects</span>
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
        A selection of things I've built recently.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className="group relative bg-card rounded-xl border border-border p-7 flex flex-col hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
          >
            {/* Project number badge */}
            <div className="absolute -top-3 -right-3 w-8 h-8 gradient-bg rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold shadow-lg">
              {String(i + 1).padStart(2, "0")}
            </div>

            <div className="flex items-center gap-3 mb-3">
              <Folder className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                {p.title}
              </h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono bg-primary/5 text-primary border border-primary/10 px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <Button size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground transition-all" asChild>
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button size="sm" variant="ghost" className="hover:text-primary" asChild>
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
