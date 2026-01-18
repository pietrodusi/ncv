import { Heart, Shield, Users } from "lucide-react"
import image from "../public/ncv_orizzontale_170725.webp";

export function Mission() {
  return (
    <section id="chi-siamo" className="py-24 lg:py-36 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="La nostra missione"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                Chi siamo
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Medicina preventiva e cura dedicata
            </h2>

            <p className="text-lg text-muted leading-relaxed mb-8 text-pretty text-muted-foreground">
              La Nuova Clinica Veterinaria Val d'Elsa nasce per offrire un punto di riferimento solido e moderno per la
              salute del cane, del gatto e degli animali esotici in tutta la Valdelsa e oltre.
            </p>

            <p className="text-lg text-muted leading-relaxed mb-8 text-pretty text-justify text-muted-foreground">
              Alla Nuova Clinica Veterinaria Val d'Elsa crediamo in una medicina che non si limita a curare, ma che
              lavora ogni giorno per prevenire, educare e accompagnare. Il benessere animale è al centro di ogni nostra
              decisione, e l'attenzione verso i nostri pazienti e le loro famiglie va oltre il gesto clinico.
            </p>

            <p className="text-lg text-muted leading-relaxed mb-8 text-pretty text-justify text-muted-foreground">
              Dal 2025 la Clinica è guidata dal dottor Giacomo Dusi e dalla dottoressa Laura Carraresi, affiancati da uno
              staff motivato e in costante aggiornamento.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Passione</h3>
                <p className="text-sm text-muted-foreground">Amore per gli animali</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Competenza</h3>
                <p className="text-sm text-muted-foreground">Team qualificato</p>
              </div>
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">Dedizione</h3>
                <p className="text-sm text-muted-foreground">Sempre al vostro fianco</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
