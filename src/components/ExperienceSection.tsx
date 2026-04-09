import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => (
  <section id="experience" className="py-20">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        My <span className="gradient-text">Experience</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
        Professional journey so far.
      </p>

      <div className="relative border-l-2 border-primary/30 ml-4">
        {[
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
        ].map((exp) => (
          <div key={exp.role + exp.type} className="mb-10 ml-8 relative">
            <div className="absolute -left-[2.55rem] top-1 w-5 h-5 rounded-full gradient-bg border-4 border-background" />
            <div className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <Briefcase className="h-4 w-4 text-primary" />
                <h3 className="font-semibold">{exp.role}</h3>
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">
                  {exp.type}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{exp.company}</p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                <Calendar className="h-3 w-3" />
                {exp.period}
              </div>
              <ul className="space-y-1">
                {exp.points.map((pt) => (
                  <li key={pt} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary mt-1">•</span>
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
