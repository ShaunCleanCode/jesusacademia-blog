'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Eye, Heart, BookOpen, Users, Tag, Bot } from 'lucide-react';
import { sampleBlogPosts, sampleCategories, sampleTags } from '@/lib/blog/data';
import { BlogPost } from '@/lib/blog/types';
import { useTheme } from '@/contexts/ThemeContext';
import DropdownNavigation from '@/components/DropdownNavigation';
import { AdvancedSearch } from '@/components/search/AdvancedSearch';

export default function BlogPage() {
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
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              블로그
            </h1>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto leading-relaxed mb-8`}>
              복음과 지성의 통합을 추구하는 예수서원의 이야기와 통찰을 만나보세요.<br />
              기독교 인문학의 깊이와 현대적 적용을 함께 탐구합니다.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                <span>{sampleBlogPosts.length}개 포스트</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-400" />
                <span>{sampleCategories.length}개 카테고리</span>
              </div>
              <div className="flex items-center">
                <Tag className="w-5 h-5 mr-2 text-blue-400" />
                <span>{sampleTags.length}개 태그</span>
              </div>
              <div className="flex items-center">
                <Bot className="w-5 h-5 mr-2 text-purple-400" />
                <span>AI 검색 지원</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Content */}
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

                </div>
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
                    {post.featuredImage && (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.featuredImage.url}
                          alt={post.featuredImage.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Content */}
                    <div className="p-6">
                      {/* Categories */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {post.categories.slice(0, 2).map(category => (
                          <span
                            key={category.id}
                            className="px-3 py-1 text-xs font-medium rounded-full"
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
                      <h3 className={`text-xl font-bold mb-3 ${isDark ? 'text-white' : 'text-gray-900'} group-hover:text-purple-600 transition-colors`}>
                        {post.title}
                      </h3>

                      {/* Excerpt */}
                      <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 line-clamp-3`}>
                        {post.excerpt}
                      </p>

                      {/* Meta Info */}
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {post.publishedAt.toLocaleDateString('ko-KR')}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readingTime}분
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {post.viewCount}
                          </div>
                          <div className="flex items-center">
                            <Heart className="w-4 h-4 mr-1" />
                            {post.likeCount}
                          </div>
                        </div>
                      </div>

                      {/* Author */}
                      <div className="flex items-center">
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="w-8 h-8 rounded-full mr-3"
                        />
                        <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {post.author.name}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* No Results */}
              {filteredPosts.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                    <Search className={`w-16 h-16 mx-auto mb-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                    <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      검색 결과가 없습니다
                    </h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                      다른 검색어나 필터를 시도해보세요.
                    </p>
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
                  <div className="space-y-3">
                    {sampleBlogPosts
                      .sort((a, b) => b.viewCount - a.viewCount)
                      .slice(0, 5)
                      .map((post, index) => (
                        <div key={post.id} className="flex items-start space-x-3">
                          <span className={`text-sm font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                            {index + 1}
                          </span>
                          <div className="flex-1 min-w-0">
                            <h4 className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'} hover:text-purple-600 transition-colors line-clamp-2`}>
                              {post.title}
                            </h4>
                            <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                              {post.viewCount}회 조회
                            </p>
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
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(selectedCategory === category.slug ? '' : category.slug)}
                        className={`w-full text-left px-3 py-2 rounded-xl transition-all duration-200 ${
                          selectedCategory === category.slug
                            ? 'bg-purple-100 text-purple-700'
                            : isDark
                              ? 'hover:bg-gray-700 text-gray-300'
                              : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <span className="text-sm font-medium">
                          {category.icon} {category.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h3 className={`text-lg font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    태그
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {sampleTags.map(tag => (
                      <button
                        key={tag.id}
                        onClick={() => setSelectedTag(selectedTag === tag.slug ? '' : tag.slug)}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                          selectedTag === tag.slug
                            ? 'text-white'
                            : isDark
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        style={{
                          backgroundColor: selectedTag === tag.slug ? tag.color : undefined
                        }}
                      >
                        {tag.name}
                      </button>
                    ))}
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
