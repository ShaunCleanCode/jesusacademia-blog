'use client';

import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface HighlightBoxProps {
  title?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

export default function HighlightBox({ 
  title, 
  children, 
  variant = 'primary',
  className = '' 
}: HighlightBoxProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const baseClasses = "p-6 rounded-xl border-l-4 shadow-sm animate-fade-in";
  
  const variantClasses = {
    primary: isDark 
      ? "bg-gray-800 border-primary-500 text-gray-200" 
      : "bg-primary-50 border-primary-500 text-primary-900",
    secondary: isDark 
      ? "bg-gray-800 border-gray-500 text-gray-200" 
      : "bg-gray-50 border-gray-500 text-gray-900",
    accent: isDark 
      ? "bg-gray-800 border-accent-500 text-gray-200" 
      : "bg-accent-50 border-accent-500 text-accent-900"
  };

  return (
    <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {title && (
        <h3 className="text-lg font-semibold mb-3 text-current">
          {title}
        </h3>
      )}
      <div className="prose prose-sm max-w-none">
        {children}
      </div>
    </div>
  );
} 