import React from 'react';
import Image from 'next/image';

interface AvatarCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl?: string;
  className?: string;
}

export default function AvatarCard({ 
  name, 
  title, 
  description, 
  imageUrl,
  className = '' 
}: AvatarCardProps) {
  return (
    <div className={`bg-white rounded-xl shadow-md p-6 border border-gray-100 animate-slide-up ${className}`}>
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={name}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          ) : (
            <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                {name.charAt(0)}
              </span>
            </div>
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {name}
          </h3>
          <p className="text-sm text-primary-600 font-medium mb-2">
            {title}
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
} 