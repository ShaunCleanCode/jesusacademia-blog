'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  MessageCircle, 
  BookOpen, 
  GraduationCap, 
  Users, 
  Info,
  Menu,
  X,
  ChevronLeft
} from 'lucide-react';
import { useNavigation } from '@/contexts/NavigationContext';

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
    description: '예수서원 메인'
  },
  {
    name: '자주 묻는 질문',
    href: '/faq',
    icon: MessageCircle,
    description: 'FAQ & 챗봇'
  },
  {
    name: '블로그',
    href: '/blog',
    icon: BookOpen,
    description: '소식 & 후기'
  },
  {
    name: '졸업앨범',
    href: '/yearbook',
    icon: GraduationCap,
    description: '기수별 앨범'
  },
  {
    name: '프로그램',
    href: '/programs',
    icon: Users,
    description: '캠프 & 강의'
  },
  {
    name: '소개',
    href: '/about',
    icon: Info,
    description: '예수서원 소개'
  }
];

export default function SideNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { isExpanded, setIsExpanded } = useNavigation();
  const pathname = usePathname();

  return (
    <>
      {/* 모바일 메뉴 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-gray-200"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* 데스크톱 네비게이션 */}
      <div className={`hidden lg:block fixed left-0 top-0 h-full transition-all duration-300 ease-in-out z-40 ${
        isExpanded ? 'w-64' : 'w-16'
      } bg-gradient-to-b from-white/95 to-white/90 backdrop-blur-sm border-r border-gray-200/50`}>
        
        {/* 토글 버튼 */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`absolute top-4 transition-all duration-300 ${
            isExpanded ? 'right-4' : 'right-2'
          } bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-gray-200 hover:bg-white transition-colors`}
        >
          <ChevronLeft className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        <div className={`p-6 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
          {/* 로고 */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900">예수서원</h2>
            <p className="text-sm text-gray-600 mt-1">복음과 지성의 통합</p>
          </div>

          {/* 네비게이션 아이템들 */}
          <nav className="space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              
              return (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ x: 8 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative p-4 rounded-xl transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'bg-primary-600 text-white shadow-lg' 
                        : 'hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-primary-600'}`} />
                      <div className={`transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="font-medium">{item.name}</div>
                        <div className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                          {item.description}
                        </div>
                      </div>
                    </div>
                    
                    {/* 활성 상태 인디케이터 */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </motion.div>
                </Link>
              );
            })}
          </nav>
          
          {/* 접힌 상태에서 아이콘만 보이도록 */}
          {!isExpanded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                
                return (
                  <Link key={item.name} href={item.href}>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 rounded-xl transition-all duration-200 cursor-pointer ${
                        isActive 
                          ? 'bg-primary-600 text-white shadow-lg' 
                          : 'hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.div>
                  </Link>
                );
              })}
            </div>
          )}

          {/* 하단 정보 */}
          <div className={`absolute bottom-6 left-6 right-6 transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-xs text-gray-500 space-y-1">
              <p>뉴욕 Oyster Bay</p>
              <p>고석희 목사</p>
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 오버레이 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* 모바일 네비게이션 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 lg:hidden"
          >
            <div className="p-6">
              {/* 헤더 */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">예수서원</h2>
                  <p className="text-sm text-gray-600 mt-1">복음과 지성의 통합</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* 네비게이션 아이템들 */}
              <nav className="space-y-2">
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  const Icon = item.icon;
                  
                  return (
                    <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                      <motion.div
                        whileHover={{ x: 8 }}
                        whileTap={{ scale: 0.95 }}
                        className={`group relative p-4 rounded-xl transition-all duration-200 cursor-pointer ${
                          isActive 
                            ? 'bg-primary-600 text-white shadow-lg' 
                            : 'hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-primary-600'}`} />
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className={`text-xs ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                              {item.description}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 