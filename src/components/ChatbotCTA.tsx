'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Bot, Sparkles, ArrowRight } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface ChatbotCTAProps {
  onChatbotClick: () => void;
  className?: string;
}

export default function ChatbotCTA({ onChatbotClick, className = '' }: ChatbotCTAProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${isDark ? 'bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-indigo-900/20' : 'bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50'} rounded-3xl p-12 border ${isDark ? 'border-purple-500/20' : 'border-purple-200'} relative overflow-hidden`}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 shadow-2xl mb-6 group hover:scale-110 transition-transform duration-300"
            >
              <Bot className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
            </motion.div>
            
            <h2 className={`text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent`}>
              빠른 답변이 필요하신가요?
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
              예수서원 AI 챗봇이 24시간 언제든지 궁금한 점에 대해<br />
              즉시 답변해 드립니다. 지금 바로 시작해보세요!
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={`text-center p-6 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                즉시 답변
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                24시간 언제든지 즉시 답변받으세요
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`text-center p-6 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                스마트 상담
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                AI가 이해하고 정확한 정보를 제공합니다
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className={`text-center p-6 rounded-2xl ${isDark ? 'bg-gray-800/50' : 'bg-white/50'} backdrop-blur-sm`}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
                무료 서비스
              </h3>
              <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                완전 무료로 모든 질문에 답변해드립니다
              </p>
            </motion.div>
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center"
          >
            <button
              onClick={onChatbotClick}
              className={`inline-flex items-center px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl ${
                isDark 
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg hover:shadow-purple-500/25' 
                  : 'bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-lg hover:shadow-purple-500/25'
              }`}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              챗봇과 대화하기
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <p className={`text-sm mt-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
              💡 또는 우측 하단의 챗봇 버튼을 클릭하세요
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
