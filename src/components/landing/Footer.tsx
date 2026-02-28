import { Monitor } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t py-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Monitor className="h-5 w-5 text-primary" />
          <span className="font-heading font-bold text-foreground">TechSupport Pro</span>
        </div>
        <p className="text-sm text-muted-foreground">© 2026 Miguel Nava</p>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Facebook</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
