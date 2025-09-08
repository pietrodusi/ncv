import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section id="Contatti" className="bg-ncvColor-grey/30 py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 px-4">
        <div className="w-full lg:w-1/2 h-72 md:h-[400px] lg:h-[500px]">
          <iframe
            title="map"
            className="w-full h-full rounded-2xl shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.532730723805!2d11.145581395733885!3d43.47035158975629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132a3a1ceb99fa67%3A0x9087d0531be92aa7!2sNuova%20Clinica%20Veterinaria%20Val%20d&#39;Elsa%20dei%20dottori%20Dusi%20G.%20e%20Carraresi%20L.!5e0!3m2!1sit!2sit!4v1757179230850!5m2!1sit!2sit" 
            loading="lazy"
          ></iframe>
        </div>
        <div className="w-full lg:w-1/2 lg:pl-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Contatti</h2>
          <div className="address mb-3 flex items-center gap-2" itemProp="address" itemScope="" itemType="http://schema.org/PostalAddress">
            <FontAwesomeIcon icon={faLocationDot} className="fa fa-map-marker"/>
            <a href="https://www.google.it/maps/place/Via+Montegrappa,+119,+53036+Poggibonsi+SI/@43.4703455,11.1482556,17z/data=!3m1!4b1!4m5!3m4!1s0x132a3a1cad56d19d:0xad2ce29f2091fb16!8m2!3d43.4703455!4d11.1504496">
              <span itemProp="streetAddress"> Via Montegrappa 119/121</span>, <span itemProp="postalCode">53036</span> <span itemProp="addressLocality">Poggibonsi (SI)</span>
            </a>
          </div>
          <div className="phone mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="fa fa-phone"/>
            <span itemProp="telephone">0577 938997</span>
          </div>
          <div className="email mb-3 flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope"/>
            <a href="mailto:info@ncvvaldelsa.it" itemProp="email">info@ncvvaldelsa.it</a>
          </div>
          <div className="timetable mb-8">
            <meta itemProp="openingHours" content="Mo,Tu,We,Th,Fr 09:30-20:00" />
            <meta itemProp="openingHours" content="Sa 10:00-13:00" />
            <meta itemProp="openingHours" content="Sa 15:00-18:00" />
            <table>
              <tbody>
                <tr>
                  <td className="days pr-4">Lun-Ven</td>
                  <td>
                    <time dateTime="09:30">09:30</time> - <time dateTime="20:00">20:00</time>
                  </td>
                </tr>
                <tr>
                  <td className="days pr-4">Sab</td>
                  <td>
                    <time dateTime="10:00">10:00</time> - <time dateTime="13:00">13:00</time><br /> 
                    <time dateTime="16:00">15:00</time> - <time dateTime="20:00">18:00</time>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-wrap gap-4">
            <div className="whatsapp flex items-center gap-2">
              <FontAwesomeIcon icon={faWhatsapp} className="fa fa-whatsapp"/>
              <a href="https://wa.me/390577938997">whatsapp</a>
            </div>
            <div className="facebook flex items-center gap-2">
              <FontAwesomeIcon icon={faFacebook} className="fa fa-facebook-official"/>
              <a href="https://www.facebook.com/ncvvaldelsa">facebook</a>
            </div>
            <div className="instagram flex items-center gap-2">
              <FontAwesomeIcon icon={faInstagram} className="fa fa-instagram"/>
              <a href="https://www.instagram.com/ncvvaldelsa">instagram</a>
            </div>
            {/* <div className="twitter flex items-center gap-2">
              <FontAwesomeIcon icon={faTwitter} className="fa fa-twitter"/>
              <a href="https://twitter.com/ncvvaldelsa">twitter</a>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
