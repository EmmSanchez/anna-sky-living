import annaLogo from "../../../assets/logos/anna-sky-living-yellow.svg";

import linkedin from "../../../assets/icons/social/linkedin.svg";
import whatsapp from "../../../assets/icons/social/whatsapp.svg";
import facebook from "../../../assets/icons/social/facebook.svg";
import instagram from "../../../assets/icons/social/instagram.svg";

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

const socials = [
  {
    id: "linkedin",
    icon: linkedin,
  },
  {
    id: "whatsapp",
    icon: whatsapp,
  },
  {
    id: "facebook",
    icon: facebook,
  },
  {
    id: "instagram",
    icon: instagram,
  },
];

export default function Footer() {
  return (
    <div className="self-center flex flex-col w-full max-w-[1280px] justify-center items-center py-[30px] px-[60px] gap-[30px]">
      <div className="flex flex-col w-full gap-[20px]">
        {/* Navegación */}
        <div className="flex w-full justify-between items-center">
          <button>
            <img
              src={annaLogo}
              alt="Logo Anna Sky Living"
              className="w-[143px] h-[48px]"
            />
          </button>
          {buttons.map((button) => {
            return (
              <button className="text-[16px] font-bold uppercase p-[16px]">
                {button.label}
              </button>
            );
          })}
        </div>

        {/* Social */}
        <div className="self-center flex flex-wrap justify-between items-center w-full max-w-[306px]">
          {socials.map((social) => {
            return (
              <button className="flex size-[40px] justify-center items-center border rounded-[5px] border-naranja">
                <img src={social.icon} alt="" />
              </button>
            );
          })}
        </div>
      </div>

      <img src={desarrolladoXperience} alt="" className="w-[120px] h-[32px]" />

      <p className="text-[14px] leading-[120%]">
        © 2026 ANNA SKY LIVING. Todos los derechos reservados.
      </p>
    </div>
  );
}
