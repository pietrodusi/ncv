import React from 'react';
import './oldSite_style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import cvitLogo from './images/logocvit-17-17.png';
import ncvLogo from './images/LogoInCostruzione.png';
import ncvLogoSmall from './images/LogoInCostruzioneSmall.png'

export default function OldSite() 
{
    return (
      <>
        <header>
            <div className="logo">
              <picture>
  <source srcSet={ncvLogoSmall} media="(max-width: 600px)" />
  <img src={ncvLogo} alt="Logo NCV Val d'Elsa" />
</picture>

            </div>
        </header>

<div className="infoContainer">
           <div className="info" itemScope="" itemType="http://schema.org/LocalBusiness">
     <div className="col" >
        <div className="address" itemProp="address" itemScope="" itemType="http://schema.org/PostalAddress">
            <FontAwesomeIcon icon={faLocationDot} className="fa fa-map-marker"/>
            <a href="https://www.google.it/maps/place/Via+Montegrappa,+119,+53036+Poggibonsi+SI/@43.4703455,11.1482556,17z/data=!3m1!4b1!4m5!3m4!1s0x132a3a1cad56d19d:0xad2ce29f2091fb16!8m2!3d43.4703455!4d11.1504496">
            <span itemProp="streetAddress"> Via Montegrappa 119/121</span>, <span itemProp="postalCode">53036</span> <span itemProp="addressLocality">Poggibonsi (SI)</span></a>
        </div>
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} className="fa fa-phone"/>
            <i className="fa fa-phone" aria-hidden="true"></i> <span itemProp="telephone">0577 938997</span>
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} className="fa fa-envelope"/>
            <i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:info@ncvvaldelsa.it" itemProp="email">info@ncvvaldelsa.it</a>
        </div>
        <div className="timetable">
            <meta itemProp="openingHours" content="Mo,Tu,We,Th,Fr 09:30-20:00" />
            <meta itemProp="openingHours" content="Sa 10:00-13:00" />
            <meta itemProp="openingHours" content="Sa 15:00-18:00" />
         <table>
           <tbody>
             <tr>
              
               <td className="days">
                 Lun-Ven
               </td>
               <td>
                 <time dateTime="09:30">09:30</time> - <time dateTime="20:00">20:00</time>
               </td>
             </tr>
             <tr>
               <td className="days">
                 Sab
               </td>
               <td>
                 <time dateTime="10:00">10:00</time> - <time dateTime="13:00">13:00</time><br /> 
                 <time dateTime="16:00">15:00</time> - <time dateTime="20:00">18:00</time>
               </td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
     <div className="col">
       <div className="whatsapp"><FontAwesomeIcon icon={faWhatsapp} className="fa fa-whatsapp"/> <a href="https://wa.me/390577938997">whatsapp</a></div>
       <div className="facebook"><FontAwesomeIcon icon={faFacebook} className="fa fa-facebook-official"/> <a href="https://www.facebook.com/ncvvaldelsa">facebook</a></div>
       <div className="instagram"><FontAwesomeIcon icon={faInstagram} className="fa fa-instagram"/> <a href="https://www.instagram.com/ncvvaldelsa">instagram</a></div>
       {/* <div className="twitter"><FontAwesomeIcon icon={faTwitter} className="fa fa-twitter"/> <a href="https://twitter.com/ncvvaldelsa">twitter</a></div> */}
     </div>
   </div>
</div>
      <footer itemScope="" itemType="http://schema.org/LocalBusiness">
     <div className="col" style={{ margin: '25px auto 0' }}>
       <p itemProp="alternateName">Nuova Clinica Veterinaria Val d'Elsa dei dottori
         <strong> Dusi G.</strong> e
         <strong> Carraresi L.</strong></p>
     </div>
     <div className="col">
       <a href="https://www.gruppocvit.it/" target="_blank">
        <img className="gruppocvit" alt="Gruppo Cvit" src={cvitLogo} />
       </a>
     </div>
   </footer>

    </>
    );
}
  

//   <div className="info" itemScope="" itemType="http://schema.org/LocalBusiness">
//     <div className="col">
//       <div className="address" itemProp="address" itemScope="" itemType="http://schema.org/PostalAddress"><i className="fa fa-map-marker" aria-hidden="true"></i> <a href="https://www.google.it/maps/place/Via+Montegrappa,+119,+53036+Poggibonsi+SI/@43.4703455,11.1482556,17z/data=!3m1!4b1!4m5!3m4!1s0x132a3a1cad56d19d:0xad2ce29f2091fb16!8m2!3d43.4703455!4d11.1504496"><span itemProp="streetAddress">Via Montegrappa 119/121</span>, <span itemProp="postalCode">53036</span> <span itemProp="addressLocality">Poggibonsi (SI)</span></a></div>
//       <div className="phone"><i className="fa fa-phone" aria-hidden="true"></i> <span itemProp="telephone">0577 938997</span></div>
//       <div className="email"><i className="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:ncvvaldelsa@gmail.com" itemProp="email">ncvvaldelsa@gmail.com</a></div>
//       <div className="timetable">
//         <meta itemProp="openingHours" content="Mo,Tu,We,Th,Fr 09:30-20:00">
//         <meta itemProp="openingHours" content="Sa 10:00-13:00">
//         <meta itemProp="openingHours" content="Sa 15:00-18:00">
//         <table>
//           <tbody>
//             <tr>
//               <td className="days">
//                 Lun-Ven
//               </td>
//               <td>
//                 <time dateTime="09:30">09:30</time> - <time dateTime="20:00">20:00</time>
//               </td>
//             </tr>
//             <tr>
//               <td className="days">
//                 Sab
//               </td>
//               <td>
//                 <time dateTime="10:00">10:00</time> - <time dateTime="13:00">13:00</time><br <time="" dateTime="16:00">15:00 - <time dateTime="20:00">18:00</time>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//     <div className="col">
//       <div className="whatsapp"><i className="fa fa-whatsapp" aria-hidden="true"></i> <a href="https://wa.me/390577938997">whatsapp</a></div>
//       <div className="facebook"><i className="fa fa-facebook-official" aria-hidden="true"></i> <a href="https://www.facebook.com/ncvvaldelsa">facebook</a></div>
//       <div className="instagram"><i className="fa fa-instagram" aria-hidden="true"></i> <a href="https://www.instagram.com/ncvvaldelsa">instagram</a></div>
//       <div className="twitter"><i className="fa fa-twitter" aria-hidden="true"></i> <a href="https://twitter.com/ncvvaldelsa">twitter</a></div>
//     </div>
//   </div>
//   <footer itemScope="" itemType="http://schema.org/LocalBusiness">
//     <div className="col">
//       <p itemProp="alternateName">Nuova Clinica Veterinaria Val d'Elsa dei dottori
//         <strong>Dusi G.</strong> e
//         <strong>Magnanelli G.</strong></p>
//     </div>
//     <div className="col">
//       <a href="https://www.gruppocvit.it/" target="_blank">
//         <img className="gruppocvit" alt="Gruppo Cvit" src="images/logocvit-17-17.png">
//       </a>
//     </div>
//   </footer>
//   <script>
//     (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
//     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
//     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
//     })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
//     ga('create', 'UA-82066716-1', 'auto');
//     ga('send', 'pageview');
//   </script>
