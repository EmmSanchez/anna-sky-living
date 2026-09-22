import camaIcon from "../assets/icons/modelos/cama.svg";
import closetIcon from "../assets/icons/modelos/closet.svg";
import banoIcon from "../assets/icons/modelos/bano.svg";
import salaIcon from "../assets/icons/modelos/sala.svg";
import comedorIcon from "../assets/icons/modelos/comedor.svg";
import cocinaIcon from "../assets/icons/modelos/cocina.svg";
import terrazaIcon from "../assets/icons/modelos/terraza.svg";
import lavadoIcon from "../assets/icons/modelos/lavado.svg";
import estacionamientoIcon from "../assets/icons/modelos/estacionamiento.svg";
import pisoIcon from "../assets/icons/modelos/piso.svg";
import accesoriosBanoIcon from "../assets/icons/modelos/accesorios-bano.svg";
import puertasIcon from "../assets/icons/modelos/puertas.svg";

const ICONOS = {
  cama: camaIcon,
  closet: closetIcon,
  bano: banoIcon,
  sala: salaIcon,
  comedor: comedorIcon,
  cocina: cocinaIcon,
  terraza: terrazaIcon,
  lavado: lavadoIcon,
  estacionamiento: estacionamientoIcon,
  piso: pisoIcon,
  accesoriosBano: accesoriosBanoIcon,
  puertas: puertasIcon,
};

const renderTipoA = "/foto/modelos/vista-tipo-a/render.png";
const frameTipoA = "/foto/modelos/vista-tipo-a/frame.png";
const vistaA1 = "/foto/modelos/interiores/INTERIORES-1.webp";
const vistaA2 = "/foto/modelos/interiores/INTERIORES-2.webp";

const renderTipoB = "/foto/modelos/vista-tipo-b/render.png";
const frameTipoB = "/foto/modelos/vista-tipo-b/frame.png";
const vistaB1 = "/foto/modelos/interiores/INTERIORES-3.webp";
const vistaB2 = "/foto/modelos/interiores/INTERIORES-4.webp";

const renderTipoC = "/foto/modelos/vista-tipo-c/render.png";
const frameTipoC = "/foto/modelos/vista-tipo-c/frame.png";
const vistaC1 = "/foto/modelos/interiores/INTERIORES-5.webp";
const vistaC2 = "/foto/modelos/interiores/INTERIORES-6.webp";

const renderTipoD = "/foto/modelos/vista-tipo-d/render.png";
const frameTipoD = "/foto/modelos/vista-tipo-d/frame.png";
const vistaD1 = "/foto/modelos/interiores/INTERIORES-7.webp";
const vistaD2 = "/foto/modelos/interiores/INTERIORES-1.webp";

const renderTipoE = "/foto/modelos/vista-tipo-e/render.png";
const frameTipoE = "/foto/modelos/vista-tipo-e/frame.png";
const vistaE1 = "/foto/modelos/interiores/INTERIORES-2.webp";
const vistaE2 = "/foto/modelos/interiores/INTERIORES-3.webp";

const renderTipoF = "/foto/modelos/vista-tipo-f/render.png";
const renderTipoFVertical = "/foto/modelos/vista-tipo-f/render-vertical.png";
const frameTipoF = "/foto/modelos/vista-tipo-f/frame.png";
const vistaF1 = "/foto/modelos/interiores/INTERIORES-4.webp";
const vistaF2 = "/foto/modelos/interiores/INTERIORES-5.webp";

const renderTipoLO = "/foto/modelos/vista-lock-off/render.png";
const renderTipoLOVertical = "/foto/modelos/vista-lock-off/render-vertical.png";
const frameTipoLO = "/foto/modelos/vista-lock-off/frame.png";
const vistaLO1 = "/foto/modelos/interiores/INTERIORES-6.webp";
const vistaLO2 = "/foto/modelos/interiores/INTERIORES-7.webp";

export const MODELOS = {
  "tipo-a": {
    titulo: "Tipo A / 81.77 M2",
    imageRender: renderTipoA,
    imageFrame: frameTipoA,
    carouselImages: [vistaA1, vistaA2],
    descripcion: [
      { id: "recamaras", label: "2 recámaras", icon: ICONOS.cama },
      {
        id: "walk-in-closet",
        label: "Walk-in closet (recámara principal)",
        icon: ICONOS.closet,
      },
      { id: "banos", label: "2 baños", icon: ICONOS.bano },
      { id: "sala", label: "Sala", icon: ICONOS.sala },
      { id: "comedor", label: "Comedor", icon: ICONOS.comedor },
      { id: "cocina", label: "Cocina", icon: ICONOS.cocina },
      { id: "terraza", label: "Terraza", icon: ICONOS.terraza },
      {
        id: "centro-lavado",
        label: "Centro de lavado",
        icon: ICONOS.lavado,
      },
      {
        id: "cajones-estacionamiento",
        label: "2 cajones de estacionamiento",
        icon: ICONOS.estacionamiento,
      },
    ],
    comoSeEntrega: [
      { id: "piso", label: "Piso", icon: ICONOS.piso },
      {
        id: "accesorios-bano",
        label: "Accesorios de baño",
        icon: ICONOS.accesoriosBano,
      },
      { id: "puertas", label: "Puertas", icon: ICONOS.puertas },
    ],
  },
  "tipo-b": {
    titulo: "Tipo B / 70.17 M2",
    imageRender: renderTipoB,
    imageFrame: frameTipoB,
    carouselImages: [vistaB1, vistaB2],
    descripcion: [
      { id: "recamaras", label: "2 recámaras", icon: ICONOS.cama },
      {
        id: "walk-in-closet",
        label: "Walk-in closet (recámara principal)",
        icon: ICONOS.closet,
      },
      { id: "banos", label: "2 baños", icon: ICONOS.bano },
      { id: "sala", label: "Sala", icon: ICONOS.sala },
      { id: "comedor", label: "Comedor", icon: ICONOS.comedor },
      { id: "cocina", label: "Cocina", icon: ICONOS.cocina },
      { id: "terraza", label: "Terraza", icon: ICONOS.terraza },
      {
        id: "centro-lavado",
        label: "Centro de lavado",
        icon: ICONOS.lavado,
      },
      {
        id: "cajones-estacionamiento",
        label: "2 cajones de estacionamiento",
        icon: ICONOS.estacionamiento,
      },
    ],
    comoSeEntrega: [
      { id: "piso", label: "Piso", icon: ICONOS.piso },
      {
        id: "accesorios-bano",
        label: "Accesorios de baño",
        icon: ICONOS.accesoriosBano,
      },
      { id: "puertas", label: "Puertas", icon: ICONOS.puertas },
    ],
  },
  "tipo-c": {
    titulo: "Tipo C / 82.52 M2",
    imageRender: renderTipoC,
    imageFrame: frameTipoC,
    carouselImages: [vistaC1, vistaC2],
    descripcion: [
      { id: "recamaras", label: "2 recámaras", icon: ICONOS.cama },
      {
        id: "walk-in-closet",
        label: "Walk-in closet (recámara principal)",
        icon: ICONOS.closet,
      },
      { id: "banos", label: "2 baños", icon: ICONOS.bano },
      { id: "sala", label: "Sala", icon: ICONOS.sala },
      { id: "comedor", label: "Comedor", icon: ICONOS.comedor },
      { id: "cocina", label: "Cocina", icon: ICONOS.cocina },
      { id: "terraza", label: "Terraza", icon: ICONOS.terraza },
      {
        id: "centro-lavado",
        label: "Centro de lavado",
        icon: ICONOS.lavado,
      },
      {
        id: "cajones-estacionamiento",
        label: "2 cajones de estacionamiento",
        icon: ICONOS.estacionamiento,
      },
    ],
    comoSeEntrega: [
      { id: "piso", label: "Piso", icon: ICONOS.piso },
      {
        id: "accesorios-bano",
        label: "Accesorios de baño",
        icon: ICONOS.accesoriosBano,
      },
      { id: "puertas", label: "Puertas", icon: ICONOS.puertas },
    ],
  },
  "tipo-d": {
    titulo: "Tipo D / 81.57 M2",
    imageRender: renderTipoD,
    imageFrame: frameTipoD,
    carouselImages: [vistaD1, vistaD2],
    descripcion: [
      { id: "recamaras", label: "2 recámaras", icon: ICONOS.cama },
      {
        id: "walk-in-closet",
        label: "Walk-in closet (recámara principal)",
        icon: ICONOS.closet,
      },
      { id: "banos", label: "2 baños", icon: ICONOS.bano },
      { id: "sala", label: "Sala", icon: ICONOS.sala },
      { id: "comedor", label: "Comedor", icon: ICONOS.comedor },
      { id: "cocina", label: "Cocina", icon: ICONOS.cocina },
      { id: "terraza", label: "Terraza", icon: ICONOS.terraza },
      {
        id: "centro-lavado",
        label: "Centro de lavado",
        icon: ICONOS.lavado,
      },
      {
        id: "cajones-estacionamiento",
        label: "2 cajones de estacionamiento",
        icon: ICONOS.estacionamiento,
      },
    ],
    comoSeEntrega: [
      { id: "piso", label: "Piso", icon: ICONOS.piso },
      {
        id: "accesorios-bano",
        label: "Accesorios de baño",
        icon: ICONOS.accesoriosBano,
      },
      { id: "puertas", label: "Puertas", icon: ICONOS.puertas },
    ],
  },
  "tipo-e": {
    titulo: "Tipo E / 164.09 M2",
    imageRender: renderTipoE,
    imageFrame: frameTipoE,
    carouselImages: [vistaE1, vistaE2],
    descripcion: [
      { id: "recamaras", label: "3 recámaras", icon: ICONOS.cama },
      {
        id: "cuarto-servicio",
        label: "1 cuarto de servicio",
        icon: ICONOS.cama,
      },
      {
        id: "walk-in-closet",
        label: "Walk-in closet (recámara principal)",
        icon: ICONOS.closet,
      },
      { id: "banos", label: "4 baños", icon: ICONOS.bano },
      { id: "sala", label: "Sala", icon: ICONOS.sala },
      { id: "comedor", label: "Comedor", icon: ICONOS.comedor },
      { id: "cocina", label: "Cocina", icon: ICONOS.cocina },
      { id: "terraza", label: "Terraza", icon: ICONOS.terraza },
      {
        id: "centro-lavado",
        label: "Centro de lavado",
        icon: ICONOS.lavado,
      },
      {
        id: "cajones-estacionamiento",
        label: "2 cajones de estacionamiento",
        icon: ICONOS.estacionamiento,
      },
    ],
    comoSeEntrega: [
      { id: "piso", label: "Piso", icon: ICONOS.piso },
      {
        id: "accesorios-bano",
        label: "Accesorios de baño",
        icon: ICONOS.accesoriosBano,
      },
      { id: "puertas", label: "Puertas", icon: ICONOS.puertas },
    ],
  },
  "tipo-f": {
    titulo: "Tipo F / 164.09 M2",
    imageRender: renderTipoF,
    imageRenderVertical: renderTipoFVertical,
    imageFrame: frameTipoF,
    carouselImages: [vistaF1, vistaF2],
    descripcion: [
      { id: "recamaras", label: "3 recámaras", icon: ICONOS.cama },
      {
        id: "cuarto-servicio",
        label: "1 cuarto de servicio",
        icon: ICONOS.cama,
      },
      {
        id: "walk-in-closet",
        label: "Walk-in closet (recámara principal)",
        icon: ICONOS.closet,
      },
      { id: "banos", label: "4 baños", icon: ICONOS.bano },
      { id: "sala", label: "Sala", icon: ICONOS.sala },
      { id: "comedor", label: "Comedor", icon: ICONOS.comedor },
      { id: "cocina", label: "Cocina", icon: ICONOS.cocina },
      { id: "terraza", label: "Terraza", icon: ICONOS.terraza },
      {
        id: "centro-lavado",
        label: "Centro de lavado",
        icon: ICONOS.lavado,
      },
      {
        id: "cajones-estacionamiento",
        label: "2 cajones de estacionamiento",
        icon: ICONOS.estacionamiento,
      },
    ],
    comoSeEntrega: [
      { id: "piso", label: "Piso", icon: ICONOS.piso },
      {
        id: "accesorios-bano",
        label: "Accesorios de baño",
        icon: ICONOS.accesoriosBano,
      },
      { id: "puertas", label: "Puertas", icon: ICONOS.puertas },
    ],
  },
  "lock-off": {
    titulo: "Lock Off / 164.09 M2",
    subtitulo:
      "Distribución de 2 departamentos con 2 recamaras abajo de la planta arquitectonica",
    imageRender: renderTipoLO,
    imageRenderVertical: renderTipoLOVertical,
    imageFrame: frameTipoLO,
    carouselImages: [vistaLO1, vistaLO2],
    descripcion: [
      { id: "recamaras", label: "3 recámaras", icon: ICONOS.cama },
      {
        id: "cuarto-servicio",
        label: "1 cuarto de servicio",
        icon: ICONOS.cama,
      },
      {
        id: "walk-in-closet",
        label: "Walk-in closet (recámara principal)",
        icon: ICONOS.closet,
      },
      { id: "banos", label: "4 baños", icon: ICONOS.bano },
      { id: "sala", label: "Sala", icon: ICONOS.sala },
      { id: "comedor", label: "Comedor", icon: ICONOS.comedor },
      { id: "cocina", label: "Cocina", icon: ICONOS.cocina },
      { id: "terraza", label: "Terraza", icon: ICONOS.terraza },
      {
        id: "centro-lavado",
        label: "Centro de lavado",
        icon: ICONOS.lavado,
      },
      {
        id: "cajones-estacionamiento",
        label: "2 cajones de estacionamiento",
        icon: ICONOS.estacionamiento,
      },
    ],
    comoSeEntrega: [
      { id: "piso", label: "Piso", icon: ICONOS.piso },
      {
        id: "accesorios-bano",
        label: "Accesorios de baño",
        icon: ICONOS.accesoriosBano,
      },
      { id: "puertas", label: "Puertas", icon: ICONOS.puertas },
    ],
  },
};
