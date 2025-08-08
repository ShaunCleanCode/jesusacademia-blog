'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, MoreVertical, Info, Send, Paperclip, Smile, X, Calendar, MapPin, Phone, Users, BookOpen, DollarSign } from 'lucide-react';
import Image from 'next/image';
import ChatMessage from './ChatMessage';
import { getChatbotResponse } from '@/lib/chatbot-responses';

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

    // AI 응답 시뮬레이션
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getChatbotResponse(textToSend),
        isUser: false,
        timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
        showLogo: true
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
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
          className="fixed bottom-20 right-6 w-96 h-[600px] bg-white rounded-3xl shadow-2xl flex flex-col z-50 md:w-96 md:h-[600px] sm:w-full sm:h-full sm:bottom-0 sm:right-0 sm:rounded-none border border-gray-100"
          style={{
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-blue-50 rounded-t-3xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center overflow-hidden shadow-lg">
                <Image 
                  src="/3d_rendered/A_3D-rendered_digital_illustration_depicts_Jesus_C.png" 
                  alt="예수 그리스도" 
                  width={40} 
                  height={40} 
                  className="w-10 h-10 object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">예수서원 챗봇</h3>
                <p className="text-sm text-gray-500">24시간 AI 상담</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-1 hover:bg-white/50 rounded-full transition-colors">
                <MoreVertical className="w-4 h-4 text-gray-500" />
              </button>
              <button onClick={onClose} className="p-1 hover:bg-white/50 rounded-full transition-colors">
                <X className="w-4 h-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Welcome Screen */}
          {showWelcome && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-4 border-b border-gray-100"
            >
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-4 border border-purple-100">
                <h4 className="font-semibold text-gray-900 mb-2">예수서원에 오신 것을 환영합니다! ✨</h4>
                <p className="text-sm text-gray-600 mb-3">
                  복음과 지성의 통합을 추구하는 예수서원에 대해 궁금한 점이 있으시면 언제든 물어보세요. 🙏
                </p>
                <button
                  onClick={() => setShowWelcome(false)}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-xl text-sm font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg"
                >
                  24시간 AI 상담 시작하기 🚀
                </button>
              </div>
            </motion.div>
          )}

          {/* Message Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/30">
            {messages.map((message) => (
              <ChatMessage
                key={message.id}
                message={message.text}
                isUser={message.isUser}
                timestamp={message.timestamp}
                showLogo={message.showLogo}
              />
            ))}
            
            {/* Quick Questions */}
            {showQuickQuestions && !showWelcome && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-2"
              >
                <p className="text-sm text-gray-500 text-center mb-3">💡 자주 묻는 질문</p>
                <div className="grid grid-cols-2 gap-2">
                  {quickQuestions.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => handleQuickQuestion(item.question)}
                        className="flex items-center space-x-2 p-3 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-200 text-left shadow-sm"
                      >
                        <Icon className="w-4 h-4 text-purple-600 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">{item.text}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-100 bg-white rounded-b-3xl">
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Paperclip className="w-4 h-4 text-gray-500" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Smile className="w-4 h-4 text-gray-500" />
              </button>
              <div className="flex-1 relative">
                <textarea
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="메시지를 입력하세요..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
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