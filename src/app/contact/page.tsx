'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Users, MessageCircle, Globe, Bot } from 'lucide-react';
import { contactData } from '@/lib/contact-data';
import ContactCategory from '@/components/ContactCategory';
import ContactInfo from '@/components/ContactInfo';
import ChatbotCTA from '@/components/ChatbotCTA';
import DropdownNavigation from '@/components/DropdownNavigation';
import { useTheme } from '@/contexts/ThemeContext';

export default function ContactPage() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              연락처
            </h1>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto leading-relaxed mb-8`}>
              예수서원과 함께하는 여정에 문의사항이 있으시면 언제든 연락해 주세요.<br />
              각 분야별 전문 담당자가 친절하게 안내해 드립니다.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <span>6명 담당자</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2 text-blue-400" />
                <span>2개국 서비스</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-blue-400" />
                <span>2개 분야</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                <span>24시간 응답</span>
              </div>
              <div className="flex items-center">
                <Bot className="w-5 h-5 mr-2 text-purple-400" />
                <span>AI 챗봇 지원</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Categories */}
      <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {contactData.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={index > 0 ? 'mt-20' : ''}
            >
              <ContactCategory category={category} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* General Contact Info */}
      <section className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ContactInfo />
          </motion.div>
        </div>
      </section>

      {/* Chatbot CTA Section */}
      <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <ChatbotCTA onChatbotClick={handleChatbotClick} />
          </motion.div>
        </div>
      </section>

    </div>
  );
}
