'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, Info, Send, X, Calendar, MapPin, Phone, Users, BookOpen, DollarSign, Bot } from 'lucide-react';
import Image from 'next/image';
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import { getChatbotResponse } from '@/lib/chatbot-responses';
import { useTheme } from '@/contexts/ThemeContext';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: string;
  showLogo?: boolean;
}

interface ChatbotWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

// 빠른 질문 선택을 위한 데이터
const quickQuestions = [
  {
    id: '1',
    text: '운영 시간',
    icon: Calendar,
    question: '예수서원 운영 시간이 어떻게 되나요?'
  },
  {
    id: '2',
    text: '위치',
    icon: MapPin,
    question: '예수서원 위치가 어디인가요?'
  },
  {
    id: '3',
    text: '연락처',
    icon: Phone,
    question: '연락처 알려주세요'
  },
  {
    id: '4',
    text: '참가비',
    icon: DollarSign,
    question: '참가비가 얼마인가요?'
  },
  {
    id: '5',
    text: '프로그램',
    icon: BookOpen,
    question: '2025년 캠프 일정 알려주세요'
  },
  {
    id: '6',
    text: '고석희 목사',
    icon: Users,
    question: '고석희 목사님은 어떤 분인가요?'
  }
];

export default function ChatbotWindow({ isOpen, onClose }: ChatbotWindowProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '안녕하세요! 예수서원에 대해 궁금한 점이 있으시면 언제든 물어보세요. 🙌\n\n예수서원 소개, 위치, 프로그램, 연락처 등에 대해 답변해드릴 수 있습니다. 💬\n\n아래 버튼을 클릭하시면 자주 묻는 질문들을 빠르게 확인하실 수 있어요! ✨',
      isUser: false,
      timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
      showLogo: true
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);
  const [showQuickQuestions, setShowQuickQuestions] = useState(true);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || inputValue;
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      isUser: true,
      timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowQuickQuestions(false);
    setIsTyping(true);

    // AI 응답 시뮬레이션
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getChatbotResponse(textToSend),
        isUser: false,
        timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        showLogo: true
      };
      setIsTyping(false);
      setMessages(prev => [...prev, aiResponse]);
    }, 1500 + Math.random() * 1000); // 1.5-2.5초 랜덤 지연
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className={`fixed bottom-20 right-6 w-96 h-[600px] ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-2xl flex flex-col z-50 md:w-96 md:h-[600px] sm:w-full sm:h-full sm:bottom-0 sm:right-0 sm:rounded-none border ${isDark ? 'border-gray-700' : 'border-gray-100'}`}
          style={{
            boxShadow: isDark 
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)' 
              : '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)'
          }}
        >
          {/* Header */}
          <div className={`flex items-center justify-between p-4 border-b ${isDark ? 'border-gray-700 bg-gradient-to-r from-purple-900/30 to-blue-900/30' : 'border-gray-100 bg-gradient-to-r from-purple-50 to-blue-50'} rounded-t-2xl relative overflow-hidden`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-blue-500 rounded-full blur-2xl"></div>
            </div>
            <div className="flex items-center space-x-3 group relative z-10">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Image 
                  src="/3d_rendered/A_3D-rendered_digital_illustration_depicts_Jesus_C.png" 
                  alt="예수 그리스도" 
                  width={40} 
                  height={40} 
                  className="w-10 h-10 object-cover"
                />
              </div>
              <div>
                <div className="flex items-center space-x-2 mb-1">
                  <h3 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>예수서원 챗봇</h3>
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className={`text-xs font-medium ${isDark ? 'text-green-400' : 'text-green-600'}`}>온라인</span>
                  </div>
                </div>
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>24시간 AI 상담</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 relative z-10">
              <button onClick={onClose} className={`p-1 ${isDark ? 'hover:bg-gray-700' : 'hover:bg-white/50'} rounded-full transition-colors`}>
                <X className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              </button>
            </div>
          </div>

          {/* Welcome Screen */}
          {showWelcome && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-4 ${isDark ? 'bg-gradient-to-br from-purple-900/20 to-blue-900/20' : 'bg-gradient-to-br from-purple-50/50 to-blue-50/50'}`}
            >
              <div className={`${isDark ? 'bg-gradient-to-r from-gray-800/80 to-gray-700/80' : 'bg-gradient-to-r from-white/90 to-white/90'} rounded-2xl p-4 border ${isDark ? 'border-gray-600/50' : 'border-purple-200/50'} backdrop-blur-sm shadow-lg`}>
                <div className="text-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md">
                    <span className="text-lg">✨</span>
                  </div>
                  <h4 className={`text-base font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    예수서원에 오신 것을 환영합니다!
                  </h4>
                  <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                    복음과 지성의 통합을 추구하는 예수서원에 대해<br />
                    궁금한 점이 있으시면 언제든 물어보세요. 🙏
                  </p>
                  <button
                    onClick={() => setShowWelcome(false)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-xl text-xs font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    24시간 AI 상담 시작하기 🚀
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Message Area */}
          <div className={`flex-1 overflow-y-auto p-4 space-y-4 ${isDark ? 'bg-gray-800' : 'bg-gray-50/30'}`}>
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isUser={message.isUser}
                timestamp={message.timestamp}
                showLogo={message.showLogo}
              />
            ))}
            
            {/* Typing Indicator */}
            {isTyping && <TypingIndicator />}
            
            {/* Quick Questions */}
            {showQuickQuestions && !showWelcome && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2"
              >
                <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'} text-center mb-3`}>💡 자주 묻는 질문</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickQuestions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleQuickQuestion(item.question)}
                        className={`flex items-center space-x-2 p-3 ${isDark ? 'bg-gray-700 border-gray-600 hover:border-purple-400 hover:bg-purple-900/20' : 'bg-white border-gray-200 hover:border-purple-300 hover:bg-purple-50'} rounded-2xl transition-all duration-200 text-left shadow-sm`}
                      >
                        <Icon className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        <span className={`text-sm font-medium ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{item.text}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className={`p-4 border-t ${isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-100 bg-white'} rounded-b-2xl`}>
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="예수서원에 대해 궁금한 점을 물어보세요..."
                  className={`w-full px-3 py-2 border ${isDark ? 'border-gray-600 bg-gray-700 text-white placeholder-gray-400' : 'border-gray-300 bg-white text-gray-900 placeholder-gray-500'} rounded-2xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200`}
                  rows={1}
                  style={{ minHeight: '40px', maxHeight: '120px' }}
                />
              </div>
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputValue.trim()}
                className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:from-purple-700 hover:to-blue-700 disabled:from-gray-300 disabled:to-gray-300 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 