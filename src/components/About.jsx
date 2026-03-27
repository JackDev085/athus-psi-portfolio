import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Target, NotepadText } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section
      id="about"
      className="bg-cream py-16 sm:py-20 md:py-28 xl:py-32 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <SectionHeading letter="S" title="obre mim" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-dark-green/90 font-sans text-base sm:text-lg leading-relaxed"
          >
            <p>
              Sou{" "}
              <strong className="font-bold text-dark-green">
                Athus Ramalho.{" "}
              </strong>
              Minha prática é guiada pela escuta, presença e autenticidade.
              Acredito em um cuidado que não tenta te consertar, mas te ajudar a
              se compreender — com respeito ao seu tempo, à sua história e ao
              que você vive.
            </p>
            <p>
              Este é um espaço onde você pode ser quem é, sem precisar se
              explicar o tempo todo. Um espaço para se entender, se posicionar e
              viver com mais clareza, dentro e fora do jogo.
            </p>
            <p>Sem julgamentos. Com presença, responsabilidade e processo.</p>
            <ul className="space-y-4 sm:space-y-5 pt-6 sm:pt-8 mt-2 border-t border-dark-green/10">
              <li className="flex items-start sm:items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary shadow-sm border border-primary/20 shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>

                <span className="font-medium text-dark-green">
                  Graduado pela universidade <br />
                  Uniateneu
                </span>
              </li>
              <li className="flex items-start sm:items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary shadow-sm border border-primary/20 shrink-0">
                  <BookOpen className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-medium text-dark-green">
                  Psicólogo com atuação <br /> clínica e esportiva
                </span>
              </li>
              <li className="flex items-start sm:items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary shadow-sm border border-primary/20 shrink-0">
                  <NotepadText className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-medium text-dark-green">
                  Atendimentos online <br />e presenciais
                </span>
              </li>
              <li className="flex items-start sm:items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary shadow-sm border border-primary/20 shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-medium text-dark-green">
                  Abordagem centrada <br />
                  na pessoa
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Tactical border frame */}
            <div className="aspect-[4/4] sm:aspect-[4/5] overflow-hidden relative z-10 p-1.5 sm:p-2 bg-cream border-2 border-primary/30">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800"
                // src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800"
                alt="Ambiente do Consultório"
                className="w-full h-full object-cover filter contrast-110 grayscale-[0.2]"
              />
            </div>
            {/* Background creative accents */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 stroke-dash border-dashed border-accent z-0 hidden md:block"></div>
            <div className="absolute -top-10 -left-10 w-32 h-32 sm:w-48 sm:h-48 bg-white/40 rounded-full z-0 opacity-80 backdrop-blur-3xl hidden sm:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
