import React from 'react';

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
  const baseClasses = "p-6 rounded-xl border-l-4 shadow-sm animate-fade-in";
  
  const variantClasses = {
    primary: "bg-primary-50 border-primary-500 text-primary-900",
    secondary: "bg-gray-50 border-gray-500 text-gray-900",
    accent: "bg-accent-50 border-accent-500 text-accent-900"
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