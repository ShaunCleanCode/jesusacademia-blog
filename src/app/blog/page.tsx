'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Calendar, Clock, Eye, Heart, BookOpen, Users, Tag, Bot } from 'lucide-react';
import { sampleBlogPosts, sampleCategories, sampleTags } from '@/lib/blog/data';
import { BlogPost, BlogFilters, BlogSortOptions } from '@/lib/blog/types';
import { useTheme } from '@/contexts/ThemeContext';
import DropdownNavigation from '@/components/DropdownNavigation';

export default function BlogPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // 상태 관리
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [sortBy, setSortBy] = useState<BlogSortOptions>({
    field: 'publishedAt',
    order: 'desc'
  });

  // 필터링 및 정렬된 포스트
  const filteredPosts = useMemo(() => {
    let filtered = sampleBlogPosts.filter(post => {
      // 검색어 필터
      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        const matchesSearch = 
          post.title.toLowerCase().includes(searchLower) ||
          post.excerpt.toLowerCase().includes(searchLower) ||
          post.content.toLowerCase().includes(searchLower) ||
          post.author.name.toLowerCase().includes(searchLower) ||
          post.tags.some(tag => tag.name.toLowerCase().includes(searchLower));
        
        if (!matchesSearch) return false;
      }

      // 카테고리 필터
      if (selectedCategory) {
        const hasCategory = post.categories.some(cat => cat.slug === selectedCategory);
        if (!hasCategory) return false;
      }

      // 태그 필터
      if (selectedTag) {
        const hasTag = post.tags.some(tag => tag.slug === selectedTag);
        if (!hasTag) return false;
      }

      return true;
    });

    // 정렬
    filtered.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy.field) {
        case 'publishedAt':
        case 'updatedAt':
          aValue = a[sortBy.field].getTime();
          bValue = b[sortBy.field].getTime();
          break;
        case 'viewCount':
        case 'likeCount':
        case 'readingTime':
          aValue = a[sortBy.field];
          bValue = b[sortBy.field];
          break;
        default:
          return 0;
      }

      if (sortBy.order === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, selectedTag, sortBy]);

  // 필터 초기화
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('');
    setSelectedTag('');
    setSortBy({ field: 'publishedAt', order: 'desc' });
  };

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
              {/* Search and Filters */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mb-8"
              >
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  {/* Search Bar */}
                  <div className="relative mb-6">
                    <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'} w-5 h-5`} />
                    <input
                      type="text"
                      placeholder="포스트 검색..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className={`w-full pl-12 pr-4 py-3 border rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                        isDark 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                          : 'border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                    />
                  </div>

                  {/* Filters */}
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    {/* Category Filter */}
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        카테고리
                      </label>
                      <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className={`w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'border-gray-300 text-gray-900'
                        }`}
                      >
                        <option value="">모든 카테고리</option>
                        {sampleCategories.map(category => (
                          <option key={category.id} value={category.slug}>
                            {category.icon} {category.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Tag Filter */}
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        태그
                      </label>
                      <select
                        value={selectedTag}
                        onChange={(e) => setSelectedTag(e.target.value)}
                        className={`w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'border-gray-300 text-gray-900'
                        }`}
                      >
                        <option value="">모든 태그</option>
                        {sampleTags.map(tag => (
                          <option key={tag.id} value={tag.slug}>
                            {tag.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Sort */}
                    <div>
                      <label className={`block text-sm font-semibold mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        정렬
                      </label>
                      <select
                        value={`${sortBy.field}-${sortBy.order}`}
                        onChange={(e) => {
                          const [field, order] = e.target.value.split('-');
                          setSortBy({ field: field as any, order: order as any });
                        }}
                        className={`w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                          isDark 
                            ? 'bg-gray-700 border-gray-600 text-white' 
                            : 'border-gray-300 text-gray-900'
                        }`}
                      >
                        <option value="publishedAt-desc">최신순</option>
                        <option value="publishedAt-asc">오래된순</option>
                        <option value="viewCount-desc">조회수순</option>
                        <option value="likeCount-desc">좋아요순</option>
                        <option value="readingTime-asc">읽기시간순</option>
                      </select>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  {(searchQuery || selectedCategory || selectedTag) && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                    >
                      필터 초기화
                    </button>
                  )}
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
