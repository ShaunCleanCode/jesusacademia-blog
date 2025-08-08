# 🚀 예수서원 블로그 인터랙티브 캐러셀 구현 계획

## 📋 **프로젝트 개요**
- **목표**: 구글 스타일 인터랙티브 이미지 캐러셀 홈페이지 구현
- **기간**: 오늘 하루 (2025-08-08)
- **핵심 기능**: 자동 슬라이드, 반응형 이미지, 구글 스타일 디자인

## 🎯 **현재 상황 분석**

### ✅ **보유 자산**
- 60기 사진 120+개 (다양한 비율, 크기)
- 고석희 목사 프로필 사진
- 예수서원 건물 외관 사진
- 기존 컴포넌트 구조 (AvatarCard, HighlightBox, PrimaryButton)

### 📁 **이미지 구조**
```
public/images/camps/2025/camp-60/60기 사진/
├── KakaoTalk_Photo_2025-08-08-00-12-23 001.jpeg (1.4MB)
├── KakaoTalk_Photo_2025-08-08-00-12-26 002.jpeg (2.7MB)
├── ... (총 120+개 이미지)
└── 다양한 비율 (세로/가로/정사각형)
```

## 🏗️ **Phase 1: 핵심 컴포넌트 개발 (2시간)**

### **1.1 InteractiveImageCarousel 컴포넌트**
```typescript
// 기능 요구사항
✅ 자동 슬라이드 (3초 간격)
✅ 수동 네비게이션 (화살표, 점)
✅ 터치/스와이프 지원
✅ 반응형 이미지 처리 (세로/가로/정사각형)
✅ 무한 루프
✅ 부드러운 전환 애니메이션
✅ 접근성 (키보드, 스크린리더)
```

### **1.2 HeroSection 컴포넌트**
```typescript
// 기능 요구사항
✅ 풀스크린 레이아웃
✅ 오버레이 텍스트 (예수서원 소개)
✅ CTA 버튼
✅ 스크롤 인디케이터
✅ 파라랙스 효과
```

## 🎨 **Phase 2: 구글 스타일 디자인 시스템 (1시간)**

### **2.1 Material Design 3 적용**
```typescript
// 디자인 요구사항
✅ 색상 시스템: primary, secondary, surface, error
✅ 타이포그래피: Display, Headline, Body, Label
✅ 그림자: elevation-1 ~ elevation-24
✅ 마이크로 인터랙션: hover, focus, active
✅ 반응형 브레이크포인트: sm, md, lg, xl
```

### **2.2 애니메이션 시스템**
```typescript
// 애니메이션 요구사항
✅ Framer Motion 기반
✅ 스프링 애니메이션
✅ 스크롤 기반 트리거
✅ 로딩 애니메이션
✅ 페이지 전환 효과
```

## 🏛️ **Phase 3: 레이아웃 재구성 (1시간)**

### **3.1 새로운 페이지 구조**
```
Hero Section (풀스크린 캐러셀)
├── 인터랙티브 이미지 캐러셀
├── 오버레이 텍스트
└── CTA 버튼

About Section (예수서원 소개)
├── 미션 & 비전
├── 핵심 가치
└── 프로그램 개요

Founder Section (고석희 목사)
├── 프로필 사진
├── 소개 텍스트
└── 경력 & 철학

Programs Section (캠프 프로그램)
├── 최신 캠프 하이라이트
├── 프로그램 특징
└── 참가 신청 CTA

Contact Section (연락처)
├── 소셜미디어 링크
├── 연락처 정보
└── 위치 정보
```

## ⚡ **Phase 4: 성능 최적화 (30분)**

### **4.1 이미지 최적화**
```typescript
// 최적화 요구사항
✅ Next.js Image 컴포넌트 활용
✅ WebP 포맷 지원
✅ 지연 로딩 (lazy loading)
✅ 반응형 이미지 크기
✅ 이미지 압축
```

### **4.2 코드 최적화**
```typescript
// 코드 최적화 요구사항
✅ 컴포넌트 코드 스플리팅
✅ 번들 크기 최적화
✅ Core Web Vitals 개선
✅ SEO 최적화
```

## 🧪 **Phase 5: 최종 통합 및 테스트 (30분)**

### **5.1 통합 테스트**
```typescript
// 테스트 요구사항
✅ 모든 브라우저 호환성
✅ 모바일 반응형 테스트
✅ 접근성 테스트
✅ 성능 테스트
```

## 🛠️ **기술 스택 확장**

### **추가 패키지 설치**
```bash
npm install framer-motion @headlessui/react
npm install -D @types/framer-motion
```

### **새로운 컴포넌트 구조**
```
src/components/
├── InteractiveImageCarousel.tsx  # 핵심 캐러셀
├── HeroSection.tsx              # 풀스크린 히어로
├── AboutSection.tsx             # 예수서원 소개
├── FounderSection.tsx           # 고석희 목사 소개
├── ProgramsSection.tsx          # 캠프 프로그램
├── ContactSection.tsx           # 연락처
└── Navigation.tsx               # 네비게이션
```

## 📅 **구현 순서 (시간별)**

### **1단계: InteractiveImageCarousel (1시간)**
- [ ] 캐러셀 로직 구현
- [ ] 이미지 처리 로직
- [ ] 애니메이션 적용
- [ ] 접근성 구현

### **2단계: HeroSection (30분)**
- [ ] 풀스크린 레이아웃
- [ ] 오버레이 텍스트
- [ ] CTA 버튼
- [ ] 스크롤 인디케이터

### **3단계: 레이아웃 재구성 (30분)**
- [ ] 새로운 섹션들 생성
- [ ] 기존 컴포넌트 재배치
- [ ] 반응형 그리드 시스템

### **4단계: 디자인 시스템 (30분)**
- [ ] Material Design 3 적용
- [ ] 색상 및 타이포그래피 업데이트
- [ ] 마이크로 인터랙션 추가

### **5단계: 최적화 및 테스트 (30분)**
- [ ] 성능 최적화
- [ ] 브라우저 테스트
- [ ] 접근성 검증

## 🎯 **성공 기준**

### **기능적 요구사항**
- [ ] 자동 슬라이드 캐러셀 작동
- [ ] 반응형 이미지 처리
- [ ] 터치/스와이프 지원
- [ ] 구글 스타일 디자인

### **성능 요구사항**
- [ ] Core Web Vitals 90+ 점수
- [ ] 모바일 로딩 시간 < 3초
- [ ] 이미지 최적화 완료
- [ ] 접근성 준수

### **사용자 경험**
- [ ] 직관적인 네비게이션
- [ ] 부드러운 애니메이션
- [ ] 모든 디바이스 호환
- [ ] 빠른 반응성

## 📝 **참고 자료**

### **구글 디자인 가이드**
- Material Design 3: https://m3.material.io/
- Google Fonts: Inter, Roboto
- Color Palette: Primary, Secondary, Surface

### **기술 문서**
- Framer Motion: https://www.framer.com/motion/
- Next.js Image: https://nextjs.org/docs/api-reference/next/image
- Tailwind CSS: https://tailwindcss.com/

## 🔄 **업데이트 로그**

### **2025-08-08**
- [x] 계획 수립 및 문서화
- [ ] Phase 1 시작 예정
- [ ] Phase 2-5 진행 예정

---

**마지막 업데이트**: 2025-08-08
**담당자**: AI Assistant
**상태**: 진행 중 