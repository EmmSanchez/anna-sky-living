import { useState, useCallback } from "react";
import { Carousel } from "../../../components/embla-carousel/carousel";
import { motion } from "motion/react";

// images
import avance1 from "../../../assets/images/avances/avance-1.jpg";
import avance2 from "../../../assets/images/avances/avance-2.jpg";
import avance3 from "../../../assets/images/avances/avance-3.jpg";
import avance4 from "../../../assets/images/avances/avance-4.jpg";
import avance5 from "../../../assets/images/avances/avance-5.jpg";
import avance6 from "../../../assets/images/avances/avance-6.jpg";
import avance7 from "../../../assets/images/avances/avance-7.jpg";
import avance8 from "../../../assets/images/avances/avance-8.jpg";
import avance9 from "../../../assets/images/avances/avance-9.jpg";
import avance10 from "../../../assets/images/avances/avance-10.jpg";
import avance11 from "../../../assets/images/avances/avance-11.jpg";
import avance12 from "../../../assets/images/avances/avance-12.jpg";
import avance13 from "../../../assets/images/avances/avance-13.jpg";
import avance14 from "../../../assets/images/avances/avance-14.jpg";
import avance15 from "../../../assets/images/avances/avance-15.jpg";
import avance16 from "../../../assets/images/avances/avance-16.jpg";
import avance17 from "../../../assets/images/avances/avance-17.jpg";

const slidesData = [
  {
    date: "30 SEPTIEMBRE 2025",
    description: "Colado nivel 11",
    image: avance1,
  },
  {
    date: "23 OCTUBRE 2025",
    description: "Torre 2, nivel 7",
    image: avance2,
  },
  {
    date: "4 NOVIEMBRE 2025",
    description: "Colado de nivel 14\ntorre 1",
    image: avance3,
  },
  {
    date: "13 NOVIEMBRE 2025",
    description: "Losa catorce de la\ntorre uno",
    image: avance4,
  },
  {
    date: "16 DICIEMBRE 2025",
    description: "Colado nivel 8, torre\n2",
    image: avance5,
  },
  {
    date: "19 DICIEMBRE 2025",
    description: "Nivel 16, torre 1\nNivel 8 torre 2",
    image: avance6,
  },
  {
    date: "22 DICIEMBRE 2025",
    description: "Colado de nivel 16,\ntorre 1",
    image: avance7,
  },
  {
    date: "12 ENERO 2026",
    description: "Colado de nivel 17\ntorre 1",
    image: avance8,
  },
  {
    date: "17 FEBRERO 2026",
    description: "Colado de nivel 19\ndptos. torre 2",
    image: avance9,
  },
  {
    date: "5 MARZO 2026",
    description: "Colado de 10 niveles\nde departamentos",
    image: avance10,
  },
  {
    date: "12 MARZO 2026",
    description: "Colado nivel 20",
    image: avance11,
  },
  {
    date: "12 MARZO 2026",
    description: "Nivel 22, torre 1",
    image: avance12,
  },
  {
    date: "7 MAYO 2026",
    description: "Nivel 22, torre 1",
    image: avance13,
  },
  {
    date: "19 MAYO 2026",
    description: "Avance de obra nivel\n12, torre 2",
    image: avance14,
  },
  {
    date: "1 JUNIO 2026",
    description: "Avance de obra",
    image: avance15,
  },
  {
    date: "11 JUNIO 2026",
    description: "Nivel 24, torre 1",
    image: avance16,
  },
  {
    date: "29 JUNIO 2026",
    description: "Avance de obra nivel 12, torre 2",
    image: avance17,
  },
];

export default function AvanceObra() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const amenidades = slidesData.map((slide) => {
    return (
      <div
        key={slide.id}
        className={`group relative flex shrink-0 flex-col w-[260px] h-[520px] p-[20px] overflow-hidden bg-azul-intenso hover:cursor-pointer transition-all duration-500 ease-out`}
      >
        {/* Text */}
        <div
          className={`relative flex flex-col w-full h-full justify-center gap-[15px]`}
        >
          <h4 className="text-[22px] font-bold tracking-tighter leading-[120%] text-blanco">
            {slide.date}
          </h4>
          <p className="h-[46px] text-[18px] text-blanco/80 font-light leading-[120%]">
            {slide.description}
          </p>

          <div className="relative grow w-full">
            <img
              src={slide.image}
              alt={`Imagen de avance fecha ${slide.date}`}
              className="absolute inset-0 w-full h-full object-cover object-left"
            />
          </div>
        </div>
      </div>
    );
  });

  const activeGroup = Math.floor(currentSlide / 4);

  return (
    <section
      id="avance-de-obra"
      className="flex flex-col self-center w-full max-w-[1280px] h-fit justify-center items-center px-[30px] pt-[60px] pb-[30px] gap-[30px]"
    >
      <div className="flex flex-col justify-center items-center gap-[15px]">
        <h2 className="text-[35px] font-bangla uppercase">Avance de obra</h2>
        <h3 className="text-[21px] text-center font-light leading-[130%]">
          Seguimos desarrollando cada detalle de{" "}
          <span className="font-bold">ANNA SKY LIVING</span> con altos
          estándares de calidad y un enfoque constante en brindar una
          experiencia residencial excepcional.
        </h3>
      </div>

      {/* progress bar */}
      <div className="flex w-full max-w-[1120px] h-[31px]">
        {slidesData.map((slide, index) => {
          if (index % 4 !== 0) return null;

          // progreso del segmento: 0 = no iniciado, 1 = completo
          const groupProgress = Math.min(
            Math.max((currentSlide - index) / 4, 0),
            1,
          );

          return (
            <div key={index} className="relative flex flex-1">
              {/* linea base (fondo gris) */}
              <div className="absolute z-0 w-full h-[2px] top-1/2 -translate-y-1/2 bg-gris" />

              {/* linea progresiva (amarilla) */}
              <motion.div
                className="absolute z-0 w-full h-[2px] top-1/2 -translate-y-1/2 bg-amarillo origin-left"
                initial={false}
                animate={{ scaleX: groupProgress }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />

              {/* Circulo */}
              <div
                className={`relative z-10 size-[31px] rounded-full border-2 border-amarillo transition-colors ${
                  index > activeGroup * 4 ? "bg-gris" : "bg-amarillo"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Carousel */}
      <div className="flex items-center w-[1120px] h-[520px] gap-[30px]">
        <Carousel
          slides={amenidades}
          variant="card"
          autoScrollOptions={{ stopOnMouseEnter: true }}
          onSlideChange={handleSlideChange}
        />
      </div>
    </section>
  );
}
