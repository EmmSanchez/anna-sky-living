import { AutoGalleryCarrousel } from "../../../components/embla-carousel/auto-gallery-carousel";

// images
import image1 from "../../../assets/images/carousel-banner/juego-alberca-1.jpg";
import image2 from "../../../assets/images/carousel-banner/asador-2.jpg";
import image3 from "../../../assets/images/carousel-banner/alberca-3.jpg";
import image4 from "../../../assets/images/carousel-banner/sportbar-4.jpg";
import image5 from "../../../assets/images/carousel-banner/lobby-5.jpg";

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
