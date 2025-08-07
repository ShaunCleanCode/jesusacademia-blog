export interface BlogPostSchema {
  "@context": "https://schema.org";
  "@type": "BlogPosting";
  headline: string;
  description: string;
  author: {
    "@type": "Person";
    name: string;
    url?: string;
  };
  publisher: {
    "@type": "Organization";
    name: string;
    logo: {
      "@type": "ImageObject";
      url: string;
    };
  };
  datePublished: string;
  dateModified: string;
  image?: string;
  url: string;
  mainEntityOfPage: {
    "@type": "WebPage";
    "@id": string;
  };
}

export interface FAQSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }>;
}

export function generateBlogPostSchema(data: {
  title: string;
  description: string;
  authorName: string;
  authorUrl?: string;
  publishedDate: string;
  modifiedDate: string;
  imageUrl?: string;
  url: string;
}): BlogPostSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.description,
    author: {
      "@type": "Person",
      name: data.authorName,
      ...(data.authorUrl && { url: data.authorUrl }),
    },
    publisher: {
      "@type": "Organization",
      name: "예수서원",
      logo: {
        "@type": "ImageObject",
        url: "https://jesusacademia.org/logo.png", // 실제 로고 URL로 변경 필요
      },
    },
    datePublished: data.publishedDate,
    dateModified: data.modifiedDate,
    ...(data.imageUrl && { image: data.imageUrl }),
    url: data.url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": data.url,
    },
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>): FAQSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export const defaultFAQs = [
  {
    question: "예수서원은 어떤 곳인가요?",
    answer: "예수서원은 고석희 목사가 뉴욕 Oyster Bay에서 시작한 복음과 지성을 통합하는 기독교 인문학 아카데미입니다."
  },
  {
    question: "어디에 위치해 있나요?",
    answer: "뉴욕 롱아일랜드의 Oyster Bay에 위치해 있으며, 아름다운 자연 환경 속에서 깊이 있는 학습과 성찰의 시간을 제공합니다."
  },
  {
    question: "어떤 프로그램을 제공하나요?",
    answer: "기독교 인문학, 성경 연구, 철학, 역사, 문학 등을 통합한 다양한 훈련 프로그램을 제공합니다."
  },
  {
    question: "누구를 위한 곳인가요?",
    answer: "복음과 지성의 통합에 관심이 있는 모든 분들을 환영합니다. 신학도, 지식인, 그리고 진리 탐구에 열정을 가진 분들이 함께합니다."
  }
]; 