import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HighlightBox from '@/components/HighlightBox';
import AvatarCard from '@/components/AvatarCard';
import PrimaryButton from '@/components/PrimaryButton';
import { generateBlogPostSchema, generateFAQSchema, defaultFAQs } from '@/lib/schema';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 실제로는 데이터베이스나 CMS에서 가져올 데이터
const blogData = {
  title: "고석희 목사와 예수서원",
  description: "고석희 목사가 뉴욕에서 시작한 복음+지성 통합 아카데미",
  authorName: "예수서원",
  publishedDate: "2024-01-15",
  modifiedDate: "2024-01-15",
  imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
  url: "https://jesusacademia.org/blog/introduction",
  content: {
    hero_image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop",
    sections: [
      {
        title: "예수서원의 사명",
        content: "예수서원은 복음과 지성의 조화로운 통합을 추구하는 기독교 인문학 아카데미입니다. 현대 사회에서 종교와 학문이 분리되어 있는 상황에서, 우리는 진정한 지혜가 하나님의 말씀과 인간의 이성을 함께 통해 온다는 믿음을 가지고 있습니다."
      },
      {
        title: "고석희 목사의 소개",
        content: "고석희 목사는 예수서원의 설립자이자 원장으로, 깊이 있는 신학적 통찰과 현대 철학에 대한 이해를 바탕으로 복음과 지성의 통합을 실천하고 있습니다. 뉴욕에서의 오랜 목회 경험과 학문적 배경을 통해, 현대인들이 직면한 영적, 지적 도전에 대한 해답을 제시합니다."
      },
      {
        title: "Oyster Bay 위치의 의미",
        content: "뉴욕 롱아일랜드의 Oyster Bay는 아름다운 자연 환경과 함께 깊이 있는 성찰의 시간을 제공하는 이상적인 장소입니다. 이곳에서 우리는 현대 문명의 소음에서 벗어나, 하나님의 창조 세계 속에서 진정한 지혜를 탐구할 수 있습니다."
      },
      {
        title: "훈련 프로그램 소개",
        content: "예수서원에서는 기독교 인문학, 성경 연구, 철학, 역사, 문학 등을 통합한 다양한 훈련 프로그램을 제공합니다. 단순한 지식 전달이 아닌, 삶의 변화를 이끌어내는 실천적 학습을 통해 참된 지혜를 추구합니다."
      },
      {
        title: "초대의 메시지",
        content: "복음과 지성의 통합에 관심이 있는 모든 분들을 예수서원에 초대합니다. 신학도, 지식인, 그리고 진리 탐구에 열정을 가진 분들이 함께 모여, 하나님의 말씀과 인간의 이성이 조화를 이루는 아름다운 세계를 만들어가기를 소망합니다."
      }
    ]
  }
};

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  // slug를 사용하여 동적으로 메타데이터 생성 가능
  return {
    title: `${blogData.title} - 예수서원`,
    description: blogData.description,
    keywords: ["예수서원", "고석희 목사", "기독교 인문학", "뉴욕", "Oyster Bay"],
    authors: [{ name: blogData.authorName }],
    openGraph: {
      title: blogData.title,
      description: blogData.description,
      images: [blogData.imageUrl],
      type: 'article',
      publishedTime: blogData.publishedDate,
      modifiedTime: blogData.modifiedDate,
    },
    twitter: {
      card: 'summary_large_image',
      title: blogData.title,
      description: blogData.description,
      images: [blogData.imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  // slug를 사용하여 동적으로 블로그 데이터 로드 가능
  const schemaData = generateBlogPostSchema({
    title: blogData.title,
    description: blogData.description,
    authorName: blogData.authorName,
    publishedDate: blogData.publishedDate,
    modifiedDate: blogData.modifiedDate,
    imageUrl: blogData.imageUrl,
    url: blogData.url,
  });

  const faqSchema = generateFAQSchema(defaultFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      
      <article className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Link 
                href="/blog" 
                className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 transition-colors"
              >
                ← 블로그로 돌아가기
              </Link>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
                {blogData.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                {blogData.description}
              </p>
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500">
                <span>작성자: {blogData.authorName}</span>
                <span>•</span>
                <span>{new Date(blogData.publishedDate).toLocaleDateString('ko-KR')}</span>
              </div>
            </div>
            
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg mb-12 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
              <div className="text-center">
                <div className="text-8xl mb-6">📖</div>
                <h2 className="text-2xl font-bold text-primary-800 mb-2">예수서원</h2>
                <p className="text-primary-600">복음과 지성의 통합</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {blogData.content.sections.map((section, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    {section.title}
                  </h2>
                  <div className="text-lg text-gray-700 leading-relaxed">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Author Card */}
            <div className="mt-16">
              <AvatarCard
                name="예수서원"
                title="기독교 인문학 아카데미"
                description="복음과 지성의 통합을 추구하는 예수서원입니다. 고석희 목사가 이끄는 이곳에서 깊이 있는 학습과 성찰의 시간을 제공합니다."
              />
            </div>

            {/* CTA Section */}
            <div className="mt-16 p-8 bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  함께 성장하실 분들을 초대합니다
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  복음과 지성의 통합에 관심이 있는 모든 분들을 예수서원에 초대합니다.
                </p>
                <PrimaryButton href="/contact" size="lg">
                  문의하기
                </PrimaryButton>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              자주 묻는 질문
            </h2>
            <div className="space-y-6">
              {defaultFAQs.map((faq, index) => (
                <HighlightBox key={index} variant="secondary" title={faq.question}>
                  <p className="text-gray-700">{faq.answer}</p>
                </HighlightBox>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <Link 
                href="/" 
                className="text-primary-600 hover:text-primary-700 transition-colors"
              >
                ← 홈으로 돌아가기
              </Link>
              <PrimaryButton href="/programs" variant="outline">
                프로그램 둘러보기
              </PrimaryButton>
            </div>
          </div>
        </section>
      </article>
    </>
  );
} 