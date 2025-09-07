// 블로그 시스템 타입 정의

export interface Author {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  socialLinks: SocialLink[];
}

export interface SocialLink {
  platform: 'twitter' | 'linkedin' | 'github' | 'website';
  url: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string; // 디자인용 색상
  icon: string;
}

export interface Tag {
  id: string;
  name: string;
  slug: string;
  color: string;
}

export interface Media {
  id: string;
  url: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
  format: string;
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogImage?: string;
  canonicalUrl?: string;
}

export interface BlogPost {
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

// 블로그 필터 및 정렬
export interface BlogFilters {
  category?: string;
  tag?: string;
  author?: string;
  status?: 'draft' | 'published' | 'archived';
  search?: string;
}

export interface BlogSortOptions {
  field: 'publishedAt' | 'updatedAt' | 'viewCount' | 'likeCount' | 'readingTime';
  order: 'asc' | 'desc';
}

// 페이지네이션
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// 검색 결과
export interface SearchResult {
  item: BlogPost;
  score: number;
  matches: Array<{
    key: string;
    value: string;
    indices: number[][];
  }>;
}

// 에디터 관련
export interface EditorState {
  content: string;
  title: string;
  excerpt: string;
  categories: string[];
  tags: string[];
  featuredImage?: Media;
  seo: SEOData;
  status: 'draft' | 'published' | 'archived';
  publishedAt?: Date;
}

// API 응답 타입
export interface BlogListResponse {
  posts: BlogPost[];
  pagination: PaginationInfo;
  filters: BlogFilters;
  sort: BlogSortOptions;
}

export interface BlogPostResponse {
  post: BlogPost;
  relatedPosts: BlogPost[];
  previousPost?: BlogPost;
  nextPost?: BlogPost;
}
