'use client';

import React, { useState } from 'react';
import ChatbotFAB from './ChatbotFAB';
import ChatbotWindow from './ChatbotWindow';

interface ChatbotProviderProps {
  children: React.ReactNode;
}

export default function ChatbotProvider({ children }: ChatbotProviderProps) {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  return (
    <>
      {children}
      <ChatbotFAB 
        onClick={() => setIsChatbotOpen(true)}
        isVisible={!isChatbotOpen}
      />
      <ChatbotWindow 
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
      />
    </>
  );
} 