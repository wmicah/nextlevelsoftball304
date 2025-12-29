"use client";

import * as React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = React.useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-3",
    4: "md:grid-cols-4",
  };

  const openLightbox = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const next = (currentIndex + 1) % images.length;
    setCurrentIndex(next);
    setSelectedImage(images[next]);
  };

  const prevImage = () => {
    const prev = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prev);
    setSelectedImage(images[prev]);
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <>
      <div className={`grid grid-cols-1 gap-4 ${gridCols[columns]}`}>
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => openLightbox(image, index)}
            className="group relative aspect-square overflow-hidden rounded-sm border border-light bg-white transition-all hover:scale-[1.02] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black"
            aria-label={`View image: ${image.alt}`}
          >
            <div className="relative h-full w-full bg-light">
              {image.src.startsWith("/") ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-light text-gray">
                  <span className="text-sm">{image.alt}</span>
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-black opacity-0 transition-opacity group-hover:opacity-10" />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 rounded-sm bg-black p-2 text-white transition-colors hover:bg-dark focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 z-10 rounded-sm bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous image"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 z-10 rounded-sm bg-black bg-opacity-50 p-2 text-white transition-colors hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-white md:right-14"
            aria-label="Next image"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div
            className="relative max-h-full max-w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedImage.src.startsWith("/") ? (
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1200}
                height={800}
                className="max-h-[90vh] max-w-full object-contain"
                priority
              />
            ) : (
              <div className="flex max-h-[90vh] min-h-[400px] min-w-[600px] items-center justify-center bg-dark text-white">
                <p className="text-lg">{selectedImage.alt}</p>
              </div>
            )}
            {(selectedImage.caption || images.length > 1) && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4 text-white">
                {selectedImage.caption && (
                  <p className="text-base font-semibold">{selectedImage.caption}</p>
                )}
                {images.length > 1 && (
                  <p className="mt-1 text-sm text-light">
                    {currentIndex + 1} / {images.length}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

