import React, { useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import arrowIcon from "../../assets/icons/arrow.svg";

export function ExpandableCarousel({ slides = [], variant, isAnySelected }) {
  const autoScroll = useRef(
    AutoScroll({
      speed: 1,
      startDelay: 1000,
      stopOnInteraction: true,
      stopOnMouseEnter: false,
    }),
  );

  const isPausedRef = useRef(false);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", startIndex: 0, duration: 30 },
    [autoScroll.current],
  );

  // Re-medir cuando un slide cambia de tamaño
  useEffect(() => {
    if (!emblaApi) return;

    const container = emblaApi.containerNode();
    const observer = new ResizeObserver(() => {
      emblaApi.reInit();
      if (isPausedRef.current) {
        autoScroll.current.stop();
      }
    });

    observer.observe(container);
    Array.from(container.children).forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, [emblaApi]);

  // Reanudar cuando se deselecciona
  useEffect(() => {
    if (!emblaApi) return;
    if (!isAnySelected) {
      isPausedRef.current = false;
      autoScroll.current.play();
    }
  }, [isAnySelected, emblaApi]);

  const handleSlideClick = (index) => {
    isPausedRef.current = true;
    autoScroll.current.stop();
    emblaApi?.scrollTo(index);
  };

  const scrollNext = () => emblaApi?.scrollNext();
  const scrollPrev = () => emblaApi?.scrollPrev();

  return (
    <div className="relative embla flex flex-col justify-center w-full h-full">
      <div className="embla__viewport h-full overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex h-full items-center">
          {variant === "card" &&
            slides.map((slide, index) => (
              <div
                key={index}
                className="embla__slide"
                onClick={() => handleSlideClick(index)}
              >
                {slide}
              </div>
            ))}
        </div>
      </div>

      {/* Left arrow */}
      <button
        onClick={scrollPrev}
        className="group flex justify-center items-center absolute z-20 -translate-x-[62px] bottom-1/2 translate-y-1/2 p-[10px] rounded-[10px] bg-naranja hover:bg-gris hover:cursor-pointer active:bg-blanco hover:drop-shadow-lg drop-shadow-black/20"
      >
        <img
          src={arrowIcon}
          draggable={false}
          alt="Flecha deslizar izquierda"
          className="w-[20.4px] h-[32px] group-active:brightness-0 rotate-180"
        />
      </button>

      {/* Right arrow */}
      <button
        onClick={scrollNext}
        className="group flex justify-center items-center absolute z-20 translate-x-[62px] bottom-1/2 right-0 translate-y-1/2 p-[10px] rounded-[10px] bg-naranja hover:bg-gris hover:cursor-pointer active:bg-blanco hover:drop-shadow-lg drop-shadow-black/20"
      >
        <img
          src={arrowIcon}
          draggable={false}
          alt="Flecha deslizar izquierda"
          className="w-[20.4px] h-[32px] group-active:brightness-0"
        />
      </button>
    </div>
  );
}
