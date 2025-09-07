import { remark } from 'remark';
import remarkHtml from 'remark-html';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkMath from 'remark-math';
import remarkRehype from 'remark-rehype';
import rehypeKatex from 'rehype-katex';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// Markdown을 HTML로 변환하는 고급 파서
export const parseMarkdown = async (markdown: string): Promise<string> => {
  const result = await remark()
    .use(remarkGfm) // GitHub Flavored Markdown 지원
    .use(remarkBreaks) // 줄바꿈 지원
    .use(remarkMath) // 수학 공식 지원
    .use(remarkHtml, { sanitize: false }) // HTML 태그 허용
    .process(markdown);

  return result.toString();
};

// 고급 HTML 변환 (수학 공식, 코드 하이라이팅 포함)
export const parseMarkdownAdvanced = async (markdown: string): Promise<string> => {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkBreaks)
    .use(remarkMath)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeKatex) // 수학 공식 렌더링
    .use(rehypeHighlight) // 코드 하이라이팅
    .use(rehypeSlug) // 헤딩에 ID 추가
    .use(rehypeAutolinkHeadings, {
      behavior: 'wrap',
      properties: {
        className: ['heading-link'],
        'aria-label': 'Link to this section'
      }
    })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);

  return result.toString();
};

// TOC (Table of Contents) 생성
export const generateTOC = (markdown: string): Array<{id: string, text: string, level: number}> => {
  const toc: Array<{id: string, text: string, level: number}> = [];
  const lines = markdown.split('\n');
  
  lines.forEach(line => {
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      const id = text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim();
      
      toc.push({ id, text, level });
    }
  });
  
  return toc;
};

// 읽기 시간 계산 (한국어 기준)
export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200; // 한국어 기준 분당 읽기 단어 수
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return Math.max(1, minutes); // 최소 1분
};

// Markdown에서 메타데이터 추출
export const extractMetadata = (markdown: string): {
  title?: string;
  description?: string;
  tags?: string[];
  category?: string;
  publishedAt?: string;
  featuredImage?: string;
} => {
  const metadata: any = {};
  const lines = markdown.split('\n');
  
  lines.forEach(line => {
    if (line.startsWith('title:')) {
      metadata.title = line.replace('title:', '').trim();
    } else if (line.startsWith('description:')) {
      metadata.description = line.replace('description:', '').trim();
    } else if (line.startsWith('tags:')) {
      metadata.tags = line.replace('tags:', '').trim().split(',').map(tag => tag.trim());
    } else if (line.startsWith('category:')) {
      metadata.category = line.replace('category:', '').trim();
    } else if (line.startsWith('publishedAt:')) {
      metadata.publishedAt = line.replace('publishedAt:', '').trim();
    } else if (line.startsWith('featuredImage:')) {
      metadata.featuredImage = line.replace('featuredImage:', '').trim();
    }
  });
  
  return metadata;
};
