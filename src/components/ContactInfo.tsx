'use client';

import { Phone, Mail, MapPin, Clock, Building } from 'lucide-react';
import { generalContactInfo } from '@/lib/contact-data';
import { useTheme } from '@/contexts/ThemeContext';

interface ContactInfoProps {
  className?: string;
}

export default function ContactInfo({ className = '' }: ContactInfoProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-3xl p-12 shadow-2xl border ${isDark ? 'border-gray-700' : 'border-gray-200'} ${className}`}>
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 shadow-2xl mb-6">
          <Building className="w-8 h-8 text-white" />
        </div>
        <h3 className={`text-3xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent`}>
          일반 연락처
        </h3>
        <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
          기타 문의사항이나 일반적인 연락이 필요한 경우
        </p>
        <div className="mt-6 w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Details */}
        <div className="space-y-8">
          {/* Phone */}
          <div className={`flex items-center space-x-6 p-6 rounded-2xl ${isDark ? 'bg-gradient-to-r from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-r from-blue-50 to-purple-50'} hover:shadow-lg transition-all duration-300 group`}>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                전화번호
              </p>
              <a 
                href="tel:+1-516-277-2082"
                className={`text-2xl font-bold hover:underline transition-colors ${
                  isDark ? 'text-white hover:text-blue-400' : 'text-gray-900 hover:text-blue-600'
                }`}
              >
                516.277.2082
              </a>
            </div>
          </div>

          {/* Email */}
          <div className={`flex items-center space-x-6 p-6 rounded-2xl ${isDark ? 'bg-gradient-to-r from-purple-900/20 to-pink-900/20' : 'bg-gradient-to-r from-purple-50 to-pink-50'} hover:shadow-lg transition-all duration-300 group`}>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                이메일
              </p>
              <a 
                href={`mailto:${generalContactInfo.email}`}
                className={`text-lg font-bold hover:underline transition-colors ${
                  isDark ? 'text-white hover:text-purple-400' : 'text-gray-900 hover:text-purple-600'
                }`}
              >
                {generalContactInfo.email}
              </a>
            </div>
          </div>

          {/* Address */}
          <div className={`flex items-start space-x-6 p-6 rounded-2xl ${isDark ? 'bg-gradient-to-r from-green-900/20 to-blue-900/20' : 'bg-gradient-to-r from-green-50 to-blue-50'} hover:shadow-lg transition-all duration-300 group`}>
            <div className="p-4 rounded-2xl bg-gradient-to-r from-green-500 to-blue-500 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className={`text-sm font-semibold ${isDark ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
                주소
              </p>
              <a 
                href={generalContactInfo.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg font-bold hover:underline transition-colors ${
                  isDark ? 'text-white hover:text-green-400' : 'text-gray-900 hover:text-green-600'
                }`}
              >
                {generalContactInfo.address.full}
              </a>
            </div>
          </div>
        </div>

        {/* Business Hours */}
        <div className={`${isDark ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-white'} rounded-2xl p-8 shadow-xl border ${isDark ? 'border-gray-600' : 'border-gray-200'}`}>
          <div className="flex items-center space-x-4 mb-8">
            <div className="p-4 rounded-2xl bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h4 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              운영시간
            </h4>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-blue-500/5 to-purple-500/5">
              <span className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                평일
              </span>
              <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                09:00 - 18:00
              </span>
            </div>
            <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-purple-500/5 to-pink-500/5">
              <span className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                토요일
              </span>
              <span className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                09:00 - 15:00
              </span>
            </div>
            <div className="flex justify-between items-center p-4 rounded-xl bg-gradient-to-r from-gray-500/5 to-gray-600/5">
              <span className={`text-sm font-semibold ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                일요일
              </span>
              <span className={`text-lg font-bold ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                휴무
              </span>
            </div>
          </div>
          <div className={`mt-6 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-l-4 ${isDark ? 'border-blue-400' : 'border-blue-500'}`}>
            <p className={`text-sm font-semibold ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
              💡 긴급한 경우 언제든 연락해 주세요
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
