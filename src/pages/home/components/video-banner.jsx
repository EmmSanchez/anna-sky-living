import { AutoGalleryCarrousel } from "../../../components/embla-carousel/auto-gallery-carousel";

// images
const image1 = "/foto/carousel-banner/juego-alberca-1.jpg";
const image2 = "/foto/carousel-banner/asador-2.jpg";
const image3 = "/foto/carousel-banner/alberca-3.jpg";
const image4 = "/foto/carousel-banner/sportbar-4.jpg";
const image5 = "/foto/carousel-banner/lobby-5.jpg";

export default function VideoBanner() {
  return (
    <div className="relative self-center flex w-full h-svh md:h-[50svh] xl:h-svh justify-center items-center overflow-hidden">
      <AutoGalleryCarrousel images={[image1, image2, image3, image4, image5]} />

      <p className="absolute bottom-4 right-[1/2] text-[14px] text-blanco font-light">
        Imágenes con fines ilustrativos*
      </p>
    </div>
  );
}
