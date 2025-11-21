import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

const LugaresLineal = ({borderColor, buttonStyle, link_ceremonia, direccion = "Salon de fiestas 'El Castillo', Av Mosconi 796 Lomas del Mirador"}) => {
  const [ scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const { top, height } = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const progress = Math.min(
          100,
          Math.max(
            0,
            ((viewportHeight - top) / (viewportHeight + height * 0.5)) * 120
          )
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const lugares = [
    {
      id: 1,
      titulo: "Celebración de los 15 Años",
      descripcion: (
        <>
          Sábado, 21 de Marzo de 2026<br />
          <strong>Salon de fiestas "El Castillo"</strong><br />
          Av Mosconi 796 Lomas del Mirador <br /> a las 21:00 hs
        </>
      ),
    },
  ];

  return (
    <div ref={sectionRef} className="relative flex flex-col items-center py-16 z-10 ">
      <h2 className="text-2xl font-bold mb-8 z-20 relative text-[#f0e5d8]">
        Información del Evento
      </h2>

      <div className="relative flex flex-col gap-12 z-20 w-full max-w-xl px-4 mb-10">
        {lugares.map((lugar) => {
          const { ref, inView } = useInView({ threshold: 0.5 });

          return (
            <div
              key={lugar.id}
              ref={ref}
              className={`p-6 shadow-md rounded-xl bg-dark mx-auto w-full text-center transition-all duration-300 text-[#f0e5d8] ${
                inView
                  ? `opacity-100 scale-105 border-2 ${borderColor} `
                  : "opacity-70 scale-100 border border-transparent"
              }`}
            >
              <h3 className="text-xl font-bold mb-1">{lugar.titulo}</h3>
              <p className="text-[#a89968] text-lg">{lugar.descripcion}</p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center z-30">
              <a
                href={link_ceremonia}
                target="_blank"
                rel="noopener noreferrer"
                >
                <button className={`z-20 border-2 ${buttonStyle} py-3 px-8 rounded-full bg-dark text-[#f0e5d8]  mt-5 md:mt-10 transition hover:transform hover:scale-105`}>
                  Ver Ubicación
                </button>
              </a>
          </div>
    </div>
    
  );
};

export default LugaresLineal;