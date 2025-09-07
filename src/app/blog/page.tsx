import React from 'react';
import { sampleBlogPosts } from '@/lib/blog/data';
import { blogMetadata } from '@/lib/seo/metadata';
import { generateBlogStructuredData } from '@/lib/seo/structured-data';
import BlogPageClient from './BlogPageClient';

export const metadata = blogMetadata;

export default function BlogPage() {
  // 구조화 데이터 생성
  const structuredData = generateBlogStructuredData(sampleBlogPosts);

  return (
    <>
      {/* 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <BlogPageClient />
    </>
  );
}