'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, MessageCircle, BookOpen, GraduationCap, Users, Info, Menu, X, ChevronDown, Settings, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const navItems: NavItem[] = [
  {
    name: '홈',
    href: '/',
    icon: Home,
    description: '메인 페이지'
  },
  {
    name: 'FAQ',
    href: '/faq',
    icon: MessageCircle,
    description: '자주 묻는 질문'
  },
  {
    name: '챗봇 관리',
    href: '/admin/chatbot',
    icon: Settings,
    description: '챗봇 응답 관리'
  },
  {
    name: '프로그램',
    href: '/programs',
    icon: BookOpen,
    description: '캠프 프로그램'
  },
  {
    name: '졸업앨범',
    href: '/yearbook',
    icon: GraduationCap,
    description: '기수별 졸업앨범'
  },
  {
    name: '소개',
    href: '/about',
    icon: Users,
    description: '예수서원 소개'
  },
  {
    name: '연락처',
    href: '/contact',
    icon: Info,
    description: '연락처 정보'
  }
];

export default function DropdownNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const handleNavigation = (href: string) => {
    if (pathname === href) {
      setIsOpen(false);
      return;
    }

    setIsNavigating(true);
    setIsOpen(false);

    // body에 navigating 클래스 추가
    document.body.classList.add('navigating');

    // 페이지 전환 애니메이션을 위한 지연
    setTimeout(() => {
      router.push(href);
      
      // 페이지 전환 완료 후 클래스 제거
      setTimeout(() => {
        setIsNavigating(false);
        document.body.classList.remove('navigating');
      }, 100);
    }, 200);
  };

  return (
    <>
      {/* 드롭다운 버튼 */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-200/50 hover:bg-white/95 transition-all duration-200 group"
        >
          <div className="flex items-center space-x-2">
            <Menu className="w-5 h-5 text-gray-700 group-hover:text-primary-600 transition-colors" />
            <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>

        {/* 드롭다운 메뉴 */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200/50 overflow-hidden min-w-64"
            >
              {/* 헤더 */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">예수서원</h3>
                    <p className="text-sm text-gray-600 mt-1">복음과 지성의 통합</p>
                  </div>
                  <button
                    onClick={toggleTheme}
                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                    title={theme === 'dark' ? '라이트모드로 전환' : '다크모드로 전환'}
                  >
                    {theme === 'dark' ? (
                      <Sun className="w-5 h-5 text-amber-500" />
                    ) : (
                      <Moon className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>

              {/* 메뉴 아이템들 */}
              <div className="py-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  
                  return (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.href)}
                      disabled={isNavigating}
                      className={`w-full flex items-center space-x-3 px-4 py-3 transition-all duration-200 ${
                        isActive ? 'bg-purple-50 text-purple-700' : 'text-gray-700 hover:bg-gray-50'
                      } ${isNavigating ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'text-purple-600' : 'text-gray-500'}`} />
                      <div className="flex-1 text-left">
                        <div className={`font-medium ${isActive ? 'text-purple-700' : 'text-gray-900'}`}>
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* 하단 정보 */}
              <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                <div className="text-xs text-gray-500 space-y-1">
                  <p>뉴욕 Oyster Bay</p>
                  <p>고석희 목사</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* 페이지 전환 오버레이 */}
      <AnimatePresence>
        {isNavigating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-white/90 backdrop-blur-sm flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-3 border-purple-600 border-t-transparent rounded-full mx-auto mb-4"
              />
              <p className="text-purple-600 font-medium text-lg">페이지 전환 중...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 오버레이 (드롭다운 외부 클릭 시 닫기) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
} 