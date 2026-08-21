import annaWhiteLogo from "../../../assets/logos/anna-sky-living-white.svg";

const navbarButtons = [
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
  {
    id: "contacto",
    label: "Contacto",
  },
];

export default function Navbar() {
  return (
    <div className="relative z-10 flex justify-center items-center w-full bg-negro">
      <div className="flex w-full max-w-[1280px] justify-around items-center p-[20px]">
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
              className={`uppercase font-bold text-[16px] p-[16px] rounded-[5px] hover:cursor-pointer ${button.id === "contacto" && "bg-naranja"}`}
            >
              {button.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
