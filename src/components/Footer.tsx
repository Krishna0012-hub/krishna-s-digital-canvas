import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-border/50 bg-card/50">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
        © {new Date().getFullYear()} Krishna Dubey. Made with
        <Heart className="h-4 w-4 text-primary fill-primary animate-pulse" />
      </p>
    </div>
  </footer>
);

export default Footer;
