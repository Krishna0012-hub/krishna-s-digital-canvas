import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Junior Web Developer",
    company: "Deep Connection Innovation Pvt Ltd",
    type: "Full-time",
    period: "Present",
    points: [
      "Building and maintaining responsive web applications using PHP, CodeIgniter and React.js",
      "Collaborating with cross-functional teams to deliver client projects on time",
      "Integrating REST APIs and third-party services",
    ],
  },
  {
    role: "Web Development Intern",
    company: "Stackerbee Technology",
    type: "Internship",
    period: "Prior",
    points: [
      "Developed UI components and landing pages from design mockups",
      "Learned production-level coding standards and version control workflows",
      "Assisted in database design and backend API development",
    ],
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl font-bold text-center mb-2">Experience</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
        Professional journey so far.
      </p>

      <div className="relative border-l-2 border-border ml-4">
        {experiences.map((exp) => (
          <div key={exp.role + exp.type} className="mb-8 ml-8 relative">
            <div className="absolute -left-[2.35rem] top-1.5 w-4 h-4 rounded-full bg-primary border-[3px] border-background" />
            <div className="bg-card border border-border rounded-lg p-5 hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Briefcase className="h-4 w-4 text-primary" />
                <h3 className="font-semibold">{exp.role}</h3>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded font-medium">
                  {exp.type}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{exp.company}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                <Calendar className="h-3 w-3" />
                {exp.period}
              </div>
              <ul className="space-y-1.5">
                {exp.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">•</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
