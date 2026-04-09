import { GraduationCap, Code, Lightbulb } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "MCA & BCA graduate with a strong academic foundation in computer science and application development.",
    color: "from-primary to-accent",
  },
  {
    icon: Code,
    title: "Development",
    text: "Skilled in HTML, CSS, JavaScript, jQuery, PHP, CodeIgniter, React.js, MySQL, and RESTful APIs.",
    color: "from-accent to-primary",
  },
  {
    icon: Lightbulb,
    title: "Passion",
    text: "Passionate about building clean, functional interfaces and continuously exploring new web technologies.",
    color: "from-primary via-accent to-primary",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 section-alt relative overflow-hidden">
    <div className="absolute top-0 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-4 max-w-5xl relative">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
        About <span className="gradient-text">Me</span>
      </h2>
      <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
        A quick snapshot of who I am and what drives me.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="group relative bg-card rounded-xl p-7 border border-border hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
          >
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
              <item.icon className="h-7 w-7 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-0.5 gradient-bg transition-all duration-500 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
