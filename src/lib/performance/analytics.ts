// 성능 분석 및 최적화를 위한 유틸리티

interface PerformanceMetrics {
  loadTime: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
}

class PerformanceAnalytics {
  private metrics: PerformanceMetrics = {
    loadTime: 0,
    firstContentfulPaint: 0,
    largestContentfulPaint: 0,
    firstInputDelay: 0,
    cumulativeLayoutShift: 0,
  };

  constructor() {
    if (typeof window !== 'undefined') {
      this.initializeMetrics();
    }
  }

  private initializeMetrics() {
    // 페이지 로드 시간 측정
    window.addEventListener('load', () => {
      this.metrics.loadTime = performance.now();
    });

    // Web Vitals 측정
    this.measureWebVitals();
  }

  private measureWebVitals() {
    // First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          this.metrics.firstContentfulPaint = entry.startTime;
        }
      }
    });
    fcpObserver.observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      this.metrics.largestContentfulPaint = lastEntry.startTime;
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay (FID)
    const fidObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        this.metrics.firstInputDelay = (entry as any).processingStart - entry.startTime;
      }
    });
    fidObserver.observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift (CLS)
    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
        }
      }
      this.metrics.cumulativeLayoutShift = clsValue;
    });
    clsObserver.observe({ entryTypes: ['layout-shift'] });
  }

  getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }

  // 성능 점수 계산 (0-100)
  getPerformanceScore(): number {
    const { firstContentfulPaint, largestContentfulPaint, firstInputDelay, cumulativeLayoutShift } = this.metrics;
    
    let score = 100;

    // FCP 점수 (0-25점)
    if (firstContentfulPaint > 3000) score -= 25;
    else if (firstContentfulPaint > 1800) score -= 15;
    else if (firstContentfulPaint > 1000) score -= 5;

    // LCP 점수 (0-25점)
    if (largestContentfulPaint > 4000) score -= 25;
    else if (largestContentfulPaint > 2500) score -= 15;
    else if (largestContentfulPaint > 1200) score -= 5;

    // FID 점수 (0-25점)
    if (firstInputDelay > 300) score -= 25;
    else if (firstInputDelay > 100) score -= 15;
    else if (firstInputDelay > 50) score -= 5;

    // CLS 점수 (0-25점)
    if (cumulativeLayoutShift > 0.25) score -= 25;
    else if (cumulativeLayoutShift > 0.1) score -= 15;
    else if (cumulativeLayoutShift > 0.05) score -= 5;

    return Math.max(0, score);
  }

  // 성능 리포트 생성
  generateReport(): string {
    const score = this.getPerformanceScore();
    const metrics = this.getMetrics();

    return `
성능 분석 리포트:
================
전체 점수: ${score}/100

상세 메트릭:
- 페이지 로드 시간: ${metrics.loadTime.toFixed(2)}ms
- First Contentful Paint: ${metrics.firstContentfulPaint.toFixed(2)}ms
- Largest Contentful Paint: ${metrics.largestContentfulPaint.toFixed(2)}ms
- First Input Delay: ${metrics.firstInputDelay.toFixed(2)}ms
- Cumulative Layout Shift: ${metrics.cumulativeLayoutShift.toFixed(4)}

권장사항:
${score < 50 ? '⚠️ 성능 최적화가 필요합니다' : score < 80 ? '✅ 성능이 양호합니다' : '🎉 성능이 우수합니다'}
    `.trim();
  }
}

// 싱글톤 인스턴스
export const performanceAnalytics = new PerformanceAnalytics();

// 이미지 최적화 유틸리티
export const optimizeImage = (src: string, width: number, height?: number): string => {
  // 실제 구현에서는 이미지 CDN이나 최적화 서비스 사용
  const params = new URLSearchParams({
    w: width.toString(),
    q: '85', // 품질 85%
    f: 'webp', // WebP 포맷
  });
  
  if (height) {
    params.set('h', height.toString());
  }

  return `${src}?${params.toString()}`;
};

// 번들 크기 분석
export const analyzeBundleSize = () => {
  if (typeof window === 'undefined') return null;

  const scripts = Array.from(document.querySelectorAll('script[src]'));
  const stylesheets = Array.from(document.querySelectorAll('link[rel="stylesheet"]'));
  
  const totalSize = scripts.length + stylesheets.length;
  
  return {
    scripts: scripts.length,
    stylesheets: stylesheets.length,
    total: totalSize,
    recommendation: totalSize > 20 ? '번들 크기를 줄이는 것을 고려하세요' : '번들 크기가 적절합니다'
  };
};

// 메모리 사용량 모니터링
export const monitorMemoryUsage = () => {
  if (typeof window === 'undefined' || !(window as any).performance.memory) return null;

  const memory = (window as any).performance.memory;
  
  return {
    used: Math.round(memory.usedJSHeapSize / 1048576), // MB
    total: Math.round(memory.totalJSHeapSize / 1048576), // MB
    limit: Math.round(memory.jsHeapSizeLimit / 1048576), // MB
    usage: Math.round((memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100) // %
  };
};
