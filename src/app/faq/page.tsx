import React from 'react';
import { faqMetadata } from '@/lib/seo/metadata';
import { generateFAQStructuredData } from '@/lib/seo/structured-data';
import FAQPageClient from './FAQPageClient';
import { faqData } from '@/lib/faq-data';

export const metadata = faqMetadata;

export default function FAQPage() {
  // FAQ 구조화 데이터 생성
  const structuredData = generateFAQStructuredData(
    faqData.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }))
  );

  return (
    <>
      {/* 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <FAQPageClient />
    </>
  );
}