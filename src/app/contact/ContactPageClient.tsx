'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Users, MessageCircle, Globe, Bot } from 'lucide-react';
import { contactData } from '@/lib/contact-data';
import ContactCategory from '@/components/ContactCategory';
import ContactInfo from '@/components/ContactInfo';
import ChatbotCTA from '@/components/ChatbotCTA';
import DropdownNavigation from '@/components/DropdownNavigation';
import { useTheme } from '@/contexts/ThemeContext';

export default function ContactPageClient() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleChatbotClick = () => {
    // 챗봇 FAB 클릭 이벤트를 트리거
    const chatbotButton = document.querySelector('[data-chatbot-fab]') as HTMLButtonElement;
    if (chatbotButton) {
      chatbotButton.click();
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      <DropdownNavigation />

      {/* Hero Section */}
      <section className={`${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              연락처
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              예수서원에 문의하거나 방문하고 싶으시다면 언제든 연락해 주세요
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{contactData.contactPersons.length}</div>
                <div className="text-sm text-gray-400">담당자</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-gray-400">AI 챗봇</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">3</div>
                <div className="text-sm text-gray-400">지역</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">즉시</div>
                <div className="text-sm text-gray-400">응답</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {/* Contact Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <ContactCategory
                title="담당자 연락처"
                description="각 지역별 담당자와 직접 연락하실 수 있습니다"
                contacts={contactData.contactPersons}
              />
            </motion.div>

            {/* General Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <ContactInfo
                generalInfo={contactData.generalContactInfo}
                operatingHours={contactData.operatingHours}
              />
            </motion.div>

            {/* Chatbot CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <ChatbotCTA onChatbotClick={handleChatbotClick} />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
