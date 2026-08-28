import annaLogo from "../../../assets/logos/anna-sky-living-yellow.svg";

import linkedin from "../../../assets/icons/social/linkedin.svg";
import linkedinBlue from "../../../assets/icons/social/linkedin-blue.svg";
import whatsapp from "../../../assets/icons/social/whatsapp.svg";
import whatsappBlue from "../../../assets/icons/social/whatsapp-blue.svg";
import facebook from "../../../assets/icons/social/facebook.svg";
import facebookBlue from "../../../assets/icons/social/facebook-blue.svg";
import instagram from "../../../assets/icons/social/instagram.svg";
import instagramBlue from "../../../assets/icons/social/instagram-blue.svg";

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
    iconActive: linkedinBlue,
    href: "https://www.linkedin.com/showcase/anna-sky-living/home/",
  },
  {
    id: "whatsapp",
    icon: whatsapp,
    iconActive: whatsappBlue,
    href: "https://wa.me/528134060015",
  },
  {
    id: "facebook",
    icon: facebook,
    iconActive: facebookBlue,
    href: "https://www.facebook.com/annaskyliving",
  },
  {
    id: "instagram",
    icon: instagram,
    iconActive: instagramBlue,
    href: "https://www.instagram.com/annaskyliving/",
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
              <a
                href={`#${button.id}`}
                key={button.id}
                className="text-[16px] font-bold uppercase p-[16px]"
              >
                {button.label}
              </a>
            );
          })}
        </div>

        {/* Social */}
        <div className="self-center flex flex-wrap justify-between items-center w-full max-w-[306px]">
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
      </div>

      <img src={desarrolladoXperience} alt="" className="w-[120px] h-[32px]" />

      <p className="text-[14px] leading-[120%]">
        © 2026 ANNA SKY LIVING. Todos los derechos reservados.
      </p>
    </div>
  );
}
