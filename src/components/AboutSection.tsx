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
  <section id="about" className="py-20 bg-secondary/50">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl font-bold text-center mb-2">About Me</h2>
      <p className="text-center text-muted-foreground mb-12 max-w-md mx-auto">
        A quick snapshot of who I am and what drives me.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="bg-card rounded-lg border border-border p-6 hover:shadow-md transition-shadow duration-300"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <item.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
