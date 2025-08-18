'use client';

import Link from 'next/link';
import { Calendar, Clock, Users, MapPin, BookOpen, Heart, Video, MessageCircle, GraduationCap } from 'lucide-react';
import DropdownNavigation from '@/components/DropdownNavigation';
import { useTheme } from '@/contexts/ThemeContext';

export default function ProgramsPage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <DropdownNavigation />
      
      {/* Hero Section */}
      <section className={`${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              캠프 프로그램
            </h1>
            <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto leading-relaxed`}>
              예수 그리스도에 대한 깊이 있는 이해를 위한<br />
              체계적이고 집중적인 학습 프로그램
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                <span>1주일 집중 과정</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2 text-blue-400" />
                <span>소규모 그룹</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-blue-400" />
                <span>20개 강의</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                <span>Oyster Bay 캠퍼스</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
              프로그램 개요
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              철학, 신학, 문학을 아우르는 통합적 접근으로 예수 그리스도를 이해합니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Regular Camp */}
            <div className={`${isDark ? 'bg-gray-800 border-gray-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group`}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>일반 캠프</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
                  1주일간의 집중적인 강의와 토론을 통해 예수 그리스도에 대한 깊이 있는 이해를 도모합니다
                </p>
                <div className={`space-y-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'} mb-8`}>
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2 text-blue-400" />
                    <span>1주일 집중 과정</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Users className="w-4 h-4 mr-2 text-blue-400" />
                    <span>소규모 그룹 (15-20명)</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <BookOpen className="w-4 h-4 mr-2 text-blue-400" />
                    <span>20개 강의 + 토론</span>
                  </div>
                </div>
                <a 
                  href="#weekly-schedule"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 active:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-105"
                >
                  일정 보기
                </a>
              </div>
            </div>

            {/* Special Camp */}
            <div className={`${isDark ? 'bg-gray-800 border-gray-700 hover:border-purple-500' : 'bg-white border-gray-200 hover:border-purple-400'} rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group`}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>특별 캠프</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
                  일반 캠프를 여러 번 경험한 분들을 위한 심화 과정으로, 3주간의 특별한 영적 여정을 제공합니다
                </p>
                <div className={`space-y-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'} mb-8`}>
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2 text-purple-400" />
                    <span>3주 심화 과정</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Users className="w-4 h-4 mr-2 text-purple-400" />
                    <span>선별된 참가자</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <BookOpen className="w-4 h-4 mr-2 text-purple-400" />
                    <span>변동 가능한 일정</span>
                  </div>
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-400'} italic`}>
                  일반 캠프 수료자 대상
                </div>
              </div>
            </div>

            {/* Thursday Q&A Session */}
            <div className={`${isDark ? 'bg-gray-800 border-gray-700 hover:border-green-500' : 'bg-white border-gray-200 hover:border-green-400'} rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 group`}>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>목요일 질문 세션</h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-6 leading-relaxed`}>
                  매주 목요일 밤, Zoom을 통해 예수님을 믿으면서 삶에서 생기는 질문을 편하게 하고 답변하고 토론하는 시간입니다
                </p>
                <div className={`space-y-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-500'} mb-8`}>
                  <div className="flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2 text-green-400" />
                    <span>매주 목요일 밤 (한국 시간)</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Video className="w-4 h-4 mr-2 text-green-400" />
                    <span>Zoom 참여</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Users className="w-4 h-4 mr-2 text-green-400" />
                    <span>모든 참가자 대상</span>
                  </div>
                </div>
                <a 
                  href="#thursday-session"
                  className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 active:bg-green-900 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-105"
                >
                  자세히 보기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Schedule Preview */}
      <section id="weekly-schedule" className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
              일반 캠프 1주일 전체 일정
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              체계적이고 집중적인 학습을 위한 상세한 일정표
            </p>
          </div>
          
          <div className="grid grid-cols-7 gap-4 mb-12">
            {[
              { day: '월', activities: ['⭐ 자유 일정 (~17:00)', '🧭 오리엔테이션 (17:00-18:00)', '🍗 저녁식사 (18:00-19:30)', '👥 교제 시간 (19:30-21:00)'], href: '/programs/schedule?day=mon' },
              { day: '화', activities: ['🛐 경건회 (07:30-08:30)', '🍞 아침식사 (08:30-09:30)', '📚 1차 강의 (09:30-11:00)', '☕ 휴식 (11:00-11:30)', '📚 2차 강의 (11:30-13:00)', '🍽️ 점심식사 (13:00-15:00)', '📚 3차 강의 (15:00-16:30)', '☕ 휴식 (16:30-17:30)', '📚 4차 강의 (17:30-19:00)', '🍗 저녁식사 (19:00-20:30)', '간증 및 자유시간 (20:30~)'], href: '/programs/schedule?day=tue' },
              { day: '수', activities: ['🛐 경건회 (07:30-08:30)', '🍞 아침식사 (08:30-09:30)', '📚 1차 강의 (09:30-11:00)', '☕ 휴식 (11:00-11:30)', '📚 2차 강의 (11:30-13:00)', '🍽️ 점심식사 (13:00-15:00)', '📚 3차 강의 (15:00-16:30)', '☕ 휴식 (16:30-17:30)', '📚 4차 강의 (17:30-19:00)', '🍗 저녁식사 (19:00-20:30)', '간증 및 자유시간 (20:30~)'], href: '/programs/schedule?day=wed' },
              { day: '목', activities: ['🛐 경건회 (07:30-08:30)', '🍞 아침식사 (08:30-09:30)', '📚 1차 강의 (09:30-11:00)', '☕ 휴식 (11:00-11:30)', '📚 2차 강의 (11:30-13:00)', '🍽️ 점심식사 (13:00-15:00)', '📚 3차 강의 (15:00-16:30)', '☕ 휴식 (16:30-17:30)', '📚 4차 강의 (17:30-19:00)', '🍗 저녁식사 (19:00-20:30)', '간증 및 자유시간 (20:30~)'], href: '/programs/schedule?day=thu' },
              { day: '금', activities: ['🛐 경건회 (07:30-08:30)', '🍞 아침식사 (08:30-09:30)', '📚 1차 강의 (09:30-11:00)', '☕ 휴식 (11:00-11:30)', '📚 2차 강의 (11:30-13:00)', '🍽️ 점심식사 (13:00-15:00)', '📚 3차 강의 (15:00-16:30)', '☕ 휴식 (16:30-17:30)', '📚 4차 강의 (17:30-19:00)', '🍗 저녁식사 (19:00-20:30)', '간증 및 자유시간 (20:30~)'], href: '/programs/schedule?day=fri' },
              { day: '토', activities: ['⭐ 자유 일정 (전일)'], href: '/programs/schedule?day=sat' },
              { day: '일', activities: ['🙏 예배 (11:00-13:00)', '🍗 점심식사 (13:00-15:00)', '⭐ 자유 일정 (15:00~)'], href: '/programs/schedule?day=sun' }
            ].map((schedule, index) => (
              <Link key={index} href={schedule.href} className={`${isDark ? 'bg-gray-700 border-gray-600 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} rounded-xl p-4 border transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md`}>
                <h3 className="text-lg font-bold text-white text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-200">
                  {schedule.day}
                </h3>
                <div className="space-y-2">
                  {schedule.activities.map((activity, actIndex) => (
                    <div key={actIndex} className={`text-xs ${isDark ? 'text-gray-300 group-hover:text-gray-200' : 'text-gray-600 group-hover:text-gray-700'} leading-tight transition-colors duration-200`}>
                      {activity}
                    </div>
                  ))}
                </div>
                <div className="mt-3 text-center">
                  <div className="text-xs text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    클릭하여 상세보기 →
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* 상세 일정 보기 버튼 */}
          <div className="text-center">
            <a 
              href="/programs/schedule"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 active:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 transform hover:scale-105"
            >
              📅 전체 상세 일정 보기
            </a>
          </div>
        </div>
      </section>

      {/* Thursday Q&A Session Detail */}
      <section id="thursday-session" className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} rounded-2xl p-12 border`}>
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                목요일 질문 세션
              </h2>
              <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto leading-relaxed`}>
                모든 과거 참가자(청년, 선교사, 목회자, 평신도)를 위한 열린 교제 공간입니다.<br />
                예수님을 믿으면서 삶에서 생기는 질문들을 편하게 나누고 함께 성장하는 시간입니다.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>진행 시간</h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>매주 목요일 밤 (한국 시간 기준)</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Video className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>참여 방법</h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Zoom을 통한 온라인 참여</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>참가 대상</h3>
                    <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>모든 과거 캠프 참가자</p>
                  </div>
                </div>
              </div>
              
              <div className={`${isDark ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'} rounded-xl p-6 border`}>
                <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>Zoom 참여하기</h3>
                <div className={`space-y-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                  <p>예시 링크: <span className="text-blue-400">https://zoom.us/j/123456789</span></p>
                  <p>회의 ID: <span className="text-blue-400">123 456 789</span></p>
                  <p>비밀번호: <span className="text-blue-400">1234</span></p>
                </div>
                <a 
                  href="/faq"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 active:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-700 transition-all duration-200 transform hover:scale-105"
                >
                  참여 문의하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
              프로그램 특징
            </h2>
            <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              철학적 깊이와 영적 성장을 동시에 추구하는 독특한 학습 경험
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "철학적 접근",
                description: "플라톤, 아리스토텔레스, 키에르케고르 등 서양 철학을 통해 예수 그리스도를 이해합니다",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "소규모 그룹",
                description: "15-20명의 소규모 그룹으로 깊이 있는 토론과 개별 상담이 가능합니다",
                color: "from-purple-500 to-purple-600"
              },
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "체계적 커리큘럼",
                description: "1주일간 20개 강의로 예수 그리스도의 다양한 측면을 체계적으로 학습합니다",
                color: "from-green-500 to-green-600"
              }
            ].map((feature, index) => (
              <div key={index} className={`${isDark ? 'bg-gray-700 border-gray-600 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} rounded-xl p-8 border transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 group`}>
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} text-center mb-4`}>
                  {feature.title}
                </h3>
                <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} text-center leading-relaxed`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={`${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'} py-20`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
            영적 성장의 새로운 여정을 시작하세요
          </h2>
          <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-8 leading-relaxed`}>
            철학적 깊이와 영적 성장을 동시에 추구하는 독특한 학습 경험을 통해<br />
            예수 그리스도에 대한 더 깊은 이해를 얻을 수 있습니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#weekly-schedule"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 active:bg-blue-900 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200 transform hover:scale-105"
            >
              일정 자세히 보기
            </a>
            <a 
              href="/faq"
              className={`inline-block px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 ${
                isDark 
                  ? 'bg-gray-700 text-white hover:bg-gray-600 active:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-white border border-gray-300'
              }`}
            >
              문의하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 