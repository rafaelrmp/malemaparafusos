import { useState, useEffect, useRef } from "react";
import { Skeleton } from "@/components/ui/skeleton";

// In-memory cache of loaded image URLs
const imageCache = new Set<string>();

// Preload an image and cache it
const preloadImage = (src: string): Promise<void> => {
  if (imageCache.has(src)) return Promise.resolve();
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      imageCache.add(src);
      resolve();
    };
    img.onerror = () => resolve();
    img.src = src;
  });
};

// Batch preload multiple images
export const preloadImages = (urls: (string | undefined)[]) => {
  urls.forEach((url) => {
    if (url) preloadImage(url);
  });
};

interface CachedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export const CachedImage = ({ src, alt, className }: CachedImageProps) => {
  const [loaded, setLoaded] = useState(imageCache.has(src));
  const [error, setError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageCache.has(src)) {
      setLoaded(true);
      return;
    }
    setLoaded(false);
    setError(false);
  }, [src]);

  if (error) return null;

  return (
    <>
      {!loaded && (
        <Skeleton className="absolute inset-0 rounded-none" />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        className={`${className} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}
        onLoad={() => {
          imageCache.add(src);
          setLoaded(true);
        }}
        onError={() => setError(true)}
      />
    </>
  );
};
