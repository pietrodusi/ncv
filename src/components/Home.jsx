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
    <section className="" id="Home">
      <div className="text-white outer flex h-[800px]">
        <div className="relative w-full overflow-hidden inner flex-1 h-full">
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
        <div className="absolute inset-0 z-20 flex flex-col mx-auto my-[200px] drop-shadow-[2px_2px_2px_rgba(0,0,0,0.8)] w-[1500px]">
          <h1 className="text-white text-6xl font-bold drop-shadow-lg">
            Nuova Clinica Veterinaria Val d’Elsa
          </h1>
          <div className="mt-[40px]">
            <div className="mt-[15px] text-lg pr-[500px]">
              Dal 2016 ci prendiamo cura dei vostri animali con passione, competenza e dedizione.
            </div>
            <div className="mt-[15px] text-lg pr-[500px]">
              La Nuova Clinica Veterinaria Val d’Elsa nasce per offrire un punto di riferimento solido e moderno per la salute del cane, del gatto e degli animali esotici in tutta la Valdelsa e oltre.
            </div>
            <div className="mt-[15px] text-lg pr-[500px]">
              Una struttura moderna, creata per rispondere alle esigenze dei nostri piccoli pazienti e dei loro compagni umani, con spazi accoglienti, tecnologie avanzate e un team medico altamente qualificato.
            </div>
            <div className="mt-[15px] text-lg pr-[500px]">
              Dal 2025, la Clinica è guidata dal dottor Giacomo Dusi e dalla dottoressa Laura Carraresi, affiancati da uno staff motivato e in costante aggiornamento.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="z-30 relative flex justify-center -mt-[150px] h-[250px] w-[1500px] mx-auto">
      <div className="w-[500px] bg-[#d0dee2] px-[50px] border-r-2 border-[#dfe9ec] rounded-tl-[5px] rounded-bl-[5px]">
        <div className="text-2xl font-semibold mb-[20px] mt-[50px]">Dove Siamo</div>
        <div>Poggibonsi (SI)</div>
        <div>Via Montegrappa 119/121</div>
        <div>53036</div>
      </div>
      <div className="w-[500px] bg-[#d0dee2] px-[50px] border-r-2 border-[#dfe9ec]">
        <div className="text-2xl font-semibold mb-[20px] mt-[50px]">Contatti</div>
        <div>0577 938997</div>
        <div>ncvvaldelsa@gmail.com</div>
      </div>
      <div className="w-[500px] bg-[#d0dee2] px-[50px] rounded-tr-[5px] rounded-br-[5px]">
        <div className="text-2xl font-semibold mb-[20px] mt-[50px]">Orari</div>
        <div>
          Lun-Ven	09:30 - 20:00
        </div>
        <div>
          Sab	    10:00 - 13:00
                      15:00 - 18:00
        </div>
      </div>
    </div>

    <section id="Chisiamo" className="pt-[150px]">
      <div className="w-[1500px] mx-auto flex justify-center leading-relaxed">
          <img src={chiSiamoImage1} alt="Nuova Clinica Veterinaria val d'Elsa" className="w-[50%] h-[500px] pr-[100px] pb-[50px] object-cover"/>
        <div className="w-[50%] pt-[90px]">
          <div className="text-3xl font-semibold mb-[20px]">La nostra missione</div>
          <div className="text-justify">
            Alla Nuova Clinica Veterinaria Val d’Elsa crediamo in una medicina che non si limita a curare, ma che lavora ogni giorno per prevenire, educare e accompagnare.<br/>
            Il benessere animale è al centro di ogni nostra decisione, e l'attenzione verso i nostri pazienti e le loro famiglie va oltre il gesto clinico.
          </div>
        </div>
      </div>

      <div className="w-[1500px] mx-auto flex justify-center leading-relaxed">
        <div className="w-[50%] pt-[90px]">
          <div className="text-3xl font-semibold mb-[20px]">
            Sempre un passo in più
          </div>
          <div className="text-justify">
            Ci impegniamo, ogni giorno, a fare un passo in più.<br/>
            Significa ascoltare davvero, spiegare con chiarezza, essere presenti anche dopo una visita, un intervento o una telefonata.<br/>
            Significa non accontentarsi del “sufficiente”, ma cercare sempre quel dettaglio in più che può fare la differenza nel percorso di cura.
          </div>
        </div>
          <img src={chiSiamoImage2} alt="Nuova Clinica Veterinaria val d'Elsa" className="w-[50%] h-[500px] pl-[100px] pb-[50px] object-cover"/>
      </div>
    </section>  

    <div className="m-[100px]" /> 
    <Servizi />
    <div className="m-[60px]" />
    <ChiSiamo />
    <div className="m-[100px]" />
    <Contatti />

    </section>
  );
};

