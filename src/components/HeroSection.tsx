import { ArrowDown, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030805] px-4 text-emerald-50">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.25),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(34,197,94,0.16),transparent_30%),linear-gradient(135deg,rgba(3,8,5,0.98),rgba(5,18,12,0.97)_48%,rgba(0,30,16,0.98))]" />
    <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />

    <div className="container relative mx-auto max-w-2xl text-center">
      <p className="mb-4 font-mono text-sm font-medium tracking-wider text-emerald-300">
        Hello, I'm
      </p>
      <h1 className="mb-4 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
        Krishna Dubey
      </h1>
      <h2 className="mb-6 text-xl font-medium text-emerald-100/80 md:text-2xl">
        Junior Web Developer
      </h2>
      <p className="mx-auto mb-10 max-w-md text-base text-emerald-100/70">
        Building responsive and user-friendly web applications with modern technologies.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button size="lg" className="bg-emerald-400 px-8 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-300" asChild>
          <a href="#projects">
            View Projects
            <ArrowDown className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <Button size="lg" variant="outline" className="border-emerald-400/40 bg-white/[0.04] px-8 text-emerald-50 hover:bg-emerald-400 hover:text-slate-950" asChild>
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
