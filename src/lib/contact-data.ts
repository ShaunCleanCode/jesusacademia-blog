export interface ContactPerson {
  id: string;
  name: string;
  title: string;
  phone: string;
  country?: 'USA' | 'Korea';
  category: 'registration' | 'inquiry';
  description?: string;
  email?: string;
}

export interface ContactCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  contacts: ContactPerson[];
}

export const contactData: ContactCategory[] = [
  {
    id: 'registration',
    title: '수강신청',
    description: '프로그램 참가 신청 및 등록 관련 문의',
    icon: '📝',
    contacts: [
      {
        id: 'go-hwa-soon',
        name: '고화순',
        title: '사모',
        phone: '646-269-6824',
        country: 'USA',
        category: 'registration',
        description: '수강신청 및 등록 관련 업무 담당'
      },
      {
        id: 'kim-hyang-sook',
        name: '김향숙',
        title: '박사',
        phone: '201-600-7160',
        country: 'USA',
        category: 'registration',
        description: '학술 프로그램 등록 및 안내'
      },
      {
        id: 'go-ju-hyun',
        name: '고주현',
        title: '간사',
        phone: '646-708-1657',
        country: 'USA',
        category: 'registration',
        description: '일반 등록 및 행정 업무 담당'
      }
    ]
  },
  {
    id: 'inquiry',
    title: '강좌문의',
    description: '강의 내용, 일정, 기타 학술 관련 문의',
    icon: '🎓',
    contacts: [
      {
        id: 'lee-taek-rae',
        name: '이택래',
        title: '목사',
        phone: '512-660-8378',
        country: 'USA',
        category: 'inquiry',
        description: '미국 지역 강의 및 프로그램 문의'
      },
      {
        id: 'lee-yeon-hee',
        name: '이연희',
        title: '목사',
        phone: '010-6362-9456',
        country: 'Korea',
        category: 'inquiry',
        description: '한국 지역 강의 및 프로그램 문의'
      },
      {
        id: 'ma-min-ho',
        name: '마민호',
        title: '박사',
        phone: '010-5522-0004',
        country: 'Korea',
        category: 'inquiry',
        description: '학술 연구 및 강의 내용 문의'
      }
    ]
  }
];

export const generalContactInfo = {
  email: 'JesusChristAcademia@gmail.com',
  address: {
    street: '1330 Wolver Hollow Rd.',
    city: 'Oyster Bay',
    state: 'NY',
    zip: '11771',
    full: '1330 Wolver Hollow Rd., Oyster Bay, NY 11771'
  },
  mapUrl: 'https://www.google.com/maps/place/%EC%98%88%EC%88%98%EC%84%9C%EC%9B%90+Jesus+Academia/@40.8498531,-73.5758261,21z/data=!4m6!3m5!1s0x89c285dfb6b2f5a1:0x86371e7fb533e182!8m2!3d40.8489926!4d-73.5765775!16s%2Fg%2F11xsbxcg53?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D'
};

export const contactFAQs = [
  {
    question: '언제 연락하면 되나요?',
    answer: '평일 오전 9시부터 오후 6시까지 연락 가능합니다. 긴급한 경우 언제든 연락해 주세요.'
  },
  {
    question: '수강신청과 강좌문의의 차이가 무엇인가요?',
    answer: '수강신청은 프로그램 참가 등록 관련 업무이고, 강좌문의는 강의 내용이나 일정에 대한 질문입니다.'
  },
  {
    question: '해외에서도 참가할 수 있나요?',
    answer: '네, 미국과 한국에 담당자가 있어 해외 참가자도 원활하게 안내받을 수 있습니다.'
  }
];
