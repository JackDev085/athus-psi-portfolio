import { motion } from "framer-motion";
import {
  ExternalLink,
  Instagram,
  Linkedin,
  FileText,
  Phone,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const links = [
  {
    icon: <Instagram className="w-6 h-6" />,
    title: "Instagram Profissional",
    url: "https://www.instagram.com/athus.psi/",
    desc: "Dicas diárias sobre saúde mental e pequenas reflexões.",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn",
    url: "#",
    desc: "Conteúdos sobre clínica e psicologia esportiva.",
  },
  // {
  //   icon: <FileText className="w-6 h-6" />,
  //   title: "E-book Gratuito: Ansiedade no Dia a Dia",
  //   url: "#",
  //   desc: "Material prático para o enfrentamento e regulação.",
  // },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Whatsapp",
    url: "https://api.whatsapp.com/send/?phone=5585997581798&text&type=phone_number&app_absent=0&utm_source=ig",
    desc: "Contato e agendamento.",
  },
];

export default function Links() {
  return (
    <section
      id="links"
      className="bg-cream py-20 md:py-28 xl:py-32 border-t border-primary/10 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <SectionHeading
            letter="L"
            title="inks úteis"
            subtitle="Materiais extras, minhas redes sociais e contato."
          />
        </motion.div>

        <div className="space-y-3 sm:space-y-4 relative z-10">
          {links.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center p-4 sm:p-6 md:p-8 bg-white/70 backdrop-blur-md border border-white/50 hover:bg-white hover:border-primary/20 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group rounded-none"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                {link.icon}
              </div>
              <div className="ml-4 sm:ml-6 flex-grow min-w-0">
                <h3 className="text-base sm:text-lg md:text-xl font-bold font-serif text-dark-green group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="font-sans text-dark-green/60 text-sm md:text-base mt-1 sm:mt-2 leading-relaxed">
                  {link.desc}
                </p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cream/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors hidden sm:flex border border-primary/10 group-hover:border-primary/30 flex-shrink-0">
                <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>

      {/* Decorative blurred blob */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/40 rounded-full blur-[80px] pointer-events-none"></div>
    </section>
  );
}
