export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'program' | 'contact' | 'location';
}

export const faqData: FAQ[] = [
  {
    id: 'faq-001',
    question: '예수서원은 어떤 곳인가요?',
    answer: '예수서원은 고석희 목사가 뉴욕 Oyster Bay에서 시작한 기독교 인문변증학 아카데미입니다. 복음과 지성을 통합하여 현대인들이 직면한 영적, 지적 도전에 대한 해답을 제시하고, 깊이 있는 신학적 통찰과 현대 철학에 대한 이해를 바탕으로 한 학습을 제공합니다.',
    category: 'general'
  },
  {
    id: 'faq-002',
    question: '예수서원의 위치는 어디인가요?',
    answer: '예수서원은 뉴욕 롱아일랜드의 Oyster Bay에 위치해 있습니다. 정확한 주소는 1330 Wolver Hollow Rd., Oyster Bay, NY 11771입니다. 아름다운 자연 환경과 함께 깊이 있는 성찰의 시간을 제공하는 이상적인 장소입니다.',
    category: 'location'
  },
  {
    id: 'faq-003',
    question: '캠프는 무료로 진행되나요?',
    answer: '네, 예수서원의 모든 캠프는 무료로 진행됩니다. 참가비나 수강료 없이 누구나 참여할 수 있으며, 이는 예수서원이 복음과 지성의 통합을 모든 이에게 제공하고자 하는 사명을 반영합니다.',
    category: 'program'
  },
  {
    id: 'faq-004',
    question: '고석희 목사님은 어떤 분인가요?',
    answer: '고석희 목사는 예수서원의 원장으로, 뉴욕에서의 오랜 목회 경험과 학문적 배경을 통해 현대인들이 직면한 영적, 지적 도전에 대한 해답을 제시합니다. 깊이 있는 신학적 통찰과 현대 철학에 대한 이해를 바탕으로 복음과 지성의 통합을 실천하고 있습니다.',
    category: 'general'
  },
  {
    id: 'faq-005',
    question: '연락처는 어떻게 되나요?',
    answer: '예수서원은 전화(516.277.2082)와 이메일(JesusChristAcademia@gmail.com)로 연락 가능합니다. 프로그램 문의, 참가 신청, 기타 궁금한 사항이 있으시면 언제든 연락해 주세요.',
    category: 'contact'
  },
  {
    id: 'faq-006',
    question: '프로그램 일정은 어떻게 되나요?',
    answer: '예수서원은 정기적인 캠프와 강의 프로그램을 운영합니다. 구체적인 일정은 공식 홈페이지(www.jesusacademia.org)에서 확인하실 수 있으며, 새로운 프로그램이 시작될 때마다 소셜미디어를 통해 공지됩니다.',
    category: 'program'
  },
  {
    id: 'faq-007',
    question: '소셜미디어 계정이 있나요?',
    answer: '네, 예수서원은 YouTube, Instagram, 공식 홈페이지를 통해 다양한 콘텐츠를 제공합니다. YouTube에서는 설교영상과 강의를, Instagram에서는 일상과 소식을 확인하실 수 있습니다.',
    category: 'contact'
  },
  {
    id: 'faq-008',
    question: '섬기는 분들은 누가 있나요?',
    answer: '예수서원은 고석희 목사를 중심으로 다양한 분야의 전문가들과 함께 섬기고 있습니다. 각 분야의 전문성을 바탕으로 깊이 있는 학습과 교제를 제공하며, 참가자들의 영적, 지적 성장을 돕고 있습니다.',
    category: 'general'
  },
  {
    id: 'faq-009',
    question: '운영방식은 어떻게 되나요?',
    answer: '예수서원은 캠프 형태의 집중 프로그램과 정기 강의를 통해 운영됩니다. 참가자들은 함께 기도하고, 학습하고, 교제하는 시간을 가지며, 현대 문명의 소음에서 벗어나 하나님의 창조 세계 속에서 진정한 지혜를 탐구할 수 있습니다.',
    category: 'program'
  },
  {
    id: 'faq-010',
    question: '교통편은 어떻게 되나요?',
    answer: '예수서원은 뉴욕 롱아일랜드의 Oyster Bay에 위치해 있어, 뉴욕 시내에서 차량으로 약 1시간 정도 소요됩니다. 대중교통을 이용하시는 경우, 롱아일랜드 철도(Long Island Rail Road)를 이용하여 접근 가능합니다.',
    category: 'location'
  }
];

export function getFaqByCategory(category: FAQ['category']): FAQ[] {
  return faqData.filter(faq => faq.category === category);
}

export function searchFaq(query: string): FAQ[] {
  const lowercaseQuery = query.toLowerCase();
  return faqData.filter(faq => 
    faq.question.toLowerCase().includes(lowercaseQuery) ||
    faq.answer.toLowerCase().includes(lowercaseQuery)
  );
} 