import { useSearchParams } from "react-router";

import tipoA from "../../../assets/images/tipologias/tipo-a.png";
import tipoB from "../../../assets/images/tipologias/tipo-b.png";
import tipoC from "../../../assets/images/tipologias/tipo-c.png";
import tipoD from "../../../assets/images/tipologias/tipo-d.png";

import imageIcon from "../../../assets/icons/imagen.svg";

const modelos = [
  {
    id: "tipo-a",
    label: "Modelo tipo a",
    image: tipoA,
  },
  {
    id: "tipo-b",
    label: "Modelo tipo b",
    image: tipoB,
  },
  {
    id: "tipo-c",
    label: "Modelo tipo c",
    image: tipoC,
  },
  {
    id: "tipo-d",
    label: "Modelo tipo d",
    image: tipoD,
  },
  {
    id: "tipo-e",
    label: "Modelo tipo e",
    image: tipoD,
  },
];

export default function Tipologias() {
  const [searchParams, setSearchParams] = useSearchParams();

  const modeloId = searchParams.get("modelo");
  const modeloSeleccionado = modelos.find((m) => m.id === modeloId) || null;

  const abrirModal = (modelo) => {
    setSearchParams({ modelo: modelo.id });
  };

  const cerrarModal = () => {
    searchParams.delete("modelo");
    setSearchParams(searchParams);
  };

  return (
    <section
      id="modelos"
      className="w-full flex flex-col justify-center items-center py-[60px] px-[10px] gap-[30px] bg-blanco"
    >
      <div className="flex flex-col justify-center items-center gap-[15px]">
        <h2 className="text-[35px] font-bangla text-negro uppercase tracking-wider">
          Tipologías
        </h2>
        <p className="text-[21px] text-center font-light text-negro">
          Cuatro modelos diseñados para diferentes estilos de visa, con
          <br />
          distribuciones funcionales y acabados de primera
        </p>
      </div>

      {/* Modelos */}
      <div className="flex w-full max-w-[1200px] flex-wrap justify-center gap-[20px]">
        {modelos.map((modelo) => {
          return (
            <div
              key={modelo.id}
              className="flex flex-col justify-between w-[300px] h-[495px] px-[24px] py-[30px] gap-[32px] border border-naranja rounded-[15px] shadow-md"
            >
              <img
                src={modelo.image}
                alt={`Imagen ${modelo.label}`}
                className="w-[255px] h-[303px]"
              />

              <div className="flex flex-col shrink-0 gap-[20px]">
                <h3 className="text-[30px] text-center font-bangla uppercase text-negro">
                  {modelo.label}
                </h3>
                <button
                  onClick={() => abrirModal(modelo)}
                  className="flex px-[36px] py-[16px] gap-[10px] justify-center items-center text-[18px] font-bold tracking-wider rounded-[10px] bg-naranja hover:bg-gris active:bg-azul hover:drop-shadow-xl active:drop-shadow-xl uppercase hover:cursor-pointer"
                >
                  <img
                    src={imageIcon}
                    alt="Ícono de imagen"
                    className="w-[18px]"
                  />
                  Ver modelo
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
