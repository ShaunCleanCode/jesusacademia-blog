// 샘플 캠프 데이터 (실제 데이터 구조 예시)

import { CampImageCollection, createCampImageCollection, addImageToCollection } from './image-metadata';

// 2025년 캠프 데이터 예시 (최신)
export const CAMP_COLLECTIONS_2025: CampImageCollection[] = [
  // 제59기 캠프
  (() => {
    const camp59 = createCampImageCollection(
      2025,
      59,
      '예수서원 제59기 캠프',
      { start: '2025-03-15', end: '2025-03-22' },
      26
    );

    camp59.description = '2025년 봄 캠프로 복음과 지성의 통합을 주제로 한 특별한 시간이었습니다.';
    camp59.season = '봄';

    return camp59;
  })(),

  // 제60기 캠프
  (() => {
    const camp60 = createCampImageCollection(
      2025,
      60,
      '예수서원 제60기 캠프',
      { start: '2025-06-15', end: '2025-06-22' },
      28
    );

    camp60.description = '2025년 여름 캠프로 진행된 특별한 캠프였습니다.';
    camp60.season = '여름';

    return camp60;
  })(),

  // 제61기 캠프 (최신)
  (() => {
    const camp61 = createCampImageCollection(
      2025,
      61,
      '예수서원 제61기 캠프',
      { start: '2025-09-15', end: '2025-09-22' },
      30
    );

    camp61.description = '2025년 가을 캠프로 현재까지 진행된 최신 캠프입니다.';
    camp61.season = '가을';

    return camp61;
  })()
];

// 2024년 캠프 데이터 예시
export const CAMP_COLLECTIONS_2024: CampImageCollection[] = [
  // 제56기 캠프
  (() => {
    const camp56 = createCampImageCollection(
      2024,
      56,
      '예수서원 제56기 캠프',
      { start: '2024-03-15', end: '2024-03-22' },
      28
    );

    camp56.description = '2024년 봄 캠프로 전 세계에서 모인 28명의 참가자들과 함께한 복음과 지성의 통합을 주제로 한 특별한 시간이었습니다.';
    camp56.season = '봄';

    return camp56;
  })(),

  // 제57기 캠프
  (() => {
    const camp57 = createCampImageCollection(
      2024,
      57,
      '예수서원 제57기 캠프',
      { start: '2024-06-20', end: '2024-06-27' },
      30
    );

    camp57.description = '2024년 여름 캠프로 만원인 30명의 참가자들과 함께 진행된 특별한 캠프였습니다.';
    camp57.season = '여름';

    return camp57;
  })(),

  // 제58기 캠프
  (() => {
    const camp58 = createCampImageCollection(
      2024,
      58,
      '예수서원 제58기 캠프',
      { start: '2024-09-20', end: '2024-09-27' },
      25
    );

    camp58.description = '2024년 가을 캠프였습니다.';
    camp58.season = '가을';

    return camp58;
  })()
];

// 2023년 캠프 데이터 예시
export const CAMP_COLLECTIONS_2023: CampImageCollection[] = [
  (() => {
    const camp38 = createCampImageCollection(
      2023,
      38,
      '예수서원 제38기 캠프',
      { start: '2023-03-18', end: '2023-03-25' },
      25
    );

    camp38.description = '2023년 봄 캠프';
    camp38.season = '봄';

    return camp38;
  })(),

  (() => {
    const camp39 = createCampImageCollection(
      2023,
      39,
      '예수서원 제39기 캠프',
      { start: '2023-06-10', end: '2023-06-17' },
      27
    );

    camp39.description = '2023년 여름 캠프';
    camp39.season = '여름';

    return camp39;
  })(),

  (() => {
    const camp40 = createCampImageCollection(
      2023,
      40,
      '예수서원 제40기 캠프',
      { start: '2023-09-15', end: '2023-09-22' },
      29
    );

    camp40.description = '2023년 가을 캠프';
    camp40.season = '가을';

    return camp40;
  })()
];

// 모든 캠프 컬렉션
export const ALL_CAMP_COLLECTIONS = [
  ...CAMP_COLLECTIONS_2025,
  ...CAMP_COLLECTIONS_2024,
  ...CAMP_COLLECTIONS_2023
];

// 특정 연도의 캠프 가져오기
export function getCampsByYear(year: number): CampImageCollection[] {
  return ALL_CAMP_COLLECTIONS.filter(camp => camp.year === year);
}

// 특정 캠프 가져오기
export function getCampByNumber(campNumber: number): CampImageCollection | undefined {
  return ALL_CAMP_COLLECTIONS.find(camp => camp.campNumber === campNumber);
}

// 최신 캠프 가져오기
export function getLatestCamps(count: number = 5): CampImageCollection[] {
  return ALL_CAMP_COLLECTIONS
    .sort((a, b) => b.campNumber - a.campNumber)
    .slice(0, count);
}

// 캠프 통계
export function getCampStats() {
  const totalCamps = ALL_CAMP_COLLECTIONS.length;
  const totalParticipants = ALL_CAMP_COLLECTIONS.reduce((sum, camp) => sum + camp.participants.count, 0);
  const totalImages = ALL_CAMP_COLLECTIONS.reduce((sum, camp) => 
    sum + camp.images.group.length + camp.images.individuals.length + camp.images.activities.length, 0);

  return {
    totalCamps,
    totalParticipants,
    totalImages,
    averageParticipants: Math.round(totalParticipants / totalCamps),
    years: [...new Set(ALL_CAMP_COLLECTIONS.map(camp => camp.year))].sort((a, b) => b - a)
  };
}

// 전체 캠프 범위 (1기부터 61기까지)
export const CAMP_RANGE = {
  min: 1,
  max: 61,
  current: 61,
  total: 61
};

// 특정 기수의 캠프 생성 (동적으로 생성)
export function createCampById(campNumber: number): CampImageCollection | null {
  if (campNumber < CAMP_RANGE.min || campNumber > CAMP_RANGE.max) {
    return null;
  }

  // 연도 계산 (대략적으로 1기부터 시작하여 현재까지)
  const currentYear = 2025;
  const estimatedYear = currentYear - Math.floor((CAMP_RANGE.current - campNumber) / 3);
  
  // 시즌 계산 (연간 3회 캠프 가정)
  const seasonIndex = campNumber % 3;
  const seasons = ['봄', '여름', '가을'];
  const season = seasons[seasonIndex];

  const camp = createCampImageCollection(
    estimatedYear,
    campNumber,
    `예수서원 제${campNumber}기 캠프`,
    { 
      start: `${estimatedYear}-${seasonIndex === 0 ? '03' : seasonIndex === 1 ? '06' : '09'}-15`, 
      end: `${estimatedYear}-${seasonIndex === 0 ? '03' : seasonIndex === 1 ? '06' : '09'}-22` 
    },
    Math.floor(Math.random() * 10) + 20 // 20-30명 사이
  );

  camp.description = `${estimatedYear}년 ${season} 캠프`;
  camp.season = season;

  return camp;
}

// 모든 캠프 목록 가져오기 (1-61기)
export function getAllCampNumbers(): number[] {
  return Array.from({ length: CAMP_RANGE.total }, (_, i) => i + 1);
}

// 캠프 번호 유효성 검사
export function isValidCampNumber(campNumber: number): boolean {
  return campNumber >= CAMP_RANGE.min && campNumber <= CAMP_RANGE.max;
}

// 이미지 업로드 헬퍼 (실제 구현 시 사용)
export function addImagesToExistingCamp(
  campNumber: number,
  type: 'group' | 'individuals' | 'activities',
  images: Array<{
    filename: string;
    title: string;
    description?: string;
    tags?: string[];
  }>
): boolean {
  let camp = getCampByNumber(campNumber);
  
  // 기존 데이터에 없으면 동적으로 생성
  if (!camp) {
    camp = createCampById(campNumber);
    if (!camp) return false;
  }

  images.forEach(img => {
    addImageToCollection(
      camp!,
      type,
      img.filename,
      img.title,
      img.description,
      img.tags
    );
  });

  return true;
}