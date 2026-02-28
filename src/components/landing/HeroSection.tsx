import heroImage from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Soporte TI empresarial
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            TechSupport{" "}
            <span className="text-gradient-primary">Pro</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-lg">
            Soluciones tecnológicas para empresas modernas. Auditoría, seguridad, gestión de activos y soporte remoto 24/7.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
            >
              Solicitar información
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-base font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Ver beneficios
            </a>
          </div>
        </div>
        <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <img
            src={heroImage}
            alt="Ilustración de soporte técnico e infraestructura TI"
            className="w-full max-w-lg mx-auto drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
