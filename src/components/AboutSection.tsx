import { GraduationCap, Code, Lightbulb } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "MCA & BCA graduate with a strong academic foundation in computer science and application development.",
  },
  {
    icon: Code,
    title: "Development",
    text: "Skilled in HTML, CSS, JavaScript, jQuery, PHP, CodeIgniter, React.js, MySQL, and RESTful APIs.",
  },
  {
    icon: Lightbulb,
    title: "Passion",
    text: "Passionate about building clean, functional interfaces and continuously exploring new web technologies.",
  },
];

const AboutSection = () => (
  <section id="about" className="relative overflow-hidden bg-[#030805] py-20 text-emerald-50">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.2),transparent_34%),linear-gradient(135deg,rgba(3,8,5,0.98),rgba(4,17,11,0.97)_52%,rgba(0,30,16,0.98))]" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />

    <div className="container relative mx-auto max-w-4xl px-4">
      <h2 className="mb-2 text-center text-3xl font-bold text-white">About Me</h2>
      <p className="mx-auto mb-12 max-w-md text-center text-emerald-100/70">
        A quick snapshot of who I am and what drives me.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-emerald-400/20 bg-white/[0.06] p-6 shadow-xl shadow-emerald-950/30 backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/45 hover:shadow-emerald-900/35"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-400/15 ring-1 ring-emerald-300/25">
              <item.icon className="h-6 w-6 text-emerald-300" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm leading-relaxed text-emerald-50/75">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
