import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Attendance from "./components/Attendance";
import Links from "./components/Links";
import Location from "./components/Location";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-cream text-dark-green font-sans selection:bg-primary/20 selection:text-dark-green overflow-x-hidden relative">
      <div
        className="noise-overlay pointer-events-none sticky top-0 left-0 w-full h-screen z-50 mix-blend-multiply opacity-20"
        aria-hidden="true"
      ></div>

      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Attendance />
        <Links />
        <Location />
        <Footer />
      </main>
    </div>
  );
}

export default App;
