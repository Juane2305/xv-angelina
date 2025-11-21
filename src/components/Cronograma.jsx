import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoTime } from 'react-icons/io5';

const Cronograma = ({ eventos, titulo = "Cronograma", backgroundColor = "bg-[#0a0a0a]", borderColor = "border-burgundy" }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className={`relative ${backgroundColor} py-16 flex flex-col items-center justify-center border-y-4 ${borderColor}`}>
      <div className="w-full max-w-4xl px-4">
        {/* Título */}
        <div className="flex items-center justify-center gap-3 mb-12" data-aos="fade-up">
          <IoTime className="text-gold text-4xl" />
          <h2 className="text-gold text-4xl font-serif tracking-widest">
            {titulo}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-gold to-transparent" style={{ zIndex: 0 }}></div>

          {/* Eventos */}
          <div className="space-y-8 relative z-10">
            {eventos.map((evento, index) => (
              <div
                key={index}
                className={`flex items-center gap-6 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              >
                {/* Contenido */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="bg-dark backdrop-blur-md p-4 rounded-lg border border-burgundy/50 hover:border-burgundy transition">
                    <p className="text-gold font-bold text-xl mb-1">{evento.hora}</p>
                    <p className="text-[#f0e5d8] text-sm leading-relaxed">{evento.descripcion}</p>
                  </div>
                </div>

                {/* Punto central */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-gold border-4 border-[#0a0a0a]"></div>
                </div>

                {/* Espacio en blanco */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cronograma;
