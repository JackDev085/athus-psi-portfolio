import { motion } from "framer-motion";
import { Home, Video, UserCog } from "lucide-react";

const types = [
  {
    icon: Home,
    title: "Presencial",
    description:
      "Atendimento no consultório, em um ambiente acolhedor e sigiloso, localizado no edifício Harmony (Antônio Bezerra)",
  },
  {
    icon: Video,
    title: "Online",
    description:
      "Sessões por videoconferência, com a mesma qualidade e eficácia, para quem está em qualquer lugar do Brasil.",
  },
  {
    icon: UserCog,
    title: "Personalizada",
    description: "Atendimento adaptado às suas necessidades.",
  },
];

const AppointmentTypes = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 text-center mb-12">
          Formas de Atendimento
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-xl bg-[#fef9f0] border border-yellow-200"
            >
              <div className="w-16 h-16 bg-yellow-300 rounded-full flex items-center justify-center mx-auto mb-4">
                <type.icon className="text-gray-700" size={32} />
              </div>
              <h3 className="text-xl font-medium text-gray-800 mb-2">
                {type.title}
              </h3>

              <p className="text-gray-600">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppointmentTypes;
