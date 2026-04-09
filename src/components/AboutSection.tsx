import { GraduationCap, Code, Lightbulb } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-20 section-alt">
    <div className="container mx-auto px-4 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
        About <span className="gradient-text">Me</span>
      </h2>
      <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
        A quick snapshot of who I am and what drives me.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {[
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
        ].map((item) => (
          <div
            key={item.title}
            className="bg-card rounded-lg p-6 shadow-sm border border-border hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
              <item.icon className="h-6 w-6 text-primary-foreground" />
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
