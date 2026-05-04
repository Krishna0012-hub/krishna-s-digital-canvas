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
  <section id="experience" className="relative overflow-hidden bg-[#030805] py-20 text-emerald-50">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.2),transparent_34%),linear-gradient(135deg,rgba(3,8,5,0.98),rgba(4,17,11,0.97)_52%,rgba(0,30,16,0.98))]" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />

    <div className="container relative mx-auto max-w-3xl px-4">
      <h2 className="mb-2 text-center text-3xl font-bold text-white">Experience</h2>
      <p className="mx-auto mb-12 max-w-md text-center text-emerald-100/70">
        Professional journey so far.
      </p>

      <div className="relative ml-4 border-l-2 border-emerald-400/25">
        {experiences.map((exp) => (
          <div key={exp.role + exp.type} className="relative mb-8 ml-8">
            <div className="absolute -left-[2.35rem] top-1.5 h-4 w-4 rounded-full border-[3px] border-[#030805] bg-emerald-400 shadow-lg shadow-emerald-400/40" />
            <div className="rounded-lg border border-emerald-400/20 bg-white/[0.06] p-5 shadow-xl shadow-emerald-950/30 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/45 hover:shadow-emerald-900/35">
              <div className="mb-1 flex flex-wrap items-center gap-2">
                <Briefcase className="h-4 w-4 text-emerald-300" />
                <h3 className="font-semibold text-white">{exp.role}</h3>
                <span className="rounded bg-emerald-400/15 px-2 py-0.5 text-xs font-medium text-emerald-300 ring-1 ring-emerald-300/20">
                  {exp.type}
                </span>
              </div>
              <p className="mb-1 text-sm text-emerald-100/70">{exp.company}</p>
              <div className="mb-3 flex items-center gap-1 text-xs text-emerald-100/55">
                <Calendar className="h-3 w-3" />
                {exp.period}
              </div>
              <ul className="space-y-1.5">
                {exp.points.map((pt) => (
                  <li key={pt} className="flex gap-2 text-sm text-emerald-50/75">
                    <span className="mt-0.5 shrink-0 text-emerald-300">*</span>
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
