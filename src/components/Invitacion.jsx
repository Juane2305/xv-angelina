import cancion from '../assets/song.mp3'
import Countdown from "./Countdown";
import InstagramWall from "./InstagramWall";
import GoogleCalendarButton from "./GoogleCalendarButton";
import DatosBancarios from "./DatosBancarios";
import Asistencia from "./Asistencia";
import Footer from "./Footer";
import TextoFinal from "./TextoFinal";
import LugaresLineal from "./LugaresLineal";
import DressCodeElegante from "./DressCodeElegante";
import GalleryElegante from "./GalleryElegante";
import MusicScreen from "./MusicScreen";
import InformacionUtil from "./InformacionUtil";
import Cronograma from "./Cronograma";
import SharedAlbum from "./SharedAlbum";
import RSVPReminder from "./RSVPReminder";

const Invitacion = () => {

  const colorPrincipal =  "#1a1a1a"
  const targetDate = new Date("2026-03-21T21:00:00");


  return (
    <div className="w-full font-body relative overflow-hidden bg-dark">
        <div className="absolute z-40">
          <MusicScreen cancion={cancion}/>
        </div>
      <div
        className="flex flex-col justify-center items-center h-screen w-full text-center bg-center bg-cover font-body relative overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(135deg, #0a0a0a 0%, #2a2a2a 100%), url('https://www.transparenttextures.com/patterns/dark-wood.png')",
          backgroundAttachment: "fixed"
        }}
      >
        {/* Decoraciones laterales con siluetas - más visibles */}
        <div className="absolute left-20 top-1/2 transform -translate-y-1/2 opacity-90 hidden lg:block w-48 h-96">
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1763748659/882afb3bad801f614ac018c35fed8336_zrgw4j.png" alt="Silhouette" className="w-full h-full object-contain" />
        </div>
        
        <div className="absolute right-20 top-1/2 transform -translate-y-1/2 opacity-90 hidden lg:block w-48 h-96 scale-x-[-1]">
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1763748666/e73a3dc8751c9dc3bd3c2b40f50c716d_aoowft.png" alt="Tommy Profile" className="w-full h-full object-contain" />
        </div>

        {/* Logo Peaky Blinders principal - más visible */}
        {/* <div className="absolute top-20 left-1/2 transform -translate-x-1/2 opacity-50 hidden md:block w-48 h-40">
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1763748693/def5ea8080e2d4ff1fea76166fc63eed_v2cr0p.jpg" alt="Peaky Blinders" className="w-full h-full object-contain" />
        </div> */}

        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 flex flex-col items-center space-y-3">
          {/* Boina prominente encima del nombre */}
          <div className="w-40 h-32 mb-4 animate-bounce" style={{animationDuration: '3s'}}>
            <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1763748701/54e4ffac4c51ffc7495ae5b1c0b4c194_vfr97b.png" alt="Cap" className="w-full h-full object-contain drop-shadow-2xl" />
          </div>
          
          <p className="text-gold text-2xl font-semibold tracking-widest">¡Mis quince!</p>
          <h1 className="text-6xl md:text-8xl font-eleganteTitle text-[#f0e5d8] z-10 italic" style={{fontStyle: 'italic', letterSpacing: '2px'}}>
            Angelina
          </h1>
          <div className="flex items-center justify-center py-6 px-4 border-dashed border-y-2 border-burgundy mt-5">
            <p className="text-gold italic text-2xl tracking-widest">Sábado, 21 de Marzo de 2026</p>
          </div>
        </div>

        {/* Elemento decorativo inferior - más visible */}
        {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-40 w-48 h-32">
          <img src="https://res.cloudinary.com/dfschbyq2/image/upload/v1763748693/def5ea8080e2d4ff1fea76166fc63eed_v2cr0p.jpg" alt="Peaky Blinders" className="w-full h-full object-contain" />
        </div> */}
      </div>
      <div className="font-body mb-10 border-y-2 border-burgundy bg-[#0a0a0a]">
          <TextoFinal textoFinal={<>
              <p className='text-2xl text-[#f0e5d8] italic'>Porque los momentos más especiales merecen ser compartidos, <br /> te invito a mis 15 años.</p>
            </>}/>  
        </div>
        <div className='pb-10'>
          <Countdown targetDate={targetDate}/>
        </div>

      <div>

          <div className="bg-[#0a0a0a] border-y-3 border-burgundy">
            <div data-aos="fade-up">
              <LugaresLineal  borderColor="border-burgundy" buttonStyle="border-burgundy text-lg" link_ceremonia="https://maps.app.goo.gl/C24xprHnTijMsD13A"/>
            </div>
            {/* <div className="flex justify-center pb-8">
              <InformacionUtil />
            </div> */}
          </div>
          {/* <Cronograma 
            titulo="Cronograma"
            eventos={[
              { hora: "21:00", descripcion: "Llegada de invitados" },
              { hora: "21:30", descripcion: "Entrada de la quinceañera" },
              { hora: "22:00", descripcion: "Primer baile" },
              { hora: "22:30", descripcion: "Cena" },
              { hora: "00:00", descripcion: "Brindis" },
              { hora: "00:30", descripcion: "Torta y sorpresas" },
              { hora: "01:00", descripcion: "Baile libre" },
              { hora: "05:00", descripcion: "Despedida" },
            ]}
          /> */}

          <GalleryElegante 
            images={[
              {id: 1, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763759038/8a1cd94c-ccb7-4768-a068-d8d495a40453_kzxltw.jpg'},
              {id: 2, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763750916/9333305a-518e-43f4-b6e5-9e2ee5d32243_pthjj3.jpg'},
              {id: 3, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763750915/4457727b-2363-4895-bffd-d1b9437044e1_ahq9is.jpg'},
              {id: 4, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763759038/b4a23304-7b85-4302-aace-48c3d05230ca_ptsnec.jpg'},
              {id: 5, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763759041/34f9a26d-418e-479d-8e4e-1a6b708abf5f_ibefbh.jpg'},
              {id: 6, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763759042/c967b9ef-5204-4d1c-8392-b5f551cdad26_ugewfi.jpg'},
              {id: 7, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763750915/bd7af13e-7ada-47a7-a317-928bdb1f22b4_gvlgny.jpg'},
              {id: 8, url: 'https://res.cloudinary.com/dfschbyq2/image/upload/v1763759037/9d97a83b-d3ff-4455-9713-335625e6cdb0_c82inj.jpg'},
            ]}
          />

            <InstagramWall user="@angelllotti"/>
          <SharedAlbum albumLink="https://drive.google.com/drive/folders/1lJ1HHrsx7Xem91LCzJSN8NDF_iz3L9ip" />
          <div className="bg-[#0a0a0a] text-center relative text-[#f0e5d8] border-t-4 border-burgundy">
            <GoogleCalendarButton buttonClass="border-burgundy" titleCalendar="Mis 15 años - Angelina"
              fechaComienzo="20260321T210000"
              fechaFin="20260322T050000"
              salon="Salon de fiestas El Castillo, Av Mosconi 796 Lomas del Mirador"/>
          </div>
          <div className="">
            <DressCodeElegante/>
          </div>
          <DatosBancarios
            claseContenedor="bg-dark text-[#f0e5d8]"
            textSize="text-lg"
            background={{backgroundColor: colorPrincipal}}
          />
          <RSVPReminder />
          <Asistencia
            clase="py-10 bg-[#0a0a0a] bg-fixed border-y-3 border-burgundy"
            claseTitle="text-white"
            claseButton="border-2 border-burgundy font-semibold hover:bg-burgundy text-[#f0e5d8]"
            linkAsistencia="https://docs.google.com/forms/d/e/1FAIpQLSdi4pxOTH75hitN-M2yo1VGKTp-xrRx-XrSVyILGaC7TbhtOA/viewform?usp=dialog"
          />
        {/* Texto Final */}
        <div className="font-eleganteTitle">
          <TextoFinal textoFinal={<>
              <p className='text-4xl italic'>Angelina</p>
            </>}/>  
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default Invitacion;
