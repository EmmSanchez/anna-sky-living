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
import slideFinalImage from "../../../assets/images/avances/slide-final.jpg";

// videos
import video1 from "../../../../public/avance-de-obra/30 SEPTIEMBRE 2025.mp4";
import video2 from "../../../../public/avance-de-obra/23 OCT 25 AVANCE.mp4";
import video3 from "../../../../public/avance-de-obra/4 NOVIEMBRE 2025 AVANCE.mp4";
import video4 from "../../../../public/avance-de-obra/13 NOVIEMBRE 25 AVANCE.mp4";
import video5 from "../../../../public/avance-de-obra/16 DE DICIEMBRE 25 AVANCE.mp4";
import video6 from "../../../../public/avance-de-obra/19 DIC 25 AVANCE.mp4";
import video7 from "../../../../public/avance-de-obra/22 DICIEMBRE 25 AVANCE.mp4";
import video8 from "../../../../public/avance-de-obra/12 ENERO 26.mp4";
import video9 from "../../../../public/avance-de-obra/17 FEB 2026.mp4";
import video10 from "../../../../public/avance-de-obra/5 MARZO.mp4";
import video11 from "../../../../public/avance-de-obra/10 DE MARZO 26.mp4";
import video12 from "../../../../public/avance-de-obra/12 DE MARZO 26.mp4";
import video13 from "../../../../public/avance-de-obra/7 MAYO 2026.mp4";
import video14 from "../../../../public/avance-de-obra/19 MAYO 26.mp4";
import video15 from "../../../../public/avance-de-obra/1 DE JUNIO.mp4";
import video16 from "../../../../public/avance-de-obra/11 DE JUNIO 26.mp4";
import video17 from "../../../../public/avance-de-obra/29 DE JUNIO 2026.mp4";

// slide final content
import annaLogoYellow from "../../../assets/logos/anna-sky-living-yellow.svg";
import timeline from "../../../assets/images/avances/slide-final-timeline.svg";

const slidesData = [
  {
    date: "30 SEPTIEMBRE 2025",
    description: "Colado nivel 11",
    image: avance1,
    video: video1,
  },
  {
    date: "23 OCTUBRE 2025",
    description: "Torre 2, nivel 7",
    image: avance2,
    video: video2,
  },
  {
    date: "4 NOVIEMBRE 2025",
    description: "Colado de nivel 14\ntorre 1",
    image: avance3,
    video: video3,
  },
  {
    date: "13 NOVIEMBRE 2025",
    description: "Losa catorce de la\ntorre uno",
    image: avance4,
    video: video4,
  },
  {
    date: "16 DICIEMBRE 2025",
    description: "Colado nivel 8, torre\n2",
    image: avance5,
    video: video5,
  },
  {
    date: "19 DICIEMBRE 2025",
    description: "Nivel 16, torre 1\nNivel 8 torre 2",
    image: avance6,
    video: video6,
  },
  {
    date: "22 DICIEMBRE 2025",
    description: "Colado de nivel 16,\ntorre 1",
    image: avance7,
    video: video7,
  },
  {
    date: "12 ENERO 2026",
    description: "Colado de nivel 17\ntorre 1",
    image: avance8,
    video: video8,
  },
  {
    date: "17 FEBRERO 2026",
    description: "Colado de nivel 19\ndptos. torre 2",
    image: avance9,
    video: video9,
  },
  {
    date: "5 MARZO 2026",
    description: "Colado de 10 niveles\nde departamentos",
    image: avance10,
    video: video10,
  },
  {
    date: "12 MARZO 2026",
    description: "Colado nivel 20",
    image: avance11,
    video: video11,
  },
  {
    date: "12 MARZO 2026",
    description: "Nivel 22, torre 1",
    image: avance12,
    video: video12,
  },
  {
    date: "7 MAYO 2026",
    description: "Nivel 22, torre 1",
    image: avance13,
    video: video13,
  },
  {
    date: "19 MAYO 2026",
    description: "Avance de obra nivel\n12, torre 2",
    image: avance14,
    video: video14,
  },
  {
    date: "1 JUNIO 2026",
    description: "Avance de obra",
    image: avance15,
    video: video15,
  },
  {
    date: "11 JUNIO 2026",
    description: "Nivel 24, torre 1",
    image: avance16,
    video: video16,
  },
  {
    date: "29 JUNIO 2026",
    description: "Avance de obra nivel 12, torre 2",
    image: avance17,
    video: video17,
  },
  {
    date: "AGOSTO 2026",
    description: "Avance de obra nivel 12, torre 2",
    image: avance17,
    video: video17,
  },
  {
    date: "SEPTIEMBRE 2026",
    description: "Avance de obra nivel 12, torre 2",
    image: avance17,
    video: video17,
  },
];

const slideFinal = (
  <div className="group relative flex shrink-0 flex-col w-[260px] h-[520px] p-[20px] overflow-hidden bg-azul-intenso hover:cursor-pointer transition-all duration-500 ease-out">
    {/* Overlay */}
    <div className="absolute z-10 inset-0 w-full h-full bg-linear-to-b from-azul-intenso/60 to-azul-intenso" />

    {/* Bg image */}
    <img
      src={slideFinalImage}
      alt="Continuamos Avanzando..."
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Content */}
    <div className="relative z-10 flex flex-col w-full h-full justify-center items-center gap-[15px]">
      <img
        src={annaLogoYellow}
        alt="Logo Anna Sky Living"
        className="w-full max-w-[200px]"
      />

      <p className="paragraph-icon text-center font-bold">
        Continuamos <br /> avanzando...
      </p>

      <img src={timeline} alt="Línea de tiempo" />
    </div>
  </div>
);

export default function AvanceObra() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleSlideChange = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  const amenidades = slidesData.map((slide, index) => {
    const isActive = index === currentSlide;
    const isHovered = index === hoveredIndex;
    const showVideo = isActive || isHovered;

    return (
      <div
        key={index}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        className="group relative flex shrink-0 flex-col w-[260px] h-[520px] p-[20px] overflow-hidden bg-azul-intenso hover:cursor-pointer transition-all duration-500 ease-out"
      >
        <div className="relative flex flex-col w-full h-full justify-center gap-[15px]">
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
              className={`absolute inset-0 w-full h-full object-cover object-left transition-opacity duration-300 ${
                showVideo ? "opacity-0" : "opacity-100"
              }`}
            />

            {showVideo && (
              <video
                src={slide.video}
                poster={slide.image}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    );
  });

  const activeGroup = Math.floor(currentSlide / 4);

  const amenidadesFinal = [...amenidades, slideFinal];

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
          slides={amenidadesFinal}
          variant="card"
          autoScrollOptions={{ stopOnMouseEnter: true }}
          onSlideChange={handleSlideChange}
        />
      </div>
    </section>
  );
}
