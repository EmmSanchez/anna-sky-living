import { ExpandableCarousel } from "../../../components/embla-carousel/expandable-carousel";
import { motion } from "motion/react";

// icons
import albercaIcon from "../../../assets/icons/amenidades/alberca.svg";
import asadoresIcon from "../../../assets/icons/amenidades/asadores.svg";
import juegosIcon from "../../../assets/icons/amenidades/juegos.svg";
import gymIcon from "../../../assets/icons/amenidades/gym.svg";
import lobbyIcon from "../../../assets/icons/amenidades/lobby.svg";
import salaIcon from "../../../assets/icons/amenidades/sala-espera.svg";
import sportbarIcon from "../../../assets/icons/amenidades/sportbar.svg";
import barIcon from "../../../assets/icons/amenidades/bar.svg";
import teaIcon from "../../../assets/icons/amenidades/tea.svg";
import petIcon from "../../../assets/icons/amenidades/pet.svg";
import parqueIcon from "../../../assets/icons/amenidades/parque.svg";

// images
import albercaImage from "../../../assets/images/amenidades/alberca.webp";
import asadoresImage from "../../../assets/images/amenidades/asadores.webp";
import juegosImage from "../../../assets/images/amenidades/juegos.webp";
import gymImage from "../../../assets/images/amenidades/gym.webp";
import lobbyImage from "../../../assets/images/amenidades/lobby.webp";
import salaImage from "../../../assets/images/amenidades/sala.webp";
import sportbarImage from "../../../assets/images/amenidades/sportbar.webp";
import salaJuegosImage from "../../../assets/images/amenidades/sala-juegos.webp";
import teaImage from "../../../assets/images/amenidades/tearoom.webp";
import petImage from "../../../assets/images/amenidades/pet.webp";
import parqueImage from "../../../assets/images/amenidades/parque.webp";
import useUIStore from "../../../store/useUIStore";

const slidesData = [
  {
    id: "alberca",
    title: "Alberca",
    icon: albercaIcon,
    image: albercaImage,
  },
  {
    id: "asadores",
    title: "Asadores",
    icon: asadoresIcon,
    image: asadoresImage,
  },
  {
    id: "juegos",
    title: "Juegos",
    icon: juegosIcon,
    image: juegosImage,
  },
  {
    id: "gym",
    title: "Gym",
    icon: gymIcon,
    image: gymImage,
  },
  {
    id: "lobby",
    title: "Lobby",
    icon: lobbyIcon,
    image: lobbyImage,
  },
  {
    id: "sala-espera",
    title: "Sala de espera",
    icon: salaIcon,
    image: salaImage,
  },
  {
    id: "sport-bar",
    title: "Sport bar",
    icon: sportbarIcon,
    image: sportbarImage,
  },
  {
    id: "salon-juegos",
    title: "Salón de juegos",
    icon: barIcon,
    image: salaJuegosImage,
  },
  {
    id: "tea-room",
    title: "Tea room",
    icon: teaIcon,
    image: teaImage,
  },
  {
    id: "zona-friendly",
    title: "Zona friendly",
    icon: petIcon,
    image: petImage,
  },
  {
    id: "parque",
    title: "Parque lineal",
    icon: parqueIcon,
    image: parqueImage,
  },
];

export default function Amenidades() {
  const { selectedAmenidad, setSelectedAmenidad } = useUIStore();

  const amenidades = slidesData.map((slide) => {
    return (
      <motion.div
        key={slide.id}
        animate={{
          width: selectedAmenidad === slide.id ? 850 : 340,
        }}
        initial={false}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        onClick={() =>
          setSelectedAmenidad(selectedAmenidad === slide.id ? null : slide.id)
        }
        className={`group relative flex shrink-0 flex-col min-w-[340px] h-[670px] rounded-[15px] shadow-2xl overflow-hidden bg-cyan-500 shadow-[0_10.48px_18.16px_-6.98px_rgba(0,0,0,0.12),0_8.73px_15.89px_-6.98px_rgba(0,0,0,0.15)] hover:cursor-pointer transition-[outline-color,outline-width] duration-500 ease-out ${
          selectedAmenidad === slide.id
            ? "outline-3 outline-naranja"
            : "outline-0 outline-naranja"
        }`}
      >
        {/* Overlay and image */}
        <div className="absolute z-0 w-full h-full">
          <div className="relative w-full h-full">
            {/* image */}
            <img
              src={slide.image}
              alt={`Anna Sky Living - Amenidades ${slide.title}`}
              className="absolute w-full h-full inset-0 object-cover object-center"
            />

            {/* Overlay */}
            <div
              className={`absolute top-0 left-0 w-full h-full bg-linear-to-b from-azul/30 to-azul/80 transition-opacity group-hover:opacity-0 ${selectedAmenidad === slide.id && "opacity-0"}`}
            />
          </div>
        </div>

        {/* Text and icon */}
        <div
          className={`pointer-events-none relative flex flex-col w-full h-full justify-center items-center gap-[15px] transition-opacity ${slide.id === selectedAmenidad ? "opacity-0" : "opacity-100"}`}
        >
          <img
            src={slide.icon}
            draggable={false}
            alt="Ícono de amenidad"
            className="h-[45px]"
          />
          <h4 className="text-[28px] font-bold uppercase">{slide.title}</h4>
        </div>
      </motion.div>
    );
  });

  return (
    <div className="flex flex-col self-center w-full max-w-[1280px] h-fit justify-center items-center px-[30px] pt-[30px] pb-[60px] gap-[30px]">
      <div className="flex flex-col justify-center items-center gap-[10px]">
        <h2 className="text-[35px] font-bangla uppercase leading-none">
          Amenidades
        </h2>
        <h3 className="text-[35px] font-bangla uppercase leading-none">
          Disfruta lo extraordinario
        </h3>
      </div>

      {/* Carousel */}
      <div className="flex items-center w-[1120px] h-[710px] gap-[35px]">
        <ExpandableCarousel
          slides={amenidades}
          variant="card"
          isAnySelected={selectedAmenidad}
        />
      </div>
    </div>
  );
}
