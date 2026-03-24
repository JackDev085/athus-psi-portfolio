export default function Footer() {
  return (
    <footer className="bg-cream py-12 border-t border-primary/20 text-center text-dark-green relative z-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
        <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
        <p className="mb-2 font-serif text-lg">
          &copy; {new Date().getFullYear()} <strong>Athus Ramalho</strong> -
          Psicólogo Clínico e Esportivo. <br className="sm:hidden" />
          Todos os direitos reservados.
        </p>
        <p className="text-sm font-sans opacity-80">
          CRP 11/24340 | Responsável Técnico
        </p>
        <p className="text-xs font-sans opacity-60 mt-6 tracking-widest uppercase">
          Transformando Desempenho e Vida
        </p>
      </div>
    </footer>
  );
}
