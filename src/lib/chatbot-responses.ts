export interface ChatbotResponse {
  keywords: string[];
  response: string;
  category: 'operation' | 'schedule' | 'cost' | 'location' | 'contact' | 'founder' | 'general';
}

export const chatbotResponses: ChatbotResponse[] = [
  {
    keywords: ['운영', '날짜', '시간', '언제'],
    response: '예수서원은 매주 토요일 오후 2시부터 6시까지 운영됩니다! 🕐\n\n뉴욕 Oyster Bay에서 진행되며, 고석희 목사님께서 직접 강의하십니다. 📚\n\n매주 토요일 오후에 만나요! 🙏',
    category: 'operation'
  },
  {
    keywords: ['2025', '캠프', '일정', '프로그램', '강의'],
    response: '2025년 예수서원 캠프는 다음과 같이 진행됩니다! 📅✨\n\n• 1월: 기독교 인문변증학 입문 🎯\n• 3월: 성경과 철학의 만남 📖\n• 6월: 현대사회와 기독교 윤리 🌟\n• 9월: 종교와 과학의 대화 🔬\n\n모든 캠프는 무료로 진행됩니다! 🎉',
    category: 'schedule'
  },
  {
    keywords: ['비용', '참가비', '돈', '무료', '가격'],
    response: '예수서원의 모든 프로그램은 무료로 진행됩니다! 🎁\n\n고석희 목사님의 헌신으로 운영되며, 참가비나 등록비가 전혀 없습니다. 💝\n\n언제든 자유롭게 참여하실 수 있어요! 🙌',
    category: 'cost'
  },
  {
    keywords: ['고석희', '목사', '설립자', '원장'],
    response: '고석희 목사님은 뉴욕에서 예수서원을 운영하시는 분으로, 기독교 인문변증학 전문가입니다! 👨‍🏫\n\n복음과 지성을 통합하는 독특한 접근법으로 많은 분들에게 영감을 주고 계십니다. ✨\n\n정말 존경받는 분이세요! 🙏',
    category: 'founder'
  },
  {
    keywords: ['위치', '어디', '주소', '장소'],
    response: '예수서원은 뉴욕 Oyster Bay에 위치해 있습니다! 🗺️\n\n정확한 주소와 교통편은 연락처를 통해 문의해주세요. 📍\n\n뉴욕에서 만나요! 🌆',
    category: 'location'
  },
  {
    keywords: ['연락처', '연락', '이메일', '전화', '소셜'],
    response: '예수서원 연락처는 다음과 같습니다! 📞\n\n• 이메일: jesusacademia@gmail.com 📧\n• 소셜미디어: 인스타그램, 유튜브 계정 운영 중 📱\n\n궁금한 점이 있으시면 언제든 연락주세요! 💬',
    category: 'contact'
  },
  {
    keywords: ['예수서원', '소개', '어떤', '무엇'],
    response: '예수서원은 복음과 지성의 통합을 추구하는 기독교 인문변증학 아카데미입니다! 🎓\n\n뉴욕에서 고석희 목사님께서 운영하시며, 현대인들이 직면한 영적, 지적 도전에 대한 해답을 제시합니다. 🌟\n\n복음과 지성이 만나는 특별한 공간이에요! ✨',
    category: 'general'
  },
  {
    keywords: ['무료', '비용', '참가'],
    response: '네, 예수서원의 모든 프로그램은 무료로 진행됩니다! 🎁\n\n참가비나 등록비가 전혀 없으니 언제든 자유롭게 참여하실 수 있어요! 💝\n\n무료지만 가치는 정말 크답니다! 🙌',
    category: 'cost'
  },
  {
    keywords: ['강의', '수업', '학습', '교육'],
    response: '예수서원에서는 기독교 인문변증학을 중심으로 한 다양한 강의가 진행됩니다! 📚\n\n성경과 철학, 현대사회와 기독교 윤리, 종교와 과학의 대화 등 깊이 있는 학습을 제공합니다. 🎯\n\n정말 의미 있는 시간이 될 거예요! ✨',
    category: 'general'
  }
];

export function getChatbotResponse(userInput: string): string {
  const input = userInput.toLowerCase();
  
  // 키워드 매칭
  for (const response of chatbotResponses) {
    for (const keyword of response.keywords) {
      if (input.includes(keyword)) {
        return response.response;
      }
    }
  }
  
  // 기본 응답
  return '죄송합니다. 예수서원에 대한 더 구체적인 질문을 해주시면 더 정확한 답변을 드릴 수 있습니다! 🤔\n\n운영 일정, 위치, 프로그램, 연락처 등에 대해 물어보세요! 💬\n\n아래 빠른 질문 버튼을 클릭하시면 자주 묻는 질문들을 확인하실 수 있어요! ✨';
}

export function getResponsesByCategory(category: ChatbotResponse['category']): ChatbotResponse[] {
  return chatbotResponses.filter(response => response.category === category);
}

export function searchResponses(query: string): ChatbotResponse[] {
  const searchTerm = query.toLowerCase();
  return chatbotResponses.filter(response => 
    response.keywords.some(keyword => keyword.includes(searchTerm)) ||
    response.response.toLowerCase().includes(searchTerm)
  );
} 