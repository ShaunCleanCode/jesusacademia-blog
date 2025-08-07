// 이미지 메타데이터 관리 시스템

export interface ImageMetadata {
  id: string;
  filename: string;
  path: string;
  title: string;
  description?: string;
  alt: string;
  category: 'logo' | 'campus' | 'camp' | 'gallery';
  tags: string[];
  date?: string;
  photographer?: string;
  participants?: string[];
  campInfo?: {
    year: number;
    campNumber: number;
    season?: string;
  };
}

export interface CampImageCollection {
  campId: string;
  year: number;
  campNumber: number;
  season?: string;
  title: string;
  description?: string;
  dates: {
    start: string;
    end: string;
  };
  images: {
    group: ImageMetadata[];
    individuals: ImageMetadata[];
    activities: ImageMetadata[];
  };
  participants: {
    count: number;
  };
}

// 로고 이미지 정보
export const LOGO_IMAGES: ImageMetadata[] = [
  {
    id: 'logo-main',
    filename: 'jesus-academia-logo-main.png',
    path: '/images/logos/jesus-academia-logo-main.png',
    title: '예수서원 메인 로고',
    alt: '예수서원 공식 로고',
    category: 'logo',
    tags: ['로고', '메인', '공식']
  },
  {
    id: 'logo-white',
    filename: 'jesus-academia-logo-white.png',
    path: '/images/logos/jesus-academia-logo-white.png',
    title: '예수서원 화이트 로고',
    alt: '예수서원 화이트 로고',
    category: 'logo',
    tags: ['로고', '화이트', '다크배경용']
  },
  {
    id: 'logo-text',
    filename: 'jesus-academia-logo-text.png',
    path: '/images/logos/jesus-academia-logo-text.png',
    title: '예수서원 텍스트 로고',
    alt: '예수서원 텍스트 로고',
    category: 'logo',
    tags: ['로고', '텍스트', '가로형']
  }
];

// 캠퍼스 시설 이미지 정보
export const CAMPUS_IMAGES: ImageMetadata[] = [
  {
    id: 'building-exterior',
    filename: 'building-exterior.jpg',
    path: '/images/campus/building-exterior.jpg',
    title: '예수서원 외관',
    description: '뉴욕 Oyster Bay에 위치한 예수서원 전경',
    alt: '예수서원 건물 외관',
    category: 'campus',
    tags: ['건물', '외관', 'Oyster Bay']
  },
  {
    id: 'lecture-hall',
    filename: 'lecture-hall.jpg',
    path: '/images/campus/lecture-hall.jpg',
    title: '강의실',
    description: '예수서원 메인 강의실',
    alt: '예수서원 강의실 내부',
    category: 'campus',
    tags: ['강의실', '내부', '교육시설']
  }
];

// 이미지 유틸리티 함수들
export function getLogoImages() {
  return LOGO_IMAGES;
}

export function getCampusImages() {
  return CAMPUS_IMAGES;
}

export function getMainLogo() {
  return LOGO_IMAGES.find(img => img.id === 'logo-main');
}

export function getWhiteLogo() {
  return LOGO_IMAGES.find(img => img.id === 'logo-white');
}

export function generateImagePath(category: string, subcategory?: string, filename?: string) {
  const basePath = '/images';
  if (subcategory && filename) {
    return `${basePath}/${category}/${subcategory}/${filename}`;
  } else if (subcategory) {
    return `${basePath}/${category}/${subcategory}/`;
  } else {
    return `${basePath}/${category}/`;
  }
}

export function generateCampImagePath(year: number, campNumber: number, type: 'group' | 'individuals' | 'activities', filename?: string) {
  const campId = `camp-${campNumber}`;
  const basePath = `/images/camps/${year}/${campId}/${type}`;
  return filename ? `${basePath}/${filename}` : `${basePath}/`;
}

// 캠프 이미지 컬렉션 생성 헬퍼
export function createCampImageCollection(
  year: number,
  campNumber: number,
  title: string,
  dates: { start: string; end: string },
  participantCount: number
): CampImageCollection {
  return {
    campId: `camp-${campNumber}`,
    year,
    campNumber,
    title,
    dates,
    images: {
      group: [],
      individuals: [],
      activities: []
    },
    participants: {
      count: participantCount
    }
  };
}

// 이미지 추가 헬퍼 함수
export function addImageToCollection(
  collection: CampImageCollection,
  type: 'group' | 'individuals' | 'activities',
  filename: string,
  title: string,
  description?: string,
  tags: string[] = []
): void {
  const image: ImageMetadata = {
    id: `${collection.campId}-${type}-${Date.now()}`,
    filename,
    path: generateCampImagePath(collection.year, collection.campNumber, type, filename),
    title,
    description,
    alt: `${collection.title} - ${title}`,
    category: 'camp',
    tags: ['캠프', collection.campId, ...tags],
    campInfo: {
      year: collection.year,
      campNumber: collection.campNumber
    }
  };

  collection.images[type].push(image);
}

// 이미지 검색 함수
export function searchImages(
  images: ImageMetadata[],
  query: {
    category?: string;
    tags?: string[];
    year?: number;
    campNumber?: number;
  }
): ImageMetadata[] {
  return images.filter(image => {
    if (query.category && image.category !== query.category) return false;
    if (query.tags && !query.tags.some(tag => image.tags.includes(tag))) return false;
    if (query.year && image.campInfo?.year !== query.year) return false;
    if (query.campNumber && image.campInfo?.campNumber !== query.campNumber) return false;
    return true;
  });
}

// 이미지 최적화를 위한 responsive image 생성
export function generateResponsiveImageSizes(basePath: string) {
  return {
    thumbnail: `${basePath}?w=150&h=150&fit=crop&auto=format`,
    small: `${basePath}?w=400&h=300&fit=crop&auto=format`,
    medium: `${basePath}?w=800&h=600&fit=crop&auto=format`,
    large: `${basePath}?w=1200&h=900&fit=crop&auto=format`,
    xlarge: `${basePath}?w=1920&h=1440&fit=crop&auto=format`
  };
}