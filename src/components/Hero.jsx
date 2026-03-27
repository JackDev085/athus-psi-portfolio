import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center relative overflow-hidden bg-cream pt-16 sm:pt-20 xl:pt-0">
      {/* Background Blur */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

      {/* Flex direction: Column-reverse on mobile (Text bottom, Image top), Row on desktop (Text left, Image right) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 z-10 w-full relative flex flex-col-reverse xl:flex-row items-center gap-8 sm:gap-12 xl:gap-20">
        {/* Coluna Texto & Botão Action (Embaixo no Mobile, Esquerda no Desktop) */}
        <div className="flex-1 text-center xl:text-left mt-4 sm:mt-8 xl:mt-0 relative z-20 pb-12 sm:pb-16 xl:pb-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-dark-green tracking-tight mb-4 sm:mb-6 flex justify-center xl:justify-start items-end"
          >
            <span className="font-serif">
              <span className="font-script text-5xl sm:text-6xl md:text-8xl xl:text-8xl text-primary leading-[0.5] mr-1 -mb-2">
                Prazer,
              </span>{" "}
              <br />
              <span className="font-semibold">Athus Ramalho</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-dark-green/80 mb-6 sm:mb-10 max-w-xl mx-auto xl:mx-0 font-sans font-light leading-relaxed"
          >
            Psicólogo clínico e do esporte, atleta, performance, bem-estar e
            saúde mental, Autoconhecimento & Equilíbrio.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() =>
              (window.location.href =
                "https://api.whatsapp.com/send/?phone=5585997581798&text&type=phone_number&app_absent=0&utm_source=ig")
            }
            className="px-6 py-3 sm:px-8 sm:py-4 bg-accent hover:bg-opacity-90 shadow-xl shadow-accent/30 text-white font-sans font-semibold tracking-wide uppercase rounded-none transition-all relative overflow-hidden group cursor-pointer text-sm sm:text-base"
          >
            <span className="relative z-10">Marque a sua consulta</span>
            <div className="absolute inset-0 -translate-x-full bg-white/20 skew-x-12 group-hover:animate-[shimmer_1s_forwards]"></div>
          </motion.button>
        </div>

        {/* Coluna Foto Maior & Adornos (No Topo no Mobile, Direita no Desktop) */}
        <div className="flex-1 w-full flex justify-center xl:justify-end relative mt-8 sm:mt-16 xl:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center w-full z-10"
          >
            <div className="relative">
              {/* 
                IMAGEM PRINCIPAL: 
                Mobile -> Redonda (w-64 h-64 rounded-full) 
                Desktop -> Retangular Maior (xl:w-[400px] xl:h-[500px] xl:rounded-none xl:border-8) 
            */}
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full xl:w-[420px] xl:h-[520px] xl:rounded-none xl:border-0 border-4 border-primary shadow-2xl relative z-20 overflow-hidden bg-cream shrink-0">
                <img
                  src="athus.png"
                  alt="Athus Ramalho"
                  className="w-full h-full object-cover filter contrast-125 sepia-[.20] hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* ADORNO 1: Psicoterapia Esportiva (Topo Esquerda) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute -top-2 -left-2 sm:-top-4 sm:-left-6 md:-left-16 xl:-left-32 xl:top-8 opacity-90 z-30"
              >
                <img
                  className="w-12 sm:w-24 xl:w-32 scale-x-[-1] rotate-180"
                  src="set.png"
                  alt=""
                  onError={(e) => (e.target.style.display = "none")}
                />
                <p className="font-serif font-bold text-[8px] sm:text-[10px] md:text-xs xl:text-sm tracking-widest text-primary absolute -top-6 -left-2 sm:-top-8 sm:-left-6 xl:-top-10 xl:left-0 uppercase xl:bg-transparent px-1 rounded backdrop-blur-sm xl:backdrop-blur-none whitespace-nowrap">
                  Psicoterapia clínica & <br /> Esportiva
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute -bottom-2 -right-2 sm:-bottom-6 sm:-right-6 md:-right-16 xl:-right-32 xl:bottom-16 opacity-90 z-30"
              >
                <img
                  className="w-12 sm:w-24 xl:w-32 scale-x-[-1]"
                  src="set.png"
                  alt=""
                  onError={(e) => (e.target.style.display = "none")}
                />
                <p className="font-serif font-bold text-[8px] sm:text-[10px] md:text-xs xl:text-sm absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-6 xl:-bottom-10 xl:-right-2 uppercase tracking-widest text-right xl:bg-transparent px-1 rounded backdrop-blur-sm xl:backdrop-blur-none whitespace-nowrap">
                  Admirador da <br />
                  natureza
                  <br className="hidden xl:block" /> {}
                  <span className="xl:hidden"> </span>
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 1 }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-6 md:-right-16 xl:-right-28 xl:top-0 opacity-90 z-30"
              >
                <img
                  className="w-12 sm:w-20 xl:w-24 scale-y-[1] rotate-180"
                  src="set.png"
                  alt=""
                  onError={(e) => (e.target.style.display = "none")}
                />
                <p className="font-serif font-bold text-[8px] sm:text-[10px] md:text-xs xl:text-sm tracking-widest text-dark-green absolute -top-6 -right-2 sm:-top-8 sm:-right-4 xl:-top-10 xl:-right-2 uppercase whitespace-nowrap">
                  atleta de
                  <br /> basquete
                </p>
              </motion.div>

              {/* ADORNO 4: Online e Presencial (Fundo Esquerda) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 1 }}
                className="absolute -bottom-2 -left-2 sm:-bottom-6 sm:-left-6 md:-left-16 xl:-left-32 xl:bottom-10 opacity-90 z-30"
              >
                <img
                  className="w-12 sm:w-24 xl:w-32 "
                  src="set.png"
                  alt=""
                  onError={(e) => (e.target.style.display = "none")}
                />
                <p className="font-serif font-bold text-[8px] sm:text-[10px] md:text-xs xl:text-sm text-dark-green absolute -bottom-6 -left-2 sm:-bottom-8 sm:-left-6 xl:-bottom-10 xl:left-0 uppercase tracking-widest whitespace-nowrap xl:bg-transparent px-1 rounded backdrop-blur-sm xl:backdrop-blur-none">
                  performance &<br /> bem-estar
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Ícone de Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 xl:w-10 xl:h-10 text-primary/70" />
        </motion.div>
      </motion.div>

      {/* Elementos Criativos de Fundo */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
    </section>
  );
}
