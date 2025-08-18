'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Calendar, Clock, MapPin, BookOpen, Users, Filter, Video, MessageCircle } from 'lucide-react';
import DropdownNavigation from '@/components/DropdownNavigation';
import { useTheme } from '@/contexts/ThemeContext';

// 1주일 전체 일정 데이터
const weeklySchedule = {
  mon: [
    {
      id: 'mon-1',
      day: 'mon',
      startTime: '~',
      endTime: '17:00',
      title: '⭐ 자유 일정',
      type: 'free',
      description: '캠프 참가자 자유 시간',
      location: '전체 캠퍼스',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'mon-2',
      day: 'mon',
      startTime: '17:00',
      endTime: '18:00',
      title: '🧭 오리엔테이션',
      type: 'orientation',
      description: '캠프 프로그램 소개 및 안내',
      location: '메인 로비',
      speaker: '고석희 목사',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'mon-3',
      day: 'mon',
      startTime: '18:00',
      endTime: '19:30',
      title: '🍗 저녁식사',
      type: 'meal',
      description: '함께하는 저녁 식사 시간',
      location: '본관 1층 다이닝 룸',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'mon-4',
      day: 'mon',
      startTime: '19:30',
      endTime: '21:00',
      title: '👥 교제 시간',
      type: 'fellowship',
      description: '캠프 참가자들과의 교제 및 대화 시간',
      location: '라운지',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    }
  ],
  tue: [
    {
      id: 'tue-1',
      day: 'tue',
      startTime: '07:30',
      endTime: '08:30',
      title: '🛐 경건회',
      type: 'worship',
      description: '하루를 시작하는 영적 준비의 시간',
      location: '메인 채플',
      speaker: '고석희 목사',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'tue-2',
      day: 'tue',
      startTime: '08:30',
      endTime: '09:30',
      title: '🍞 아침식사',
      type: 'meal',
      description: '함께하는 아침 식사 시간',
      location: '본관 가든',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'tue-3',
      day: 'tue',
      startTime: '09:30',
      endTime: '11:00',
      title: '🎓 1차 강의 – 예수 총체론 (Shema Jesus)',
      type: 'lecture',
      description: '예수 그리스도의 총체적 이해',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['신 6:4-9', '골 3:11', '빌 3:7-9', '갈 2:20', '엡 3:17-19', '마 16:15-16', '요 21:15-17'],
      references: ['파르메니데스 — 존재론', '에드문드 후설 — 현상학', '쇠렌 키르케고르 — 주체성의 진리', '가브리엘 마르셀 — 존재와 소유', '마틴 부버 — 나와 너', '양자역학 — 빛의 이중성'],
      isSpecial: true
    },
    {
      id: 'tue-4',
      day: 'tue',
      startTime: '11:00',
      endTime: '11:30',
      title: '☕ 휴식',
      type: 'break',
      description: '강의 간 휴식 시간',
      location: '라운지',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'tue-5',
      day: 'tue',
      startTime: '11:30',
      endTime: '13:00',
      title: '🎓 2차 강의 – 예수 숭고론 (EGO Eimi Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 숭고함',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['출 3:14', '요 18:6', '행 9:5', '22:8', '26:15', '빌 3:7-9', '계 1:12-18'],
      references: ['플라톤 — 이데아론', '롱기누스 — 숭고론', '임마누엘 칸트 — 판단력 비판', '토마스 아퀴나스 — 황홀한 침묵(지푸라기)', '루돌프 오토 — 성스러움의 의미(누미노제 체험)', '헬렌 로즈비어 — 저 산지를 내게 주소서'],
      isSpecial: true
    },
    {
      id: 'tue-6',
      day: 'tue',
      startTime: '13:00',
      endTime: '15:00',
      title: '🍽️ 점심식사',
      type: 'meal',
      description: '함께하는 점심 식사 시간',
      location: '본관 1층 다이닝 룸',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'tue-7',
      day: 'tue',
      startTime: '15:00',
      endTime: '16:30',
      title: '🎓 3차 강의 – 예수 우주론 (Archegos Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 우주적 의미',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['골 1:15-18', '3:11', '요 1:1-3:14', '시 8:3-8'],
      references: ['칼 세이건 — 창백한 푸른 점', '에드윈 허블 — 성운의 세계(우주 팽창론)', '아노 펜지어스 — 우주 배경 복사', '조르주 르메트르 — 우주 팽창 복사', '알버트 아인슈타인 — 일반 상대성 이론', '제랄트 슈뢰더 — 6일 창조론', '떼이야르 드 샤르뎅 — 우주적 그리스도론'],
      isSpecial: true
    },
    {
      id: 'tue-8',
      day: 'tue',
      startTime: '16:30',
      endTime: '17:30',
      title: '☕ 휴식',
      type: 'break',
      description: '강의 간 휴식 시간',
      location: '라운지',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'tue-9',
      day: 'tue',
      startTime: '17:30',
      endTime: '19:00',
      title: '🎓 4차 강의 – 예수 천부론 (Abba Pater Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 아버지 되심',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['눅 2:49', '15:11-32', '23:46', '마 11:25', '23:9', '요 5:18', '롬 8:15', '갈 4:5-6'],
      references: ['조반니 파피티 — 무신론자를 위한 예수 이야기', '테오 앙겔로풀로스 — 안개 속의 풍경', '니콜라스 월터스토프 — 아버지의 통곡', '존 스타인백 — 에덴의 동쪽', '헨리 나우웬 — 탕자의 귀향', '팀 켈러 — 탕부 하나님'],
      isSpecial: true
    },
    {
      id: 'tue-10',
      day: 'tue',
      startTime: '19:00',
      endTime: '20:30',
      title: '🍗 저녁식사',
      type: 'meal',
      description: '함께하는 저녁 식사 시간',
      location: '본관 1층 다이닝 룸',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'tue-11',
      day: 'tue',
      startTime: '20:30',
      endTime: '~',
      title: '간증 및 자유시간',
      type: 'other',
      description: '하루를 마무리하는 간증과 자유로운 대화의 시간',
      location: '라운지',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    }
  ],
  wed: [
    {
      id: 'wed-1',
      day: 'wed',
      startTime: '07:30',
      endTime: '08:30',
      title: '🛐 경건회',
      type: 'worship',
      description: '하루를 시작하는 영적 준비의 시간',
      location: '메인 채플',
      speaker: '고석희 목사',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'wed-2',
      day: 'wed',
      startTime: '08:30',
      endTime: '09:30',
      title: '🍞 아침식사',
      type: 'meal',
      description: '함께하는 아침 식사 시간',
      location: '본관 가든',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'wed-3',
      day: 'wed',
      startTime: '09:30',
      endTime: '11:00',
      title: '🎓 1차 강의 – 예수 인간론 (Anthropos Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 인간성',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['창 1:26-27', '시 8:3-8', '욥 40:10', '딤전 6:11'],
      references: ['블레즈 파스칼 — 팡세(생각하는 갈대)', '바뤼흐 스피노자 — 에티카(코나투스)', '쇠렌 키에르케고르 — 실존의 세 단계', '마르틴 하이데거 — 존재와 시간', '장 폴 사르트르 — 구토', '윌리엄 제임스 — 심리학의 원리', '장 지로두 — 벨락의 아폴론'],
      isSpecial: true
    },
    {
      id: 'wed-4',
      day: 'wed',
      startTime: '11:00',
      endTime: '11:30',
      title: '☕ 휴식',
      type: 'break',
      description: '강의 간 휴식 시간',
      location: '라운지',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'wed-5',
      day: 'wed',
      startTime: '11:30',
      endTime: '13:00',
      title: '🎓 2차 강의 – 예수 생명론 (Vivendi Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 생명',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['창 1:28-30', '요 6:35', '8:12', '10:7,11', '11:25-26', '요 14:6', '15:1,11'],
      references: ['미르체아 엘리아데 — 성과 속의 변증법', '카렌 블릭센 — 바베트의 만찬', '알렉산더 솔제니친 — 이반 데니소비치의 하루', '어니스트 해밍웨이 — 노인과 바다', '사뮈엘 베케트 — 크라프의 마지막 테이프', '빈센트 반 고흐 — 성경전물'],
      isSpecial: true
    },
    {
      id: 'wed-6',
      day: 'wed',
      startTime: '13:00',
      endTime: '15:00',
      title: '🍽️ 점심식사',
      type: 'meal',
      description: '함께하는 점심 식사 시간',
      location: '본관 1층 다이닝 룸',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'wed-7',
      day: 'wed',
      startTime: '15:00',
      endTime: '16:30',
      title: '🎓 3차 강의 – 예수 상황론 (Golgotha Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 십자가 상황',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['눅 15:11-32', '롬 7:24', '고전 10:10', '욥 19:25-26'],
      references: ['쇠렌 키에르케고르 — 죽음에 이르는 병', '레프 톨스토이 — 이반 일리치의 죽음', '마르틴 하이데거 — 존재와 시간', '카를 야스퍼스 — 세계관의 심리학', '알베르 카뮈 — 시지프스의 신화 / 페스트', '프란츠 카프카 — 소송 / 변신 / 성', '테네시 윌리엄스 — 욕망이라는 이름의 전차'],
      isSpecial: true
    },
    {
      id: 'wed-8',
      day: 'wed',
      startTime: '16:30',
      endTime: '17:30',
      title: '☕ 휴식',
      type: 'break',
      description: '강의 간 휴식 시간',
      location: '라운지',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'wed-9',
      day: 'wed',
      startTime: '17:30',
      endTime: '19:00',
      title: '🎓 4차 강의 – 예수 구원론 (Soteria Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 구원',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['요 19:31-37', '롬 3:25', '빌 2:5-11', '막 1:40-42'],
      references: ['마틴 루터 — 십자가의 신학', '위르겐 몰트만 — 십자가에 달리신 하나님', '도스토예프스키 — 카라마조프 형제(아귀의 꿈)', '조반니 파피니 — 무신론자를 위한 예수 이야기', '막시밀리아노 콜베 — 대속의 죽음', '에마뉘엘 레비나스 — 타자성의 철학', '엔도 슈사쿠 — 깊은 강 / 사해 부근에서'],
      isSpecial: true
    },
    {
      id: 'wed-10',
      day: 'wed',
      startTime: '19:00',
      endTime: '20:30',
      title: '🍗 저녁식사',
      type: 'meal',
      description: '함께하는 저녁 식사 시간',
      location: '본관 1층 다이닝 룸',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'wed-11',
      day: 'wed',
      startTime: '20:30',
      endTime: '~',
      title: '간증 및 자유시간',
      type: 'other',
      description: '하루를 마무리하는 간증과 자유로운 대화의 시간',
      location: '라운지',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    }
  ],
  thu: [
    {
      id: 'thu-1',
      day: 'thu',
      startTime: '07:30',
      endTime: '08:30',
      title: '🛐 경건회',
      type: 'worship',
      description: '하루를 시작하는 영적 준비의 시간',
      location: '메인 채플',
      speaker: '고석희 목사',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'thu-2',
      day: 'thu',
      startTime: '08:30',
      endTime: '09:30',
      title: '🍞 아침식사',
      type: 'meal',
      description: '함께하는 아침 식사 시간',
      location: '본관 가든',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'thu-3',
      day: 'thu',
      startTime: '09:30',
      endTime: '11:00',
      title: '🎓 1차 강의 – 예수 부활론 (Anastasis Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 부활',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['요 11:25-26', '고전 15:35-49'],
      references: ['표도르 도스토예프스키 — 죄와 벌', '앙리 베르그송 — 창조적 진화', '루돌프 클라우지우스 — 엔트로피(열역학 제2법칙)', '에르빈 슈뢰딩거 — 엔트로피(생명이란 무엇인가?)', '일리야 프리고진 — 혼돈에서 질서로', '존 폴킹혼 — 케노시스 창조이론', '레프 톨스토이 — 부활'],
      isSpecial: true
    },
    {
      id: 'thu-4',
      day: 'thu',
      startTime: '11:00',
      endTime: '11:30',
      title: '☕ 휴식',
      type: 'break',
      description: '강의 간 휴식 시간',
      location: '라운지',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'thu-5',
      day: 'thu',
      startTime: '11:30',
      endTime: '13:00',
      title: '🎓 2차 강의 – 예수 권세론 (Exousia Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 권세',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['빌 2:5-11', '눅 10:17-20', '엡 1:17-23', '요 18:6', '마 28:18'],
      references: ['장 칼뱅 — 기독교강요(하나님의 절대주권)', '칼 바르트 — 로마서 강해', '허먼 멜빈 — 모비딕(인신론의 사악성)', '암브로시우스 감독과 테오도시우스 황제', '루드비히 폰 베토벤 — 감람산의 그리스도', '쇠렌 키에르케고르 — 공포와 전율'],
      isSpecial: true
    },
    {
      id: 'thu-6',
      day: 'thu',
      startTime: '13:00',
      endTime: '15:00',
      title: '🍽️ 점심식사',
      type: 'meal',
      description: '함께하는 점심 식사 시간',
      location: '본관 1층 다이닝 룸',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'thu-7',
      day: 'thu',
      startTime: '15:00',
      endTime: '16:30',
      title: '🎓 3차 강의 – 예수 자유론 (Eleutheria Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 자유',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['요 8:31-32, 36', '눅 4:18-19', '갈 5:1, 13-14', '히 11:1', '롬 8:2, 15:12-13', '살전 5:16-18', '욥 8:7, 23:10'],
      references: ['도스토예프스키 — 카라마조프 형제(대심문)', '조나단 에드워즈 — 자유의지', '마르틴 하이데거 — 존재와 시간', '에밀 졸라 — 삶의 기쁨', '앙리 샤리에르 — 빠삐용', '에른스트 블로흐 — 희망의 원리', '위르겐 몰트만 — 희망의 신학', '제인 구달 — 희망의 이유'],
      isSpecial: true
    },
    {
      id: 'thu-8',
      day: 'thu',
      startTime: '16:30',
      endTime: '17:30',
      title: '☕ 휴식',
      type: 'break',
      description: '강의 간 휴식 시간',
      location: '라운지',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'thu-9',
      day: 'thu',
      startTime: '17:30',
      endTime: '19:00',
      title: '🎓 4차 강의 – 예수 교회론 (Ekklesia Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 교회',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['마 16:15-19', '요 2:13-22', '행 2:1-4', '요 20:28', '롬 12:4-5', '엡 1:23, 4:11-13, 5:23', '골 1:18, 24', '고전 12:12-31'],
      references: ['칼 바르트 — 교회교의학', '한스 — 교회', '위르겐 몰트만 — 성령의 능력 안에 있는 교회', '브래드 하퍼 / 폴 메츠거 — 복음주의 교회론', '마이클 프로스트 — 성육신적 교회', '스탠리 그렌츠 — 하나님의 공동체를 위한 신학'],
      isSpecial: true
    },
    {
      id: 'thu-10',
      day: 'thu',
      startTime: '19:00',
      endTime: '20:30',
      title: '🍗 저녁식사',
      type: 'meal',
      description: '함께하는 저녁 식사 시간',
      location: '본관 1층 다이닝 룸',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'thu-11',
      day: 'thu',
      startTime: '20:30',
      endTime: '~',
      title: '간증 및 자유시간',
      type: 'other',
      description: '하루를 마무리하는 간증과 자유로운 대화의 시간',
      location: '라운지',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    }
  ],
  fri: [
    {
      id: 'fri-1',
      day: 'fri',
      startTime: '07:30',
      endTime: '08:30',
      title: '🛐 경건회',
      type: 'worship',
      description: '하루를 시작하는 영적 준비의 시간',
      location: '메인 채플',
      speaker: '고석희 목사',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'fri-2',
      day: 'fri',
      startTime: '08:30',
      endTime: '09:30',
      title: '🍞 아침식사',
      type: 'meal',
      description: '함께하는 아침 식사 시간',
      location: '본관 가든',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'fri-3',
      day: 'fri',
      startTime: '09:30',
      endTime: '11:00',
      title: '🎓 1차 강의 – 예수 형상론 (Mimesis Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 형상',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['갈 4:19', '계 4:6-11', '요 15:1-11', '신 32:9-12'],
      references: ['플라톤 — 이데아론', '아리스토텔레스 — 질료형상론', '토마스 아퀴나스 — 그리스도의 모방', '쇠렌 키에르케고르 — 그리스도교 훈련', '리처드 바크 — 갈매기의 꿈', '아놀드 토인비 — 역사의 연구', '장자 — 소요유, 호접몽, 포정해우'],
      isSpecial: true
    },
    {
      id: 'fri-4',
      day: 'fri',
      startTime: '11:00',
      endTime: '11:30',
      title: '☕ 휴식',
      type: 'break',
      description: '강의 간 휴식 시간',
      location: '라운지',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'fri-5',
      day: 'fri',
      startTime: '11:30',
      endTime: '13:00',
      title: '🎓 2차 강의 – 예수 천명론 (Parangelia Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 천명',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['마 28:18-20', '행 20:24', '고후 11:23-27', '행 26:13-29'],
      references: ['생드니 — 몽마르프르의 순교', '김은국 — 순교자', '조르주 베르나노스 — 어느 시골 신부의 일기', '엔도 슈사쿠 — 침묵, 깊은 강', '제임스 엘리엇 — 전능자의 그늘', '레프 톨스토이 — 하나님은 진실을 아시나 기다리신다'],
      isSpecial: true
    },
    {
      id: 'fri-6',
      day: 'fri',
      startTime: '13:00',
      endTime: '15:00',
      title: '🍽️ 점심식사',
      type: 'meal',
      description: '함께하는 점심 식사 시간',
      location: '본관 1층 다이닝 룸',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'fri-7',
      day: 'fri',
      startTime: '15:00',
      endTime: '16:30',
      title: '🎓 3차 강의 – 예수 변증론 (Apologia Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 변증',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['고후 10:4-5', '벧전 3:15', '마 28:18-20', '마 14:22-33'],
      references: ['프리드리히 니체 — 즐거운 학문(신의 죽음)', '지그문트 바우만 — 유동하는 공포', '앨빈 토플러 — 미래의 충격, 제3의 물결', '유발 하라리 — 호모 데우스', '제4차 산업혁명 / 초인공지능 / 포스트 휴머니즘', '아라비안 나이트 — 세헤라자데'],
      isSpecial: true
    },
    {
      id: 'fri-8',
      day: 'fri',
      startTime: '16:30',
      endTime: '17:30',
      title: '☕ 휴식',
      type: 'break',
      description: '강의 간 휴식 시간',
      location: '라운지',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'fri-9',
      day: 'fri',
      startTime: '17:30',
      endTime: '19:00',
      title: '🎓 4차 강의 – 예수 혁명론 (Revolutio Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 혁명',
      location: 'Cabin 1층 강의실',
      speaker: '고석희 목사',
      scripture: ['눅 12:49, 24:2', '요 11:39, 41', '고후 10:4-5', '막 4:35-41, 5:1-8, 20:9'],
      references: ['도스토예프스키 — 악령', '파스칼 메르시어 — 리스본행 야간열차', '알랭 바디우 — 사도 바울', '존 어윈 — 예수 혁명', '테오도르 프렐링하이젠 — 제1차 영적 대각성 운동', '사무엘 밀즈 — 건초더미 기도운동', '존 모트 — SVM 대학생 해외자원선교운동'],
      isSpecial: true
    },
    {
      id: 'fri-10',
      day: 'fri',
      startTime: '19:00',
      endTime: '20:30',
      title: '🍗 저녁식사',
      type: 'meal',
      description: '함께하는 저녁 식사 시간',
      location: '본관 1층 다이닝 룸',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'fri-11',
      day: 'fri',
      startTime: '20:30',
      endTime: '~',
      title: '간증 및 자유시간',
      type: 'other',
      description: '하루를 마무리하는 간증과 자유로운 대화의 시간',
      location: '라운지',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    }
  ],
  sat: [
    {
      id: 'sat-1',
      day: 'sat',
      startTime: '00:00',
      endTime: '23:59',
      title: '⭐ 자유 일정',
      type: 'free',
      description: '전일 자유로운 시간',
      location: '전체 캠퍼스',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    }
  ],
  sun: [
    {
      id: 'sun-1',
      day: 'sun',
      startTime: '11:00',
      endTime: '13:00',
      title: '🙏 예배',
      type: 'worship',
      description: '주일 예배를 통해 한 주간을 마무리',
      location: '메인 채플',
      speaker: '고석희 목사',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'sun-2',
      day: 'sun',
      startTime: '13:00',
      endTime: '15:00',
      title: '🍗 점심식사',
      type: 'meal',
      description: '함께하는 점심 식사 시간',
      location: '본관 1층 다이닝 룸',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    },
    {
      id: 'sun-3',
      day: 'sun',
      startTime: '15:00',
      endTime: '~',
      title: '⭐ 자유 일정',
      type: 'free',
      description: '자유로운 시간',
      location: '전체 캠퍼스',
      speaker: '',
      scripture: [],
      references: [],
      isSpecial: false
    }
  ]
};

// 메타데이터
const scheduleMetadata = {
  totalSessions: 52,
  totalLectures: 20,
  totalHours: 65,
  categories: ['theology', 'philosophy', 'literature', 'science'],
  specialFeatures: ['Zoom 질문 세션', '소규모 그룹 토론', '개별 상담']
};

export default function SchedulePage() {
  const searchParams = useSearchParams();
  const [activeDay, setActiveDay] = useState<'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun'>('mon');
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  // URL 파라미터에서 요일 읽기
  useEffect(() => {
    const dayParam = searchParams.get('day');
    if (dayParam && ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'].includes(dayParam)) {
      setActiveDay(dayParam as 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun');
    }
  }, [searchParams]);

  const days = [
    { key: 'mon', label: '월요일', short: '월' },
    { key: 'tue', label: '화요일', short: '화' },
    { key: 'wed', label: '수요일', short: '수' },
    { key: 'thu', label: '목요일', short: '목' },
    { key: 'fri', label: '금요일', short: '금' },
    { key: 'sat', label: '토요일', short: '토' },
    { key: 'sun', label: '일요일', short: '일' }
  ];

  const filters = [
    { key: 'all', label: '전체' },
    { key: 'lecture', label: '강의' },
    { key: 'worship', label: '경건회/예배' },
    { key: 'meal', label: '식사' },
    { key: 'break', label: '휴식' },
    { key: 'fellowship', label: '교제' },
    { key: 'orientation', label: '오리엔테이션' },
    { key: 'free', label: '자유시간' },
    { key: 'other', label: '기타' }
  ];

  const currentSessions = weeklySchedule[activeDay];
  const filteredSessions = activeFilter === 'all' 
    ? currentSessions 
    : currentSessions.filter(session => session.type === activeFilter);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'lecture': return 'bg-blue-600/20 text-blue-400 border-blue-500/30';
      case 'worship': return 'bg-purple-600/20 text-purple-400 border-purple-500/30';
      case 'meal': return 'bg-orange-600/20 text-orange-400 border-orange-500/30';
      case 'break': return 'bg-green-600/20 text-green-400 border-green-500/30';
      case 'zoom': return 'bg-emerald-600/20 text-emerald-400 border-emerald-500/30';
      case 'orientation': return 'bg-indigo-600/20 text-indigo-400 border-indigo-500/30';
      case 'fellowship': return 'bg-pink-600/20 text-pink-400 border-pink-500/30';
      case 'free': return 'bg-gray-600/20 text-gray-400 border-gray-500/30';
      case 'other': return 'bg-gray-600/20 text-gray-400 border-gray-500/30';
      default: return 'bg-gray-600/20 text-gray-400 border-gray-500/30';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'lecture': return <BookOpen className="w-4 h-4 text-blue-400" />;
      case 'worship': return <Users className="w-4 h-4 text-purple-400" />;
      case 'meal': return <Clock className="w-4 h-4 text-orange-400" />;
      case 'break': return <Calendar className="w-4 h-4 text-green-400" />;
      case 'zoom': return <Video className="w-4 h-4 text-emerald-400" />;
      case 'orientation': return <MapPin className="w-4 h-4 text-indigo-400" />;
      case 'fellowship': return <Users className="w-4 h-4 text-pink-400" />;
      case 'free': return <Calendar className="w-4 h-4 text-gray-400" />;
      case 'other': return <MapPin className="w-4 h-4 text-gray-400" />;
      default: return <MapPin className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <DropdownNavigation />
      
      {/* Header */}
      <section className={`${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-black' : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'} text-white py-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            일반 캠프 상세 일정
          </h1>
          <p className={`text-xl ${isDark ? 'text-gray-300' : 'text-gray-700'} max-w-3xl mx-auto leading-relaxed mb-8`}>
            1주일간의 집중적인 강의와 토론을 통해 예수 그리스도에 대한 깊이 있는 이해를 도모합니다
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} rounded-xl p-6 border`}>
              <div className="text-3xl font-bold text-blue-400 mb-2">7일</div>
              <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>집중 과정</div>
            </div>
            <div className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} rounded-xl p-6 border`}>
              <div className="text-3xl font-bold text-purple-400 mb-2">65시간</div>
              <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>총 학습 시간</div>
            </div>
            <div className={`${isDark ? 'bg-gray-800/50 border-gray-700' : 'bg-white/80 border-gray-200'} rounded-xl p-6 border`}>
              <div className="text-3xl font-bold text-green-400 mb-2">20개</div>
              <div className={`${isDark ? 'text-gray-400' : 'text-gray-600'}`}>강의</div>
            </div>
          </div>
        </div>
      </section>

      {/* Day Tabs */}
      <section className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} py-8 border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {days.map((day) => (
              <button
                key={day.key}
                onClick={() => setActiveDay(day.key as 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                  activeDay === day.key
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : `${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border-gray-300'} border hover:border-blue-400`
                }`}
              >
                {day.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} py-6 border-b`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key === activeFilter ? 'all' : filter.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                    : `${isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900 border-gray-300'} border hover:border-blue-400`
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Content */}
      <section className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6">
            {weeklySchedule[activeDay as keyof typeof weeklySchedule]?.map((session, index) => {
              // Filter logic
              if (activeFilter !== 'all' && session.type !== activeFilter) {
                return null;
              }

              return (
                <div
                  key={index}
                  className={`${isDark ? 'bg-gray-700 border-gray-600 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-blue-400'} rounded-xl p-6 border transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 ${
                    session.isSpecial
                      ? `${isDark ? 'border-2 border-emerald-300 bg-emerald-50/5' : 'border-2 border-emerald-400 bg-emerald-50'}`
                      : ''
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Left side - Time and Title */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <span className="text-blue-400 font-mono text-sm font-semibold bg-blue-600/20 px-3 py-1 rounded-lg">
                            {session.startTime} - {session.endTime}
                          </span>
                          {getTypeIcon(session.type)}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(session.type)}`}>
                          {session.type === 'worship' ? '경건회/예배' : 
                           session.type === 'meal' ? '식사' :
                           session.type === 'lecture' ? '강의' :
                           session.type === 'break' ? '휴식' :
                           session.type === 'fellowship' ? '교제' :
                           session.type === 'orientation' ? '오리엔테이션' :
                           session.type === 'free' ? '자유시간' :
                           session.type === 'other' ? '기타' : session.type}
                        </span>
                      </div>
                      
                      <h3 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-3`}>
                        {session.title}
                      </h3>
                      
                      {session.description && (
                        <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                          {session.description}
                        </p>
                      )}
                      
                      {session.speaker && (
                        <div className="flex items-center gap-2 mb-4">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            <span className="text-blue-400 font-medium">강사:</span> {session.speaker}
                          </span>
                        </div>
                      )}
                      
                      {session.location && (
                        <div className="flex items-center gap-2 mb-4">
                          <MapPin className="w-4 h-4 text-green-400" />
                          <span className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            <span className="text-green-400 font-medium">장소:</span> {session.location}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    {/* Right side - Additional info */}
                    <div className="lg:w-80 space-y-4">
                      {session.isSpecial && (
                        <div className="inline-flex items-center gap-2 bg-emerald-600/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium border border-emerald-500/30">
                          <span>✨</span>
                          <span>특별 세션</span>
                        </div>
                      )}
                      
                      {session.scripture && session.scripture.length > 0 && (
                        <div className={`${isDark ? 'bg-blue-600/10 border-blue-500/20' : 'bg-blue-50 border-blue-200'} border rounded-lg p-4`}>
                          <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                            <BookOpen className="w-4 h-4" />
                            📖 본문
                          </h4>
                          <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} space-y-1`}>
                            {session.scripture.map((script, scriptIndex) => (
                              <div key={scriptIndex} className="text-blue-300">
                                {script}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {session.references && session.references.length > 0 && (
                        <div className={`${isDark ? 'bg-purple-600/10 border-purple-500/20' : 'bg-purple-50 border-purple-200'} border rounded-lg p-4`}>
                          <h4 className="text-purple-400 font-semibold mb-2 flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            📚 참고 인물/주제
                          </h4>
                          <div className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'} space-y-1`}>
                            {session.references.map((ref, refIndex) => (
                              <div key={refIndex} className="text-purple-300">
                                · {ref}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* No sessions message */}
          {weeklySchedule[activeDay as keyof typeof weeklySchedule]?.filter(session => 
            activeFilter === 'all' || session.type === activeFilter
          ).length === 0 && (
            <div className="text-center py-12">
              <div className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-lg`}>
                선택된 필터에 해당하는 일정이 없습니다.
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Summary */}
      <section className={`${isDark ? 'bg-gray-900' : 'bg-white'} py-16`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
            이번 주의 학습 포인트
          </h2>
          <div className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'} rounded-2xl p-8 border`}>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">📚 주요 강의</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• 예수 총체론 (Shema Jesus)</li>
                  <li>• 예수 숭고론 (EGO Eimi Iesous)</li>
                  <li>• 예수 우주론 (Archegos Iesous)</li>
                  <li>• 예수 천부론 (Abba Pater Iesous)</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">🎯 학습 목표</h3>
                <ul className={`space-y-2 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  <li>• 철학적 사고와 신학적 통찰의 조화</li>
                  <li>• 현대적 맥락에서의 예수 이해</li>
                  <li>• 개인적 영적 성장과 공동체 의식</li>
                  <li>• 실천적 신앙생활의 방향성</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}