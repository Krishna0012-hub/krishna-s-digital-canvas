const skills = [
  { name: "HTML", level: 90, icon: "🌐" },
  { name: "CSS", level: 85, icon: "🎨" },
  { name: "JavaScript", level: 80, icon: "⚡" },
  { name: "jQuery", level: 75, icon: "📦" },
  { name: "PHP", level: 78, icon: "🐘" },
  { name: "CodeIgniter", level: 75, icon: "🔥" },
  { name: "React.js", level: 72, icon: "⚛️" },
  { name: "MySQL", level: 80, icon: "🗄️" },
  { name: "REST APIs", level: 76, icon: "🔗" },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 relative overflow-hidden">
    <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-4 max-w-4xl relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
        My <span className="gradient-text">Skills</span>
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
        Technologies and tools I work with every day.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">{skill.icon}</span>
              <span className="font-semibold text-sm">{skill.name}</span>
              <span className="ml-auto text-sm font-mono text-primary font-medium">
                {skill.level}%
              </span>
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full gradient-bg transition-all duration-700 group-hover:shadow-[0_0_12px_hsl(var(--primary)/0.4)]"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
