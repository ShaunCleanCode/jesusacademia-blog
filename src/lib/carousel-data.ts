// 캐러셀용 이미지 데이터 관리

export interface CarouselImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  aspectRatio?: 'portrait' | 'landscape' | 'square';
}

// 60기 사진들을 캐러셀용 데이터로 변환
export function generateCamp60CarouselImages(): CarouselImage[] {
  const basePath = '/images/camps/2025/camp-60/60기 사진';
  
  return [
    {
      id: 'camp60-001',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-12-23 001.jpeg`,
      alt: '예수서원 60기 캠프 - 강의 현장',
      title: '60기 캠프 강의',
      description: '고석희 목사의 기독교 인문학 강의',
      aspectRatio: 'landscape'
    },
    {
      id: 'camp60-002',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-12-26 002.jpeg`,
      alt: '예수서원 60기 캠프 - 토론 시간',
      title: '60기 캠프 토론',
      description: '참가자들의 활발한 토론',
      aspectRatio: 'landscape'
    },
    {
      id: 'camp60-003',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-12-28 003.jpeg`,
      alt: '예수서원 60기 캠프 - 기도 시간',
      title: '60기 캠프 기도',
      description: '함께하는 기도 시간',
      aspectRatio: 'portrait'
    },
    {
      id: 'camp60-004',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-12-30 004.jpeg`,
      alt: '예수서원 60기 캠프 - 식사 시간',
      title: '60기 캠프 식사',
      description: '함께하는 식사 시간',
      aspectRatio: 'landscape'
    },
    {
      id: 'camp60-005',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-12-31 005.jpeg`,
      alt: '예수서원 60기 캠프 - 휴식 시간',
      title: '60기 캠프 휴식',
      description: '자연 속에서의 휴식',
      aspectRatio: 'landscape'
    },
    {
      id: 'camp60-006',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-12-32 006.jpeg`,
      alt: '예수서원 60기 캠프 - 단체 사진',
      title: '60기 캠프 단체',
      description: '60기 캠프 참가자들',
      aspectRatio: 'landscape'
    },
    {
      id: 'camp60-007',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-12-33 007.jpeg`,
      alt: '예수서원 60기 캠프 - 개인 사진',
      title: '60기 캠프 개인',
      description: '참가자 개인 사진',
      aspectRatio: 'portrait'
    },
    {
      id: 'camp60-008',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-12-33 008.jpeg`,
      alt: '예수서원 60기 캠프 - 활동 사진',
      title: '60기 캠프 활동',
      description: '다양한 활동 모습',
      aspectRatio: 'landscape'
    },
    {
      id: 'camp60-009',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-12-34 009.jpeg`,
      alt: '예수서원 60기 캠프 - 교제 시간',
      title: '60기 캠프 교제',
      description: '함께하는 교제 시간',
      aspectRatio: 'landscape'
    },
    {
      id: 'camp60-010',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-12-34 010.jpeg`,
      alt: '예수서원 60기 캠프 - 마무리',
      title: '60기 캠프 마무리',
      description: '캠프 마무리 모습',
      aspectRatio: 'landscape'
    }
  ];
}

// 추가 이미지들 (더 많은 사진들)
export function generateExtendedCamp60Images(): CarouselImage[] {
  const basePath = '/images/camps/2025/camp-60/60기 사진';
  
  return [
    {
      id: 'camp60-011',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-14-56 001.jpeg`,
      alt: '예수서원 60기 캠프 - 추가 활동',
      title: '60기 캠프 활동',
      aspectRatio: 'landscape'
    },
    {
      id: 'camp60-012',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-14-58 002.jpeg`,
      alt: '예수서원 60기 캠프 - 추가 모습',
      title: '60기 캠프 모습',
      aspectRatio: 'landscape'
    },
    {
      id: 'camp60-013',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-14-59 003.jpeg`,
      alt: '예수서원 60기 캠프 - 추가 사진',
      title: '60기 캠프 사진',
      aspectRatio: 'portrait'
    },
    {
      id: 'camp60-014',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-14-59 004.jpeg`,
      alt: '예수서원 60기 캠프 - 추가 활동',
      title: '60기 캠프 활동',
      aspectRatio: 'landscape'
    },
    {
      id: 'camp60-015',
      src: `${basePath}/KakaoTalk_Photo_2025-08-08-00-15-00 005.jpeg`,
      alt: '예수서원 60기 캠프 - 추가 모습',
      title: '60기 캠프 모습',
      aspectRatio: 'landscape'
    }
  ];
}

// 모든 캐러셀 이미지 가져오기
export function getAllCarouselImages(): CarouselImage[] {
  return [
    ...generateCamp60CarouselImages(),
    ...generateExtendedCamp60Images()
  ];
}

// 이미지 필터링 유틸리티
export function filterImagesByAspectRatio(
  images: CarouselImage[], 
  aspectRatio: 'portrait' | 'landscape' | 'square'
): CarouselImage[] {
  return images.filter(img => img.aspectRatio === aspectRatio);
}

// 랜덤 이미지 선택
export function getRandomImages(
  images: CarouselImage[], 
  count: number
): CarouselImage[] {
  const shuffled = [...images].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
} 