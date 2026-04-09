import { ArrowDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
    </div>

    <div className="container mx-auto text-center max-w-3xl">
      <p className="text-primary font-mono text-sm tracking-wider mb-4 animate-fade-up">
        Hello, I'm
      </p>
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-up-delay-1">
        <span className="gradient-text">Krishna Dubey</span>
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 animate-fade-up-delay-2">
        Junior Web Developer
      </h2>
      <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10 animate-fade-up-delay-3">
        Building responsive and user-friendly web applications
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
        <Button size="lg" asChild>
          <a href="#projects">
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#contact">
            <Send className="mr-2 h-4 w-4" />
            Contact Me
          </a>
        </Button>
      </div>
    </div>
  </section>
);

export default HeroSection;
