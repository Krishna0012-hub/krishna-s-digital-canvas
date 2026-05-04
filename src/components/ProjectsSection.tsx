const projects = [
  {
    title: "Finance Management System",
    description:
      "A comprehensive finance tracking application built with CodeIgniter 4, featuring expense management, reporting dashboards, and user authentication.",
    tech: ["CodeIgniter 4", "PHP", "MySQL", "JavaScript"],
  },
  {
    title: "ReachOut Therapist Data Website",
    description:
      "A therapist directory platform that helps users find and connect with mental-health professionals, featuring search, filters, and profile pages.",
    tech: ["HTML", "CSS", "JavaScript", "PHP"],
  },
  {
    title: "KiddiCove - Child Development",
    description:
      "An engaging website focused on early childhood development resources, activities, and milestone tracking for parents and educators.",
    tech: ["React.js", "Tailwind CSS", "REST API"],
  },
  {
    title: "Client Intake Form System",
    description:
      "A streamlined digital intake form system allowing clients to submit information securely, with admin dashboard for data management.",
    tech: ["PHP", "MySQL", "jQuery", "Bootstrap"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="relative overflow-hidden bg-[#030805] py-20 text-emerald-50">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.2),transparent_34%),linear-gradient(135deg,rgba(3,8,5,0.98),rgba(4,17,11,0.97)_52%,rgba(0,30,16,0.98))]" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />

    <div className="container relative mx-auto max-w-4xl px-4">
      <h2 className="mb-2 text-center text-3xl font-bold text-white">Projects</h2>
      <p className="mx-auto mb-12 max-w-md text-center text-emerald-100/70">
        A selection of things I've built recently.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            className="flex flex-col rounded-lg border border-emerald-400/20 bg-white/[0.06] p-6 shadow-xl shadow-emerald-950/30 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/45 hover:shadow-emerald-900/35"
          >
            <h3 className="mb-2 text-lg font-semibold text-white">{p.title}</h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-emerald-50/75">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded bg-emerald-400/15 px-2 py-0.5 text-xs font-medium text-emerald-300 ring-1 ring-emerald-300/20"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
