# 🎓 예수서원 졸업앨범 시스템 기획서

## 📚 **프로젝트 개요**
- **목표**: 해리포터 스타일의 3D 인터랙티브 디지털 졸업앨범 구현
- **테마**: 마법학교 교과서 같은 입체적이고 신비로운 느낌
- **핵심**: 실제 책을 넘기는 듯한 자연스러운 인터랙션과 3D 효과

## 🎨 **디자인 컨셉**

### **1.1 시각적 테마**
```
🎭 마법학교 교과서 스타일
├── 📖 골드/브론즈 테두리
├── 🧙‍♂️ 마법적인 글꼴 (Gryffindor 스타일)
├── ✨ 반짝이는 효과와 입체감
├── 🌟 페이지 넘김 시 마법 입자 효과
└── 🎪 3D 페이지 굽힘 애니메이션
```

### **1.2 색상 팔레트**
```css
/* 골드 테마 */
--album-gold: #D4AF37
--album-bronze: #CD7F32
--album-cream: #F5F5DC
--album-dark: #2C2C2C
--album-accent: #FFD700

/* 마법 효과 */
--magic-sparkle: #FFE5B4
--magic-glow: #FFF8DC
--page-shadow: rgba(0,0,0,0.3)
```

## 🏗️ **기술적 구조**

### **2.1 핵심 기술 스택**
```typescript
// 3D 렌더링
- Three.js (3D 페이지 모델링)
- React Three Fiber (React 통합)
- Framer Motion (페이지 전환 애니메이션)

// 인터랙션
- Hammer.js (터치 제스처)
- React Spring (물리 기반 애니메이션)
- Intersection Observer (스크롤 트리거)

// 이미지 처리
- Next.js Image (최적화)
- Canvas API (이미지 편집)
- WebGL (고성능 렌더링)
```

### **2.2 컴포넌트 아키텍처**
```
src/components/album/
├── Album3DContainer.tsx      # 3D 책 컨테이너
├── AlbumPage.tsx            # 개별 페이지 컴포넌트
├── PageTurner.tsx           # 페이지 넘김 로직
├── AlbumNavigation.tsx      # 앨범 네비게이션
├── PhotoGallery.tsx         # 사진 갤러리
├── ParticipantCard.tsx      # 참석자 카드
├── MagicEffects.tsx         # 마법 효과
└── AlbumControls.tsx        # 앨범 제어
```

## 📖 **앨범 구조 및 콘텐츠**

### **3.1 기본 앨범 구성**
```
📚 60기 졸업앨범
├── 📄 표지 (Cover)
│   ├── 기수 정보 (60기)
│   ├── 예수서원 로고
│   └── 마법적 장식 요소
│
├── 📄 목차 (Table of Contents)
│   ├── 전체 기수 사진
│   ├── 참석자별 개인사진
│   ├── 활동 사진들
│   └── 마지막 페이지
│
├── 📄 전체 기수 사진 (Group Photo)
│   ├── 메인 그룹 사진
│   ├── 기수 소개 텍스트
│   └── 캠프 정보
│
├── 📄 참석자별 개인사진 (Individual Photos)
│   ├── 참석자 1 (개인사진 + 소개)
│   ├── 참석자 2 (개인사진 + 소개)
│   └── ... (참석자 수만큼)
│
├── 📄 활동 사진들 (Activity Photos)
│   ├── 캠프 활동 사진들
│   ├── 팀 빌딩 활동
│   ├── 강의/세미나
│   └── 특별 이벤트
│
└── 📄 마지막 페이지 (Epilogue)
    ├── 졸업 메시지
    ├── 향후 계획
    └── 연락처 정보
```

### **3.2 데이터 구조**
```typescript
interface AlbumData {
  id: string;                    // 앨범 ID (예: "60기")
  title: string;                 // 앨범 제목
  year: number;                  // 졸업 연도
  coverImage: string;            // 표지 이미지
  totalPages: number;            // 총 페이지 수
  
  // 페이지별 데이터
  pages: {
    [pageNumber: number]: {
      type: 'cover' | 'toc' | 'group' | 'individual' | 'activity' | 'epilogue';
      title: string;
      content: PageContent;
      images: ImageData[];
      layout: 'single' | 'double' | 'gallery' | 'grid';
    };
  };
  
  // 참석자 정보
  participants: Participant[];
  
  // 메타데이터
  metadata: {
    createdAt: Date;
    updatedAt: Date;
    totalPhotos: number;
    tags: string[];
  };
}

interface Participant {
  id: string;
  name: string;
  photo: string;
  introduction: string;
  role?: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
    email?: string;
  };
}

interface ImageData {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  position: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}
```

## 🎭 **3D 인터랙션 시스템**

### **4.1 페이지 넘김 애니메이션**
```typescript
// 물리 기반 페이지 넘김
interface PageTurnAnimation {
  // 3D 변환
  transform: {
    rotateY: number;        // Y축 회전 (페이지 굽힘)
    translateX: number;     // X축 이동
    translateZ: number;     // Z축 깊이
    scale: number;          // 크기 조정
  };
  
  // 그림자 효과
  shadow: {
    intensity: number;      // 그림자 강도
    blur: number;          // 그림자 블러
    color: string;         // 그림자 색상
  };
  
  // 마법 효과
  magic: {
    particles: boolean;     // 입자 효과
    glow: boolean;         // 빛나는 효과
    sparkles: boolean;     // 반짝임 효과
  };
}
```

### **4.2 제스처 인식**
```typescript
// 터치/마우스 제스처
interface GestureHandlers {
  // 스와이프 제스처
  onSwipeLeft: () => void;     // 다음 페이지
  onSwipeRight: () => void;    // 이전 페이지
  
  // 핀치 줌
  onPinchIn: (scale: number) => void;   // 확대
  onPinchOut: (scale: number) => void;  // 축소
  
  // 더블 탭
  onDoubleTap: (x: number, y: number) => void;  // 확대/축소
  
  // 롱 프레스
  onLongPress: (x: number, y: number) => void;  // 컨텍스트 메뉴
}
```

### **4.3 3D 카메라 시스템**
```typescript
// 3D 카메라 제어
interface Camera3D {
  position: {
    x: number;
    y: number;
    z: number;
  };
  
  rotation: {
    x: number;  // Pitch
    y: number;  // Yaw
    z: number;  // Roll
  };
  
  // 카메라 모드
  mode: 'fixed' | 'follow' | 'free';
  
  // 줌 레벨
  zoom: {
    min: number;
    max: number;
    current: number;
  };
}
```

## 📱 **반응형 디자인**

### **5.1 디바이스별 최적화**
```typescript
// 모바일 최적화
const mobileConfig = {
  // 터치 인터랙션
  touchSensitivity: 0.8;
  swipeThreshold: 50;      // 픽셀
  
  // 성능 최적화
  maxSimultaneousTouches: 2;
  animationFrameRate: 60;
  
  // UI 요소
  buttonSize: 44;          // 터치 최소 크기
  spacing: 16;             // 요소 간격
};

// 데스크톱 최적화
const desktopConfig = {
  // 마우스 인터랙션
  hoverEffects: true;
  scrollWheel: true;
  
  // 키보드 단축키
  keyboardShortcuts: {
    'ArrowLeft': 'prevPage',
    'ArrowRight': 'nextPage',
    'Home': 'firstPage',
    'End': 'lastPage',
    'Space': 'togglePlay',
  };
  
  // 고해상도 지원
  highDPI: true;
  antialiasing: true;
};
```

### **5.2 레이아웃 어댑테이션**
```typescript
// 화면 크기별 레이아웃
const responsiveLayouts = {
  mobile: {
    columns: 1,
    pageWidth: '100vw',
    pageHeight: '100vh',
    navigation: 'bottom',
    controls: 'minimal',
  },
  
  tablet: {
    columns: 2,
    pageWidth: '50vw',
    pageHeight: '80vh',
    navigation: 'side',
    controls: 'standard',
  },
  
  desktop: {
    columns: 2,
    pageWidth: '45vw',
    pageHeight: '70vh',
    navigation: 'full',
    controls: 'advanced',
  },
};
```

## ✨ **마법 효과 시스템**

### **6.1 시각적 효과**
```typescript
// 입자 효과
interface ParticleSystem {
  type: 'sparkle' | 'glow' | 'magic';
  count: number;
  lifetime: number;
  velocity: Vector3;
  color: string;
  size: number;
}

// 빛나는 효과
interface GlowEffect {
  intensity: number;
  color: string;
  radius: number;
  duration: number;
  easing: 'linear' | 'ease-in' | 'ease-out' | 'bounce';
}

// 페이지 전환 효과
interface PageTransitionEffect {
  type: 'fade' | 'slide' | 'flip' | 'magic';
  duration: number;
  easing: string;
  particles: boolean;
  sound: boolean;
}
```

### **6.2 사운드 효과**
```typescript
// 마법 사운드
const magicSounds = {
  pageTurn: '/sounds/page-turn.mp3',
  magicSparkle: '/sounds/sparkle.mp3',
  bookOpen: '/sounds/book-open.mp3',
  bookClose: '/sounds/book-close.mp3',
  hover: '/sounds/hover.mp3',
  click: '/sounds/click.mp3',
};

// 오디오 설정
const audioConfig = {
  volume: 0.3;
  loop: false;
  preload: true;
  spatial: true;  // 3D 공간 오디오
};
```

## 🎮 **사용자 경험 (UX)**

### **7.1 인터랙션 플로우**
```
1. 🏠 메인 페이지에서 "졸업앨범" 클릭
2. 📚 앨범 선택 화면 (기수별)
3. ✨ 3D 앨범 열기 애니메이션
4. 📖 첫 페이지 표시 (표지)
5. 🖱️ 마우스/터치로 페이지 넘김
6. 🔍 사진 클릭 시 확대/상세보기
7. 📱 모바일에서 스와이프로 네비게이션
8. ⌨️ 키보드 단축키로 빠른 이동
9. 🎵 마법적인 사운드 효과
10. 💾 즐겨찾기/공유 기능
```

### **7.2 접근성 (Accessibility)**
```typescript
// 스크린 리더 지원
const accessibility = {
  ariaLabels: {
    pageNumber: '페이지 {current} / {total}',
    navigation: '앨범 네비게이션',
    photo: '{name}의 사진',
  },
  
  keyboardNavigation: true,
  highContrast: true,
  fontSize: 'adjustable',
  colorBlind: 'friendly',
};
```

## 🚀 **구현 단계**

### **8.1 Phase 1: 기본 구조 (1주)**
- [ ] 3D 책 모델링 (Three.js)
- [ ] 기본 페이지 시스템
- [ ] 이미지 로딩 및 최적화
- [ ] 반응형 레이아웃

### **8.2 Phase 2: 인터랙션 (1주)**
- [ ] 페이지 넘김 애니메이션
- [ ] 터치/마우스 제스처
- [ ] 3D 카메라 제어
- [ ] 기본 마법 효과

### **8.3 Phase 3: 콘텐츠 통합 (1주)**
- [ ] 60기 앨범 데이터 구조
- [ ] 참석자 정보 시스템
- [ ] 사진 갤러리 통합
- [ ] 검색 및 필터링

### **8.4 Phase 4: 고급 효과 (1주)**
- [ ] 고급 마법 효과
- [ ] 사운드 시스템
- [ ] 성능 최적화
- [ ] 크로스 브라우저 테스트

### **8.5 Phase 5: 최종 완성 (1주)**
- [ ] 사용자 테스트
- [ ] 버그 수정
- [ ] 성능 최적화
- [ ] 배포 및 문서화

## 📊 **성능 목표**

### **9.1 로딩 성능**
- **초기 로딩**: < 3초
- **페이지 전환**: < 500ms
- **이미지 로딩**: < 1초
- **애니메이션**: 60fps 유지

### **9.2 메모리 사용량**
- **최대 메모리**: < 500MB
- **이미지 캐싱**: LRU 알고리즘
- **페이지 프리로딩**: ±2페이지

### **9.3 호환성**
- **브라우저**: Chrome 90+, Firefox 88+, Safari 14+
- **모바일**: iOS 14+, Android 10+
- **성능**: 중급 이상 디바이스

## 🔧 **기술적 고려사항**

### **10.1 이미지 최적화**
```typescript
// 이미지 처리 전략
const imageOptimization = {
  formats: ['WebP', 'AVIF', 'JPEG'],
  sizes: [320, 640, 1280, 1920],
  quality: 85,
  lazyLoading: true,
  progressiveLoading: true,
};
```

### **10.2 상태 관리**
```typescript
// 앨범 상태 관리
interface AlbumState {
  currentPage: number;
  totalPages: number;
  isOpen: boolean;
  isLoading: boolean;
  zoomLevel: number;
  viewMode: 'single' | 'double' | 'gallery';
  favorites: string[];
  searchQuery: string;
}
```

### **10.3 에러 처리**
```typescript
// 에러 처리 전략
const errorHandling = {
  imageLoadFail: 'fallback-image.jpg',
  networkError: 'retry-with-backoff',
  memoryError: 'reduce-quality',
  unsupportedBrowser: 'fallback-mode',
};
```

## 📈 **향후 확장 계획**

### **11.1 추가 기능**
- [ ] VR/AR 지원
- [ ] 소셜 공유 기능
- [ ] 인쇄 기능
- [ ] 다국어 지원
- [ ] 오프라인 모드

### **11.2 관리자 기능**
- [ ] 앨범 편집 도구
- [ ] 사용자 통계
- [ ] 콘텐츠 관리 시스템
- [ ] 백업 및 복원

---

**작성일**: 2025-08-08  
**작성자**: AI Assistant  
**상태**: 기획 완료  
**다음 단계**: Phase 1 구현 시작 