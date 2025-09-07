import { BlogPost } from '../blog/types';

// 구조화 데이터 생성 함수들
export const generateBlogPostStructuredData = (post: BlogPost) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.featuredImage?.url || "/images/default-blog-image.jpg",
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "url": post.author.socialLinks?.website || "#",
      "image": post.author.avatar?.url || "/images/default-avatar.jpg"
    },
    "publisher": {
      "@type": "Organization",
      "name": "예수서원 Jesus Academia",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/logos/jesus-academia-logo-main.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jesusacademia.org/blog/${post.slug}`
    },
    "articleSection": post.categories.map(cat => cat.name).join(", "),
    "keywords": post.tags.map(tag => tag.name).join(", "),
    "wordCount": post.content.split(' ').length,
    "timeRequired": `PT${post.readingTime}M`,
    "inLanguage": "ko-KR",
    "isAccessibleForFree": true,
    "genre": "기독교 인문학",
    "about": [
      {
        "@type": "Thing",
        "name": "기독교",
        "description": "기독교 신앙과 가르침"
      },
      {
        "@type": "Thing", 
        "name": "인문학",
        "description": "인문학적 사고와 연구"
      }
    ]
  };
};

export const generateBlogStructuredData = (posts: BlogPost[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "예수서원 블로그",
    "description": "기독교 인문학을 통한 신앙과 지성의 통합을 추구하는 예수서원의 블로그입니다.",
    "url": "https://jesusacademia.org/blog",
    "publisher": {
      "@type": "Organization",
      "name": "예수서원 Jesus Academia",
      "url": "https://jesusacademia.org",
      "logo": {
        "@type": "ImageObject",
        "url": "https://jesusacademia.org/images/logos/jesus-academia-logo-main.png"
      }
    },
    "blogPost": posts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "url": `https://jesusacademia.org/blog/${post.slug}`,
      "datePublished": post.publishedAt,
      "author": {
        "@type": "Person",
        "name": post.author.name
      }
    }))
  };
};

export const generateOrganizationStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "예수서원 Jesus Academia",
    "alternateName": "Jesus Academia",
    "description": "기독교 인문학을 통한 신앙과 지성의 통합을 추구하는 교육 기관",
    "url": "https://jesusacademia.org",
    "logo": "https://jesusacademia.org/images/logos/jesus-academia-logo-main.png",
    "image": "https://jesusacademia.org/images/campus/building-exterior.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1330 Wolver Hollow Rd",
      "addressLocality": "Oyster Bay",
      "addressRegion": "NY",
      "postalCode": "11771",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-516-277-2082",
      "contactType": "customer service",
      "email": "JesusChristAcademia@gmail.com"
    },
    "sameAs": [
      "https://www.facebook.com/jesusacademia",
      "https://www.instagram.com/jesusacademia",
      "https://www.youtube.com/jesusacademia"
    ],
    "foundingDate": "2020",
    "founder": {
      "@type": "Person",
      "name": "고화순"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "교육 프로그램",
      "itemListElement": [
        {
          "@type": "Course",
          "name": "기독교 인문학 과정",
          "description": "성경과 인문학을 통한 신앙 성장 프로그램"
        },
        {
          "@type": "Course", 
          "name": "캠프 프로그램",
          "description": "신앙 공동체 형성을 위한 캠프"
        }
      ]
    }
  };
};

export const generateBreadcrumbStructuredData = (items: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

export const generateFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
