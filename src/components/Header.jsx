import React, { useState } from 'react';
import logo from '../images/LOGO DEFINITIVO-03.png';

export default function Header (props) {
  const [isOpen, setIsOpen] = useState(false);

  const navbarButtons = ["Home", "Chi Siamo", "La Struttura", "Servizi", "Contatti"];
  const navbarButtonsList = navbarButtons.map((button) => 
      <li key={button}>
        <button name={button.replace(/ /g,'')} onClick={props.handleClick} className="rounded-md block py-3 px-4 hover:bg-ncvColor-dark bg-ncvColor-light">
          {button}
        </button>
      </li>
  );

  return (
    <header className="sticky top-0 bg-white text-white shadow-lg shadow-ncvColor-grey">
      <div className="container mx-auto flex justify-between items-center px-4 lg:px-8 mb-10">
        <img src={logo} width="300px" alt="Nuova Clinica Veterinaria val d'Elsa" onClick={props.handleClick} id="Home" />
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

          <ul className="flex flex-col lg:flex-row lg:space-x-10 text-center lg:text-left font-semibold text-xl">
            {navbarButtons.map((button) => 
              <li key={button}>
                <button name={button.replace(/ /g,'')} onClick={props.handleClick} className="rounded-md block py-3 px-4 hover:bg-ncvColor-dark bg-ncvColor-light">
                  {button}
                </button>
              </li>)}
          </ul>
        </nav>
      </div>
    </header>
  );
};

