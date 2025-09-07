import React from 'react';
import { contactMetadata } from '@/lib/seo/metadata';
import { generateOrganizationStructuredData } from '@/lib/seo/structured-data';
import ContactPageClient from './ContactPageClient';

export const metadata = contactMetadata;

export default function ContactPage() {
  // 구조화 데이터 생성
  const structuredData = generateOrganizationStructuredData();

  return (
    <>
      {/* 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <ContactPageClient />
    </>
  );
}