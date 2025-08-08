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
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-purple-600 hover:bg-purple-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 z-50"
      style={{
        boxShadow: '0 4px 12px rgba(147, 51, 234, 0.3)'
      }}
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  );
} 