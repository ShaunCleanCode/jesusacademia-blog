import React from 'react';
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/blog/data';
import { BlogPost } from '@/lib/blog/types';
import { generateBlogPostMetadata } from '@/lib/seo/metadata';
import { generateBlogPostStructuredData, generateBreadcrumbStructuredData } from '@/lib/seo/structured-data';
import BlogPostClient from './BlogPostClient';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: '포스트를 찾을 수 없습니다',
      description: '요청하신 포스트가 존재하지 않습니다.',
    };
  }

  return generateBlogPostMetadata(post);
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPostBySlug(params.slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-gray-900">
            포스트를 찾을 수 없습니다
          </h1>
          <p className="text-gray-600 mb-6">
            요청하신 포스트가 존재하지 않거나 삭제되었습니다.
          </p>
          <a
            href="/blog"
            className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
          >
            블로그로 돌아가기
          </a>
        </div>
      </div>
    );
  }

  const relatedPosts = getRelatedPosts(post.id, 3);
  
  // 구조화 데이터 생성
  const structuredData = generateBlogPostStructuredData(post);
  const breadcrumbData = generateBreadcrumbStructuredData([
    { name: '홈', url: 'https://jesusacademia.org' },
    { name: '블로그', url: 'https://jesusacademia.org/blog' },
    { name: post.title, url: `https://jesusacademia.org/blog/${post.slug}` }
  ]);

  return (
    <>
      {/* 구조화 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      
      <BlogPostClient post={post} relatedPosts={relatedPosts} />
    </>
  );
}