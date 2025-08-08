# 예수서원 블로그

복음과 지성의 통합을 추구하는 기독교 인문학 아카데미, 예수서원의 공식 블로그입니다.

## 🎯 프로젝트 목표

- **AI-first 방식**: GPT를 활용한 자동 콘텐츠 생성
- **다국어 지원**: 한국어 중심의 다국어 블로그
- **SEO 최적화**: 구조화 데이터와 메타 정보 포함
- **미니 CMS**: 추후 Nest.js 연동을 통한 콘텐츠 관리

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + @tailwindcss/typography
- **UI Components**: Custom Components (HighlightBox, AvatarCard, PrimaryButton)
- **SEO**: Next.js Metadata API + Schema.org 구조화 데이터
- **Icons**: Lucide React
- **Animations**: CSS Animations + Tailwind

## 📁 프로젝트 구조

```
jesusacademia-blog/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 루트 레이아웃 (SEO 메타데이터 포함)
│   │   ├── page.tsx            # 홈페이지
│   │   └── blog/
│   │       └── [slug]/
│   │           └── page.tsx    # 블로그 포스트 동적 라우트
│   ├── components/
│   │   ├── HighlightBox.tsx    # 주요 메시지 강조 컴포넌트
│   │   ├── AvatarCard.tsx      # 인물 정보 카드
│   │   ├── PrimaryButton.tsx   # CTA 버튼
│   │   ├── ImageGallery.tsx    # 이미지 갤러리 컴포넌트
│   │   └── CampGallery.tsx     # 캠프 전용 갤러리 컴포넌트
│   └── lib/
│       ├── schema.ts                    # SEO 스키마 유틸리티
│       ├── pastor-ko-profile.md         # 고석희 목사 상세 프로필
│       ├── pastor-ko-utils.ts           # 고석희 목사 정보 유틸리티
│       ├── jesus-academia-info.md       # 예수서원 기관 운영 정보
│       ├── jesus-academia-utils.ts      # 예수서원 기관 정보 유틸리티
│       ├── image-metadata.ts            # 이미지 메타데이터 관리
│       └── sample-camp-data.ts          # 샘플 캠프 데이터
├── public/
│   └── images/                          # 이미지 파일 저장소
│       ├── logos/                       # 로고 파일들
│       ├── campus/                      # 캠퍼스/시설 사진
│       ├── camps/                       # 기수별 캠프 사진
│       │   ├── 2024/
│       │   │   ├── camp-41/
│       │   │   │   ├── group/           # 단체사진
│       │   │   │   ├── individuals/     # 개인사진
│       │   │   │   └── activities/      # 활동사진
│       │   │   └── camp-42/
│       │   ├── 2023/
│       │   └── archive/                 # 과거 기수들
│       └── gallery/                     # 기타 갤러리
│           ├── pastor-ko/               # 고석희 목사 관련
│           ├── events/                  # 특별 행사
│           └── facilities/              # 시설 사진들
├── content_input.json          # 블로그 자동 생성용 데이터
├── tailwind.config.ts          # Tailwind 설정
└── package.json
```

## 🚀 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### **Current Status**
- ✅ 기본 블로그 구조 완성
- ✅ 실제 이미지 적용 (고석희 목사, 예수서원 건물)
- ✅ SEO 최적화 완료
- 🔄 **진행 중**: 인터랙티브 캐러셀 구현 (2025-08-08)

### **Additional Packages**
```bash
# Install interactive features
npm install framer-motion @headlessui/react
```

### 3. 빌드

```bash
npm run build
```

## 🎨 주요 기능

### 1. 홈페이지
- 예수서원 소개
- 설립자 고석희 목사 소개
- Oyster Bay 위치 정보
- 핵심 가치와 사명

### 2. 블로그 시스템
- 동적 라우팅 (`/blog/[slug]`)
- SEO 최적화 (메타데이터, 구조화 데이터)
- FAQ 섹션 자동 생성
- 반응형 디자인

### 3. 컴포넌트 시스템
- **HighlightBox**: 주요 메시지 강조
- **AvatarCard**: 인물 정보 표시
- **PrimaryButton**: CTA 버튼

### 4. SEO 최적화
- Next.js Metadata API 활용
- Schema.org 구조화 데이터
- Open Graph 및 Twitter 카드
- 한국어 최적화

## 📝 Cursor GPT 프롬프트 사용법

### 블로그 글 자동 생성

Cursor의 프롬프트 탭에서 다음 프롬프트를 사용하세요:

```
🎨 PROJECT CURSOR PROMPT | Blog Generator v2.0

📌 목표: 예수서원 공식 블로그를 Notion 스타일로 자동 생성해주세요.

🧾 기본 명세:
- 언어: 한국어 (또는 지정 언어)
- 톤: 정중하고 신뢰감 있는, 성찰적
- 스타일: Notion 감성 + 현대적 여백 + 애니메이션
- 출력 포맷: JSX (Next.js 기반 React Server Component)
- Tailwind 기반 클래스 사용
- SEO: 구조화 데이터 + meta + hreflang 자동 포함

🗂️ INPUT:
- title: 고석희 목사와 예수서원
- keywords: ["예수서원", "고석희 목사", "기독교 인문학"]
- description: 고석희 목사가 뉴욕에서 시작한 복음+지성 통합 아카데미
- tone: 성찰적 + 정중함 + 신뢰 중심
- content:
  - hero_image: (링크 입력)
  - sections:
    - 예수서원의 사명
    - 고석희 목사의 소개
    - Oyster Bay 위치의 의미
    - 훈련 프로그램 소개
    - 초대의 메시지
- CTA: "예수서원 프로그램 보러가기"
- components:
  - .highlight-box: 주요 메시지 강조
  - .avatar-card: 인물 카드
  - .primary-button: CTA 버튼

🛠️ OUTPUT:
- JSX 컴포넌트 (Next.js 기반)
- Tailwind 포함된 디자인 구조
- <Head> SEO 메타 정보 포함
- schema.org 구조화 데이터 포함
- 하단에 FAQ schema 자동 삽입
```

### 사용 예시

1. `content_input.json` 파일을 수정하여 새로운 블로그 글 데이터 준비
2. Cursor에서 위 프롬프트 사용
3. 생성된 JSX 코드를 `src/app/blog/[slug]/page.tsx`에 적용

## 🔧 설정 파일

### Tailwind 설정 (`tailwind.config.ts`)
- Typography 플러그인 포함
- 커스텀 색상 팔레트 (primary, accent)
- 애니메이션 설정
- 반응형 디자인 지원

### SEO 설정 (`src/lib/schema.ts`)
- BlogPosting 스키마 생성
- FAQ 스키마 생성
- 구조화 데이터 유틸리티

## 🚀 배포

### Vercel 배포 (권장)

1. GitHub에 코드 푸시
2. Vercel에서 프로젝트 연결
3. 자동 배포 설정

### 환경 변수

```env
NEXT_PUBLIC_SITE_URL=https://jesusacademia.org
```

## 🔮 향후 계획

- [ ] Nest.js 기반 CMS 연동
- [ ] Supabase/Prisma 데이터베이스 연결
- [ ] 다국어 지원 (영어, 중국어)
- [ ] 댓글 시스템
- [ ] 이메일 뉴스레터
- [ ] Google Search Console 등록
- [ ] 성능 최적화 (이미지 최적화, 캐싱)

## 📞 문의

- **이메일**: info@jesusacademia.org
- **위치**: 뉴욕 Oyster Bay
- **웹사이트**: https://jesusacademia.org

---

© 2024 예수서원. All rights reserved.
