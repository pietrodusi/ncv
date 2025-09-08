import React, { useState } from 'react';
import logo from '../images/LOGO DEFINITIVO-03.png';

export default function Header (props) {
  const [isOpen, setIsOpen] = useState(false);

  const navbarButtons = ["Home", "Chi siamo", "Servizi", "Il nostro team", "Contatti"];

  return (
    <div className="border-b-ncvColor-grey border-b-2 sticky top-0 bg-white z-50">
      {/* <div className="bg-ncvColor-blue h-[40px]"> 
      </div> */}
      <header className="sticky top-0 text-white shadow-md shadow-ncvColor-grey h-[120px] justify-center flex">
        
        <div className="container flex justify-between items-center h-full py-[5px] max-w-[55%]">
          {/* <img src={logo} alt="Nuova Clinica Veterinaria val d'Elsa" onClick={props.handleClick} id="Home" className="max-w-[400px] max-h-full"/> */}
          <img src={logo} alt="Nuova Clinica Veterinaria val d'Elsa" onClick={props.handleClick} id="Home" className="max-w-[400px] max-h-full"/>
          <button
            className="block lg:hidden text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          <nav
            className={`${
              isOpen ? 'block' : 'hidden'
            } absolute lg:static w-full lg:w-auto left-0 top-14 lg:top-auto lg:block`}
          >

            <ul className="flex flex-col lg:flex-row lg:space-x-[60px] text-center lg:text-left font-semibold text-xl">
              {navbarButtons.map((button) => 
                <li key={button}>
                  {/* rounded-md  block bg-ncvColor-blue py-3 px-4 min-w-[150px] min-h-[65px] */}
                  <button
                    name={button.replace(/ /g, '')}
                    onClick={() => {
                      if (button === "Home") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        const sectionId = button.replace(/ /g, "");
                        const section = document.getElementById(sectionId);
                        if (section) {
                          // adjust this value to match your navbar height
                          const yOffset = -100; 
                          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }
                    }}
                    className="text-ncvColor-blue hover:text-ncvColor-orange transition"
                  >
                    {button}
                  </button>
                </li>)}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

