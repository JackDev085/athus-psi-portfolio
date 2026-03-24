import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Location() {
  return (
    <section id="location" className="bg-white py-24 md:py-32 border-t border-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-green mb-4">
            Localização & <span className="font-script text-primary text-5xl md:text-6xl lowercase">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-0 bg-white shadow-xl shadow-dark-green/5 border border-primary/20 relative z-10 border-t-4 border-t-primary">
          <div className="lg:col-span-2 p-10 md:p-14 bg-cream relative">
            {/* Tactical overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(45deg, #303B0D 25%, transparent 25%, transparent 75%, #303B0D 75%, #303B0D), linear-gradient(45deg, #303B0D 25%, transparent 25%, transparent 75%, #303B0D 75%, #303B0D)", backgroundSize: "20px 20px", backgroundPosition: "0 0, 10px 10px", maskImage: "radial-gradient(ellipse at center, transparent 30%, black)" }}></div>

            <h3 className="text-2xl font-serif font-bold text-dark-green mb-10 relative z-10">
              Informações de Contato
            </h3>

            <div className="space-y-10 relative z-10">
              <div className="flex items-start gap-5">
                <div className="mt-1 bg-white/80 p-4 rounded-none border border-primary/20 text-primary shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-serif text-dark-green mb-2">
                    Endereço do Consultório
                  </h4>
                  <p className="font-sans text-dark-green/70 leading-relaxed">
                    Edifício Harmony Premium Business <br />
                    Av. Humberto Monte, 2929 - Pici <br />
                    Sala 405
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="mt-1 bg-white/80 p-4 rounded-none border border-primary/20 text-primary shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-serif text-dark-green mb-2">
                    Telefone / WhatsApp
                  </h4>
                  <p className="font-sans text-dark-green/70 text-lg">(85) 99758-1798</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="mt-1 bg-white/80 p-4 rounded-none border border-primary/20 text-primary shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-serif text-dark-green mb-2">
                    E-mail
                  </h4>
                  <p className="font-sans text-dark-green/70">athus.psi@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* MAPS IFRAME */}
          <div className="lg:col-span-3 min-h-[450px] relative w-full h-full filter saturate-50 contrast-125">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3330817724545!2d-38.57206902543878!3d-3.7374044432171396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74bbe8e7f4507%3A0x4e73991e7eaffce5!2sEdif%C3%ADcio%20Harmony%20Premium%20Business!5e0!3m2!1spt-BR!2sbr!4v1773000428287!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Consultório"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
