import { Building2, Target, Zap } from "lucide-react";

const highlights = [
  {
    icon: Building2,
    title: "Enfoque empresarial",
    description: "Soluciones diseñadas para las necesidades reales de tu organización.",
  },
  {
    icon: Target,
    title: "Precisión técnica",
    description: "Diagnósticos detallados y planes de acción concretos para cada caso.",
  },
  {
    icon: Zap,
    title: "Respuesta inmediata",
    description: "Equipo disponible para resolver incidencias de manera rápida y eficiente.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-section-alt">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Sobre el proyecto
          </h2>
          <p className="text-lg text-muted-foreground">
            TechSupport Pro es un servicio integral de soporte técnico empresarial. Nos especializamos en auditoría física y digital de equipos, gestión de inventario tecnológico (CMDB), seguridad con Windows Defender, soporte remoto y optimización de infraestructura TI.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
