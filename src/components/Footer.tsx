const Footer = () => (
  <footer className="relative overflow-hidden border-t border-emerald-400/20 bg-[#030805] py-8 text-emerald-50">
    <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(3,8,5,0.98),rgba(0,26,14,0.96))]" />
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/70 to-transparent" />

    <div className="container relative mx-auto px-4 text-center">
      <p className="text-sm text-emerald-100/65">
        Copyright {new Date().getFullYear()} Krishna Dubey
      </p>
    </div>
  </footer>
);

export default Footer;
