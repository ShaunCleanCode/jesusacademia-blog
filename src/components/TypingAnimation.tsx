'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
  repeat?: boolean;
  pauseAtEnd?: number;
}

export default function TypingAnimation({
  text,
  speed = 100,
  delay = 0,
  className = '',
  cursor = true,
  repeat = true,
  pauseAtEnd = 2000
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      // 타이핑 완료
      if (repeat) {
        // 잠시 멈춘 후 다시 시작
        const pauseTimer = setTimeout(() => {
          setIsPaused(true);
          const resetTimer = setTimeout(() => {
            setDisplayText('');
            setCurrentIndex(0);
            setIsPaused(false);
          }, 1000); // 텍스트가 사라지는 시간

          return () => clearTimeout(resetTimer);
        }, pauseAtEnd);

        return () => clearTimeout(pauseTimer);
      }
    }
  }, [currentIndex, text, speed, displayText, repeat, pauseAtEnd, isPaused]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {displayText}
      {cursor && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-4 bg-current ml-1"
        />
      )}
    </motion.span>
  );
} 