import { ArrowDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-4">
    <div className="container mx-auto text-center max-w-2xl">
      <p className="text-primary font-mono text-sm tracking-wider mb-4">
        Hello, I'm
      </p>
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-foreground">
        Krishna Dubey
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
        Junior Web Developer
      </h2>
      <p className="text-muted-foreground text-base max-w-md mx-auto mb-10">
        Building responsive and user-friendly web applications with modern technologies.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" className="px-8" asChild>
          <a href="#projects">
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" className="px-8" asChild>
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
