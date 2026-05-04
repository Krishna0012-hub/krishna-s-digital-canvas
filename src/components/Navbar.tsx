import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  // { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 px-4 py-3">
      <div
        className={`container mx-auto flex items-center justify-between rounded-lg border px-4 py-3 transition-all duration-300 ${
          scrolled
            ? "border-emerald-400/25 bg-[#030805]/90 shadow-lg shadow-emerald-950/30 backdrop-blur-xl"
            : "border-emerald-400/15 bg-[#030805]/45 backdrop-blur-md"
        }`}
      >
        <a
          href="#"
          className="font-mono text-sm font-semibold tracking-wider text-emerald-300 transition-colors hover:text-emerald-200"
          aria-label="Home"
        >
          Krishna Dubey
        </a>

        <div className="hidden items-center gap-2 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-emerald-100/70 transition-colors hover:bg-emerald-400/10 hover:text-emerald-200"
            >
              {l.label}
            </a>
          ))}
          <Button
            size="sm"
            className="ml-2 bg-emerald-400 font-semibold text-slate-950 shadow-md shadow-emerald-500/20 hover:bg-emerald-300"
            asChild
          >
            <a href="/Krishna_Resume (2).pdf" download="Krishna_Resume (2).pdf">
              <Download className="mr-1.5 h-4 w-4" />
              Resume
            </a>
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-emerald-400/20 bg-white/[0.06] text-emerald-100 transition-colors hover:border-emerald-300 hover:bg-emerald-400 hover:text-slate-950 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isOpen && (
        <div className="container mx-auto mt-2 rounded-lg border border-emerald-400/20 bg-[#030805]/95 shadow-xl shadow-emerald-950/35 backdrop-blur-xl md:hidden">
          <div className="flex flex-col items-center gap-2 px-4 py-5">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setIsOpen(false)}
                className="w-full rounded-md px-3 py-2 text-center text-sm font-medium text-emerald-100/70 transition-colors hover:bg-emerald-400/10 hover:text-emerald-200"
              >
                {l.label}
              </a>
            ))}
            <Button
              size="sm"
              className="mt-2 w-full bg-emerald-400 font-semibold text-slate-950 hover:bg-emerald-300"
              asChild
            >
              <a href="/Krishna_Resume (2).pdf" download="Krishna_Resume (2).pdf">
                <Download className="mr-1.5 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
