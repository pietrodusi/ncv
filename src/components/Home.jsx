import React from 'react';
import logo from '../images/LOGO DEFINITIVO-09.png';
import videoSource from '../images/istockphoto-1456786353-640_adpp_is.mp4';
import chiSiamoImage1 from '../images/istockphoto-968955866-1024x1024.jpg';
import chiSiamoImage2 from '../images/istockphoto-2217207866-1024x1024.jpg';
import Servizi from './Servizi';
import ChiSiamo from './ChiSiamo';
import Contatti from './Contatti';

export default function Home(props) {
  return (
    <section id="Home">
      {/* HERO */}
      <div className="text-white flex h-[400px] md:h-[600px] lg:h-[800px]">
        <div className="relative w-full overflow-hidden flex-1 h-full">
          {/* Background video */}
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-ncvColor-blue/40 z-10"></div>
          {/* Overlay content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-start mx-auto px-4 md:px-12 py-10 md:py-0 w-full max-w-7xl">
            <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold drop-shadow-lg">
              Nuova Clinica Veterinaria Val d’Elsa
            </h1>
            <div className="mt-6 md:mt-10 space-y-4 max-w-2xl text-base md:text-lg">
              <div>
                Dal 2016 ci prendiamo cura dei vostri animali con passione, competenza e dedizione.
              </div>
              <div>
                La Nuova Clinica Veterinaria Val d’Elsa nasce per offrire un punto di riferimento solido e moderno per la salute del cane, del gatto e degli animali esotici in tutta la Valdelsa e oltre.
              </div>
              <div>
                Una struttura moderna, creata per rispondere alle esigenze dei nostri piccoli pazienti e dei loro compagni umani, con spazi accoglienti, tecnologie avanzate e un team medico altamente qualificato.
              </div>
              <div>
                Dal 2025, la Clinica è guidata dal dottor Giacomo Dusi e dalla dottoressa Laura Carraresi, affiancati da uno staff motivato e in costante aggiornamento.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* INFO CARDS */}
      <div className="z-30 relative flex flex-col md:flex-row justify-center w-full max-w-7xl mx-auto px-4 md:-mt-24 mt-0 h-[230px]">
        <div className="flex-1 bg-[#d0dee2] px-6 py-8 md:px-10 md:py-0 border-b-2 md:border-b-0 md:border-r-2 border-[#dfe9ec] rounded-tl-lg md:rounded-bl-lg">
          <div className="text-xl md:text-2xl font-semibold mb-4 mt-2 md:mt-12">Dove Siamo</div>
          <div>Poggibonsi (SI)</div>
          <div>Via Montegrappa 119/121</div>
          <div>53036</div>
        </div>
        <div className="flex-1 bg-[#d0dee2] px-6 py-8 md:px-10 md:py-0 border-b-2 md:border-b-0 md:border-r-2 border-[#dfe9ec]">
          <div className="text-xl md:text-2xl font-semibold mb-4 mt-2 md:mt-12">Contatti</div>
          <div>0577 938997</div>
          <div>ncvvaldelsa@gmail.com</div>
        </div>
        <div className="flex-1 bg-[#d0dee2] px-6 py-8 md:px-10 md:py-0 rounded-bl-none rounded-br-lg md:rounded-tr-lg md:rounded-br-lg">
          <div className="text-xl md:text-2xl font-semibold mb-4 mt-2 md:mt-12">Orari</div>
          <div>Lun-Ven 09:30 - 20:00</div>
          <div>Sab 10:00 - 13:00</div>
          <div>Sab 15:00 - 18:00</div>
        </div>
      </div>
      {/* CHI SIAMO */}
      <section id="Chisiamo" className="pt-16 md:pt-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center leading-relaxed px-4">
          <img src={chiSiamoImage1} alt="Nuova Clinica Veterinaria val d'Elsa" className="w-full lg:w-1/2 h-64 md:h-[400px] lg:h-[500px] object-cover mb-8 lg:mb-0 lg:mr-12 lg:pr-[50px]"/>
          <div className="w-full lg:w-1/2">
            <div className="text-2xl md:text-3xl font-semibold mb-4">La nostra missione</div>
            <div className="text-justify">
              Alla Nuova Clinica Veterinaria Val d’Elsa crediamo in una medicina che non si limita a curare, ma che lavora ogni giorno per prevenire, educare e accompagnare.<br/>
              Il benessere animale è al centro di ogni nostra decisione, e l'attenzione verso i nostri pazienti e le loro famiglie va oltre il gesto clinico.
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-center leading-relaxed mt-16 px-4">
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <div className="text-2xl md:text-3xl font-semibold mb-4">
              Sempre un passo in più
            </div>
            <div className="text-justify">
              Ci impegniamo, ogni giorno, a fare un passo in più.<br/>
              Significa ascoltare davvero, spiegare con chiarezza, essere presenti anche dopo una visita, un intervento o una telefonata.<br/>
              Significa non accontentarsi del “sufficiente”, ma cercare sempre quel dettaglio in più che può fare la differenza nel percorso di cura.
            </div>
          </div>
          <img src={chiSiamoImage2} alt="Nuova Clinica Veterinaria val d'Elsa" className="w-full lg:w-1/2 h-64 md:h-[400px] lg:h-[500px] object-cover mb-8 lg:mb-0 lg:ml-12 lg:pl-[50px]"/>
        </div>
      </section>  
      <div className="my-24" /> 
      <Servizi />
      <div className="my-16" />
      <ChiSiamo />
      <div className="my-24" />
      <Contatti />
    </section>
  );
};

