import bannerBg from "../../../assets/images/visitanos-background.jpg";

// Icons
import phoneIcon from "../../../assets/icons/phone.svg";
import mailIcon from "../../../assets/icons/mail.svg";
import pinIcon from "../../../assets/icons/pin.svg";

// mapa
import mapa from "../../../assets/images/visitanos/mapa-anna-sky-horizontal.jpg";
import mapaMobile from "../../../assets/images/visitanos/mapa-anna-sky-vertical.jpg";

const features = [
  {
    description: "81 29 10 4413",
    icon: phoneIcon,
  },
  {
    description: "annaskyliving@gmail.com",
    icon: mailIcon,
  },
  {
    title: "Showroom de Ventas",
    description:
      "Plaza Vía 01. Rogelio Cantú Gómez 1000, Colinas de San Jerónimo, Monterrey, NL. local 23 y 24",
    icon: pinIcon,
  },
];

export default function Visitanos() {
  return (
    <div className="w-full">
      {/* Medio banner */}
      <div className="relative flex justify-center items-center w-full min-h-[50vh]">
        {/* imagen de fondo */}
        <img
          src={bannerBg}
          alt="Lobby de Anna Sky Living"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute w-full h-full bg-linear-to-r from-azul/90 via-50% via-azul/40" />

        <div className="relative flex w-full max-w-[1280px] h-full items-center">
          <div className="flex flex-col w-full justify-center items-center md:w-[400px] md:pl-[60px] gap-[20px]">
            <h3 className="header-2 text-center md:text-left font-bangla uppercase leading-[120%]">
              Visita <br /> nuestro <br />
              showroom
            </h3>
            <button className="w-fit px-[26px] py-[16px] rounded-[5px] button-text text-blanco font-bold uppercase tracking-wide bg-naranja hover:bg-gris active:bg-blanco active:text-azul hover:cursor-pointer">
              Contáctanos
            </button>
          </div>
        </div>

        <p className="absolute bottom-2 caption text-blanco font-light">
          Imágenes con fines ilustrativos*
        </p>
      </div>

      {/* Banner completo con mapa */}
      <div className="relative flex flex-col justify-center items-center w-full gap-[30px] pt-[60px]">
        {/* Info */}
        <div className="flex flex-col w-full max-w-[1280px] gap-[30px]">
          <h3 className="header-2 text-center text-blanco font-bangla uppercase px-[20px]">
            Te esperamos.
            <br /> Visítanos y descubre tu próximo hogar.
          </h3>

          {/* features */}
          <div className="flex flex-col md:flex-row justify-center items-center px-[20px]">
            {features.map((feature, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col w-full max-w-[370px] h-[157px] p-[20px] gap-[10px] justify-center items-center ${index === 1 ? "border-x-2 border-amarillo md:border-none" : "border-x-2 border-amarillo"}`}
                >
                  <img src={feature.icon} className="h-[26px]" />
                  <p className="paragraph-icon text-center text-blanco font-light tracking-tight leading-[120%]">
                    {feature.title && (
                      <span className="font-bold">
                        {feature.title} <br />
                      </span>
                    )}
                    <span className={`${index === 2 ? "" : "font-bold"}`}>
                      {feature.description}
                    </span>
                  </p>
                </div>
              );
            })}
          </div>

          {/* Map */}
          <div className="relative w-full max-w-[1280px] h-svh md:h-[50svh] xl:h-svh">
            <img
              src={mapa}
              className="hidden md:block absolute inset-0 w-full h-full object-cover"
            />
            <img
              src={mapaMobile}
              className="block md:hidden absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
