import { ArrowDown, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
    {/* Animated background orbs */}
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 left-[10%] w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>

    <div className="container mx-auto text-center max-w-3xl">
      <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-up">
        <Sparkles className="h-4 w-4" />
        Available for hire
      </div>
      <p className="text-primary font-mono text-sm tracking-wider mb-4 animate-fade-up">
        Hello, I'm
      </p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 animate-fade-up-delay-1 leading-tight">
        <span className="gradient-text">Krishna Dubey</span>
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6 animate-fade-up-delay-2">
        Junior Web Developer
      </h2>
      <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-10 animate-fade-up-delay-3">
        Building responsive and user-friendly web applications with modern technologies
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up-delay-3">
        <Button size="lg" className="gradient-bg border-0 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 px-8" asChild>
          <a href="#projects">
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" className="backdrop-blur-sm bg-card/50 hover:bg-card hover:scale-105 transition-all duration-300 px-8" asChild>
          <a href="#contact">
            <Send className="mr-2 h-4 w-4" />
            Contact Me
          </a>
        </Button>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
      <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-primary/50 rounded-full" />
      </div>
    </div>
  </section>
);

export default HeroSection;
