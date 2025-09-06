'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, HelpCircle, MessageCircle, Clock, Users, Bot } from 'lucide-react';
import { faqData, FAQ } from '@/lib/faq-data';
import DropdownNavigation from '@/components/DropdownNavigation';
import { useTheme } from '@/contexts/ThemeContext';

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const filteredFaqs = searchQuery 
    ? faqData.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqData;

  const toggleExpanded = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
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
              자주 묻는 질문
            </h1>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto leading-relaxed mb-8`}>
              예수서원에 대해 궁금한 점들을 확인해보세요.<br />
              빠른 답변을 통해 궁금증을 해결하실 수 있습니다.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <HelpCircle className="w-5 h-5 mr-2 text-blue-400" />
                <span>{faqData.length}개 질문</span>
              </div>
              <div className="flex items-center">
                <MessageCircle className="w-5 h-5 mr-2 text-blue-400" />
                <span>상세 답변</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                <span>빠른 검색</span>
              </div>
              <div className="flex items-center">
                <Bot className="w-5 h-5 mr-2 text-purple-400" />
                <span>AI 챗봇 지원</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* 검색바 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="relative max-w-lg mx-auto">
              <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'} w-5 h-5`} />
              <input
                type="text"
                placeholder="질문을 검색해보세요..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full pl-12 pr-4 py-4 border rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-600 text-white placeholder-gray-400 hover:border-gray-500' 
                    : 'border-gray-300 text-gray-900 placeholder-gray-500 hover:border-gray-400'
                }`}
              />
            </div>
          </motion.div>

          {/* FAQ 카드들 */}
          <div className="space-y-6">
            <AnimatePresence>
              {filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-all duration-300`}
                >
                  <button
                    onClick={() => toggleExpanded(faq.id)}
                    className={`w-full px-6 py-5 text-left flex items-center justify-between transition-all duration-300 group ${
                      isDark 
                        ? 'hover:bg-gradient-to-r hover:from-purple-900/20 hover:to-blue-900/20' 
                        : 'hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50'
                    }`}
                  >
                    <h3 className={`text-lg font-semibold pr-4 ${isDark ? 'text-white group-hover:text-purple-300' : 'text-gray-900 group-hover:text-purple-700'} transition-colors`}>
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown 
                        className={`w-5 h-5 ${isDark ? 'text-gray-400 group-hover:text-purple-400' : 'text-gray-500 group-hover:text-purple-600'} transition-colors`}
                      />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {expandedId === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className={`px-6 pb-5 ${isDark ? 'bg-gradient-to-r from-gray-800/50 to-gray-700/50' : 'bg-gradient-to-r from-gray-50/50 to-white/50'}`}>
                          <div className="pt-2 border-t border-gray-200/50">
                            <p className={`${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed pt-4`}>
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* 검색 결과가 없을 때 */}
          {filteredFaqs.length === 0 && searchQuery && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} text-lg font-semibold mb-2`}>
                  "{searchQuery}"에 대한 검색 결과가 없습니다.
                </p>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  다른 키워드로 검색해보세요.
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
} 