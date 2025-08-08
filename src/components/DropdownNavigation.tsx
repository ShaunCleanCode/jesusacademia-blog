'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, MessageCircle, BookOpen, GraduationCap, Users, Info, Menu, X, ChevronDown, Settings } from 'lucide-react';

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
  const pathname = usePathname();

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
                <h3 className="text-lg font-semibold text-gray-900">예수서원</h3>
                <p className="text-sm text-gray-600 mt-1">복음과 지성의 통합</p>
              </div>

              {/* 메뉴 아이템들 */}
              <div className="py-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                        isActive ? 'bg-purple-50 text-purple-700' : 'text-gray-700'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'text-purple-600' : 'text-gray-500'}`} />
                      <div className="flex-1">
                        <div className={`font-medium ${isActive ? 'text-purple-700' : 'text-gray-900'}`}>
                          {item.name}
                        </div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                      </div>
                    </Link>
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