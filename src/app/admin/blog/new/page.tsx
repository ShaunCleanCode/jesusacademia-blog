'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Save, Eye, Send, ArrowLeft, Image as ImageIcon, Tag, FolderOpen, Calendar, User } from 'lucide-react';
import { BlogEditor } from '@/components/editor/BlogEditor';
import { sampleCategories, sampleTags, sampleAuthors } from '@/lib/blog/data';
import { useTheme } from '@/contexts/ThemeContext';
import DropdownNavigation from '@/components/DropdownNavigation';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function NewBlogPostPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const router = useRouter();
  
  // 폼 상태
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    authorId: '1',
    categoryIds: [] as string[],
    tagIds: [] as string[],
    featuredImage: null as File | null,
    status: 'draft' as 'draft' | 'published',
    publishedAt: new Date().toISOString().split('T')[0],
    seo: {
      title: '',
      description: '',
      keywords: [] as string[],
    }
  });

  const [isPreview, setIsPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNestedInputChange = (parentField: string, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [parentField]: {
        ...prev[parentField as keyof typeof prev],
        [field]: value
      }
    }));
  };

  const handleCategoryToggle = (categoryId: string) => {
    setFormData(prev => ({
      ...prev,
      categoryIds: prev.categoryIds.includes(categoryId)
        ? prev.categoryIds.filter(id => id !== categoryId)
        : [...prev.categoryIds, categoryId]
    }));
  };

  const handleTagToggle = (tagId: string) => {
    setFormData(prev => ({
      ...prev,
      tagIds: prev.tagIds.includes(tagId)
        ? prev.tagIds.filter(id => id !== tagId)
        : [...prev.tagIds, tagId]
    }));
  };

  const handleSave = async (status: 'draft' | 'published') => {
    setIsSaving(true);
    
    try {
      // 실제 구현에서는 API 호출
      console.log('Saving post:', { ...formData, status });
      
      // 임시로 성공 처리
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 성공 후 블로그 페이지로 이동
      router.push('/blog');
    } catch (error) {
      console.error('Save failed:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleImageUpload = (file: File) => {
    setFormData(prev => ({
      ...prev,
      featuredImage: file
    }));
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
      <DropdownNavigation />

      {/* Header */}
      <section className={`${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  블로그로 돌아가기
                </Link>
                <div className="w-px h-6 bg-gray-600"></div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  새 포스트 작성
                </h1>
              </div>
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setIsPreview(!isPreview)}
                  className={`inline-flex items-center px-4 py-2 rounded-xl font-medium transition-colors ${
                    isPreview
                      ? 'bg-purple-600 text-white'
                      : isDark
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-white text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {isPreview ? '편집' : '미리보기'}
                </button>
                
                <button
                  onClick={() => handleSave('draft')}
                  disabled={isSaving}
                  className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-xl hover:bg-gray-700 disabled:opacity-50 transition-colors"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {isSaving ? '저장 중...' : '임시저장'}
                </button>
                
                <button
                  onClick={() => handleSave('published')}
                  disabled={isSaving}
                  className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-xl hover:bg-purple-700 disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSaving ? '발행 중...' : '발행'}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-8`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Editor */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="space-y-6"
              >
                {/* Title */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <label className={`block text-sm font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    제목
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    placeholder="포스트 제목을 입력하세요..."
                    className={`w-full px-4 py-3 text-xl font-semibold border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>

                {/* Excerpt */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <label className={`block text-sm font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    요약
                  </label>
                  <textarea
                    value={formData.excerpt}
                    onChange={(e) => handleInputChange('excerpt', e.target.value)}
                    placeholder="포스트 요약을 입력하세요..."
                    rows={3}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                        : 'border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                  />
                </div>

                {/* Content Editor */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <label className={`block text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      내용
                    </label>
                  </div>
                  
                  {isPreview ? (
                    <div className="p-6">
                      <div className="prose prose-lg max-w-none dark:prose-invert">
                        <h1>{formData.title}</h1>
                        <p className="text-gray-600 dark:text-gray-400">{formData.excerpt}</p>
                        <div dangerouslySetInnerHTML={{ __html: formData.content }} />
                      </div>
                    </div>
                  ) : (
                    <BlogEditor
                      initialContent={formData.content}
                      onContentChange={(content) => handleInputChange('content', content)}
                      placeholder="포스트 내용을 작성해주세요..."
                    />
                  )}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                {/* Author */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center mb-4">
                    <User className="w-5 h-5 mr-2 text-purple-600" />
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      작성자
                    </h3>
                  </div>
                  <select
                    value={formData.authorId}
                    onChange={(e) => handleInputChange('authorId', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'border-gray-300 text-gray-900'
                    }`}
                  >
                    {sampleAuthors.map(author => (
                      <option key={author.id} value={author.id}>
                        {author.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Categories */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center mb-4">
                    <FolderOpen className="w-5 h-5 mr-2 text-purple-600" />
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      카테고리
                    </h3>
                  </div>
                  <div className="space-y-2">
                    {sampleCategories.map(category => (
                      <label
                        key={category.id}
                        className="flex items-center space-x-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={formData.categoryIds.includes(category.id)}
                          onChange={() => handleCategoryToggle(category.id)}
                          className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                        />
                        <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {category.icon} {category.name}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center mb-4">
                    <Tag className="w-5 h-5 mr-2 text-purple-600" />
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      태그
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sampleTags.map(tag => (
                      <button
                        key={tag.id}
                        onClick={() => handleTagToggle(tag.id)}
                        className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                          formData.tagIds.includes(tag.id)
                            ? 'text-white'
                            : isDark
                              ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                        style={{
                          backgroundColor: formData.tagIds.includes(tag.id) ? tag.color : undefined
                        }}
                      >
                        {tag.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Featured Image */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center mb-4">
                    <ImageIcon className="w-5 h-5 mr-2 text-purple-600" />
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      대표 이미지
                    </h3>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleImageUpload(file);
                      }}
                      className="hidden"
                      id="featured-image"
                    />
                    <label
                      htmlFor="featured-image"
                      className={`block w-full p-4 border-2 border-dashed rounded-xl text-center cursor-pointer transition-colors ${
                        isDark
                          ? 'border-gray-600 hover:border-gray-500 text-gray-400'
                          : 'border-gray-300 hover:border-gray-400 text-gray-600'
                      }`}
                    >
                      <ImageIcon className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm">이미지 선택</span>
                    </label>
                    {formData.featuredImage && (
                      <div className="mt-2">
                        <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                          {formData.featuredImage.name}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Publish Date */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <div className="flex items-center mb-4">
                    <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      발행일
                    </h3>
                  </div>
                  <input
                    type="date"
                    value={formData.publishedAt}
                    onChange={(e) => handleInputChange('publishedAt', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                      isDark
                        ? 'bg-gray-700 border-gray-600 text-white'
                        : 'border-gray-300 text-gray-900'
                    }`}
                  />
                </div>

                {/* SEO */}
                <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-6 shadow-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    SEO 설정
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        SEO 제목
                      </label>
                      <input
                        type="text"
                        value={formData.seo.title}
                        onChange={(e) => handleNestedInputChange('seo', 'title', e.target.value)}
                        placeholder="검색엔진용 제목"
                        className={`w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                          isDark
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                            : 'border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                      />
                    </div>
                    <div>
                      <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                        SEO 설명
                      </label>
                      <textarea
                        value={formData.seo.description}
                        onChange={(e) => handleNestedInputChange('seo', 'description', e.target.value)}
                        placeholder="검색엔진용 설명"
                        rows={3}
                        className={`w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none ${
                          isDark
                            ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                            : 'border-gray-300 text-gray-900 placeholder-gray-500'
                        }`}
                      />
                    </div>
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
