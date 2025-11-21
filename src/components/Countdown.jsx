import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Countdown = ( {containerClasses, targetDate} ) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true, 
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    AOS.refresh(); 
    return () => clearInterval(timer);
  }, [timeLeft]);

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return null;
  }

  if (!timeLeft) {
    return (
      <div className="text-center text-2xl font-bold text-[#f0e5d8]">
        ¡Llegó el día!
      </div>
    );
  }

  return (
    <div className={containerClasses} data-aos="fade-in">
      {/* Reloj decorativo */}
      <div className="flex justify-center mb-8">
        <div className="w-48 h-48 animate-pulse" style={{animationDuration: '2s'}}>
          <img 
            src="https://res.cloudinary.com/dfschbyq2/image/upload/v1763749975/Disen%CC%83o_sin_ti%CC%81tulo_39_ekwvmx.svg" 
            alt="Clock" 
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      <h3 className="text-xl font-light leading-loose text-center mb-6 text-[#f0e5d8]">Faltan...</h3>
      <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-8 text-xl text-[#f0e5d8]" data-aos="fade-in">
        <div className="flex space-x-16 sm:space-x-8">
          <div className="flex flex-col items-center">
            <div className="text-3xl text-gold font-bold">{timeLeft.days}</div>
            <span className="text-[#a89968] text-sm uppercase tracking-wider">Días</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl text-gold font-bold">{timeLeft.hours}</div>
            <span className="text-[#a89968] text-sm uppercase tracking-wider">Horas</span>
          </div>
        </div>
        <div className="flex space-x-8">
          <div className="flex flex-col items-center">
            <div className="text-3xl text-gold font-bold">{timeLeft.minutes}</div>
            <span className="text-[#a89968] text-sm uppercase tracking-wider">Minutos</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl text-gold font-bold">{timeLeft.seconds}</div>
            <span className="text-[#a89968] text-sm uppercase tracking-wider">Segundos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;