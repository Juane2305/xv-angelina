import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const RSVPReminder = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] py-16 flex flex-col items-center justify-center border-y-4 border-y-burgundy overflow-hidden">
      {/* Imagen decorativa */}
      <div className="mb-8 w-64 h-64" data-aos="zoom-in">
        <img 
          src="https://res.cloudinary.com/dfschbyq2/image/upload/v1763756518/globo_de_cantoya_12_mlyqph.svg" 
          alt="By order of the Peaky Blinders" 
          className="w-full h-full object-contain drop-shadow-2xl"
        />
      </div>

      {/* Texto principal */}
      <div className="relative z-10 flex flex-col items-center space-y-4 max-w-2xl px-6" data-aos="fade-up">        
        <p className="text-[#f0e5d8] text-xl text-center leading-relaxed">
          Te pedimos que confirmes tu asistencia <br />
          <span className="font-bold text-gold">antes del 25 de Febrero</span>
        </p>

        <p className="text-[#a89968] text-lg italic text-center pt-4">
          Tu confirmación es importante para organizar el evento
        </p>
      </div>
    </section>
  );
};

export default RSVPReminder;
