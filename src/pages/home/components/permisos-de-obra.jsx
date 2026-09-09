import edificioIcon from "../../../assets/icons/edificio.svg";
import insigniaIcon from "../../../assets/icons/insignia.svg";
import permisoIcon from "../../../assets/icons/permiso.svg";

const datos = [
  {
    id: "permiso-construccion",
    title: "Permiso de construcción",
    icon: permisoIcon,
  },
  {
    id: "factibilidad",
    title: "Factibilidad de servicios",
    icon: insigniaIcon,
  },
  {
    id: "credito",
    title: "Crédito\n Puente",
    icon: edificioIcon,
  },
];

export default function PermisosDeObra() {
  return (
    <section className="flex flex-col-reverse min-[1200px]:flex-row self-center justify-center items-center w-full max-w-[1280px] px-[44px] md:px-[50px] xl:px-[60px] pt-[60px] pb-[30px] gap-[40px] min-[1200px]:gap-[33px]">
      {/* Left side */}
      <div className="flex flex-col max-[720px]:items-center max-[720px]:w-full min-[720px]:flex-row">
        {datos.map((dato) => {
          return (
            <div
              key={dato.id}
              className={`flex flex-col justify-center items-center text-center w-full max-w-[287px] h-[125px] min-[720px]:w-[209px] min-[720px]:h-[209px] py-[68px] px-[15px] gap-[15px] border-x-2 border-amarillo ${dato.id === "factibilidad" ? "min-[720px]:border-none" : ""}`}
            >
              <img src={dato.icon} alt={`Ícono de ${dato.description}`} />
              <p className="paragraph-caps font-semibold uppercase min-[720px]:whitespace-pre-line">
                {dato.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Right side */}
      <div className="flex flex-col gap-[15px] min-[1200px]:gap-[30px]">
        <h2 className="header-2 text-center min-[1200px]:text-right font-bangla leading-none uppercase">
          Permisos de obra
        </h2>
        <p className="w-full max-w-[700px] paragraph text-left min-[1200px]:text-right font-extralight leading-[120%]">
          <b className="font-bold uppercase">ANNA Sky Living</b> cuenta con
          todos los permisos, licencias y un{" "}
          <b className="font-bold uppercase">Crédito Puente</b> vigente, un
          respaldo financiero que garantiza la continuidad de la construcción y
          refleja la solidez del proyecto.
          <br />
          <br />
          Esto brinda mayor certeza a quienes buscan invertir en un desarrollo
          con bases financieras sanas y un avance de obra comprobable.
        </p>
      </div>
    </section>
  );
}
