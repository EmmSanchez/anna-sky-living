import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import chevronIcon from "../../../../assets/icons/arrow.svg";

export function VistasNivel({ nivel, onVolver }) {
  const [activa, setActiva] = useState(0);
  const total = nivel.imagenes.length;
  const ir = (dir) => setActiva((i) => (i + dir + total) % total);

  return (
    <div className="flex flex-col gap-[10px] w-full">
      <h2 className="font-bangla font-light header-3 tracking-wide leading-none text-blanco">
        VISTAS 360°
      </h2>
      <h3 className="font-bangla header-2 leading-tight text-naranja">
        {nivel.titulo}
      </h3>

      {/* Imagen principal con crossfade al cambiar */}
      <div className="self-center relative w-full h-[408px] overflow-hidden border-2 border-naranja">
        <AnimatePresence initial={false}>
          <motion.img
            key={activa}
            src={nivel.imagenes[activa]}
            alt={`Vista ${activa + 1} del ${nivel.titulo}`}
            draggable={false}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 size-full object-cover"
          />
        </AnimatePresence>
      </div>

      {/* Miniaturas + flechas */}
      <div className="flex items-center gap-[12px]">
        <button
          type="button"
          onClick={() => ir(-1)}
          aria-label="Imagen anterior"
          className="flex justify-center items-center w-[24px] p-[6px] bg-naranja rounded-[5.7px]"
        >
          <img
            src={chevronIcon}
            alt="Ícono siguiente"
            className="w-full rotate-180"
          />
        </button>

        <ul className="flex flex-1 gap-[12px]">
          {nivel.imagenes.map((src, i) => (
            <li key={i} className="flex-1">
              <button
                type="button"
                onClick={() => setActiva(i)}
                aria-label={`Ver imagen ${i + 1}`}
                aria-current={i === activa}
                className={`block w-full aspect-square overflow-hidden border-2 cursor-pointer transition-opacity ${
                  i === activa
                    ? "border-naranja"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <img
                  src={src}
                  alt=""
                  draggable={false}
                  className="size-full object-cover"
                />
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => ir(1)}
          aria-label="Imagen siguiente"
          className="flex justify-center items-center w-[24px] p-[6px] bg-naranja rounded-[5.7px]"
        >
          <img src={chevronIcon} alt="Ícono siguiente" className="w-full" />
        </button>
      </div>

      <button
        type="button"
        onClick={onVolver}
        className="flex items-center w-fit px-[20px] py-[15px] gap-[10px] rounded-[10px] button-big font-bold bg-naranja text-blanco uppercase cursor-pointer"
      >
        <img
          src={chevronIcon}
          alt="Ícono regresar"
          className="rotate-180 h-[16px] w-fit"
        />
        <span>Volver</span>
      </button>
    </div>
  );
}
