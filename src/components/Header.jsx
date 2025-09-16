import React, { useState } from 'react';
import logo from '../images/LOGO DEFINITIVO-03.png';

export default function Header (props) {
  const [isOpen, setIsOpen] = useState(false);

  const navbarButtons = ["Home", "Chi siamo", "Servizi", "Il nostro team", "Contatti"];

  return (
    <div className="border-b-ncvColor-grey border-b-2 sticky top-0 bg-white z-50">
      <header className="sticky top-0 text-white shadow-md shadow-ncvColor-grey h-[80px] md:h-[100px] flex justify-center">
        <div className="container flex justify-between items-center h-full py-2 px-4 md:px-0 w-full max-w-7xl">
          <img
            src={logo}
            alt="Nuova Clinica Veterinaria val d'Elsa"
            onClick={props.handleClick}
            id="Home"
            className="max-h-[60px] md:max-h-full w-auto cursor-pointer"
          />
          <button
            className="block lg:hidden text-3xl text-ncvColor-blue focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <nav
            className={`${
              isOpen ? 'block' : 'hidden'
            } absolute bg-white left-0 top-[80px] w-full shadow-md lg:shadow-none lg:static lg:w-auto lg:block z-40`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-12 text-center lg:text-left font-semibold text-lg md:text-xl py-4 lg:py-0">
              {navbarButtons.map((button) => 
                <li key={button}>
                  <button
                    name={button.replace(/ /g, '')}
                    onClick={() => {
                      if (button === "Home") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        const sectionId = button.replace(/ /g, "");
                        const section = document.getElementById(sectionId);
                        if (section) {
                          const yOffset = -100; 
                          const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }
                      setIsOpen(false);
                    }}
                    className="text-ncvColor-blue hover:text-ncvColor-orange transition px-4 py-2 block"
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

