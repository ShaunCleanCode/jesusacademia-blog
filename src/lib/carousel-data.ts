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

// 모든 60기 사진들을 포함하는 함수
export function generateAllCamp60Images(): CarouselImage[] {
  const basePath = '/images/camps/2025/camp-60/60기 사진';
  
  // 파일명 배열 (실제 파일명들)
  const imageFiles = [
    'KakaoTalk_Photo_2025-08-08-00-12-23 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-12-26 002.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-12-28 003.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-12-30 004.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-12-31 005.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-12-32 006.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-12-33 007.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-12-33 008.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-12-34 009.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-12-34 010.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-14-56 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-14-58 002.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-14-59 003.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-14-59 004.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-15-00 005.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-15-00 006.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-15-00 007.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-15-00 008.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-15-19 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-15-22 002.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-15-23 003.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-15-23 004.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-15-24 005.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-15-27 006.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-15-28 007.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-15-29 008.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-19-56 004.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-19-59 005.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-23-06 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-23-08 002.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-23-09 003.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-23-09 004.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-19 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-19 002.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-21 003.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-22 004.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-24 005.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-26 006.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-28 007.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-29 008.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-31 009.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-33 010.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-35 011.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-37 012.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-39 013.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-40 014.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-40 015.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-42 016.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-44 017.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-46 018.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-48 019.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-49 020.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-51 021.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-53 022.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-55 023.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-25-57 024.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-26-01 026.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-26-03 027.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-26-05 028.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-26-07 029.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-26-09 030.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-26-54 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-26-54 002.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-26-56 003.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-26-58 004.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-27-00 005.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-27-04.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-27-34 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-27-36 002.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-27-39 003.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-27-42 004.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-27-44 005.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-27-47 006.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-27-49 007.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-27-52 008.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-27-54 009.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-28-14 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-28-18 002.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-28-20 003.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-28-22 004.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-28-25 005.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-28-28 006.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-28-30 007.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-28-33 008.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-28-35 009.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-28-40 010.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-28-42 011.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-28-45 012.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-29-07 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-29-09 002.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-29-12 003.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-29-14 004.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-29-35 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-29-39 002.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-29-43 003.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-29-47 004.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-29-51 005.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-29-55 006.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-30-34 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-30-37 002.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-30-40 003.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-30-44 004.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-30-48 005.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-30-52 006.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-30-56 007.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-31-00 008.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-31-04 009.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-31-08 010.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-31-11 011.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-31-11 012.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-31-26 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-31-48 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-31-52 002.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-32-08 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-32-26 001.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-32-30 002.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-32-30 003.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-32-33 004.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-32-37 005.jpeg',
    'KakaoTalk_Photo_2025-08-08-00-32-40 006.jpeg'
  ];

  return imageFiles.map((filename, index) => {
    // 파일명에서 시간 정보를 추출하여 대략적인 aspectRatio 추정
    const isPortrait = filename.includes('003') || filename.includes('007') || 
                      filename.includes('013') || filename.includes('015') ||
                      filename.includes('021') || filename.includes('023') ||
                      filename.includes('025') || filename.includes('027') ||
                      filename.includes('029') || filename.includes('031') ||
                      filename.includes('033') || filename.includes('035') ||
                      filename.includes('037') || filename.includes('039') ||
                      filename.includes('041') || filename.includes('043') ||
                      filename.includes('045') || filename.includes('047') ||
                      filename.includes('049') || filename.includes('051') ||
                      filename.includes('053') || filename.includes('055') ||
                      filename.includes('057') || filename.includes('059') ||
                      filename.includes('061') || filename.includes('063') ||
                      filename.includes('065') || filename.includes('067') ||
                      filename.includes('069') || filename.includes('071') ||
                      filename.includes('073') || filename.includes('075') ||
                      filename.includes('077') || filename.includes('079') ||
                      filename.includes('081') || filename.includes('083') ||
                      filename.includes('085') || filename.includes('087') ||
                      filename.includes('089') || filename.includes('091') ||
                      filename.includes('093') || filename.includes('095') ||
                      filename.includes('097') || filename.includes('099');

    return {
      id: `camp60-${String(index + 1).padStart(3, '0')}`,
      src: `${basePath}/${filename}`,
      alt: `예수서원 60기 캠프 - ${index + 1}번째 사진`,
      title: `60기 캠프 사진 ${index + 1}`,
      description: `예수서원 60기 캠프의 소중한 순간`,
      aspectRatio: isPortrait ? 'portrait' : 'landscape'
    };
  });
}

// 모든 캐러셀 이미지 가져오기
export function getAllCarouselImages(): CarouselImage[] {
  return generateAllCamp60Images();
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