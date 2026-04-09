import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Junior Web Developer",
    company: "Stackerbee Technology",
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
  <section id="experience" className="py-24 relative overflow-hidden">
    <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-4 max-w-3xl relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
        My <span className="gradient-text">Experience</span>
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
        Professional journey so far.
      </p>

      <div className="relative border-l-2 border-primary/20 ml-4">
        {experiences.map((exp) => (
          <div key={exp.role + exp.type} className="mb-10 ml-8 relative group">
            <div className="absolute -left-[2.55rem] top-1 w-5 h-5 rounded-full gradient-bg border-4 border-background shadow-md group-hover:scale-125 transition-transform duration-300" />
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-xl transition-all duration-500">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <h3 className="font-semibold">{exp.role}</h3>
                <span className="text-xs gradient-bg text-primary-foreground px-3 py-0.5 rounded-full font-medium">
                  {exp.type}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{exp.company}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-4">
                <Calendar className="h-3 w-3" />
                {exp.period}
              </div>
              <ul className="space-y-2">
                {exp.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-0.5 shrink-0">▹</span>
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
