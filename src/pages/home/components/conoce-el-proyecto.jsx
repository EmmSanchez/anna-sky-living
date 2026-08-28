import conoceImage from "../../../assets/images/conoce-proyecto.jpg";

// icons
import ubicacionIcon from "../../../assets/icons/pin.svg";
import disenoIcon from "../../../assets/icons/diseno.svg";
import plusvaliaIcon from "../../../assets/icons/plusvalia.svg";

import descargar from "../../../assets/icons/descargar.svg";

const caracteristicas = [
  {
    label: "Ubicación",
    description:
      "En el corazón  de una zona estratégica, cerca de todo lo que necesitas.",
    icon: ubicacionIcon,
  },
  {
    label: "Diseño",
    description:
      "Arquitectura contemporánea con acabados de lujo, diseñada por Luis Azcuñaga Arquitectos.",
    icon: disenoIcon,
  },
  {
    label: "Plusvalía",
    description:
      "Inversión inteligente en un proyecto con alto potencial de crecimiento.",
    icon: plusvaliaIcon,
  },
];

export default function ConoceElProyecto() {
  return (
    <section
      id="conoce-proyecto"
      className="flex justify-center items-center w-full bg-blanco"
    >
      <div className="flex flex w-full max-w-[1280px] justify-center items-center py-[60px] gap-[40px]">
        {/* Left panel */}
        <div className="flex flex-col w-[620px] gap-[15px]">
          <div className="flex flex-col gap-[15px]">
            <h2 className="text-[35px] text-negro font-bangla uppercase leading-[120%] tracking-wide">
              Conoce el proyecto
            </h2>
            <p className="text-[21px] font-light leading-[120%] text-azul-intenso">
              <span className="font-bold">ANNA SKY LIVING</span> representa una
              nueva forma de vivir la ciudad.
              <br />
              Un proyecto que combina diseño, funcionalidad y experiencias en un
              entorno pensado para elevar la vida cotidiana. Su arquitectura
              contemporánea desarrollada por el despacho de arquitectos Luis
              Azcuñaga, y sus espacios cuidadosamente planeados crean un
              equilibrio entre privacidad, bienestar y convivencia.
              <br />
              <br />
              Más que un conjunto residencial, es una comunidad donde cada
              detalle ha sido concebido para ofrecer comodidad y valor a largo
              plazo.
              <br />
              Las amenidades, las áreas de encuentro y los espacios de
              recreación complementan una propuesta que responde a las
              necesidades de un estilo de vida moderno y dinámico.
            </p>
          </div>

          {/* caracterisitcas */}
          <div className="flex">
            {caracteristicas.map((caracteristica, index) => {
              return (
                <div
                  key={index}
                  className={`flex flex-col justify-center items-center w-[207px] py-[18px] px-[15px] gap-[15px] ${index === 1 ? "border-none" : "border-x-2 border-amarillo"}`}
                >
                  <img src={caracteristica.icon} alt="" />
                  <h4 className="text-[21px] text-negro font-bold uppercase leading-none">
                    {caracteristica.label}
                  </h4>
                  <p className="text-[16px] text-center text-negro font-light leading-[120%]">
                    {caracteristica.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* botón */}
          <button className="w-fit flex items-center px-[26px] py-[16px] gap-[10px] rounded-[5px] text-[16px] font-bold uppercase tracking-wider bg-naranja hover:bg-gris active:bg-azul hover:cursor-pointer">
            <img
              src={descargar}
              alt="Ícono de descargar"
              className="h-[16px]"
            />
            Brochure Comercial
          </button>
        </div>
        {/* Right panel */}
        <div className="relative w-[555px] h-[745px]">
          <img
            src={conoceImage}
            alt="Anna Sky Living"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
