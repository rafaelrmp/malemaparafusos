import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { heroSlides } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const HeroCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    
    // Auto-play
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);

    return () => {
      clearInterval(autoplay);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <div className="embla h-full" ref={emblaRef}>
        <div className="embla__container flex h-full">
          {heroSlides.map((slide) => (
            <div
              key={slide.id}
              className="embla__slide flex-[0_0_100%] min-w-0 relative"
            >
              {/* Vertical strips effect */}
              <div className="absolute inset-0 flex">
                {[...Array(5)].map((_, stripIndex) => (
                  <div
                    key={stripIndex}
                    className="flex-1 relative overflow-hidden"
                    style={{
                      transform: `translateY(${stripIndex % 2 === 0 ? '0' : '10px'})`,
                    }}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage: `url(${slide.image})`,
                        backgroundPosition: `${stripIndex * 25}% center`,
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
                  </div>
                ))}
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white z-10 px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <Button asChild size="lg" className="text-lg">
                    <Link to="/catalogo">Ver Catálogo</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-primary w-8"
                : "bg-white/60 hover:bg-white/80"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
