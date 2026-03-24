import { motion } from "framer-motion";
import {
  ExternalLink,
  Instagram,
  Linkedin,
  FileText,
  Phone,
} from "lucide-react";

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
      className="bg-cream py-24 md:py-32 border-t border-primary/10 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
            Links Úteis
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
          <p className="mt-8 text-dark-green/80 font-sans text-lg leading-relaxed">
            Materiais extras, minhas redes sociais e contato.
          </p>
        </motion.div>

        <div className="space-y-4 relative z-10">
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
              className="flex items-center p-6 sm:p-8 bg-white/70 backdrop-blur-md border border-white/50 hover:bg-white hover:border-primary/20 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group rounded-none"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                {link.icon}
              </div>
              <div className="ml-6 flex-grow">
                <h3 className="text-lg md:text-xl font-bold font-serif text-dark-green group-hover:text-primary transition-colors">
                  {link.title}
                </h3>
                <p className="font-sans text-dark-green/60 text-sm md:text-base mt-2 leading-relaxed">
                  {link.desc}
                </p>
              </div>
              <div className="w-12 h-12 bg-cream/50 flex items-center justify-center group-hover:bg-primary/20 transition-colors hidden sm:flex border border-primary/10 group-hover:border-primary/30">
                <ExternalLink className="w-5 h-5 text-primary group-hover:text-primary transition-colors" />
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
