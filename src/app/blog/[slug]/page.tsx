'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Eye, Heart, ArrowLeft, Share2, BookOpen, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import { getBlogPostBySlug, getRelatedPosts } from '@/lib/blog/data';
import { BlogPost } from '@/lib/blog/types';
import { useTheme } from '@/contexts/ThemeContext';
import DropdownNavigation from '@/components/DropdownNavigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const router = useRouter();
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundPost = getBlogPostBySlug(params.slug);
    if (foundPost) {
      setPost(foundPost);
      setRelatedPosts(getRelatedPosts(foundPost, 3));
    }
    setIsLoading(false);
  }, [params.slug]);

  if (isLoading) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center`}>
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-white'} flex items-center justify-center`}>
        <div className="text-center">
          <h1 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            포스트를 찾을 수 없습니다
          </h1>
          <p className={`text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8`}>
            요청하신 블로그 포스트가 존재하지 않습니다.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            블로그로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  // Markdown을 HTML로 변환하는 간단한 함수 (실제로는 remark 사용)
  const renderContent = (content: string) => {
    return content
      .replace(/^# (.*$)/gim, '<h1 class="text-4xl font-bold mb-6 text-gray-900 dark:text-white">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-white">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">$1</h3>')
      .replace(/^\- (.*$)/gim, '<li class="ml-4">$1</li>')
      .replace(/\*\*(.*)\*\*/gim, '<strong class="font-bold">$1</strong>')
      .replace(/\*(.*)\*/gim, '<em class="italic">$1</em>')
      .replace(/\n\n/gim, '</p><p class="mb-4">')
      .replace(/^(?!<[h|l])/gim, '<p class="mb-4">')
      .replace(/(<li.*<\/li>)/gim, '<ul class="list-disc ml-6 mb-4">$1</ul>');
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      <DropdownNavigation />

      {/* Hero Section */}
      <section className={`${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'} text-white py-20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Back Button */}
            <button
              onClick={() => router.back()}
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              뒤로 가기
            </button>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-6">
              {post.categories.map(category => (
                <span
                  key={category.id}
                  className="px-4 py-2 text-sm font-medium rounded-full"
                  style={{ 
                    backgroundColor: `${category.color}20`,
                    color: category.color
                  }}
                >
                  {category.icon} {category.name}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-3xl leading-relaxed mb-8`}>
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-400" />
                <span>{post.author.name}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                <span>{post.publishedAt.toLocaleDateString('ko-KR')}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2 text-blue-400" />
                <span>{post.readingTime}분 읽기</span>
              </div>
              <div className="flex items-center">
                <Eye className="w-5 h-5 mr-2 text-blue-400" />
                <span>{post.viewCount}회 조회</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-5 h-5 mr-2 text-blue-400" />
                <span>{post.likeCount}개 좋아요</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-8`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={post.featuredImage.url}
                alt={post.featuredImage.alt}
                className="w-full h-96 object-cover"
              />
              {post.featuredImage.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white text-sm">{post.featuredImage.caption}</p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-20`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className={`prose prose-lg max-w-none ${
                  isDark 
                    ? 'prose-invert prose-gray' 
                    : 'prose-gray'
                }`}
                dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
              />

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <Tag className="w-5 h-5 mr-2 text-purple-600" />
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    태그
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag.id}
                      className="px-3 py-1 text-sm font-medium rounded-full text-white"
                      style={{ backgroundColor: tag.color }}
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Share Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Share2 className="w-5 h-5 mr-2 text-purple-600" />
                    <span className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      공유하기
                    </span>
                  </div>
                  <div className="flex space-x-3">
                    <button className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                      Facebook
                    </button>
                    <button className="p-2 bg-blue-400 text-white rounded-xl hover:bg-blue-500 transition-colors">
                      Twitter
                    </button>
                    <button className="p-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition-colors">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-6"
              >
                {/* Author Card */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center mb-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {post.author.name}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                        작성자
                      </p>
                    </div>
                  </div>
                  <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                    {post.author.bio}
                  </p>
                </div>

                {/* Table of Contents */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center mb-4">
                    <BookOpen className="w-5 h-5 mr-2 text-purple-600" />
                    <h3 className={`text-lg font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      목차
                    </h3>
                  </div>
                  <div className="space-y-2">
                    <a href="#intro" className={`block text-sm ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                      들어가며
                    </a>
                    <a href="#main" className={`block text-sm ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                      본문
                    </a>
                    <a href="#conclusion" className={`block text-sm ${isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
                      결론
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} py-20`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className={`text-3xl font-bold text-center mb-12 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                관련 포스트
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    className={`${isDark ? 'bg-gray-900' : 'bg-white'} rounded-2xl shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} overflow-hidden hover:shadow-xl transition-all duration-300 group`}
                  >
                    {relatedPost.featuredImage && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedPost.featuredImage.url}
                          alt={relatedPost.featuredImage.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-purple-600 transition-colors`}>
                        {relatedPost.title}
                      </h3>
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {relatedPost.publishedAt.toLocaleDateString('ko-KR')}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {relatedPost.readingTime}분
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}