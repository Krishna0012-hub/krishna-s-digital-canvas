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
  <section id="skills" className="py-20">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-2">Skills</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
        Technologies and tools I work with every day.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-card border border-border rounded-lg p-4 hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xl">{skill.icon}</span>
              <span className="font-medium text-sm">{skill.name}</span>
              <span className="ml-auto text-sm font-mono text-muted-foreground">
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-500"
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
