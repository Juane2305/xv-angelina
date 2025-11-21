import React from "react";
import {
  FaFacebookF,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import logo from '../assets/logo.svg'


const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-[#f0e5d8] py-12 border-t-4 border-burgundy">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-6 md:mb-0">
          <img src={logo} alt="Logo Invitarly" className="w-36 mx-auto md:mx-0" />
        </div>
        <div className="flex flex-col items-center justify-center md:items-center text-center mb-6 md:mb-0 md:mx-6 max-w-xl">
          <p className="text-lg mb-2">
            ¿Te gustó la invitación y querés una para tu evento?
          </p>
          <p className="font-semibold text-gold">¡Contactanos!</p>
        </div>
        <div className="flex items-center">
          <a
            href="https://instagram.com/invitarly"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-2xl text-gold hover:text-[#a89968] transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/542612768670?text=%C2%A1Hola!%20Quiero%20una%20invitaci%C3%B3n%20como%20esta"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2 text-2xl text-gold hover:text-[#a89968] transition-colors duration-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-[#8a8a8a] text-sm">
        © {new Date().getFullYear()} Invitarly. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;