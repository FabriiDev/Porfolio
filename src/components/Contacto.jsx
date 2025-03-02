import React from 'react';
import FormContacto from './sub.components/FormContacto';
import { instagram, whatsapp, linkedin, github } from '../assets/images';

function Contacto() {
  return (
    <div id="contact" className="m-5 md:m-10 lg:m-20">
      <h2 className="font-semibold text-4xl text-center shadow-contacto">Contactame</h2>
      <div className="flex flex-col items-center lg:flex-row justify-center gap-10 mt-10 lg:gap-30 lg:mt-15 text-center lg:text-left">
        <FormContacto />
        <div className="flex flex-col items-center align-middle justify-center text-xl md:text-2xl">
          <p>
            Tambien puedes{' '}
            <span className="text-pink-500 font-semibold">contactarme</span> por mis redes sociales
          </p>
          <div className="flex justify-center gap-5 mt-5">
            <a href="https://www.instagram.com/fabrii.arias/" target="_blank" rel="noopener noreferrer">
              <img
                className="hover:cursor-pointer hover:scale-110 hover:transform transition-transform duration-300"
                src={instagram}
                alt="Instagram"
                width={42}
                height={42}
              />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <img
                className="hover:cursor-pointer hover:scale-110 hover:transform transition-transform duration-300"
                src={linkedin}
                alt="LinkedIn"
                width={42}
                height={42}
              />
            </a>
            <a href="https://github.com/FabriiDev" target="_blank" rel="noopener noreferrer">
              <img
                className="hover:cursor-pointer hover:scale-110 hover:transform transition-transform duration-300"
                src={github}
                alt="GitHub"
                width={42}
                height={42}
              />
            </a>
            <a href="https://wa.link/9ny068" target="_blank" rel="noopener noreferrer">
              <img
                className="hover:cursor-pointer hover:scale-110 hover:transform transition-transform duration-300"
                src={whatsapp}
                alt="WhatsApp"
                width={42}
                height={42}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
