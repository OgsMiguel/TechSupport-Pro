import { ClipboardCheck, Database, ShieldCheck, Headphones } from "lucide-react";

const benefits = [
  {
    icon: ClipboardCheck,
    title: "Auditoría de equipos",
    description: "Revisión física y digital completa de hardware y software en tu organización.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Database,
    title: "Gestión de activos tecnológicos",
    description: "Control y seguimiento de inventario con base de datos CMDB actualizada.",
    color: "bg-secondary/30 text-secondary-foreground",
  },
  {
    icon: ShieldCheck,
    title: "Seguridad y monitoreo",
    description: "Protección continua con Windows Defender y políticas de seguridad empresarial.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Headphones,
    title: "Soporte remoto 24/7",
    description: "Asistencia técnica remota disponible las 24 horas para tu equipo de trabajo.",
    color: "bg-primary/10 text-primary",
  },
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Beneficios
          </h2>
          <p className="text-lg text-muted-foreground">
            Nuestros servicios están diseñados para mantener tu infraestructura segura, organizada y funcionando al máximo.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="group bg-card rounded-xl border p-6 hover:border-primary/40 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${b.color}`}>
                <b.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
