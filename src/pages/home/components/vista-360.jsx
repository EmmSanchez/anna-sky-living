import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

import towerImage from "../../../assets/images/temporal/vista-360.jpg";
import imagenIcon from "../../../assets/icons/vista-360/imagen.svg";
import clickIcon from "../../../assets/icons/vista-360/click.svg";

// vistas
import vista1 from "../../../assets/images/temporal/vistas/1-vista-nivel-16-torre1.jpg";
import vista2 from "../../../assets/images/temporal/vistas/2-vista-nivel-16-torre1.jpg";
import vista3 from "../../../assets/images/temporal/vistas/3-vista-nivel-16-torre1.jpg";
import vista4 from "../../../assets/images/temporal/vistas/4-vista-nivel-16-torre1.jpg";
import { VistasNivel } from "./vista-360/VistasNivel";

const IMAGENES_BASE = [vista1, vista2, vista3, vista4];

const nivelesInfo = Object.fromEntries(
  Array.from({ length: 18 }, (_, i) => {
    const id = i + 1;
    return [
      id,
      { id, torre: 1, titulo: `NIVEL ${id}, TORRE 1`, imagenes: IMAGENES_BASE },
    ];
  }),
);

// Ajusta estos valores a tu render de la torre
const IMG_W = 631;
const IMG_H = 810;
const TOWER_X = 175; // x donde empieza la torre en la imagen
const TOWER_W = 310; // ancho de la torre
const FIRST_Y = 21; // y del primer nivel
const heights = [
  41, 41, 44, 44, 39, 43, 38, 41, 39, 46, 33, 40, 39, 48, 37, 43, 41, 38,
];

const levels = heights.reduce((acc, h, i) => {
  const y = i === 0 ? FIRST_Y : acc[i - 1].y + acc[i - 1].h;
  acc.push({
    id: heights.length - i, // el de arriba es el último nivel, el de abajo es el 1
    y,
    h,
  });
  return acc;
}, []);

const first = levels[0];
const last = levels[levels.length - 1];
const span = last.y - first.y;

const sweep = {
  y: levels.map((l) => l.y),
  height: levels.map((l) => l.h),
};

const AUTOPLAY_MS = 1000; // tiempo entre niveles
const SWEEP_S = 28; // segundos que tarda en recorrer toda la torre

export default function Vista360({ onSelectLevel }) {
  const [selected, setSelected] = useState(1); // empieza en el primer nivel
  const [autoplay, setAutoplay] = useState(true);
  const [openLevel, setOpenLevel] = useState(null);

  const handleSelect = (id) => {
    setAutoplay(false);
    setSelected(id);
    setOpenLevel(id);
    onSelectLevel?.(id);
  };

  const handleVolver = () => {
    setOpenLevel(null);
    setAutoplay(true); // retoma el recorrido automático
  };

  const times = levels.map((l) => (l.y - first.y) / span);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setSelected((prev) => (prev >= levels.length ? 1 : prev + 1));
    }, AUTOPLAY_MS);

    return () => clearInterval(timer);
  }, [autoplay]);

  const current = levels.find((l) => l.id === selected);

  return (
    <div className="self-center flex flex-col xl:flex-row w-full h-full min-h-svh">
      {/* Columna izquierda: texto */}
      <div className="w-full flex items-center justify-center xl:justify-start xl:pl-[60px] pt-[40px]">
        <AnimatePresence mode="wait">
          {openLevel === null ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="xl:mx-auto flex flex-col gap-[20px] pb-[40px]"
            >
              <h2 className="font-bangla font-light header-3 tracking-wide leading-none text-blanco">
                VISTAS 360°
              </h2>

              <h3 className="font-bangla header-2 leading-tight text-blanco/90">
                EXPLORA LAS VISTAS
                <br />
                DESDE CADA NIVEL
              </h3>

              <p className="paragraph leading-snug font-extralight text-blanco max-w-[24ch]">
                Selecciona un nivel en la torre para conocer sus vistas 360°
              </p>

              <ul className="relative flex flex-col gap-[27px]">
                {/* línea conectora entre iconos */}
                <span
                  aria-hidden
                  className="absolute left-[25px] top-[51px] h-[28px] w-px bg-amarillo"
                />

                <li className="flex items-center gap-4">
                  <span className="grid place-items-center size-[51px] border border-amarillo text-amarillo">
                    <img
                      src={clickIcon}
                      alt="Ícono de click"
                      className="w-auto h-[35px]"
                    />
                  </span>
                  <span className="paragraph font-semibold tracking-wide text-blanco">
                    ELIGE UN NIVEL
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="grid place-items-center size-[51px] border border-amarillo text-amarillo">
                    <img
                      src={imagenIcon}
                      alt="Ícono de imagen"
                      className="w-[35px] h-auto"
                    />
                  </span>
                  <span className="paragraph font-semibold tracking-wide text-blanco">
                    EXPLORA SUS VISTAS
                  </span>
                </li>
              </ul>
            </motion.div>
          ) : (
            <motion.div
              key={`nivel-${openLevel}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:mx-auto min-h-[480px] xl:min-h-svh flex items-center min-[592px]:pb-[40px] xl:pr-[40px]"
            >
              <VistasNivel
                nivel={nivelesInfo[openLevel]}
                onVolver={handleVolver}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Columna derecha: torre */}
      <div className="relative w-full max-[680px]:max-w-[687px] max-xl:w-full mx-auto aspect-[631/810] xl:mx-0 xl:aspect-auto xl:h-auto overflow-hidden">
        <svg
          viewBox={`0 0 ${IMG_W} ${IMG_H}`}
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 size-full"
          role="group"
          aria-label="Torre con vistas 360° desde cada nivel"
        >
          <image
            href={towerImage}
            width={IMG_W}
            height={IMG_H}
            preserveAspectRatio="xMidYMid slice"
            draggable={false}
          />

          {/* Rectángulo naranja único: es el que se desplaza */}
          {(autoplay || current) && (
            <motion.rect
              x={TOWER_X}
              y={0}
              width={TOWER_W}
              initial={{ y: first.y, height: first.h }}
              animate={autoplay ? sweep : { y: current.y, height: current.h }}
              transition={
                autoplay
                  ? {
                      duration: SWEEP_S,
                      ease: "linear",
                      times,
                      repeat: Infinity,
                      repeatType: "loop", // al llegar abajo vuelve arriba
                    }
                  : { type: "spring", bounce: 0, duration: 0.5 }
              }
              vectorEffect="non-scaling-stroke"
              strokeWidth={2}
              className="pointer-events-none relative fill-naranja/45 stroke-naranja"
            />
          )}

          {/* Zonas clicables + etiqueta, una por nivel */}
          {levels.map(({ id, y, h }) => (
            <g key={id} className="group">
              <rect
                x={TOWER_X}
                y={y}
                width={TOWER_W}
                height={h}
                role="button"
                tabIndex={0}
                aria-label={`Nivel ${id}`}
                aria-pressed={selected === id}
                vectorEffect="non-scaling-stroke"
                strokeWidth={2}
                onClick={() => handleSelect(id)}
                onKeyDown={(e) =>
                  (e.key === "Enter" || e.key === " ") && handleSelect(id)
                }
                className="cursor-pointer outline-none fill-transparent stroke-transparent transition-colors duration-200 hover:fill-naranja/30 focus-visible:stroke-blanco"
              />

              <text
                x={TOWER_X - 16} // a la derecha de la torre, con 16px de separación
                y={y + h / 2} // centrado verticalmente en el nivel
                dominantBaseline="middle"
                textAnchor="end"
                fontSize={12} // en unidades del viewBox
                aria-hidden
                className={`hidden group-hover:block pointer-events-none select-none transition-colors duration-200 font-bold fill-naranja `}
              >
                NIV. {id}
              </text>
            </g>
          ))}
        </svg>

        {/* linear gradient */}
        <div className="pointer-events-none absolute w-full h-full inset-0 bg-linear-to-r from-azul via-15% via-azul/10 to-transparent"></div>

        <p className="absolute bottom-3 left-1/2 -translate-x-1/2 caption text-center font-light text-blanco">
          Imágenes con fines ilustrativos*
        </p>
      </div>
    </div>
  );
}
