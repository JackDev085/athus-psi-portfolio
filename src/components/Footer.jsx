export default function Footer() {
  return (
    <footer className="bg-cream py-8 sm:py-12 border-t border-primary/20 text-center text-dark-green relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        <div className="w-12 sm:w-16 h-1 bg-accent rounded-full mb-4 sm:mb-6"></div>
        <p className="mb-2 font-serif text-sm sm:text-base md:text-lg">
          &copy; {new Date().getFullYear()} <strong>Athus Ramalho</strong> -
          Psicólogo Clínico e Esportivo. <br className="sm:hidden" />
          Todos os direitos reservados.
        </p>
        <p className="text-xs sm:text-sm font-sans opacity-80">
          CRP 11/24340 | Responsável Técnico
        </p>
        <p className="text-[10px] sm:text-xs font-sans opacity-60 mt-4 sm:mt-6 tracking-widest uppercase">
          Transformando Desempenho e Vida
        </p>
      </div>
    </footer>
  );
}
