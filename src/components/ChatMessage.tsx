'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: string;
  showLogo?: boolean;
}

export default function ChatMessage({ message, isUser, timestamp, showLogo = false }: ChatMessageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
    >
      <div className={`flex items-start space-x-2 max-w-[80%] ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
        {!isUser && showLogo && (
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center overflow-hidden shadow-lg">
            <Image 
              src="/3d_rendered/A_3D-rendered_digital_illustration_depicts_Jesus_C.png" 
              alt="예수 그리스도" 
              width={32} 
              height={32} 
              className="w-8 h-8 object-cover"
            />
          </div>
        )}
        <div className={`px-4 py-3 rounded-2xl shadow-sm ${
          isUser 
            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' 
            : 'bg-white text-gray-900 border border-gray-200'
        }`}>
          <p className="text-sm leading-relaxed whitespace-pre-line">{message}</p>
          {timestamp && (
            <p className={`text-xs mt-1 ${isUser ? 'text-blue-100' : 'text-gray-500'}`}>
              {timestamp}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
} 