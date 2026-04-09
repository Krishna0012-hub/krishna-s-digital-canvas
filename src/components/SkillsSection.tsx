const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "jQuery", level: 75 },
  { name: "PHP", level: 78 },
  { name: "CodeIgniter", level: 75 },
  { name: "React.js", level: 72 },
  { name: "MySQL", level: 80 },
  { name: "REST APIs", level: 76 },
];

const SkillsSection = () => (
  <section id="skills" className="py-20">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        My <span className="gradient-text">Skills</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
        Technologies and tools I work with every day.
      </p>

      <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2.5 rounded-full bg-muted overflow-hidden">
              <div
                className="h-full rounded-full gradient-bg transition-all duration-700"
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
