import { ExternalLink, Github } from "lucide-react";
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
  <section id="projects" className="py-20 bg-secondary/50">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-2">Projects</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
        A selection of things I've built recently.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-card rounded-lg border border-border p-6 flex flex-col hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded"
                >
                  {t}
                </span>
              ))}
            </div>
            {/* <div className="flex gap-3">
              <Button size="sm" variant="outline" asChild>
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1.5 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button size="sm" variant="ghost" asChild>
                <a href={p.github} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1.5 h-4 w-4" />
                  Demo
                </a>
              </Button>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
