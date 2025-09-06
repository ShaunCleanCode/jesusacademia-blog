'use client';

import { ContactCategory as ContactCategoryType, ContactPerson } from '@/lib/contact-data';
import ContactCard from './ContactCard';
import { useTheme } from '@/contexts/ThemeContext';

interface ContactCategoryProps {
  category: ContactCategoryType;
  className?: string;
}

export default function ContactCategory({ category, className = '' }: ContactCategoryProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`${className}`}>
      {/* Category Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-2xl mb-6 group hover:scale-110 transition-transform duration-300">
          <span className="text-3xl group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
        </div>
        <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
          {category.title}
        </h2>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed`}>
          {category.description}
        </p>
        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {category.contacts.map((contact: ContactPerson, index) => (
          <div
            key={contact.id}
            className="animate-slide-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <ContactCard 
              contact={contact}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
