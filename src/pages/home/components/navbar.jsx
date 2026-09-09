import { useState } from "react";
import { socials, whatsappInfo } from "../../../data/social";

// Logo & icons
import annaWhiteLogo from "../../../assets/logos/anna-sky-living-white.svg";
import menuIcon from "../../../assets/icons/menu.svg";
import closeIcon from "../../../assets/icons/closeIcon.svg";
import nosotrosIcon from "../../../assets/icons/menu/nosotros.svg";
import conoceIcon from "../../../assets/icons/menu/conoce.svg";
import amenidadesIcon from "../../../assets/icons/menu/amenidades.svg";
import modelosIcon from "../../../assets/icons/menu/modelos.svg";
import avanceIcon from "../../../assets/icons/menu/avance.svg";
import contactoIcon from "../../../assets/icons/menu/contacto.svg";

import facebookIcon from "../../../assets/icons/menu/facebook-white.svg";
import instagramIcon from "../../../assets/icons/menu/instagram-white.svg";
import { useEffect } from "react";

const navbarButtons = [
  {
    id: "nosotros",
    label: "Nosotros",
    icon: nosotrosIcon,
  },
  {
    id: "conoce-proyecto",
    label: "Conoce el proyecto",
    icon: conoceIcon,
  },
  {
    id: "amenidades",
    label: "Amenidades",
    icon: amenidadesIcon,
  },
  {
    id: "modelos",
    label: "Modelos",
    icon: modelosIcon,
  },
  {
    id: "avance-de-obra",
    label: "Avance de obra",
    icon: avanceIcon,
  },
  {
    id: "contacto",
    label: "Contacto",
    icon: contactoIcon,
  },
];

const socialButtons = [
  {
    ...socials[0],
    icon: facebookIcon,
  },
  {
    ...socials[1],
    icon: instagramIcon,
  },
  {
    ...whatsappInfo,
  },
];

export default function Navbar() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) {
        setIsNavbarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`relative z-10 flex justify-center items-center w-full transition-colors ease-out ${isNavbarOpen ? "bg-azul" : "bg-negro"}`}
    >
      {/* Menu resposinve */}
      <div
        className={`relative flex z-100 w-full max-w-[1280px] justify-between min-[820px]:justify-around items-center p-[20px] ${isNavbarOpen ? "hidden" : ""}`}
      >
        {/* Botón Logo */}
        <a
          href="#hero"
          className="relative w-[94px] h-[31px] hover:cursor-pointer"
        >
          <img
            src={annaWhiteLogo}
            alt="Logo Anna Sky Living"
            className="absolute inset-0 w-full h-full object-contain"
          />
        </a>

        {navbarButtons.map((button) => {
          return (
            <a
              key={button.id}
              href={`#${button.id}`}
              className={`max-[820px]:hidden flex uppercase font-bold button-text text-center md:px-[10px] md:py-[16px] xl:p-[16px] rounded-[5px] hover:cursor-pointer hover:bg-gris hover:text-blanco active:bg-blanco active:text-negro ${button.id === "contacto" && "bg-naranja"}`}
            >
              {button.label}
            </a>
          );
        })}

        {/* Menu Icon */}
        <button
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          className={`flex min-[820px]:hidden size-[56px] justify-center items-center rounded-[10px] p-[10px] transition-colors ${isNavbarOpen ? "bg-blanco" : "bg-naranja"}`}
        >
          <img src={isNavbarOpen ? closeIcon : menuIcon} alt="Ícono de Menu" />
        </button>
      </div>

      {/* Menu mobile */}
      {isNavbarOpen && (
        <div className="absolute top-0 left-0 flex w-full h-svh bg-black min-[820px]:hidden">
          {/* Sidebar decoracion */}
          <div className="shrink-0 h-full w-[99px] bg-[#264A69]" />

          {/* Content */}
          <div className="flex flex-col w-full p-[20px] bg-azul">
            {/* Navbar */}
            <div className="flex w-full items-center justify-between">
              {/* Botón Logo */}
              <a
                href="#hero"
                className="relative w-[94px] h-[31px] hover:cursor-pointer"
              >
                <img
                  src={annaWhiteLogo}
                  alt="Logo Anna Sky Living"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </a>

              {/* Close button */}
              <button
                onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                className={`flex min-[820px]:hidden size-[56px] justify-center items-center rounded-[10px] p-[10px] transition-colors shadow-2xl shadow-black ${isNavbarOpen ? "bg-blanco" : "bg-naranja"}`}
              >
                <img
                  src={isNavbarOpen ? closeIcon : menuIcon}
                  alt="Ícono de Menu"
                />
              </button>
            </div>

            {/* Botonees, redes y caption */}
            <div className="flex flex-col py-[50px] gap-[35px]">
              {/* Botones */}
              <div className="flex flex-col w-full grow max-h-[510px] gap-[35px]">
                <div className="flex flex-col gap-[35px]">
                  {navbarButtons.map((button, index) => {
                    return (
                      <button
                        key={index}
                        className="group w-fit flex items-center font-bold text-left gap-[10px] p-[16px] rounded-[10px] transition-colors transition-shadow hover:bg-gris hover:cursor-pointer hover:shadow-[0px_13px_6px_-4px_rgba(0,0,0,0.2)] hover:shadow-black/20 active:bg-blanco"
                      >
                        <img
                          src={button.icon}
                          alt={`Ícono de ${button.id}`}
                          className="h-[16px] group-active:brightness-0 active:invert-100"
                        />
                        <span className="button-text text-blanco uppercase group-hover:opacity-80 group-active:text-azul">
                          {button.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Social icons */}
              <div className="flex flex w-full max-w-[250px] justify-between p-[20px]">
                {socialButtons.map((button, index) => {
                  return (
                    <a key={index}>
                      <img src={button.icon} alt="Ícono red social" />
                    </a>
                  );
                })}
              </div>

              <p className="caption w-full max-w-[250px]">
                © 2026 ANNA SKY LIVING. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
