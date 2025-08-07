import Image from "next/image";
import Link from "next/link";
import HighlightBox from "@/components/HighlightBox";
import AvatarCard from "@/components/AvatarCard";
import PrimaryButton from "@/components/PrimaryButton";
import { Youtube, Instagram, Globe, Mail, Phone, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              예수서원
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              복음과 지성의 조화로운 통합을 추구하는<br />
              <span className="text-primary-600 font-semibold">기독교 인문학 아카데미</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PrimaryButton href="/blog/introduction" size="lg">
                예수서원 소개 보기
              </PrimaryButton>
              <PrimaryButton href="/programs" variant="outline" size="lg">
                프로그램 둘러보기
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                우리의 사명
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                현대 사회에서 종교와 학문이 분리되어 있는 상황에서, 
                우리는 진정한 지혜가 하나님의 말씀과 인간의 이성을 함께 통해 온다는 믿음을 가지고 있습니다.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                예수서원은 이러한 통합적 사고를 통해 현대인들이 직면한 영적, 지적 도전에 대한 
                해답을 제시하고자 합니다.
              </p>
            </div>
            <div>
              <HighlightBox variant="primary" title="핵심 가치">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 font-semibold mr-2">•</span>
                    복음과 지성의 조화로운 통합
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-semibold mr-2">•</span>
                    깊이 있는 성찰과 학습
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-semibold mr-2">•</span>
                    현대적 도전에 대한 기독교적 응답
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 font-semibold mr-2">•</span>
                    공동체를 통한 성장과 변화
                  </li>
                </ul>
              </HighlightBox>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              설립자 소개
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              깊이 있는 신학적 통찰과 현대 철학에 대한 이해를 바탕으로 
              복음과 지성의 통합을 실천하는 고석희 목사
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <AvatarCard
              name="고석희 목사"
              title="예수서원 원장"
              description="뉴욕에서의 오랜 목회 경험과 학문적 배경을 통해, 현대인들이 직면한 영적, 지적 도전에 대한 해답을 제시합니다. 깊이 있는 신학적 통찰과 현대 철학에 대한 이해를 바탕으로 복음과 지성의 통합을 실천하고 있습니다."
            />
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Oyster Bay
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                뉴욕 롱아일랜드의 Oyster Bay는 아름다운 자연 환경과 함께 
                깊이 있는 성찰의 시간을 제공하는 이상적인 장소입니다.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                이곳에서 우리는 현대 문명의 소음에서 벗어나, 
                하나님의 창조 세계 속에서 진정한 지혜를 탐구할 수 있습니다.
              </p>
            </div>
            <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🌊</div>
                <p className="text-primary-700 font-medium">Oyster Bay 자연 풍경</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              함께 성장하실 분들을 초대합니다
            </h2>
            <p className="text-xl text-primary-100 mb-8 leading-relaxed">
              복음과 지성의 통합에 관심이 있는 모든 분들을 예수서원에 초대합니다. 
              신학도, 지식인, 그리고 진리 탐구에 열정을 가진 분들이 함께 모여, 
              하나님의 말씀과 인간의 이성이 조화를 이루는 아름다운 세계를 만들어가기를 소망합니다.
            </p>
            <PrimaryButton href="/contact" variant="secondary" size="lg">
              문의하기
            </PrimaryButton>
          </div>

          {/* Social Media Links */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <a 
              href="https://www.youtube.com/user/plumhair388/videos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-center">
                <Youtube className="w-12 h-12 text-red-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">YouTube</h3>
                <p className="text-primary-100 text-sm">예수서원 공식 채널</p>
                <p className="text-primary-200 text-xs mt-2">설교영상 및 강의</p>
              </div>
            </a>

            <a 
              href="https://www.instagram.com/jesus_academia/?hl=ko" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-center">
                <Instagram className="w-12 h-12 text-pink-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">Instagram</h3>
                <p className="text-primary-100 text-sm">예수서원 공식 계정</p>
                <p className="text-primary-200 text-xs mt-2">일상 및 소식</p>
              </div>
            </a>

            <a 
              href="https://www.jesusacademia.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="text-center">
                <Globe className="w-12 h-12 text-blue-500 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">공식 홈페이지</h3>
                <p className="text-primary-100 text-sm">예수서원 공식 사이트</p>
                <p className="text-primary-200 text-xs mt-2">강좌일정 및 정보</p>
              </div>
            </a>
          </div>

          {/* Contact Information */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">연락처</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-primary-200 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">전화</h4>
                <a href="tel:+1-516-277-2082" className="text-primary-100 hover:text-white transition-colors">
                  516.277.2082
                </a>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-primary-200 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">이메일</h4>
                <a href="mailto:JesusChristAcademia@gmail.com" className="text-primary-100 hover:text-white transition-colors">
                  JesusChristAcademia@gmail.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-primary-200 mx-auto mb-3" />
                <h4 className="text-white font-semibold mb-2">주소</h4>
                <p className="text-primary-100 text-sm">
                  1330 Wolver Hollow Rd.<br />
                  Oyster Bay, NY 11771
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">예수서원</h3>
              <p className="text-gray-300 mb-4">
                복음과 지성의 통합을 추구하는 기독교 인문학 아카데미
              </p>
              <p className="text-gray-400 text-sm">
                원장: 고석희 목사
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">연락처</h4>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+1-516-277-2082" className="hover:text-white transition-colors">
                    516.277.2082
                  </a>
                </p>
                <p className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:JesusChristAcademia@gmail.com" className="hover:text-white transition-colors">
                    JesusChristAcademia@gmail.com
                  </a>
                </p>
                <p className="flex items-start">
                  <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">
                    1330 Wolver Hollow Rd.<br />
                    Oyster Bay, NY 11771
                  </span>
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">바로가기</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">소개</Link></li>
                <li><Link href="/programs" className="hover:text-white transition-colors">프로그램</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">블로그</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">문의</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">소셜 미디어</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://www.youtube.com/user/plumhair388/videos" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.instagram.com/jesus_academia/?hl=ko" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.jesusacademia.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors"
                  aria-label="공식 홈페이지"
                >
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 예수서원. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
