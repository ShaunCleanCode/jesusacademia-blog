import { Metadata } from 'next';
import { BlogPost } from '../blog/types';

// 기본 메타데이터
export const defaultMetadata: Metadata = {
  title: {
    default: '예수서원 Jesus Academia',
    template: '%s | 예수서원 Jesus Academia'
  },
  description: '기독교 인문학을 통한 신앙과 지성의 통합을 추구하는 예수서원입니다. 성경 연구, 인문학 강의, 신앙 공동체 형성을 통해 하나님의 말씀을 깊이 있게 탐구합니다.',
  keywords: [
    '예수서원',
    'Jesus Academia', 
    '기독교',
    '인문학',
    '성경 연구',
    '신앙',
    '교회',
    '캠프',
    '교육',
    '신학'
  ],
  authors: [{ name: '예수서원 Jesus Academia' }],
  creator: '예수서원 Jesus Academia',
  publisher: '예수서원 Jesus Academia',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jesusacademia.org'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://jesusacademia.org',
    siteName: '예수서원 Jesus Academia',
    title: '예수서원 Jesus Academia',
    description: '기독교 인문학을 통한 신앙과 지성의 통합을 추구하는 예수서원입니다.',
    images: [
      {
        url: '/images/logos/jesus-academia-logo-main.png',
        width: 1200,
        height: 630,
        alt: '예수서원 Jesus Academia 로고',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@jesusacademia',
    creator: '@jesusacademia',
    title: '예수서원 Jesus Academia',
    description: '기독교 인문학을 통한 신앙과 지성의 통합을 추구하는 예수서원입니다.',
    images: ['/images/logos/jesus-academia-logo-main.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

// 블로그 메인 페이지 메타데이터
export const blogMetadata: Metadata = {
  title: '블로그',
  description: '예수서원의 기독교 인문학 블로그입니다. 성경 연구, 신앙 성장, 인문학적 사고에 관한 깊이 있는 글들을 만나보세요.',
  openGraph: {
    title: '예수서원 블로그',
    description: '기독교 인문학을 통한 신앙과 지성의 통합을 추구하는 예수서원의 블로그입니다.',
    url: 'https://jesusacademia.org/blog',
    type: 'website',
    images: [
      {
        url: '/images/logos/jesus-academia-logo-main.png',
        width: 1200,
        height: 630,
        alt: '예수서원 블로그',
      },
    ],
  },
  twitter: {
    title: '예수서원 블로그',
    description: '기독교 인문학을 통한 신앙과 지성의 통합을 추구하는 예수서원의 블로그입니다.',
    images: ['/images/logos/jesus-academia-logo-main.png'],
  },
  alternates: {
    canonical: '/blog',
  },
};

// 개별 블로그 포스트 메타데이터
export const generateBlogPostMetadata = (post: BlogPost): Metadata => {
  const publishedTime = new Date(post.publishedAt).toISOString();
  const modifiedTime = new Date(post.updatedAt).toISOString();
  
  return {
    title: post.seo?.title || post.title,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords || post.tags.map(tag => tag.name),
    authors: [{ name: post.author.name }],
    publishedTime,
    modifiedTime,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://jesusacademia.org/blog/${post.slug}`,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [post.author.name],
      section: post.categories.map(cat => cat.name).join(', '),
      tags: post.tags.map(tag => tag.name),
      images: [
        {
          url: post.featuredImage?.url || '/images/default-blog-image.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage?.url || '/images/default-blog-image.jpg'],
      creator: `@${post.author.socialLinks?.twitter?.replace('https://twitter.com/', '') || 'jesusacademia'}`,
    },
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
  };
};

// 연락처 페이지 메타데이터
export const contactMetadata: Metadata = {
  title: '연락처',
  description: '예수서원에 문의하거나 방문하고 싶으시다면 언제든 연락해 주세요. 전화, 이메일, 주소 정보를 확인하실 수 있습니다.',
  openGraph: {
    title: '예수서원 연락처',
    description: '예수서원에 문의하거나 방문하고 싶으시다면 언제든 연락해 주세요.',
    url: 'https://jesusacademia.org/contact',
    type: 'website',
  },
  twitter: {
    title: '예수서원 연락처',
    description: '예수서원에 문의하거나 방문하고 싶으시다면 언제든 연락해 주세요.',
  },
  alternates: {
    canonical: '/contact',
  },
};

// FAQ 페이지 메타데이터
export const faqMetadata: Metadata = {
  title: '자주 묻는 질문',
  description: '예수서원에 대해 자주 묻는 질문들과 답변을 확인하실 수 있습니다. 프로그램, 등록, 시설 등에 관한 정보를 제공합니다.',
  openGraph: {
    title: '예수서원 자주 묻는 질문',
    description: '예수서원에 대해 자주 묻는 질문들과 답변을 확인하실 수 있습니다.',
    url: 'https://jesusacademia.org/faq',
    type: 'website',
  },
  twitter: {
    title: '예수서원 자주 묻는 질문',
    description: '예수서원에 대해 자주 묻는 질문들과 답변을 확인하실 수 있습니다.',
  },
  alternates: {
    canonical: '/faq',
  },
};

// 프로그램 페이지 메타데이터
export const programsMetadata: Metadata = {
  title: '프로그램',
  description: '예수서원의 다양한 교육 프로그램을 확인하세요. 기독교 인문학 과정, 캠프, 특별 강의 등 신앙 성장을 위한 프로그램들을 제공합니다.',
  openGraph: {
    title: '예수서원 프로그램',
    description: '예수서원의 다양한 교육 프로그램을 확인하세요.',
    url: 'https://jesusacademia.org/programs',
    type: 'website',
  },
  twitter: {
    title: '예수서원 프로그램',
    description: '예수서원의 다양한 교육 프로그램을 확인하세요.',
  },
  alternates: {
    canonical: '/programs',
  },
};
