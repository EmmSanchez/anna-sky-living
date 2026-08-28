import logoTrecasa from "../../../assets/logos/grupo-trecasa.png";
import clickIcon from "../../../assets/icons/click.svg";
import cascoIcon from "../../../assets/icons/casco.svg";
import edificioIcon from "../../../assets/icons/edificio.svg";
import insigniaIcon from "../../../assets/icons/insignia.svg";

const datos = [
  {
    id: "desde-1992",
    title: "Desde 1992",
    description: "Desarrollando tus proyectos",
    icon: cascoIcon,
  },
  {
    id: "experiencia",
    title: "+30",
    description: "Años de experiencia",
    icon: edificioIcon,
  },
  {
    id: "compromiso",
    title: "100%",
    description: "Compromiso con la calidad",
    icon: insigniaIcon,
  },
];

export default function GrupoTrecasa() {
  return (
    <section
      id="nosotros"
      className="flex self-center justify-center items-center w-full max-w-[1280px] px-[60px] pt-[60px] pb-[30px] gap-[33px]"
    >
      {/* Left side */}
      <div className="flex flex-col gap-[30px]">
        <img
          src={logoTrecasa}
          alt="Logo Grupo Trecasa"
          className="w-[338px] h-[73px]"
        />

        <p className="w-full max-w-[500px] text-[21px] font-extralight leading-[120%]">
          Con más de tres décadas de experiencia,
          <br />
          <b className="font-bold">Grupo Trecasa</b> se ha consolidado como una
          desarrolladora comprometida con la calidad, la innovación y la
          creación de espacios que generan valor a largo plazo.
          <br />
          <br />
          Cada proyecto refleja una visión enfocada en construir comunidades,
          impulsar el crecimiento urbano y transformar el futuro de quienes las
          habitan.
        </p>

        <a
          href="https://grupotrecasa.com.mx"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-fit px-[36px] py-[16px] gap-[10px] rounded-[10px] bg-naranja"
        >
          <img
            src={clickIcon}
            alt="Ícono de click"
            className="w-[11.59px] h-[16px]"
          />
          <span className="text-[18px] font-bold uppercase tracking-wider">
            Ver página web
          </span>
        </a>
      </div>

      {/* Right side */}
      <div className="flex">
        {datos.map((dato) => {
          return (
            <div
              key={dato.id}
              className={`flex flex-col justify-center items-center text-center w-[209px] h-[180px] py-[68px] px-[15px] gap-[15px] border-x-2 border-amarillo ${dato.id === "experiencia" ? "border-none" : ""}`}
            >
              <img src={dato.icon} alt={`Ícono de ${dato.description}`} />
              <p className="text-[25px] font-bold">{dato.title}</p>
              <p className="text-[16px] font-light">{dato.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
