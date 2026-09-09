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
      className="flex flex-col min-[1200px]:flex-row self-center justify-center items-center w-full max-w-[1280px] px-[44px] md:px-[50px] xl:px-[60px] pt-[60px] pb-[30px] gap-[40px] lg:gap-[33px]"
    >
      {/* Left side */}
      <div className="flex flex-col items-center min-[1200px]:items-start gap-[30px]">
        <img
          src={logoTrecasa}
          alt="Logo Grupo Trecasa"
          className="w-[338px] h-[73px]"
        />

        <p className="w-full max-w-[700px] paragraph text-blanco font-extralight leading-[120%]">
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
          className="group flex items-center w-fit px-[36px] py-[16px] gap-[10px] rounded-[10px] bg-naranja hover:bg-gris hover:text-blanco active:bg-azul active:text-blanco drop-shadow-2xl hover:cursor-pointer"
        >
          <img
            src={clickIcon}
            alt="Ícono de click"
            className="w-[11.59px] h-[16px]"
          />
          <span className="button-big text-center text-blanco font-bold uppercase tracking-wider">
            Ver página web
          </span>
        </a>
      </div>

      {/* Right side */}
      <div className="flex flex-col max-[720px]:items-center max-[720px]:w-full min-[720px]:flex-row">
        {datos.map((dato) => {
          return (
            <div
              key={dato.id}
              className={`flex flex-col justify-center items-center text-center w-full max-w-[287px] h-[125px] min-[720px]:w-[209px] min-[720px]:h-[180px] py-[68px] px-[15px] gap-[10px] min-[720px]:gap-[15px] border-x-2 border-amarillo ${dato.id === "experiencia" ? "min-[720px]:border-none" : ""}`}
            >
              <img src={dato.icon} alt={`Ícono de ${dato.description}`} />
              <p className="paragraph-caps font-bold uppercase">{dato.title}</p>
              <p className="paragraph-small font-light">{dato.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
