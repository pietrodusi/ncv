import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import { useRef, useEffect, useState } from "react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { ChevronLeft, ChevronRight } from "lucide-react"


import SashaPadula from '../public/team/SashaPadula.webp'
import FrancescoPaesano from '../public/team/FrancescoPaesano.webp'
import AlessandroMarigliano from '../public/team/AlessandroMarigliano.webp'
import CatalinaAlbert from '../public/team/CatalinaAlbert.webp'
import GiuliaBiagioni from '../public/team/GiuliaBiagioni.webp'
import GiacomoDusi from '../public/team/GiacomoDusi.webp'
import LauraCarraresi from '../public/team/LauraCarraresi.webp'
import GiovanniMagnanelli from '../public/team/GiovanniMagnanelli.webp'
import SamanthaVentani from '../public/team/SamanthaVentani.webp'
import ChiaraPescatori from '../public/team/ChiaraPescatori.webp'
import MargheritaGarosi from '../public/team/MargheritaGarosi.webp'

import placeholder from '../public/team/LOGO DEFINITIVO-09.webp'

const teamData = [
  {
    id: 1,
    name: "Dott. Giacomo Dusi",
    position: "Direttore sanitario",
    image: GiacomoDusi,
    description: "Chirurgia, chirurgia mini-invasiva ed endoscopia",
  },
  {
    id: 2,
    name: "Dott.ssa Laura Carraresi",
    position: "Veterinaria",
    image: LauraCarraresi,
    description: "Ecografia, diagnostica per immagini e medicina interna",
  },
  {
    id: 3,
    name: "Dott.ssa Giulia Biagioni",
    position: "Veterinaria",
    image: GiuliaBiagioni,
    description: "Nutrizione, riproduzione e medicina interna",
  },
  {
    id: 4,
    name: "Dott.ssa Catalina Albert",
    position: "Veterinaria",
    image: CatalinaAlbert,
    description: "Chirurgia e medicina interna",
  },
  {
    id: 5,
    name: "Dott. Giovanni Magnanelli",
    position: "Veterinario",
    image: GiovanniMagnanelli,
    description: "Anestesia e terapia del dolore",
  },
  {
    id: 6,
    name: "Margherita Garosi",
    position: "Tecnico veterinario",
    image: MargheritaGarosi,
    description: "Ecografia e medicina interna",
  },
  {
    id: 7,
    name: "Dott. Francesco Paesano",
    position: "Veterinario",
    image: FrancescoPaesano,
    description: "Odontostomatologia e chirurgia maxillo-facciale",
  },
  {
    id: 8,
    name: "Dott. Giuseppe Bartoletta",
    position: "Veterinario",
    image: placeholder,
    description: "Ortopedia",
  },
  {
    id: 9,
    name: "Dott.ssa Chiara Pescatori",
    position: "Veterinaria",
    image: ChiaraPescatori,
    description: "Cardiologia ed ecografia",
  },
  {
    id: 10,
    name: "Dott. Daniele Betti",
    position: "Veterinario",
    image: placeholder,
    description: "Oftalmologia",
  },
  {
    id: 11,
    name: "Dott. Alessandro Marigliano",
    position: "Veterinario",
    image: AlessandroMarigliano,
    description: "Animali esotici",
  },
  {
    id: 12,
    name: "Dott.ssa Silvia Porcelli",
    position: "Veterinaria",
    image: placeholder,
    description: "Oncologia",
  },
  {
    id: 13,
    name: "Dott. Emanuele Mussi",
    position: "Veterinario",
    image: placeholder,
    description: "Endoscopia",
  },
  {
    id: 14,
    name: "Samantha Ventani",
    position: "Tecnico veterinario",
    image: SamanthaVentani,
    description: "Tecnico veterinario",
  },
  {
    id: 15,
    name: "Sasha Padula",
    position: "Tecnico veterinario",
    image: SashaPadula,
    description: "Tecnico veterinario",
  },
]

export function Team() {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Wait for refs to mount
    setReady(true);
  }, []);

  // Control autoplay based on visibility - only after Swiper is ready
  useEffect(() => {
    if (!ready) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const swiper = swiperRef.current?.swiper;
        if (swiper) {
          if (entry.isIntersecting) {
            swiper.autoplay.start();
          } else {
            swiper.autoplay.stop();
          }
        }
      },
      { threshold: 0.1 }
    );

    if (swiperRef.current) {
      observer.observe(swiperRef.current);
    }

    return () => observer.disconnect();
  }, [ready]);

  return (
    <section id="team" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
              Il nostro team
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Professionisti dedicati alla cura dei vostri animali
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Un team di veterinari esperti e tecnici qualificati, sempre aggiornati sulle ultime tecniche e tecnologie
            per garantire il miglior servizio possibile.
          </p>
        </div>

        <div className="relative" role="region" aria-label="Carosello del team">
          {/* Custom Navigation Buttons */}
          <div className="max-lg:hidden">
            <button
              ref={prevRef}
              className="group absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-background/20 rounded-full shadow-md hover:bg-ncvColor-orange/80 w-16 h-16 flex items-center justify-center transition-colors duration-300"
              aria-label="Membro precedente"
            >
              <ChevronLeft
                className="w-10 h-10 text-foreground/60 group-hover:text-foreground transition-colors duration-300"
              />
            </button>

            <button
              ref={nextRef}
              className="group absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-background/20 rounded-full shadow-md hover:bg-ncvColor-orange/80 w-16 h-16 flex items-center justify-center transition-colors duration-300"
              aria-label="Membro successivo"
            >
              <ChevronRight
                className="w-10 h-10 text-foreground/60 group-hover:text-foreground transition-colors duration-300"
              />
            </button>

          </div>

          {/* Swiper */}
          {ready && (
            <Swiper
              ref={swiperRef}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={32}
              slidesPerView={1}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{ clickable: true }}
              speed={1500}
              effect="slide"
              autoplay={{ delay: 1500, pauseOnMouseEnter: true }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 32 },
                1280: { slidesPerView: 4, spaceBetween: 32 },
              }}
              className="team-swiper"
            >
              {teamData.map((member) => (
                <SwiperSlide key={member.id}>
                  <div className="bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-surface-dark group h-full">
                    <div className="aspect-square overflow-hidden bg-muted min-h-[400px] will-change-[filter] filter lg:grayscale hover:grayscale-0 transition-[filter] duration-300 ease-in-out">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 min-h-[160px]">
                      <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                      <p className="text-sm font-semibold text-accent mb-3">{member.position}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>


      </div>
    </section>
  )
}
