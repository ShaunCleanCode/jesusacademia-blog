import Fuse from 'fuse.js';
import { BlogPost } from '../blog/types';

// Fuse.js 검색 설정
export const fuseOptions: Fuse.IFuseOptions<BlogPost> = {
  keys: [
    {
      name: 'title',
      weight: 0.3
    },
    {
      name: 'excerpt',
      weight: 0.2
    },
    {
      name: 'content',
      weight: 0.1
    },
    {
      name: 'author.name',
      weight: 0.1
    },
    {
      name: 'categories',
      weight: 0.1,
      getFn: (obj) => obj.categories.map(cat => cat.name)
    },
    {
      name: 'tags',
      weight: 0.1,
      getFn: (obj) => obj.tags.map(tag => tag.name)
    }
  ],
  threshold: 0.3, // 검색 정확도 (0-1, 낮을수록 정확)
  distance: 100, // 검색 범위
  minMatchCharLength: 2, // 최소 매치 문자 수
  includeScore: true, // 점수 포함
  includeMatches: true, // 매치 정보 포함
  ignoreLocation: false, // 위치 무시 여부
  findAllMatches: true, // 모든 매치 찾기
  shouldSort: true, // 결과 정렬
  sortFn: (a, b) => {
    // 점수 기반 정렬 (낮은 점수가 더 정확)
    if (a.score && b.score) {
      return a.score - b.score;
    }
    return 0;
  }
};

// 검색 결과 하이라이팅을 위한 함수
export const highlightMatches = (text: string, matches: Fuse.FuseResultMatch[]): string => {
  if (!matches || matches.length === 0) return text;
  
  let highlightedText = text;
  const sortedMatches = matches
    .flatMap(match => match.indices || [])
    .sort((a, b) => b[0] - a[0]); // 역순으로 정렬하여 인덱스 변경 방지
  
  sortedMatches.forEach(([start, end]) => {
    const before = highlightedText.substring(0, start);
    const match = highlightedText.substring(start, end + 1);
    const after = highlightedText.substring(end + 1);
    
    highlightedText = `${before}<mark class="bg-yellow-200 dark:bg-yellow-800 px-1 rounded">${match}</mark>${after}`;
  });
  
  return highlightedText;
};

// 검색 필터 타입
export interface SearchFilters {
  query: string;
  categories: string[];
  tags: string[];
  authors: string[];
  dateRange: {
    start: string;
    end: string;
  } | null;
  sortBy: 'relevance' | 'date' | 'title' | 'views';
  sortOrder: 'asc' | 'desc';
}

// 기본 검색 필터
export const defaultSearchFilters: SearchFilters = {
  query: '',
  categories: [],
  tags: [],
  authors: [],
  dateRange: null,
  sortBy: 'relevance',
  sortOrder: 'desc'
};

// 검색 결과 타입
export interface SearchResult extends BlogPost {
  score?: number;
  matches?: Fuse.FuseResultMatch[];
  highlightedTitle?: string;
  highlightedExcerpt?: string;
}
