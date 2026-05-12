import { Mail, Phone, MapPin } from "lucide-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ncvLogo from '../public/LOGO DEFINITIVO-03.webp';
import cvitLogo from '../public/logocvit-17-17.png';

export function Footer() {
  return (
    <footer id="footer" className="bg-[#002c66] text-background pt-12 pb-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="w-70">
            <img src={cvitLogo} alt="CVIT Logo" className="w-full h-full object-contain brightness-0 invert" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Link Rapidi</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-background/70 hover:text-accent transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#chi-siamo" className="text-background/70 hover:text-accent transition-colors">
                  Chi siamo
                </a>
              </li>
              <li>
                <a href="#servizi" className="text-background/70 hover:text-accent transition-colors">
                  Servizi
                </a>
              </li>
              <li>
                <a href="#team" className="text-background/70 hover:text-accent transition-colors">
                  Il nostro team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="">
            <h3 className="font-bold mb-4">Contatti</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 text-accent flex-shrink-0" />
                <a href="tel:0577938997" className="text-background/70 hover:text-accent transition-colors">
                  0577 938997
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 text-accent flex-shrink-0" />
                <a href="mailto:info@ncvvaldelsa.it" className="text-background/70 hover:text-accent transition-colors">
                  info@ncvvaldelsa.it
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-accent flex-shrink-0" />
                <a
                  href="https://www.google.it/maps/place/Via+Montegrappa,+119,+53036+Poggibonsi+SI/@43.4703455,11.1482556,17z/data=!3m1!4b1!4m5!3m4!1s0x132a3a1cad56d19d:0xad2ce29f2091fb16!8m2!3d43.4703455!4d11.1504496"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-accent transition-colors"
                >
                  Via Montegrappa 119/121
                  <br />
                  53036 Poggibonsi (SI)
                </a>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex gap-3">
                  <a
                    href="https://wa.me/390577938997"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                    aria-label="WhatsApp"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} size={26} />
                  </a>
                  <a
                    href="https://www.instagram.com/ncvvaldelsa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} size={18} />
                  </a>
                  <a
                    href="https://www.facebook.com/ncvvaldelsa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 bg-background/10 hover:bg-accent rounded-lg flex items-center justify-center transition-colors"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebook} size={18} />
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold mb-4">Orari di Apertura</h3>
            <ul className="space-y-2 text-sm text-background/70">
              <li className="flex justify-between">
                <span>Lun-Ven</span>
                <span className="font-medium">09:30 - 20:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sabato</span>
                <span className="font-medium">10:00 - 13:00 / 15:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domenica</span>
                <span className="font-medium">Chiuso</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} Nuova Clinica Veterinaria Val d'Elsa. Tutti i diritti riservati.</p>
          <p className="mt-2">
            Video by{" "}
            <a href="https://www.freepik.com/free-video/vet-nurse-examining-little-kitten_2276806" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Wavebreak Media</a>
            {" "}and{" "}
            <a href="https://www.freepik.com/free-video/back-view-little-boy-petting-his-lovely-dog-home_204241" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">freepik</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
