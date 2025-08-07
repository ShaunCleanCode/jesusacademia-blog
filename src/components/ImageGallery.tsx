import React, { useState } from 'react';
import Image from 'next/image';
import { ImageMetadata } from '@/lib/image-metadata';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageGalleryProps {
  images: ImageMetadata[];
  title?: string;
  className?: string;
  columns?: number;
  showLightbox?: boolean;
}

export default function ImageGallery({ 
  images, 
  title, 
  className = '',
  columns = 3,
  showLightbox = true
}: ImageGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    if (showLightbox) {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    }
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const gridCols = {
    2: 'grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-2 lg:grid-cols-4',
    5: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
  };

  return (
    <div className={`w-full ${className}`}>
      {title && (
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{title}</h3>
      )}
      
      <div className={`grid gap-4 ${gridCols[columns as keyof typeof gridCols] || gridCols[3]}`}>
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={image.path}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-end">
              <div className="p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium">{image.title}</p>
                {image.description && (
                  <p className="text-xs opacity-90">{image.description}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && showLightbox && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative max-w-4xl max-h-full w-full h-full flex items-center justify-center p-4">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous button */}
            {images.length > 1 && (
              <button
                onClick={prevImage}
                className="absolute left-4 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
            )}

            {/* Next button */}
            {images.length > 1 && (
              <button
                onClick={nextImage}
                className="absolute right-4 z-10 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            )}

            {/* Main image */}
            <div className="relative w-full h-full max-w-3xl max-h-[80vh]">
              <Image
                src={images[currentImageIndex].path}
                alt={images[currentImageIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>

            {/* Image info */}
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-1">
                {images[currentImageIndex].title}
              </h4>
              {images[currentImageIndex].description && (
                <p className="text-sm opacity-90">
                  {images[currentImageIndex].description}
                </p>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {images[currentImageIndex].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-primary-600 bg-opacity-70 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {images.length > 1 && (
                <p className="text-xs mt-2 opacity-70">
                  {currentImageIndex + 1} / {images.length}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}