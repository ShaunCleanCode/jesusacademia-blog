import React, { useState } from 'react';
import Image from 'next/image';
import { CampImageCollection, ImageMetadata } from '@/lib/image-metadata';
import ImageGallery from './ImageGallery';
import { Users, Camera, Calendar, MapPin } from 'lucide-react';

interface CampGalleryProps {
  campCollection: CampImageCollection;
  className?: string;
}

export default function CampGallery({ campCollection, className = '' }: CampGalleryProps) {
  const [activeTab, setActiveTab] = useState<'group' | 'individuals' | 'activities'>('group');

  const tabs = [
    { key: 'group', label: '단체사진', icon: Users, count: campCollection.images.group.length },
    { key: 'individuals', label: '개인사진', icon: Camera, count: campCollection.images.individuals.length },
    { key: 'activities', label: '활동사진', icon: Camera, count: campCollection.images.activities.length }
  ] as const;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className={`w-full ${className}`}>
      {/* 캠프 정보 헤더 */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {campCollection.title}
            </h2>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {formatDate(campCollection.dates.start)} - {formatDate(campCollection.dates.end)}
              </div>
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                참가자 {campCollection.participants.count}명
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                예수서원 (Oyster Bay, NY)
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-start lg:items-end">
            <span className="inline-block px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-2">
              제{campCollection.campNumber}기
            </span>
            <span className="text-lg font-semibold text-gray-700">
              {campCollection.year}년
            </span>
          </div>
        </div>

        {campCollection.description && (
          <p className="text-gray-600 mt-4 leading-relaxed">
            {campCollection.description}
          </p>
        )}
      </div>

      {/* 탭 네비게이션 */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center px-4 py-3 font-medium text-sm rounded-t-lg transition-colors ${
                activeTab === tab.key
                  ? 'text-primary-600 border-b-2 border-primary-600 bg-primary-50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {tab.label}
              {tab.count > 0 && (
                <span className="ml-2 px-2 py-1 bg-gray-200 text-gray-700 rounded-full text-xs">
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* 이미지 갤러리 */}
      <div className="min-h-[400px]">
        {campCollection.images[activeTab].length > 0 ? (
          <ImageGallery
            images={campCollection.images[activeTab]}
            columns={activeTab === 'individuals' ? 4 : 3}
            showLightbox={true}
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <Camera className="w-16 h-16 text-gray-300 mb-4" />
            <h3 className="text-lg font-medium text-gray-500 mb-2">
              아직 {tabs.find(t => t.key === activeTab)?.label}이 없습니다
            </h3>
            <p className="text-gray-400">
              곧 업로드될 예정입니다.
            </p>
          </div>
        )}
      </div>

      {/* 통계 정보 */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        {tabs.map((tab) => (
          <div key={tab.key} className="bg-gray-50 rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary-600">
              {campCollection.images[tab.key].length}
            </div>
            <div className="text-sm text-gray-600">{tab.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}