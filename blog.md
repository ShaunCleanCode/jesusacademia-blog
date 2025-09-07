# 📝 예수서원 블로그 시스템 개발 기능서

> **구글 엔지니어 + 천재 디자이너 관점의 Medium 수준 블로그 시스템**

## 🎯 프로젝트 개요

### **목표**
- Medium 수준 이상의 블로그 시스템 구축
- 구글의 Material Design 3.0 디자인 시스템 적용
- 예수서원의 기독교 인문학 콘텐츠에 최적화
- SEO 최적화 및 접근성 완벽 지원

### **핵심 가치**
- **사용자 경험**: 직관적이고 아름다운 인터페이스
- **성능**: 빠른 로딩과 부드러운 애니메이션
- **접근성**: 모든 사용자가 접근 가능한 디자인
- **확장성**: 미래 기능 추가에 유연한 아키텍처

---

## 🏗️ Phase 1: 아키텍처 설계

### **1.1 데이터 모델 설계**

```typescript
// 핵심 엔티티들
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // Markdown + Rich Content
  author: Author;
  categories: Category[];
  tags: Tag[];
  featuredImage?: Media;
  status: 'draft' | 'published' | 'archived';
  publishedAt: Date;
  updatedAt: Date;
  readingTime: number; // 분 단위
  viewCount: number;
  likeCount: number;
  seo: SEOData;
}

interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  socialLinks: SocialLink[];
}

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string; // 디자인용 색상
  icon: string;
}

interface Tag {
  id: string;
  name: string;
  slug: string;
  color: string;
}

interface Media {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  format: string;
}

interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}
```

### **1.2 기술 스택 확장**

```json
{
  "dependencies": {
    "@tiptap/react": "^2.0.0",
    "@tiptap/starter-kit": "^2.0.0",
    "@tiptap/extension-image": "^2.0.0",
    "@tiptap/extension-link": "^2.0.0",
    "@tiptap/extension-code-block-lowlight": "^2.0.0",
    "gray-matter": "^4.0.3",
    "remark": "^15.0.0",
    "remark-html": "^16.0.0",
    "reading-time": "^1.5.0",
    "fuse.js": "^7.0.0",
    "date-fns": "^3.0.0",
    "react-hook-form": "^7.0.0",
    "zod": "^3.0.0"
  }
}
```

---

## 🎨 Phase 2: UX/UI 디자인

### **2.1 디자인 원칙 (Material Design 3.0 + Medium 영감)**

```typescript
// 디자인 토큰
const blogDesignTokens = {
  // 색상 팔레트
  colors: {
    primary: {
      50: '#eff6ff',
      500: '#3b82f6',
      900: '#1e3a8a'
    },
    neutral: {
      50: '#fafafa',
      100: '#f5f5f5',
      900: '#171717'
    },
    semantic: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444'
    }
  },
  
  // 타이포그래피 스케일
  typography: {
    heading: {
      '2xl': 'text-4xl font-bold leading-tight',
      'xl': 'text-3xl font-bold leading-tight',
      'lg': 'text-2xl font-semibold leading-snug'
    },
    body: {
      lg: 'text-lg leading-relaxed',
      base: 'text-base leading-relaxed',
      sm: 'text-sm leading-relaxed'
    }
  },
  
  // 간격 시스템
  spacing: {
    section: 'py-16 md:py-24',
    container: 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'
  }
}
```

### **2.2 컴포넌트 아키텍처**

```typescript
// 블로그 전용 컴포넌트들
const BlogComponents = {
  // 레이아웃
  BlogLayout: '전체 블로그 레이아웃',
  BlogHeader: '블로그 헤더 (검색, 필터)',
  BlogSidebar: '사이드바 (카테고리, 인기글)',
  
  // 포스트 관련
  BlogPostCard: '포스트 카드 (그리드/리스트)',
  BlogPostHero: '포스트 히어로 섹션',
  BlogPostContent: '포스트 본문 (Rich Content)',
  BlogPostMeta: '포스트 메타 정보',
  BlogPostNavigation: '이전/다음 포스트',
  
  // 에디터
  BlogEditor: 'Rich Text Editor (TipTap)',
  BlogEditorToolbar: '에디터 툴바',
  BlogImageUpload: '이미지 업로드',
  
  // 검색 & 필터
  BlogSearch: '검색 인터페이스',
  BlogFilter: '카테고리/태그 필터',
  BlogPagination: '페이지네이션',
  
  // 관리
  BlogAdmin: '관리자 인터페이스',
  BlogPostForm: '포스트 작성/편집 폼'
}
```

---

## 🚀 Phase 3: 기능별 상세 기획

### **3.1 블로그 메인 페이지 (`/blog`)**

```typescript
// 페이지 구조
const BlogMainPage = {
  layout: {
    header: 'Hero Section + 검색바',
    content: '포스트 그리드 (3열)',
    sidebar: '카테고리 + 인기글 + 태그 클라우드',
    pagination: '무한 스크롤 또는 페이지네이션'
  },
  
  features: [
    '포스트 카드 (이미지, 제목, 요약, 메타)',
    '실시간 검색 (Fuse.js)',
    '카테고리 필터링',
    '태그 필터링',
    '정렬 (최신순, 인기순, 읽기시간순)',
    '반응형 그리드 (모바일: 1열, 태블릿: 2열, 데스크톱: 3열)'
  ]
}
```

### **3.2 블로그 포스트 페이지 (`/blog/[slug]`)**

```typescript
const BlogPostPage = {
  layout: {
    hero: '포스트 히어로 (제목, 메타, 이미지)',
    content: '본문 (Rich Content)',
    sidebar: '목차 + 관련 포스트',
    footer: '태그 + 소셜 공유 + 댓글'
  },
  
  features: [
    'Rich Text 렌더링 (Markdown → HTML)',
    '자동 목차 생성',
    '읽기 진행률 표시',
    '소셜 공유 버튼',
    '관련 포스트 추천',
    '댓글 시스템 (선택사항)',
    'SEO 최적화 (구조화 데이터)'
  ]
}
```

### **3.3 블로그 에디터 (`/admin/blog/new`, `/admin/blog/[id]/edit`)**

```typescript
const BlogEditor = {
  layout: {
    toolbar: 'Rich Text 툴바',
    editor: 'TipTap 에디터',
    sidebar: '메타데이터 폼 + 미리보기',
    footer: '저장/발행 버튼'
  },
  
  features: [
    'WYSIWYG 에디터 (TipTap)',
    'Markdown 지원',
    '이미지 드래그 앤 드롭',
    '실시간 미리보기',
    '자동 저장 (Draft)',
    'SEO 메타데이터 입력',
    '카테고리/태그 선택',
    '발행 일정 설정'
  ]
}
```

---

## 📋 Phase 4: 구현 로드맵

### **4.1 1단계: 기본 구조 (1-2일)**
- [ ] 데이터 모델 정의 (TypeScript interfaces)
- [ ] 블로그 메인 페이지 레이아웃
- [ ] 기본 포스트 카드 컴포넌트
- [ ] 라우팅 설정 (/blog, /blog/[slug])
- [ ] 기본 SEO 설정

### **4.2 2단계: 콘텐츠 시스템 (2-3일)**
- [ ] Markdown 파싱 및 렌더링
- [ ] Rich Text Editor (TipTap) 구현
- [ ] 이미지 업로드 및 최적화
- [ ] 포스트 CRUD API
- [ ] 카테고리/태그 시스템

### **4.3 3단계: 고급 기능 (2-3일)**
- [ ] 검색 기능 (Fuse.js)
- [ ] 필터링 및 정렬
- [ ] 페이지네이션/무한 스크롤
- [ ] 관리자 인터페이스
- [ ] SEO 최적화 (구조화 데이터)

### **4.4 4단계: UX 개선 (1-2일)**
- [ ] 애니메이션 및 전환 효과
- [ ] 다크모드 지원
- [ ] 접근성 개선
- [ ] 성능 최적화
- [ ] 모바일 UX 개선

---

## ⚡ Phase 5: 기술적 고려사항

### **5.1 성능 최적화**
- **이미지 최적화**: Next.js Image 컴포넌트 + WebP
- **코드 분할**: 동적 import로 에디터 지연 로딩
- **캐싱**: ISR (Incremental Static Regeneration)
- **검색 최적화**: 클라이언트 사이드 Fuse.js
- **SEO**: 구조화 데이터 + 메타 태그

### **5.2 접근성 (A11y)**
- **키보드 네비게이션**: 모든 인터랙션 요소
- **스크린 리더**: ARIA 라벨 및 역할
- **색상 대비**: WCAG 2.1 AA 준수
- **포커스 관리**: 에디터 및 모달
- **반응형**: 모든 화면 크기 지원

---

## 📁 파일 구조

```
src/
├── app/
│   ├── blog/
│   │   ├── page.tsx              # 블로그 메인 페이지
│   │   └── [slug]/
│   │       └── page.tsx          # 개별 포스트 페이지
│   └── admin/
│       └── blog/
│           ├── page.tsx          # 블로그 관리 대시보드
│           ├── new/
│           │   └── page.tsx      # 새 포스트 작성
│           └── [id]/
│               └── edit/
│                   └── page.tsx  # 포스트 편집
├── components/
│   ├── blog/
│   │   ├── BlogLayout.tsx
│   │   ├── BlogHeader.tsx
│   │   ├── BlogSidebar.tsx
│   │   ├── BlogPostCard.tsx
│   │   ├── BlogPostHero.tsx
│   │   ├── BlogPostContent.tsx
│   │   ├── BlogPostMeta.tsx
│   │   ├── BlogSearch.tsx
│   │   ├── BlogFilter.tsx
│   │   └── BlogPagination.tsx
│   └── editor/
│       ├── BlogEditor.tsx
│       ├── BlogEditorToolbar.tsx
│       └── BlogImageUpload.tsx
├── lib/
│   ├── blog/
│   │   ├── types.ts              # TypeScript 타입 정의
│   │   ├── data.ts               # 샘플 데이터
│   │   ├── utils.ts              # 유틸리티 함수
│   │   ├── search.ts             # 검색 로직
│   │   └── seo.ts                # SEO 관련 함수
│   └── markdown/
│       ├── parser.ts             # Markdown 파싱
│       └── renderer.ts           # HTML 렌더링
└── styles/
    └── blog.css                  # 블로그 전용 스타일
```

---

## 🔄 개발 진행 상황

### **현재 상태**
- [x] 프로젝트 기획 및 아키텍처 설계
- [x] Git 브랜치 전략 수립
- [x] 개발 기능서 작성
- [x] 1단계: 기본 구조 구현 완료
  - [x] 데이터 모델 정의 (TypeScript interfaces)
  - [x] 샘플 데이터 생성 (3개 포스트)
  - [x] 블로그 메인 페이지 구현
  - [x] 개별 포스트 페이지 구현
  - [x] 검색 및 필터링 기능
  - [x] 반응형 디자인 및 다크모드

### **다음 단계**
1. ✅ 필요한 패키지 설치 완료
2. ✅ 데이터 모델 정의 완료
3. ✅ 기본 컴포넌트 구조 생성 완료
4. ✅ 라우팅 설정 완료
5. 🔄 2단계: 콘텐츠 시스템 구현 시작
   - [ ] Markdown 파싱 및 렌더링 개선
   - [ ] Rich Text Editor (TipTap) 구현
   - [ ] 이미지 업로드 및 최적화
   - [ ] 포스트 CRUD API
   - [ ] 카테고리/태그 관리 시스템

---

## 📝 개발 노트

### **2024-01-XX**
- 프로젝트 초기 기획 완료
- 구글 스타일 Git 브랜치 전략 적용
- Material Design 3.0 + Medium 영감 디자인 시스템 정의

### **2024-01-XX (1단계 완료)**
- 블로그 시스템 기본 구조 구현 완료
- TypeScript 인터페이스 및 데이터 모델 정의
- 3개 샘플 블로그 포스트 생성 (기독교 인문학, 캠프 후기, 성경 연구)
- 블로그 메인 페이지 구현 (검색, 필터링, 정렬 기능)
- 개별 포스트 페이지 구현 (Rich Content, 관련 포스트, 소셜 공유)
- 반응형 디자인 및 다크모드 완벽 지원
- 구글 스타일 Git 커밋 메시지 적용

### **업데이트 로그**
- 이 파일은 개발 과정에서 지속적으로 업데이트됩니다
- 새로운 기능 추가 시 해당 섹션을 업데이트하세요
- 버그 수정 및 개선사항도 기록하세요

---

*이 문서는 예수서원 블로그 시스템 개발의 전체 가이드라인입니다. 개발 과정에서 지속적으로 업데이트하여 최신 상태를 유지합니다.*
