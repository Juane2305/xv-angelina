import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const DressCodeElegante = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] py-16 flex flex-col items-center justify-center border-y-4 border-y-burgundy overflow-hidden">
      {/* Decoración de fondo sutil */}
      <div className="absolute left-10 top-20 opacity-10 w-40 h-40 hidden md:block">
        <img
          src="https://res.cloudinary.com/dfschbyq2/image/upload/v1763748701/54e4ffac4c51ffc7495ae5b1c0b4c194_vfr97b.png"
          alt="Cap"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute right-10 bottom-20 opacity-10 w-40 h-40 hidden md:block">
        <img
          src="https://res.cloudinary.com/dfschbyq2/image/upload/v1763748701/54e4ffac4c51ffc7495ae5b1c0b4c194_vfr97b.png"
          alt="Cap"
          className="w-full h-full object-contain scale-x-[-1]"
        />
      </div>

      <h3
        className="text-gold text-4xl font-serif tracking-widest mb-8 relative z-10"
        data-aos="fade-up"
      >
        Dress Code
      </h3>
      <div
        className="text-[#f0e5d8] text-lg leading-relaxed max-w-2xl px-6 space-y-3 relative z-10 flex flex-col items-center justify-center text-center"
        data-aos="fade-up"
      >
        <img
          src="https://res.cloudinary.com/dfschbyq2/image/upload/v1763748659/882afb3bad801f614ac018c35fed8336_zrgw4j.png"
          alt="Silhouette"
          className="size-52 object-contain"
        />

        <p className="text-[#f0e5d8] font-semibold text-4xl text-center pb-5">
          Elegante <br /> (blanco y negro)
        </p>
        <p className="italic text-gold">
          El beige y el gris déjalo para la quinceañera.
        </p>
      </div>
    </section>
  );
};

export default DressCodeElegante;
