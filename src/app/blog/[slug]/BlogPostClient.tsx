'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Eye, Heart, ArrowLeft, Share2, BookOpen, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { BlogPost } from '@/lib/blog/types';
import { useTheme } from '@/contexts/ThemeContext';
import DropdownNavigation from '@/components/DropdownNavigation';
import { MarkdownRenderer, TableOfContents } from '@/lib/markdown/renderer';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface BlogPostClientProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export default function BlogPostClient({ post, relatedPosts }: BlogPostClientProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const router = useRouter();
  
  const [toc, setToc] = useState<Array<{id: string, text: string, level: number}>>([]);

  useEffect(() => {
    // 간단한 TOC 생성 (실제로는 generateTOC 함수 사용)
    const lines = post.content.split('\n');
    const tocItems: Array<{id: string, text: string, level: number}> = [];
    
    lines.forEach(line => {
      const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const text = headingMatch[2].trim();
        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .trim();
        
        tocItems.push({ id, text, level });
      }
    });
    
    setToc(tocItems);
  }, [post]);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      <DropdownNavigation />

      {/* Hero Section */}
      <section className={`${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'} text-white py-20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                블로그로 돌아가기
              </Link>
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-white transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {post.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {post.author.name}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(post.publishedAt).toLocaleDateString('ko-KR')}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {post.readingTime}분 읽기
                </div>
                <div className="flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  {post.views || 0} 조회
                </div>
              </div>

              {/* Categories and Tags */}
              <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
                {post.categories.map(category => (
                  <span
                    key={category.id}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium"
                  >
                    {category.icon} {category.name}
                  </span>
                ))}
                {post.tags.map(tag => (
                  <span
                    key={tag.id}
                    className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs"
                    style={{ color: tag.color }}
                  >
                    #{tag.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <MarkdownRenderer 
                  content={post.content}
                  className={`${isDark ? 'prose-invert' : ''}`}
                />
              </motion.article>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  태그
                </h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag.id}
                      className="px-3 py-1 text-sm font-medium rounded-full"
                      style={{ backgroundColor: tag.color + '20', color: tag.color }}
                    >
                      #{tag.name}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Social Sharing */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  공유하기
                </h3>
                <div className="flex items-center space-x-4">
                  <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                    <Share2 className="w-4 h-4 mr-2" />
                    페이스북
                  </button>
                  <button className="flex items-center px-4 py-2 bg-sky-500 text-white rounded-xl hover:bg-sky-600 transition-colors">
                    <Share2 className="w-4 h-4 mr-2" />
                    트위터
                  </button>
                  <button className="flex items-center px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
                    <Share2 className="w-4 h-4 mr-2" />
                    카카오톡
                  </button>
                </div>
              </motion.div>

              {/* Author Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`mt-12 ${isDark ? 'bg-gray-800' : 'bg-gray-50'} rounded-2xl p-8`}
              >
                <div className="flex items-start space-x-6">
                  <img
                    src={post.author.avatar?.url || '/images/default-avatar.jpg'}
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {post.author.name}
                    </h3>
                    <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                      {post.author.bio}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mt-12"
                >
                  <h3 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    관련 포스트
                  </h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedPosts.map((relatedPost, index) => (
                      <motion.div
                        key={relatedPost.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} overflow-hidden hover:shadow-xl transition-all duration-300 group`}
                      >
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={relatedPost.featuredImage?.url || '/images/default-blog-image.jpg'}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h4 className={`text-lg font-bold mb-3 line-clamp-2 group-hover:text-purple-600 transition-colors ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            {relatedPost.title}
                          </h4>
                          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} line-clamp-3`}>
                            {relatedPost.excerpt}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-6"
              >
                {/* Table of Contents */}
                <TableOfContents 
                  toc={toc}
                  className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
