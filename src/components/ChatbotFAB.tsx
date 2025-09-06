'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

interface ChatbotFABProps {
  onClick: () => void;
  isVisible: boolean;
}

export default function ChatbotFAB({ onClick, isVisible }: ChatbotFABProps) {
  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: isVisible ? 1 : 0, 
        opacity: isVisible ? 1 : 0 
      }}
      whileHover={{ 
        scale: 1.1,
        rotate: [0, -10, 10, 0],
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-2xl shadow-2xl flex items-center justify-center transition-all duration-300 z-50 group"
      data-chatbot-fab
      style={{
        boxShadow: '0 8px 25px rgba(147, 51, 234, 0.4), 0 4px 12px rgba(59, 130, 246, 0.3)'
      }}
    >
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity, 
          repeatDelay: 3 
        }}
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </motion.div>
    </motion.button>
  );
} 