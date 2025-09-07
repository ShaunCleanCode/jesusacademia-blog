# 예수서원 블로그

복음과 지성의 통합을 추구하는 기독교 인문학 아카데미, 예수서원의 공식 블로그입니다.

## 🎯 프로젝트 목표

- **AI-first 방식**: GPT를 활용한 자동 콘텐츠 생성
- **다국어 지원**: 한국어 중심의 다국어 블로그
- **SEO 최적화**: 구조화 데이터와 메타 정보 포함
- **미니 CMS**: 추후 Nest.js 연동을 통한 콘텐츠 관리
- **프리 챗봇**: 24시간 AI 상담 시스템

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + @tailwindcss/typography
- **UI Components**: Custom Components (HighlightBox, AvatarCard, PrimaryButton, ContactCard, ContactCategory, ContactInfo, ChatbotCTA, ChatbotFAB, ChatbotWindow, ChatMessage, TypingIndicator)
- **SEO**: Next.js Metadata API + Schema.org 구조화 데이터
- **Icons**: Lucide React
- **Animations**: Framer Motion + CSS Animations
- **Chatbot**: Material Design 3.0 기반 AI 챗봇 시스템
- **Theme**: Dark Mode 지원 (ThemeContext)
- **Design System**: Purple-Blue 그라데이션, rounded-2xl, 일관된 색상 팔레트

## 📁 프로젝트 구조

```
jesusacademia-blog/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # 루트 레이아웃 (SEO 메타데이터 포함)
│   │   ├── page.tsx            # 홈페이지 (인터랙티브 캐러셀)
│   │   ├── faq/
│   │   │   └── page.tsx        # FAQ 페이지 (Hero Section + 검색 기능)
│   │   ├── contact/
│   │   │   └── page.tsx        # 연락처 페이지 (담당자별 연락처 + 챗봇 CTA)
│   │   ├── programs/
│   │   │   ├── page.tsx        # 프로그램 페이지
│   │   │   └── schedule/
│   │   │       └── page.tsx    # 일정 페이지
│   │   ├── admin/
│   │   │   └── chatbot/
│   │   │       └── page.tsx    # 챗봇 응답 관리 페이지
│   │   └── blog/
│   │       └── [slug]/
│   │           └── page.tsx    # 블로그 포스트 동적 라우트
│   ├── components/
│   │   ├── HighlightBox.tsx    # 주요 메시지 강조 컴포넌트
│   │   ├── AvatarCard.tsx      # 인물 정보 카드
│   │   ├── PrimaryButton.tsx   # CTA 버튼
│   │   ├── ImageGallery.tsx    # 이미지 갤러리 컴포넌트
│   │   ├── CampGallery.tsx     # 캠프 전용 갤러리 컴포넌트
│   │   ├── InteractiveImageCarousel.tsx  # 인터랙티브 캐러셀
│   │   ├── HeroSection.tsx     # 풀스크린 히어로 섹션
│   │   ├── TypingAnimation.tsx # 타이핑 애니메이션
│   │   ├── DropdownNavigation.tsx # 드롭다운 네비게이션
│   │   ├── ContactCard.tsx     # 연락처 담당자 카드
│   │   ├── ContactCategory.tsx # 연락처 카테고리 그룹
│   │   ├── ContactInfo.tsx     # 일반 연락처 정보
│   │   ├── ChatbotCTA.tsx      # 챗봇 CTA 섹션
│   │   ├── ChatbotFAB.tsx      # 챗봇 플로팅 버튼
│   │   ├── ChatbotWindow.tsx   # 챗봇 창 UI (Material Design 3.0)
│   │   ├── ChatbotProvider.tsx # 챗봇 상태 관리
│   │   ├── ChatMessage.tsx     # 챗봇 메시지 컴포넌트
│   │   └── TypingIndicator.tsx # 구글 스타일 타이핑 인디케이터
│   └── lib/
│       ├── schema.ts                    # SEO 스키마 유틸리티
│       ├── pastor-ko-profile.md         # 고석희 목사 상세 프로필
│       ├── pastor-ko-utils.ts           # 고석희 목사 정보 유틸리티
│       ├── jesus-academia-info.md       # 예수서원 기관 운영 정보
│       ├── jesus-academia-utils.ts      # 예수서원 기관 정보 유틸리티
│       ├── image-metadata.ts            # 이미지 메타데이터 관리
│       ├── sample-camp-data.ts          # 샘플 캠프 데이터
│       ├── carousel-data.ts             # 캐러셀 이미지 데이터
│       ├── faq-data.ts                  # FAQ 데이터
│       ├── contact-data.ts              # 연락처 데이터 (담당자별 연락처)
│       └── chatbot-responses.ts         # 챗봇 응답 데이터
│   ├── contexts/
│   │   ├── ThemeContext.tsx             # 다크모드 테마 컨텍스트
│   │   └── NavigationContext.tsx        # 네비게이션 컨텍스트
├── public/
│   ├── images/                          # 이미지 파일 저장소
│   │   ├── logos/                       # 로고 파일들
│   │   ├── campus/                      # 캠퍼스/시설 사진
│   │   ├── camps/                       # 기수별 캠프 사진
│   │   │   ├── 2025/
│   │   │   │   └── camp-60/             # 60기 사진들
│   │   │   ├── 2024/
│   │   │   │   ├── camp-41/
│   │   │   │   │   ├── group/           # 단체사진
│   │   │   │   │   ├── individuals/     # 개인사진
│   │   │   │   │   └── activities/      # 활동사진
│   │   │   │   └── camp-42/
│   │   │   ├── 2023/
│   │   │   └── archive/                 # 과거 기수들
│   │   └── gallery/                     # 기타 갤러리
│   │       ├── pastor-ko/               # 고석희 목사 관련
│   │       ├── events/                  # 특별 행사
│   │       └── facilities/              # 시설 사진들
│   └── 3d_rendered/                     # 3D 렌더링 이미지
│       └── A_3D-rendered_digital_illustration_depicts_Jesus_C.png
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
- ✅ 인터랙티브 캐러셀 구현 완료
- ✅ 타이핑 애니메이션 구현 완료
- ✅ 드롭다운 네비게이션 구현 완료
- ✅ 프리 챗봇 시스템 완성 (2025-08-08)
- ✅ 연락처 페이지 완성 (담당자별 연락처 + 챗봇 CTA)
- ✅ FAQ 페이지 디자인 개선 (Hero Section + 일관된 디자인)
- ✅ Material Design 3.0 챗봇 UI 완성
- ✅ 다크모드 지원 완성
- ✅ 구글 스타일 타이핑 인디케이터 완성
- 🔄 **진행 중**: 블로그 시스템, 졸업앨범

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
- 인터랙티브 이미지 캐러셀 (60기 사진 120+개)
- 타이핑 애니메이션 ("뉴욕에서 시작한 기독교 인문변증학 아카데미")
- 예수서원 소개
- 설립자 고석희 목사 소개
- Oyster Bay 위치 정보
- 핵심 가치와 사명

### 2. 챗봇 시스템 (Material Design 3.0)
- **24시간 AI 상담**: 키워드 기반 응답 시스템
- **빠른 질문 선택**: 6개의 자주 묻는 질문 버튼
- **구글 스타일 타이핑 인디케이터**: 자연스러운 대화 경험
- **Material Design 3.0 UI**: 현대적이고 일관된 디자인
- **다크모드 지원**: 완벽한 다크/라이트 테마 전환
- **3D 로고**: 예수 그리스도 3D 렌더링 이미지
- **관리 페이지**: `/admin/chatbot`에서 응답 관리
- **반응형 디자인**: 데스크톱/모바일 최적화
- **부드러운 애니메이션**: Framer Motion 기반 인터랙션

### 3. 네비게이션
- **드롭다운 네비게이션**: 우상단 드롭다운 메뉴
- **반응형 디자인**: 모바일에서 전체 화면
- **페이지 링크**: 홈, FAQ, 프로그램, 졸업앨범, 소개, 연락처

### 4. FAQ 시스템 (개선된 디자인)
- **10개 기본 FAQ**: 예수서원 소개, 운영, 연락처 등
- **Hero Section**: 그라데이션 배경과 Quick Stats
- **검색 기능**: 키워드 기반 FAQ 검색 (향상된 UI)
- **카테고리 분류**: 일반, 프로그램, 연락처, 위치
- **일관된 디자인**: 연락처 페이지와 동일한 디자인 시스템
- **부드러운 애니메이션**: FAQ 카드 호버 효과 및 전환

### 5. 연락처 시스템 (새로 추가)
- **담당자별 연락처**: 수강신청, 강좌문의 카테고리별 분류
- **일반 연락처**: 전화, 이메일, 주소, 운영시간
- **Google Maps 연동**: 주소 클릭 시 지도 열기
- **챗봇 CTA**: 빠른 답변을 위한 챗봇 연동
- **Hero Section**: 그라데이션 배경과 Quick Stats
- **다크모드 지원**: 완벽한 테마 전환

### 6. 블로그 시스템
- 동적 라우팅 (`/blog/[slug]`)
- SEO 최적화 (메타데이터, 구조화 데이터)
- FAQ 섹션 자동 생성
- 반응형 디자인

### 7. 컴포넌트 시스템 (확장됨)
- **HighlightBox**: 주요 메시지 강조
- **AvatarCard**: 인물 정보 표시
- **PrimaryButton**: CTA 버튼
- **InteractiveImageCarousel**: 인터랙티브 캐러셀
- **TypingAnimation**: 타이핑 애니메이션
- **ContactCard**: 연락처 담당자 카드
- **ContactCategory**: 연락처 카테고리 그룹
- **ContactInfo**: 일반 연락처 정보
- **ChatbotCTA**: 챗봇 CTA 섹션
- **ChatbotFAB**: 챗봇 플로팅 버튼
- **ChatbotWindow**: Material Design 3.0 챗봇 창
- **ChatMessage**: 챗봇 메시지 컴포넌트
- **TypingIndicator**: 구글 스타일 타이핑 인디케이터

### 8. SEO 최적화
- Next.js Metadata API 활용
- Schema.org 구조화 데이터
- Open Graph 및 Twitter 카드
- 한국어 최적화

## 🎨 디자인 시스템 & 철칙

### **색상 팔레트**
- **Primary**: Blue 계열 (`blue-400`, `blue-500`, `blue-600`)
- **Accent**: Purple 계열 (`purple-400`, `purple-500`, `purple-600`)
- **Gradient**: `from-blue-400 to-purple-400` (제목, 버튼)
- **Background**: `from-gray-50 to-white` (라이트), `from-gray-900 via-gray-800 to-black` (다크)

### **디자인 원칙**
- **일관된 모서리**: 모든 요소에 `rounded-2xl` 적용
- **그림자 시스템**: `shadow-lg`, `hover:shadow-xl` 계층적 적용
- **그라데이션 활용**: 버튼, 아이콘, 제목에 Purple-Blue 그라데이션
- **다크모드 완벽 지원**: 모든 컴포넌트에 `useTheme` 적용
- **Material Design 3.0**: 구글 스타일의 현대적 UI/UX

### **컴포넌트 패턴**
- **Hero Section**: 모든 페이지에 그라데이션 배경 + Quick Stats
- **카드 디자인**: `rounded-2xl`, 호버 효과, 그라데이션 배경
- **애니메이션**: Framer Motion 기반 부드러운 전환
- **타이포그래피**: 그라데이션 텍스트 (`bg-clip-text text-transparent`)

### **반응형 디자인**
- **모바일 우선**: `sm:`, `md:`, `lg:` 브레이크포인트 활용
- **터치 친화적**: 충분한 터치 영역과 간격
- **접근성**: 키보드 네비게이션 및 스크린 리더 지원

## 🤖 챗봇 기능 상세

### **응답 가능한 질문들**
- 운영 시간 및 일정
- 위치 및 교통편
- 연락처 및 소셜미디어
- 참가비 및 프로그램
- 고석희 목사 소개
- 예수서원 소개

### **관리 기능**
- 응답 추가/수정/삭제
- 카테고리별 필터링
- 키워드 검색
- 실시간 미리보기

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

### **Phase 2: AI 모델 통합**
- [ ] 실제 AI 응답 기능 구현
- [ ] 대화 히스토리 관리
- [ ] 고급 UI/UX 개선
- [ ] 실시간 응답 시스템

### **Phase 3: 블로그 시스템**
- [ ] 관리자 인증 시스템
- [ ] 참가자 블로그 기능
- [ ] 미디어 업로드 (사진/비디오)
- [ ] 댓글 시스템

### **Phase 4: 졸업앨범**
- [ ] 디지털 연감 기능
- [ ] 책 넘기는 애니메이션
- [ ] 개인/단체 앨범
- [ ] 방명록 시스템

### **Phase 5: 추가 페이지**
- [x] 프로그램 페이지 (`/programs`) - 기본 구조 완성
- [x] 연락처 페이지 (`/contact`) - 완성
- [ ] 소개 페이지 (`/about`)

### **기타 기능**
- [ ] Nest.js 기반 CMS 연동
- [ ] Supabase/Prisma 데이터베이스 연결
- [ ] 다국어 지원 (영어, 중국어)
- [ ] 이메일 뉴스레터
- [ ] Google Search Console 등록
- [ ] 성능 최적화 (이미지 최적화, 캐싱)

## 📞 문의

- **이메일**: info@jesusacademia.org
- **위치**: 뉴욕 Oyster Bay
- **웹사이트**: https://jesusacademia.org

---

© 2024 예수서원. All rights reserved.
