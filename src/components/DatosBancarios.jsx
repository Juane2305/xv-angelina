import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import MiIconoGift from './DatosBancariosIcon';
import { IoCopyOutline } from "react-icons/io5";

const DatosBancarios = ({claseContenedor, textSize, background, nombre = "Angelina Victoria Martellotti", cbu = "0000003100034656009434", alias = "ange.1952", banco = "Mercado Pago"}) => {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const copiarTexto = (texto) => {
    navigator.clipboard.writeText(texto)
      .then(() => {
        alert(`¡Copiado al portapapeles!`);
      })
      .catch(() => {
        alert('Error al copiar. Intenta de nuevo.');
      });
  };

  return (
    <>
      <div className={`pt-20 flex flex-col justify-center items-center py-20 gap-y-5 ${claseContenedor}`} style={background} >
        <div data-aos='fade-up'>
          <MiIconoGift/>
        </div>
        <div className={`flex flex-col items-center justify-center gap-y-4`}>
          <h3 className={`text-center px-5 md:px-0 text-2xl font-bold text-[#f0e5d8]`} data-aos='fade-up'>
            Regalo
          </h3>
          <p className={`text-center px-5 md:px-0 text-[#f0e5d8] ${textSize}`} data-aos='fade-up'>
            Si deseas colaborar con nuestro evento, te dejamos nuestros
          </p>
          <button
            className="py-3 px-8 border-2 border-burgundy bg-burgundy text-[#f0e5d8] rounded-full transition hover:transform hover:scale-105 hover:shadow-lg font-semibold text-lg"
            data-aos='fade-up'
            onClick={() => setIsOpen(true)}
          >
            💳 Datos Bancarios
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center z-50">
          <div className="bg-dark p-8 rounded-lg flex flex-col justify-center items-center border-2 border-burgundy max-w-md w-full mx-4">
            <div className="flex flex-col justify-center text-center space-y-6 text-[#f0e5d8] w-full">
              <h2 className="font-bold text-2xl text-gold">Datos Bancarios</h2>

              <div className="w-full space-y-4 text-left">
                <div className="p-4 bg-[#2a2a2a] rounded-lg">
                  <p className="text-sm text-[#a89968] mb-1">Titular</p>
                  <p className="font-semibold text-[#f0e5d8]">{nombre}</p>
                </div>

                <div className="p-4 bg-[#2a2a2a] rounded-lg">
                  <p className="text-sm text-[#a89968] mb-1">CBU</p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-[#f0e5d8] break-all">{cbu}</p>
                    <button
                      onClick={() => copiarTexto(cbu)}
                      className="ml-2 p-2 hover:bg-[#3a3a3a] transition rounded"
                    >
                      <IoCopyOutline className="text-gold" size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-[#2a2a2a] rounded-lg">
                  <p className="text-sm text-[#a89968] mb-1">Alias</p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-[#f0e5d8]">{alias}</p>
                    <button
                      onClick={() => copiarTexto(alias)}
                      className="ml-2 p-2 hover:bg-[#3a3a3a] transition rounded"
                    >
                      <IoCopyOutline className="text-gold" size={20} />
                    </button>
                  </div>
                </div>

                <div className="p-4 bg-[#2a2a2a] rounded-lg">
                  <p className="text-sm text-[#a89968] mb-1">Banco</p>
                  <p className="font-semibold text-[#f0e5d8]">{banco}</p>
                </div>
              </div>

              <p className="text-xl text-[#8a8a8a] italic">
                Toca el ícono de copiar
              </p>

              <button
                className="py-3 rounded-lg text-dark font-bold bg-gold hover:bg-[#a89968] border-2 border-gold transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default DatosBancarios