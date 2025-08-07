// 샘플 캠프 데이터 (실제 데이터 구조 예시)

import { CampImageCollection, createCampImageCollection, addImageToCollection } from './image-metadata';

// 2024년 캠프 데이터 예시
export const CAMP_COLLECTIONS_2024: CampImageCollection[] = [
  // 제41기 캠프
  (() => {
    const camp41 = createCampImageCollection(
      2024,
      41,
      '예수서원 제41기 캠프',
      { start: '2024-03-15', end: '2024-03-22' },
      28
    );

    camp41.description = '2024년 봄 캠프로 전 세계에서 모인 28명의 참가자들과 함께한 복음과 지성의 통합을 주제로 한 특별한 시간이었습니다.';
    camp41.season = '봄';
    camp41.participants.demographics = ['총장 2명', '박사 3명', '선교사 5명', '목사 4명', '청년 8명', 'MK 3명', 'PK 2명', '평신도 1명'];

    // 샘플 단체사진 (실제로는 이미지가 업로드되면 추가)
    // addImageToCollection(camp41, 'group', 'group-photo-01.jpg', '개회식 단체사진', '제41기 캠프 개회식에서 촬영한 전체 단체사진', ['개회식', '전체']);
    // addImageToCollection(camp41, 'group', 'graduation.jpg', '수료식 단체사진', '캠프 수료식에서의 기념사진', ['수료식', '졸업']);

    return camp41;
  })(),

  // 제42기 캠프
  (() => {
    const camp42 = createCampImageCollection(
      2024,
      42,
      '예수서원 제42기 캠프',
      { start: '2024-07-20', end: '2024-07-27' },
      30
    );

    camp42.description = '2024년 여름 캠프로 만원인 30명의 참가자들과 함께 진행된 특별한 캠프였습니다.';
    camp42.season = '여름';
    camp42.participants.demographics = ['총장 1명', '박사 4명', '선교사 6명', '목사 5명', '청년 10명', 'MK 2명', 'PK 1명', '평신도 1명'];

    return camp42;
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
  const camp = getCampByNumber(campNumber);
  if (!camp) return false;

  images.forEach(img => {
    addImageToCollection(
      camp,
      type,
      img.filename,
      img.title,
      img.description,
      img.tags
    );
  });

  return true;
}