import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Target, Clock } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
            Sobre{" "}
            <span className="font-script text-primary text-5xl md:text-6xl lowercase">
              Mim
            </span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-dark-green/90 font-sans text-lg leading-relaxed"
          >
            <p>
              Olá! Sou o{" "}
              <strong className="font-bold text-dark-green">
                Athus Ramalho
              </strong>
              . Dedico minha vida a ajudar pessoas a compreenderem suas emoções,
              construírem relações mais saudáveis e a transformarem seu
              desempenho na vida e no esporte.
            </p>
            <p>
              Acredito em um ambiente terapêutico acolhedor, livre de
              julgamentos, sustentado por um vínculo forte como uma "base
              segura". Minha abordagem tem raiz na empatia, unida à visão tática
              da psicologia esportiva.
            </p>

            <ul className="space-y-5 pt-8 mt-2 border-t border-dark-green/10">
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary shadow-sm border border-primary/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="font-medium text-dark-green">
                  Graduado em Psicologia
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary shadow-sm border border-primary/20">
                  <BookOpen className="w-6 h-6" />
                </div>
                <span className="font-medium text-dark-green">
                  Especialista em Abordagem Centrada na Pessoa
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary shadow-sm border border-primary/20">
                  <Clock className="w-6 h-6" />
                </div>
                <span className="font-medium text-dark-green">
                  Experiência Sólida em Atendimentos Online e Presenciais
                </span>
              </li>
              <li className="flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary shadow-sm border border-primary/20">
                  <Target className="w-6 h-6" />
                </div>
                <span className="font-medium text-dark-green">
                  Foco em Esporte, Desempenho e Acolhimento Humanizado
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
            <div className="aspect-[4/5] overflow-hidden relative z-10 p-2 bg-cream border-2 border-primary/30">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800"
                // src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800"
                alt="Ambiente do Consultório"
                className="w-full h-full object-cover filter contrast-110 grayscale-[0.2]"
              />
            </div>
            {/* Background creative accents */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 stroke-dash border-dashed border-accent z-0"></div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-white/40 rounded-full z-0 opacity-80 backdrop-blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
