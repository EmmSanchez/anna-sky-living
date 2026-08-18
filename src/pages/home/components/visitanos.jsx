import bannerBg from "../../../assets/images/visitanos-background.jpg";

// Icons
import phoneIcon from "../../../assets/icons/phone.svg";
import mailIcon from "../../../assets/icons/mail.svg";
import pinIcon from "../../../assets/icons/pin.svg";

// mapa
import mapa from "../../../assets/images/mapa.svg";

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
    title: "Plaza Vía 01",
    description:
      "Blvd. Rogelio Cantú Gómez 1000, Colinas de San Jerónimo, Monterrey, NL. local 23 y 24",
    icon: pinIcon,
  },
];

export default function Visitanos() {
  return (
    <div className="w-full">
      {/* Medio banner */}
      <div className="relative flex justify-center items-center w-full h-[425px]">
        {/* imagen de fondo */}
        <img
          src={bannerBg}
          alt="Lobby de Anna Sky Living"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* overlay */}
        <div className="absolute w-full h-full bg-linear-to-r from-azul/90 via-50% via-azul/40" />

        <div className="relative flex w-full max-w-[1280px] h-full items-center">
          <div className="flex flex-col w-[400px] pl-[60px] gap-[20px]">
            <h3 className="text-[35px] font-bangla uppercase leading-[120%]">
              Visita <br /> nuestro <br />
              showroom
            </h3>
            <button className="px-[26px] py-[16px] rounded-[5px] text-[16px] text-blanco font-bold uppercase tracking-wide bg-naranja">
              Contáctanos
            </button>
          </div>
        </div>
      </div>

      {/* Banner completo con mapa */}
      <div className="relative flex flex-col justify-center items-center w-full gap-[30px] pt-[60px]">
        {/* Info */}
        <div className="flex flex-col gap-[30px]">
          <h3 className="text-[35px] text-center text-blanco font-bangla uppercase leading-[120%]">
            Te esperamos.
            <br />
            Visítanos y descubre tu próximo hogar.
          </h3>

          {/* features */}
          <div className="flex flex-wrap justify-center items-center">
            {features.map((feature, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col w-[370px] h-[273px] p-[20px] gap-[20px] justify-start items-center ${index === 1 ? "border-none" : "border-x-2 border-amarillo"}`}
                >
                  <img src={feature.icon} alt="" className="pt-[45px]" />
                  <p className="text-[21px] text-center text-blanco font-light leading-[120%]">
                    {feature.title && (
                      <span className="font-bold">
                        {feature.title} <br />
                      </span>
                    )}
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Map */}
          <img src={mapa} className="relative w-full h-[700px]" />
        </div>
      </div>
    </div>
  );
}
