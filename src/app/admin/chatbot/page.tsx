'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X, Search } from 'lucide-react';
import { chatbotResponses, ChatbotResponse, getResponsesByCategory } from '@/lib/chatbot-responses';
import DropdownNavigation from '@/components/DropdownNavigation';

export default function ChatbotAdminPage() {
  const [responses, setResponses] = useState<ChatbotResponse[]>(chatbotResponses);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [newResponse, setNewResponse] = useState<Partial<ChatbotResponse>>({
    keywords: [],
    response: '',
    category: 'general'
  });

  const categories = [
    { value: 'all', label: '전체' },
    { value: 'operation', label: '운영' },
    { value: 'schedule', label: '일정' },
    { value: 'cost', label: '비용' },
    { value: 'location', label: '위치' },
    { value: 'contact', label: '연락처' },
    { value: 'founder', label: '설립자' },
    { value: 'general', label: '일반' }
  ];

  const filteredResponses = responses.filter(response => {
    const matchesSearch = searchQuery === '' || 
      response.keywords.some(keyword => keyword.toLowerCase().includes(searchQuery.toLowerCase())) ||
      response.response.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || response.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleEdit = (response: ChatbotResponse) => {
    setEditingId(response.keywords.join(','));
    setNewResponse(response);
  };

  const handleSave = () => {
    if (!newResponse.keywords || !newResponse.response || !newResponse.category) return;

    if (editingId) {
      // 편집 모드
      setResponses(prev => prev.map(r => 
        r.keywords.join(',') === editingId ? newResponse as ChatbotResponse : r
      ));
      setEditingId(null);
    } else {
      // 새로 추가
      setResponses(prev => [...prev, newResponse as ChatbotResponse]);
      setShowAddForm(false);
    }
    
    setNewResponse({ keywords: [], response: '', category: 'general' });
  };

  const handleDelete = (keywords: string[]) => {
    setResponses(prev => prev.filter(r => r.keywords.join(',') !== keywords.join(',')));
  };

  const handleAddKeyword = () => {
    const keyword = prompt('키워드를 입력하세요:');
    if (keyword && newResponse.keywords) {
      setNewResponse(prev => ({
        ...prev,
        keywords: [...(prev.keywords || []), keyword]
      }));
    }
  };

  const handleRemoveKeyword = (index: number) => {
    setNewResponse(prev => ({
      ...prev,
      keywords: prev.keywords?.filter((_, i) => i !== index) || []
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <DropdownNavigation />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">챗봇 응답 관리</h1>
          <p className="text-gray-600">예수서원 챗봇의 응답을 관리하고 수정할 수 있습니다.</p>
        </motion.div>

        {/* 검색 및 필터 */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="키워드나 응답 내용으로 검색..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>새 응답 추가</span>
          </button>
        </div>

        {/* 새 응답 추가 폼 */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">새 응답 추가</h3>
              <button
                onClick={() => setShowAddForm(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">카테고리</label>
                <select
                  value={newResponse.category}
                  onChange={(e) => setNewResponse(prev => ({ ...prev, category: e.target.value as any }))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  {categories.slice(1).map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">키워드</label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {newResponse.keywords?.map((keyword, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-sm flex items-center space-x-1"
                    >
                      <span>{keyword}</span>
                      <button
                        onClick={() => handleRemoveKeyword(index)}
                        className="text-purple-600 hover:text-purple-800"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  ))}
                </div>
                <button
                  onClick={handleAddKeyword}
                  className="text-purple-600 hover:text-purple-800 text-sm"
                >
                  + 키워드 추가
                </button>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">응답</label>
                <textarea
                  value={newResponse.response}
                  onChange={(e) => setNewResponse(prev => ({ ...prev, response: e.target.value }))}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="챗봇이 응답할 내용을 입력하세요..."
                />
              </div>
              
              <div className="flex justify-end space-x-2">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  취소
                </button>
                <button
                  onClick={handleSave}
                  className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  저장
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* 응답 목록 */}
        <div className="space-y-4">
          {filteredResponses.map((response, index) => (
            <motion.div
              key={response.keywords.join(',')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                      {categories.find(c => c.value === response.category)?.label}
                    </span>
                  </div>
                  
                  <div className="mb-3">
                    <h4 className="font-medium text-gray-900 mb-2">키워드:</h4>
                    <div className="flex flex-wrap gap-2">
                      {response.keywords.map((keyword, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">응답:</h4>
                    <p className="text-gray-700 whitespace-pre-line">{response.response}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 ml-4">
                  <button
                    onClick={() => handleEdit(response)}
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(response.keywords)}
                    className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredResponses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">검색 결과가 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
} 