'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, X, Calendar, User, Tag, FolderOpen, SortAsc, SortDesc, TrendingUp } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { SearchFilters, defaultSearchFilters } from '@/lib/search/fuse-config';
import { searchService } from '@/lib/search/search-service';
import { BlogPost } from '@/lib/blog/types';

interface AdvancedSearchProps {
  posts: BlogPost[];
  onSearchResults: (results: BlogPost[]) => void;
  onSearchChange: (query: string) => void;
  className?: string;
}

export const AdvancedSearch: React.FC<AdvancedSearchProps> = ({
  posts,
  onSearchResults,
  onSearchChange,
  className = ''
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  const [filters, setFilters] = useState<SearchFilters>(defaultSearchFilters);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchStats, setSearchStats] = useState({
    totalPosts: 0,
    totalCategories: 0,
    totalTags: 0,
    totalAuthors: 0
  });

  // 검색 서비스 초기화
  useEffect(() => {
    searchService.initialize(posts);
    setSearchStats(searchService.getSearchStats());
  }, [posts]);

  // 검색 실행
  const performSearch = useCallback(() => {
    const results = searchService.advancedSearch(filters, 50);
    onSearchResults(results);
    onSearchChange(filters.query);
  }, [filters, onSearchResults, onSearchChange]);

  // 검색어 변경 시 자동완성
  useEffect(() => {
    if (filters.query.trim()) {
      const newSuggestions = searchService.getSuggestions(filters.query);
      setSuggestions(newSuggestions);
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [filters.query]);

  // 검색 실행 (디바운스)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      performSearch();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [performSearch]);

  const handleInputChange = (value: string) => {
    setFilters(prev => ({ ...prev, query: value }));
  };

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setFilters(prev => ({ ...prev, query: suggestion }));
    setShowSuggestions(false);
  };

  const clearFilters = () => {
    setFilters(defaultSearchFilters);
  };

  const toggleSortOrder = () => {
    setFilters(prev => ({
      ...prev,
      sortOrder: prev.sortOrder === 'asc' ? 'desc' : 'asc'
    }));
  };

  // 고유한 카테고리, 태그, 작성자 추출
  const uniqueCategories = Array.from(
    new Set(posts.flatMap(p => p.categories.map(c => c.id)))
  ).map(id => posts.flatMap(p => p.categories).find(c => c.id === id)!);

  const uniqueTags = Array.from(
    new Set(posts.flatMap(p => p.tags.map(t => t.id)))
  ).map(id => posts.flatMap(p => p.tags).find(t => t.id === id)!);

  const uniqueAuthors = Array.from(
    new Set(posts.map(p => p.author?.id).filter(Boolean))
  ).map(id => posts.find(p => p.author?.id === id)?.author).filter(Boolean);

  return (
    <div className={`relative ${className}`}>
      {/* 검색 입력 */}
      <div className="relative">
        <div className={`relative ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center">
            <Search className={`absolute left-4 w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
            <input
              type="text"
              value={filters.query}
              onChange={(e) => handleInputChange(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              placeholder="포스트, 작성자, 태그로 검색..."
              className={`w-full pl-12 pr-4 py-4 text-lg border-0 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-200 ${
                isDark
                  ? 'bg-gray-800 text-white placeholder-gray-400'
                  : 'bg-white text-gray-900 placeholder-gray-500'
              }`}
            />
            <div className="flex items-center space-x-2 pr-4">
              <button
                onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                className={`p-2 rounded-xl transition-colors ${
                  isAdvancedOpen
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300'
                    : isDark
                      ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Filter className="w-5 h-5" />
              </button>
              {filters.query && (
                <button
                  onClick={() => handleInputChange('')}
                  className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 자동완성 제안 */}
        <AnimatePresence>
          {showSuggestions && suggestions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`absolute top-full left-0 right-0 mt-2 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl border ${isDark ? 'border-gray-700' : 'border-gray-200'} z-50`}
            >
              <div className="p-2">
                <div className="flex items-center px-3 py-2 text-sm font-semibold text-gray-500 dark:text-gray-400">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  추천 검색어
                </div>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className={`w-full text-left px-3 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 고급 검색 필터 */}
      <AnimatePresence>
        {isAdvancedOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`mt-4 ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} overflow-hidden`}
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  고급 검색 필터
                </h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-purple-600 hover:text-purple-700 font-medium"
                >
                  필터 초기화
                </button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 카테고리 필터 */}
                <div>
                  <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <FolderOpen className="w-4 h-4 inline mr-2" />
                    카테고리
                  </label>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {uniqueCategories.map(category => (
                      <label
                        key={category.id}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={filters.categories.includes(category.id)}
                          onChange={(e) => {
                            const newCategories = e.target.checked
                              ? [...filters.categories, category.id]
                              : filters.categories.filter(id => id !== category.id);
                            handleFilterChange('categories', newCategories);
                          }}
                          className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                        />
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {category.icon} {category.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 태그 필터 */}
                <div>
                  <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Tag className="w-4 h-4 inline mr-2" />
                    태그
                  </label>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {uniqueTags.map(tag => (
                      <label
                        key={tag.id}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={filters.tags.includes(tag.id)}
                          onChange={(e) => {
                            const newTags = e.target.checked
                              ? [...filters.tags, tag.id]
                              : filters.tags.filter(id => id !== tag.id);
                            handleFilterChange('tags', newTags);
                          }}
                          className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                        />
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {tag.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 작성자 필터 */}
                <div>
                  <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <User className="w-4 h-4 inline mr-2" />
                    작성자
                  </label>
                  <div className="space-y-2 max-h-32 overflow-y-auto">
                    {uniqueAuthors.map(author => (
                      <label
                        key={author.id}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={filters.authors.includes(author.id)}
                          onChange={(e) => {
                            const newAuthors = e.target.checked
                              ? [...filters.authors, author.id]
                              : filters.authors.filter(id => id !== author.id);
                            handleFilterChange('authors', newAuthors);
                          }}
                          className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                        />
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {author.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* 정렬 옵션 */}
                <div>
                  <label className={`block text-sm font-medium mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    <SortAsc className="w-4 h-4 inline mr-2" />
                    정렬
                  </label>
                  <div className="space-y-3">
                    <select
                      value={filters.sortBy}
                      onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        isDark
                          ? 'bg-gray-700 border-gray-600 text-white'
                          : 'border-gray-300 text-gray-900'
                      }`}
                    >
                      <option value="relevance">관련도</option>
                      <option value="date">날짜</option>
                      <option value="title">제목</option>
                      <option value="views">조회수</option>
                    </select>
                    <button
                      onClick={toggleSortOrder}
                      className={`w-full flex items-center justify-center px-3 py-2 border rounded-xl transition-colors ${
                        isDark
                          ? 'border-gray-600 text-gray-300 hover:bg-gray-700'
                          : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {filters.sortOrder === 'asc' ? (
                        <SortAsc className="w-4 h-4 mr-2" />
                      ) : (
                        <SortDesc className="w-4 h-4 mr-2" />
                      )}
                      {filters.sortOrder === 'asc' ? '오름차순' : '내림차순'}
                    </button>
                  </div>
                </div>
              </div>

              {/* 검색 통계 */}
              <div className={`mt-6 pt-6 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {searchStats.totalPosts}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      총 포스트
                    </div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {searchStats.totalCategories}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      카테고리
                    </div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {searchStats.totalTags}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      태그
                    </div>
                  </div>
                  <div>
                    <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {searchStats.totalAuthors}
                    </div>
                    <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      작성자
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
