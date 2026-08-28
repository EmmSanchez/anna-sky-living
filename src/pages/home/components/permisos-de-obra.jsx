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
    title: "Crédito Puente",
    icon: edificioIcon,
  },
];

export default function PermisosDeObra() {
  return (
    <section className="flex self-center justify-center items-center w-full max-w-[1280px] px-[60px] pt-[60px] pb-[30px] gap-[33px]">
      {/* Left side */}
      <div className="flex">
        {datos.map((dato) => {
          return (
            <div
              key={dato.id}
              className={`flex flex-col justify-center items-center text-center w-[209px] h-[209px] py-[68px] px-[15px] gap-[15px] border-x-2 border-amarillo ${dato.id === "factibilidad" ? "border-none" : ""}`}
            >
              <img src={dato.icon} alt={`Ícono de ${dato.description}`} />
              <p className="text-[21px] font-semibold uppercase leading-[110%]">
                {dato.title}
              </p>
            </div>
          );
        })}
      </div>

      {/* Right side */}
      <div className="flex flex-col gap-[30px]">
        <h2 className="text-[35px] text-right font-bangla leading-none uppercase">
          Permisos de obra
        </h2>
        <p className="w-full max-w-[500px] text-[21px] text-right font-extralight leading-[120%]">
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
