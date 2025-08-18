import { ScheduleData } from './types';

// 예수서원 캠프 일정 데이터 (한국어)
export const scheduleData: ScheduleData = {
  tue: [
    {
      id: 'tue-1',
      day: 'tue',
      startTime: '07:30',
      endTime: '08:30',
      title: '경건회',
      type: 'worship',
      description: '하루를 시작하는 영적 준비의 시간',
      location: '메인 채플'
    },
    {
      id: 'tue-2',
      day: 'tue',
      startTime: '08:30',
      endTime: '09:30',
      title: '아침식사',
      type: 'meal',
      description: '함께하는 아침 식사 시간',
      location: '식당'
    },
    {
      id: 'tue-3',
      day: 'tue',
      startTime: '09:30',
      endTime: '11:00',
      title: '1차 강의 – 예수총체론 (Shema Jesus)',
      type: 'lecture',
      description: '예수 그리스도의 총체적 이해',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'intermediate',
      scripture: ['신 6:4-9', '골 3:11', '빌 3:7-9', '갈 2:20', '엡 3:17-19', '마 16:15-16', '요 21:15-17'],
      references: [
        '파르메니데스 — 존재론',
        '에드문드 후설 — 현상학',
        '쇠렌 키르케고르 — 주체성의 진리',
        '가브리엘 마르셀 — 존재와 소유',
        '마틴 부버 — 나와 너',
        '양자역학 — 빛의 이중성'
      ]
    },
    {
      id: 'tue-4',
      day: 'tue',
      startTime: '11:00',
      endTime: '11:30',
      title: '휴식',
      type: 'break',
      description: '차와 함께하는 휴식 시간',
      location: '휴게실'
    },
    {
      id: 'tue-5',
      day: 'tue',
      startTime: '11:30',
      endTime: '13:00',
      title: '2차 강의 – 예수 숭고론 (EGO Eimi Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 숭고함에 대한 탐구',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'intermediate',
      scripture: ['출 3:14', '요 18:6', '행 9:5', '22:8', '26:15', '빌 3:7-9', '계 1:12-18'],
      references: [
        '플라톤 — 이데아론',
        '롱기누스 — 숭고론',
        '임마누엘 칸트 — 판단력 비판',
        '토마스 아퀴나스 — 황홀한 침묵(지푸라기)',
        '루돌프 오토 — 성스러움의 의미(누미노제 체험)',
        '헬렌 로즈비어 — 저 산지를 내게 주소서'
      ]
    },
    {
      id: 'tue-6',
      day: 'tue',
      startTime: '13:00',
      endTime: '15:00',
      title: '점심식사',
      type: 'meal',
      description: '함께하는 점심 식사 시간',
      location: '식당'
    },
    {
      id: 'tue-7',
      day: 'tue',
      startTime: '15:00',
      endTime: '16:30',
      title: '3차 강의 – 예수 우주론 (Archegos Iesous)',
      type: 'lecture',
      description: '예수 그리스도와 우주의 관계',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'advanced',
      scripture: ['골 1:15-18', '3:11', '요 1:1-3:14', '시 8:3-8'],
      references: [
        '칼 세이건 — 창백한 푸른 점',
        '에드윈 허블 — 성운의 세계(우주 팽창론)',
        '아노 펜지어스 — 우주 배경 복사',
        '조르주 르메트르 — 우주 팽창 복사',
        '알버트 아인슈타인 — 일반 상대성 이론',
        '제랄트 슈뢰더 — 6일 창조론',
        '떼이야르 드 샤르뎅 — 우주적 그리스도론'
      ]
    },
    {
      id: 'tue-8',
      day: 'tue',
      startTime: '16:30',
      endTime: '17:30',
      title: '휴식',
      type: 'break',
      description: '차와 함께하는 휴식 시간',
      location: '휴게실'
    },
    {
      id: 'tue-9',
      day: 'tue',
      startTime: '17:30',
      endTime: '19:00',
      title: '4차 강의 – 예수 천부론 (Abba Pater Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 아버지 되심',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'intermediate',
      scripture: ['눅 2:49', '15:11-32', '23:46', '마 11:25', '23:9', '요 5:18', '롬 8:15', '갈 4:5-6'],
      references: [
        '조반니 파피티 — 무신론자를 위한 예수 이야기',
        '테오 앙겔로풀로스 — 안개 속의 풍경',
        '니콜라스 월터스토프 — 아버지의 통곡',
        '존 스타인백 — 에덴의 동쪽',
        '헨리 나우웬 — 탕자의 귀향',
        '팀 켈러 — 탕부 하나님'
      ]
    },
    {
      id: 'tue-10',
      day: 'tue',
      startTime: '19:00',
      endTime: '20:30',
      title: '저녁식사',
      type: 'meal',
      description: '함께하는 저녁 식사 시간',
      location: '식당'
    },
    {
      id: 'tue-11',
      day: 'tue',
      startTime: '20:30',
      endTime: '22:00',
      title: '간증 및 자유시간',
      type: 'other',
      description: '하루를 마무리하는 간증과 자유로운 대화의 시간',
      location: '라운지'
    }
  ],
  wed: [
    {
      id: 'wed-1',
      day: 'wed',
      startTime: '07:30',
      endTime: '08:30',
      title: '경건회',
      type: 'worship',
      description: '하루를 시작하는 영적 준비의 시간',
      location: '메인 채플'
    },
    {
      id: 'wed-2',
      day: 'wed',
      startTime: '08:30',
      endTime: '09:30',
      title: '아침식사',
      type: 'meal',
      description: '함께하는 아침 식사 시간',
      location: '식당'
    },
    {
      id: 'wed-3',
      day: 'wed',
      startTime: '09:30',
      endTime: '11:00',
      title: '1차 강의 – 예수 인간론 (Anthropos Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 인간성에 대한 탐구',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'intermediate',
      scripture: ['창 1:26-27', '시 8:3-8', '욥 40:10', '딤전 6:11'],
      references: [
        '블레즈 파스칼 — 팡세(생각하는 갈대)',
        '바뤼흐 스피노자 — 에티카(코나투스)',
        '쇠렌 키에르케고르 — 실존의 세 단계',
        '마르틴 하이데거 — 존재와 시간',
        '장 폴 사르트르 — 구토',
        '윌리엄 제임스 — 심리학의 원리',
        '장 지로두 — 벨락의 아폴론'
      ]
    },
    {
      id: 'wed-4',
      day: 'wed',
      startTime: '11:00',
      endTime: '11:30',
      title: '휴식',
      type: 'break',
      description: '차와 함께하는 휴식 시간',
      location: '휴게실'
    },
    {
      id: 'wed-5',
      day: 'wed',
      startTime: '11:30',
      endTime: '13:00',
      title: '2차 강의 – 예수 생명론 (Vivendi Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 생명에 대한 탐구',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'intermediate',
      scripture: ['창 1:28-30', '요 6:35', '8:12', '10:7,11', '11:25-26', '요 14:6', '15:1,11'],
      references: [
        '미르체아 엘리아데 — 성과 속의 변증법',
        '카렌 블릭센 — 바베트의 만찬',
        '알렉산더 솔제니친 — 이반 데니소비치의 하루',
        '어니스트 해밍웨이 — 노인과 바다',
        '사뮈엘 베케트 — 크라프의 마지막 테이프',
        '빈센트 반 고흐 — 성경전물'
      ]
    },
    {
      id: 'wed-6',
      day: 'wed',
      startTime: '13:00',
      endTime: '15:00',
      title: '점심식사',
      type: 'meal',
      description: '함께하는 점심 식사 시간',
      location: '식당'
    },
    {
      id: 'wed-7',
      day: 'wed',
      startTime: '15:00',
      endTime: '16:30',
      title: '3차 강의 – 예수 상황론 (Golgotha Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 십자가 상황',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'advanced',
      scripture: ['눅 15:11-32', '롬 7:24', '고전 10:10', '욥 19:25-26'],
      references: [
        '쇠렌 키에르케고르 — 죽음에 이르는 병',
        '레프 톨스토이 — 이반 일리치의 죽음',
        '마르틴 하이데거 — 존재와 시간',
        '카를 야스퍼스 — 세계관의 심리학',
        '알베르 카뮈 — 시지프스의 신화 / 페스트',
        '프란츠 카프카 — 소송 / 변신 / 성',
        '테네시 윌리엄스 — 욕망이라는 이름의 전차'
      ]
    },
    {
      id: 'wed-8',
      day: 'wed',
      startTime: '16:30',
      endTime: '17:30',
      title: '휴식',
      type: 'break',
      description: '차와 함께하는 휴식 시간',
      location: '휴게실'
    },
    {
      id: 'wed-9',
      day: 'wed',
      startTime: '17:30',
      endTime: '19:00',
      title: '4차 강의 – 예수 구원론 (Soteria Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 구원 사역',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'intermediate',
      scripture: ['요 19:31-37', '롬 3:25', '빌 2:5-11', '막 1:40-42'],
      references: [
        '마틴 루터 — 십자가의 신학',
        '위르겐 몰트만 — 십자가에 달리신 하나님',
        '도스토예프스키 — 카라마조프 형제(아귀의 꿈)',
        '조반니 파피니 — 무신론자를 위한 예수 이야기',
        '막시밀리아노 콜베 — 대속의 죽음',
        '에마뉘엘 레비나스 — 타자성의 철학',
        '엔도 슈사쿠 — 깊은 강 / 사해 부근에서'
      ]
    },
    {
      id: 'wed-10',
      day: 'wed',
      startTime: '19:00',
      endTime: '20:30',
      title: '저녁식사',
      type: 'meal',
      description: '함께하는 저녁 식사 시간',
      location: '식당'
    },
    {
      id: 'wed-11',
      day: 'wed',
      startTime: '20:30',
      endTime: '22:00',
      title: '간증 및 자유시간',
      type: 'other',
      description: '하루를 마무리하는 간증과 자유로운 대화의 시간',
      location: '라운지'
    }
  ],
  thu: [
    {
      id: 'thu-1',
      day: 'thu',
      startTime: '07:30',
      endTime: '08:30',
      title: '경건회',
      type: 'worship',
      description: '하루를 시작하는 영적 준비의 시간',
      location: '메인 채플'
    },
    {
      id: 'thu-2',
      day: 'thu',
      startTime: '08:30',
      endTime: '09:30',
      title: '아침식사',
      type: 'meal',
      description: '함께하는 아침 식사 시간',
      location: '식당'
    },
    {
      id: 'thu-3',
      day: 'thu',
      startTime: '09:30',
      endTime: '11:00',
      title: '1차 강의 – 예수 부활론 (Anastasis Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 부활에 대한 탐구',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'intermediate',
      scripture: ['요 11:25-26', '고전 15:35-49'],
      references: [
        '표도르 도스토예프스키 — 죄와 벌',
        '앙리 베르그송 — 창조적 진화',
        '루돌프 클라우지우스 — 엔트로피(열역학 제2법칙)',
        '에르빈 슈뢰딩거 — 엔트로피(생명이란 무엇인가?)',
        '일리야 프리고진 — 혼돈에서 질서로',
        '존 폴킹혼 — 케노시스 창조이론',
        '레프 톨스토이 — 부활'
      ]
    },
    {
      id: 'thu-4',
      day: 'thu',
      startTime: '11:00',
      endTime: '11:30',
      title: '휴식',
      type: 'break',
      description: '차와 함께하는 휴식 시간',
      location: '휴게실'
    },
    {
      id: 'thu-5',
      day: 'thu',
      startTime: '11:30',
      endTime: '13:00',
      title: '2차 강의 – 예수 권세론 (Exousia Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 권세에 대한 탐구',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'intermediate',
      scripture: ['빌 2:5-11', '눅 10:17-20', '엡 1:17-23', '요 18:6', '마 28:18'],
      references: [
        '장 칼뱅 — 기독교강요(하나님의 절대주권)',
        '칼 바르트 — 로마서 강해',
        '허먼 멜빌 — 모비딕(인신론의 사악성)',
        '암브로시우스 감독과 테오도시우스 황제',
        '루드비히 폰 베토벤 — 감람산의 그리스도',
        '쇠렌 키에르케고르 — 공포와 전율'
      ]
    },
    {
      id: 'thu-6',
      day: 'thu',
      startTime: '13:00',
      endTime: '15:00',
      title: '점심식사',
      type: 'meal',
      description: '함께하는 점심 식사 시간',
      location: '식당'
    },
    {
      id: 'thu-7',
      day: 'thu',
      startTime: '15:00',
      endTime: '16:30',
      title: '3차 강의 – 예수 자유론 (Eleutheria Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 자유에 대한 탐구',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'advanced',
      scripture: ['요 8:31-32, 36', '눅 4:18-19', '갈 5:1, 13-14', '히 11:1', '롬 8:2, 15:12-13', '살전 5:16-18', '욥 8:7, 23:10'],
      references: [
        '도스토예프스키 — 카라마조프 형제(대심문)',
        '조나단 에드워즈 — 자유의지',
        '마르틴 하이데거 — 존재와 시간',
        '에밀 졸라 — 삶의 기쁨',
        '앙리 샤리에르 — 빠삐용',
        '에른스트 블로흐 — 희망의 원리',
        '위르겐 몰트만 — 희망의 신학',
        '제인 구달 — 희망의 이유'
      ]
    },
    {
      id: 'thu-8',
      day: 'thu',
      startTime: '16:30',
      endTime: '17:30',
      title: '휴식',
      type: 'break',
      description: '차와 함께하는 휴식 시간',
      location: '휴게실'
    },
    {
      id: 'thu-9',
      day: 'thu',
      startTime: '17:30',
      endTime: '19:00',
      title: '4차 강의 – 예수 교회론 (Ekklesia Iesous)',
      type: 'lecture',
      description: '예수 그리스도와 교회의 관계',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'intermediate',
      scripture: ['마 16:15-19', '요 2:13-22', '행 2:1-4', '요 20:28', '롬 12:4-5', '엡 1:23, 4:11-13, 5:23', '골 1:18, 24', '고전 12:12-31'],
      references: [
        '칼 바르트 — 교회교의학',
        '한스 — 교회',
        '위르겐 몰트만 — 성령의 능력 안에 있는 교회',
        '브래드 하퍼 / 폴 메츠거 — 복음주의 교회론',
        '마이클 프로스트 — 성육신적 교회',
        '스탠리 그렌츠 — 하나님의 공동체를 위한 신학'
      ]
    },
    {
      id: 'thu-10',
      day: 'thu',
      startTime: '19:00',
      endTime: '20:30',
      title: '저녁식사',
      type: 'meal',
      description: '함께하는 저녁 식사 시간',
      location: '식당'
    },
    {
      id: 'thu-11',
      day: 'thu',
      startTime: '20:30',
      endTime: '22:00',
      title: '간증 및 자유시간',
      type: 'other',
      description: '하루를 마무리하는 간증과 자유로운 대화의 시간',
      location: '라운지'
    }
  ],
  fri: [
    {
      id: 'fri-1',
      day: 'fri',
      startTime: '07:30',
      endTime: '08:30',
      title: '경건회',
      type: 'worship',
      description: '하루를 시작하는 영적 준비의 시간',
      location: '메인 채플'
    },
    {
      id: 'fri-2',
      day: 'fri',
      startTime: '08:30',
      endTime: '09:30',
      title: '아침식사',
      type: 'meal',
      description: '함께하는 아침 식사 시간',
      location: '식당'
    },
    {
      id: 'fri-3',
      day: 'fri',
      startTime: '09:30',
      endTime: '11:00',
      title: '1차 강의 – 예수 형상론 (Mimesis Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 형상에 대한 탐구',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'intermediate',
      scripture: ['갈 4:19', '계 4:6-11', '요 15:1-11', '신 32:9-12'],
      references: [
        '플라톤 — 이데아론',
        '아리스토텔레스 — 질료형상론',
        '토마스 아퀴나스 — 그리스도의 모방',
        '쇠렌 키에르케고르 — 그리스도교 훈련',
        '리처드 바크 — 갈매기의 꿈',
        '아놀드 토인비 — 역사의 연구',
        '장자 — 소요유, 호접몽, 포정해우'
      ]
    },
    {
      id: 'fri-4',
      day: 'fri',
      startTime: '11:00',
      endTime: '11:30',
      title: '휴식',
      type: 'break',
      description: '차와 함께하는 휴식 시간',
      location: '휴게실'
    },
    {
      id: 'fri-5',
      day: 'fri',
      startTime: '11:30',
      endTime: '13:00',
      title: '2차 강의 – 예수 천명론 (Parangelia Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 천명에 대한 탐구',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'intermediate',
      scripture: ['마 28:18-20', '행 20:24', '고후 11:23-27', '행 26:13-29'],
      references: [
        '생드니 — 몽마르프르의 순교',
        '김은국 — 순교자',
        '조르주 베르나노스 — 어느 시골 신부의 일기',
        '엔도 슈사쿠 — 침묵, 깊은 강',
        '제임스 엘리엇 — 전능자의 그늘',
        '레프 톨스토이 — 하나님은 진실을 아시나 기다리신다'
      ]
    },
    {
      id: 'fri-6',
      day: 'fri',
      startTime: '13:00',
      endTime: '15:00',
      title: '점심식사',
      type: 'meal',
      description: '함께하는 점심 식사 시간',
      location: '식당'
    },
    {
      id: 'fri-7',
      day: 'fri',
      startTime: '15:00',
      endTime: '16:30',
      title: '3차 강의 – 예수 변증론 (Apologia Iesous)',
      type: 'lecture',
      description: '예수 그리스도에 대한 변증',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'advanced',
      scripture: ['고후 10:4-5', '벧전 3:15', '마 28:18-20', '마 14:22-33'],
      references: [
        '프리드리히 니체 — 즐거운 학문(신의 죽음)',
        '지그문트 바우만 — 유동하는 공포',
        '앨빈 토플러 — 미래의 충격, 제3의 물결',
        '유발 하라리 — 호모 데우스',
        '제4차 산업혁명 / 초인공지능 / 포스트 휴머니즘',
        '아라비안 나이트 — 세헤라자데'
      ]
    },
    {
      id: 'fri-8',
      day: 'fri',
      startTime: '16:30',
      endTime: '17:30',
      title: '휴식',
      type: 'break',
      description: '차와 함께하는 휴식 시간',
      location: '휴게실'
    },
    {
      id: 'fri-9',
      day: 'fri',
      startTime: '17:30',
      endTime: '19:00',
      title: '4차 강의 – 예수 혁명론 (Revolutio Iesous)',
      type: 'lecture',
      description: '예수 그리스도의 혁명적 사역',
      speaker: '고석희 목사',
      category: 'theology',
      difficulty: 'advanced',
      scripture: ['눅 12:49, 24:2', '요 11:39, 41', '고후 10:4-5', '막 4:35-41, 5:1-8, 20:9'],
      references: [
        '도스토예프스키 — 악령',
        '파스칼 메르시어 — 리스본행 야간열차',
        '알랭 바디우 — 사도 바울',
        '존 어윈 — 예수 혁명',
        '테오도르 프렐링하이젠 — 제1차 영적 대각성 운동',
        '사무엘 밀즈 — 건초더미 기도운동',
        '존 모트 — SVM 대학생 해외자원선교운동'
      ]
    },
    {
      id: 'fri-10',
      day: 'fri',
      startTime: '19:00',
      endTime: '20:30',
      title: '저녁식사',
      type: 'meal',
      description: '함께하는 저녁 식사 시간',
      location: '식당'
    },
    {
      id: 'fri-11',
      day: 'fri',
      startTime: '20:30',
      endTime: '22:00',
      title: '간증 및 자유시간',
      type: 'other',
      description: '하루를 마무리하는 간증과 자유로운 대화의 시간',
      location: '라운지'
    }
  ],
  metadata: {
    totalSessions: 44,
    totalLectures: 16,
    totalHours: 52,
    categories: ['theology', 'philosophy', 'literature', 'science']
  }
};

// 일정 데이터를 쉽게 사용할 수 있는 헬퍼 함수들
export const getSessionsByDay = (day: 'tue' | 'wed' | 'thu' | 'fri') => {
  return scheduleData[day];
};

export const getSessionsByType = (type: 'lecture' | 'meal' | 'break' | 'worship' | 'other') => {
  const allSessions = [
    ...scheduleData.tue,
    ...scheduleData.wed,
    ...scheduleData.thu,
    ...scheduleData.fri
  ];
  return allSessions.filter(session => session.type === type);
};

export const getSessionsByCategory = (category: 'theology' | 'philosophy' | 'literature' | 'science') => {
  const allSessions = [
    ...scheduleData.tue,
    ...scheduleData.wed,
    ...scheduleData.thu,
    ...scheduleData.fri
  ];
  return allSessions.filter(session => session.category === category);
};
