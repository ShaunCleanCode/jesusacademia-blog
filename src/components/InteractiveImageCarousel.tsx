'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { CarouselImage } from '@/lib/carousel-data';

interface InteractiveImageCarouselProps {
  images: CarouselImage[];
  autoPlay?: boolean;
  interval?: number;
  showNavigation?: boolean;
  showDots?: boolean;
  className?: string;
}

export default function InteractiveImageCarousel({
  images,
  autoPlay = true,
  interval = 3000,
  showNavigation = true,
  showDots = true,
  className = ''
}: InteractiveImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // 자동 재생
  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [isAutoPlaying, interval, images.length]);

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsAutoPlaying(!isAutoPlaying);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAutoPlaying]);

  // 터치 이벤트
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  if (!images.length) {
    return (
      <div className={`flex items-center justify-center h-64 bg-gray-100 rounded-lg ${className}`}>
        <p className="text-gray-500">이미지가 없습니다.</p>
      </div>
    );
  }

  return (
    <div 
      className={`relative overflow-hidden rounded-xl bg-black ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 메인 이미지 */}
      <div className="relative h-full min-h-[400px] md:min-h-[600px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-cover"
              priority={currentIndex < 3}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            
            {/* 이미지 오버레이 정보 */}
            {(images[currentIndex].title || images[currentIndex].description) && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                {images[currentIndex].title && (
                  <h3 className="text-white text-lg md:text-xl font-semibold mb-2">
                    {images[currentIndex].title}
                  </h3>
                )}
                {images[currentIndex].description && (
                  <p className="text-white/90 text-sm md:text-base">
                    {images[currentIndex].description}
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 네비게이션 화살표 */}
      {showNavigation && images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="이전 이미지"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
            aria-label="다음 이미지"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* 점 인디케이터 */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`p-1 transition-all duration-200 ${
                index === currentIndex
                  ? 'text-white scale-125'
                  : 'text-white/50 hover:text-white/80'
              }`}
              aria-label={`${index + 1}번째 이미지로 이동`}
            >
              <Circle className={`w-3 h-3 ${index === currentIndex ? 'fill-current' : ''}`} />
            </button>
          ))}
        </div>
      )}

      {/* 자동 재생 토글 */}
      {autoPlay && (
        <button
          onClick={toggleAutoPlay}
          className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white px-3 py-1 rounded-full text-sm transition-all duration-200 backdrop-blur-sm"
          aria-label={isAutoPlaying ? '자동 재생 중지' : '자동 재생 시작'}
        >
          {isAutoPlaying ? '⏸️' : '▶️'}
        </button>
      )}

      {/* 이미지 카운터 */}
      <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
} 