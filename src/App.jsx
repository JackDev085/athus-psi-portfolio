import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Attendance from "./components/Attendance";
import Links from "./components/Links";
import Location from "./components/Location";

function App() {
  return (
    <div className="bg-cream text-dark-green font-sans selection:bg-primary/20 selection:text-dark-green overflow-x-hidden relative">
      <div className="noise-overlay pointer-events-none sticky top-0 left-0 w-full h-screen z-50 mix-blend-multiply opacity-20" aria-hidden="true"></div>
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Attendance />
        <Links />
        <Location />
      </main>

      {/* Footer */}
      <footer className="bg-cream py-12 border-t border-primary/20 text-center text-dark-green relative z-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          <div className="w-16 h-1 bg-accent rounded-full mb-6"></div>
          <p className="mb-2 font-serif text-lg">
            &copy; {new Date().getFullYear()} <strong>Athus Ramalho</strong> - Psicólogo Clínico e Esportivo. <br className="sm:hidden" />
            Todos os direitos reservados.
          </p>
          <p className="text-sm font-sans opacity-80">
            CRP 00/00000 | Responsável Técnico
          </p>
          <p className="text-xs font-sans opacity-60 mt-6 tracking-widest uppercase">
            Transformando Desempenho e Vida
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
