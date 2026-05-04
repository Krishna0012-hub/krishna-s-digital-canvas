import {
  Braces,
  Code2,
  Database,
  FileCode2,
  Flame,
  Globe2,
  Layers,
  Paintbrush,
  PlugZap,
} from "lucide-react";

const skills = [
  { name: "HTML", level: 90, icon: Globe2 },
  { name: "CSS", level: 85, icon: Paintbrush },
  { name: "JavaScript", level: 80, icon: Braces },
  { name: "jQuery", level: 75, icon: Layers },
  { name: "PHP", level: 78, icon: FileCode2 },
  { name: "CodeIgniter", level: 75, icon: Flame },
  { name: "React.js", level: 72, icon: Code2 },
  { name: "MySQL", level: 80, icon: Database },
  { name: "REST APIs", level: 76, icon: PlugZap },
];

const SkillsSection = () => (
  <section id="skills" className="relative overflow-hidden bg-[#030805] py-20 text-emerald-50">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center_left,rgba(16,185,129,0.18),transparent_32%),linear-gradient(135deg,rgba(3,8,5,0.98),rgba(4,17,11,0.97)_52%,rgba(0,30,16,0.98))]" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />

    <div className="container relative mx-auto max-w-4xl px-4">
      <h2 className="mb-2 text-center text-3xl font-bold text-white">Skills</h2>
      <p className="mx-auto mb-12 max-w-md text-center text-emerald-100/70">
        Technologies and tools I work with every day.
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="rounded-lg border border-emerald-400/20 bg-white/[0.06] p-4 shadow-lg shadow-emerald-950/25 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/45"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-400/15 ring-1 ring-emerald-300/25">
                <skill.icon className="h-4 w-4 text-emerald-300" />
              </span>
              <span className="text-sm font-medium text-white">{skill.name}</span>
              <span className="ml-auto font-mono text-sm text-emerald-100/60">
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-emerald-950/70 ring-1 ring-emerald-400/10">
              <div
                className="h-full rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)] transition-all duration-500"
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
