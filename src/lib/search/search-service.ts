import Fuse from 'fuse.js';
import { BlogPost } from '../blog/types';
import { fuseOptions, highlightMatches, SearchFilters, SearchResult } from './fuse-config';

class SearchService {
  private fuse: Fuse<BlogPost> | null = null;
  private posts: BlogPost[] = [];

  // 검색 인덱스 초기화
  initialize(posts: BlogPost[]) {
    this.posts = posts;
    this.fuse = new Fuse(posts, fuseOptions);
  }

  // 기본 검색
  search(query: string, limit: number = 10): SearchResult[] {
    if (!this.fuse || !query.trim()) {
      return this.posts.slice(0, limit).map(post => ({
        ...post,
        highlightedTitle: post.title,
        highlightedExcerpt: post.excerpt
      }));
    }

    const results = this.fuse.search(query, { limit });
    
    return results.map(result => {
      const post = result.item;
      const matches = result.matches || [];
      
      // 제목과 요약에 하이라이팅 적용
      const highlightedTitle = highlightMatches(post.title, matches.filter(m => m.key === 'title'));
      const highlightedExcerpt = highlightMatches(post.excerpt, matches.filter(m => m.key === 'excerpt'));

      return {
        ...post,
        score: result.score,
        matches: matches,
        highlightedTitle,
        highlightedExcerpt
      };
    });
  }

  // 고급 검색 (필터 적용)
  advancedSearch(filters: SearchFilters, limit: number = 10): SearchResult[] {
    let results: SearchResult[] = [];

    // 1. 텍스트 검색
    if (filters.query.trim()) {
      results = this.search(filters.query, limit * 2); // 더 많은 결과를 가져와서 필터링
    } else {
      results = this.posts.map(post => ({
        ...post,
        highlightedTitle: post.title,
        highlightedExcerpt: post.excerpt
      }));
    }

    // 2. 카테고리 필터
    if (filters.categories.length > 0) {
      results = results.filter(post =>
        post.categories.some(category =>
          filters.categories.includes(category.id)
        )
      );
    }

    // 3. 태그 필터
    if (filters.tags.length > 0) {
      results = results.filter(post =>
        post.tags.some(tag =>
          filters.tags.includes(tag.id)
        )
      );
    }

    // 4. 작성자 필터
    if (filters.authors.length > 0) {
      results = results.filter(post =>
        filters.authors.includes(post.author.id)
      );
    }

    // 5. 날짜 범위 필터
    if (filters.dateRange) {
      const startDate = new Date(filters.dateRange.start);
      const endDate = new Date(filters.dateRange.end);
      
      results = results.filter(post => {
        const postDate = new Date(post.publishedAt);
        return postDate >= startDate && postDate <= endDate;
      });
    }

    // 6. 정렬
    results = this.sortResults(results, filters.sortBy, filters.sortOrder);

    // 7. 제한
    return results.slice(0, limit);
  }

  // 결과 정렬
  private sortResults(
    results: SearchResult[],
    sortBy: SearchFilters['sortBy'],
    sortOrder: SearchFilters['sortOrder']
  ): SearchResult[] {
    return results.sort((a, b) => {
      let comparison = 0;

      switch (sortBy) {
        case 'relevance':
          // 점수가 낮을수록 더 정확한 매치
          comparison = (a.score || 1) - (b.score || 1);
          break;
        case 'date':
          comparison = new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'views':
          comparison = (a.views || 0) - (b.views || 0);
          break;
        default:
          comparison = 0;
      }

      return sortOrder === 'asc' ? comparison : -comparison;
    });
  }

  // 자동완성 제안
  getSuggestions(query: string, limit: number = 5): string[] {
    if (!this.fuse || !query.trim()) return [];

    const results = this.fuse.search(query, { limit });
    const suggestions = new Set<string>();

    results.forEach(result => {
      // 제목에서 제안 추출
      const titleWords = result.item.title.split(' ');
      titleWords.forEach(word => {
        if (word.toLowerCase().includes(query.toLowerCase()) && word.length > 2) {
          suggestions.add(word);
        }
      });

      // 태그에서 제안 추출
      result.item.tags.forEach(tag => {
        if (tag.name.toLowerCase().includes(query.toLowerCase())) {
          suggestions.add(tag.name);
        }
      });
    });

    return Array.from(suggestions).slice(0, limit);
  }

  // 인기 검색어 (실제로는 서버에서 관리)
  getPopularQueries(): string[] {
    return [
      '예수서원',
      '기독교 인문학',
      '성경 연구',
      '캠프 후기',
      '신앙 성장'
    ];
  }

  // 검색 통계 (실제로는 서버에서 관리)
  getSearchStats() {
    return {
      totalPosts: this.posts.length,
      totalCategories: new Set(this.posts.flatMap(p => p.categories.map(c => c.id))).size,
      totalTags: new Set(this.posts.flatMap(p => p.tags.map(t => t.id))).size,
      totalAuthors: new Set(this.posts.map(p => p.author.id)).size
    };
  }
}

// 싱글톤 인스턴스
export const searchService = new SearchService();
