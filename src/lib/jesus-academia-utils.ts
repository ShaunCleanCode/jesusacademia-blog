// 예수서원 기관 정보 유틸리티

export interface JesusAcademiaInfo {
  name: string;
  englishName: string;
  location: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    website: string;
  };
  worship: {
    day: string;
    time: string;
    duration: string;
    location: string;
  };
  camp: {
    participants: number;
    cost: string;
    duration: string;
    services: string[];
    schedule: {
      weekdays: string;
      weekend: string;
    };
  };
  participants: string[];
  facilities: string[];
  programs: string[];
  advantages: string[];
}

export const JESUS_ACADEMIA_INFO: JesusAcademiaInfo = {
  name: "예수서원",
  englishName: "Jesus Academia",
  location: "뉴욕 롱아일랜드 Oyster Bay",
  contact: {
    phone: "516.277.2082",
    email: "JesusChristAcademia@gmail.com",
    address: "1330 Wolver Hollow Rd., Oyster Bay, NY 11771",
    website: "https://www.jesusacademia.org"
  },
  worship: {
    day: "매주 일요일",
    time: "오전 11시 ~ 오후 1시",
    duration: "2시간",
    location: "예수서원 본관"
  },
  camp: {
    participants: 30,
    cost: "무료",
    duration: "약 1주일",
    services: ["식사", "숙소", "강의", "주말 뉴욕 시내 여행"],
    schedule: {
      weekdays: "평일 집중 강의 및 훈련",
      weekend: "뉴욕 시내 자유 여행"
    }
  },
  participants: [
    "총장님들",
    "박사님들",
    "선교사님들",
    "한인 목사님들",
    "미주 목사님들",
    "한인 청년들",
    "미주 청년들",
    "전 세계 MK들 (Missionary Kids)",
    "전 세계 PK들 (Pastor Kids)",
    "평신도들"
  ],
  facilities: [
    "강의실",
    "숙박실",
    "식당",
    "공용 공간"
  ],
  programs: [
    "기독교 인문학",
    "변증학",
    "제자훈련",
    "선교 리더십"
  ],
  advantages: [
    "무료 참가",
    "다양한 배경의 참가자",
    "실용적 훈련",
    "자연 친화적 환경",
    "문화 체험"
  ]
};

// 예수서원 정보를 가져오는 함수들
export function getJesusAcademiaBasicInfo() {
  return {
    name: JESUS_ACADEMIA_INFO.name,
    englishName: JESUS_ACADEMIA_INFO.englishName,
    location: JESUS_ACADEMIA_INFO.location
  };
}

export function getJesusAcademiaContactInfo() {
  return JESUS_ACADEMIA_INFO.contact;
}

export function getJesusAcademiaWorshipInfo() {
  return JESUS_ACADEMIA_INFO.worship;
}

export function getJesusAcademiaCampInfo() {
  return JESUS_ACADEMIA_INFO.camp;
}

export function getJesusAcademiaParticipants() {
  return JESUS_ACADEMIA_INFO.participants;
}

export function getJesusAcademiaFacilities() {
  return JESUS_ACADEMIA_INFO.facilities;
}

export function getJesusAcademiaPrograms() {
  return JESUS_ACADEMIA_INFO.programs;
}

export function getJesusAcademiaAdvantages() {
  return JESUS_ACADEMIA_INFO.advantages;
}

// SEO용 구조화 데이터 생성
export function generateJesusAcademiaSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": JESUS_ACADEMIA_INFO.name,
    "alternateName": JESUS_ACADEMIA_INFO.englishName,
    "description": "복음과 지성을 통합하는 기독교 인문학 아카데미",
    "url": JESUS_ACADEMIA_INFO.contact.website,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Oyster Bay",
      "addressRegion": "NY",
      "addressCountry": "US",
      "streetAddress": "1330 Wolver Hollow Rd."
    },
    "telephone": JESUS_ACADEMIA_INFO.contact.phone,
    "email": JESUS_ACADEMIA_INFO.contact.email,
    "sameAs": [
      JESUS_ACADEMIA_INFO.contact.website,
      "https://www.youtube.com/user/plumhair388/videos",
      "https://www.instagram.com/jesus_academia/"
    ],
    "serviceType": "기독교 인문학 교육",
    "areaServed": "전 세계",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "예수서원 캠프 프로그램",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "EducationalService",
            "name": "기독교 인문학 캠프",
            "description": "무료 캠프 프로그램"
          },
          "price": "0",
          "priceCurrency": "USD"
        }
      ]
    }
  };
}

// 블로그 글 생성 시 활용할 수 있는 템플릿 함수들
export function getJesusAcademiaIntroduction() {
  return `${JESUS_ACADEMIA_INFO.name}(${JESUS_ACADEMIA_INFO.englishName})은 ${JESUS_ACADEMIA_INFO.location}에 위치한 복음과 지성을 통합하는 기독교 인문학 아카데미입니다.`;
}

export function getJesusAcademiaWorshipDescription() {
  const worship = JESUS_ACADEMIA_INFO.worship;
  return `${JESUS_ACADEMIA_INFO.name}에서는 ${worship.day} ${worship.time}에 ${worship.location}에서 예배가 진행됩니다.`;
}

export function getJesusAcademiaCampDescription() {
  const camp = JESUS_ACADEMIA_INFO.camp;
  return `${JESUS_ACADEMIA_INFO.name}은 연중 여러 차례 캠프를 진행하며, 기수당 약 ${camp.participants}명을 받고 있습니다. 모든 캠프는 ${camp.cost}로 진행되며, ${camp.services.join(', ')}이 제공됩니다.`;
}

export function getJesusAcademiaParticipantsDescription() {
  return `${JESUS_ACADEMIA_INFO.name}의 캠프는 ${JESUS_ACADEMIA_INFO.participants.join(', ')} 등 모든 분들에게 오픈되어 있습니다.`;
}

export function getJesusAcademiaAdvantagesDescription() {
  return `${JESUS_ACADEMIA_INFO.name}의 프로그램은 ${JESUS_ACADEMIA_INFO.advantages.join(', ')} 등의 장점을 제공합니다.`;
} 