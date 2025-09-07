'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Eye, Heart, BookOpen, Users, Tag, Bot } from 'lucide-react';
import { sampleBlogPosts, sampleCategories, sampleTags } from '@/lib/blog/data';
import { BlogPost } from '@/lib/blog/types';
import { useTheme } from '@/contexts/ThemeContext';
import DropdownNavigation from '@/components/DropdownNavigation';
import { AdvancedSearch } from '@/components/search/AdvancedSearch';

export default function BlogPageClient() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // 상태 관리
  const [searchQuery, setSearchQuery] = useState('');
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>(sampleBlogPosts);

  // 고급 검색 결과 처리
  const handleSearchResults = (results: BlogPost[]) => {
    setDisplayedPosts(results);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  // 표시할 포스트 (고급 검색에서 이미 필터링됨)
  const filteredPosts = displayedPosts;

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      <DropdownNavigation />

      {/* Hero Section */}
      <section className={`${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              예수서원 블로그
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              기독교 인문학을 통한 신앙과 지성의 통합을 추구하는 깊이 있는 글들을 만나보세요
            </p>
            
            {/* 통계 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">{sampleBlogPosts.length}</div>
                <div className="text-sm text-gray-400">포스트</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">{sampleCategories.length}</div>
                <div className="text-sm text-gray-400">카테고리</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400">{sampleTags.length}</div>
                <div className="text-sm text-gray-400">태그</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">24/7</div>
                <div className="text-sm text-gray-400">AI 챗봇</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* 고급 검색 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <AdvancedSearch
                  posts={sampleBlogPosts}
                  onSearchResults={handleSearchResults}
                  onSearchChange={handleSearchChange}
                />
              </motion.div>

              {/* Blog Posts Grid */}
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} overflow-hidden hover:shadow-xl transition-all duration-300 group`}
                  >
                    {/* Featured Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.featuredImage?.url || '/images/default-blog-image.jpg'}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                          {post.categories[0]?.name}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-purple-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.publishedAt).toLocaleDateString('ko-KR')}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readingTime}분
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {post.views || 0}
                        </div>
                      </div>

                      {/* Author */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <img
                            src={post.author.avatar?.url || '/images/default-avatar.jpg'}
                            alt={post.author.name}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {post.author.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                            <Heart className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-blue-500 transition-colors">
                            <BookOpen className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map(tag => (
                          <span
                            key={tag.id}
                            className="px-2 py-1 text-xs font-medium rounded-full"
                            style={{ backgroundColor: tag.color + '20', color: tag.color }}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Empty State */}
              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-20"
                >
                  <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-12 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                    <Search className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                    <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      검색 결과가 없습니다
                    </h3>
                    <p className={`text-gray-600 dark:text-gray-400 mb-6`}>
                      다른 검색어나 필터를 시도해보세요
                    </p>
                    <button
                      onClick={() => {
                        setSearchQuery('');
                        setDisplayedPosts(sampleBlogPosts);
                      }}
                      className="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors"
                    >
                      필터 초기화
                    </button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                {/* Popular Posts */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    인기 포스트
                  </h3>
                  <div className="space-y-4">
                    {sampleBlogPosts.slice(0, 5).map((post, index) => (
                      <div key={post.id} className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          index < 3 ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' : 'bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`text-sm font-medium line-clamp-2 hover:text-purple-600 transition-colors cursor-pointer ${
                            isDark ? 'text-white' : 'text-gray-900'
                          }`}>
                            {post.title}
                          </h4>
                          <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mt-1">
                            <Eye className="w-3 h-3 mr-1" />
                            {post.views || 0}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    카테고리
                  </h3>
                  <div className="space-y-2">
                    {sampleCategories.map(category => (
                      <div key={category.id} className="flex items-center justify-between">
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {category.icon} {category.name}
                        </span>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                        }`}>
                          {category.postCount || 0}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    인기 태그
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sampleTags.map(tag => (
                      <span
                        key={tag.id}
                        className="px-3 py-1 text-xs font-medium rounded-full cursor-pointer hover:opacity-80 transition-opacity"
                        style={{ backgroundColor: tag.color + '20', color: tag.color }}
                      >
                        {tag.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI Chatbot CTA */}
                <div className={`${isDark ? 'bg-gradient-to-br from-purple-900 to-blue-900' : 'bg-gradient-to-br from-purple-50 to-blue-50'} rounded-2xl p-6 border ${isDark ? 'border-purple-700' : 'border-purple-200'}`}>
                  <div className="text-center">
                    <Bot className={`w-12 h-12 mx-auto mb-4 ${isDark ? 'text-purple-400' : 'text-purple-600'}`} />
                    <h3 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      AI 챗봇과 대화하기
                    </h3>
                    <p className={`text-sm mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      궁금한 점이 있으시면 언제든 물어보세요
                    </p>
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition-colors text-sm font-medium">
                      챗봇 시작하기
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
