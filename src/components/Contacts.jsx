import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Contacts() {
  return (
    <section id="contatti" className="py-24 bg-muted/80 lg:pb-54 pb-25">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              Contatti
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Come raggiungerci
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 h-72 md:h-[400px] lg:h-[500px]">
            <iframe
              title="Mappa Nuova Clinica Veterinaria Val d'Elsa"
              className="w-full h-full rounded-2xl shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.532730723805!2d11.145581395733885!3d43.47035158975629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a3a1ceb99fa67%3A0x9087d0531be92aa7!2sNuova%20Clinica%20Veterinaria%20Val%20d'Elsa%20dei%20dottori%20Dusi%20G.%20e%20Carraresi%20L.!5e0!3m2!1sit!2sit!4v1757179230850!5m2!1sit!2sit"
              loading="lazy"
            />
          </div>

          <div className="w-full lg:w-1/2 lg:pl-12">
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Indirizzo</h3>
                  <a
                    href="https://www.google.it/maps/place/Via+Montegrappa,+119,+53036+Poggibonsi+SI/@43.4703455,11.1482556,17z/data=!3m1!4b1!4m5!3m4!1s0x132a3a1cad56d19d:0xad2ce29f2091fb16!8m2!3d43.4703455!4d11.1504496"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    Via Montegrappa 119/121
                    <br />
                    53036 Poggibonsi (SI)
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefono</h3>
                  <a href="tel:0577938997" className="text-muted-foreground hover:text-primary transition-colors">
                    0577 938997
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a
                    href="mailto:info@ncvvaldelsa.it"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    info@ncvvaldelsa.it
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Orari</h3>
                  <div className="text-muted-foreground space-y-1">
                    <div className="flex gap-2">
                      <span className="font-medium min-w-[80px]">Lun-Ven</span>
                      <span>09:30 - 20:00</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-medium min-w-[80px]">Sabato</span>
                      <div>
                        <div>10:00 - 13:00</div>
                        <div>15:00 - 18:00</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-border">
                <h3 className="font-semibold text-foreground mb-6">Seguici sui social</h3>
                <div className="flex gap-8 flex-col lg:flex-row">
                  <a
                    href="https://wa.me/390577938997"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="fa-xl" />
                    WhatsApp
                  </a>
                  <a
                    href="https://www.instagram.com/ncvvaldelsa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FontAwesomeIcon icon={faInstagram} className="fa-xl" />
                    Instagram
                  </a>
                  <a
                    href="https://www.facebook.com/ncvvaldelsa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <FontAwesomeIcon icon={faFacebook} className="fa-xl" />
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
