'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Search, MessageCircle, X } from 'lucide-react';
import { faqData, FAQ } from '@/lib/faq-data';
import DropdownNavigation from '@/components/DropdownNavigation';

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <DropdownNavigation />
      
      {/* 메인 콘텐츠 */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            자주 묻는 질문
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            예수서원에 대해 궁금한 점들을 확인해보세요
          </p>
        </motion.div>

        {/* 검색바 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="질문을 검색해보세요..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </motion.div>

        {/* FAQ 카드들 */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleExpanded(faq.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform ${
                      expandedId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
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
            className="text-center py-12"
          >
            <p className="text-gray-500 text-lg">
              "{searchQuery}"에 대한 검색 결과가 없습니다.
            </p>
            <p className="text-gray-400 mt-2">
              다른 키워드로 검색해보세요.
            </p>
          </motion.div>
        )}
      </div>

      {/* 챗봇 버튼 */}
      <button
        onClick={() => setShowChatbot(true)}
        className="fixed bottom-6 right-6 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-colors z-30"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* 챗봇 모달 */}
      <AnimatePresence>
        {showChatbot && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowChatbot(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[600px] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 챗봇 헤더 */}
              <div className="bg-primary-600 text-white p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <h3 className="font-semibold">예수서원 챗봇</h3>
                    <p className="text-sm text-primary-100">궁금한 점을 물어보세요</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChatbot(false)}
                  className="p-1 hover:bg-primary-700 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* 챗봇 콘텐츠 */}
              <div className="p-4">
                <div className="bg-gray-100 rounded-lg p-3 mb-4">
                  <p className="text-sm text-gray-700">
                    안녕하세요! 예수서원에 대해 궁금한 점이 있으시면 언제든 물어보세요. 
                    예수서원 소개, 위치, 프로그램, 연락처 등에 대해 답변해드릴 수 있습니다.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <p className="text-sm text-gray-600 font-medium">자주 묻는 질문:</p>
                  {faqData.slice(0, 3).map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => {
                        // 여기에 챗봇 로직 추가 예정
                        alert(`질문: ${faq.question}\n\n답변: ${faq.answer}`);
                      }}
                      className="block w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-sm"
                    >
                      {faq.question}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 