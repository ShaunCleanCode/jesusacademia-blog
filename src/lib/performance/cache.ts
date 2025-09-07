// 캐싱 전략 및 최적화 유틸리티

interface CacheConfig {
  maxAge: number; // 초 단위
  staleWhileRevalidate: number; // 초 단위
  maxSize: number; // 항목 수
}

class CacheManager {
  private cache = new Map<string, { data: any; timestamp: number; hits: number }>();
  private config: CacheConfig = {
    maxAge: 300, // 5분
    staleWhileRevalidate: 60, // 1분
    maxSize: 100,
  };

  constructor(config?: Partial<CacheConfig>) {
    if (config) {
      this.config = { ...this.config, ...config };
    }
  }

  // 캐시에서 데이터 가져오기
  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    
    if (!item) return null;

    const now = Date.now();
    const age = (now - item.timestamp) / 1000;

    // 만료된 경우
    if (age > this.config.maxAge) {
      this.cache.delete(key);
      return null;
    }

    // 히트 수 증가
    item.hits++;
    
    return item.data as T;
  }

  // 캐시에 데이터 저장
  set<T>(key: string, data: T): void {
    // 캐시 크기 제한
    if (this.cache.size >= this.config.maxSize) {
      this.evictLeastUsed();
    }

    this.cache.set(key, {
      data,
      timestamp: Date.now(),
      hits: 0,
    });
  }

  // 캐시 무효화
  invalidate(key: string): void {
    this.cache.delete(key);
  }

  // 모든 캐시 클리어
  clear(): void {
    this.cache.clear();
  }

  // 가장 적게 사용된 항목 제거
  private evictLeastUsed(): void {
    let leastUsedKey = '';
    let leastHits = Infinity;

    for (const [key, item] of this.cache.entries()) {
      if (item.hits < leastHits) {
        leastHits = item.hits;
        leastUsedKey = key;
      }
    }

    if (leastUsedKey) {
      this.cache.delete(leastUsedKey);
    }
  }

  // 캐시 통계
  getStats() {
    const now = Date.now();
    let totalHits = 0;
    let expiredItems = 0;

    for (const [key, item] of this.cache.entries()) {
      totalHits += item.hits;
      const age = (now - item.timestamp) / 1000;
      if (age > this.config.maxAge) {
        expiredItems++;
      }
    }

    return {
      size: this.cache.size,
      totalHits,
      expiredItems,
      hitRate: totalHits / Math.max(this.cache.size, 1),
    };
  }
}

// 전역 캐시 매니저
export const cacheManager = new CacheManager();

// React Query 스타일 캐싱 훅
export const useCache = <T>(
  key: string,
  fetcher: () => Promise<T>,
  options?: {
    staleTime?: number;
    cacheTime?: number;
  }
) => {
  const [data, setData] = React.useState<T | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const fetchData = async () => {
      // 캐시에서 먼저 확인
      const cached = cacheManager.get<T>(key);
      if (cached) {
        setData(cached);
        return;
      }

      setLoading(true);
      try {
        const result = await fetcher();
        cacheManager.set(key, result);
        setData(result);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [key]);

  return { data, loading, error };
};

// 이미지 프리로딩
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// 여러 이미지 프리로딩
export const preloadImages = async (srcs: string[]): Promise<void> => {
  await Promise.all(srcs.map(preloadImage));
};

// 스크립트 지연 로딩
export const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

// CSS 지연 로딩
export const loadStylesheet = (href: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.onload = () => resolve();
    link.onerror = reject;
    document.head.appendChild(link);
  });
};

// 디바운스 유틸리티
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// 쓰로틀 유틸리티
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

// 가상 스크롤링을 위한 아이템 크기 계산
export const calculateVirtualScroll = (
  containerHeight: number,
  itemHeight: number,
  totalItems: number,
  scrollTop: number
) => {
  const visibleItems = Math.ceil(containerHeight / itemHeight);
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(startIndex + visibleItems + 1, totalItems);
  
  return {
    startIndex,
    endIndex,
    visibleItems,
    totalHeight: totalItems * itemHeight,
    offsetY: startIndex * itemHeight,
  };
};
