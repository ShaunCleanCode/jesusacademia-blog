import { BlogPost, Author, Category, Tag } from './types';

// 예수서원 기수별 작성자 생성 함수
const createAuthor = (generation: number, name: string, email?: string): Author => ({
  id: `generation-${generation}-${name.toLowerCase().replace(/\s+/g, '-')}`,
  name: `예수서원 ${generation}기 ${name}`,
  email: email || `generation${generation}@jesusacademia.org`,
  bio: `예수서원 ${generation}기 학생입니다. 복음과 지성의 통합을 통해 하나님의 나라를 확장하는 비전을 공유합니다.`,
  avatar: '/images/default-avatar.jpg',
  socialLinks: [
    { platform: 'website', url: 'https://jesusacademia.org' }
  ]
});

// 샘플 작성자 데이터 (기수별)
export const sampleAuthors: Author[] = [
  // 60기
  createAuthor(60, '김민수'),
  createAuthor(60, '이지은'),
  createAuthor(60, '박준호'),
  
  // 61기
  createAuthor(61, '이소희'),
  createAuthor(61, '정민우'),
  createAuthor(61, '최유진'),
  
  // 59기
  createAuthor(59, '강태현'),
  createAuthor(59, '윤서연'),
  
  // 58기
  createAuthor(58, '조현우'),
  createAuthor(58, '한지민'),
  
  // 57기
  createAuthor(57, '송지훈'),
  createAuthor(57, '오나연'),
  
  // 고석희 목사 (특별 작성자)
  {
    id: 'pastor-ko-seok-hee',
    name: '고석희 목사',
    email: 'pastor.ko@jesusacademia.org',
    bio: '예수서원 설립자이자 원장. 뉴욕에서 기독교 인문학을 통한 복음과 지성의 통합을 추구합니다.',
    avatar: '/images/gallery/pastor-ko/pastor-ko-main.jpg',
    socialLinks: [
      { platform: 'website', url: 'https://jesusacademia.org' }
    ]
  }
];

// 샘플 카테고리 데이터
export const sampleCategories: Category[] = [
  {
    id: '1',
    name: '기독교 인문학',
    slug: 'christian-humanities',
    description: '복음과 지성을 통합한 인문학적 성찰',
    color: '#3b82f6',
    icon: '📚'
  },
  {
    id: '2',
    name: '성경 연구',
    slug: 'bible-study',
    description: '성경 본문에 대한 깊이 있는 연구와 해석',
    color: '#10b981',
    icon: '📖'
  },
  {
    id: '3',
    name: '신학 사상',
    slug: 'theology',
    description: '기독교 신학의 핵심 개념과 현대적 적용',
    color: '#8b5cf6',
    icon: '⛪'
  },
  {
    id: '4',
    name: '예수서원 소식',
    slug: 'news',
    description: '예수서원의 최신 소식과 프로그램 안내',
    color: '#f59e0b',
    icon: '📢'
  },
  {
    id: '5',
    name: '캠프 후기',
    slug: 'camp-reviews',
    description: '예수서원 캠프 참가자들의 생생한 후기',
    color: '#ef4444',
    icon: '🏕️'
  }
];

// 샘플 태그 데이터
export const sampleTags: Tag[] = [
  { id: '1', name: '복음', slug: 'gospel', color: '#3b82f6' },
  { id: '2', name: '지성', slug: 'intellect', color: '#8b5cf6' },
  { id: '3', name: '인문학', slug: 'humanities', color: '#10b981' },
  { id: '4', name: '성경', slug: 'bible', color: '#f59e0b' },
  { id: '5', name: '신학', slug: 'theology', color: '#ef4444' },
  { id: '6', name: '예수서원', slug: 'jesus-academia', color: '#06b6d4' },
  { id: '7', name: '캠프', slug: 'camp', color: '#84cc16' },
  { id: '8', name: '뉴욕', slug: 'new-york', color: '#f97316' },
  { id: '9', name: '고석희 목사', slug: 'pastor-ko', color: '#3B82F6' },
  { id: '10', name: '목회 사역', slug: 'ministry', color: '#10B981' },
  { id: '11', name: '신앙 여정', slug: 'faith-journey', color: '#F59E0B' },
  { id: '12', name: '비전', slug: 'vision', color: '#EF4444' }
];

// 샘플 블로그 포스트 데이터
export const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: '복음과 지성의 통합: 예수서원의 비전',
    slug: 'gospel-and-intellect-integration',
    excerpt: '복음과 지성이 어떻게 하나가 될 수 있는지, 그리고 이것이 현대 기독교인들에게 어떤 의미를 가지는지 탐구합니다.',
    content: `# 복음과 지성의 통합: 예수서원의 비전

## 들어가며

현대 기독교는 복음과 지성 사이의 거대한 간극에 직면해 있습니다. 많은 신자들이 신앙과 학문을 분리된 영역으로 생각하며, 이 둘 사이의 통합을 시도하지 않습니다. 하지만 예수서원은 이러한 분리를 극복하고, 복음과 지성이 하나가 되는 새로운 패러다임을 제시합니다.

## 복음과 지성의 분리

### 현대 기독교의 딜레마

오늘날 많은 기독교인들이 겪고 있는 문제는 신앙과 학문 사이의 분리입니다. 일요일에는 교회에서 복음을 듣지만, 평일에는 세상의 지식과 철학을 배우며 이 둘 사이의 연결고리를 찾지 못합니다.

### 분리의 원인

이러한 분리는 여러 요인에서 비롯됩니다:
- 이원론적 사고방식
- 학문과 신앙의 영역 분리
- 현대 교육 시스템의 영향

## 예수서원의 접근법

### 통합적 사고

예수서원은 복음과 지성을 분리된 영역이 아닌, 서로를 보완하고 강화하는 통합적 영역으로 봅니다.

### 구체적 실천

- 성경 본문의 깊이 있는 연구
- 기독교 신학과 현대 학문의 대화
- 실생활에서의 신앙 적용

## 결론

복음과 지성의 통합은 단순한 이상이 아닌, 현실적으로 추구해야 할 목표입니다. 예수서원은 이러한 통합을 통해 더 깊고 풍성한 기독교 신앙을 제시합니다.`,
    author: sampleAuthors[15], // 고석희 목사
    categories: [sampleCategories[0], sampleCategories[2]],
    tags: [sampleTags[0], sampleTags[1], sampleTags[2], sampleTags[5]],
    featuredImage: {
      id: '1',
      url: '/images/campus/building-exterior.jpg',
      alt: '예수서원 건물 외관',
      caption: '뉴욕 오이스터 베이에 위치한 예수서원',
      width: 1200,
      height: 800,
      format: 'jpg'
    },
    status: 'published',
    publishedAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    readingTime: 8,
    viewCount: 1247,
    likeCount: 89,
    seo: {
      title: '복음과 지성의 통합: 예수서원의 비전 | 예수서원 블로그',
      description: '복음과 지성이 어떻게 하나가 될 수 있는지, 그리고 이것이 현대 기독교인들에게 어떤 의미를 가지는지 탐구합니다.',
      keywords: ['복음', '지성', '통합', '예수서원', '기독교 인문학'],
      ogImage: '/images/campus/building-exterior.jpg',
      canonicalUrl: 'https://jesusacademia.org/blog/gospel-and-intellect-integration'
    }
  },
  {
    id: '2',
    title: '60기 캠프 후기: 뉴욕에서 만난 하나님의 은혜',
    slug: 'camp-60-review-gods-grace-in-new-york',
    excerpt: '2025년 60기 캠프에 참가한 학생들의 생생한 후기와 하나님의 은혜를 경험한 이야기를 공유합니다.',
    content: `# 60기 캠프 후기: 뉴욕에서 만난 하나님의 은혜

## 캠프 시작

2025년 1월, 뉴욕 오이스터 베이의 예수서원에서 60기 캠프가 시작되었습니다. 전 세계에서 모인 30여 명의 학생들과 함께 3일간의 특별한 시간을 보냈습니다.

## 주요 프로그램

### 성경 연구 세션
- 마태복음 5-7장 산상수훈 연구
- 소그룹 토론과 발표
- 개인 묵상 시간

### 인문학 강의
- 기독교와 현대 철학의 만남
- 문학 속에서 발견하는 하나님
- 예술과 신앙의 통합

### 현장 체험
- 뉴욕 시내 기독교 역사 탐방
- 브루클린 브릿지에서의 묵상
- 센트럴 파크에서의 자연 예배

## 학생들의 소감

> "처음에는 신앙과 학문이 어떻게 연결되는지 의문이었는데, 이번 캠프를 통해 완전히 새로운 관점을 얻었습니다." - 김○○ 학생

> "뉴욕이라는 도시에서 하나님을 만나는 경험이 정말 특별했습니다." - 이○○ 학생

## 하나님의 은혜

캠프 기간 동안 우리는 하나님의 은혜를 여러 모습으로 경험했습니다:
- 깊이 있는 성경 연구를 통한 말씀의 새로움
- 다양한 배경의 학생들과의 교제
- 뉴욕이라는 도시에서의 선교적 경험

## 마무리

60기 캠프는 단순한 학술 프로그램이 아닌, 하나님과의 만남이 일어나는 특별한 시간이었습니다. 모든 참가자들이 복음과 지성의 통합을 경험하며, 새로운 비전을 품게 되었습니다.`,
    author: sampleAuthors[0], // 60기 김민수
    categories: [sampleCategories[4], sampleCategories[3]],
    tags: [sampleTags[6], sampleTags[7], sampleTags[8], sampleTags[5]],
    featuredImage: {
      id: '2',
      url: '/images/camps/2025/camp-60/60기 사진/KakaoTalk_Photo_2025-08-08-00-12-23 001.jpeg',
      alt: '60기 캠프 단체 사진',
      caption: '2025년 60기 캠프 참가자들',
      width: 1200,
      height: 800,
      format: 'jpeg'
    },
    status: 'published',
    publishedAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-01-20'),
    readingTime: 6,
    viewCount: 892,
    likeCount: 67,
    seo: {
      title: '60기 캠프 후기: 뉴욕에서 만난 하나님의 은혜 | 예수서원 블로그',
      description: '2025년 60기 캠프에 참가한 학생들의 생생한 후기와 하나님의 은혜를 경험한 이야기를 공유합니다.',
      keywords: ['60기', '캠프', '후기', '뉴욕', '예수서원', '하나님의 은혜'],
      ogImage: '/images/camps/2025/camp-60/60기 사진/KakaoTalk_Photo_2025-08-08-00-12-23 001.jpeg',
      canonicalUrl: 'https://jesusacademia.org/blog/camp-60-review-gods-grace-in-new-york'
    }
  },
  {
    id: '3',
    title: '성경 읽기의 새로운 방법: 문학적 접근',
    slug: 'new-way-to-read-bible-literary-approach',
    excerpt: '성경을 문학 작품으로 읽는 새로운 방법을 소개하며, 이를 통해 발견할 수 있는 새로운 의미들을 탐구합니다.',
    content: `# 성경 읽기의 새로운 방법: 문학적 접근

## 전통적 성경 읽기의 한계

많은 기독교인들이 성경을 읽을 때 다음과 같은 방식에 익숙합니다:
- 교리적 해석에 치중
- 개인적 적용에만 집중
- 문학적 구조 무시

## 문학적 접근의 장점

### 1. 텍스트의 완전성 이해
성경 각 권은 완성된 문학 작품으로서의 구조를 가지고 있습니다.

### 2. 저자의 의도 파악
문학적 기법을 통해 저자가 전달하려는 메시지를 더 정확히 이해할 수 있습니다.

### 3. 새로운 의미 발견
문학적 분석을 통해 이전에 놓쳤던 의미들을 발견할 수 있습니다.

## 구체적 방법론

### 서사 구조 분석
- 도입, 전개, 위기, 절정, 결말
- 인물의 성격 변화
- 갈등과 해결

### 수사학적 기법
- 반복과 대조
- 상징과 은유
- 패러렐리즘

### 장르별 접근
- 서사문: 이야기 구조 분석
- 시편: 운율과 이미지 분석
- 예언서: 수사학적 기법 분석

## 실제 적용 예시

### 마태복음 5-7장 산상수훈
- 팔복의 구조적 분석
- 대조법의 활용
- 왕국 개념의 반복

### 시편 23편
- 목자 이미지의 발전
- 위험에서 안전으로의 전환
- 개인적 고백에서 보편적 선언으로

## 결론

문학적 접근은 성경을 더 풍성하고 깊이 있게 읽을 수 있게 해줍니다. 이는 신앙을 더욱 견고하게 하며, 하나님의 말씀에 대한 새로운 사랑을 불러일으킵니다.`,
    author: sampleAuthors[15], // 고석희 목사
    categories: [sampleCategories[1], sampleCategories[0]],
    tags: [sampleTags[3], sampleTags[2], sampleTags[0]],
    featuredImage: {
      id: '3',
      url: '/images/gallery/pastor-ko/pastor-ko-teaching.jpg',
      alt: '고석희 목사 강의 모습',
      caption: '성경을 문학적으로 읽는 방법을 가르치는 고석희 목사',
      width: 1200,
      height: 800,
      format: 'jpg'
    },
    status: 'published',
    publishedAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25'),
    readingTime: 10,
    viewCount: 1563,
    likeCount: 124,
    seo: {
      title: '성경 읽기의 새로운 방법: 문학적 접근 | 예수서원 블로그',
      description: '성경을 문학 작품으로 읽는 새로운 방법을 소개하며, 이를 통해 발견할 수 있는 새로운 의미들을 탐구합니다.',
      keywords: ['성경', '문학', '읽기', '해석', '신학', '예수서원'],
      ogImage: '/images/gallery/pastor-ko/pastor-ko-teaching.jpg',
      canonicalUrl: 'https://jesusacademia.org/blog/new-way-to-read-bible-literary-approach'
    }
  },
  {
    id: 'pastor-ko-seok-hee',
    title: '고석희 목사님의 신앙과 사역',
    slug: 'pastor-ko-seok-hee',
    excerpt: '예수서원의 영적 지도자 고석희 목사님의 신앙 여정과 사역에 대한 깊이 있는 이야기를 들어보세요.',
    content: `# 고석희 목사님의 신앙과 사역

## 들어가며

고석희 목사님은 예수서원의 영적 지도자로서, 신앙과 학문의 통합을 추구하는 비전을 제시하고 계십니다. 오늘은 목사님의 신앙 여정과 사역에 대해 이야기해보겠습니다.

## 신앙의 시작

고석희 목사님은 어린 시절부터 하나님의 부르심을 느끼셨습니다. 가정에서 신앙의 기초를 다지며, 성경 말씀을 통해 하나님과의 깊은 관계를 형성해 나가셨습니다.

> "하나님의 말씀은 내 발에 등이요 내 길에 빛이니이다" (시편 119:105)

이 말씀처럼, 목사님은 성경 말씀을 삶의 중심에 두고 살아오셨습니다.

## 사역의 여정

### 1. 목회 사역의 시작

고석희 목사님은 신학교를 졸업한 후, 여러 교회에서 목회 사역을 시작하셨습니다. 특히 청년 사역에 특별한 관심을 가지고 계셨으며, 젊은이들이 하나님의 말씀을 통해 변화되는 모습을 보며 큰 기쁨을 느끼셨습니다.

### 2. 예수서원 설립

하나님의 부르심을 받아 예수서원을 설립하신 고석희 목사님은, 신앙과 학문의 통합을 통해 하나님의 나라를 확장하는 비전을 제시하셨습니다.

## 신앙 철학

### 신앙과 학문의 통합

고석희 목사님은 신앙과 학문이 분리되어서는 안 된다고 강조하십니다. 모든 학문 분야에서 하나님의 지혜를 발견하고, 이를 통해 하나님을 더 깊이 알 수 있다고 믿으십니다.

### 성경 중심의 삶

목사님은 성경을 삶의 모든 영역의 기준으로 삼으십니다. 개인적인 신앙뿐만 아니라, 사역과 학문, 그리고 일상생활의 모든 영역에서 성경의 원리를 적용하려고 노력하십니다.

## 사역의 특징

### 1. 개인 상담

고석희 목사님은 개인 상담을 통해 많은 사람들의 삶에 변화를 가져오고 계십니다. 각 개인의 상황을 깊이 이해하고, 성경의 지혜를 통해 조언을 제공하십니다.

### 2. 설교 사역

매주 주일 설교를 통해 하나님의 말씀을 전하시는 목사님의 설교는 실용적이고 적용 가능한 내용으로 구성되어 있습니다. 청중들이 일상생활에서 바로 적용할 수 있는 메시지를 전달하십니다.

### 3. 교육 사역

예수서원을 통해 신앙과 학문을 통합한 교육을 제공하고 계십니다. 단순한 지식 전달이 아닌, 하나님의 지혜를 통해 세상을 바라보는 안목을 기르는 교육을 추구하십니다.

## 비전과 미래

고석희 목사님은 앞으로도 예수서원을 통해 더 많은 사람들이 신앙과 학문의 통합을 경험할 수 있기를 소망하십니다. 특히 다음 세대가 하나님의 말씀을 바탕으로 세상을 변화시킬 수 있는 지도자로 성장하기를 기도하고 계십니다.

## 마무리

고석희 목사님의 신앙과 사역은 우리에게 많은 영감을 줍니다. 신앙과 학문의 통합을 통해 하나님의 나라를 확장하는 비전을 함께 나누며, 더 나은 미래를 만들어 가기를 소망합니다.

---

*고석희 목사님에 대해 더 자세히 알고 싶으시면 예수서원으로 연락해 주세요.*`,
    author: sampleAuthors[15], // 고석희 목사
    categories: [sampleCategories[0], sampleCategories[1]],
    tags: [sampleTags[8], sampleTags[9], sampleTags[10], sampleTags[11]],
    featuredImage: {
      id: '4',
      url: '/images/gallery/pastor-ko/pastor-ko-speaking.png',
      alt: '고석희 목사님 설교 모습',
      caption: '고석희 목사님의 설교 사역',
      width: 800,
      height: 600,
      format: 'png'
    },
    status: 'published',
    publishedAt: new Date('2025-01-07T10:00:00Z'),
    updatedAt: new Date('2025-01-07T10:00:00Z'),
    readingTime: 8,
    viewCount: 0,
    likeCount: 0,
    seo: {
      title: '고석희 목사님의 신앙과 사역 | 예수서원',
      description: '예수서원의 영적 지도자 고석희 목사님의 신앙 여정과 사역에 대한 깊이 있는 이야기를 들어보세요.',
      keywords: ['고석희 목사', '예수서원', '신앙', '목회 사역', '신앙과 학문'],
      ogImage: '/images/gallery/pastor-ko/pastor-ko-speaking.png',
      canonicalUrl: 'https://jesusacademia.org/blog/pastor-ko-seok-hee'
    }
  },
  {
    id: 'generation-61-experience',
    title: '61기로서의 예수서원 경험',
    slug: 'generation-61-experience',
    excerpt: '예수서원 61기 이소희가 전하는 예수서원에서의 특별한 경험과 성장 이야기입니다.',
    content: `# 61기로서의 예수서원 경험

## 들어가며

안녕하세요! 예수서원 61기 이소희입니다. 오늘은 제가 예수서원에서 경험한 특별한 시간들에 대해 이야기해보고 싶습니다.

## 예수서원에 오게 된 계기

처음 예수서원을 알게 된 것은 친구의 추천이었습니다. "복음과 지성을 통합한다"는 말에 호기심이 생겼고, 기독교 신앙을 학문적으로 접근할 수 있다는 점이 매력적이었습니다.

> "지식은 하나님을 더 깊이 알게 해주는 도구입니다" - 고석희 목사님

이 말씀이 제 마음에 깊이 새겨졌습니다.

## 61기 캠프의 특별함

### 1. 깊이 있는 성경 연구

61기 캠프에서는 성경을 문학적으로 읽는 새로운 방법을 배웠습니다. 단순히 교리적으로 접근하는 것이 아니라, 성경의 문학적 아름다움을 발견하는 과정이었습니다.

### 2. 다양한 배경의 동기들

61기 동기들은 각각 다른 전공과 배경을 가지고 있었습니다. 의학, 법학, 공학, 인문학 등 다양한 분야의 학생들이 함께 모여 성경을 연구하는 모습이 인상적이었습니다.

### 3. 뉴욕에서의 선교적 경험

예수서원이 위치한 뉴욕에서의 경험은 정말 특별했습니다. 다양한 문화와 종교가 공존하는 이 도시에서 기독교 신앙의 보편성을 새롭게 깨달을 수 있었습니다.

## 신앙과 학문의 통합

### 문학과 신학의 만남

제가 전공하는 문학을 통해 성경을 읽어보니, 이전에는 보지 못했던 새로운 의미들이 보이기 시작했습니다. 특히 시편의 시적 표현과 욥기의 극적 구조는 문학적 관점에서 접근할 때 더욱 풍성해졌습니다.

### 철학과 신앙의 대화

고전 철학을 공부하면서 기독교 신앙과의 연결고리를 찾는 과정도 흥미로웠습니다. 플라톤의 이데아론과 기독교의 영원한 세계관 사이의 유사점을 발견할 때는 정말 신기했습니다.

## 61기 동기들과의 교제

### 함께하는 성장

61기 동기들과의 관계는 단순한 학우 관계를 넘어서는 것이었습니다. 함께 성경을 읽고, 질문하고, 토론하는 과정에서 서로의 신앙이 성장하는 것을 경험했습니다.

### 서로 다른 관점의 소중함

각자 다른 전공과 배경을 가진 동기들의 관점은 제 신앙에 새로운 시각을 제공해주었습니다. 의학을 전공하는 동기의 생명에 대한 관점, 법학을 전공하는 동기의 정의에 대한 관점은 모두 제게 큰 영감이 되었습니다.

## 앞으로의 비전

### 학문을 통한 신앙의 깊이

앞으로도 제가 전공하는 문학을 통해 성경을 더 깊이 이해하고, 이를 통해 하나님을 더 가까이 알 수 있기를 소망합니다.

### 세상을 향한 사명

예수서원에서 배운 "복음과 지성의 통합"을 통해 세상에 하나님의 사랑을 전하는 사람이 되고 싶습니다. 학문적 지식을 바탕으로 한 신앙의 확신으로 세상을 변화시킬 수 있는 지도자가 되기를 기도합니다.

## 마무리

예수서원 61기로서의 경험은 제 인생에 큰 전환점이 되었습니다. 신앙과 학문이 분리된 것이 아니라 하나가 될 수 있다는 것을 깨달았고, 이를 통해 더 풍성한 기독교 신앙을 경험할 수 있었습니다.

61기 동기들과의 소중한 시간, 고석희 목사님의 가르침, 그리고 뉴욕에서의 특별한 경험들이 모두 하나가 되어 제 신앙을 성장시켜주었습니다.

---

*예수서원 61기 이소희가 전하는 소중한 경험담이었습니다.*`,
    author: sampleAuthors[3], // 61기 이소희
    categories: [sampleCategories[4], sampleCategories[3]], // 캠프 후기, 예수서원 소식
    tags: [sampleTags[6], sampleTags[5], sampleTags[0]], // 캠프, 예수서원, 복음
    featuredImage: {
      id: '5',
      url: '/images/camps/2025/camp-60/60기 사진/KakaoTalk_Photo_2025-08-08-00-12-23 001.jpeg',
      alt: '61기 캠프 참가자들',
      caption: '예수서원 61기 캠프 참가자들',
      width: 1200,
      height: 800,
      format: 'jpeg'
    },
    status: 'published',
    publishedAt: new Date('2025-01-08T09:00:00Z'),
    updatedAt: new Date('2025-01-08T09:00:00Z'),
    readingTime: 6,
    viewCount: 0,
    likeCount: 0,
    seo: {
      title: '61기로서의 예수서원 경험 | 예수서원 61기 이소희',
      description: '예수서원 61기 이소희가 전하는 예수서원에서의 특별한 경험과 성장 이야기입니다.',
      keywords: ['예수서원 61기', '이소희', '캠프 후기', '신앙과 학문', '예수서원'],
      ogImage: '/images/camps/2025/camp-60/60기 사진/KakaoTalk_Photo_2025-08-08-00-12-23 001.jpeg',
      canonicalUrl: 'https://jesusacademia.org/blog/generation-61-experience'
    }
  }
];

// 유틸리티 함수들
export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return sampleBlogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (categorySlug: string): BlogPost[] => {
  return sampleBlogPosts.filter(post => 
    post.categories.some(category => category.slug === categorySlug)
  );
};

export const getBlogPostsByTag = (tagSlug: string): BlogPost[] => {
  return sampleBlogPosts.filter(post => 
    post.tags.some(tag => tag.slug === tagSlug)
  );
};

export const getRelatedPosts = (currentPost: BlogPost, limit: number = 3): BlogPost[] => {
  const relatedPosts = sampleBlogPosts
    .filter(post => post.id !== currentPost.id)
    .filter(post => 
      post.categories.some(category => 
        currentPost.categories.some(currentCategory => 
          currentCategory.id === category.id
        )
      ) ||
      post.tags.some(tag => 
        currentPost.tags.some(currentTag => 
          currentTag.id === tag.id
        )
      )
    )
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
    .slice(0, limit);

  return relatedPosts;
};
