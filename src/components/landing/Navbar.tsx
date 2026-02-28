import { Monitor } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Monitor className="h-6 w-6 text-primary" />
          <span className="font-heading text-xl font-bold text-foreground">
            TechSupport <span className="text-primary">Pro</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Nosotros</a>
          <a href="#benefits" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Beneficios</a>
          <a href="#cta" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contacto</a>
        </div>
        <a
          href="#cta"
          className="hidden sm:inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Solicitar info
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
