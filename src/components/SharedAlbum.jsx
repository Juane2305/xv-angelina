import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoImages } from 'react-icons/io5';

const SharedAlbum = ({ albumLink = "#" }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] py-16 flex flex-col items-center justify-center border-y-4 border-y-burgundy overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute left-10 top-20 opacity-10 w-40 h-40 hidden md:block">
        <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1763748701/54e4ffac4c51ffc7495ae5b1c0b4c194_vfr97b.png" alt="Cap" className="w-full h-full object-contain" />
      </div>
      <div className="absolute right-10 bottom-20 opacity-10 w-40 h-40 hidden md:block">
        <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1763748701/54e4ffac4c51ffc7495ae5b1c0b4c194_vfr97b.png" alt="Cap" className="w-full h-full object-contain scale-x-[-1]" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
        {/* Icono */}
        <div className="text-6xl animate-bounce" style={{ animationDuration: '2s' }} data-aos="zoom-in">
          <IoImages className="text-gold" />
        </div>

        {/* Título */}
        <h3
          className="text-gold text-4xl font-serif tracking-widest text-center"
          data-aos="fade-up"
        >
          Comparte tus Momentos
        </h3>

        {/* Descripción */}
        <p
          className="text-[#f0e5d8] text-lg leading-relaxed max-w-2xl px-6 text-center"
          data-aos="fade-up"
        >
          Subi tus fotos y videos del evento en nuestro álbum compartido de Google Fotos. 
          <span className="block mt-3 italic text-gold">
            ¡Que todos recuerden este día especial juntos!
          </span>
        </p>

        {/* Botón */}
        <a
          href={albumLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6"
          data-aos="fade-up"
        >
          <button className="py-4 px-8 border-2 border-gold bg-gold text-[#1a1a1a] rounded-full font-bold text-lg transition hover:transform hover:scale-105 hover:shadow-lg hover:bg-[#a89968]">
            📸 Ir al Álbum Compartido
          </button>
        </a>

        {/* Nota */}
        <p className="text-[#8a8a8a] text-sm italic mt-4" data-aos="fade-up">
          Necesitarás una cuenta de Google para participar
        </p>
      </div>
    </section>
  );
};

export default SharedAlbum;
