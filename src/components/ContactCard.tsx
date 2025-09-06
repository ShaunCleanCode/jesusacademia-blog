'use client';

import { Phone, Mail, MapPin, Flag } from 'lucide-react';
import { ContactPerson } from '@/lib/contact-data';
import { useTheme } from '@/contexts/ThemeContext';

interface ContactCardProps {
  contact: ContactPerson;
  className?: string;
}

export default function ContactCard({ contact, className = '' }: ContactCardProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const getCountryFlag = (country?: string) => {
    switch (country) {
      case 'USA': return '🇺🇸';
      case 'Korea': return '🇰🇷';
      default: return null;
    }
  };

  const getCountryName = (country?: string) => {
    switch (country) {
      case 'USA': return '미국';
      case 'Korea': return '한국';
      default: return null;
    }
  };

  return (
    <div className={`${isDark ? 'bg-gray-800 border-gray-700 hover:border-blue-500/50' : 'bg-white border-gray-200 hover:border-blue-400/50'} 
      rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 p-8 border 
      animate-slide-up group hover:scale-105 ${className}`}>
      
      {/* Header with name and title */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-blue-500 transition-colors`}>
              {contact.name}
            </h3>
            {contact.country && (
              <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                <span className="text-lg">{getCountryFlag(contact.country)}</span>
                <span className={`text-xs font-medium ${isDark ? 'text-blue-300' : 'text-blue-600'}`}>
                  {getCountryName(contact.country)}
                </span>
              </div>
            )}
          </div>
          <p className={`text-sm font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'} bg-gradient-to-r from-blue-500/10 to-purple-500/10 px-3 py-1 rounded-full inline-block`}>
            {contact.title}
          </p>
        </div>
      </div>

      {/* Description */}
      {contact.description && (
        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6 leading-relaxed`}>
          {contact.description}
        </p>
      )}

      {/* Contact Information */}
      <div className="space-y-4">
        {/* Phone */}
        <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5 hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300">
          <div className={`p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg`}>
            <Phone className="w-5 h-5 text-white" />
          </div>
          <a 
            href={`tel:${contact.phone}`}
            className={`text-lg font-semibold hover:underline transition-colors ${
              isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
            }`}
          >
            {contact.phone}
          </a>
        </div>

        {/* Email (if available) */}
        {contact.email && (
          <div className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5 hover:from-purple-500/10 hover:to-pink-500/10 transition-all duration-300">
            <div className={`p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg`}>
              <Mail className="w-5 h-5 text-white" />
            </div>
            <a 
              href={`mailto:${contact.email}`}
              className={`text-lg font-semibold hover:underline transition-colors ${
                isDark ? 'text-white hover:text-purple-400' : 'text-gray-900 hover:text-purple-600'
              }`}
            >
              {contact.email}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
