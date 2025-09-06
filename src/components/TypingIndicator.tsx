'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

export default function TypingIndicator() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.25, 0.46, 0.45, 0.94] // 구글 스타일 easing
      }}
      className="flex justify-start mb-4"
    >
      <div className="flex items-start space-x-3 max-w-[80%]">
        {/* 아바타 - 타이핑 중일 때는 회전하지 않음 */}
        <div className="flex-shrink-0 w-8 h-8 rounded-2xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center overflow-hidden shadow-lg">
          <Image
            src="/3d_rendered/A_3D-rendered_digital_illustration_depicts_Jesus_C.png"
            alt="예수 그리스도"
            width={32}
            height={32}
            className="w-8 h-8 object-cover"
          />
        </div>
        
        {/* 타이핑 버블 */}
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            duration: 0.3, 
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          className={`px-4 py-3 rounded-2xl shadow-sm ${
            isDark 
              ? 'bg-gray-700 text-gray-100 border border-gray-600' 
              : 'bg-white text-gray-900 border border-gray-200'
          }`}
        >
          {/* 구글 스타일 타이핑 인디케이터 */}
          <div className="flex items-center space-x-1">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  isDark ? 'bg-gray-300' : 'bg-gray-500'
                }`}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 1, 0.4],
                  y: [0, -2, 0],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  transformOrigin: 'center bottom'
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
