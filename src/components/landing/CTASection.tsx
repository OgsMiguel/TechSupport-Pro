import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="py-20 bg-section-alt">
      <div className="container">
        <div className="relative rounded-2xl overflow-hidden bg-primary px-6 py-16 sm:px-16 text-center">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full translate-x-1/3 translate-y-1/3" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">
              ¿Listo para optimizar tu infraestructura?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Contáctanos hoy y descubre cómo TechSupport Pro puede transformar la gestión tecnológica de tu empresa.
            </p>
            <a
              href="mailto:contacto@techsupportpro.com"
              className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-3.5 text-base font-semibold text-secondary-foreground hover:bg-secondary/90 transition-colors shadow-lg"
            >
              Solicitar información
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
