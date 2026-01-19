import { MapPin, Phone, Clock } from "lucide-react"
import { useState, useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function InfoCards() {
  const cards = [
    {
      icon: MapPin,
      title: "Dove Siamo",
      content: ["Via Montegrappa 119/121", "Poggibonsi (SI)", "53036"],
    },
    {
      icon: Phone,
      title: "Contatti",
      content: ["0577 938997", "ncvvaldelsa@gmail.com"],
    },
    {
      icon: Clock,
      title: "Orari",
      content: ["Lun-Ven 09:30 - 20:00", "Sab 10:00 - 13:00", "Sab 15:00 - 18:00"],
    },
  ]

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative lg:-mt-20 z-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-3 lg:gap-6">
          <div
            className={`bg-surface rounded-2xl p-8 shadow-lg hover:shadow-xl transition-[box-shadow,opacity,transform] duration-400 border border-surface-dark transform ${isScrolled ? "opacity-100 translate-y-0" : "motion-safe:opacity-0 motion-safe:translate-y-6"}`}
            style={{
              transitionDelay: `${1 * 100}ms`,
            }}
          >
            <div className="flex items-center gap-6 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 text-ncvColor-blue">Dove Siamo</h3>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p className="leading-relaxed ">
                Via Montegrappa 119/121
              </p>
              <p className="leading-relaxed">
                Poggibonsi (SI)
              </p>
              <p className="leading-relaxed">
                53036
              </p>
            </div>
          </div>
          <div
            className={`bg-surface rounded-2xl p-8 shadow-lg hover:shadow-xl transition-[box-shadow,opacity,transform] duration-400 border border-surface-dark transform ${isScrolled ? "opacity-100 translate-y-0" : "motion-safe:opacity-0 motion-safe:translate-y-6"}`}
            style={{
              transitionDelay: `${2 * 100}ms`,
            }}
          >
            <div className="flex items-center gap-6 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 text-ncvColor-blue">Contatti</h3>
            </div>
            <div className="space-y-2 text-muted-foreground">
              <p className="leading-relaxed ">
                <a href="tel:0577938997" className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded">
                  0577 938997
                </a>
              </p>
              <p className="leading-relaxed ">
                <a
                  href="mailto:info@ncvvaldelsa.it"
                  className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  info@ncvvaldelsa.it
                </a>
              </p>
              <p className="leading-relaxed">
              </p>
              <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 mt-4">
                <a
                  href="https://wa.me/390577938997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="fa-xl" />
                  WhatsApp
                </a>
                <a
                  href="https://www.instagram.com/ncvvaldelsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                >
                  <FontAwesomeIcon icon={faInstagram} className="fa-xl" />
                  Instagram
                </a>
                <a
                  href="https://www.facebook.com/ncvvaldelsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1"
                >
                  <FontAwesomeIcon icon={faFacebook} className="fa-xl" />
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div
            className={`bg-surface rounded-2xl p-8 shadow-lg hover:shadow-xl transition-[box-shadow,opacity,transform] duration-400 border border-surface-dark transform ${isScrolled ? "opacity-100 translate-y-0" : "motion-safe:opacity-0 motion-safe:translate-y-6"}`}
            style={{
              transitionDelay: `${3 * 100}ms`,
            }}
          >
            <div className="flex items-center gap-6 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 text-ncvColor-blue">Orari</h3>
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-4">
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
                  <div className="flex gap-2">
                    <span className="font-medium min-w-[80px]">Dom</span>
                    <span>Chiuso</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
