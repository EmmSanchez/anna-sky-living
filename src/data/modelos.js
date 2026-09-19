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

import renderTipoA from "../assets/images/modelos/vista-tipo-a/render.png";
import frameTipoA from "../assets/images/modelos/vista-tipo-a/frame.png";
import vistaA1 from "../assets/images/modelos/interiores/INTERIORES-1.webp";
import vistaA2 from "../assets/images/modelos/interiores/INTERIORES-2.webp";

import renderTipoB from "../assets/images/modelos/vista-tipo-b/render.png";
import frameTipoB from "../assets/images/modelos/vista-tipo-b/frame.png";
import vistaB1 from "../assets/images/modelos/interiores/INTERIORES-3.webp";
import vistaB2 from "../assets/images/modelos/interiores/INTERIORES-4.webp";

import renderTipoC from "../assets/images/modelos/vista-tipo-c/render.png";
import frameTipoC from "../assets/images/modelos/vista-tipo-c/frame.png";
import vistaC1 from "../assets/images/modelos/interiores/INTERIORES-5.webp";
import vistaC2 from "../assets/images/modelos/interiores/INTERIORES-6.webp";

import renderTipoD from "../assets/images/modelos/vista-tipo-d/render.png";
import frameTipoD from "../assets/images/modelos/vista-tipo-d/frame.png";
import vistaD1 from "../assets/images/modelos/interiores/INTERIORES-7.webp";
import vistaD2 from "../assets/images/modelos/interiores/INTERIORES-1.webp";

import renderTipoE from "../assets/images/modelos/vista-tipo-e/render.png";
import frameTipoE from "../assets/images/modelos/vista-tipo-e/frame.png";
import vistaE1 from "../assets/images/modelos/interiores/INTERIORES-2.webp";
import vistaE2 from "../assets/images/modelos/interiores/INTERIORES-3.webp";

import renderTipoF from "../assets/images/modelos/vista-tipo-f/render.png";
import frameTipoF from "../assets/images/modelos/vista-tipo-f/frame.png";
import vistaF1 from "../assets/images/modelos/interiores/INTERIORES-4.webp";
import vistaF2 from "../assets/images/modelos/interiores/INTERIORES-5.webp";

import renderTipoLO from "../assets/images/modelos/vista-lock-off/render.png";
import frameTipoLO from "../assets/images/modelos/vista-lock-off/frame.png";
import vistaLO1 from "../assets/images/modelos/interiores/INTERIORES-6.webp";
import vistaLO2 from "../assets/images/modelos/interiores/INTERIORES-7.webp";

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
