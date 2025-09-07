import React from 'react';
import { parseMarkdownAdvanced, generateTOC } from './parser';

// Markdown 렌더링을 위한 React 컴포넌트
interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ 
  content, 
  className = '' 
}) => {
  const [htmlContent, setHtmlContent] = React.useState<string>('');
  const [toc, setToc] = React.useState<Array<{id: string, text: string, level: number}>>([]);

  React.useEffect(() => {
    const processContent = async () => {
      try {
        const html = await parseMarkdownAdvanced(content);
        setHtmlContent(html);
        setToc(generateTOC(content));
      } catch (error) {
        console.error('Markdown parsing error:', error);
        setHtmlContent(content);
      }
    };

    processContent();
  }, [content]);

  return (
    <div className={`prose prose-lg max-w-none ${className}`}>
      <div 
        dangerouslySetInnerHTML={{ __html: htmlContent }}
        className="markdown-content"
      />
    </div>
  );
};

// TOC 컴포넌트
interface TOCProps {
  toc: Array<{id: string, text: string, level: number}>;
  className?: string;
}

export const TableOfContents: React.FC<TOCProps> = ({ toc, className = '' }) => {
  if (toc.length === 0) return null;

  return (
    <div className={`toc ${className}`}>
      <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
        목차
      </h3>
      <nav className="space-y-1">
        {toc.map((item, index) => (
          <a
            key={index}
            href={`#${item.id}`}
            className={`block text-sm transition-colors hover:text-purple-600 ${
              item.level === 1 
                ? 'font-semibold text-gray-900 dark:text-white' 
                : item.level === 2
                  ? 'ml-4 text-gray-700 dark:text-gray-300'
                  : 'ml-8 text-gray-600 dark:text-gray-400'
            }`}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
};

// 코드 블록 스타일링을 위한 CSS 클래스
export const markdownStyles = `
  .markdown-content {
    line-height: 1.8;
  }

  .markdown-content h1 {
    font-size: 2.5rem;
    font-weight: 700;
    margin: 2rem 0 1rem 0;
    color: #1f2937;
  }

  .markdown-content h2 {
    font-size: 2rem;
    font-weight: 600;
    margin: 1.5rem 0 0.75rem 0;
    color: #374151;
  }

  .markdown-content h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1.25rem 0 0.5rem 0;
    color: #4b5563;
  }

  .markdown-content h4 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 1rem 0 0.5rem 0;
    color: #6b7280;
  }

  .markdown-content p {
    margin: 1rem 0;
    color: #4b5563;
  }

  .markdown-content ul, .markdown-content ol {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  .markdown-content li {
    margin: 0.5rem 0;
    color: #4b5563;
  }

  .markdown-content blockquote {
    border-left: 4px solid #8b5cf6;
    padding-left: 1rem;
    margin: 1.5rem 0;
    font-style: italic;
    color: #6b7280;
    background-color: #f8fafc;
    padding: 1rem;
    border-radius: 0.5rem;
  }

  .markdown-content code {
    background-color: #f1f5f9;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
    font-size: 0.875rem;
    color: #e11d48;
  }

  .markdown-content pre {
    background-color: #1e293b;
    color: #e2e8f0;
    padding: 1.5rem;
    border-radius: 0.75rem;
    overflow-x: auto;
    margin: 1.5rem 0;
  }

  .markdown-content pre code {
    background-color: transparent;
    padding: 0;
    color: inherit;
    font-size: 0.875rem;
  }

  .markdown-content a {
    color: #8b5cf6;
    text-decoration: underline;
    transition: color 0.2s;
  }

  .markdown-content a:hover {
    color: #7c3aed;
  }

  .markdown-content img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    margin: 1.5rem 0;
  }

  .markdown-content table {
    width: 100%;
    border-collapse: collapse;
    margin: 1.5rem 0;
  }

  .markdown-content th,
  .markdown-content td {
    border: 1px solid #e5e7eb;
    padding: 0.75rem;
    text-align: left;
  }

  .markdown-content th {
    background-color: #f9fafb;
    font-weight: 600;
  }

  .markdown-content hr {
    border: none;
    height: 1px;
    background-color: #e5e7eb;
    margin: 2rem 0;
  }

  /* 다크모드 스타일 */
  .dark .markdown-content h1,
  .dark .markdown-content h2,
  .dark .markdown-content h3,
  .dark .markdown-content h4 {
    color: #f9fafb;
  }

  .dark .markdown-content p,
  .dark .markdown-content li {
    color: #d1d5db;
  }

  .dark .markdown-content blockquote {
    background-color: #374151;
    color: #9ca3af;
  }

  .dark .markdown-content code {
    background-color: #374151;
    color: #fbbf24;
  }

  .dark .markdown-content th {
    background-color: #374151;
  }

  .dark .markdown-content th,
  .dark .markdown-content td {
    border-color: #4b5563;
  }

  .dark .markdown-content hr {
    background-color: #4b5563;
  }
`;
