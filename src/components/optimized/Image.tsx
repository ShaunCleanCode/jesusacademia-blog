'use client';

import React from 'react';
import NextImage, { ImageProps as NextImageProps } from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

interface OptimizedImageProps extends Omit<NextImageProps, 'placeholder'> {
  fallback?: string;
  className?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  fallback = '/images/default-image.jpg',
  className = '',
  ...props
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <NextImage
        src={src}
        alt={alt}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
        quality={85}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className={`transition-opacity duration-300 ${
          isDark ? 'opacity-90' : 'opacity-100'
        }`}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = fallback;
        }}
        {...props}
      />
    </div>
  );
};
