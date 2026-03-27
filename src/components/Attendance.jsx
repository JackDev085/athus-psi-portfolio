import { motion } from "framer-motion";
import { Monitor, MapPin, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function Attendance() {
  const methods = [
    {
      icon: <Monitor className="w-7 h-7" />,
      title: "Atendimento Online",
      description:
        "Sessões seguras por videochamada, de onde você estiver. Manutenção da mesma qualidade do presencial com a facilidade da sua casa.",
    },
    {
      icon: <MapPin className="w-7 h-7" />,
      title: "Atendimento Presencial",
      description:
        "Consultório preparado para receber você com conforto, isolamento acústico e aquele cafezinho quente te esperando.",
    },
    {
      icon: <Sparkles className="w-7 h-7" />,
      title: "Modalidade Personalizada",
      description:
        "Para imprevistos e rotinas flexíveis, o plano terapêutico pode mesclar encontros virtuais e presenciais conforme sua necessidade semanal.",
    },
  ];

  return (
    <section
      id="attendance"
      className="bg-white py-16 sm:py-20 md:py-28 xl:py-32 border-t border-cream relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              letter="M"
              title="odalidades"
              subtitle="O autocuidado deve ser possível em qualquer realidade. Por isso, ofereço diferentes formatos para que possamos trabalhar juntos de forma orgânica e ajustada à sua rotina atual."
              align="left"
            />

            <div className="space-y-6 sm:space-y-8 md:space-y-10 mt-8 sm:mt-10">
              {methods.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-4 sm:gap-6 group cursor-default"
                >
                  <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-sm flex items-center justify-center text-primary border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-serif text-dark-green mb-2">
                      {item.title}
                    </h3>
                    <p className="font-sans text-dark-green/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="overflow-hidden shadow-2xl relative shadow-dark-green/5 border-2 sm:border-4 border-cream p-1.5 sm:p-2 bg-white"
          >
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
              alt="Ambiente calmo de terapia"
              className="w-full h-full object-cover aspect-[3/4] sm:aspect-square md:aspect-[4/5] filter contrast-110 grayscale-[0.2]"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-green/40 to-transparent pointer-events-none mix-blend-multiply"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
