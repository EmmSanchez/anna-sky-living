import { socials } from "../../../data/social";

import annaLogo from "../../../assets/logos/anna-sky-living-yellow.svg";
import desarrolladoXperience from "../../../assets/logos/desarrollado-xperience.svg";

const buttons = [
  {
    id: "nosotros",
    label: "Nosotros",
  },
  {
    id: "conoce-proyecto",
    label: "Conoce el proyecto",
  },
  {
    id: "amenidades",
    label: "Amenidades",
  },
  {
    id: "modelos",
    label: "Modelos",
  },
  {
    id: "avance-de-obra",
    label: "Avance de obra",
  },
];

export default function Footer() {
  return (
    <div className="self-center flex flex-col w-full max-w-[1160px] justify-center items-center py-[30px] px-[60px] gap-[30px]">
      <div className="flex flex-col w-full gap-[20px]">
        {/* Navegación */}
        <div className="flex w-full flex-col min-[800px]:flex-row justify-between items-center max-[800px]:gap-[5px]">
          <button>
            <img
              src={annaLogo}
              alt="Logo Anna Sky Living"
              className="md:w-[87px] xl:w-[143px] xl:h-[48px]"
            />
          </button>
          {buttons.map((button) => {
            return (
              <a
                href={`#${button.id}`}
                key={button.id}
                className="button-text text-center font-bold uppercase p-[16px] min-[800px]:p-[10px] xl:p-[16px]"
              >
                {button.label}
              </a>
            );
          })}
        </div>

        {/* Social */}
        <div className="self-center flex flex-col xl:flex-row justify-between items-center w-full gap-[30px]">
          <div className="flex gap-[20px]">
            {socials.map((social) => {
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex size-[40px] justify-center items-center rounded-[5px] bg-naranja hover:bg-gris active:bg-blanco"
                >
                  <img
                    src={social.icon}
                    className="brightness-0 invert-100 group-active:hidden"
                  />
                  <img
                    src={social.iconActive}
                    className="hidden group-active:block"
                  />
                </a>
              );
            })}
          </div>

          <img
            src={desarrolladoXperience}
            alt="Desarrollado por Xperience"
            className="w-[120px] h-[32px]"
          />
        </div>
      </div>

      <p className="caption">
        © 2026 ANNA SKY LIVING. Todos los derechos reservados.
      </p>
    </div>
  );
}
