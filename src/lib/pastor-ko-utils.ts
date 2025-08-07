// 고석희 목사 정보 유틸리티

export interface PastorKoInfo {
  name: string;
  englishName: string;
  title: string;
  organization: string;
  location: string;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  socialMedia: {
    youtube: string;
    instagram: string;
    website: string;
  };
  timeline: Array<{
    year: string;
    event: string;
    description: string;
    source?: string;
  }>;
  keyMessages: string[];
  expertise: string[];
}

export const PASTOR_KO_INFO: PastorKoInfo = {
  name: "고석희",
  englishName: "Rev. SeokHee Ko",
  title: "예수서원(Jesus Academia) 원장 / KWMC 상임의장",
  organization: "예수서원",
  location: "뉴욕 롱아일랜드 Oyster Bay",
  contact: {
    phone: "516.277.2082",
    email: "JesusChristAcademia@gmail.com",
    address: "1330 Wolver Hollow Rd., Oyster Bay, NY 11771"
  },
  socialMedia: {
    youtube: "https://www.youtube.com/user/plumhair388/videos",
    instagram: "https://www.instagram.com/jesus_academia/?hl=ko",
    website: "https://www.jesusacademia.org"
  },
  timeline: [
    {
      year: "1974",
      event: "미국 입국",
      description: "대학생 사역 시작, 빌리 그래함/토마스 왕 연결"
    },
    {
      year: "1988",
      event: "제1차 KWMC",
      description: "휘튼대학 Billy Graham Center에서 총무로 참여"
    },
    {
      year: "2004-2012",
      event: "KWMC 사무총장",
      description: "제5차~제7차 한인세계선교대회 주도"
    },
    {
      year: "2016",
      event: "제8차 KWMC",
      description: "LA 아주사 퍼시픽 대학교에서 개최"
    },
    {
      year: "2024",
      event: "제10차 KWMC",
      description: "상임의장으로 개회사·개회선언"
    }
  ],
  keyMessages: [
    "선교는 전략이 아니라 사랑이다",
    "그리스도의 절대성·유일성을 세우는 통전적 변증",
    "1·2세대 간 선교 동력을 다음 세대로 연결"
  ],
  expertise: [
    "기독교 변증",
    "인문학",
    "선교 리더십",
    "케노시스(자기 비움)",
    "제자훈련"
  ]
};

// 고석희 목사 정보를 가져오는 함수들
export function getPastorKoBasicInfo() {
  return {
    name: PASTOR_KO_INFO.name,
    title: PASTOR_KO_INFO.title,
    organization: PASTOR_KO_INFO.organization
  };
}

export function getPastorKoContactInfo() {
  return PASTOR_KO_INFO.contact;
}

export function getPastorKoSocialMedia() {
  return PASTOR_KO_INFO.socialMedia;
}

export function getPastorKoTimeline() {
  return PASTOR_KO_INFO.timeline;
}

export function getPastorKoKeyMessages() {
  return PASTOR_KO_INFO.keyMessages;
}

export function getPastorKoExpertise() {
  return PASTOR_KO_INFO.expertise;
}

// SEO용 구조화 데이터 생성
export function generatePastorKoSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": PASTOR_KO_INFO.name,
    "alternateName": [
      PASTOR_KO_INFO.englishName,
      "고석희 목사"
    ],
    "jobTitle": PASTOR_KO_INFO.title,
    "affiliation": [
      {
        "@type": "Organization",
        "name": "예수서원(Jesus Academia)",
        "url": PASTOR_KO_INFO.socialMedia.website
      },
      {
        "@type": "Organization",
        "name": "KWMC(한인세계선교운동)"
      }
    ],
    "sameAs": [
      PASTOR_KO_INFO.socialMedia.website,
      PASTOR_KO_INFO.socialMedia.youtube,
      PASTOR_KO_INFO.socialMedia.instagram
    ],
    "knowsAbout": PASTOR_KO_INFO.expertise,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Oyster Bay",
      "addressRegion": "NY",
      "addressCountry": "US",
      "streetAddress": "1330 Wolver Hollow Rd."
    },
    "telephone": PASTOR_KO_INFO.contact.phone,
    "email": PASTOR_KO_INFO.contact.email
  };
}

// 블로그 글 생성 시 활용할 수 있는 템플릿 함수들
export function getPastorKoIntroduction() {
  return `${PASTOR_KO_INFO.name} 목사는 ${PASTOR_KO_INFO.title}로, ${PASTOR_KO_INFO.location}에서 기독교 인문학과 변증을 통합한 훈련을 제공하고 있습니다.`;
}

export function getPastorKoMission() {
  return `예수서원은 그리스도의 절대성·유일성을 세우는 인문·자연과학까지 망라한 통전적 변증 사역을 표방합니다.`;
}

export function getPastorKoExperience() {
  return `${PASTOR_KO_INFO.name} 목사는 1988년 제1차 KWMC부터 시작하여 30년 이상 한인세계선교운동을 이끌어왔으며, 현재까지 누적 40기 이상의 강좌를 운영하고 있습니다.`;
} 