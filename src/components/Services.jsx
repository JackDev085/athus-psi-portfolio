import { motion } from "framer-motion";
import { User, Brain, HeartPulse, Bike } from "lucide-react";

const services = [
  {
    icon: <User className="w-8 h-8" />,
    title: "Psicoterapia Individual",
    description:
      "Um espaço seguro para explorar suas emoções transbordantes, tratar a ansiedade, estresse e focar no seu autoconhecimento.",
  },
  {
    icon: <Bike className="w-8 h-8" />,
    title: "Psicologia Esportiva",
    description:
      "Apoio direcionado a atletas que desejam estar em plena harmonia com o corpo e amente para alta performance.",
  },
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: "Gestão Emocional",
    description:
      "Técnicas práticas do dia a dia para lidar com crises de ansiedade extrema e ferramentas para uma regulação emocional saudável.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-cream py-24 md:py-32 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
            Metodologia &{" "}
            <span className="font-script text-primary text-5xl md:text-6xl lowercase">
              Áreas
            </span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-8 text-dark-green/80 font-sans max-w-2xl mx-auto text-lg leading-relaxed">
            Abordagens baseadas em evidências para ajudar você a superar
            desafios e viver com mais leveza e resiliência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/80 backdrop-blur-sm rounded-none p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-accent group hover:-translate-y-2 relative"
            >
              {/* Tactical dots decoration */}
              <div className="absolute top-4 right-4 flex space-x-1 opacity-20">
                <div className="w-1.5 h-1.5 bg-dark-green rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-dark-green rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-dark-green rounded-full"></div>
              </div>

              <div className="w-16 h-16 rounded-sm flex items-center justify-center text-accent mb-8 border border-accent/20 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-serif text-dark-green mb-4">
                {service.title}
              </h3>
              <p className="font-sans text-dark-green/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tactical Background element */}
      <div className="absolute top-1/2 -left-20 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-[80px] pointer-events-none"></div>
    </section>
  );
}
