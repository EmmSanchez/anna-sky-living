import { useEffect } from "react";
import { useSearchParams } from "react-router";
import { NavIndicator } from "../../../../../components/nav-indicator/nav-indicator";
import { GalleryCarrousel } from "../../../../../components/embla-carousel/GalleyCarousel";

import closeIcon from "../../../../../assets/icons/close.svg";

/**
 * Modal universal para todas las fichas de modelo (tipo-a, tipo-b, ..., lock-off).
 * Recibe toda la data como props; no importa nada específico de un modelo.
 *
 * @param {Object} props
 * @param {string} props.titulo - Ej. "Tipo A / 81.77 M2"
 * @param {string} [props.subtitulo] - opcional, ej. lock-off tiene un párrafo descriptivo debajo del título
 * @param {string} props.imageRender - src de la imagen "render"
 * @param {string} props.imageFrame - src de la imagen "frame"
 * @param {{ id: string, label: string, icon: string }[]} props.descripcion
 * @param {{ id: string, label: string, icon: string }[]} [props.comoSeEntrega] - opcional (ej. lock-off puede no tenerlo)
 * @param {string[]} props.carouselImages - imágenes del carrusel inferior
 */
export function ModeloModal({
  titulo,
  subtitulo,
  imageRender,
  imageFrame,
  descripcion,
  comoSeEntrega,
  carouselImages,
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const cerrarModal = () => {
    searchParams.delete("modelo");
    setSearchParams(searchParams);
  };

  useEffect(() => {
    // Bloquea el scroll del body mientras el modal está abierto
    document.body.style.overflow = "hidden";

    // Restaura el scroll al cerrar el modal / desmontar el componente
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full h-full bg-azul overflow-y-auto">
      <div className="relative w-full flex flex-col items-center px-[44px] pt-[100px] pb-[60px] md:p-[60px] gap-[40px] xl:gap-[20px]">
        {/* Botón de cerrar */}
        <button
          onClick={cerrarModal}
          className="absolute flex size-[42px] xl:size-[56px] right-[20px] top-[20px] px-[8px] justify-center items-center rounded-[10px] bg-naranja hover:cursor-pointer"
        >
          <img
            src={closeIcon}
            alt="Ícono de cerrar"
            className="size-[34.5px]"
          />
        </button>

        <div className="text-center">
          <h2 className="header-3 font-bangla leading-none uppercase">
            {titulo}
          </h2>
          {subtitulo && <p className="paragraph text-blanco">{subtitulo}</p>}
        </div>

        {/* Imagenes */}
        <div className="flex flex-col xl:flex-row shrink-0 justify-between items-center xl:gap-[17px] w-full max-w-[1160px] xl:h-[573px]">
          <img
            src={imageRender}
            alt={`Render modelo ${titulo}`}
            className="flex shrink-0"
          />
          <img
            src={imageFrame}
            alt={`Frame modelo ${titulo}`}
            className="flex shrink-0 xl:h-[364px]"
          />
        </div>

        {/* Descripción */}
        <div className="flex flex-col xl:flex-row xl:justify-center xl:items-center w-full gap-[30px]">
          {/* Lista 1 */}
          <ModeloListaItems titulo="Descripción" items={descripcion} />

          {/* Lista 2 "Como se entrega" (opcional) */}
          {comoSeEntrega?.length > 0 && (
            <ModeloListaItems titulo="Como se entrega" items={comoSeEntrega} />
          )}
        </div>
      </div>

      {/* imagen */}
      <div className="relative w-full h-[800px]">
        {/* overlay */}
        <div className="absolute z-10 inset-0 w-full h-full bg-linear-to-b from-azul to-[37%] to-azul/0 pointer-events-none" />
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <GalleryCarrousel
            images={carouselImages}
            navIndicator={NavIndicator}
          />
        </div>
      </div>
    </div>
  );
}

/** Bloque reutilizable de lista con ícono + label (Descripción / Como se entrega) */
function ModeloListaItems({ titulo, items }) {
  return (
    <div className="flex flex-1 flex-col gap-[20px]">
      <h3 className="header-2 font-bangla uppercase">{titulo}</h3>

      <div className="flex flex-col gap-[20px]">
        {items.map((item) => (
          <div key={item.id} className="flex items-center gap-[20px]">
            <div className="flex shrink-0 justify-center items-center w-[66px] h-[50px] border border-naranja rounded-[4px]">
              <img src={item.icon} alt={item.label} className="size-[35px]" />
            </div>
            <span className="paragraph font-bold uppercase text-blanco">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
