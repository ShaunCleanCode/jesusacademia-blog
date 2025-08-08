'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import InteractiveImageCarousel from './InteractiveImageCarousel';
import PrimaryButton from './PrimaryButton';
import { getAllCarouselImages } from '@/lib/carousel-data';

export default function HeroSection() {
  const carouselImages = getAllCarouselImages();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 배경 캐러셀 */}
      <div className="absolute inset-0 z-0">
        <InteractiveImageCarousel
          images={carouselImages}
          autoPlay={true}
          interval={4000}
          showNavigation={false}
          showDots={false}
          className="h-full"
        />
      </div>

      {/* 오버레이 */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* 콘텐츠 */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          {/* 메인 타이틀 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
          >
            예수서원
          </motion.h1>

          {/* 서브타이틀 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl lg:text-3xl font-light text-white/90 max-w-4xl mx-auto leading-relaxed"
          >
            복음과 지성의 통합
          </motion.p>

          {/* 설명 */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            뉴욕에서 시작한 기독교 인문학 아카데미
          </motion.p>

          {/* CTA 버튼들 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <PrimaryButton
              href="/programs"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 transition-colors"
            >
              프로그램 알아보기
            </PrimaryButton>
            <PrimaryButton
              href="/contact"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-gray-900 transition-colors"
            >
              문의하기
            </PrimaryButton>
          </motion.div>

          {/* 추가 정보 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="pt-8 text-white/70 text-sm sm:text-base"
          >
            <p>뉴욕 Oyster Bay에서 깊이 있는 학습과 성찰의 시간을 제공합니다</p>
          </motion.div>
        </motion.div>
      </div>

      {/* 스크롤 인디케이터 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/80"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* 그라데이션 오버레이 (하단) */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent z-10" />
    </section>
  );
} 